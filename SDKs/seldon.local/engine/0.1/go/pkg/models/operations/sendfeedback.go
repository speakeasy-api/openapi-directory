package operations

import (
	"openapi/pkg/models/shared"
)

type SendFeedbackPathParams struct {
	Deployment string `pathParam:"style=simple,explode=false,name=deployment"`
	Namespace  string `pathParam:"style=simple,explode=false,name=namespace"`
}

type SendFeedbackSecurity struct {
	HTTPBearer shared.SchemeHTTPBearer `security:"scheme,type=http,subtype=bearer"`
}

type SendFeedbackRequest struct {
	PathParams SendFeedbackPathParams
	Request    shared.Feedback `request:"mediaType=application/json"`
	Security   SendFeedbackSecurity
}

type SendFeedbackResponse struct {
	ContentType   string
	SeldonMessage *shared.SeldonMessage
	StatusCode    int64
}
