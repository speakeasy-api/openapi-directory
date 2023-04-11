import { SpeakeasyBase } from "../../../internal/utils";
/**
 * State of the resource
 */
export declare enum ResourceStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING"
}
/**
 * Message describing resource status
 */
export declare class ResourceStatus extends SpeakeasyBase {
    /**
     * the new version of rule id if exists
     */
    rulesNewerVersions?: string[];
    /**
     * State of the resource
     */
    state?: ResourceStatusStateEnum;
}
