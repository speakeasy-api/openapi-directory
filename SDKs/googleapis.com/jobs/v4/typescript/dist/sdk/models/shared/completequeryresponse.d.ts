import { SpeakeasyBase } from "../../../internal/utils";
import { CompletionResult } from "./completionresult";
import { ResponseMetadata } from "./responsemetadata";
/**
 * Response of auto-complete query.
 */
export declare class CompleteQueryResponse extends SpeakeasyBase {
    /**
     * Results of the matching job/company candidates.
     */
    completionResults?: CompletionResult[];
    /**
     * Additional information returned to client, such as debugging information.
     */
    metadata?: ResponseMetadata;
}
