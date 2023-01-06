package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteQuoteLikeQueryParams struct {
	QuoteID string `queryParam:"style=form,explode=true,name=quote_id"`
}

type DeleteQuoteLikeSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteQuoteLikeRequest struct {
	QueryParams DeleteQuoteLikeQueryParams
	Security    DeleteQuoteLikeSecurity
}

type DeleteQuoteLikeResponse struct {
	ContentType string
	StatusCode  int64
}
