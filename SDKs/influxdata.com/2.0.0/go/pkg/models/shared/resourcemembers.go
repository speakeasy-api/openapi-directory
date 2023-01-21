package shared

type ResourceMembersLinks struct {
	Self *string `json:"self,omitempty"`
}

type ResourceMembers struct {
	Links *ResourceMembersLinks `json:"links,omitempty"`
	Users []ResourceMember      `json:"users,omitempty"`
}
