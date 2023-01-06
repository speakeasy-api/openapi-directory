package operations

import (
	"openapi/pkg/models/shared"
)

type PutQshowQueryParams struct {
	Description *string  `queryParam:"style=form,explode=true,name=description"`
	Tags        []string `queryParam:"style=form,explode=true,name=tags"`
	Title       string   `queryParam:"style=form,explode=true,name=title"`
}

type PutQshowSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PutQshowRequest struct {
	QueryParams PutQshowQueryParams
	Security    PutQshowSecurity
}

type PutQshowResponse struct {
	ContentType string
	StatusCode  int64
}
