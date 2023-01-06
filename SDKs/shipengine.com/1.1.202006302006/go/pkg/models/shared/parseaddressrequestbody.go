package shared

// ParseAddressRequestBody
// The only required field is `text`, which is the text to be parsed. You can optionally also provide an `address` containing already-known values. For example, you may already know the recipient's name, city, and country, and only want to parse the street address into separate lines.
type ParseAddressRequestBody struct {
	Address *PartialAddress `json:"address,omitempty"`
	Text    string          `json:"text"`
}
