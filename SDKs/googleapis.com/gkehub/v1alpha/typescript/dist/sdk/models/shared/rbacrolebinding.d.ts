import { SpeakeasyBase } from "../../../internal/utils";
import { RBACRoleBindingLifecycleState } from "./rbacrolebindinglifecyclestate";
import { Role } from "./role";
/**
 * RBACRoleBinding represents a rbacrolebinding across the Fleet
 */
export declare class RBACRoleBinding extends SpeakeasyBase {
    /**
     * Output only. When the rbacrolebinding was created.
     */
    createTime?: string;
    /**
     * Output only. When the rbacrolebinding was deleted.
     */
    deleteTime?: string;
    /**
     * group is the group, as seen by the kubernetes cluster.
     */
    group?: string;
    /**
     * The resource name for the rbacrolebinding `projects/{project}/locations/{location}/namespaces/{namespace}/rbacrolebindings/{rbacrolebinding}` or `projects/{project}/locations/{location}/memberships/{membership}/rbacrolebindings/{rbacrolebinding}`
     */
    name?: string;
    /**
     * Role is the type for Kubernetes roles
     */
    role?: Role;
    /**
     * RBACRoleBindingLifecycleState describes the state of a RbacRoleBinding resource.
     */
    state?: RBACRoleBindingLifecycleState;
    /**
     * Output only. Google-generated UUID for this resource. This is unique across all rbacrolebinding resources. If a rbacrolebinding resource is deleted and another resource with the same name is created, it gets a different uid.
     */
    uid?: string;
    /**
     * Output only. When the rbacrolebinding was last updated.
     */
    updateTime?: string;
    /**
     * user is the name of the user as seen by the kubernetes cluster, example "alice" or "alice@domain.tld"
     */
    user?: string;
}
/**
 * RBACRoleBinding represents a rbacrolebinding across the Fleet
 */
export declare class RBACRoleBindingInput extends SpeakeasyBase {
    /**
     * group is the group, as seen by the kubernetes cluster.
     */
    group?: string;
    /**
     * The resource name for the rbacrolebinding `projects/{project}/locations/{location}/namespaces/{namespace}/rbacrolebindings/{rbacrolebinding}` or `projects/{project}/locations/{location}/memberships/{membership}/rbacrolebindings/{rbacrolebinding}`
     */
    name?: string;
    /**
     * Role is the type for Kubernetes roles
     */
    role?: Role;
    /**
     * user is the name of the user as seen by the kubernetes cluster, example "alice" or "alice@domain.tld"
     */
    user?: string;
}
