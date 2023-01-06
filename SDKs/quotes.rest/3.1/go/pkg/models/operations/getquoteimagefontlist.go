package operations

import (
	"openapi/pkg/models/shared"
)

type GetQuoteImageFontListQueryParams struct {
	Start *int64 `queryParam:"style=form,explode=true,name=start"`
}

type GetQuoteImageFontListSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetQuoteImageFontListRequest struct {
	QueryParams GetQuoteImageFontListQueryParams
	Security    GetQuoteImageFontListSecurity
}

type GetQuoteImageFontListResponse struct {
	ContentType string
	StatusCode  int64
}
