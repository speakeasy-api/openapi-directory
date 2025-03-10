package shared

import (
	"time"
)

type PreviewDeployedDevicesFleet struct {
	AccountSid           *string                `json:"account_sid,omitempty"`
	DateCreated          *time.Time             `json:"date_created,omitempty"`
	DateUpdated          *time.Time             `json:"date_updated,omitempty"`
	DefaultDeploymentSid *string                `json:"default_deployment_sid,omitempty"`
	FriendlyName         *string                `json:"friendly_name,omitempty"`
	Links                map[string]interface{} `json:"links,omitempty"`
	Sid                  *string                `json:"sid,omitempty"`
	UniqueName           *string                `json:"unique_name,omitempty"`
	URL                  *string                `json:"url,omitempty"`
}
