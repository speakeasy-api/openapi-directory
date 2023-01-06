package operations

import (
	"openapi/pkg/models/shared"
)

type GetMeSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type GetMeRequest struct {
	Security GetMeSecurity
}

type GetMeResponse struct {
	CompleteUser *shared.CompleteUser
	ContentType  string
	Error        *shared.Error
	StatusCode   int64
}
