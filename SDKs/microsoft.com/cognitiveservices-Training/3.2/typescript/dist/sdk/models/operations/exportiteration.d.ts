import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The flavor of the target platform.
 */
export declare enum ExportIterationFlavorEnum {
    Linux = "Linux",
    Windows = "Windows",
    Onnx10 = "ONNX10",
    Onnx12 = "ONNX12",
    Arm = "ARM",
    TensorFlowNormal = "TensorFlowNormal",
    TensorFlowLite = "TensorFlowLite"
}
/**
 * The target platform.
 */
export declare enum ExportIterationPlatformEnum {
    CoreML = "CoreML",
    TensorFlow = "TensorFlow",
    DockerFile = "DockerFile",
    Onnx = "ONNX",
    Vaidk = "VAIDK"
}
export declare class ExportIterationRequest extends SpeakeasyBase {
    /**
     * The flavor of the target platform.
     */
    flavor?: ExportIterationFlavorEnum;
    /**
     * The iteration id.
     */
    iterationId: string;
    /**
     * The target platform.
     */
    platform: ExportIterationPlatformEnum;
    /**
     * The project id.
     */
    projectId: string;
}
export declare class ExportIterationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    /**
     * OK
     */
    export?: shared.Export;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
