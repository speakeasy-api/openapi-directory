import { SpeakeasyBase } from "../../../internal/utils";
import { Evaluation } from "./evaluation";
/**
 * Message for response to listing Evaluations
**/
export declare class ListEvaluationsResponse extends SpeakeasyBase {
    evaluations?: Evaluation[];
    nextPageToken?: string;
    unreachable?: string[];
}
