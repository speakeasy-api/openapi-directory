package shared

import (
	"time"
)

type User struct {
	Changed        *time.Time     `json:"changed,omitempty"`
	ChangedBy      *ChangedBy     `json:"changed_by,omitempty"`
	Email          *string        `json:"email,omitempty"`
	ID             *string        `json:"id,omitempty"`
	IsActive       *bool          `json:"is_active,omitempty"`
	IsAdmin        *bool          `json:"is_admin,omitempty"`
	IsBillingAdmin *bool          `json:"is_billing_admin,omitempty"`
	Name           *string        `json:"name,omitempty"`
	Title          *UserTitleEnum `json:"title,omitempty"`
}
