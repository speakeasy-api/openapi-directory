import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information that is specific to TfLite models.
 */
export declare class TfLiteModelInput extends SpeakeasyBase {
    /**
     * The AutoML model id referencing a model you created with the AutoML API. The name should have format 'projects//locations//models/' (This is the model resource name returned from the AutoML API)
     */
    automlModel?: string;
    /**
     * The TfLite file containing the model. (Stored in Google Cloud). The gcs_tflite_uri should have form: gs://some-bucket/some-model.tflite Note: If you update the file in the original location, it is necessary to call UpdateModel for ML to pick up and validate the updated file.
     */
    gcsTfliteUri?: string;
}
/**
 * Information that is specific to TfLite models.
 */
export declare class TfLiteModel extends SpeakeasyBase {
    /**
     * The AutoML model id referencing a model you created with the AutoML API. The name should have format 'projects//locations//models/' (This is the model resource name returned from the AutoML API)
     */
    automlModel?: string;
    /**
     * The TfLite file containing the model. (Stored in Google Cloud). The gcs_tflite_uri should have form: gs://some-bucket/some-model.tflite Note: If you update the file in the original location, it is necessary to call UpdateModel for ML to pick up and validate the updated file.
     */
    gcsTfliteUri?: string;
    /**
     * Output only. The size of the TFLite model
     */
    sizeBytes?: string;
}
