package operations

import (
	"openapi/pkg/models/shared"
)

type ListCustomDescriptorsQueryParams struct {
	BandID          *string  `queryParam:"style=form,explode=true,name=band_id"`
	BandName        *string  `queryParam:"style=form,explode=true,name=band_name"`
	ID              []string `queryParam:"style=form,explode=true,name=id"`
	InstrumentID    *string  `queryParam:"style=form,explode=true,name=instrument_id"`
	InstrumentName  *string  `queryParam:"style=form,explode=true,name=instrument_name"`
	Name            *string  `queryParam:"style=form,explode=true,name=name"`
	Page            *int64   `queryParam:"style=form,explode=true,name=page"`
	PerPage         *int64   `queryParam:"style=form,explode=true,name=per_page"`
	RenderSpeedOver *float64 `queryParam:"style=form,explode=true,name=render_speed_over"`
	Tag             *string  `queryParam:"style=form,explode=true,name=tag"`
	Tempo           *float64 `queryParam:"style=form,explode=true,name=tempo"`
	TempoFrom       *float64 `queryParam:"style=form,explode=true,name=tempo_from"`
	TempoTo         *float64 `queryParam:"style=form,explode=true,name=tempo_to"`
}

type ListCustomDescriptorsSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type ListCustomDescriptorsRequest struct {
	QueryParams ListCustomDescriptorsQueryParams
	Security    ListCustomDescriptorsSecurity
}

type ListCustomDescriptorsResponse struct {
	ContentType           string
	DescriptorsListResult *shared.DescriptorsListResult
	StatusCode            int64
}
