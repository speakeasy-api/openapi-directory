package shared

import (
	"time"
)

type HTTPNotificationEndpointAuthMethodEnum string

const (
	HTTPNotificationEndpointAuthMethodEnumNone   HTTPNotificationEndpointAuthMethodEnum = "none"
	HTTPNotificationEndpointAuthMethodEnumBasic  HTTPNotificationEndpointAuthMethodEnum = "basic"
	HTTPNotificationEndpointAuthMethodEnumBearer HTTPNotificationEndpointAuthMethodEnum = "bearer"
)

type HTTPNotificationEndpointMethodEnum string

const (
	HTTPNotificationEndpointMethodEnumPost HTTPNotificationEndpointMethodEnum = "POST"
	HTTPNotificationEndpointMethodEnumGet  HTTPNotificationEndpointMethodEnum = "GET"
	HTTPNotificationEndpointMethodEnumPut  HTTPNotificationEndpointMethodEnum = "PUT"
)

type HTTPNotificationEndpointStatusEnum string

const (
	HTTPNotificationEndpointStatusEnumActive   HTTPNotificationEndpointStatusEnum = "active"
	HTTPNotificationEndpointStatusEnumInactive HTTPNotificationEndpointStatusEnum = "inactive"
)

type HTTPNotificationEndpointLinks struct {
	Labels  *string `json:"labels,omitempty"`
	Members *string `json:"members,omitempty"`
	Owners  *string `json:"owners,omitempty"`
	Self    *string `json:"self,omitempty"`
}

type HTTPNotificationEndpointInput struct {
	AuthMethod      HTTPNotificationEndpointAuthMethodEnum `json:"authMethod"`
	ContentTemplate *string                                `json:"contentTemplate,omitempty"`
	Description     *string                                `json:"description,omitempty"`
	Headers         map[string]string                      `json:"headers,omitempty"`
	ID              *string                                `json:"id,omitempty"`
	Labels          []LabelInput                           `json:"labels,omitempty"`
	Method          HTTPNotificationEndpointMethodEnum     `json:"method"`
	Name            string                                 `json:"name"`
	OrgID           *string                                `json:"orgID,omitempty"`
	Password        *string                                `json:"password,omitempty"`
	Status          *HTTPNotificationEndpointStatusEnum    `json:"status,omitempty"`
	Token           *string                                `json:"token,omitempty"`
	Type            NotificationEndpointTypeEnum           `json:"type"`
	URL             string                                 `json:"url"`
	UserID          *string                                `json:"userID,omitempty"`
	Username        *string                                `json:"username,omitempty"`
}

type HTTPNotificationEndpoint struct {
	AuthMethod      HTTPNotificationEndpointAuthMethodEnum `json:"authMethod"`
	ContentTemplate *string                                `json:"contentTemplate,omitempty"`
	CreatedAt       *time.Time                             `json:"createdAt,omitempty"`
	Description     *string                                `json:"description,omitempty"`
	Headers         map[string]string                      `json:"headers,omitempty"`
	ID              *string                                `json:"id,omitempty"`
	Labels          []Label                                `json:"labels,omitempty"`
	Links           *HTTPNotificationEndpointLinks         `json:"links,omitempty"`
	Method          HTTPNotificationEndpointMethodEnum     `json:"method"`
	Name            string                                 `json:"name"`
	OrgID           *string                                `json:"orgID,omitempty"`
	Password        *string                                `json:"password,omitempty"`
	Status          *HTTPNotificationEndpointStatusEnum    `json:"status,omitempty"`
	Token           *string                                `json:"token,omitempty"`
	Type            NotificationEndpointTypeEnum           `json:"type"`
	UpdatedAt       *time.Time                             `json:"updatedAt,omitempty"`
	URL             string                                 `json:"url"`
	UserID          *string                                `json:"userID,omitempty"`
	Username        *string                                `json:"username,omitempty"`
}
