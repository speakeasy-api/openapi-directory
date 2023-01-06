package operations

import (
	"openapi/pkg/models/shared"
)

type GetKeywordsQueryParams struct {
	AssetID interface{} `queryParam:"style=form,explode=true,name=asset_id"`
}

type GetKeywordsSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetKeywordsRequest struct {
	QueryParams GetKeywordsQueryParams
	Security    GetKeywordsSecurity
}

type GetKeywordsResponse struct {
	ContentType     string
	KeywordDataList *interface{}
	StatusCode      int64
}
