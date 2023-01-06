package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorkflowSecurity struct {
	BearerAuth *shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
}

type CreateWorkflowRequest struct {
	Request  shared.CreateWorkflow `request:"mediaType=application/json"`
	Security CreateWorkflowSecurity
}

type CreateWorkflowResponse struct {
	ContentType string
	Error       *shared.Error
	Response    *shared.Response
	StatusCode  int64
}
