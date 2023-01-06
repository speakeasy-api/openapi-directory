package operations

import (
	"openapi/pkg/models/shared"
)

type PostQuoteDislikeQueryParams struct {
	QuoteID string `queryParam:"style=form,explode=true,name=quote_id"`
}

type PostQuoteDislikeSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PostQuoteDislikeRequest struct {
	QueryParams PostQuoteDislikeQueryParams
	Security    PostQuoteDislikeSecurity
}

type PostQuoteDislikeResponse struct {
	ContentType string
	StatusCode  int64
}
