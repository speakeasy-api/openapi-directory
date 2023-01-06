package operations

import (
	"openapi/pkg/models/shared"
)

type GetEvidenceGraphObjectPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEvidenceGraphObjectRequest struct {
	PathParams GetEvidenceGraphObjectPathParams
}

type GetEvidenceGraphObjectResponse struct {
	ContentType string
	Graphs      []shared.Graph
	StatusCode  int64
}
