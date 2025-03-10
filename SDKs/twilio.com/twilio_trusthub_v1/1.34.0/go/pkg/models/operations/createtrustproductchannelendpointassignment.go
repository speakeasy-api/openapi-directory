package operations

import (
	"openapi/pkg/models/shared"
)

var CreateTrustProductChannelEndpointAssignmentServers = []string{
	"https://trusthub.twilio.com",
}

type CreateTrustProductChannelEndpointAssignmentPathParams struct {
	TrustProductSid string `pathParam:"style=simple,explode=false,name=TrustProductSid"`
}

type CreateTrustProductChannelEndpointAssignmentRequestBodyCreateTrustProductChannelEndpointAssignmentRequest struct {
	ChannelEndpointSid  string `form:"name=ChannelEndpointSid"`
	ChannelEndpointType string `form:"name=ChannelEndpointType"`
}

type CreateTrustProductChannelEndpointAssignmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateTrustProductChannelEndpointAssignmentRequest struct {
	ServerURL  *string
	PathParams CreateTrustProductChannelEndpointAssignmentPathParams
	Request    *CreateTrustProductChannelEndpointAssignmentRequestBodyCreateTrustProductChannelEndpointAssignmentRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateTrustProductChannelEndpointAssignmentSecurity
}

type CreateTrustProductChannelEndpointAssignmentResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	TrusthubV1TrustProductTrustProductChannelEndpointAssignment *shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment
}
