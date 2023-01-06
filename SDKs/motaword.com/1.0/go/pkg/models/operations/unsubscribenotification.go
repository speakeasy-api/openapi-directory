package operations

import (
	"openapi/pkg/models/shared"
)

type UnsubscribeNotificationRequest struct {
	Request *shared.NotificationSubscription `request:"mediaType=application/json"`
}

type UnsubscribeNotificationResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
