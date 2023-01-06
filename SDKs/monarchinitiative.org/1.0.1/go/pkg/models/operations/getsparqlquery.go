package operations

import (
	"openapi/pkg/models/shared"
)

type GetSparqlQueryPathParams struct {
	Query string `pathParam:"style=simple,explode=false,name=query"`
}

type GetSparqlQueryRequest struct {
	PathParams GetSparqlQueryPathParams
}

type GetSparqlQueryResponse struct {
	Associations []shared.Association
	ContentType  string
	StatusCode   int64
}
