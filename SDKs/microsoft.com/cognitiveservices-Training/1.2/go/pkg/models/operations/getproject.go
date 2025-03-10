// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetProjectRequest struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
	// The id of the project to get
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetProjectResponse struct {
	Body        []byte
	ContentType string
	// OK
	Project     *shared.Project
	StatusCode  int
	RawResponse *http.Response
}
