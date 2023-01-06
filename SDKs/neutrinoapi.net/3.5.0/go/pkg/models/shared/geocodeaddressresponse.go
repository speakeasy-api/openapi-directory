package shared

type GeocodeAddressResponse struct {
	Found     int32      `json:"found"`
	Locations []Location `json:"locations"`
}
