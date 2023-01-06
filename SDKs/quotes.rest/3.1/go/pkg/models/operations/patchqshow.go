package operations

import (
	"openapi/pkg/models/shared"
)

type PatchQshowQueryParams struct {
	Description *string  `queryParam:"style=form,explode=true,name=description"`
	ID          string   `queryParam:"style=form,explode=true,name=id"`
	Tags        []string `queryParam:"style=form,explode=true,name=tags"`
	Title       *string  `queryParam:"style=form,explode=true,name=title"`
}

type PatchQshowSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PatchQshowRequest struct {
	QueryParams PatchQshowQueryParams
	Security    PatchQshowSecurity
}

type PatchQshowResponse struct {
	ContentType string
	StatusCode  int64
}
