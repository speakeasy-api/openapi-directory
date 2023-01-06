package operations

import (
	"openapi/pkg/models/shared"
)

type ListInstrumentsSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type ListInstrumentsRequest struct {
	Security ListInstrumentsSecurity
}

type ListInstrumentsResponse struct {
	ContentType    string
	InstrumentList *shared.InstrumentList
	StatusCode     int64
}
