import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationEvaluationMetrics } from "./classificationevaluationmetrics";
import { ImageObjectDetectionEvaluationMetrics } from "./imageobjectdetectionevaluationmetrics";
import { RegressionEvaluationMetrics } from "./regressionevaluationmetrics";
import { TextExtractionEvaluationMetrics } from "./textextractionevaluationmetrics";
import { TextSentimentEvaluationMetrics } from "./textsentimentevaluationmetrics";
import { TranslationEvaluationMetrics } from "./translationevaluationmetrics";
import { VideoObjectTrackingEvaluationMetrics } from "./videoobjecttrackingevaluationmetrics";
/**
 * Evaluation results of a model.
 */
export declare class ModelEvaluation extends SpeakeasyBase {
    /**
     * Output only. The ID of the annotation spec that the model evaluation applies to. The The ID is empty for the overall model evaluation. For Tables annotation specs in the dataset do not exist and this ID is always not set, but for CLASSIFICATION prediction_type-s the display_name field is used.
     */
    annotationSpecId?: string;
    /**
     * Model evaluation metrics for classification problems. Note: For Video Classification this metrics only describe quality of the Video Classification predictions of "segment_classification" type.
     */
    classificationEvaluationMetrics?: ClassificationEvaluationMetrics;
    /**
     * Output only. Timestamp when this model evaluation was created.
     */
    createTime?: string;
    /**
     * Output only. The value of display_name at the moment when the model was trained. Because this field returns a value at model training time, for different models trained from the same dataset, the values may differ, since display names could had been changed between the two model's trainings. For Tables CLASSIFICATION prediction_type-s distinct values of the target column at the moment of the model evaluation are populated here. The display_name is empty for the overall model evaluation.
     */
    displayName?: string;
    /**
     * Output only. The number of examples used for model evaluation, i.e. for which ground truth from time of model creation is compared against the predicted annotations created by the model. For overall ModelEvaluation (i.e. with annotation_spec_id not set) this is the total number of all examples used for evaluation. Otherwise, this is the count of examples that according to the ground truth were annotated by the annotation_spec_id.
     */
    evaluatedExampleCount?: number;
    /**
     * Model evaluation metrics for image object detection problems. Evaluates prediction quality of labeled bounding boxes.
     */
    imageObjectDetectionEvaluationMetrics?: ImageObjectDetectionEvaluationMetrics;
    /**
     * Output only. Resource name of the model evaluation. Format: `projects/{project_id}/locations/{location_id}/models/{model_id}/modelEvaluations/{model_evaluation_id}`
     */
    name?: string;
    /**
     * Metrics for regression problems.
     */
    regressionEvaluationMetrics?: RegressionEvaluationMetrics;
    /**
     * Model evaluation metrics for text extraction problems.
     */
    textExtractionEvaluationMetrics?: TextExtractionEvaluationMetrics;
    /**
     * Model evaluation metrics for text sentiment problems.
     */
    textSentimentEvaluationMetrics?: TextSentimentEvaluationMetrics;
    /**
     * Evaluation metrics for the dataset.
     */
    translationEvaluationMetrics?: TranslationEvaluationMetrics;
    /**
     * Model evaluation metrics for video object tracking problems. Evaluates prediction quality of both labeled bounding boxes and labeled tracks (i.e. series of bounding boxes sharing same label and instance ID).
     */
    videoObjectTrackingEvaluationMetrics?: VideoObjectTrackingEvaluationMetrics;
}
