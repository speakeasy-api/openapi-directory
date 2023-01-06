package operations

type GetTargetsTargetIDTopVulnsPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDTopVulns200ApplicationJSON struct {
	Zero *string `json:"0,omitempty"`
	One  *string `json:"1,omitempty"`
}

type GetTargetsTargetIDTopVulnsRequest struct {
	PathParams GetTargetsTargetIDTopVulnsPathParams
}

type GetTargetsTargetIDTopVulnsResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	GetTargetsTargetIDTopVulns200ApplicationJSONObjects []GetTargetsTargetIDTopVulns200ApplicationJSON
}
