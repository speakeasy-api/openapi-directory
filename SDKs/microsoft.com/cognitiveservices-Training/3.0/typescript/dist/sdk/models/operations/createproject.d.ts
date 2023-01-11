import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateProjectClassificationTypeEnum {
    Multiclass = "Multiclass",
    Multilabel = "Multilabel"
}
export declare enum CreateProjectTargetExportPlatformsEnum {
    CoreMl = "CoreML",
    TensorFlow = "TensorFlow",
    DockerFile = "DockerFile",
    Onnx = "ONNX",
    Vaidk = "VAIDK"
}
export declare class CreateProjectQueryParams extends SpeakeasyBase {
    classificationType?: CreateProjectClassificationTypeEnum;
    description?: string;
    domainId?: string;
    name: string;
    targetExportPlatforms?: CreateProjectTargetExportPlatformsEnum[];
}
export declare class CreateProjectHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    queryParams: CreateProjectQueryParams;
    headers: CreateProjectHeaders;
}
export declare class CreateProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    project?: shared.Project;
    statusCode: number;
}
