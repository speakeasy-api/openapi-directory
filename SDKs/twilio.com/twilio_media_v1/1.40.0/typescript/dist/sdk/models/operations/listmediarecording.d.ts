import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListMediaRecordingServerList: readonly ["https://media.twilio.com"];
export declare class ListMediaRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListMediaRecordingRequest extends SpeakeasyBase {
    /**
     * The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default.
     */
    order?: shared.MediaRecordingEnumOrderEnum;
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
     * SID of a MediaProcessor to filter by.
     */
    processorSid?: string;
    /**
     * SID of a MediaRecording source to filter by.
     */
    sourceSid?: string;
    /**
     * Status to filter by, with possible values `processing`, `completed`, `deleted`, or `failed`.
     */
    status?: shared.MediaRecordingEnumStatusEnum;
}
export declare class ListMediaRecordingListMediaRecordingResponseMeta extends SpeakeasyBase {
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
export declare class ListMediaRecordingListMediaRecordingResponse extends SpeakeasyBase {
    mediaRecordings?: shared.MediaV1MediaRecording[];
    meta?: ListMediaRecordingListMediaRecordingResponseMeta;
}
export declare class ListMediaRecordingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listMediaRecordingResponse?: ListMediaRecordingListMediaRecordingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
