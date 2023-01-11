import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectSettingsClassificationTypeEnum {
    Multiclass = "Multiclass",
    Multilabel = "Multilabel"
}

export enum ProjectSettingsTargetExportPlatformsEnum {
    CoreMl = "CoreML",
    TensorFlow = "TensorFlow",
    DockerFile = "DockerFile",
    Onnx = "ONNX",
    Vaidk = "VAIDK"
}


// ProjectSettings
/** 
 * Represents settings associated with a project.
**/
export class ProjectSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classificationType" })
  classificationType?: ProjectSettingsClassificationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=domainId" })
  domainId?: string;

  @SpeakeasyMetadata({ data: "json, name=targetExportPlatforms" })
  targetExportPlatforms?: ProjectSettingsTargetExportPlatformsEnum[];
}
