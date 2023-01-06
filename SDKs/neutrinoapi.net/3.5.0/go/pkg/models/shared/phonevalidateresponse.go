package shared

type PhoneValidateResponse struct {
	Country                  string `json:"country"`
	CountryCode              string `json:"countryCode"`
	CountryCode3             string `json:"countryCode3"`
	CurrencyCode             string `json:"currencyCode"`
	InternationalCallingCode int32  `json:"internationalCallingCode"`
	InternationalNumber      string `json:"internationalNumber"`
	IsMobile                 bool   `json:"isMobile"`
	LocalNumber              string `json:"localNumber"`
	Location                 string `json:"location"`
	PrefixNetwork            string `json:"prefixNetwork"`
	Type                     string `json:"type"`
	Valid                    bool   `json:"valid"`
}
