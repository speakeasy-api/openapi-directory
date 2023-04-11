import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1EvaluationJob } from "./googleclouddatalabelingv1beta1evaluationjob";
/**
 * Request message for CreateEvaluationJob.
 */
export declare class GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest extends SpeakeasyBase {
    /**
     * Defines an evaluation job that runs periodically to generate Evaluations. [Creating an evaluation job](/ml-engine/docs/continuous-evaluation/create-job) is the starting point for using continuous evaluation.
     */
    job?: GoogleCloudDatalabelingV1beta1EvaluationJob;
}
