package operations

import (
	"openapi/pkg/models/shared"
)

type FreezeAccountResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
