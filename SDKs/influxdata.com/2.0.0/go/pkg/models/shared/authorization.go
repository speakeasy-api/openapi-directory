package shared

import (
	"time"
)

type AuthorizationLinks struct {
	Self *string `json:"self,omitempty"`
	User *string `json:"user,omitempty"`
}

type AuthorizationStatusEnum string

const (
	AuthorizationStatusEnumActive   AuthorizationStatusEnum = "active"
	AuthorizationStatusEnumInactive AuthorizationStatusEnum = "inactive"
)

type Authorization struct {
	CreatedAt   *time.Time               `json:"createdAt,omitempty"`
	Description *string                  `json:"description,omitempty"`
	ID          *string                  `json:"id,omitempty"`
	Links       *AuthorizationLinks      `json:"links,omitempty"`
	Org         *string                  `json:"org,omitempty"`
	OrgID       string                   `json:"orgID"`
	Permissions []interface{}            `json:"permissions"`
	Status      *AuthorizationStatusEnum `json:"status,omitempty"`
	Token       *string                  `json:"token,omitempty"`
	UpdatedAt   *time.Time               `json:"updatedAt,omitempty"`
	User        *string                  `json:"user,omitempty"`
	UserID      *string                  `json:"userID,omitempty"`
}
