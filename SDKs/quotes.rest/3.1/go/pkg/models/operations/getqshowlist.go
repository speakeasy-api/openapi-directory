package operations

import (
	"openapi/pkg/models/shared"
)

type GetQshowListQueryParams struct {
	Public *bool  `queryParam:"style=form,explode=true,name=public"`
	Start  *int32 `queryParam:"style=form,explode=true,name=start"`
}

type GetQshowListSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetQshowListRequest struct {
	QueryParams GetQshowListQueryParams
	Security    GetQshowListSecurity
}

type GetQshowListResponse struct {
	ContentType string
	StatusCode  int64
}
