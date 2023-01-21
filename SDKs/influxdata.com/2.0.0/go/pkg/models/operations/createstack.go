package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStackPostStackRequest struct {
	Description *string  `json:"description,omitempty"`
	Name        *string  `json:"name,omitempty"`
	OrgID       *string  `json:"orgID,omitempty"`
	Urls        []string `json:"urls,omitempty"`
}

type CreateStackRequest struct {
	Request CreateStackPostStackRequest `request:"mediaType=application/json"`
}

type CreateStackResponse struct {
	ContentType string
	Error       *interface{}
	Stack       *shared.Stack
	StatusCode  int64
}
