package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePolicyModulePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeletePolicyModuleQueryParams struct {
	Pretty *bool `queryParam:"style=form,explode=true,name=pretty"`
}

type DeletePolicyModule200ApplicationJSONProvenance struct {
	BuildCommit    *string                `json:"build_commit,omitempty"`
	BuildHostname  *string                `json:"build_hostname,omitempty"`
	BuildTimestamp *string                `json:"build_timestamp,omitempty"`
	Bundles        map[string]interface{} `json:"bundles,omitempty"`
	Version        *string                `json:"version,omitempty"`
}

type DeletePolicyModule200ApplicationJSON struct {
	Provenance *DeletePolicyModule200ApplicationJSONProvenance `json:"provenance,omitempty"`
}

type DeletePolicyModuleRequest struct {
	PathParams  DeletePolicyModulePathParams
	QueryParams DeletePolicyModuleQueryParams
}

type DeletePolicyModuleResponse struct {
	FourHundred                                *shared.FourHundred
	FourHundredAndFour                         *shared.FourHundredAndFour
	ContentType                                string
	StatusCode                                 int64
	DeletePolicyModule200ApplicationJSONObject *DeletePolicyModule200ApplicationJSON
}
