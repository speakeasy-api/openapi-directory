package shared

type HlrLookupResponse struct {
	Country                  string `json:"country"`
	CountryCode              string `json:"countryCode"`
	CountryCode3             string `json:"countryCode3"`
	CurrencyCode             string `json:"currencyCode"`
	CurrentNetwork           string `json:"currentNetwork"`
	HlrStatus                string `json:"hlrStatus"`
	HlrValid                 bool   `json:"hlrValid"`
	Imsi                     string `json:"imsi"`
	InternationalCallingCode int32  `json:"internationalCallingCode"`
	InternationalNumber      string `json:"internationalNumber"`
	IsMobile                 bool   `json:"isMobile"`
	IsPorted                 bool   `json:"isPorted"`
	IsRoaming                bool   `json:"isRoaming"`
	LocalNumber              string `json:"localNumber"`
	Location                 string `json:"location"`
	Mcc                      string `json:"mcc"`
	Mnc                      string `json:"mnc"`
	Msc                      string `json:"msc"`
	Msin                     string `json:"msin"`
	NumberType               string `json:"numberType"`
	NumberValid              bool   `json:"numberValid"`
	OriginNetwork            string `json:"originNetwork"`
	PortedNetwork            string `json:"portedNetwork"`
	RoamingCountryCode       string `json:"roamingCountryCode"`
}
