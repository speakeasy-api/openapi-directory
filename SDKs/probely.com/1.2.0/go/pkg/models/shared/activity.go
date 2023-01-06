package shared

import (
	"time"
)

type Activity struct {
	Change    *int64     `json:"change,omitempty"`
	Changed   *time.Time `json:"changed,omitempty"`
	ChangedBy *ChangedBy `json:"changed_by,omitempty"`
	Field     *string    `json:"field,omitempty"`
	OldValue  *string    `json:"old_value,omitempty"`
	Value     *string    `json:"value,omitempty"`
}
