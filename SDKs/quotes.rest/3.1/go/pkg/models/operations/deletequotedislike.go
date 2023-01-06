package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteQuoteDislikeQueryParams struct {
	QuoteID string `queryParam:"style=form,explode=true,name=quote_id"`
}

type DeleteQuoteDislikeSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteQuoteDislikeRequest struct {
	QueryParams DeleteQuoteDislikeQueryParams
	Security    DeleteQuoteDislikeSecurity
}

type DeleteQuoteDislikeResponse struct {
	ContentType string
	StatusCode  int64
}
