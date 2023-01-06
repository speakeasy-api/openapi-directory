package shared

type BinLookupResponse struct {
	CardBrand      string   `json:"cardBrand"`
	CardCategory   string   `json:"cardCategory"`
	CardType       string   `json:"cardType"`
	Country        string   `json:"country"`
	CountryCode    string   `json:"countryCode"`
	CountryCode3   string   `json:"countryCode3"`
	CurrencyCode   string   `json:"currencyCode"`
	IPBlocklisted  bool     `json:"ipBlocklisted"`
	IPBlocklists   []string `json:"ipBlocklists"`
	IPCity         string   `json:"ipCity"`
	IPCountry      string   `json:"ipCountry"`
	IPCountryCode  string   `json:"ipCountryCode"`
	IPCountryCode3 string   `json:"ipCountryCode3"`
	IPMatchesBin   bool     `json:"ipMatchesBin"`
	IPRegion       string   `json:"ipRegion"`
	IsCommercial   bool     `json:"isCommercial"`
	IsPrepaid      bool     `json:"isPrepaid"`
	Issuer         string   `json:"issuer"`
	IssuerPhone    string   `json:"issuerPhone"`
	IssuerWebsite  string   `json:"issuerWebsite"`
	Valid          bool     `json:"valid"`
}
