package shared

type SalesActivity struct {
	Body      *string `json:"body,omitempty"`
	CreatedAt *int64  `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	Type      *string `json:"type,omitempty"`
}
