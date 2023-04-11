import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListConferenceRecordingServerList: readonly ["https://api.twilio.com"];
export declare class ListConferenceRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListConferenceRecordingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference Recording resources to read.
     */
    accountSid: string;
    /**
     * The Conference SID that identifies the conference associated with the recording to read.
     */
    conferenceSid: string;
    /**
     * The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date.
     */
    dateCreated?: Date;
    /**
     * The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date.
     */
    dateCreatedLessThan?: Date;
    /**
     * The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date.
     */
    dateCreatedGreaterThan?: Date;
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
}
/**
 * OK
 */
export declare class ListConferenceRecordingListConferenceRecordingResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    recordings?: shared.ApiV2010AccountConferenceConferenceRecording[];
    start?: number;
    uri?: string;
}
export declare class ListConferenceRecordingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listConferenceRecordingResponse?: ListConferenceRecordingListConferenceRecordingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
