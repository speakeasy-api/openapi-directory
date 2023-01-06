package shared

import (
	"time"
)

type IterationClassificationTypeEnum string

const (
	IterationClassificationTypeEnumMulticlass IterationClassificationTypeEnum = "Multiclass"
	IterationClassificationTypeEnumMultilabel IterationClassificationTypeEnum = "Multilabel"
)

type IterationExportableToEnum string

const (
	IterationExportableToEnumCoreMl     IterationExportableToEnum = "CoreML"
	IterationExportableToEnumTensorFlow IterationExportableToEnum = "TensorFlow"
	IterationExportableToEnumDockerFile IterationExportableToEnum = "DockerFile"
	IterationExportableToEnumOnnx       IterationExportableToEnum = "ONNX"
	IterationExportableToEnumVaidk      IterationExportableToEnum = "VAIDK"
)

type IterationTrainingTypeEnum string

const (
	IterationTrainingTypeEnumRegular  IterationTrainingTypeEnum = "Regular"
	IterationTrainingTypeEnumAdvanced IterationTrainingTypeEnum = "Advanced"
)

// Iteration
// Iteration model to be sent over JSON.
type Iteration struct {
	ClassificationType        *IterationClassificationTypeEnum `json:"classificationType,omitempty"`
	Created                   *time.Time                       `json:"created,omitempty"`
	DomainID                  *string                          `json:"domainId,omitempty"`
	Exportable                *bool                            `json:"exportable,omitempty"`
	ExportableTo              []IterationExportableToEnum      `json:"exportableTo,omitempty"`
	ID                        *string                          `json:"id,omitempty"`
	LastModified              *time.Time                       `json:"lastModified,omitempty"`
	Name                      string                           `json:"name"`
	OriginalPublishResourceID *string                          `json:"originalPublishResourceId,omitempty"`
	ProjectID                 *string                          `json:"projectId,omitempty"`
	PublishName               *string                          `json:"publishName,omitempty"`
	ReservedBudgetInHours     *int32                           `json:"reservedBudgetInHours,omitempty"`
	Status                    *string                          `json:"status,omitempty"`
	TrainedAt                 *time.Time                       `json:"trainedAt,omitempty"`
	TrainingType              *IterationTrainingTypeEnum       `json:"trainingType,omitempty"`
}

// IterationInput
// Iteration model to be sent over JSON.
type IterationInput struct {
	Name string `json:"name" form:"name=name"`
}
