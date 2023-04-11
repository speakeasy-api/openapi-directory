import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListRecordingTranscriptionServerList: readonly ["https://api.twilio.com"];
export declare class ListRecordingTranscriptionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListRecordingTranscriptionRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resources to read.
     */
    accountSid: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
    /**
     * The SID of the [Recording](https://www.twilio.com/docs/voice/api/recording) that created the transcriptions to read.
     */
    recordingSid: string;
}
/**
 * OK
 */
export declare class ListRecordingTranscriptionListRecordingTranscriptionResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    transcriptions?: shared.ApiV2010AccountRecordingRecordingTranscription[];
    uri?: string;
}
export declare class ListRecordingTranscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listRecordingTranscriptionResponse?: ListRecordingTranscriptionListRecordingTranscriptionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
