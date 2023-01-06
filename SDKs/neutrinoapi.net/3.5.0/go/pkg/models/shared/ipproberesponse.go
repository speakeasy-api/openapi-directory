package shared

type IPProbeResponse struct {
	AsAge               int32    `json:"asAge"`
	AsCidr              string   `json:"asCidr"`
	AsCountryCode       string   `json:"asCountryCode"`
	AsCountryCode3      string   `json:"asCountryCode3"`
	AsDescription       string   `json:"asDescription"`
	AsDomains           []string `json:"asDomains"`
	Asn                 string   `json:"asn"`
	City                string   `json:"city"`
	ContinentCode       string   `json:"continentCode"`
	Country             string   `json:"country"`
	CountryCode         string   `json:"countryCode"`
	CountryCode3        string   `json:"countryCode3"`
	CurrencyCode        string   `json:"currencyCode"`
	HostDomain          string   `json:"hostDomain"`
	Hostname            string   `json:"hostname"`
	IP                  string   `json:"ip"`
	IsBogon             bool     `json:"isBogon"`
	IsHosting           bool     `json:"isHosting"`
	IsIsp               bool     `json:"isIsp"`
	IsProxy             bool     `json:"isProxy"`
	IsV4Mapped          bool     `json:"isV4Mapped"`
	IsV6                bool     `json:"isV6"`
	IsVpn               bool     `json:"isVpn"`
	ProviderDescription string   `json:"providerDescription"`
	ProviderDomain      string   `json:"providerDomain"`
	ProviderType        string   `json:"providerType"`
	ProviderWebsite     string   `json:"providerWebsite"`
	Region              string   `json:"region"`
	Valid               bool     `json:"valid"`
	VpnDomain           string   `json:"vpnDomain"`
}
