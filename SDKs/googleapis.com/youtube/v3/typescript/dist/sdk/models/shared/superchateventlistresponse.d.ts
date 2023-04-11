import { SpeakeasyBase } from "../../../internal/utils";
import { PageInfo } from "./pageinfo";
import { SuperChatEvent } from "./superchatevent";
/**
 * Successful response
 */
export declare class SuperChatEventListResponse extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string;
    /**
     * A list of Super Chat purchases that match the request criteria.
     */
    items?: SuperChatEvent[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#superChatEventListResponse".
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
     * Stub token pagination template to suppress results.
     */
    tokenPagination?: Record<string, any>;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string;
}
