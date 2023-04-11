import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchTranscriptionServerList: readonly ["https://api.twilio.com"];
export declare class FetchTranscriptionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchTranscriptionRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resource to fetch.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Transcription resource to fetch.
     */
    sid: string;
}
export declare class FetchTranscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountTranscription?: shared.ApiV2010AccountTranscription;
}
