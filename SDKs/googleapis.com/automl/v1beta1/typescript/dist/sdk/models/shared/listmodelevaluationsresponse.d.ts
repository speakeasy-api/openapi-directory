import { SpeakeasyBase } from "../../../internal/utils";
import { ModelEvaluation } from "./modelevaluation";
/**
 * Response message for AutoMl.ListModelEvaluations.
 */
export declare class ListModelEvaluationsResponse extends SpeakeasyBase {
    /**
     * List of model evaluations in the requested page.
     */
    modelEvaluation?: ModelEvaluation[];
    /**
     * A token to retrieve next page of results. Pass to the ListModelEvaluationsRequest.page_token field of a new AutoMl.ListModelEvaluations request to obtain that page.
     */
    nextPageToken?: string;
}
