import { SpeakeasyBase } from "../../../internal/utils";
import { LiveChatMessage } from "./livechatmessage";
import { PageInfo } from "./pageinfo";
/**
 * Successful response
 */
export declare class LiveChatMessageListResponse extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string;
    items?: LiveChatMessage[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessageListResponse".
     */
    kind?: string;
    nextPageToken?: string;
    /**
     * The date and time when the underlying stream went offline.
     */
    offlineAt?: Date;
    /**
     * Paging details for lists of resources, including total number of items available and number of resources returned in a single page.
     */
    pageInfo?: PageInfo;
    /**
     * The amount of time the client should wait before polling again.
     */
    pollingIntervalMillis?: number;
    /**
     * Stub token pagination template to suppress results.
     */
    tokenPagination?: Record<string, any>;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string;
}
