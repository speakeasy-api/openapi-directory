package shared

import (
	"time"
)

type UserClientCorporate struct {
	Email *string `json:"email,omitempty"`
	ID    *int64  `json:"id,omitempty"`
	Logo  *string `json:"logo,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type UserClient struct {
	Corporate *UserClientCorporate `json:"corporate,omitempty"`
	Nps       *float32             `json:"nps,omitempty"`
	Subjects  map[string]int64     `json:"subjects,omitempty"`
}

type UserVendor struct {
	CanWorkManualFiles *bool          `json:"can_work_manual_files,omitempty"`
	IsFrozen           *bool          `json:"is_frozen,omitempty"`
	IsProofreader      *bool          `json:"is_proofreader,omitempty"`
	LanguagePairs      []LanguagePair `json:"language_pairs,omitempty"`
	NativeLanguage     *string        `json:"native_language,omitempty"`
	PaypalEmail        *string        `json:"paypal_email,omitempty"`
	Require1099        *bool          `json:"require_1099,omitempty"`
	Tags               []string       `json:"tags,omitempty"`
	TmsUserName        *string        `json:"tms_user_name,omitempty"`
}

type User struct {
	Billing            *BillingAddress `json:"billing,omitempty"`
	Birthday           *time.Time      `json:"birthday,omitempty"`
	CanWorkManualFiles *bool           `json:"can_work_manual_files,omitempty"`
	City               *string         `json:"city,omitempty"`
	Client             *UserClient     `json:"client,omitempty"`
	CorporateID        *int64          `json:"corporate_id,omitempty"`
	Country            *string         `json:"country,omitempty"`
	CreatedAt          *int64          `json:"created_at,omitempty"`
	DoNotContact       *bool           `json:"do_not_contact,omitempty"`
	Email              *string         `json:"email,omitempty"`
	FirstName          *string         `json:"first_name,omitempty"`
	HasPwd             *bool           `json:"has_pwd,omitempty"`
	ID                 *int64          `json:"id,omitempty"`
	IsClient           *bool           `json:"is_client,omitempty"`
	IsDeveloper        *bool           `json:"is_developer,omitempty"`
	IsProofreader      *bool           `json:"is_proofreader,omitempty"`
	IsProspect         *bool           `json:"is_prospect,omitempty"`
	IsSalesPerson      *bool           `json:"is_sales_person,omitempty"`
	IsVendor           *bool           `json:"is_vendor,omitempty"`
	LanguagePairs      []LanguagePair  `json:"language_pairs,omitempty"`
	LastName           *string         `json:"last_name,omitempty"`
	LastSeenOnlineAt   *int64          `json:"last_seen_online_at,omitempty"`
	Links              *UserLinks      `json:"links,omitempty"`
	Locale             *string         `json:"locale,omitempty"`
	Mailing            *Address        `json:"mailing,omitempty"`
	Name               *string         `json:"name,omitempty"`
	NativeLanguage     *string         `json:"native_language,omitempty"`
	Nps                *float32        `json:"nps,omitempty"`
	PhoneNumber        *string         `json:"phone_number,omitempty"`
	ProfilePicturePath *string         `json:"profile_picture_path,omitempty"`
	SocialMedia        *SocialMedia    `json:"social_media,omitempty"`
	State              *string         `json:"state,omitempty"`
	Status             *string         `json:"status,omitempty"`
	Street             *string         `json:"street,omitempty"`
	Timezone           *string         `json:"timezone,omitempty"`
	TmsUserName        *string         `json:"tms_user_name,omitempty"`
	UserGroups         []UserGroup     `json:"user_groups,omitempty"`
	Vendor             *UserVendor     `json:"vendor,omitempty"`
	ZipCode            *string         `json:"zip_code,omitempty"`
}
