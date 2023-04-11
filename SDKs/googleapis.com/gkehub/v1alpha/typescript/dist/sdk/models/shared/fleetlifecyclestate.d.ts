import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The current state of the Fleet resource.
 */
export declare enum FleetLifecycleStateCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * FleetLifecycleState describes the state of a Fleet resource.
 */
export declare class FleetLifecycleState extends SpeakeasyBase {
    /**
     * Output only. The current state of the Fleet resource.
     */
    code?: FleetLifecycleStateCodeEnum;
}
