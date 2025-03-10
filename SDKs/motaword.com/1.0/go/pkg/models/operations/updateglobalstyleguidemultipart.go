// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type UpdateGlobalStyleGuideMultipartResponse struct {
	ContentType string
	// FileTooLarge FileTooSmall NoFileUploaded MissingCorporateAccount
	Error *shared.Error
	// Successful operation
	OperationStatus *shared.OperationStatus
	StatusCode      int
	RawResponse     *http.Response
}
