package operations

import (
	"openapi/pkg/models/shared"
)

type UnsubscribeUserNotificationPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type UnsubscribeUserNotificationSecurity struct {
	MwoAuth shared.SchemeMwoAuth `security:"scheme,type=oauth2"`
}

type UnsubscribeUserNotificationRequest struct {
	PathParams UnsubscribeUserNotificationPathParams
	Request    *shared.NotificationSubscription `request:"mediaType=application/json"`
	Security   UnsubscribeUserNotificationSecurity
}

type UnsubscribeUserNotificationResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
