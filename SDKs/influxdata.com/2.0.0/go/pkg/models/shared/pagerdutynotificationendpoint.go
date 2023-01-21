package shared

import (
	"time"
)

type PagerDutyNotificationEndpointStatusEnum string

const (
	PagerDutyNotificationEndpointStatusEnumActive   PagerDutyNotificationEndpointStatusEnum = "active"
	PagerDutyNotificationEndpointStatusEnumInactive PagerDutyNotificationEndpointStatusEnum = "inactive"
)

type PagerDutyNotificationEndpointLinks struct {
	Labels  *string `json:"labels,omitempty"`
	Members *string `json:"members,omitempty"`
	Owners  *string `json:"owners,omitempty"`
	Self    *string `json:"self,omitempty"`
}

type PagerDutyNotificationEndpointInput struct {
	ClientURL   *string                                  `json:"clientURL,omitempty"`
	Description *string                                  `json:"description,omitempty"`
	ID          *string                                  `json:"id,omitempty"`
	Labels      []LabelInput                             `json:"labels,omitempty"`
	Name        string                                   `json:"name"`
	OrgID       *string                                  `json:"orgID,omitempty"`
	RoutingKey  string                                   `json:"routingKey"`
	Status      *PagerDutyNotificationEndpointStatusEnum `json:"status,omitempty"`
	Type        NotificationEndpointTypeEnum             `json:"type"`
	UserID      *string                                  `json:"userID,omitempty"`
}

type PagerDutyNotificationEndpoint struct {
	ClientURL   *string                                  `json:"clientURL,omitempty"`
	CreatedAt   *time.Time                               `json:"createdAt,omitempty"`
	Description *string                                  `json:"description,omitempty"`
	ID          *string                                  `json:"id,omitempty"`
	Labels      []Label                                  `json:"labels,omitempty"`
	Links       *PagerDutyNotificationEndpointLinks      `json:"links,omitempty"`
	Name        string                                   `json:"name"`
	OrgID       *string                                  `json:"orgID,omitempty"`
	RoutingKey  string                                   `json:"routingKey"`
	Status      *PagerDutyNotificationEndpointStatusEnum `json:"status,omitempty"`
	Type        NotificationEndpointTypeEnum             `json:"type"`
	UpdatedAt   *time.Time                               `json:"updatedAt,omitempty"`
	UserID      *string                                  `json:"userID,omitempty"`
}
