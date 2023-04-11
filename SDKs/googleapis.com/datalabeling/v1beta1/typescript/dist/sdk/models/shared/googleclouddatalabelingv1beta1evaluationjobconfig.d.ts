import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1BoundingPolyConfig } from "./googleclouddatalabelingv1beta1boundingpolyconfig";
import { GoogleCloudDatalabelingV1beta1EvaluationConfig } from "./googleclouddatalabelingv1beta1evaluationconfig";
import { GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig } from "./googleclouddatalabelingv1beta1evaluationjobalertconfig";
import { GoogleCloudDatalabelingV1beta1HumanAnnotationConfig } from "./googleclouddatalabelingv1beta1humanannotationconfig";
import { GoogleCloudDatalabelingV1beta1ImageClassificationConfig } from "./googleclouddatalabelingv1beta1imageclassificationconfig";
import { GoogleCloudDatalabelingV1beta1InputConfig } from "./googleclouddatalabelingv1beta1inputconfig";
import { GoogleCloudDatalabelingV1beta1TextClassificationConfig } from "./googleclouddatalabelingv1beta1textclassificationconfig";
/**
 * Configures specific details of how a continuous evaluation job works. Provide this configuration when you create an EvaluationJob.
 */
export declare class GoogleCloudDatalabelingV1beta1EvaluationJobConfig extends SpeakeasyBase {
    /**
     * Required. Prediction keys that tell Data Labeling Service where to find the data for evaluation in your BigQuery table. When the service samples prediction input and output from your model version and saves it to BigQuery, the data gets stored as JSON strings in the BigQuery table. These keys tell Data Labeling Service how to parse the JSON. You can provide the following entries in this field: * `data_json_key`: the data key for prediction input. You must provide either this key or `reference_json_key`. * `reference_json_key`: the data reference key for prediction input. You must provide either this key or `data_json_key`. * `label_json_key`: the label key for prediction output. Required. * `label_score_json_key`: the score key for prediction output. Required. * `bounding_box_json_key`: the bounding box key for prediction output. Required if your model version perform image object detection. Learn [how to configure prediction keys](/ml-engine/docs/continuous-evaluation/create-job#prediction-keys).
     */
    bigqueryImportKeys?: Record<string, string>;
    /**
     * Config for image bounding poly (and bounding box) human labeling task.
     */
    boundingPolyConfig?: GoogleCloudDatalabelingV1beta1BoundingPolyConfig;
    /**
     * Configuration details used for calculating evaluation metrics and creating an Evaluation.
     */
    evaluationConfig?: GoogleCloudDatalabelingV1beta1EvaluationConfig;
    /**
     * Provides details for how an evaluation job sends email alerts based on the results of a run.
     */
    evaluationJobAlertConfig?: GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig;
    /**
     * Required. The maximum number of predictions to sample and save to BigQuery during each evaluation interval. This limit overrides `example_sample_percentage`: even if the service has not sampled enough predictions to fulfill `example_sample_perecentage` during an interval, it stops sampling predictions when it meets this limit.
     */
    exampleCount?: number;
    /**
     * Required. Fraction of predictions to sample and save to BigQuery during each evaluation interval. For example, 0.1 means 10% of predictions served by your model version get saved to BigQuery.
     */
    exampleSamplePercentage?: number;
    /**
     * Configuration for how human labeling task should be done.
     */
    humanAnnotationConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
    /**
     * Config for image classification human labeling task.
     */
    imageClassificationConfig?: GoogleCloudDatalabelingV1beta1ImageClassificationConfig;
    /**
     * The configuration of input data, including data type, location, etc.
     */
    inputConfig?: GoogleCloudDatalabelingV1beta1InputConfig;
    /**
     * Config for text classification human labeling task.
     */
    textClassificationConfig?: GoogleCloudDatalabelingV1beta1TextClassificationConfig;
}
