// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// CreateDeviceCodeResponse - Success
type CreateDeviceCodeResponse struct {
	DeviceCode *DeviceCode `json:"device_code,omitempty"`
	// Any errors that occurred during the request.
	Errors []Error `json:"errors,omitempty"`
}
