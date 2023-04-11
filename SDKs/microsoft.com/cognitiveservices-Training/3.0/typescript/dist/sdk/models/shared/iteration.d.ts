import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Iteration model to be sent over JSON.
 */
export declare class IterationInput extends SpeakeasyBase {
    /**
     * Gets or sets the name of the iteration.
     */
    name: string;
}
/**
 * Gets the classification type of the project.
 */
export declare enum IterationClassificationTypeEnum {
    Multiclass = "Multiclass",
    Multilabel = "Multilabel"
}
export declare enum IterationExportableToEnum {
    CoreML = "CoreML",
    TensorFlow = "TensorFlow",
    DockerFile = "DockerFile",
    Onnx = "ONNX",
    Vaidk = "VAIDK"
}
/**
 * Gets the training type of the iteration.
 */
export declare enum IterationTrainingTypeEnum {
    Regular = "Regular",
    Advanced = "Advanced"
}
/**
 * Iteration model to be sent over JSON.
 */
export declare class Iteration extends SpeakeasyBase {
    /**
     * Gets the classification type of the project.
     */
    classificationType?: IterationClassificationTypeEnum;
    /**
     * Gets the time this iteration was completed.
     */
    created?: Date;
    /**
     * Get or sets a guid of the domain the iteration has been trained on.
     */
    domainId?: string;
    /**
     * Whether the iteration can be exported to another format for download.
     */
    exportable?: boolean;
    /**
     * A set of platforms this iteration can export to.
     */
    exportableTo?: IterationExportableToEnum[];
    /**
     * Gets the id of the iteration.
     */
    id?: string;
    /**
     * Gets the time this iteration was last modified.
     */
    lastModified?: Date;
    /**
     * Gets or sets the name of the iteration.
     */
    name: string;
    /**
     * Resource Provider Id this iteration was originally published to.
     */
    originalPublishResourceId?: string;
    /**
     * Gets the project id of the iteration.
     */
    projectId?: string;
    /**
     * Name of the published model.
     */
    publishName?: string;
    /**
     * Gets the reserved advanced training budget for the iteration.
     */
    reservedBudgetInHours?: number;
    /**
     * Gets the current iteration status.
     */
    status?: string;
    /**
     * Gets the time this iteration was last modified.
     */
    trainedAt?: Date;
    /**
     * Gets the training type of the iteration.
     */
    trainingType?: IterationTrainingTypeEnum;
}
