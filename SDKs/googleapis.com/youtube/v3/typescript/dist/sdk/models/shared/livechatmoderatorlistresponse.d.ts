import { SpeakeasyBase } from "../../../internal/utils";
import { LiveChatModerator } from "./livechatmoderator";
import { PageInfo } from "./pageinfo";
export declare class LiveChatModeratorListResponse extends SpeakeasyBase {
    etag?: string;
    eventId?: string;
    items?: LiveChatModerator[];
    kind?: string;
    nextPageToken?: string;
    pageInfo?: PageInfo;
    prevPageToken?: string;
    tokenPagination?: Record<string, any>;
    visitorId?: string;
}
