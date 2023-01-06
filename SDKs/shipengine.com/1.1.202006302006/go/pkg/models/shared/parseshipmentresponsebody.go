package shared

// ParseShipmentResponseBody
// The parsed shipment, as well as a confidence score and a list of all the shipping entities that were recognized in the text.
type ParseShipmentResponseBody struct {
	Entities []RecognizedEntity `json:"entities"`
	Score    float64            `json:"score"`
	Shipment PartialShipment    `json:"shipment"`
}
