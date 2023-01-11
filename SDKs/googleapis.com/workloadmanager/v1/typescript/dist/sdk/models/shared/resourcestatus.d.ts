import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ResourceStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING"
}
/**
 * Message describing resource status
**/
export declare class ResourceStatus extends SpeakeasyBase {
    rulesNewerVersions?: string[];
    state?: ResourceStatusStateEnum;
}
