import { SpeakeasyBase } from "../../../internal/utils";
import { UserAsset } from "./userasset";
/**
 * A response message from a request to list.
 */
export declare class ListUserAssetsResponse extends SpeakeasyBase {
    /**
     * The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token.
     */
    nextPageToken?: string;
    /**
     * The total number of assets in the list, without pagination.
     */
    totalSize?: number;
    /**
     * A list of UserAssets matching the request.
     */
    userAssets?: UserAsset[];
}
