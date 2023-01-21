package shared

type ResourceOwnerLinks struct {
	Self *string `json:"self,omitempty"`
}

type ResourceOwnerRoleEnum string

const (
	ResourceOwnerRoleEnumOwner ResourceOwnerRoleEnum = "owner"
)

type ResourceOwnerStatusEnum string

const (
	ResourceOwnerStatusEnumActive   ResourceOwnerStatusEnum = "active"
	ResourceOwnerStatusEnumInactive ResourceOwnerStatusEnum = "inactive"
)

type ResourceOwner struct {
	ID      *string                  `json:"id,omitempty"`
	Links   *ResourceOwnerLinks      `json:"links,omitempty"`
	Name    string                   `json:"name"`
	OauthID *string                  `json:"oauthID,omitempty"`
	Role    *ResourceOwnerRoleEnum   `json:"role,omitempty"`
	Status  *ResourceOwnerStatusEnum `json:"status,omitempty"`
}
