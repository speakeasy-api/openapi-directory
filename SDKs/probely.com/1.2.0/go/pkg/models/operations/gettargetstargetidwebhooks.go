package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDWebhooksPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDWebhooks200ApplicationJSON struct {
	Count     *int64           `json:"count,omitempty"`
	Length    *int64           `json:"length,omitempty"`
	Page      *int64           `json:"page,omitempty"`
	PageTotal *int64           `json:"page_total,omitempty"`
	Results   []shared.Webhook `json:"results,omitempty"`
}

type GetTargetsTargetIDWebhooks401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDWebhooks403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDWebhooksRequest struct {
	PathParams GetTargetsTargetIDWebhooksPathParams
}

type GetTargetsTargetIDWebhooksResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	GetTargetsTargetIDWebhooks200ApplicationJSONObject *GetTargetsTargetIDWebhooks200ApplicationJSON
	GetTargetsTargetIDWebhooks401ApplicationJSONObject *GetTargetsTargetIDWebhooks401ApplicationJSON
	GetTargetsTargetIDWebhooks403ApplicationJSONObject *GetTargetsTargetIDWebhooks403ApplicationJSON
}
