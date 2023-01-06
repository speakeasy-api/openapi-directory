package operations

import (
	"openapi/pkg/models/shared"
)

type GetQodQueryParams struct {
	Category *string `queryParam:"style=form,explode=true,name=category"`
	Language *string `queryParam:"style=form,explode=true,name=language"`
}

type GetQodSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetQodRequest struct {
	QueryParams GetQodQueryParams
	Security    GetQodSecurity
}

type GetQodResponse struct {
	ContentType   string
	QuoteResponse *interface{}
	StatusCode    int64
}
