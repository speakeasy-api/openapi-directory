package operations

import (
	"openapi/pkg/models/shared"
)

type PostSimCompareRequest struct {
	Request shared.CompareInput `request:"mediaType=application/json"`
}

type PostSimCompareResponse struct {
	ContentType string
	SimResult   *shared.SimResult
	StatusCode  int64
}
