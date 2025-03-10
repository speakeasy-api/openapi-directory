// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type MigrationsGetArchiveForAuthenticatedUserRequest struct {
	// The unique identifier of the migration.
	MigrationID int64 `pathParam:"style=simple,explode=false,name=migration_id"`
}

type MigrationsGetArchiveForAuthenticatedUserResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Requires authentication
	BasicError *shared.BasicError
}
