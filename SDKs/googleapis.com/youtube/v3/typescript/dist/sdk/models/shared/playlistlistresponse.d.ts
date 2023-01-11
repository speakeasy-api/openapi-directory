import { SpeakeasyBase } from "../../../internal/utils";
import { Playlist } from "./playlist";
import { PageInfo } from "./pageinfo";
export declare class PlaylistListResponse extends SpeakeasyBase {
    etag?: string;
    eventId?: string;
    items?: Playlist[];
    kind?: string;
    nextPageToken?: string;
    pageInfo?: PageInfo;
    prevPageToken?: string;
    tokenPagination?: Record<string, any>;
    visitorId?: string;
}
