package shared

// CreateLabelFromShipmentRequestBody
// A purchase label without shipment request body
type CreateLabelFromShipmentRequestBody struct {
	LabelDownloadType *LabelDownloadTypeEnum `json:"label_download_type,omitempty"`
	LabelFormat       map[string]interface{} `json:"label_format,omitempty"`
	LabelLayout       map[string]interface{} `json:"label_layout,omitempty"`
	ValidateAddress   *ValidateAddressEnum   `json:"validate_address,omitempty"`
}
