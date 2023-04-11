import { SpeakeasyBase } from "../../../internal/utils";
import { ListAssetsResult } from "./listassetsresult";
/**
 * Response message for listing assets.
 */
export declare class ListAssetsResponse extends SpeakeasyBase {
    /**
     * Assets matching the list request.
     */
    listAssetsResults?: ListAssetsResult[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string;
    /**
     * Time used for executing the list request.
     */
    readTime?: string;
    /**
     * The total number of assets matching the query.
     */
    totalSize?: number;
}
