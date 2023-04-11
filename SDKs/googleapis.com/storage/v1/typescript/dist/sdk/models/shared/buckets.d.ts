import { SpeakeasyBase } from "../../../internal/utils";
import { Bucket } from "./bucket";
/**
 * A list of buckets.
 */
export declare class Buckets extends SpeakeasyBase {
    /**
     * The list of items.
     */
    items?: Bucket[];
    /**
     * The kind of item this is. For lists of buckets, this is always storage#buckets.
     */
    kind?: string;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
}
