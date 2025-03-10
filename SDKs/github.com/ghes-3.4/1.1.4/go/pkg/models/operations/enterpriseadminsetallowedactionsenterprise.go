// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type EnterpriseAdminSetAllowedActionsEnterpriseRequest struct {
	// The slug version of the enterprise name. You can also substitute this value with the enterprise id.
	Enterprise      string                 `pathParam:"style=simple,explode=false,name=enterprise"`
	SelectedActions shared.SelectedActions `request:"mediaType=application/json"`
}

type EnterpriseAdminSetAllowedActionsEnterpriseResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
