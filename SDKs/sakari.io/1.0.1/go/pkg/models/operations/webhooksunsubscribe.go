package operations

import (
	"openapi/pkg/models/shared"
)

type WebhooksUnsubscribePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	URL       string `pathParam:"style=simple,explode=false,name=url"`
}

type WebhooksUnsubscribeSecurity struct {
	SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
}

type WebhooksUnsubscribeRequest struct {
	PathParams WebhooksUnsubscribePathParams
	Security   WebhooksUnsubscribeSecurity
}

type WebhooksUnsubscribeResponse struct {
	ContentType string
	StatusCode  int64
}
