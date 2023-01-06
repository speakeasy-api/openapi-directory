package operations

import (
	"openapi/pkg/models/shared"
)

type GetImageRecommendationsQueryParams struct {
	ID       []string `queryParam:"style=form,explode=true,name=id"`
	MaxItems *int64   `queryParam:"style=form,explode=true,name=max_items"`
	Safe     *bool    `queryParam:"style=form,explode=true,name=safe"`
}

type GetImageRecommendationsSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetImageRecommendationsRequest struct {
	QueryParams GetImageRecommendationsQueryParams
	Security    GetImageRecommendationsSecurity
}

type GetImageRecommendationsResponse struct {
	ContentType            string
	RecommendationDataList *interface{}
	StatusCode             int64
}
