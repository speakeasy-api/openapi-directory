package shared

type ProjectSettingsClassificationTypeEnum string

const (
	ProjectSettingsClassificationTypeEnumMulticlass ProjectSettingsClassificationTypeEnum = "Multiclass"
	ProjectSettingsClassificationTypeEnumMultilabel ProjectSettingsClassificationTypeEnum = "Multilabel"
)

type ProjectSettingsTargetExportPlatformsEnum string

const (
	ProjectSettingsTargetExportPlatformsEnumCoreMl     ProjectSettingsTargetExportPlatformsEnum = "CoreML"
	ProjectSettingsTargetExportPlatformsEnumTensorFlow ProjectSettingsTargetExportPlatformsEnum = "TensorFlow"
	ProjectSettingsTargetExportPlatformsEnumDockerFile ProjectSettingsTargetExportPlatformsEnum = "DockerFile"
	ProjectSettingsTargetExportPlatformsEnumOnnx       ProjectSettingsTargetExportPlatformsEnum = "ONNX"
	ProjectSettingsTargetExportPlatformsEnumVaidk      ProjectSettingsTargetExportPlatformsEnum = "VAIDK"
)

// ProjectSettings
// Represents settings associated with a project.
type ProjectSettings struct {
	ClassificationType    *ProjectSettingsClassificationTypeEnum     `json:"classificationType,omitempty" form:"name=classificationType"`
	DomainID              *string                                    `json:"domainId,omitempty" form:"name=domainId"`
	TargetExportPlatforms []ProjectSettingsTargetExportPlatformsEnum `json:"targetExportPlatforms,omitempty" form:"name=targetExportPlatforms"`
}
