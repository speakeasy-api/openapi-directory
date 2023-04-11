import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ExportPlatformEnum {
    CoreML = "CoreML",
    TensorFlow = "TensorFlow"
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
    platform?: ExportPlatformEnum;
    status?: ExportStatusEnum;
}
