import { SpeakeasyBase } from "../../../internal/utils";
import { Creative } from "./creative";
/**
 * A response for listing creatives.
 */
export declare class ListCreativesResponse extends SpeakeasyBase {
    /**
     * The list of creatives.
     */
    creatives?: Creative[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListCreativesRequest.pageToken field in the subsequent call to the `ListCreatives` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
