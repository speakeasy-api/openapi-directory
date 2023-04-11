import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1EvaluationJob } from "./googleclouddatalabelingv1beta1evaluationjob";
/**
 * Results for listing evaluation jobs.
 */
export declare class GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse extends SpeakeasyBase {
    /**
     * The list of evaluation jobs to return.
     */
    evaluationJobs?: GoogleCloudDatalabelingV1beta1EvaluationJob[];
    /**
     * A token to retrieve next page of results.
     */
    nextPageToken?: string;
}
