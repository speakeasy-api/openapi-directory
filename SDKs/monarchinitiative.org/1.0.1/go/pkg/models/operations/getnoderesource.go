package operations

import (
	"openapi/pkg/models/shared"
)

type GetNodeResourcePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetNodeResourceRequest struct {
	PathParams GetNodeResourcePathParams
}

type GetNodeResourceResponse struct {
	BioObjects  []shared.BioObject
	ContentType string
	StatusCode  int64
}
