import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchRecordingAddOnResultPayloadServerList: readonly ["https://api.twilio.com"];
export declare class FetchRecordingAddOnResultPayloadSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchRecordingAddOnResultPayloadRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult Payload resource to fetch.
     */
    accountSid: string;
    /**
     * The SID of the AddOnResult to which the payload to fetch belongs.
     */
    addOnResultSid: string;
    /**
     * The SID of the recording to which the AddOnResult resource that contains the payload to fetch belongs.
     */
    referenceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Recording AddOnResult Payload resource to fetch.
     */
    sid: string;
}
export declare class FetchRecordingAddOnResultPayloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload?: shared.ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload;
}
