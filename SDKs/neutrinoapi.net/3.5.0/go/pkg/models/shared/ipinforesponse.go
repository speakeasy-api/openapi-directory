package shared

type IPInfoResponse struct {
	City          string              `json:"city"`
	ContinentCode string              `json:"continentCode"`
	Country       string              `json:"country"`
	CountryCode   string              `json:"countryCode"`
	CountryCode3  string              `json:"countryCode3"`
	CurrencyCode  string              `json:"currencyCode"`
	HostDomain    string              `json:"hostDomain"`
	Hostname      string              `json:"hostname"`
	IP            string              `json:"ip"`
	IsBogon       bool                `json:"isBogon"`
	IsV4Mapped    bool                `json:"isV4Mapped"`
	IsV6          bool                `json:"isV6"`
	Latitude      float64             `json:"latitude"`
	Longitude     float64             `json:"longitude"`
	Region        string              `json:"region"`
	Timezone      map[string]Timezone `json:"timezone"`
	Valid         bool                `json:"valid"`
}
