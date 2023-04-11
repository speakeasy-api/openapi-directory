import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Iteration model to be sent over JSON.
 */
export declare class IterationInput extends SpeakeasyBase {
    /**
     * Gets or sets a value indicating whether the iteration is the default iteration for the project.
     */
    isDefault?: boolean;
    /**
     * Gets or sets the name of the iteration.
     */
    name?: string;
}
/**
 * Gets the classification type of the project.
 */
export declare enum IterationClassificationTypeEnum {
    Multiclass = "Multiclass",
    Multilabel = "Multilabel"
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
     * Gets the id of the iteration.
     */
    id?: string;
    /**
     * Gets or sets a value indicating whether the iteration is the default iteration for the project.
     */
    isDefault?: boolean;
    /**
     * Gets the time this iteration was last modified.
     */
    lastModified?: Date;
    /**
     * Gets or sets the name of the iteration.
     */
    name?: string;
    /**
     * Gets The project id. of the iteration.
     */
    projectId?: string;
    /**
     * Gets the current iteration status.
     */
    status?: string;
    /**
     * Gets the time this iteration was last modified.
     */
    trainedAt?: Date;
}
