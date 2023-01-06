package shared

// GetCarrierOptionsResponseBodyCarrierAdvancedOption
// Advanced options that are specific to the carrier
type GetCarrierOptionsResponseBodyCarrierAdvancedOption struct {
	DefaultValue *string `json:"default_value,omitempty"`
	Description  *string `json:"description,omitempty"`
	Name         *string `json:"name,omitempty"`
}

// GetCarrierOptionsResponseBody
// A carrier list options response body
type GetCarrierOptionsResponseBody struct {
	Options []GetCarrierOptionsResponseBodyCarrierAdvancedOption `json:"options,omitempty"`
}
