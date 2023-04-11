import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteRecordingServerList: readonly ["https://api.twilio.com"];
export declare class DeleteRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteRecordingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resources to delete.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Recording resource to delete.
     */
    sid: string;
}
export declare class DeleteRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
