import { SpeakeasyBase } from "../../../internal/utils";
import { LiveBroadcast } from "./livebroadcast";
import { PageInfo } from "./pageinfo";
/**
 * Successful response
 */
export declare class LiveBroadcastListResponse extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string;
    /**
     * A list of broadcasts that match the request criteria.
     */
    items?: LiveBroadcast[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcastListResponse".
     */
    kind?: string;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string;
    /**
     * Paging details for lists of resources, including total number of items available and number of resources returned in a single page.
     */
    pageInfo?: PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string;
    /**
     * Stub token pagination template to suppress results.
     */
    tokenPagination?: Record<string, any>;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string;
}
