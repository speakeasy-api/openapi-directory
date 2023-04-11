import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListVideoRoomSummaryServerList: readonly ["https://insights.twilio.com"];
export declare class ListVideoRoomSummarySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListVideoRoomSummaryRequest extends SpeakeasyBase {
    /**
     * Codecs used by participants in the room. Can be `VP8`, `H264`, or `VP9`.
     */
    codec?: shared.VideoRoomSummaryEnumCodecEnum[];
    /**
     * Only read rooms that started on or after this ISO 8601 timestamp.
     */
    createdAfter?: Date;
    /**
     * Only read rooms that started before this ISO 8601 timestamp.
     */
    createdBefore?: Date;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
    /**
     * Room friendly name.
     */
    roomName?: string;
    /**
     * Type of room. Can be `go`, `peer_to_peer`, `group`, or `group_small`.
     */
    roomType?: shared.VideoRoomSummaryEnumRoomTypeEnum[];
}
export declare class ListVideoRoomSummaryListVideoRoomSummaryResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListVideoRoomSummaryListVideoRoomSummaryResponse extends SpeakeasyBase {
    meta?: ListVideoRoomSummaryListVideoRoomSummaryResponseMeta;
    rooms?: shared.InsightsV1VideoRoomSummary[];
}
export declare class ListVideoRoomSummaryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listVideoRoomSummaryResponse?: ListVideoRoomSummaryListVideoRoomSummaryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
