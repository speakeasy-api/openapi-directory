package shared

type StringList struct {
	Meta         *PagingMeta              `json:"meta,omitempty"`
	Translations []StringWithTranslations `json:"translations,omitempty"`
}
