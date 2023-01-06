package shared

type UserGroup struct {
	CorporateID *int64   `json:"corporate_id,omitempty"`
	ID          *int64   `json:"id,omitempty"`
	Name        *string  `json:"name,omitempty"`
	Permissions []string `json:"permissions,omitempty"`
}
