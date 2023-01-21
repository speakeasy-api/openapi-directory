package shared

type SDKInfoLanguageEnum string

const (
	SDKInfoLanguageEnumUnknown SDKInfoLanguageEnum = "UNKNOWN"
	SDKInfoLanguageEnumJava    SDKInfoLanguageEnum = "JAVA"
	SDKInfoLanguageEnumPython  SDKInfoLanguageEnum = "PYTHON"
	SDKInfoLanguageEnumGo      SDKInfoLanguageEnum = "GO"
)

// SDKInfo
// SDK Information.
type SDKInfo struct {
	Language *SDKInfoLanguageEnum `json:"language,omitempty"`
	Version  *string              `json:"version,omitempty"`
}
