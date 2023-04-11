import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListRoomParticipantPublishedTrackServerList: readonly ["https://video.twilio.com"];
export declare class ListRoomParticipantPublishedTrackSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListRoomParticipantPublishedTrackRequest extends SpeakeasyBase {
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
     * The SID of the Participant resource with the published tracks to read.
     */
    participantSid: string;
    /**
     * The SID of the Room resource where the Track resources to read are published.
     */
    roomSid: string;
}
export declare class ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta extends SpeakeasyBase {
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
export declare class ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse extends SpeakeasyBase {
    meta?: ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta;
    publishedTracks?: shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack[];
}
export declare class ListRoomParticipantPublishedTrackResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listRoomParticipantPublishedTrackResponse?: ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
