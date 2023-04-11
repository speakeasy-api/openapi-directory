import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The current state of the rbacrolebinding resource.
 */
export declare enum RBACRoleBindingLifecycleStateCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * RBACRoleBindingLifecycleState describes the state of a RbacRoleBinding resource.
 */
export declare class RBACRoleBindingLifecycleState extends SpeakeasyBase {
    /**
     * Output only. The current state of the rbacrolebinding resource.
     */
    code?: RBACRoleBindingLifecycleStateCodeEnum;
}
