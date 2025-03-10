// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type PhoneCodeBatchSecurity struct {
	APIKey string `security:"scheme,type=apiKey,subtype=header,name=X-API-KEY"`
}

type PhoneCodeBatchResponse struct {
	// A list of genderized names.
	BatchFirstLastNamePhoneCodedOut *shared.BatchFirstLastNamePhoneCodedOut
	ContentType                     string
	StatusCode                      int
	RawResponse                     *http.Response
}
