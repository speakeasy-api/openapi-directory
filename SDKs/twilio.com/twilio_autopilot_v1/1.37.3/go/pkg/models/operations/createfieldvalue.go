package operations

import (
	"openapi/pkg/models/shared"
)

var CreateFieldValueServerList = []string{
	"https://autopilot.twilio.com",
}

type CreateFieldValuePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	FieldTypeSid string `pathParam:"style=simple,explode=false,name=FieldTypeSid"`
}

type CreateFieldValueCreateFieldValueRequest struct {
	Language  string  `form:"name=Language"`
	SynonymOf *string `form:"name=SynonymOf"`
	Value     string  `form:"name=Value"`
}

type CreateFieldValueSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateFieldValueRequest struct {
	ServerURL  *string
	PathParams CreateFieldValuePathParams
	Request    *CreateFieldValueCreateFieldValueRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateFieldValueSecurity
}

type CreateFieldValueResponse struct {
	ContentType                             string
	StatusCode                              int64
	AutopilotV1AssistantFieldTypeFieldValue *shared.AutopilotV1AssistantFieldTypeFieldValue
}
