package operations

import (
	"openapi/pkg/models/shared"
)

type TranslatePathParams struct {
	ID             int64  `pathParam:"style=simple,explode=false,name=id"`
	TargetLanguage string `pathParam:"style=simple,explode=false,name=targetLanguage"`
}

type TranslateRequestBody struct {
	Contents  []string               `json:"contents,omitempty"`
	Documents []shared.FileAsData    `json:"documents,omitempty"`
	Meta      map[string]interface{} `json:"meta,omitempty"`
}

type Translate200ApplicationJSON struct {
	Results *interface{} `json:"results,omitempty"`
}

type TranslateRequest struct {
	PathParams TranslatePathParams
	Request    *TranslateRequestBody `request:"mediaType=application/json"`
}

type TranslateResponse struct {
	ContentType                       string
	StatusCode                        int64
	Translate200ApplicationJSONObject *Translate200ApplicationJSON
}
