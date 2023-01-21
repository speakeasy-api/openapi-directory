package shared

import (
	"time"
)

type SlackNotificationEndpointStatusEnum string

const (
	SlackNotificationEndpointStatusEnumActive   SlackNotificationEndpointStatusEnum = "active"
	SlackNotificationEndpointStatusEnumInactive SlackNotificationEndpointStatusEnum = "inactive"
)

type SlackNotificationEndpointLinks struct {
	Labels  *string `json:"labels,omitempty"`
	Members *string `json:"members,omitempty"`
	Owners  *string `json:"owners,omitempty"`
	Self    *string `json:"self,omitempty"`
}

type SlackNotificationEndpointInput struct {
	Description *string                              `json:"description,omitempty"`
	ID          *string                              `json:"id,omitempty"`
	Labels      []LabelInput                         `json:"labels,omitempty"`
	Name        string                               `json:"name"`
	OrgID       *string                              `json:"orgID,omitempty"`
	Status      *SlackNotificationEndpointStatusEnum `json:"status,omitempty"`
	Token       *string                              `json:"token,omitempty"`
	Type        NotificationEndpointTypeEnum         `json:"type"`
	URL         *string                              `json:"url,omitempty"`
	UserID      *string                              `json:"userID,omitempty"`
}

type SlackNotificationEndpoint struct {
	CreatedAt   *time.Time                           `json:"createdAt,omitempty"`
	Description *string                              `json:"description,omitempty"`
	ID          *string                              `json:"id,omitempty"`
	Labels      []Label                              `json:"labels,omitempty"`
	Links       *SlackNotificationEndpointLinks      `json:"links,omitempty"`
	Name        string                               `json:"name"`
	OrgID       *string                              `json:"orgID,omitempty"`
	Status      *SlackNotificationEndpointStatusEnum `json:"status,omitempty"`
	Token       *string                              `json:"token,omitempty"`
	Type        NotificationEndpointTypeEnum         `json:"type"`
	UpdatedAt   *time.Time                           `json:"updatedAt,omitempty"`
	URL         *string                              `json:"url,omitempty"`
	UserID      *string                              `json:"userID,omitempty"`
}
