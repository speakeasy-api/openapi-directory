import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteParticipantServerList: readonly ["https://api.twilio.com"];
export declare class DeleteParticipantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteParticipantRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Participant resources to delete.
     */
    accountSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID or label of the participant to delete. Non URL safe characters in a label must be percent encoded, for example, a space character is represented as %20.
     */
    callSid: string;
    /**
     * The SID of the conference with the participants to delete.
     */
    conferenceSid: string;
}
export declare class DeleteParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
