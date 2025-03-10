// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequestInput - Request message for BatchUpdateAccessBindings RPC.
type GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequestInput struct {
	// Required. The requests specifying the access bindings to update. A maximum of 1000 access bindings can be updated in a batch.
	Requests []GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequestInput `json:"requests,omitempty"`
}
