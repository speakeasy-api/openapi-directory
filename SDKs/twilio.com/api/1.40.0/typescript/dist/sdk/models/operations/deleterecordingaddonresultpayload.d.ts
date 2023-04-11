import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteRecordingAddOnResultPayloadServerList: readonly ["https://api.twilio.com"];
export declare class DeleteRecordingAddOnResultPayloadSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteRecordingAddOnResultPayloadRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult Payload resources to delete.
     */
    accountSid: string;
    /**
     * The SID of the AddOnResult to which the payloads to delete belongs.
     */
    addOnResultSid: string;
    /**
     * The SID of the recording to which the AddOnResult resource that contains the payloads to delete belongs.
     */
    referenceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Recording AddOnResult Payload resource to delete.
     */
    sid: string;
}
export declare class DeleteRecordingAddOnResultPayloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
