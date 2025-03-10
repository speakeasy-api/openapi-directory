// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest struct {
	// The slug version of the enterprise name. You can also substitute this value with the enterprise id.
	Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
	// The unique identifier of the organization.
	OrgID int64 `pathParam:"style=simple,explode=false,name=org_id"`
	// Unique identifier of the self-hosted runner group.
	RunnerGroupID int64 `pathParam:"style=simple,explode=false,name=runner_group_id"`
}

type EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
