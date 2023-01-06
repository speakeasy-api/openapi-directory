package operations

import (
	"openapi/pkg/models/shared"
)

type GetQuoteImageQueryParams struct {
	Binary *bool  `queryParam:"style=form,explode=true,name=binary"`
	ID     string `queryParam:"style=form,explode=true,name=id"`
}

type GetQuoteImageSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetQuoteImageRequest struct {
	QueryParams GetQuoteImageQueryParams
	Security    GetQuoteImageSecurity
}

type GetQuoteImageResponse struct {
	ContentType string
	StatusCode  int64
}
