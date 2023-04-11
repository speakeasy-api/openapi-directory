import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents output related to a built-in algorithm Job.
 */
export declare class GoogleCloudMlV1BuiltInAlgorithmOutput extends SpeakeasyBase {
    /**
     * Framework on which the built-in algorithm was trained.
     */
    framework?: string;
    /**
     * The Cloud Storage path to the `model/` directory where the training job saves the trained model. Only set for successful jobs that don't use hyperparameter tuning.
     */
    modelPath?: string;
    /**
     * Python version on which the built-in algorithm was trained.
     */
    pythonVersion?: string;
    /**
     * AI Platform runtime version on which the built-in algorithm was trained.
     */
    runtimeVersion?: string;
}
