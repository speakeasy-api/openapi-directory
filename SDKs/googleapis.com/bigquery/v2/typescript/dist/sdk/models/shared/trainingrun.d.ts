import { SpeakeasyBase } from "../../../internal/utils";
import { DataSplitResult } from "./datasplitresult";
import { EvaluationMetrics } from "./evaluationmetrics";
import { GlobalExplanation } from "./globalexplanation";
import { IterationResult } from "./iterationresult";
import { TrainingOptions } from "./trainingoptions";
/**
 * Information about a single training query run for the model.
 */
export declare class TrainingRunInput extends SpeakeasyBase {
    /**
     * Data split result. This contains references to the training and evaluation data tables that were used to train the model.
     */
    dataSplitResult?: DataSplitResult;
    /**
     * Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models.
     */
    evaluationMetrics?: EvaluationMetrics;
    /**
     * Global explanations containing the top most important features after training.
     */
    modelLevelGlobalExplanation?: GlobalExplanation;
    /**
     * Options used in model training.
     */
    trainingOptions?: TrainingOptions;
    /**
     * The model id in the [Vertex AI Model Registry](https://cloud.google.com/vertex-ai/docs/model-registry/introduction) for this training run.
     */
    vertexAiModelId?: string;
}
/**
 * Information about a single training query run for the model.
 */
export declare class TrainingRun extends SpeakeasyBase {
    /**
     * Output only. Global explanation contains the explanation of top features on the class level. Applies to classification models only.
     */
    classLevelGlobalExplanations?: GlobalExplanation[];
    /**
     * Data split result. This contains references to the training and evaluation data tables that were used to train the model.
     */
    dataSplitResult?: DataSplitResult;
    /**
     * Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models.
     */
    evaluationMetrics?: EvaluationMetrics;
    /**
     * Global explanations containing the top most important features after training.
     */
    modelLevelGlobalExplanation?: GlobalExplanation;
    /**
     * Output only. Output of each iteration run, results.size() <= max_iterations.
     */
    results?: IterationResult[];
    /**
     * Output only. The start time of this training run.
     */
    startTime?: string;
    /**
     * Options used in model training.
     */
    trainingOptions?: TrainingOptions;
    /**
     * Output only. The start time of this training run, in milliseconds since epoch.
     */
    trainingStartTime?: string;
    /**
     * The model id in the [Vertex AI Model Registry](https://cloud.google.com/vertex-ai/docs/model-registry/introduction) for this training run.
     */
    vertexAiModelId?: string;
    /**
     * Output only. The model version in the [Vertex AI Model Registry](https://cloud.google.com/vertex-ai/docs/model-registry/introduction) for this training run.
     */
    vertexAiModelVersion?: string;
}
