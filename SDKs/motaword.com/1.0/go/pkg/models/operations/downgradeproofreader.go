package operations

import (
	"openapi/pkg/models/shared"
)

type DowngradeProofreaderResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
