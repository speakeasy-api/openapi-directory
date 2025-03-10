// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type DeleteModel1Security struct {
	BearerToken string `security:"scheme,type=http,subtype=bearer,name=Authorization"`
}

type DeleteModel1Request struct {
	ModelID string `pathParam:"style=simple,explode=false,name=modelId"`
}

type DeleteModel1Response struct {
	ContentType string
	// Deletion submitted
	DeletionResponse *shared.DeletionResponse
	StatusCode       int
	RawResponse      *http.Response
}
