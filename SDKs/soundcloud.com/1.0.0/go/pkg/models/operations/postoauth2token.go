package operations

import (
	"openapi/pkg/models/shared"
)

type PostOauth2TokenSecurity struct {
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=query"`
}

type PostOauth2TokenRequest struct {
	Request  *interface{} `request:"mediaType=application/x-www-form-urlencoded"`
	Security PostOauth2TokenSecurity
}

type PostOauth2TokenResponse struct {
	ContentType                            string
	Error                                  *shared.Error
	StatusCode                             int64
	PostOauth2Token400ApplicationJSONOneOf *interface{}
}
