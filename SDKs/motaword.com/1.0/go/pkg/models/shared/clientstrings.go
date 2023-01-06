package shared

type ClientStrings struct {
	Meta    *PagingMeta                    `json:"meta,omitempty"`
	Strings []ClientStringWithTranslations `json:"strings,omitempty"`
}
