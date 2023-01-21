package shared

import (
	"time"
)

type TelegramNotificationEndpointStatusEnum string

const (
	TelegramNotificationEndpointStatusEnumActive   TelegramNotificationEndpointStatusEnum = "active"
	TelegramNotificationEndpointStatusEnumInactive TelegramNotificationEndpointStatusEnum = "inactive"
)

type TelegramNotificationEndpointLinks struct {
	Labels  *string `json:"labels,omitempty"`
	Members *string `json:"members,omitempty"`
	Owners  *string `json:"owners,omitempty"`
	Self    *string `json:"self,omitempty"`
}

type TelegramNotificationEndpointInput struct {
	Channel     string                                  `json:"channel"`
	Description *string                                 `json:"description,omitempty"`
	ID          *string                                 `json:"id,omitempty"`
	Labels      []LabelInput                            `json:"labels,omitempty"`
	Name        string                                  `json:"name"`
	OrgID       *string                                 `json:"orgID,omitempty"`
	Status      *TelegramNotificationEndpointStatusEnum `json:"status,omitempty"`
	Token       string                                  `json:"token"`
	Type        NotificationEndpointTypeEnum            `json:"type"`
	UserID      *string                                 `json:"userID,omitempty"`
}

type TelegramNotificationEndpoint struct {
	Channel     string                                  `json:"channel"`
	CreatedAt   *time.Time                              `json:"createdAt,omitempty"`
	Description *string                                 `json:"description,omitempty"`
	ID          *string                                 `json:"id,omitempty"`
	Labels      []Label                                 `json:"labels,omitempty"`
	Links       *TelegramNotificationEndpointLinks      `json:"links,omitempty"`
	Name        string                                  `json:"name"`
	OrgID       *string                                 `json:"orgID,omitempty"`
	Status      *TelegramNotificationEndpointStatusEnum `json:"status,omitempty"`
	Token       string                                  `json:"token"`
	Type        NotificationEndpointTypeEnum            `json:"type"`
	UpdatedAt   *time.Time                              `json:"updatedAt,omitempty"`
	UserID      *string                                 `json:"userID,omitempty"`
}
