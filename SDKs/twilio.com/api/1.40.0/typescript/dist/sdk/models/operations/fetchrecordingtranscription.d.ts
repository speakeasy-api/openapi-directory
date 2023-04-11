import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchRecordingTranscriptionServerList: readonly ["https://api.twilio.com"];
export declare class FetchRecordingTranscriptionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchRecordingTranscriptionRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resource to fetch.
     */
    accountSid: string;
    /**
     * The SID of the [Recording](https://www.twilio.com/docs/voice/api/recording) that created the transcription to fetch.
     */
    recordingSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Transcription resource to fetch.
     */
    sid: string;
}
export declare class FetchRecordingTranscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountRecordingRecordingTranscription?: shared.ApiV2010AccountRecordingRecordingTranscription;
}
