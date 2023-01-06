package operations

import (
	"openapi/pkg/models/shared"
)

type PostQuoteTagsAddQueryParams struct {
	ID   string `queryParam:"style=form,explode=true,name=id"`
	Tags string `queryParam:"style=form,explode=true,name=tags"`
}

type PostQuoteTagsAddSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PostQuoteTagsAddRequest struct {
	QueryParams PostQuoteTagsAddQueryParams
	Security    PostQuoteTagsAddSecurity
}

type PostQuoteTagsAddResponse struct {
	ContentType string
	StatusCode  int64
}
