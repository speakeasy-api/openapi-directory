package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateFlexFlowServers = []string{
	"https://flex-api.twilio.com",
}

type UpdateFlexFlowPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateFlexFlowUpdateFlexFlowRequest struct {
	ChannelType                  *shared.FlexFlowEnumChannelTypeEnum     `form:"name=ChannelType"`
	ChatServiceSid               *string                                 `form:"name=ChatServiceSid"`
	ContactIdentity              *string                                 `form:"name=ContactIdentity"`
	Enabled                      *bool                                   `form:"name=Enabled"`
	FriendlyName                 *string                                 `form:"name=FriendlyName"`
	IntegrationChannel           *string                                 `form:"name=Integration.Channel"`
	IntegrationCreationOnMessage *bool                                   `form:"name=Integration.CreationOnMessage"`
	IntegrationFlowSid           *string                                 `form:"name=Integration.FlowSid"`
	IntegrationPriority          *int64                                  `form:"name=Integration.Priority"`
	IntegrationRetryCount        *int64                                  `form:"name=Integration.RetryCount"`
	IntegrationTimeout           *int64                                  `form:"name=Integration.Timeout"`
	IntegrationURL               *string                                 `form:"name=Integration.Url"`
	IntegrationWorkflowSid       *string                                 `form:"name=Integration.WorkflowSid"`
	IntegrationWorkspaceSid      *string                                 `form:"name=Integration.WorkspaceSid"`
	IntegrationType              *shared.FlexFlowEnumIntegrationTypeEnum `form:"name=IntegrationType"`
	JanitorEnabled               *bool                                   `form:"name=JanitorEnabled"`
	LongLived                    *bool                                   `form:"name=LongLived"`
}

type UpdateFlexFlowSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateFlexFlowRequest struct {
	ServerURL  *string
	PathParams UpdateFlexFlowPathParams
	Request    *UpdateFlexFlowUpdateFlexFlowRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateFlexFlowSecurity
}

type UpdateFlexFlowResponse struct {
	ContentType    string
	StatusCode     int64
	FlexV1FlexFlow *shared.FlexV1FlexFlow
}
