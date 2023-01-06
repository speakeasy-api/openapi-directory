package shared

type OsPolicyResourceFileResourceStateEnum string

const (
	OSPolicyResourceFileResourceStateEnumDesiredStateUnspecified OsPolicyResourceFileResourceStateEnum = "DESIRED_STATE_UNSPECIFIED"
	OSPolicyResourceFileResourceStateEnumPresent                 OsPolicyResourceFileResourceStateEnum = "PRESENT"
	OSPolicyResourceFileResourceStateEnumAbsent                  OsPolicyResourceFileResourceStateEnum = "ABSENT"
	OSPolicyResourceFileResourceStateEnumContentsMatch           OsPolicyResourceFileResourceStateEnum = "CONTENTS_MATCH"
)

// OsPolicyResourceFileResource
// A resource that manages the state of a file.
type OsPolicyResourceFileResource struct {
	Content     *string                                `json:"content,omitempty"`
	File        *OsPolicyResourceFile                  `json:"file,omitempty"`
	Path        *string                                `json:"path,omitempty"`
	Permissions *string                                `json:"permissions,omitempty"`
	State       *OsPolicyResourceFileResourceStateEnum `json:"state,omitempty"`
}
