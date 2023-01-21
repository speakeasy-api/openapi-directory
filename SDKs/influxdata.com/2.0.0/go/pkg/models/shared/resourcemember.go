package shared

type ResourceMemberLinks struct {
	Self *string `json:"self,omitempty"`
}

type ResourceMemberRoleEnum string

const (
	ResourceMemberRoleEnumMember ResourceMemberRoleEnum = "member"
)

type ResourceMemberStatusEnum string

const (
	ResourceMemberStatusEnumActive   ResourceMemberStatusEnum = "active"
	ResourceMemberStatusEnumInactive ResourceMemberStatusEnum = "inactive"
)

type ResourceMember struct {
	ID      *string                   `json:"id,omitempty"`
	Links   *ResourceMemberLinks      `json:"links,omitempty"`
	Name    string                    `json:"name"`
	OauthID *string                   `json:"oauthID,omitempty"`
	Role    *ResourceMemberRoleEnum   `json:"role,omitempty"`
	Status  *ResourceMemberStatusEnum `json:"status,omitempty"`
}
