package operations

import (
	"openapi/pkg/models/shared"
)

type PostQuoteLikeQueryParams struct {
	QuoteID string `queryParam:"style=form,explode=true,name=quote_id"`
}

type PostQuoteLikeSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PostQuoteLikeRequest struct {
	QueryParams PostQuoteLikeQueryParams
	Security    PostQuoteLikeSecurity
}

type PostQuoteLikeResponse struct {
	ContentType string
	StatusCode  int64
}
