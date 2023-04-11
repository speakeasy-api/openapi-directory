import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteCallRecordingServerList: readonly ["https://api.twilio.com"];
export declare class DeleteCallRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteCallRecordingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resources to delete.
     */
    accountSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resources to delete.
     */
    callSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Recording resource to delete.
     */
    sid: string;
}
export declare class DeleteCallRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
