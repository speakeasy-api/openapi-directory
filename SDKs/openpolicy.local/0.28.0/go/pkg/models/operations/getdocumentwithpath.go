package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentWithPathPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type GetDocumentWithPathQueryParams struct {
	Explain    *string `queryParam:"style=form,explode=true,name=explain"`
	Instrument *bool   `queryParam:"style=form,explode=true,name=instrument"`
	Metrics    *bool   `queryParam:"style=form,explode=true,name=metrics"`
	Pretty     *bool   `queryParam:"style=form,explode=true,name=pretty"`
	Provenance *bool   `queryParam:"style=form,explode=true,name=provenance"`
}

type GetDocumentWithPath200ApplicationJSONProvenance struct {
	BuildCommit    *string                `json:"build_commit,omitempty"`
	BuildHostname  *string                `json:"build_hostname,omitempty"`
	BuildTimestamp *string                `json:"build_timestamp,omitempty"`
	Bundles        map[string]interface{} `json:"bundles,omitempty"`
	Version        *string                `json:"version,omitempty"`
}

type GetDocumentWithPath200ApplicationJSON struct {
	Provenance *GetDocumentWithPath200ApplicationJSONProvenance `json:"provenance,omitempty"`
}

type GetDocumentWithPathRequest struct {
	PathParams  GetDocumentWithPathPathParams
	QueryParams GetDocumentWithPathQueryParams
	Request     []byte `request:"mediaType=application/x-yaml"`
}

type GetDocumentWithPathResponse struct {
	FourHundred                                 *shared.FourHundred
	ContentType                                 string
	StatusCode                                  int64
	GetDocumentWithPath200ApplicationJSONObject *GetDocumentWithPath200ApplicationJSON
}
