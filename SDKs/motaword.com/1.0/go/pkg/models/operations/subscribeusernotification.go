package operations

import (
	"openapi/pkg/models/shared"
)

type SubscribeUserNotificationPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type SubscribeUserNotificationSecurity struct {
	MwoAuth shared.SchemeMwoAuth `security:"scheme,type=oauth2"`
}

type SubscribeUserNotificationRequest struct {
	PathParams SubscribeUserNotificationPathParams
	Request    *shared.NotificationSubscription `request:"mediaType=application/json"`
	Security   SubscribeUserNotificationSecurity
}

type SubscribeUserNotificationResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
