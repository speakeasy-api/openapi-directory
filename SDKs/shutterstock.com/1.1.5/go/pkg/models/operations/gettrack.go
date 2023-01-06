package operations

import (
	"openapi/pkg/models/shared"
)

type GetTrackPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetTrackViewEnum string

const (
	GetTrackViewEnumMinimal GetTrackViewEnum = "minimal"
	GetTrackViewEnumFull    GetTrackViewEnum = "full"
)

type GetTrackQueryParams struct {
	View *GetTrackViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type GetTrackSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetTrackRequest struct {
	PathParams  GetTrackPathParams
	QueryParams GetTrackQueryParams
	Security    GetTrackSecurity
}

type GetTrackResponse struct {
	Audio       *shared.Audio
	ContentType string
	StatusCode  int64
}
