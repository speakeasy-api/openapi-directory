package operations

import (
	"openapi/pkg/models/shared"
)

type FetchRendersQueryParams struct {
	ID []string `queryParam:"style=form,explode=true,name=id"`
}

type FetchRendersSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type FetchRendersRequest struct {
	QueryParams FetchRendersQueryParams
	Security    FetchRendersSecurity
}

type FetchRendersResponse struct {
	AudioRendersListResults *interface{}
	ContentType             string
	StatusCode              int64
}
