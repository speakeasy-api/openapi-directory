package shared

type UserList struct {
	Meta  *PagingMeta `json:"meta,omitempty"`
	Users []User      `json:"users,omitempty"`
}
