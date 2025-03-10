// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest struct {
	// The slug version of the enterprise name. You can also substitute this value with the enterprise id.
	Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
	// Page number of the results to fetch.
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	// The number of results per page (max 100).
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
	// Unique identifier of the self-hosted runner group.
	RunnerGroupID int64 `pathParam:"style=simple,explode=false,name=runner_group_id"`
}

// EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSON - Response
type EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSON struct {
	Runners    []shared.Runner `json:"runners"`
	TotalCount float64         `json:"total_count"`
}

type EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int
	RawResponse *http.Response
	// Response
	EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSONObject *EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSON
}
