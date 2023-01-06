package shared

type D2PAssociation struct {
	Frequency *EntityReference `json:"frequency,omitempty"`
	Onset     *EntityReference `json:"onset,omitempty"`
}
