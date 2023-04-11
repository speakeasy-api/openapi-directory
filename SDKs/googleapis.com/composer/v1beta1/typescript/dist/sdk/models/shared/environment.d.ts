import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentConfig, EnvironmentConfigInput } from "./environmentconfig";
/**
 * The current state of the environment.
 */
export declare enum EnvironmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Running = "RUNNING",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Error = "ERROR"
}
/**
 * An environment for running orchestration tasks.
 */
export declare class EnvironmentInput extends SpeakeasyBase {
    /**
     * Configuration information for an environment.
     */
    config?: EnvironmentConfigInput;
    /**
     * Optional. User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p{Ll}\p{Lo}{0,62} * Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size.
     */
    labels?: Record<string, string>;
    /**
     * The resource name of the environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" EnvironmentId must start with a lowercase letter followed by up to 63 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
     */
    name?: string;
    /**
     * The current state of the environment.
     */
    state?: EnvironmentStateEnum;
}
/**
 * An environment for running orchestration tasks.
 */
export declare class Environment extends SpeakeasyBase {
    /**
     * Configuration information for an environment.
     */
    config?: EnvironmentConfig;
    /**
     * Output only. The time at which this environment was created.
     */
    createTime?: string;
    /**
     * Optional. User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p{Ll}\p{Lo}{0,62} * Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size.
     */
    labels?: Record<string, string>;
    /**
     * The resource name of the environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" EnvironmentId must start with a lowercase letter followed by up to 63 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
     */
    name?: string;
    /**
     * The current state of the environment.
     */
    state?: EnvironmentStateEnum;
    /**
     * Output only. The time at which this environment was last modified.
     */
    updateTime?: string;
    /**
     * Output only. The UUID (Universally Unique IDentifier) associated with this environment. This value is generated when the environment is created.
     */
    uuid?: string;
}
