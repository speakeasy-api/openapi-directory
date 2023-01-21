package operations

import (
	"openapi/pkg/models/shared"
)

type ListStacksQueryParams struct {
	Name    *string `queryParam:"style=form,explode=true,name=name"`
	OrgID   string  `queryParam:"style=form,explode=true,name=orgID"`
	StackID *string `queryParam:"style=form,explode=true,name=stackID"`
}

type ListStacks200ApplicationJSON struct {
	Stacks []shared.Stack `json:"stacks,omitempty"`
}

type ListStacksRequest struct {
	QueryParams ListStacksQueryParams
}

type ListStacksResponse struct {
	ContentType                        string
	Error                              *interface{}
	ListStacks200ApplicationJSONObject *ListStacks200ApplicationJSON
	StatusCode                         int64
}
