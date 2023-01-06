package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type GetDocumentQueryParams struct {
	Explain    *string                `queryParam:"style=form,explode=true,name=explain"`
	Input      map[string]interface{} `queryParam:"style=form,explode=true,name=input"`
	Instrument *bool                  `queryParam:"style=form,explode=true,name=instrument"`
	Metrics    *bool                  `queryParam:"style=form,explode=true,name=metrics"`
	Pretty     *bool                  `queryParam:"style=form,explode=true,name=pretty"`
	Provenance *bool                  `queryParam:"style=form,explode=true,name=provenance"`
}

type GetDocument200ApplicationJSONProvenance struct {
	BuildCommit    *string                `json:"build_commit,omitempty"`
	BuildHostname  *string                `json:"build_hostname,omitempty"`
	BuildTimestamp *string                `json:"build_timestamp,omitempty"`
	Bundles        map[string]interface{} `json:"bundles,omitempty"`
	Version        *string                `json:"version,omitempty"`
}

type GetDocument200ApplicationJSON struct {
	Provenance *GetDocument200ApplicationJSONProvenance `json:"provenance,omitempty"`
}

type GetDocumentRequest struct {
	PathParams  GetDocumentPathParams
	QueryParams GetDocumentQueryParams
}

type GetDocumentResponse struct {
	FourHundred                         *shared.FourHundred
	ContentType                         string
	StatusCode                          int64
	GetDocument200ApplicationJSONObject *GetDocument200ApplicationJSON
}
