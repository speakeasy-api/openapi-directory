package operations

import (
	"openapi/pkg/models/shared"
)

type GetStructuresStructuresGetQueryParams struct {
	APIHint        *string `queryParam:"style=form,explode=true,name=api_hint"`
	EmailAddress   *string `queryParam:"style=form,explode=true,name=email_address"`
	Filter         *string `queryParam:"style=form,explode=true,name=filter"`
	Include        *string `queryParam:"style=form,explode=true,name=include"`
	PageAbove      *int64  `queryParam:"style=form,explode=true,name=page_above"`
	PageBelow      *int64  `queryParam:"style=form,explode=true,name=page_below"`
	PageCursor     *int64  `queryParam:"style=form,explode=true,name=page_cursor"`
	PageLimit      *int64  `queryParam:"style=form,explode=true,name=page_limit"`
	PageNumber     *int64  `queryParam:"style=form,explode=true,name=page_number"`
	PageOffset     *int64  `queryParam:"style=form,explode=true,name=page_offset"`
	ResponseFields *string `queryParam:"style=form,explode=true,name=response_fields"`
	ResponseFormat *string `queryParam:"style=form,explode=true,name=response_format"`
	Sort           *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetStructuresStructuresGetRequest struct {
	QueryParams GetStructuresStructuresGetQueryParams
}

type GetStructuresStructuresGetResponse struct {
	ContentType           string
	ErrorResponse         *shared.ErrorResponse
	StatusCode            int64
	StructureResponseMany *shared.StructureResponseMany
}
