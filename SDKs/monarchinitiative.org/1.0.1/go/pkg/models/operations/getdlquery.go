package operations

import (
	"openapi/pkg/models/shared"
)

type GetDlQueryPathParams struct {
	Query string `pathParam:"style=simple,explode=false,name=query"`
}

type GetDlQueryRequest struct {
	PathParams GetDlQueryPathParams
}

type GetDlQueryResponse struct {
	Associations []shared.Association
	ContentType  string
	StatusCode   int64
}
