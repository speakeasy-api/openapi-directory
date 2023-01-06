package operations

import (
	"openapi/pkg/models/shared"
)

type GetSingleStructureStructuresEntryIDGetPathParams struct {
	EntryID string `pathParam:"style=simple,explode=false,name=entry_id"`
}

type GetSingleStructureStructuresEntryIDGetQueryParams struct {
	APIHint        *string `queryParam:"style=form,explode=true,name=api_hint"`
	EmailAddress   *string `queryParam:"style=form,explode=true,name=email_address"`
	Include        *string `queryParam:"style=form,explode=true,name=include"`
	ResponseFields *string `queryParam:"style=form,explode=true,name=response_fields"`
	ResponseFormat *string `queryParam:"style=form,explode=true,name=response_format"`
}

type GetSingleStructureStructuresEntryIDGetRequest struct {
	PathParams  GetSingleStructureStructuresEntryIDGetPathParams
	QueryParams GetSingleStructureStructuresEntryIDGetQueryParams
}

type GetSingleStructureStructuresEntryIDGetResponse struct {
	ContentType          string
	ErrorResponse        *shared.ErrorResponse
	StatusCode           int64
	StructureResponseOne *shared.StructureResponseOne
}
