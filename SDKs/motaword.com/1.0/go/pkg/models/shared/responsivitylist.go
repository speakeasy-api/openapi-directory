package shared

type ResponsivityList struct {
	Links        *LinksMeta     `json:"links,omitempty"`
	Responsivity []Responsivity `json:"responsivity,omitempty"`
}
