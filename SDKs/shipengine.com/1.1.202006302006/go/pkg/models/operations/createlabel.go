package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLabelRequest struct {
	Request shared.CreateLabelRequestBodyInput `request:"mediaType=application/json"`
}

type CreateLabelResponseOutput struct {
	ContentType             string
	StatusCode              int64
	CreateLabelResponseBody *shared.CreateLabelResponseBodyOutput
	ErrorResponseBody       *shared.ErrorResponseBody
}
