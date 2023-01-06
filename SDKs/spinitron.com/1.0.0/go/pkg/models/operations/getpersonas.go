package operations

import (
	"openapi/pkg/models/shared"
)

type GetPersonasQueryParams struct {
	Count  *int64   `queryParam:"style=form,explode=true,name=count"`
	Expand []string `queryParam:"style=form,explode=true,name=expand"`
	Fields []string `queryParam:"style=form,explode=true,name=fields"`
	Name   *string  `queryParam:"style=form,explode=true,name=name"`
	Page   *int64   `queryParam:"style=form,explode=true,name=page"`
}

type GetPersonas200ApplicationJSON struct {
	Items []shared.Persona `json:"items,omitempty"`
}

type GetPersonasRequest struct {
	QueryParams GetPersonasQueryParams
}

type GetPersonasResponse struct {
	Body                                []byte
	ContentType                         string
	StatusCode                          int64
	GetPersonas200ApplicationJSONObject *GetPersonas200ApplicationJSON
}
