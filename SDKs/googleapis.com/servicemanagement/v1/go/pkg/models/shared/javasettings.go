package shared

// JavaSettings
// Settings for Java client libraries.
type JavaSettings struct {
	Common            *CommonLanguageSettings `json:"common,omitempty"`
	LibraryPackage    *string                 `json:"libraryPackage,omitempty"`
	ServiceClassNames map[string]string       `json:"serviceClassNames,omitempty"`
}
