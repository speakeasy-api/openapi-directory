package shared

// ParseAddressResponseBody
// The parsed address, as well as a confidence score and a list of all the entities that were recognized in the text.
type ParseAddressResponseBody struct {
	Address  PartialAddress     `json:"address"`
	Entities []RecognizedEntity `json:"entities"`
	Score    float64            `json:"score"`
}
