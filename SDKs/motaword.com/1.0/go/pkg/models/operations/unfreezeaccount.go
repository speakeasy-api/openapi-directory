package operations

import (
	"openapi/pkg/models/shared"
)

type UnfreezeAccountResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
