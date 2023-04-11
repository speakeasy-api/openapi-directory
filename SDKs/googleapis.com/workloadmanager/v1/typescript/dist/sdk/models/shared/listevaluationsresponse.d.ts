import { SpeakeasyBase } from "../../../internal/utils";
import { Evaluation } from "./evaluation";
/**
 * Message for response to listing Evaluations
 */
export declare class ListEvaluationsResponse extends SpeakeasyBase {
    /**
     * The list of Evaluation
     */
    evaluations?: Evaluation[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
