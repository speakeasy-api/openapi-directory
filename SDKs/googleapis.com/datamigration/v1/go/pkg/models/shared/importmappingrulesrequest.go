package shared

type ImportMappingRulesRequestRulesFormatEnum string

const (
	ImportMappingRulesRequestRulesFormatEnumImportRulesFileFormatUnspecified              ImportMappingRulesRequestRulesFormatEnum = "IMPORT_RULES_FILE_FORMAT_UNSPECIFIED"
	ImportMappingRulesRequestRulesFormatEnumImportRulesFileFormatHarbourBridgeSessionFile ImportMappingRulesRequestRulesFormatEnum = "IMPORT_RULES_FILE_FORMAT_HARBOUR_BRIDGE_SESSION_FILE"
	ImportMappingRulesRequestRulesFormatEnumImportRulesFileFormatOratopgConfigFile        ImportMappingRulesRequestRulesFormatEnum = "IMPORT_RULES_FILE_FORMAT_ORATOPG_CONFIG_FILE"
)

// ImportMappingRulesRequest
// Request message for 'ImportMappingRules' request.
type ImportMappingRulesRequest struct {
	AutoCommit  *bool                                     `json:"autoCommit,omitempty"`
	RulesFiles  []RulesFile                               `json:"rulesFiles,omitempty"`
	RulesFormat *ImportMappingRulesRequestRulesFormatEnum `json:"rulesFormat,omitempty"`
}
