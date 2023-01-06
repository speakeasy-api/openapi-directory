package operations

import (
	"openapi/pkg/models/shared"
)

type PutQuoteDislikeQueryParams struct {
	QuoteID string `queryParam:"style=form,explode=true,name=quote_id"`
}

type PutQuoteDislikeSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PutQuoteDislikeRequest struct {
	QueryParams PutQuoteDislikeQueryParams
	Security    PutQuoteDislikeSecurity
}

type PutQuoteDislikeResponse struct {
	ContentType string
	StatusCode  int64
}
