// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type PostV01ConferenceSpeakSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type PostV01ConferenceSpeakResponse struct {
	// Response
	ConferenceSpeakResponse *shared.ConferenceSpeakResponse
	ContentType             string
	StatusCode              int
	RawResponse             *http.Response
}
