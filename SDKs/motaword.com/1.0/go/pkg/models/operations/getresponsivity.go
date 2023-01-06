package operations

import (
	"openapi/pkg/models/shared"
)

type GetResponsivityPeriodEnum string

const (
	GetResponsivityPeriodEnumMonthly GetResponsivityPeriodEnum = "monthly"
	GetResponsivityPeriodEnumWeekly  GetResponsivityPeriodEnum = "weekly"
)

type GetResponsivityQueryParams struct {
	Period *GetResponsivityPeriodEnum `queryParam:"style=form,explode=true,name=period"`
}

type GetResponsivityRequest struct {
	QueryParams GetResponsivityQueryParams
}

type GetResponsivityResponse struct {
	ContentType      string
	Error            *shared.Error
	ResponsivityList *shared.ResponsivityList
	StatusCode       int64
}
