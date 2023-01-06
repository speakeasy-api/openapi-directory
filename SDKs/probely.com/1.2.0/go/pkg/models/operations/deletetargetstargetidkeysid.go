package operations

type DeleteTargetsTargetIDKeysIDPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type DeleteTargetsTargetIDKeysID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteTargetsTargetIDKeysID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteTargetsTargetIDKeysIDRequest struct {
	PathParams DeleteTargetsTargetIDKeysIDPathParams
}

type DeleteTargetsTargetIDKeysIDResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	DeleteTargetsTargetIDKeysID403ApplicationJSONObject *DeleteTargetsTargetIDKeysID403ApplicationJSON
	DeleteTargetsTargetIDKeysID404ApplicationJSONObject *DeleteTargetsTargetIDKeysID404ApplicationJSON
}
