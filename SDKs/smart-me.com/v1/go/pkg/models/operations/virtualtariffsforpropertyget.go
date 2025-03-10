// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type VirtualTariffsForPropertyGetRequest struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type VirtualTariffsForPropertyGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// OK
	VirtualTariffsOfFolders []shared.VirtualTariffsOfFolder
}
