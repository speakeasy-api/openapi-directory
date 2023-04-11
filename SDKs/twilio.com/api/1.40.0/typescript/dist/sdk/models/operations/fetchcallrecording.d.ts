import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCallRecordingServerList: readonly ["https://api.twilio.com"];
export declare class FetchCallRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchCallRecordingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resource to fetch.
     */
    accountSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resource to fetch.
     */
    callSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Recording resource to fetch.
     */
    sid: string;
}
export declare class FetchCallRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountCallCallRecording?: shared.ApiV2010AccountCallCallRecording;
}
