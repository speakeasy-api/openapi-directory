package shared

type ImportRulesJobDetailsFileFormatEnum string

const (
	ImportRulesJobDetailsFileFormatEnumImportRulesFileFormatUnspecified              ImportRulesJobDetailsFileFormatEnum = "IMPORT_RULES_FILE_FORMAT_UNSPECIFIED"
	ImportRulesJobDetailsFileFormatEnumImportRulesFileFormatHarbourBridgeSessionFile ImportRulesJobDetailsFileFormatEnum = "IMPORT_RULES_FILE_FORMAT_HARBOUR_BRIDGE_SESSION_FILE"
	ImportRulesJobDetailsFileFormatEnumImportRulesFileFormatOratopgConfigFile        ImportRulesJobDetailsFileFormatEnum = "IMPORT_RULES_FILE_FORMAT_ORATOPG_CONFIG_FILE"
)

// ImportRulesJobDetails
// Details regarding an Import Rules background job
type ImportRulesJobDetails struct {
	FileFormat *ImportRulesJobDetailsFileFormatEnum `json:"fileFormat,omitempty"`
	Files      []string                             `json:"files,omitempty"`
}
