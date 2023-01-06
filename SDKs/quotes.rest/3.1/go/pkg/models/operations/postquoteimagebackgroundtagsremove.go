package operations

import (
	"openapi/pkg/models/shared"
)

type PostQuoteImageBackgroundTagsRemoveQueryParams struct {
	ID   string `queryParam:"style=form,explode=true,name=id"`
	Tags string `queryParam:"style=form,explode=true,name=tags"`
}

type PostQuoteImageBackgroundTagsRemoveSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PostQuoteImageBackgroundTagsRemoveRequest struct {
	QueryParams PostQuoteImageBackgroundTagsRemoveQueryParams
	Security    PostQuoteImageBackgroundTagsRemoveSecurity
}

type PostQuoteImageBackgroundTagsRemoveResponse struct {
	ContentType string
	StatusCode  int64
}
