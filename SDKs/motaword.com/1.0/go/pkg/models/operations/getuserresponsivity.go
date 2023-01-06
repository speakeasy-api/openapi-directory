package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserResponsivityPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type GetUserResponsivityPeriodEnum string

const (
	GetUserResponsivityPeriodEnumMonthly GetUserResponsivityPeriodEnum = "monthly"
	GetUserResponsivityPeriodEnumWeekly  GetUserResponsivityPeriodEnum = "weekly"
)

type GetUserResponsivityQueryParams struct {
	Period *GetUserResponsivityPeriodEnum `queryParam:"style=form,explode=true,name=period"`
}

type GetUserResponsivitySecurity struct {
	MwoAuth shared.SchemeMwoAuth `security:"scheme,type=oauth2"`
}

type GetUserResponsivityRequest struct {
	PathParams  GetUserResponsivityPathParams
	QueryParams GetUserResponsivityQueryParams
	Security    GetUserResponsivitySecurity
}

type GetUserResponsivityResponse struct {
	ContentType      string
	Error            *shared.Error
	ResponsivityList *shared.ResponsivityList
	StatusCode       int64
}
