package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProjectClassificationTypeEnum string

const (
	CreateProjectClassificationTypeEnumMulticlass CreateProjectClassificationTypeEnum = "Multiclass"
	CreateProjectClassificationTypeEnumMultilabel CreateProjectClassificationTypeEnum = "Multilabel"
)

type CreateProjectTargetExportPlatformsEnum string

const (
	CreateProjectTargetExportPlatformsEnumCoreMl     CreateProjectTargetExportPlatformsEnum = "CoreML"
	CreateProjectTargetExportPlatformsEnumTensorFlow CreateProjectTargetExportPlatformsEnum = "TensorFlow"
	CreateProjectTargetExportPlatformsEnumDockerFile CreateProjectTargetExportPlatformsEnum = "DockerFile"
	CreateProjectTargetExportPlatformsEnumOnnx       CreateProjectTargetExportPlatformsEnum = "ONNX"
	CreateProjectTargetExportPlatformsEnumVaidk      CreateProjectTargetExportPlatformsEnum = "VAIDK"
)

type CreateProjectQueryParams struct {
	ClassificationType    *CreateProjectClassificationTypeEnum     `queryParam:"style=form,explode=true,name=classificationType"`
	Description           *string                                  `queryParam:"style=form,explode=true,name=description"`
	DomainID              *string                                  `queryParam:"style=form,explode=true,name=domainId"`
	Name                  string                                   `queryParam:"style=form,explode=true,name=name"`
	TargetExportPlatforms []CreateProjectTargetExportPlatformsEnum `queryParam:"style=form,explode=false,name=targetExportPlatforms"`
}

type CreateProjectRequest struct {
	QueryParams CreateProjectQueryParams
}

type CreateProjectResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	Project           *shared.Project
	StatusCode        int64
}
