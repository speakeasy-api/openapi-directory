package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteQshowQueryParams struct {
	ID string `queryParam:"style=form,explode=true,name=id"`
}

type DeleteQshowSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteQshowRequest struct {
	QueryParams DeleteQshowQueryParams
	Security    DeleteQshowSecurity
}

type DeleteQshowResponse struct {
	ContentType string
	StatusCode  int64
}
