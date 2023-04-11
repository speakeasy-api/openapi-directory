import { SpeakeasyBase } from "../../../internal/utils";
import { UptimeCheckConfig } from "./uptimecheckconfig";
/**
 * The protocol for the ListUptimeCheckConfigs response.
 */
export declare class ListUptimeCheckConfigsResponse extends SpeakeasyBase {
    /**
     * This field represents the pagination token to retrieve the next page of results. If the value is empty, it means no further results for the request. To retrieve the next page of results, the value of the next_page_token is passed to the subsequent List method call (in the request message's page_token field).
     */
    nextPageToken?: string;
    /**
     * The total number of Uptime check configurations for the project, irrespective of any pagination.
     */
    totalSize?: number;
    /**
     * The returned Uptime check configurations.
     */
    uptimeCheckConfigs?: UptimeCheckConfig[];
}
