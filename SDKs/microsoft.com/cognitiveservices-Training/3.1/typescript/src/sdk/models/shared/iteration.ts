import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IterationClassificationTypeEnum {
    Multiclass = "Multiclass",
    Multilabel = "Multilabel"
}

export enum IterationExportableToEnum {
    CoreMl = "CoreML",
    TensorFlow = "TensorFlow",
    DockerFile = "DockerFile",
    Onnx = "ONNX",
    Vaidk = "VAIDK"
}

export enum IterationTrainingTypeEnum {
    Regular = "Regular",
    Advanced = "Advanced"
}


// Iteration
/** 
 * Iteration model to be sent over JSON.
**/
export class Iteration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classificationType" })
  classificationType?: IterationClassificationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=domainId" })
  domainId?: string;

  @SpeakeasyMetadata({ data: "json, name=exportable" })
  exportable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=exportableTo" })
  exportableTo?: IterationExportableToEnum[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=originalPublishResourceId" })
  originalPublishResourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=publishName" })
  publishName?: string;

  @SpeakeasyMetadata({ data: "json, name=reservedBudgetInHours" })
  reservedBudgetInHours?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=trainedAt" })
  trainedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=trainingTimeInMinutes" })
  trainingTimeInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=trainingType" })
  trainingType?: IterationTrainingTypeEnum;
}


// IterationInput
/** 
 * Iteration model to be sent over JSON.
**/
export class IterationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;" })
  name: string;
}
