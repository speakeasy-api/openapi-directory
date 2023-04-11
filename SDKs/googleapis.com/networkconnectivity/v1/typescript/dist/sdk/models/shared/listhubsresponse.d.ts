import { SpeakeasyBase } from "../../../internal/utils";
import { Hub } from "./hub";
/**
 * Response for HubService.ListHubs method.
 */
export declare class ListHubsResponse extends SpeakeasyBase {
    /**
     * The requested hubs.
     */
    hubs?: Hub[];
    /**
     * The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
