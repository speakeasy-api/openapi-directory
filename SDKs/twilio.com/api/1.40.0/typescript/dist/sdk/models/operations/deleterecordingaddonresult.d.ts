import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteRecordingAddOnResultServerList: readonly ["https://api.twilio.com"];
export declare class DeleteRecordingAddOnResultSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteRecordingAddOnResultRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult resources to delete.
     */
    accountSid: string;
    /**
     * The SID of the recording to which the result to delete belongs.
     */
    referenceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Recording AddOnResult resource to delete.
     */
    sid: string;
}
export declare class DeleteRecordingAddOnResultResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
