package shared

type Timezone struct {
	Abbr *string `json:"abbr,omitempty"`
	Date *string `json:"date,omitempty"`
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Time *string `json:"time,omitempty"`
}
