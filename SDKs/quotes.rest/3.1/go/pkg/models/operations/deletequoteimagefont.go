package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteQuoteImageFontQueryParams struct {
	ID string `queryParam:"style=form,explode=true,name=id"`
}

type DeleteQuoteImageFontSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteQuoteImageFontRequest struct {
	QueryParams DeleteQuoteImageFontQueryParams
	Security    DeleteQuoteImageFontSecurity
}

type DeleteQuoteImageFontResponse struct {
	ContentType string
	StatusCode  int64
}
