package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateStackPathParams struct {
	StackID string `pathParam:"style=simple,explode=false,name=stack_id"`
}

type UpdateStackPatchStackRequestAdditionalResources struct {
	Kind             string  `json:"kind"`
	ResourceID       string  `json:"resourceID"`
	TemplateMetaName *string `json:"templateMetaName,omitempty"`
}

type UpdateStackPatchStackRequest struct {
	AdditionalResources []UpdateStackPatchStackRequestAdditionalResources `json:"additionalResources,omitempty"`
	Description         *string                                           `json:"description,omitempty"`
	Name                *string                                           `json:"name,omitempty"`
	TemplateURLs        []string                                          `json:"templateURLs,omitempty"`
}

type UpdateStackRequest struct {
	PathParams UpdateStackPathParams
	Request    UpdateStackPatchStackRequest `request:"mediaType=application/json"`
}

type UpdateStackResponse struct {
	ContentType string
	Error       *interface{}
	Stack       *shared.Stack
	StatusCode  int64
}
