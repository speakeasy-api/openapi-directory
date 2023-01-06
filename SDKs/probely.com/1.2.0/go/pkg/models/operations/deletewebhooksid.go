package operations

type DeleteWebhooksIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteWebhooksID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteWebhooksID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteWebhooksID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteWebhooksIDRequest struct {
	PathParams DeleteWebhooksIDPathParams
}

type DeleteWebhooksIDResponse struct {
	ContentType                              string
	StatusCode                               int64
	DeleteWebhooksID401ApplicationJSONObject *DeleteWebhooksID401ApplicationJSON
	DeleteWebhooksID403ApplicationJSONObject *DeleteWebhooksID403ApplicationJSON
	DeleteWebhooksID404ApplicationJSONObject *DeleteWebhooksID404ApplicationJSON
}
