import { SpeakeasyBase } from "../../../internal/utils";
import { Hub } from "./hub";
/**
 * Response for HubService.ListHubs method.
 */
export declare class ListHubsResponse extends SpeakeasyBase {
    /**
     * Hubs to be returned.
     */
    hubs?: Hub[];
    /**
     * The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
