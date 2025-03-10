// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetWebhooksWebhookIDLogsRequest struct {
	// The number of records to return in each page.
	//
	PageSize *int64 `queryParam:"style=form,explode=true,name=page[size]"`
	// The unique identifier for the webhook.
	//
	WebhookID string `pathParam:"style=simple,explode=false,name=webhookId"`
}

type GetWebhooksWebhookIDLogsResponse struct {
	ContentType string
	// Successful response
	ListWebhookDeliveryLogsResponse *shared.ListWebhookDeliveryLogsResponse
	StatusCode                      int
	RawResponse                     *http.Response
}
