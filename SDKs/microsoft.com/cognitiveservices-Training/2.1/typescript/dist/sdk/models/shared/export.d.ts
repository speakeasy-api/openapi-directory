import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ExportFlavorEnum {
    Linux = "Linux",
    Windows = "Windows"
}
export declare enum ExportPlatformEnum {
    CoreML = "CoreML",
    TensorFlow = "TensorFlow",
    DockerFile = "DockerFile",
    Onnx = "ONNX"
}
export declare enum ExportStatusEnum {
    Exporting = "Exporting",
    Failed = "Failed",
    Done = "Done"
}
/**
 * OK
 */
export declare class Export extends SpeakeasyBase {
    downloadUri?: string;
    flavor?: ExportFlavorEnum;
    newerVersionAvailable?: boolean;
    platform?: ExportPlatformEnum;
    status?: ExportStatusEnum;
}
