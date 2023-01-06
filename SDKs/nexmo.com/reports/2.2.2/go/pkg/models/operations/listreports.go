package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListReportsQueryParams struct {
	AccountID string     `queryParam:"style=form,explode=true,name=account_id"`
	DateFrom  *time.Time `queryParam:"style=form,explode=true,name=date_from"`
	DateTo    *time.Time `queryParam:"style=form,explode=true,name=date_to"`
	Status    string     `queryParam:"style=form,explode=true,name=status"`
}

type ListReportsSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type ListReports200ApplicationJSON struct {
	ItemsCount *int64                   `json:"items_count,omitempty"`
	Reports    []map[string]interface{} `json:"reports,omitempty"`
	SelfLink   *string                  `json:"self_link,omitempty"`
}

type ListReportsRequest struct {
	QueryParams ListReportsQueryParams
	Security    ListReportsSecurity
}

type ListReportsResponse struct {
	ContentType                         string
	StatusCode                          int64
	ListReports200ApplicationJSONObject *ListReports200ApplicationJSON
	ListReports400ApplicationJSONAny    *interface{}
	ListReports401ApplicationJSONAny    *interface{}
}
