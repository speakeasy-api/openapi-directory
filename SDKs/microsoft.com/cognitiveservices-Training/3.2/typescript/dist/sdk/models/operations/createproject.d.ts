import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of classifier to create for this project.
 */
export declare enum CreateProjectClassificationTypeEnum {
    Multiclass = "Multiclass",
    Multilabel = "Multilabel"
}
export declare enum CreateProjectTargetExportPlatformsEnum {
    CoreML = "CoreML",
    TensorFlow = "TensorFlow",
    DockerFile = "DockerFile",
    Onnx = "ONNX",
    Vaidk = "VAIDK"
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    /**
     * The type of classifier to create for this project.
     */
    classificationType?: CreateProjectClassificationTypeEnum;
    /**
     * The description of the project.
     */
    description?: string;
    /**
     * The id of the domain to use for this project. Defaults to General.
     */
    domainId?: string;
    /**
     * Name of the project.
     */
    name: string;
    /**
     * List of platforms the trained model is intending exporting to.
     */
    targetExportPlatforms?: CreateProjectTargetExportPlatformsEnum[];
}
export declare class CreateProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    /**
     * OK
     */
    project?: shared.Project;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
