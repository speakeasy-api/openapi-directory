// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ProjectsUpdateColumnRequestBody struct {
	// Name of the project column
	Name string `json:"name"`
}

type ProjectsUpdateColumnRequest struct {
	RequestBody ProjectsUpdateColumnRequestBody `request:"mediaType=application/json"`
	// The unique identifier of the column.
	ColumnID int64 `pathParam:"style=simple,explode=false,name=column_id"`
}

type ProjectsUpdateColumnResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Requires authentication
	BasicError *shared.BasicError
	// Response
	ProjectColumn *shared.ProjectColumn
}
