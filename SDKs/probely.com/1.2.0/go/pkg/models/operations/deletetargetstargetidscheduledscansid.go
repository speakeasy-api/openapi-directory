package operations

type DeleteTargetsTargetIDScheduledscansIDPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type DeleteTargetsTargetIDScheduledscansID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteTargetsTargetIDScheduledscansID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteTargetsTargetIDScheduledscansIDRequest struct {
	PathParams DeleteTargetsTargetIDScheduledscansIDPathParams
}

type DeleteTargetsTargetIDScheduledscansIDResponse struct {
	ContentType                                                   string
	StatusCode                                                    int64
	DeleteTargetsTargetIDScheduledscansID401ApplicationJSONObject *DeleteTargetsTargetIDScheduledscansID401ApplicationJSON
	DeleteTargetsTargetIDScheduledscansID403ApplicationJSONObject *DeleteTargetsTargetIDScheduledscansID403ApplicationJSON
}
