import { SpeakeasyBase } from "../../../internal/utils";
import { ImageProcessingSettings } from "./imageprocessingsettings";
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
    detectionParameters?: string;
    domainId?: string;
    imageProcessingSettings?: ImageProcessingSettings;
    targetExportPlatforms?: ProjectSettingsTargetExportPlatformsEnum[];
    useNegativeSet?: boolean;
}
/**
 * Represents settings associated with a project.
**/
export declare class ProjectSettingsInput extends SpeakeasyBase {
    classificationType?: ProjectSettingsClassificationTypeEnum;
    domainId?: string;
    imageProcessingSettings?: ImageProcessingSettings;
    targetExportPlatforms?: ProjectSettingsTargetExportPlatformsEnum[];
}
