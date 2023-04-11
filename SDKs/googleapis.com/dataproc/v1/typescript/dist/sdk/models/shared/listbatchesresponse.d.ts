import { SpeakeasyBase } from "../../../internal/utils";
import { Batch } from "./batch";
/**
 * A list of batch workloads.
 */
export declare class ListBatchesResponse extends SpeakeasyBase {
    /**
     * The batches from the specified collection.
     */
    batches?: Batch[];
    /**
     * A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
