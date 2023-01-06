package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDFindingsPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDFindingsQueryParams struct {
	Assignee []string                    `queryParam:"style=form,explode=true,name=assignee"`
	Label    []string                    `queryParam:"style=form,explode=true,name=label"`
	Length   *int64                      `queryParam:"style=form,explode=true,name=length"`
	Ordering *string                     `queryParam:"style=form,explode=true,name=ordering"`
	Page     *int64                      `queryParam:"style=form,explode=true,name=page"`
	Scan     []string                    `queryParam:"style=form,explode=true,name=scan"`
	Search   *string                     `queryParam:"style=form,explode=true,name=search"`
	Severity *shared.FindingSeverityEnum `queryParam:"style=form,explode=true,name=severity"`
	State    *shared.FindingStateEnum    `queryParam:"style=form,explode=true,name=state"`
}

type GetTargetsTargetIDFindings200ApplicationJSON struct {
	Count     *int64           `json:"count,omitempty"`
	Length    *int64           `json:"length,omitempty"`
	Page      *int64           `json:"page,omitempty"`
	PageTotal *int64           `json:"page_total,omitempty"`
	Results   []shared.Finding `json:"results,omitempty"`
}

type GetTargetsTargetIDFindings401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDFindings404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDFindingsRequest struct {
	PathParams  GetTargetsTargetIDFindingsPathParams
	QueryParams GetTargetsTargetIDFindingsQueryParams
}

type GetTargetsTargetIDFindingsResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	GetTargetsTargetIDFindings200ApplicationJSONObject *GetTargetsTargetIDFindings200ApplicationJSON
	GetTargetsTargetIDFindings401ApplicationJSONObject *GetTargetsTargetIDFindings401ApplicationJSON
	GetTargetsTargetIDFindings404ApplicationJSONObject *GetTargetsTargetIDFindings404ApplicationJSON
}
