package shared

// CreateLabelResponseBodyOptionalLink
// A link to a related resource, or an empty object if there is no resource to link to
type CreateLabelResponseBodyOptionalLink struct {
	Href string  `json:"href"`
	Type *string `json:"type,omitempty"`
}

// CreateLabelResponseBodyMonetaryValue
// A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
type CreateLabelResponseBodyMonetaryValue struct {
	Amount   float64      `json:"amount"`
	Currency CurrencyEnum `json:"currency"`
}

// CreateLabelResponseBodyLabelDownload
// Reference to the various downloadable file formats for the generated label
type CreateLabelResponseBodyLabelDownload struct {
	Href *string `json:"href,omitempty"`
	Pdf  *string `json:"pdf,omitempty"`
	Png  *string `json:"png,omitempty"`
	Zpl  *string `json:"zpl,omitempty"`
}

// CreateLabelResponseBodyOutput
// A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.
type CreateLabelResponseBodyOutput struct {
	BatchID         map[string]interface{}               `json:"batch_id"`
	CarrierCode     map[string]interface{}               `json:"carrier_code"`
	CarrierID       map[string]interface{}               `json:"carrier_id"`
	ChargeEvent     LabelChargeEventEnum                 `json:"charge_event"`
	CreatedAt       map[string]interface{}               `json:"created_at"`
	FormDownload    CreateLabelResponseBodyOptionalLink  `json:"form_download"`
	InsuranceClaim  CreateLabelResponseBodyOptionalLink  `json:"insurance_claim"`
	InsuranceCost   CreateLabelResponseBodyMonetaryValue `json:"insurance_cost"`
	IsInternational bool                                 `json:"is_international"`
	IsReturnLabel   bool                                 `json:"is_return_label"`
	LabelDownload   CreateLabelResponseBodyLabelDownload `json:"label_download"`
	LabelFormat     map[string]interface{}               `json:"label_format"`
	LabelID         map[string]interface{}               `json:"label_id"`
	LabelImageID    map[string]interface{}               `json:"label_image_id"`
	LabelLayout     map[string]interface{}               `json:"label_layout"`
	PackageCode     map[string]interface{}               `json:"package_code"`
	Packages        []Package                            `json:"packages"`
	RmaNumber       string                               `json:"rma_number"`
	ServiceCode     map[string]interface{}               `json:"service_code"`
	ShipDate        map[string]interface{}               `json:"ship_date"`
	ShipmentCost    CreateLabelResponseBodyMonetaryValue `json:"shipment_cost"`
	ShipmentID      map[string]interface{}               `json:"shipment_id"`
	Status          map[string]interface{}               `json:"status"`
	Trackable       bool                                 `json:"trackable"`
	TrackingNumber  string                               `json:"tracking_number"`
	TrackingStatus  map[string]interface{}               `json:"tracking_status"`
	Voided          bool                                 `json:"voided"`
	VoidedAt        map[string]interface{}               `json:"voided_at"`
}
