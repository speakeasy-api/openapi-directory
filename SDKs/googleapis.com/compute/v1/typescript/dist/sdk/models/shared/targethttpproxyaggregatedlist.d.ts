import { SpeakeasyBase } from "../../../internal/utils";
import { TargetHttpProxiesScopedList } from "./targethttpproxiesscopedlist";
/**
 * Successful response
 */
export declare class TargetHttpProxyAggregatedList extends SpeakeasyBase {
    /**
     * [Output Only] Unique identifier for the resource; defined by the server.
     */
    id?: string;
    /**
     * A list of TargetHttpProxiesScopedList resources.
     */
    items?: Record<string, TargetHttpProxiesScopedList>;
    /**
     * [Output Only] Type of resource. Always compute#targetHttpProxyAggregatedList for lists of Target HTTP Proxies.
     */
    kind?: string;
    /**
     * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
     */
    nextPageToken?: string;
    /**
     * [Output Only] Server-defined URL for this resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Unreachable resources.
     */
    unreachables?: string[];
}
