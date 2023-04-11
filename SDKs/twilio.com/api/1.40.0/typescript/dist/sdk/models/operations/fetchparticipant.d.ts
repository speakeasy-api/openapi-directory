import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchParticipantServerList: readonly ["https://api.twilio.com"];
export declare class FetchParticipantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchParticipantRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Participant resource to fetch.
     */
    accountSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID or label of the participant to fetch. Non URL safe characters in a label must be percent encoded, for example, a space character is represented as %20.
     */
    callSid: string;
    /**
     * The SID of the conference with the participant to fetch.
     */
    conferenceSid: string;
}
export declare class FetchParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountConferenceParticipant?: shared.ApiV2010AccountConferenceParticipant;
}
