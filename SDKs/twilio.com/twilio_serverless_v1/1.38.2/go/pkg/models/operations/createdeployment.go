package operations

import (
	"openapi/pkg/models/shared"
)

var CreateDeploymentServerList = []string{
	"https://serverless.twilio.com",
}

type CreateDeploymentPathParams struct {
	EnvironmentSid string `pathParam:"style=simple,explode=false,name=EnvironmentSid"`
	ServiceSid     string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateDeploymentCreateDeploymentRequest struct {
	BuildSid *string `form:"name=BuildSid"`
}

type CreateDeploymentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateDeploymentRequest struct {
	ServerURL  *string
	PathParams CreateDeploymentPathParams
	Request    *CreateDeploymentCreateDeploymentRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateDeploymentSecurity
}

type CreateDeploymentResponse struct {
	ContentType                              string
	StatusCode                               int64
	ServerlessV1ServiceEnvironmentDeployment *shared.ServerlessV1ServiceEnvironmentDeployment
}
