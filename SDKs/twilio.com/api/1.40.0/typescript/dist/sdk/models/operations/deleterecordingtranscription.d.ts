import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteRecordingTranscriptionServerList: readonly ["https://api.twilio.com"];
export declare class DeleteRecordingTranscriptionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteRecordingTranscriptionRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resources to delete.
     */
    accountSid: string;
    /**
     * The SID of the [Recording](https://www.twilio.com/docs/voice/api/recording) that created the transcription to delete.
     */
    recordingSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Transcription resource to delete.
     */
    sid: string;
}
export declare class DeleteRecordingTranscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
