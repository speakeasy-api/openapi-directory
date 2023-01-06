package shared

type UserGroupList struct {
	Meta       *PagingMeta `json:"meta,omitempty"`
	UserGroups []UserGroup `json:"user_groups,omitempty"`
}
