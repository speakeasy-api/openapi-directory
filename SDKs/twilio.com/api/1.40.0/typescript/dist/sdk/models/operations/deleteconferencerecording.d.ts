import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteConferenceRecordingServerList: readonly ["https://api.twilio.com"];
export declare class DeleteConferenceRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteConferenceRecordingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference Recording resources to delete.
     */
    accountSid: string;
    /**
     * The Conference SID that identifies the conference associated with the recording to delete.
     */
    conferenceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Conference Recording resource to delete.
     */
    sid: string;
}
export declare class DeleteConferenceRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
