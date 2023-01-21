package shared

type AuthorizationPostRequestStatusEnum string

const (
	AuthorizationPostRequestStatusEnumActive   AuthorizationPostRequestStatusEnum = "active"
	AuthorizationPostRequestStatusEnumInactive AuthorizationPostRequestStatusEnum = "inactive"
)

type AuthorizationPostRequest struct {
	Description *string                             `json:"description,omitempty"`
	OrgID       string                              `json:"orgID"`
	Permissions []interface{}                       `json:"permissions"`
	Status      *AuthorizationPostRequestStatusEnum `json:"status,omitempty"`
	UserID      *string                             `json:"userID,omitempty"`
}
