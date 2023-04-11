import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutV2MeetingsIdJsonRequestBody extends SpeakeasyBase {
    /**
     * Meeting ID from the calendar provider
     */
    eventId?: string;
    /**
     * Meeting unique identifier (iCalUID)
     */
    iCalUid?: string;
    /**
     * Whether the meeting is a No Show meeting
     */
    noShow?: boolean;
    /**
     * Status of the meeting creation progress. Possible values are: pending, booked, failed, retry
     */
    status?: string;
}
export declare class PutV2MeetingsIdJsonRequest extends SpeakeasyBase {
    requestBody?: PutV2MeetingsIdJsonRequestBody;
    /**
     * Meeting ID
     */
    id: string;
}
export declare class PutV2MeetingsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
