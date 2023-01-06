package shared

type Industry struct {
	Caption       *string       `json:"Caption,omitempty"`
	ID            *int64        `json:"ID,omitempty"`
	SubIndustries []SubIndustry `json:"SubIndustries,omitempty"`
}
