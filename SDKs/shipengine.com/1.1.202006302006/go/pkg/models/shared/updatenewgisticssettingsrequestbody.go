package shared

// UpdateNewgisticsSettingsRequestBody
// A newgistics account settings request body
type UpdateNewgisticsSettingsRequestBody struct {
	IncludeBarcodeWithOrderNumber    *bool `json:"include_barcode_with_order_number,omitempty"`
	ReceiveEmailOnManifestProcessing *bool `json:"receive_email_on_manifest_processing,omitempty"`
}
