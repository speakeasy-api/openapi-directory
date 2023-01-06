package shared

// CreateReturnLabelResponseBodyOptionalLink
// A link to a related resource, or an empty object if there is no resource to link to
type CreateReturnLabelResponseBodyOptionalLink struct {
	Href string  `json:"href"`
	Type *string `json:"type,omitempty"`
}

// CreateReturnLabelResponseBodyMonetaryValue
// A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
type CreateReturnLabelResponseBodyMonetaryValue struct {
	Amount   float64      `json:"amount"`
	Currency CurrencyEnum `json:"currency"`
}

// CreateReturnLabelResponseBodyLabelDownload
// Reference to the various downloadable file formats for the generated label
type CreateReturnLabelResponseBodyLabelDownload struct {
	Href *string `json:"href,omitempty"`
	Pdf  *string `json:"pdf,omitempty"`
	Png  *string `json:"png,omitempty"`
	Zpl  *string `json:"zpl,omitempty"`
}

// CreateReturnLabelResponseBodyOutput
// A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.
type CreateReturnLabelResponseBodyOutput struct {
	BatchID         map[string]interface{}                      `json:"batch_id,omitempty"`
	CarrierCode     map[string]interface{}                      `json:"carrier_code,omitempty"`
	CarrierID       map[string]interface{}                      `json:"carrier_id,omitempty"`
	ChargeEvent     *LabelChargeEventEnum                       `json:"charge_event,omitempty"`
	CreatedAt       map[string]interface{}                      `json:"created_at,omitempty"`
	FormDownload    *CreateReturnLabelResponseBodyOptionalLink  `json:"form_download,omitempty"`
	InsuranceClaim  *CreateReturnLabelResponseBodyOptionalLink  `json:"insurance_claim,omitempty"`
	InsuranceCost   *CreateReturnLabelResponseBodyMonetaryValue `json:"insurance_cost,omitempty"`
	IsInternational *bool                                       `json:"is_international,omitempty"`
	IsReturnLabel   *bool                                       `json:"is_return_label,omitempty"`
	LabelDownload   *CreateReturnLabelResponseBodyLabelDownload `json:"label_download,omitempty"`
	LabelFormat     map[string]interface{}                      `json:"label_format,omitempty"`
	LabelID         map[string]interface{}                      `json:"label_id,omitempty"`
	LabelImageID    map[string]interface{}                      `json:"label_image_id,omitempty"`
	LabelLayout     map[string]interface{}                      `json:"label_layout,omitempty"`
	PackageCode     map[string]interface{}                      `json:"package_code,omitempty"`
	Packages        []Package                                   `json:"packages,omitempty"`
	RmaNumber       *string                                     `json:"rma_number,omitempty"`
	ServiceCode     map[string]interface{}                      `json:"service_code,omitempty"`
	ShipDate        map[string]interface{}                      `json:"ship_date,omitempty"`
	ShipmentCost    *CreateReturnLabelResponseBodyMonetaryValue `json:"shipment_cost,omitempty"`
	ShipmentID      map[string]interface{}                      `json:"shipment_id,omitempty"`
	Status          map[string]interface{}                      `json:"status,omitempty"`
	Trackable       *bool                                       `json:"trackable,omitempty"`
	TrackingNumber  *string                                     `json:"tracking_number,omitempty"`
	TrackingStatus  map[string]interface{}                      `json:"tracking_status,omitempty"`
	Voided          *bool                                       `json:"voided,omitempty"`
	VoidedAt        map[string]interface{}                      `json:"voided_at,omitempty"`
}
