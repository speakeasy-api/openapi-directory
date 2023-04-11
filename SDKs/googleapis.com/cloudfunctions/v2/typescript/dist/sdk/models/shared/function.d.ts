import { SpeakeasyBase } from "../../../internal/utils";
import { BuildConfig, BuildConfigInput } from "./buildconfig";
import { EventTrigger, EventTriggerInput } from "./eventtrigger";
import { GoogleCloudFunctionsV2StateMessage } from "./googlecloudfunctionsv2statemessage";
import { ServiceConfig, ServiceConfigInput } from "./serviceconfig";
/**
 * Describe whether the function is 1st Gen or 2nd Gen.
 */
export declare enum FunctionEnvironmentEnum {
    EnvironmentUnspecified = "ENVIRONMENT_UNSPECIFIED",
    Gen1 = "GEN_1",
    Gen2 = "GEN_2"
}
/**
 * Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations.
 */
export declare class FunctionInput extends SpeakeasyBase {
    /**
     * Describes the Build step of the function that builds a container from the given source.
     */
    buildConfig?: BuildConfigInput;
    /**
     * User-provided description of a function.
     */
    description?: string;
    /**
     * Describe whether the function is 1st Gen or 2nd Gen.
     */
    environment?: FunctionEnvironmentEnum;
    /**
     * Describes EventTrigger, used to request events to be sent from another service.
     */
    eventTrigger?: EventTriggerInput;
    /**
     * Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.
     */
    kmsKeyName?: string;
    /**
     * Labels associated with this Cloud Function.
     */
    labels?: Record<string, string>;
    /**
     * A user-defined name of the function. Function names must be unique globally and match pattern `projects/* /locations/* /functions/*`
     */
    name?: string;
    /**
     * Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). Next tag: 23
     */
    serviceConfig?: ServiceConfigInput;
}
/**
 * Output only. State of the function.
 */
export declare enum FunctionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Failed = "FAILED",
    Deploying = "DEPLOYING",
    Deleting = "DELETING",
    Unknown = "UNKNOWN"
}
/**
 * Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations.
 */
export declare class FunctionT extends SpeakeasyBase {
    /**
     * Describes the Build step of the function that builds a container from the given source.
     */
    buildConfig?: BuildConfig;
    /**
     * User-provided description of a function.
     */
    description?: string;
    /**
     * Describe whether the function is 1st Gen or 2nd Gen.
     */
    environment?: FunctionEnvironmentEnum;
    /**
     * Describes EventTrigger, used to request events to be sent from another service.
     */
    eventTrigger?: EventTrigger;
    /**
     * Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.
     */
    kmsKeyName?: string;
    /**
     * Labels associated with this Cloud Function.
     */
    labels?: Record<string, string>;
    /**
     * A user-defined name of the function. Function names must be unique globally and match pattern `projects/* /locations/* /functions/*`
     */
    name?: string;
    /**
     * Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). Next tag: 23
     */
    serviceConfig?: ServiceConfig;
    /**
     * Output only. State of the function.
     */
    state?: FunctionStateEnum;
    /**
     * Output only. State Messages for this Cloud Function.
     */
    stateMessages?: GoogleCloudFunctionsV2StateMessage[];
    /**
     * Output only. The last update timestamp of a Cloud Function.
     */
    updateTime?: string;
    /**
     * Output only. The deployed url for the function.
     */
    url?: string;
}
