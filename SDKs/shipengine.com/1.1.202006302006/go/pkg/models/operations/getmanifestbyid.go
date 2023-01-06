package operations

import (
	"openapi/pkg/models/shared"
)

type GetManifestByIDPathParams struct {
	ManifestID string `pathParam:"style=simple,explode=false,name=manifest_id"`
}

type GetManifestByIDRequest struct {
	PathParams GetManifestByIDPathParams
}

type GetManifestByIDResponse struct {
	ContentType                 string
	StatusCode                  int64
	ErrorResponseBody           *shared.ErrorResponseBody
	GetManifestByIDResponseBody *shared.GetManifestByIDResponseBody
}
