package operations

import (
	"openapi/pkg/models/shared"
)

type GetQuoteListQueryParams struct {
	Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
	Start *int32 `queryParam:"style=form,explode=true,name=start"`
}

type GetQuoteListSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetQuoteListRequest struct {
	QueryParams GetQuoteListQueryParams
	Security    GetQuoteListSecurity
}

type GetQuoteListResponse struct {
	ContentType string
	StatusCode  int64
}
