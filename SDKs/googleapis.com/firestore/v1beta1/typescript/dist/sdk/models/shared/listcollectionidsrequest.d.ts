import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request for Firestore.ListCollectionIds.
 */
export declare class ListCollectionIdsRequest extends SpeakeasyBase {
    /**
     * The maximum number of results to return.
     */
    pageSize?: number;
    /**
     * A page token. Must be a value from ListCollectionIdsResponse.
     */
    pageToken?: string;
    /**
     * Reads documents as they were at the given time. This may not be older than 270 seconds.
     */
    readTime?: string;
}
