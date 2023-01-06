package shared

// CreateReturnLabelRequestBody
// A create return label request body
type CreateReturnLabelRequestBody struct {
	ChargeEvent       *LabelChargeEventEnum  `json:"charge_event,omitempty"`
	LabelDownloadType map[string]interface{} `json:"label_download_type,omitempty"`
	LabelFormat       map[string]interface{} `json:"label_format,omitempty"`
	LabelImageID      map[string]interface{} `json:"label_image_id,omitempty"`
	LabelLayout       map[string]interface{} `json:"label_layout,omitempty"`
}
