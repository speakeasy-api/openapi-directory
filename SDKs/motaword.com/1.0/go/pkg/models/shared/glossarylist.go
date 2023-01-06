package shared

type GlossaryList struct {
	Glossaries []Glossary  `json:"glossaries,omitempty"`
	Meta       *PagingMeta `json:"meta,omitempty"`
}
