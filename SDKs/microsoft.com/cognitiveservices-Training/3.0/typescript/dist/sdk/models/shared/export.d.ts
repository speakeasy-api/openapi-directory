import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Flavor of the export.
 */
export declare enum ExportFlavorEnum {
    Linux = "Linux",
    Windows = "Windows",
    Onnx10 = "ONNX10",
    Onnx12 = "ONNX12",
    Arm = "ARM"
}
/**
 * Platform of the export.
 */
export declare enum ExportPlatformEnum {
    CoreML = "CoreML",
    TensorFlow = "TensorFlow",
    DockerFile = "DockerFile",
    Onnx = "ONNX",
    Vaidk = "VAIDK"
}
/**
 * Status of the export.
 */
export declare enum ExportStatusEnum {
    Exporting = "Exporting",
    Failed = "Failed",
    Done = "Done"
}
/**
 * OK
 */
export declare class Export extends SpeakeasyBase {
    /**
     * URI used to download the model.
     */
    downloadUri?: string;
    /**
     * Flavor of the export.
     */
    flavor?: ExportFlavorEnum;
    /**
     * Indicates an updated version of the export package is available and should be re-exported for the latest changes.
     */
    newerVersionAvailable?: boolean;
    /**
     * Platform of the export.
     */
    platform?: ExportPlatformEnum;
    /**
     * Status of the export.
     */
    status?: ExportStatusEnum;
}
