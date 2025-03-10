// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ExportIterationRequest struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
	// The flavor of the target platform (Windows, Linux, ARM, or GPU)
	Flavor *string `queryParam:"style=form,explode=true,name=flavor"`
	// The iteration id
	IterationID string `pathParam:"style=simple,explode=false,name=iterationId"`
	// The target platform (coreml or tensorflow)
	Platform string `queryParam:"style=form,explode=true,name=platform"`
	// The project id
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type ExportIterationResponse struct {
	Body        []byte
	ContentType string
	// OK
	Export      *shared.Export
	StatusCode  int
	RawResponse *http.Response
}
