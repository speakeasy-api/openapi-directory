// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type EnterpriseAdminGetCommentStatsResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	EnterpriseCommentOverview *shared.EnterpriseCommentOverview
}
