import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The current state of the MembershipBinding resource.
 */
export declare enum MembershipBindingLifecycleStateCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * MembershipBindingLifecycleState describes the state of a Binding resource.
 */
export declare class MembershipBindingLifecycleState extends SpeakeasyBase {
    /**
     * Output only. The current state of the MembershipBinding resource.
     */
    code?: MembershipBindingLifecycleStateCodeEnum;
}
