package operations

import (
	"openapi/pkg/models/shared"
)

type PostQuoteImageBackgroundTagsAddQueryParams struct {
	ID   string `queryParam:"style=form,explode=true,name=id"`
	Tags string `queryParam:"style=form,explode=true,name=tags"`
}

type PostQuoteImageBackgroundTagsAddSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PostQuoteImageBackgroundTagsAddRequest struct {
	QueryParams PostQuoteImageBackgroundTagsAddQueryParams
	Security    PostQuoteImageBackgroundTagsAddSecurity
}

type PostQuoteImageBackgroundTagsAddResponse struct {
	ContentType string
	StatusCode  int64
}
