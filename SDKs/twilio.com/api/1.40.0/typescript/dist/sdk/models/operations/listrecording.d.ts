import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListRecordingServerList: readonly ["https://api.twilio.com"];
export declare class ListRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListRecordingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resources to read.
     */
    accountSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resources to read.
     */
    callSid?: string;
    /**
     * The Conference SID that identifies the conference associated with the recording to read.
     */
    conferenceSid?: string;
    /**
     * Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings that were created on or after midnight of this date.
     */
    dateCreated?: Date;
    /**
     * Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings that were created on or after midnight of this date.
     */
    dateCreatedLessThan?: Date;
    /**
     * Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings that were created on or after midnight of this date.
     */
    dateCreatedGreaterThan?: Date;
    /**
     * A boolean parameter indicating whether to retrieve soft deleted recordings or not. Recordings metadata are kept after deletion for a retention period of 40 days.
     */
    includeSoftDeleted?: boolean;
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
export declare class ListRecordingListRecordingResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    recordings?: shared.ApiV2010AccountRecording[];
    start?: number;
    uri?: string;
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
