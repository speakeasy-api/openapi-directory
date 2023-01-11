import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectSettingsClassificationTypeEnum {
    Multiclass = "Multiclass",
    Multilabel = "Multilabel"
}
export declare enum ProjectSettingsTargetExportPlatformsEnum {
    CoreMl = "CoreML",
    TensorFlow = "TensorFlow",
    DockerFile = "DockerFile",
    Onnx = "ONNX",
    Vaidk = "VAIDK"
}
/**
 * Represents settings associated with a project.
**/
export declare class ProjectSettings extends SpeakeasyBase {
    classificationType?: ProjectSettingsClassificationTypeEnum;
    domainId?: string;
    targetExportPlatforms?: ProjectSettingsTargetExportPlatformsEnum[];
}
