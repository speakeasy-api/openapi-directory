import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListRoomRecordingServerList: readonly ["https://video.twilio.com"];
export declare class ListRoomRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListRoomRecordingRequest extends SpeakeasyBase {
    /**
     * Read only recordings that started on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
     */
    dateCreatedAfter?: Date;
    /**
     * Read only Recordings that started before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
     */
    dateCreatedBefore?: Date;
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
     * The SID of the room with the RoomRecording resources to read.
     */
    roomSid: string;
    /**
     * Read only the recordings that have this `source_sid`.
     */
    sourceSid?: string;
    /**
     * Read only the recordings with this status. Can be: `processing`, `completed`, or `deleted`.
     */
    status?: shared.RoomRecordingEnumStatusEnum;
}
export declare class ListRoomRecordingListRoomRecordingResponseMeta extends SpeakeasyBase {
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
export declare class ListRoomRecordingListRoomRecordingResponse extends SpeakeasyBase {
    meta?: ListRoomRecordingListRoomRecordingResponseMeta;
    recordings?: shared.VideoV1RoomRoomRecording[];
}
export declare class ListRoomRecordingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listRoomRecordingResponse?: ListRoomRecordingListRoomRecordingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
