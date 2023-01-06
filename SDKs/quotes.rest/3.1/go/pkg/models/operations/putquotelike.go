package operations

import (
	"openapi/pkg/models/shared"
)

type PutQuoteLikeQueryParams struct {
	QuoteID string `queryParam:"style=form,explode=true,name=quote_id"`
}

type PutQuoteLikeSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PutQuoteLikeRequest struct {
	QueryParams PutQuoteLikeQueryParams
	Security    PutQuoteLikeSecurity
}

type PutQuoteLikeResponse struct {
	ContentType string
	StatusCode  int64
}
