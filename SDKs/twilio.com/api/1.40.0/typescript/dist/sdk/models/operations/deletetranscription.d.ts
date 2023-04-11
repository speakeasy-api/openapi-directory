import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteTranscriptionServerList: readonly ["https://api.twilio.com"];
export declare class DeleteTranscriptionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteTranscriptionRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resources to delete.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Transcription resource to delete.
     */
    sid: string;
}
export declare class DeleteTranscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
