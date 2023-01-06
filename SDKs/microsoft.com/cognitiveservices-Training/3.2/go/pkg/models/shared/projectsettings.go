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
	ClassificationType      *ProjectSettingsClassificationTypeEnum     `json:"classificationType,omitempty"`
	DetectionParameters     *string                                    `json:"detectionParameters,omitempty"`
	DomainID                *string                                    `json:"domainId,omitempty"`
	ImageProcessingSettings *ImageProcessingSettings                   `json:"imageProcessingSettings,omitempty"`
	TargetExportPlatforms   []ProjectSettingsTargetExportPlatformsEnum `json:"targetExportPlatforms,omitempty"`
	UseNegativeSet          *bool                                      `json:"useNegativeSet,omitempty"`
}

// ProjectSettingsInput
// Represents settings associated with a project.
type ProjectSettingsInput struct {
	ClassificationType      *ProjectSettingsClassificationTypeEnum     `json:"classificationType,omitempty" form:"name=classificationType"`
	DomainID                *string                                    `json:"domainId,omitempty" form:"name=domainId"`
	ImageProcessingSettings *ImageProcessingSettings                   `json:"imageProcessingSettings,omitempty" form:"name=imageProcessingSettings"`
	TargetExportPlatforms   []ProjectSettingsTargetExportPlatformsEnum `json:"targetExportPlatforms,omitempty" form:"name=targetExportPlatforms"`
}
