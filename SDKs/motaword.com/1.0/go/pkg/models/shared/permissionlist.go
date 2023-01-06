package shared

type PermissionList struct {
	Meta        *PagingMeta `json:"meta,omitempty"`
	Permissions []string    `json:"permissions,omitempty"`
}
