package operations

import (
	"openapi/pkg/models/shared"
)

type SendPasswordReminderRequest struct {
	Request *shared.Email `request:"mediaType=application/json"`
}

type SendPasswordReminderResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
