import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchConferenceRecordingServerList: readonly ["https://api.twilio.com"];
export declare class FetchConferenceRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchConferenceRecordingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference Recording resource to fetch.
     */
    accountSid: string;
    /**
     * The Conference SID that identifies the conference associated with the recording to fetch.
     */
    conferenceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Conference Recording resource to fetch.
     */
    sid: string;
}
export declare class FetchConferenceRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountConferenceConferenceRecording?: shared.ApiV2010AccountConferenceConferenceRecording;
}
