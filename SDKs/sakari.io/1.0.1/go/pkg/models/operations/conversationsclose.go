// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ConversationsCloseSecurity struct {
	SakariAuth string `security:"scheme,type=oauth2,name=Authorization"`
}

type ConversationsCloseRequest struct {
	// Account to apply operations to
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	// ID of conversation
	ConversationID string `pathParam:"style=simple,explode=false,name=conversationId"`
}

type ConversationsCloseResponse struct {
	ContentType string
	// successful operation
	ConversationResponse *shared.ConversationResponse
	StatusCode           int
	RawResponse          *http.Response
}
