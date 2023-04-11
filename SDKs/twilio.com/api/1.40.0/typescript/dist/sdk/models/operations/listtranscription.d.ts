import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListTranscriptionServerList: readonly ["https://api.twilio.com"];
export declare class ListTranscriptionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListTranscriptionRequest extends SpeakeasyBase {
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
}
/**
 * OK
 */
export declare class ListTranscriptionListTranscriptionResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    transcriptions?: shared.ApiV2010AccountTranscription[];
    uri?: string;
}
export declare class ListTranscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listTranscriptionResponse?: ListTranscriptionListTranscriptionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
