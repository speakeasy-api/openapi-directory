package operations

import (
	"openapi/pkg/models/shared"
)

type ProductPhotosQueryParams struct {
	Code            *string `queryParam:"style=form,explode=true,name=code"`
	ShowUnavailable *bool   `queryParam:"style=form,explode=true,name=showUnavailable"`
	TopX            *string `queryParam:"style=form,explode=true,name=topX"`
}

type ProductPhotosHeaders struct {
	AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
}

type ProductPhotos200ApplicationJSON struct {
	Data []shared.PhotoObject `json:"data,omitempty"`
}

type ProductPhotosRequest struct {
	QueryParams ProductPhotosQueryParams
	Headers     ProductPhotosHeaders
}

type ProductPhotosResponse struct {
	ContentType                           string
	StatusCode                            int64
	ProductPhotos200ApplicationJSONObject *ProductPhotos200ApplicationJSON
}
