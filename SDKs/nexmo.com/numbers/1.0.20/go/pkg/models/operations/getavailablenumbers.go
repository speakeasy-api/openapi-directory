package operations

import (
	"openapi/pkg/models/shared"
)

type GetAvailableNumbersQueryParams struct {
	Country       string                    `queryParam:"style=form,explode=true,name=country"`
	Features      *shared.SearchPatternEnum `queryParam:"style=form,explode=true,name=features"`
	Index         *int64                    `queryParam:"style=form,explode=true,name=index"`
	Pattern       *string                   `queryParam:"style=form,explode=true,name=pattern"`
	SearchPattern *int64                    `queryParam:"style=form,explode=true,name=search_pattern"`
	Size          *int64                    `queryParam:"style=form,explode=true,name=size"`
	Type          *shared.TypeEnum          `queryParam:"style=form,explode=true,name=type"`
}

type GetAvailableNumbersRequest struct {
	QueryParams GetAvailableNumbersQueryParams
}

type GetAvailableNumbersResponse struct {
	Body                []byte
	ContentType         string
	StatusCode          int64
	AccountUnauthorized *shared.AccountUnauthorized
	AvailableNumbers    *shared.AvailableNumbers
}
