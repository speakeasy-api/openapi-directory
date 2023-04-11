import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
/**
 * The response for Firestore.RunQuery.
 */
export declare class RunQueryResponse extends SpeakeasyBase {
    /**
     * A Firestore document. Must not exceed 1 MiB - 4 bytes.
     */
    document?: Document;
    /**
     * If present, Firestore has completely finished the request and no more documents will be returned.
     */
    done?: boolean;
    /**
     * The time at which the document was read. This may be monotonically increasing; in this case, the previous documents in the result stream are guaranteed not to have changed between their `read_time` and this one. If the query returns no results, a response with `read_time` and no `document` will be sent, and this represents the time at which the query was run.
     */
    readTime?: string;
    /**
     * The number of results that have been skipped due to an offset between the last response and the current response.
     */
    skippedResults?: number;
    /**
     * The transaction that was started as part of this request. Can only be set in the first response, and only if RunQueryRequest.new_transaction was set in the request. If set, no other fields will be set in this response.
     */
    transaction?: string;
}
