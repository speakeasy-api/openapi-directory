import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchRecordingAddOnResultServerList: readonly ["https://api.twilio.com"];
export declare class FetchRecordingAddOnResultSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchRecordingAddOnResultRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult resource to fetch.
     */
    accountSid: string;
    /**
     * The SID of the recording to which the result to fetch belongs.
     */
    referenceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Recording AddOnResult resource to fetch.
     */
    sid: string;
}
export declare class FetchRecordingAddOnResultResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountRecordingRecordingAddOnResult?: shared.ApiV2010AccountRecordingRecordingAddOnResult;
}
