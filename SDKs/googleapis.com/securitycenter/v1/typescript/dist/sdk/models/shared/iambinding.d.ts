import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The action that was performed on a Binding.
 */
export declare enum IamBindingActionEnum {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    Add = "ADD",
    Remove = "REMOVE"
}
/**
 * Represents a particular IAM binding, which captures a member's role addition, removal, or state.
 */
export declare class IamBinding extends SpeakeasyBase {
    /**
     * The action that was performed on a Binding.
     */
    action?: IamBindingActionEnum;
    /**
     * A single identity requesting access for a Cloud Platform resource, e.g. "foo@google.com".
     */
    member?: string;
    /**
     * Role that is assigned to "members". For example, "roles/viewer", "roles/editor", or "roles/owner".
     */
    role?: string;
}
