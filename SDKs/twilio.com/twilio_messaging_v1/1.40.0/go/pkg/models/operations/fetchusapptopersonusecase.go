// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var FetchUsAppToPersonUsecaseServerList = []string{
	"https://messaging.twilio.com",
}

type FetchUsAppToPersonUsecaseSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type FetchUsAppToPersonUsecaseRequest struct {
	// The unique string to identify the A2P brand.
	BrandRegistrationSid *string `queryParam:"style=form,explode=true,name=BrandRegistrationSid"`
	// The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/services/api) to fetch the resource from.
	MessagingServiceSid string `pathParam:"style=simple,explode=false,name=MessagingServiceSid"`
}

type FetchUsAppToPersonUsecaseResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// OK
	MessagingV1ServiceUsAppToPersonUsecase *shared.MessagingV1ServiceUsAppToPersonUsecase
}
