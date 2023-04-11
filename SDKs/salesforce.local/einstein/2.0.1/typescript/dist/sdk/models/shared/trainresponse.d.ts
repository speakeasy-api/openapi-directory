import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the model.
 */
export declare enum TrainResponseStatusEnum {
    Queued = "QUEUED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Killed = "KILLED",
    FailedWithRetries = "FAILED_WITH_RETRIES"
}
/**
 * Training Status
 */
export declare class TrainResponse extends SpeakeasyBase {
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
     * Number of epochs used during training.
     */
    epochs?: number;
    /**
     * Reason the dataset training failed. Returned only if the training status is FAILED.
     */
    failureMsg?: string;
    /**
     * Model language inherited from the dataset language. For image datasets, default is N/A. For text datasets, default is en_US.
     */
    language: string;
    /**
     * Learning rate used during training.
     */
    learningRate?: number;
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
     * Object returned; in this case, training.
     */
    object?: string;
    /**
     * How far the dataset training has progressed. Values are between 0�1.
     */
    progress: number;
    /**
     * Where the training job is in the queue. This field appears in the response only if the status is QUEUED.
     */
    queuePosition?: number;
    /**
     * Status of the model.
     */
    status: TrainResponseStatusEnum;
    /**
     * Training parameters passed into the request.
     */
    trainParams?: string;
    /**
     * Returns null when you train a dataset. Training statistics are returned when the status is SUCCEEDED or FAILED.
     */
    trainStats?: string;
    /**
     * Date and time that the model was last updated.
     */
    updatedAt?: Date;
}
