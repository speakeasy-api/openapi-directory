package shared

// GetBatchByIDResponseBodyOptionalLink
// A link to a related resource, or an empty object if there is no resource to link to
type GetBatchByIDResponseBodyOptionalLink struct {
	Href *string `json:"href,omitempty"`
	Type *string `json:"type,omitempty"`
}

// GetBatchByIDResponseBodyLabelDownload
// Reference to the various downloadable file formats for the generated label
type GetBatchByIDResponseBodyLabelDownload struct {
	Href *string `json:"href,omitempty"`
	Pdf  *string `json:"pdf,omitempty"`
	Png  *string `json:"png,omitempty"`
	Zpl  *string `json:"zpl,omitempty"`
}

// GetBatchByIDResponseBody
// Batches are an advanced feature of ShipEngine designed for users who need to generate hundreds or
// thousands of labels at a time.
type GetBatchByIDResponseBody struct {
	BatchErrorsURL    GetBatchByIDResponseBodyOptionalLink  `json:"batch_errors_url"`
	BatchID           map[string]interface{}                `json:"batch_id"`
	BatchLabelsURL    OptionalLink                          `json:"batch_labels_url"`
	BatchNotes        string                                `json:"batch_notes"`
	BatchShipmentsURL OptionalLink                          `json:"batch_shipments_url"`
	Completed         int32                                 `json:"completed"`
	Count             int32                                 `json:"count"`
	CreatedAt         map[string]interface{}                `json:"created_at"`
	Errors            int32                                 `json:"errors"`
	ExternalBatchID   string                                `json:"external_batch_id"`
	FormDownload      GetBatchByIDResponseBodyOptionalLink  `json:"form_download"`
	Forms             int32                                 `json:"forms"`
	LabelDownload     GetBatchByIDResponseBodyLabelDownload `json:"label_download"`
	LabelFormat       map[string]interface{}                `json:"label_format"`
	LabelLayout       map[string]interface{}                `json:"label_layout"`
	ProcessedAt       map[string]interface{}                `json:"processed_at"`
	Status            map[string]interface{}                `json:"status"`
	Warnings          int32                                 `json:"warnings"`
}
