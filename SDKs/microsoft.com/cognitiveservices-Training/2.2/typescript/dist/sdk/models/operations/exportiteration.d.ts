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
    Onnx12 = "ONNX12"
}
/**
 * The target platform.
 */
export declare enum ExportIterationPlatformEnum {
    CoreML = "CoreML",
    TensorFlow = "TensorFlow",
    DockerFile = "DockerFile",
    Onnx = "ONNX"
}
export declare class ExportIterationRequest extends SpeakeasyBase {
    trainingKey: string;
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
     * OK
     */
    export?: shared.Export;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
