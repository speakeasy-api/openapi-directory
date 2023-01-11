import { SpeakeasyBase } from "../../../internal/utils";
import { BackendMetastore } from "./backendmetastore";
export declare enum FederationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Error = "ERROR"
}
/**
 * Represents a federation of multiple backend metastores.
**/
export declare class Federation extends SpeakeasyBase {
    backendMetastores?: Record<string, BackendMetastore>;
    createTime?: string;
    endpointUri?: string;
    labels?: Record<string, string>;
    name?: string;
    state?: FederationStateEnum;
    stateMessage?: string;
    uid?: string;
    updateTime?: string;
    version?: string;
}
/**
 * Represents a federation of multiple backend metastores.
**/
export declare class FederationInput extends SpeakeasyBase {
    backendMetastores?: Record<string, BackendMetastore>;
    labels?: Record<string, string>;
    name?: string;
    version?: string;
}
