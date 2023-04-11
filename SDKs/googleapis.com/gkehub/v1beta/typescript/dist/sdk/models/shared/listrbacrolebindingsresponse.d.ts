import { SpeakeasyBase } from "../../../internal/utils";
import { RBACRoleBinding } from "./rbacrolebinding";
/**
 * List of RBACRoleBindings.
 */
export declare class ListRBACRoleBindingsResponse extends SpeakeasyBase {
    /**
     * A token to request the next page of resources from the `ListRBACRoleBindings` method. The value of an empty string means that there are no more resources to return.
     */
    nextPageToken?: string;
    /**
     * The list of RBACRoleBindings
     */
    rbacrolebindings?: RBACRoleBinding[];
}
