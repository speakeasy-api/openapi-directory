package operations

import (
	"openapi/pkg/models/shared"
)

type ListFeaturesQueryParams struct {
	Date  *string `queryParam:"style=form,explode=true,name=date"`
	End   *string `queryParam:"style=form,explode=true,name=end"`
	Start *string `queryParam:"style=form,explode=true,name=start"`
	Type  *string `queryParam:"style=form,explode=true,name=type"`
}

type ListFeaturesSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type ListFeaturesRequest struct {
	QueryParams ListFeaturesQueryParams
	Security    ListFeaturesSecurity
}

type ListFeaturesResponse struct {
	ContentType                          string
	StatusCode                           int64
	ListFeatures200ApplicationJSONObject map[string]interface{}
}
