package shared

// ListShipmentErrorsResponseBodyPaginationLink
// Helpful links to other pages of results
type ListShipmentErrorsResponseBodyPaginationLink struct {
	First Link         `json:"first"`
	Last  Link         `json:"last"`
	Next  OptionalLink `json:"next"`
	Prev  OptionalLink `json:"prev"`
}

// ListShipmentErrorsResponseBody
// A shipment errors response body
type ListShipmentErrorsResponseBody struct {
	Errors []ShipmentResponseError                      `json:"errors"`
	Links  ListShipmentErrorsResponseBodyPaginationLink `json:"links"`
}
