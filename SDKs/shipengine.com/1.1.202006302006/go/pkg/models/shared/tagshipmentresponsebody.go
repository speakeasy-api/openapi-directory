package shared

// TagShipmentResponseBodyTag
// Tags are arbitrary strings that you can use to categorize shipments. For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.
type TagShipmentResponseBodyTag struct {
	Name string `json:"name"`
}

// TagShipmentResponseBody
// A shipment add tag response body
type TagShipmentResponseBody struct {
	ShipmentID map[string]interface{}     `json:"shipment_id"`
	Tag        TagShipmentResponseBodyTag `json:"tag"`
}
