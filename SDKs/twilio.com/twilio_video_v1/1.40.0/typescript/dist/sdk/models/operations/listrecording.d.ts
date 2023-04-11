import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListRecordingServerList: readonly ["https://video.twilio.com"];
export declare class ListRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListRecordingRequest extends SpeakeasyBase {
    /**
     * Read only recordings that started on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone.
     */
    dateCreatedAfter?: Date;
    /**
     * Read only recordings that started before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone, given as `YYYY-MM-DDThh:mm:ss+|-hh:mm` or `YYYY-MM-DDThh:mm:ssZ`.
     */
    dateCreatedBefore?: Date;
    /**
     * Read only recordings with this `grouping_sid`, which may include a `participant_sid` and/or a `room_sid`.
     */
    groupingSid?: string[];
    /**
     * Read only recordings that have this media type. Can be either `audio` or `video`.
     */
    mediaType?: shared.RecordingEnumTypeEnum;
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
     * Read only the recordings that have this `source_sid`.
     */
    sourceSid?: string;
    /**
     * Read only the recordings that have this status. Can be: `processing`, `completed`, or `deleted`.
     */
    status?: shared.RecordingEnumStatusEnum;
}
export declare class ListRecordingListRecordingResponseMeta extends SpeakeasyBase {
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
export declare class ListRecordingListRecordingResponse extends SpeakeasyBase {
    meta?: ListRecordingListRecordingResponseMeta;
    recordings?: shared.VideoV1Recording[];
}
export declare class ListRecordingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listRecordingResponse?: ListRecordingListRecordingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
