import { SpeakeasyBase } from "../../../internal/utils";
export declare enum IterationClassificationTypeEnum {
    Multiclass = "Multiclass",
    Multilabel = "Multilabel"
}
export declare enum IterationExportableToEnum {
    CoreMl = "CoreML",
    TensorFlow = "TensorFlow",
    DockerFile = "DockerFile",
    Onnx = "ONNX",
    Vaidk = "VAIDK"
}
export declare enum IterationTrainingTypeEnum {
    Regular = "Regular",
    Advanced = "Advanced"
}
/**
 * Iteration model to be sent over JSON.
**/
export declare class Iteration extends SpeakeasyBase {
    classificationType?: IterationClassificationTypeEnum;
    created?: Date;
    domainId?: string;
    exportable?: boolean;
    exportableTo?: IterationExportableToEnum[];
    id?: string;
    lastModified?: Date;
    name: string;
    originalPublishResourceId?: string;
    projectId?: string;
    publishName?: string;
    reservedBudgetInHours?: number;
    status?: string;
    trainedAt?: Date;
    trainingType?: IterationTrainingTypeEnum;
}
/**
 * Iteration model to be sent over JSON.
**/
export declare class IterationInput extends SpeakeasyBase {
    name: string;
}
