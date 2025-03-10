// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetSchemaRequest struct {
	// The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
	APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
	// The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	// The data transfer object type name. E.g PensionPayInstruction
	DtoDataType string `pathParam:"style=simple,explode=false,name=DtoDataType"`
}

type GetSchemaResponse struct {
	ContentType string
	// Bad Request
	ErrorModel *shared.ErrorModel
	// The data type XSD schema
	GetSchema200ApplicationJSONBinaryString []byte
	StatusCode                              int
	RawResponse                             *http.Response
}
