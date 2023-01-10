package shared

import (
	"time"
)

// UserUpdateContentNotifications
// Notification settings
type UserUpdateContentNotifications struct {
	PhoneNumber *string `json:"phone_number,omitempty"`
	SmsEnabled  *bool   `json:"sms_enabled,omitempty"`
}

type UserUpdateContent struct {
	Birthday      *time.Time                      `json:"birthday,omitempty"`
	City          *string                         `json:"city,omitempty"`
	Country       *string                         `json:"country,omitempty"`
	Email         *string                         `json:"email,omitempty"`
	FirstName     *string                         `json:"first_name,omitempty"`
	ID            *int64                          `json:"id,omitempty"`
	LastName      *string                         `json:"last_name,omitempty"`
	Notifications *UserUpdateContentNotifications `json:"notifications,omitempty"`
	Notify        *bool                           `json:"notify,omitempty"`
	PaypalEmail   *string                         `json:"paypal_email,omitempty"`
	Phone         *string                         `json:"phone,omitempty"`
	Require1099   *bool                           `json:"require_1099,omitempty"`
	State         *string                         `json:"state,omitempty"`
	Street        *string                         `json:"street,omitempty"`
	UserGroups    []int64                         `json:"user_groups,omitempty"`
	Zip           *string                         `json:"zip,omitempty"`
}
