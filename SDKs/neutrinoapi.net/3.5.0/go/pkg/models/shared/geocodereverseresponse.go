package shared

type GeocodeReverseResponse struct {
	Address           string              `json:"address"`
	AddressComponents map[string]string   `json:"addressComponents"`
	City              string              `json:"city"`
	Country           string              `json:"country"`
	CountryCode       string              `json:"countryCode"`
	CountryCode3      string              `json:"countryCode3"`
	CurrencyCode      string              `json:"currencyCode"`
	Found             bool                `json:"found"`
	Latitude          float64             `json:"latitude"`
	LocationTags      []string            `json:"locationTags"`
	LocationType      string              `json:"locationType"`
	Longitude         float64             `json:"longitude"`
	PostalCode        string              `json:"postalCode"`
	State             string              `json:"state"`
	Timezone          map[string]Timezone `json:"timezone"`
}
