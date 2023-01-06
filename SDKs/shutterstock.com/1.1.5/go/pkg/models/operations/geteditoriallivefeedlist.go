package operations

import (
	"openapi/pkg/models/shared"
)

type GetEditorialLivefeedListQueryParams struct {
	Country string `queryParam:"style=form,explode=true,name=country"`
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetEditorialLivefeedListSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetEditorialLivefeedListRequest struct {
	QueryParams GetEditorialLivefeedListQueryParams
	Security    GetEditorialLivefeedListSecurity
}

type GetEditorialLivefeedListResponse struct {
	ContentType           string
	EditorialLivefeedList *shared.EditorialLivefeedList
	StatusCode            int64
}
