package operations

import (
	"openapi/pkg/models/shared"
)

type GetEditorialImageLivefeedListQueryParams struct {
	Country string `queryParam:"style=form,explode=true,name=country"`
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetEditorialImageLivefeedListSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetEditorialImageLivefeedListRequest struct {
	QueryParams GetEditorialImageLivefeedListQueryParams
	Security    GetEditorialImageLivefeedListSecurity
}

type GetEditorialImageLivefeedListResponse struct {
	ContentType                string
	EditorialImageLivefeedList *shared.EditorialImageLivefeedList
	StatusCode                 int64
}
