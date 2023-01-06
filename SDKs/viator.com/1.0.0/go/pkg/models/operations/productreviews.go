package operations

import (
	"openapi/pkg/models/shared"
)

type ProductReviewsQueryParams struct {
	Code            *string                     `queryParam:"style=form,explode=true,name=code"`
	ShowUnavailable *bool                       `queryParam:"style=form,explode=true,name=showUnavailable"`
	SortOrder       *shared.SortOrderReviewEnum `queryParam:"style=form,explode=true,name=sortOrder"`
	TopX            *string                     `queryParam:"style=form,explode=true,name=topX"`
}

type ProductReviewsHeaders struct {
	AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
}

type ProductReviews200ApplicationJSON struct {
	Data []shared.ReviewObject `json:"data,omitempty"`
}

type ProductReviewsRequest struct {
	QueryParams ProductReviewsQueryParams
	Headers     ProductReviewsHeaders
}

type ProductReviewsResponse struct {
	ContentType                            string
	StatusCode                             int64
	ProductReviews200ApplicationJSONObject *ProductReviews200ApplicationJSON
}
