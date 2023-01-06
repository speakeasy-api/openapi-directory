package shared

// GetBatchByExternalIDResponseBodyOptionalLink
// A link to a related resource, or an empty object if there is no resource to link to
type GetBatchByExternalIDResponseBodyOptionalLink struct {
	Href *string `json:"href,omitempty"`
	Type *string `json:"type,omitempty"`
}

// GetBatchByExternalIDResponseBodyLabelDownload
// Reference to the various downloadable file formats for the generated label
type GetBatchByExternalIDResponseBodyLabelDownload struct {
	Href *string `json:"href,omitempty"`
	Pdf  *string `json:"pdf,omitempty"`
	Png  *string `json:"png,omitempty"`
	Zpl  *string `json:"zpl,omitempty"`
}

// GetBatchByExternalIDResponseBody
// Batches are an advanced feature of ShipEngine designed for users who need to generate hundreds or
// thousands of labels at a time.
type GetBatchByExternalIDResponseBody struct {
	BatchErrorsURL    GetBatchByExternalIDResponseBodyOptionalLink  `json:"batch_errors_url"`
	BatchID           map[string]interface{}                        `json:"batch_id"`
	BatchLabelsURL    OptionalLink                                  `json:"batch_labels_url"`
	BatchNotes        string                                        `json:"batch_notes"`
	BatchShipmentsURL OptionalLink                                  `json:"batch_shipments_url"`
	Completed         int32                                         `json:"completed"`
	Count             int32                                         `json:"count"`
	CreatedAt         map[string]interface{}                        `json:"created_at"`
	Errors            int32                                         `json:"errors"`
	ExternalBatchID   string                                        `json:"external_batch_id"`
	FormDownload      GetBatchByExternalIDResponseBodyOptionalLink  `json:"form_download"`
	Forms             int32                                         `json:"forms"`
	LabelDownload     GetBatchByExternalIDResponseBodyLabelDownload `json:"label_download"`
	LabelFormat       map[string]interface{}                        `json:"label_format"`
	LabelLayout       map[string]interface{}                        `json:"label_layout"`
	ProcessedAt       map[string]interface{}                        `json:"processed_at"`
	Status            map[string]interface{}                        `json:"status"`
	Warnings          int32                                         `json:"warnings"`
}
