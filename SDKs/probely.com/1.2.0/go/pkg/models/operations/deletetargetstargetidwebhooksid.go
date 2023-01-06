package operations

type DeleteTargetsTargetIDWebhooksIDPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type DeleteTargetsTargetIDWebhooksID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteTargetsTargetIDWebhooksID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteTargetsTargetIDWebhooksID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteTargetsTargetIDWebhooksIDRequest struct {
	PathParams DeleteTargetsTargetIDWebhooksIDPathParams
}

type DeleteTargetsTargetIDWebhooksIDResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	DeleteTargetsTargetIDWebhooksID401ApplicationJSONObject *DeleteTargetsTargetIDWebhooksID401ApplicationJSON
	DeleteTargetsTargetIDWebhooksID403ApplicationJSONObject *DeleteTargetsTargetIDWebhooksID403ApplicationJSON
	DeleteTargetsTargetIDWebhooksID404ApplicationJSONObject *DeleteTargetsTargetIDWebhooksID404ApplicationJSON
}
