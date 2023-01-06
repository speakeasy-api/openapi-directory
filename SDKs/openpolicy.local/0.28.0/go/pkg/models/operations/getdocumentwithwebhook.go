package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentWithWebHookPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type GetDocumentWithWebHookQueryParams struct {
	Pretty *bool `queryParam:"style=form,explode=true,name=pretty"`
}

type GetDocumentWithWebHook200ApplicationJSONProvenance struct {
	BuildCommit    *string                `json:"build_commit,omitempty"`
	BuildHostname  *string                `json:"build_hostname,omitempty"`
	BuildTimestamp *string                `json:"build_timestamp,omitempty"`
	Bundles        map[string]interface{} `json:"bundles,omitempty"`
	Version        *string                `json:"version,omitempty"`
}

type GetDocumentWithWebHook200ApplicationJSON struct {
	Provenance *GetDocumentWithWebHook200ApplicationJSONProvenance `json:"provenance,omitempty"`
}

type GetDocumentWithWebHookRequest struct {
	PathParams  GetDocumentWithWebHookPathParams
	QueryParams GetDocumentWithWebHookQueryParams
	Request     []byte `request:"mediaType=application/x-yaml"`
}

type GetDocumentWithWebHookResponse struct {
	FourHundred                                    *shared.FourHundred
	FourHundredAndFour                             *shared.FourHundredAndFour
	ContentType                                    string
	StatusCode                                     int64
	GetDocumentWithWebHook200ApplicationJSONObject *GetDocumentWithWebHook200ApplicationJSON
}
