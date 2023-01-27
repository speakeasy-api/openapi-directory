package shared

// RulesFile
// Details of a single rules file
type RulesFile struct {
	RulesContent        *string `json:"rulesContent,omitempty"`
	RulesSourceFilename *string `json:"rulesSourceFilename,omitempty"`
}
