package operations

import (
	"openapi/pkg/models/shared"
)

type ValidateQueryParams struct {
	ID  int64    `queryParam:"style=form,explode=true,name=id"`
	Tag []string `queryParam:"style=form,explode=true,name=tag"`
}

type ValidateHeaders struct {
	UserAgent *string `header:"style=simple,explode=false,name=user-agent"`
}

type ValidateRequest struct {
	QueryParams ValidateQueryParams
	Headers     ValidateHeaders
}

type ValidateResponse struct {
	ContentType  string
	StatusCode   int64
	TestValidate *shared.TestValidate
}
