package shared

type CommonLanguageSettingsDestinationsEnum string

const (
	CommonLanguageSettingsDestinationsEnumClientLibraryDestinationUnspecified CommonLanguageSettingsDestinationsEnum = "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"
	CommonLanguageSettingsDestinationsEnumGithub                              CommonLanguageSettingsDestinationsEnum = "GITHUB"
	CommonLanguageSettingsDestinationsEnumPackageManager                      CommonLanguageSettingsDestinationsEnum = "PACKAGE_MANAGER"
)

// CommonLanguageSettings
// Required information for every language.
type CommonLanguageSettings struct {
	Destinations     []CommonLanguageSettingsDestinationsEnum `json:"destinations,omitempty"`
	ReferenceDocsURI *string                                  `json:"referenceDocsUri,omitempty"`
}
