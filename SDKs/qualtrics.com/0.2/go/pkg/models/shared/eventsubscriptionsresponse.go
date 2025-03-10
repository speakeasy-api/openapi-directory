// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type EventSubscriptionsResponseMeta struct {
	HTTPStatus *string `json:"httpStatus,omitempty"`
	RequestID  *string `json:"requestId,omitempty"`
}

type EventSubscriptionsResponseResultMeta struct {
	HTTPStatus *string `json:"httpStatus,omitempty"`
}

type EventSubscriptionsResponseResultResult struct {
	ID *string `json:"id,omitempty"`
}

type EventSubscriptionsResponseResult struct {
	Meta   *EventSubscriptionsResponseResultMeta   `json:"meta,omitempty"`
	Result *EventSubscriptionsResponseResultResult `json:"result,omitempty"`
}

// EventSubscriptionsResponse - OK - web hook registered
type EventSubscriptionsResponse struct {
	Meta   *EventSubscriptionsResponseMeta   `json:"meta,omitempty"`
	Result *EventSubscriptionsResponseResult `json:"result,omitempty"`
}
