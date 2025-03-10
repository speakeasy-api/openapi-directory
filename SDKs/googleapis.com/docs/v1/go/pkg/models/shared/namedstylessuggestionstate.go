// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// NamedStylesSuggestionState - The suggestion state of a NamedStyles message.
type NamedStylesSuggestionState struct {
	// A mask that indicates which of the fields on the corresponding NamedStyle in styles have been changed in this suggestion. The order of these named style suggestion states matches the order of the corresponding named style within the named styles suggestion.
	StylesSuggestionStates []NamedStyleSuggestionState `json:"stylesSuggestionStates,omitempty"`
}
