package operations

import (
	"openapi/pkg/models/shared"
)

type PostQuoteImageFontTagsRemoveQueryParams struct {
	ID   string `queryParam:"style=form,explode=true,name=id"`
	Tags string `queryParam:"style=form,explode=true,name=tags"`
}

type PostQuoteImageFontTagsRemoveSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PostQuoteImageFontTagsRemoveRequest struct {
	QueryParams PostQuoteImageFontTagsRemoveQueryParams
	Security    PostQuoteImageFontTagsRemoveSecurity
}

type PostQuoteImageFontTagsRemoveResponse struct {
	ContentType string
	StatusCode  int64
}
