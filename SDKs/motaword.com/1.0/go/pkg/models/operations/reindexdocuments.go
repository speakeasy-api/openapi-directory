package operations

import (
	"openapi/pkg/models/shared"
)

type ReindexDocumentsResponse struct {
	AsyncOperationStatus *shared.AsyncOperationStatus
	ContentType          string
	StatusCode           int64
}
