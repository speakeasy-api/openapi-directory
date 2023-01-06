package operations

import (
	"openapi/pkg/models/shared"
)

var CreateAssessmentsServerList = []string{
	"https://flex-api.twilio.com",
}

type CreateAssessmentsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateAssessmentsRequest struct {
	ServerURL *string
	Security  CreateAssessmentsSecurity
}

type CreateAssessmentsResponse struct {
	ContentType       string
	StatusCode        int64
	FlexV1Assessments *shared.FlexV1Assessments
}
