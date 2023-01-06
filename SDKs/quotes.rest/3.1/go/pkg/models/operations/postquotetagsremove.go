package operations

import (
	"openapi/pkg/models/shared"
)

type PostQuoteTagsRemoveQueryParams struct {
	ID   string `queryParam:"style=form,explode=true,name=id"`
	Tags string `queryParam:"style=form,explode=true,name=tags"`
}

type PostQuoteTagsRemoveSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PostQuoteTagsRemoveRequest struct {
	QueryParams PostQuoteTagsRemoveQueryParams
	Security    PostQuoteTagsRemoveSecurity
}

type PostQuoteTagsRemoveResponse struct {
	ContentType string
	StatusCode  int64
}
