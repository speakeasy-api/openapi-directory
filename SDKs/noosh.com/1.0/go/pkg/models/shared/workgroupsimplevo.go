// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// WorkgroupSimpleVO - Java type: com.noosh.nooshapi.vo.WorkgroupSimpleVO
type WorkgroupSimpleVO struct {
	IsDefault *bool `json:"is_default,omitempty"`
	// Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO
	ParentWorkgroup *WorkgroupBaseVO `json:"parent_workgroup,omitempty"`
	WorkgroupID     *int64           `json:"workgroup_id,omitempty"`
	WorkgroupName   *string          `json:"workgroup_name,omitempty"`
}
