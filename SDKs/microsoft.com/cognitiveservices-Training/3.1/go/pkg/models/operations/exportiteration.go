package operations

import (
	"openapi/pkg/models/shared"
)

type ExportIterationPathParams struct {
	IterationID string `pathParam:"style=simple,explode=false,name=iterationId"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=projectId"`
}

type ExportIterationFlavorEnum string

const (
	ExportIterationFlavorEnumLinux            ExportIterationFlavorEnum = "Linux"
	ExportIterationFlavorEnumWindows          ExportIterationFlavorEnum = "Windows"
	ExportIterationFlavorEnumOnnx10           ExportIterationFlavorEnum = "ONNX10"
	ExportIterationFlavorEnumOnnx12           ExportIterationFlavorEnum = "ONNX12"
	ExportIterationFlavorEnumArm              ExportIterationFlavorEnum = "ARM"
	ExportIterationFlavorEnumTensorFlowNormal ExportIterationFlavorEnum = "TensorFlowNormal"
	ExportIterationFlavorEnumTensorFlowLite   ExportIterationFlavorEnum = "TensorFlowLite"
)

type ExportIterationPlatformEnum string

const (
	ExportIterationPlatformEnumCoreMl     ExportIterationPlatformEnum = "CoreML"
	ExportIterationPlatformEnumTensorFlow ExportIterationPlatformEnum = "TensorFlow"
	ExportIterationPlatformEnumDockerFile ExportIterationPlatformEnum = "DockerFile"
	ExportIterationPlatformEnumOnnx       ExportIterationPlatformEnum = "ONNX"
	ExportIterationPlatformEnumVaidk      ExportIterationPlatformEnum = "VAIDK"
)

type ExportIterationQueryParams struct {
	Flavor   *ExportIterationFlavorEnum  `queryParam:"style=form,explode=true,name=flavor"`
	Platform ExportIterationPlatformEnum `queryParam:"style=form,explode=true,name=platform"`
}

type ExportIterationHeaders struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
}

type ExportIterationRequest struct {
	PathParams  ExportIterationPathParams
	QueryParams ExportIterationQueryParams
	Headers     ExportIterationHeaders
}

type ExportIterationResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	Export            *shared.Export
	StatusCode        int64
}
