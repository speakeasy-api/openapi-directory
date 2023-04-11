import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentsTarget } from "./documentstarget";
import { QueryTarget } from "./querytarget";
/**
 * A specification of a set of documents to listen to.
 */
export declare class Target extends SpeakeasyBase {
    /**
     * A target specified by a set of documents names.
     */
    documents?: DocumentsTarget;
    /**
     * If the target should be removed once it is current and consistent.
     */
    once?: boolean;
    /**
     * A target specified by a query.
     */
    query?: QueryTarget;
    /**
     * Start listening after a specific `read_time`. The client must know the state of matching documents at this time.
     */
    readTime?: string;
    /**
     * A resume token from a prior TargetChange for an identical target. Using a resume token with a different target is unsupported and may fail.
     */
    resumeToken?: string;
    /**
     * The target ID that identifies the target on the stream. Must be a positive number and non-zero.
     */
    targetId?: number;
}
