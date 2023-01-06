package operations

import (
	"openapi/pkg/models/shared"
)

type PostQuoteImageFontTagsAddQueryParams struct {
	ID   string `queryParam:"style=form,explode=true,name=id"`
	Tags string `queryParam:"style=form,explode=true,name=tags"`
}

type PostQuoteImageFontTagsAddSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PostQuoteImageFontTagsAddRequest struct {
	QueryParams PostQuoteImageFontTagsAddQueryParams
	Security    PostQuoteImageFontTagsAddSecurity
}

type PostQuoteImageFontTagsAddResponse struct {
	ContentType string
	StatusCode  int64
}
