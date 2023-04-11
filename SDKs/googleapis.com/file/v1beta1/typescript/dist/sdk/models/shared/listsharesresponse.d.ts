import { SpeakeasyBase } from "../../../internal/utils";
import { Share } from "./share";
/**
 * ListSharesResponse is the result of ListSharesRequest.
 */
export declare class ListSharesResponse extends SpeakeasyBase {
    /**
     * The token you can use to retrieve the next page of results. Not returned if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * A list of shares in the project for the specified instance.
     */
    shares?: Share[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
