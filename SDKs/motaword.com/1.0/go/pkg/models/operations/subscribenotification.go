package operations

import (
	"openapi/pkg/models/shared"
)

type SubscribeNotificationRequest struct {
	Request *shared.NotificationSubscription `request:"mediaType=application/json"`
}

type SubscribeNotificationResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
