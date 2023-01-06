package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteQuoteImageQueryParams struct {
	ID string `queryParam:"style=form,explode=true,name=id"`
}

type DeleteQuoteImageSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteQuoteImageRequest struct {
	QueryParams DeleteQuoteImageQueryParams
	Security    DeleteQuoteImageSecurity
}

type DeleteQuoteImageResponse struct {
	ContentType string
	StatusCode  int64
}
