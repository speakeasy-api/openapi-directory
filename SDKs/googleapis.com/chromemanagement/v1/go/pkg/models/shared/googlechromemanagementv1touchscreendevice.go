// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleChromeManagementV1TouchScreenDevice - Information of an internal touch screen device.
type GoogleChromeManagementV1TouchScreenDevice struct {
	// Output only. Touch screen device display name.
	DisplayName *string `json:"displayName,omitempty"`
	// Output only. Touch screen device is stylus capable or not.
	StylusCapable *bool `json:"stylusCapable,omitempty"`
	// Output only. Number of touch points supported on the device.
	TouchPointCount *int `json:"touchPointCount,omitempty"`
}
