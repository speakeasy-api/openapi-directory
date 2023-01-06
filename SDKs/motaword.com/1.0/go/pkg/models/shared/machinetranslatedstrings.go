package shared

type MachineTranslatedStrings struct {
	Cost    *Monetary                      `json:"cost,omitempty"`
	Strings []ClientStringWithTranslations `json:"strings,omitempty"`
}
