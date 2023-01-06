package shared

type ExportFlavorEnum string

const (
	ExportFlavorEnumLinux   ExportFlavorEnum = "Linux"
	ExportFlavorEnumWindows ExportFlavorEnum = "Windows"
	ExportFlavorEnumOnnx10  ExportFlavorEnum = "ONNX10"
	ExportFlavorEnumOnnx12  ExportFlavorEnum = "ONNX12"
	ExportFlavorEnumArm     ExportFlavorEnum = "ARM"
)

type ExportPlatformEnum string

const (
	ExportPlatformEnumCoreMl     ExportPlatformEnum = "CoreML"
	ExportPlatformEnumTensorFlow ExportPlatformEnum = "TensorFlow"
	ExportPlatformEnumDockerFile ExportPlatformEnum = "DockerFile"
	ExportPlatformEnumOnnx       ExportPlatformEnum = "ONNX"
	ExportPlatformEnumVaidk      ExportPlatformEnum = "VAIDK"
)

type ExportStatusEnum string

const (
	ExportStatusEnumExporting ExportStatusEnum = "Exporting"
	ExportStatusEnumFailed    ExportStatusEnum = "Failed"
	ExportStatusEnumDone      ExportStatusEnum = "Done"
)

type Export struct {
	DownloadURI           *string             `json:"downloadUri,omitempty"`
	Flavor                *ExportFlavorEnum   `json:"flavor,omitempty"`
	NewerVersionAvailable *bool               `json:"newerVersionAvailable,omitempty"`
	Platform              *ExportPlatformEnum `json:"platform,omitempty"`
	Status                *ExportStatusEnum   `json:"status,omitempty"`
}
