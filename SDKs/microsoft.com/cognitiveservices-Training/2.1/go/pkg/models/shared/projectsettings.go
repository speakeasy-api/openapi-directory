package shared

type ProjectSettingsClassificationTypeEnum string

const (
	ProjectSettingsClassificationTypeEnumMulticlass ProjectSettingsClassificationTypeEnum = "Multiclass"
	ProjectSettingsClassificationTypeEnumMultilabel ProjectSettingsClassificationTypeEnum = "Multilabel"
)

// ProjectSettings
// Represents settings associated with a project
type ProjectSettings struct {
	ClassificationType *ProjectSettingsClassificationTypeEnum `json:"classificationType,omitempty"`
	DomainID           *string                                `json:"domainId,omitempty"`
}
