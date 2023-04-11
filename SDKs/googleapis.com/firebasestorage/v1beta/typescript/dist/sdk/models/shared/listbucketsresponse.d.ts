import { SpeakeasyBase } from "../../../internal/utils";
import { Bucket } from "./bucket";
/**
 * The response returned by `ListBuckets`.
 */
export declare class ListBucketsResponse extends SpeakeasyBase {
    /**
     * The list of linked buckets.
     */
    buckets?: Bucket[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
