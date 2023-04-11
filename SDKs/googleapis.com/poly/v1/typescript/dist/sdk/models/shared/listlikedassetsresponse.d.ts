import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
/**
 * A response message from a request to list.
 */
export declare class ListLikedAssetsResponse extends SpeakeasyBase {
    /**
     * A list of assets that match the criteria specified in the request.
     */
    assets?: Asset[];
    /**
     * The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token.
     */
    nextPageToken?: string;
    /**
     * The total number of assets in the list, without pagination.
     */
    totalSize?: number;
}
