package shared

type ProjectLinks struct {
	Documents   *Href `json:"documents,omitempty"`
	Glossaries  *Href `json:"glossaries,omitempty"`
	Payment     *Href `json:"payment,omitempty"`
	QuotePdf    *Href `json:"quote-pdf,omitempty"`
	Styleguides *Href `json:"styleguides,omitempty"`
}
