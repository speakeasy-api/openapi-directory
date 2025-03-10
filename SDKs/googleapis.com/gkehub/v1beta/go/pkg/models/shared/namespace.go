// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// Namespace - Namespace represents a namespace across the Fleet
type Namespace struct {
	// Output only. When the namespace was created.
	CreateTime *string `json:"createTime,omitempty"`
	// Output only. When the namespace was deleted.
	DeleteTime *string `json:"deleteTime,omitempty"`
	// The resource name for the namespace `projects/{project}/locations/{location}/namespaces/{namespace}`
	Name *string `json:"name,omitempty"`
	// Required. Scope associated with the namespace
	Scope *string `json:"scope,omitempty"`
	// NamespaceLifecycleState describes the state of a Namespace resource.
	State *NamespaceLifecycleState `json:"state,omitempty"`
	// Output only. Google-generated UUID for this resource. This is unique across all namespace resources. If a namespace resource is deleted and another resource with the same name is created, it gets a different uid.
	UID *string `json:"uid,omitempty"`
	// Output only. When the namespace was last updated.
	UpdateTime *string `json:"updateTime,omitempty"`
}

// NamespaceInput - Namespace represents a namespace across the Fleet
type NamespaceInput struct {
	// The resource name for the namespace `projects/{project}/locations/{location}/namespaces/{namespace}`
	Name *string `json:"name,omitempty"`
	// Required. Scope associated with the namespace
	Scope *string `json:"scope,omitempty"`
}
