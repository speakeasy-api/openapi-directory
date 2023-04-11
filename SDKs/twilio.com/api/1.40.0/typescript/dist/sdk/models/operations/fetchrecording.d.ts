import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchRecordingServerList: readonly ["https://api.twilio.com"];
export declare class FetchRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchRecordingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resource to fetch.
     */
    accountSid: string;
    /**
     * A boolean parameter indicating whether to retrieve soft deleted recordings or not. Recordings metadata are kept after deletion for a retention period of 40 days.
     */
    includeSoftDeleted?: boolean;
    /**
     * The Twilio-provided string that uniquely identifies the Recording resource to fetch.
     */
    sid: string;
}
export declare class FetchRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountRecording?: shared.ApiV2010AccountRecording;
}
