// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleCloudDialogflowCxV3EventHandler - An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow.
type GoogleCloudDialogflowCxV3EventHandler struct {
	// Required. The name of the event to handle.
	Event *string `json:"event,omitempty"`
	// Output only. The unique identifier of this event handler.
	Name *string `json:"name,omitempty"`
	// The target flow to transition to. Format: `projects//locations//agents//flows/`.
	TargetFlow *string `json:"targetFlow,omitempty"`
	// The target page to transition to. Format: `projects//locations//agents//flows//pages/`.
	TargetPage *string `json:"targetPage,omitempty"`
	// A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
	TriggerFulfillment *GoogleCloudDialogflowCxV3Fulfillment `json:"triggerFulfillment,omitempty"`
}

// GoogleCloudDialogflowCxV3EventHandlerInput - An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow.
type GoogleCloudDialogflowCxV3EventHandlerInput struct {
	// Required. The name of the event to handle.
	Event *string `json:"event,omitempty"`
	// The target flow to transition to. Format: `projects//locations//agents//flows/`.
	TargetFlow *string `json:"targetFlow,omitempty"`
	// The target page to transition to. Format: `projects//locations//agents//flows//pages/`.
	TargetPage *string `json:"targetPage,omitempty"`
	// A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
	TriggerFulfillment *GoogleCloudDialogflowCxV3FulfillmentInput `json:"triggerFulfillment,omitempty"`
}
