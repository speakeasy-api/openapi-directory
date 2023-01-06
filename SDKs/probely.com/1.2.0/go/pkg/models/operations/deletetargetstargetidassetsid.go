package operations

type DeleteTargetsTargetIDAssetsIDPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type DeleteTargetsTargetIDAssetsID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteTargetsTargetIDAssetsID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteTargetsTargetIDAssetsID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteTargetsTargetIDAssetsIDRequest struct {
	PathParams DeleteTargetsTargetIDAssetsIDPathParams
}

type DeleteTargetsTargetIDAssetsIDResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	DeleteTargetsTargetIDAssetsID401ApplicationJSONObject *DeleteTargetsTargetIDAssetsID401ApplicationJSON
	DeleteTargetsTargetIDAssetsID403ApplicationJSONObject *DeleteTargetsTargetIDAssetsID403ApplicationJSON
	DeleteTargetsTargetIDAssetsID404ApplicationJSONObject *DeleteTargetsTargetIDAssetsID404ApplicationJSON
}
