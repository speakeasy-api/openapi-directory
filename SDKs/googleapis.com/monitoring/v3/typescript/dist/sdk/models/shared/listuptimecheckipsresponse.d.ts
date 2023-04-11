import { SpeakeasyBase } from "../../../internal/utils";
import { UptimeCheckIp } from "./uptimecheckip";
/**
 * The protocol for the ListUptimeCheckIps response.
 */
export declare class ListUptimeCheckIpsResponse extends SpeakeasyBase {
    /**
     * This field represents the pagination token to retrieve the next page of results. If the value is empty, it means no further results for the request. To retrieve the next page of results, the value of the next_page_token is passed to the subsequent List method call (in the request message's page_token field). NOTE: this field is not yet implemented
     */
    nextPageToken?: string;
    /**
     * The returned list of IP addresses (including region and location) that the checkers run from.
     */
    uptimeCheckIps?: UptimeCheckIp[];
}
