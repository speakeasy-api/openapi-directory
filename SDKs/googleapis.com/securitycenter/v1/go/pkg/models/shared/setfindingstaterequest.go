package shared

type SetFindingStateRequestStateEnum string

const (
	SetFindingStateRequestStateEnumStateUnspecified SetFindingStateRequestStateEnum = "STATE_UNSPECIFIED"
	SetFindingStateRequestStateEnumActive           SetFindingStateRequestStateEnum = "ACTIVE"
	SetFindingStateRequestStateEnumInactive         SetFindingStateRequestStateEnum = "INACTIVE"
)

// SetFindingStateRequest
// Request message for updating a finding's state. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}", "projects/{project_id}/sources/{source_id}/findings/{finding_id}".
type SetFindingStateRequest struct {
	StartTime *string                          `json:"startTime,omitempty"`
	State     *SetFindingStateRequestStateEnum `json:"state,omitempty"`
}
