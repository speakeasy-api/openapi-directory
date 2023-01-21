package shared

type CheckPatchStatusEnum string

const (
	CheckPatchStatusEnumActive   CheckPatchStatusEnum = "active"
	CheckPatchStatusEnumInactive CheckPatchStatusEnum = "inactive"
)

type CheckPatch struct {
	Description *string               `json:"description,omitempty"`
	Name        *string               `json:"name,omitempty"`
	Status      *CheckPatchStatusEnum `json:"status,omitempty"`
}
