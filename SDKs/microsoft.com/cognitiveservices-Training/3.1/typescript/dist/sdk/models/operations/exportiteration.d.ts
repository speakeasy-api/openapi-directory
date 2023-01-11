import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportIterationPathParams extends SpeakeasyBase {
    iterationId: string;
    projectId: string;
}
export declare enum ExportIterationFlavorEnum {
    Linux = "Linux",
    Windows = "Windows",
    Onnx10 = "ONNX10",
    Onnx12 = "ONNX12",
    Arm = "ARM",
    TensorFlowNormal = "TensorFlowNormal",
    TensorFlowLite = "TensorFlowLite"
}
export declare enum ExportIterationPlatformEnum {
    CoreMl = "CoreML",
    TensorFlow = "TensorFlow",
    DockerFile = "DockerFile",
    Onnx = "ONNX",
    Vaidk = "VAIDK"
}
export declare class ExportIterationQueryParams extends SpeakeasyBase {
    flavor?: ExportIterationFlavorEnum;
    platform: ExportIterationPlatformEnum;
}
export declare class ExportIterationHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class ExportIterationRequest extends SpeakeasyBase {
    pathParams: ExportIterationPathParams;
    queryParams: ExportIterationQueryParams;
    headers: ExportIterationHeaders;
}
export declare class ExportIterationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    export?: shared.Export;
    statusCode: number;
}
