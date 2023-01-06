package operations

import (
	"openapi/pkg/models/shared"
)

type GetQuoteImageBackgroundListQueryParams struct {
	Start *int64 `queryParam:"style=form,explode=true,name=start"`
}

type GetQuoteImageBackgroundListSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetQuoteImageBackgroundListRequest struct {
	QueryParams GetQuoteImageBackgroundListQueryParams
	Security    GetQuoteImageBackgroundListSecurity
}

type GetQuoteImageBackgroundListResponse struct {
	ContentType string
	StatusCode  int64
}
