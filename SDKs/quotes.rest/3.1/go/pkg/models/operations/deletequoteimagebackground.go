package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteQuoteImageBackgroundQueryParams struct {
	ID string `queryParam:"style=form,explode=true,name=id"`
}

type DeleteQuoteImageBackgroundSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteQuoteImageBackgroundRequest struct {
	QueryParams DeleteQuoteImageBackgroundQueryParams
	Security    DeleteQuoteImageBackgroundSecurity
}

type DeleteQuoteImageBackgroundResponse struct {
	ContentType string
	StatusCode  int64
}
