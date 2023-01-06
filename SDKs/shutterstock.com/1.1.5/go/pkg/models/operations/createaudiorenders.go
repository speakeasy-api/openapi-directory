package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAudioRendersSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type CreateAudioRendersRequest struct {
	Request  shared.CreateAudioRendersRequest `request:"mediaType=application/json"`
	Security CreateAudioRendersSecurity
}

type CreateAudioRendersResponse struct {
	AudioRendersListResults *interface{}
	ContentType             string
	StatusCode              int64
}
