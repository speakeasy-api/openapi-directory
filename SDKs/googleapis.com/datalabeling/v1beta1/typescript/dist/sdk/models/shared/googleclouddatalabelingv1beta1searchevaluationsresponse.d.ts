import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Evaluation } from "./googleclouddatalabelingv1beta1evaluation";
/**
 * Results of searching evaluations.
 */
export declare class GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse extends SpeakeasyBase {
    /**
     * The list of evaluations matching the search.
     */
    evaluations?: GoogleCloudDatalabelingV1beta1Evaluation[];
    /**
     * A token to retrieve next page of results.
     */
    nextPageToken?: string;
}
