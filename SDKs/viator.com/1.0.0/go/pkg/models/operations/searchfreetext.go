package operations

import (
	"openapi/pkg/models/shared"
)

type SearchFreetextHeaders struct {
	AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
}

type SearchFreetextRequestBodySearchTypesEnum string

const (
	SearchFreetextRequestBodySearchTypesEnumProduct        SearchFreetextRequestBodySearchTypesEnum = "PRODUCT"
	SearchFreetextRequestBodySearchTypesEnumDestination    SearchFreetextRequestBodySearchTypesEnum = "DESTINATION"
	SearchFreetextRequestBodySearchTypesEnumAttraction     SearchFreetextRequestBodySearchTypesEnum = "ATTRACTION"
	SearchFreetextRequestBodySearchTypesEnumRecommendation SearchFreetextRequestBodySearchTypesEnum = "RECOMMENDATION"
)

type SearchFreetextRequestBody struct {
	CurrencyCode *string                                    `json:"currencyCode,omitempty"`
	DestID       *int64                                     `json:"destId,omitempty"`
	SearchTypes  []SearchFreetextRequestBodySearchTypesEnum `json:"searchTypes,omitempty"`
	SortOrder    *shared.SortOrderEnum                      `json:"sortOrder,omitempty"`
	Text         *string                                    `json:"text,omitempty"`
	TopX         *string                                    `json:"topX,omitempty"`
}

type SearchFreetext200ApplicationJSON struct {
	Data []shared.SearchFreetextResponse `json:"data,omitempty"`
}

type SearchFreetextRequest struct {
	Headers SearchFreetextHeaders
	Request *SearchFreetextRequestBody `request:"mediaType=application/json"`
}

type SearchFreetextResponse struct {
	ContentType                            string
	StatusCode                             int64
	SearchFreetext200ApplicationJSONObject *SearchFreetext200ApplicationJSON
}
