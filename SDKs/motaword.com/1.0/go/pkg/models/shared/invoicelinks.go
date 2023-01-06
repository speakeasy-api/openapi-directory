package shared

type InvoiceLinks struct {
	Corporate *Href `json:"corporate,omitempty"`
	HTML      *Href `json:"html,omitempty"`
	JSON      *Href `json:"json,omitempty"`
	Pdf       *Href `json:"pdf,omitempty"`
	Project   *Href `json:"project,omitempty"`
	View      *Href `json:"view,omitempty"`
}
