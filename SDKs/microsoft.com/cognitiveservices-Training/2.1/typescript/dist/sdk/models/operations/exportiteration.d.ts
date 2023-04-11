import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The flavor of the target platform (Windows, Linux, ARM, or GPU)
 */
export declare enum ExportIterationFlavorEnum {
    Linux = "Linux",
    Windows = "Windows"
}
/**
 * The target platform (coreml or tensorflow)
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
     * The flavor of the target platform (Windows, Linux, ARM, or GPU)
     */
    flavor?: ExportIterationFlavorEnum;
    /**
     * The iteration id
     */
    iterationId: string;
    /**
     * The target platform (coreml or tensorflow)
     */
    platform: ExportIterationPlatformEnum;
    /**
     * The project id
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
