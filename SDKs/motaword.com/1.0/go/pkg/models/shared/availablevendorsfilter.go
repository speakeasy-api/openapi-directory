package shared

type AvailableVendorsFilterTypesEnum string

const (
	AvailableVendorsFilterTypesEnumTranslator  AvailableVendorsFilterTypesEnum = "translator"
	AvailableVendorsFilterTypesEnumProofreader AvailableVendorsFilterTypesEnum = "proofreader"
	AvailableVendorsFilterTypesEnumBoth        AvailableVendorsFilterTypesEnum = "both"
)

type AvailableVendorsFilter struct {
	CorporateID          *float64                          `json:"corporateId,omitempty"`
	ManualWorkPermission *bool                             `json:"manualWorkPermission,omitempty"`
	SourceLanguage       *string                           `json:"sourceLanguage,omitempty"`
	TargetLanguages      []string                          `json:"targetLanguages,omitempty"`
	Types                []AvailableVendorsFilterTypesEnum `json:"types,omitempty"`
}
