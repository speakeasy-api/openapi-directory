import { SpeakeasyBase } from "../../../internal/utils";
import { ImageProcessingSettings } from "./imageprocessingsettings";
/**
 * Gets or sets the classification type of the project.
 */
export declare enum ProjectSettingsClassificationTypeEnum {
    Multiclass = "Multiclass",
    Multilabel = "Multilabel"
}
export declare enum ProjectSettingsTargetExportPlatformsEnum {
    CoreML = "CoreML",
    TensorFlow = "TensorFlow",
    DockerFile = "DockerFile",
    Onnx = "ONNX",
    Vaidk = "VAIDK"
}
/**
 * Represents settings associated with a project.
 */
export declare class ProjectSettingsInput extends SpeakeasyBase {
    /**
     * Gets or sets the classification type of the project.
     */
    classificationType?: ProjectSettingsClassificationTypeEnum;
    /**
     * Gets or sets the id of the Domain to use with this project.
     */
    domainId?: string;
    /**
     * Represents image preprocessing settings used by image augmentation.
     */
    imageProcessingSettings?: ImageProcessingSettings;
    /**
     * A list of ExportPlatform that the trained model should be able to support.
     */
    targetExportPlatforms?: ProjectSettingsTargetExportPlatformsEnum[];
}
/**
 * Represents settings associated with a project.
 */
export declare class ProjectSettings extends SpeakeasyBase {
    /**
     * Gets or sets the classification type of the project.
     */
    classificationType?: ProjectSettingsClassificationTypeEnum;
    /**
     * Detection parameters in use, if any.
     */
    detectionParameters?: string;
    /**
     * Gets or sets the id of the Domain to use with this project.
     */
    domainId?: string;
    /**
     * Represents image preprocessing settings used by image augmentation.
     */
    imageProcessingSettings?: ImageProcessingSettings;
    /**
     * A list of ExportPlatform that the trained model should be able to support.
     */
    targetExportPlatforms?: ProjectSettingsTargetExportPlatformsEnum[];
    /**
     * Indicates if negative set is being used.
     */
    useNegativeSet?: boolean;
}
