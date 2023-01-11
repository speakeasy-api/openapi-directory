import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentConfigInput } from "./environmentconfig";
import { EnvironmentConfig } from "./environmentconfig";
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
**/
export declare class EnvironmentInput extends SpeakeasyBase {
    config?: EnvironmentConfigInput;
    createTime?: string;
    labels?: Record<string, string>;
    name?: string;
    state?: EnvironmentStateEnum;
    updateTime?: string;
    uuid?: string;
}
/**
 * An environment for running orchestration tasks.
**/
export declare class Environment extends SpeakeasyBase {
    config?: EnvironmentConfig;
    createTime?: string;
    labels?: Record<string, string>;
    name?: string;
    state?: EnvironmentStateEnum;
    updateTime?: string;
    uuid?: string;
}
