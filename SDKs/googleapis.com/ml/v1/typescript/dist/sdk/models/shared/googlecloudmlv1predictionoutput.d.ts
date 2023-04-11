import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents results of a prediction job.
 */
export declare class GoogleCloudMlV1PredictionOutput extends SpeakeasyBase {
    /**
     * The number of data instances which resulted in errors.
     */
    errorCount?: string;
    /**
     * Node hours used by the batch prediction job.
     */
    nodeHours?: number;
    /**
     * The output Google Cloud Storage location provided at the job creation time.
     */
    outputPath?: string;
    /**
     * The number of generated predictions.
     */
    predictionCount?: string;
}
