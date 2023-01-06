package shared

type OpenAqCountriesResultMeta struct {
	Found   *int64  `json:"found,omitempty"`
	License *string `json:"license,omitempty"`
	Limit   *int64  `json:"limit,omitempty"`
	Name    *string `json:"name,omitempty"`
	Page    *int64  `json:"page,omitempty"`
	Website *string `json:"website,omitempty"`
}

type OpenAqCountriesResult struct {
	Meta    *OpenAqCountriesResultMeta `json:"meta,omitempty"`
	Results []CountriesRow             `json:"results"`
}
