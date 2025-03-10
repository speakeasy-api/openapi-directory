// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type PostV01CallSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type PostV01CallResponse struct {
	// Response
	CallResponse *shared.CallResponse
	ContentType  string
	StatusCode   int
	RawResponse  *http.Response
}
