package operations

import (
	"openapi/pkg/models/shared"
)

type ListCustomInstrumentsQueryParams struct {
	ID      []string `queryParam:"style=form,explode=true,name=id"`
	Name    *string  `queryParam:"style=form,explode=true,name=name"`
	Page    *int64   `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64   `queryParam:"style=form,explode=true,name=per_page"`
	Tag     *string  `queryParam:"style=form,explode=true,name=tag"`
}

type ListCustomInstrumentsSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type ListCustomInstrumentsRequest struct {
	QueryParams ListCustomInstrumentsQueryParams
	Security    ListCustomInstrumentsSecurity
}

type ListCustomInstrumentsResponse struct {
	ContentType           string
	InstrumentsListResult *shared.InstrumentsListResult
	StatusCode            int64
}
