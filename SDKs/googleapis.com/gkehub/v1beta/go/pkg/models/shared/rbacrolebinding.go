// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// RBACRoleBinding - RBACRoleBinding represents a rbacrolebinding across the Fleet
type RBACRoleBinding struct {
	// Output only. When the rbacrolebinding was created.
	CreateTime *string `json:"createTime,omitempty"`
	// Output only. When the rbacrolebinding was deleted.
	DeleteTime *string `json:"deleteTime,omitempty"`
	// group is the group, as seen by the kubernetes cluster.
	Group *string `json:"group,omitempty"`
	// The resource name for the rbacrolebinding `projects/{project}/locations/{location}/namespaces/{namespace}/rbacrolebindings/{rbacrolebinding}` or `projects/{project}/locations/{location}/memberships/{membership}/rbacrolebindings/{rbacrolebinding}`
	Name *string `json:"name,omitempty"`
	// Role is the type for Kubernetes roles
	Role *Role `json:"role,omitempty"`
	// RBACRoleBindingLifecycleState describes the state of a RbacRoleBinding resource.
	State *RBACRoleBindingLifecycleState `json:"state,omitempty"`
	// Output only. Google-generated UUID for this resource. This is unique across all rbacrolebinding resources. If a rbacrolebinding resource is deleted and another resource with the same name is created, it gets a different uid.
	UID *string `json:"uid,omitempty"`
	// Output only. When the rbacrolebinding was last updated.
	UpdateTime *string `json:"updateTime,omitempty"`
	// user is the name of the user as seen by the kubernetes cluster, example "alice" or "alice@domain.tld"
	User *string `json:"user,omitempty"`
}

// RBACRoleBindingInput - RBACRoleBinding represents a rbacrolebinding across the Fleet
type RBACRoleBindingInput struct {
	// group is the group, as seen by the kubernetes cluster.
	Group *string `json:"group,omitempty"`
	// The resource name for the rbacrolebinding `projects/{project}/locations/{location}/namespaces/{namespace}/rbacrolebindings/{rbacrolebinding}` or `projects/{project}/locations/{location}/memberships/{membership}/rbacrolebindings/{rbacrolebinding}`
	Name *string `json:"name,omitempty"`
	// Role is the type for Kubernetes roles
	Role *Role `json:"role,omitempty"`
	// user is the name of the user as seen by the kubernetes cluster, example "alice" or "alice@domain.tld"
	User *string `json:"user,omitempty"`
}
