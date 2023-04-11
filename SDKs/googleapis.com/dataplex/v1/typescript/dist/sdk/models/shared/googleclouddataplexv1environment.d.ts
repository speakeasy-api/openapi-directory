import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1EnvironmentEndpoints } from "./googleclouddataplexv1environmentendpoints";
import { GoogleCloudDataplexV1EnvironmentInfrastructureSpec } from "./googleclouddataplexv1environmentinfrastructurespec";
import { GoogleCloudDataplexV1EnvironmentSessionSpec } from "./googleclouddataplexv1environmentsessionspec";
import { GoogleCloudDataplexV1EnvironmentSessionStatus } from "./googleclouddataplexv1environmentsessionstatus";
/**
 * Output only. Current state of the environment.
 */
export declare enum GoogleCloudDataplexV1EnvironmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}
/**
 * Environment represents a user-visible compute infrastructure for analytics within a lake.
 */
export declare class GoogleCloudDataplexV1Environment extends SpeakeasyBase {
    /**
     * Output only. Environment creation time.
     */
    createTime?: string;
    /**
     * Optional. Description of the environment.
     */
    description?: string;
    /**
     * Optional. User friendly display name.
     */
    displayName?: string;
    /**
     * URI Endpoints to access sessions associated with the Environment.
     */
    endpoints?: GoogleCloudDataplexV1EnvironmentEndpoints;
    /**
     * Configuration for the underlying infrastructure used to run workloads.
     */
    infrastructureSpec?: GoogleCloudDataplexV1EnvironmentInfrastructureSpec;
    /**
     * Optional. User defined labels for the environment.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The relative resource name of the environment, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/environment/{environment_id}
     */
    name?: string;
    /**
     * Configuration for sessions created for this environment.
     */
    sessionSpec?: GoogleCloudDataplexV1EnvironmentSessionSpec;
    /**
     * Status of sessions created for this environment.
     */
    sessionStatus?: GoogleCloudDataplexV1EnvironmentSessionStatus;
    /**
     * Output only. Current state of the environment.
     */
    state?: GoogleCloudDataplexV1EnvironmentStateEnum;
    /**
     * Output only. System generated globally unique ID for the environment. This ID will be different if the environment is deleted and re-created with the same name.
     */
    uid?: string;
    /**
     * Output only. The time when the environment was last updated.
     */
    updateTime?: string;
}
/**
 * Environment represents a user-visible compute infrastructure for analytics within a lake.
 */
export declare class GoogleCloudDataplexV1EnvironmentInput extends SpeakeasyBase {
    /**
     * Optional. Description of the environment.
     */
    description?: string;
    /**
     * Optional. User friendly display name.
     */
    displayName?: string;
    /**
     * Configuration for the underlying infrastructure used to run workloads.
     */
    infrastructureSpec?: GoogleCloudDataplexV1EnvironmentInfrastructureSpec;
    /**
     * Optional. User defined labels for the environment.
     */
    labels?: Record<string, string>;
    /**
     * Configuration for sessions created for this environment.
     */
    sessionSpec?: GoogleCloudDataplexV1EnvironmentSessionSpec;
}
