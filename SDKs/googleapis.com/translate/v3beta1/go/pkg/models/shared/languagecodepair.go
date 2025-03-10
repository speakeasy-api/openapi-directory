// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// LanguageCodePair - Used with unidirectional glossaries.
type LanguageCodePair struct {
	// Required. The BCP-47 language code of the input text, for example, "en-US". Expected to be an exact match for GlossaryTerm.language_code.
	SourceLanguageCode *string `json:"sourceLanguageCode,omitempty"`
	// Required. The BCP-47 language code for translation output, for example, "zh-CN". Expected to be an exact match for GlossaryTerm.language_code.
	TargetLanguageCode *string `json:"targetLanguageCode,omitempty"`
}
