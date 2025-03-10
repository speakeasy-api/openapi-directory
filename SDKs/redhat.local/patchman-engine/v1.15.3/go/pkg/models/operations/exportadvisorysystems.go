// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ExportAdvisorySystemsSecurity struct {
	RhIdentity string `security:"scheme,type=apiKey,subtype=header,name=x-rh-identity"`
}

type ExportAdvisorySystemsRequest struct {
	// Advisory ID
	AdvisoryID string `pathParam:"style=simple,explode=false,name=advisory_id"`
	// Filter
	FilterDisplayName *string `queryParam:"style=form,explode=true,name=filter[display_name]"`
	// Filter
	FilterID *string `queryParam:"style=form,explode=true,name=filter[id]"`
	// Filter
	FilterLastEvaluation *string `queryParam:"style=form,explode=true,name=filter[last_evaluation]"`
	// Filter
	FilterLastUpload *string `queryParam:"style=form,explode=true,name=filter[last_upload]"`
	// Filter
	FilterOtherCount *string `queryParam:"style=form,explode=true,name=filter[other_count]"`
	// Filter
	FilterPackagesInstalled *string `queryParam:"style=form,explode=true,name=filter[packages_installed]"`
	// Filter
	FilterPackagesUpdatable *string `queryParam:"style=form,explode=true,name=filter[packages_updatable]"`
	// Filter
	FilterRhbaCount *string `queryParam:"style=form,explode=true,name=filter[rhba_count]"`
	// Filter
	FilterRheaCount *string `queryParam:"style=form,explode=true,name=filter[rhea_count]"`
	// Filter
	FilterRhsaCount *string `queryParam:"style=form,explode=true,name=filter[rhsa_count]"`
	// Filter
	FilterStale *string `queryParam:"style=form,explode=true,name=filter[stale]"`
	// Filter systems by their SAP SIDs
	FilterSystemProfileSapSidsIn []string `queryParam:"style=form,explode=true,name=filter[system_profile][sap_sids][in]"`
	// Filter only SAP systems
	FilterSystemProfileSapSystem *string `queryParam:"style=form,explode=true,name=filter[system_profile][sap_system]"`
	// Find matching text
	Search *string `queryParam:"style=form,explode=true,name=search"`
	// Tag filter
	Tags []string `queryParam:"style=form,explode=true,name=tags"`
}

type ExportAdvisorySystemsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// OK
	ControllersSystemInlineItems []shared.ControllersSystemInlineItem
}
