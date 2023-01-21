package shared

type ResourceOwnersLinks struct {
	Self *string `json:"self,omitempty"`
}

type ResourceOwners struct {
	Links *ResourceOwnersLinks `json:"links,omitempty"`
	Users []ResourceOwner      `json:"users,omitempty"`
}
