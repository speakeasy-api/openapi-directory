package shared

type UsersLinks struct {
	Self *string `json:"self,omitempty"`
}

type Users struct {
	Links *UsersLinks   `json:"links,omitempty"`
	Users []interface{} `json:"users,omitempty"`
}
