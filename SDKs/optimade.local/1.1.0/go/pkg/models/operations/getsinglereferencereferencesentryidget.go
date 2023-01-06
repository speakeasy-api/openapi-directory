package operations

import (
	"openapi/pkg/models/shared"
)

type GetSingleReferenceReferencesEntryIDGetPathParams struct {
	EntryID string `pathParam:"style=simple,explode=false,name=entry_id"`
}

type GetSingleReferenceReferencesEntryIDGetQueryParams struct {
	APIHint        *string `queryParam:"style=form,explode=true,name=api_hint"`
	EmailAddress   *string `queryParam:"style=form,explode=true,name=email_address"`
	Include        *string `queryParam:"style=form,explode=true,name=include"`
	ResponseFields *string `queryParam:"style=form,explode=true,name=response_fields"`
	ResponseFormat *string `queryParam:"style=form,explode=true,name=response_format"`
}

type GetSingleReferenceReferencesEntryIDGetRequest struct {
	PathParams  GetSingleReferenceReferencesEntryIDGetPathParams
	QueryParams GetSingleReferenceReferencesEntryIDGetQueryParams
}

type GetSingleReferenceReferencesEntryIDGetResponse struct {
	ContentType          string
	ErrorResponse        *shared.ErrorResponse
	ReferenceResponseOne *shared.ReferenceResponseOne
	StatusCode           int64
}
