import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the model.
 */
export declare enum ModelStatusEnum {
    Queued = "QUEUED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Killed = "KILLED",
    FailedWithRetries = "FAILED_WITH_RETRIES"
}
export declare class Model extends SpeakeasyBase {
    /**
     * Algorithm used to create the model. Returned only when the modelType is image-detection.
     */
    algorithm?: string;
    /**
     * Date and time that the model was created.
     */
    createdAt?: Date;
    /**
     * ID of the dataset trained to create the model.
     */
    datasetId: number;
    /**
     * Not available yet
     */
    datasetVersionId: number;
    /**
     * Reason the dataset training failed. Returned only if the training status is FAILED.
     */
    failureMsg?: string;
    /**
     * Model language inherited from the dataset language. For image datasets, default is N/A. For text datasets, default is en_US.
     */
    language?: string;
    /**
     * ID of the model. Contains letters and numbers.
     */
    modelId: string;
    /**
     * Type of data from which the model was created.
     */
    modelType?: string;
    /**
     * Name of the model.
     */
    name: string;
    /**
     * Object returned; in this case, model.
     */
    object?: string;
    /**
     * How far the dataset training has progressed. Values are between 0�1.
     */
    progress: number;
    /**
     * Status of the model.
     */
    status: ModelStatusEnum;
    /**
     * Date and time that the model was last updated.
     */
    updatedAt?: Date;
}
