import { SpeakeasyBase } from "../../../internal/utils";
import { Spoke } from "./spoke";
/**
 * The response for HubService.ListSpokes.
 */
export declare class ListSpokesResponse extends SpeakeasyBase {
    /**
     * The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results.
     */
    nextPageToken?: string;
    /**
     * The requested spokes.
     */
    spokes?: Spoke[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
