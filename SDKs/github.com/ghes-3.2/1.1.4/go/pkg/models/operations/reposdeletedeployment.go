// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ReposDeleteDeploymentRequest struct {
	// deployment_id parameter
	DeploymentID int64 `pathParam:"style=simple,explode=false,name=deployment_id"`
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposDeleteDeploymentResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Resource not found
	BasicError *shared.BasicError
	// Validation failed, or the endpoint has been spammed.
	ValidationErrorSimple *shared.ValidationErrorSimple
}
