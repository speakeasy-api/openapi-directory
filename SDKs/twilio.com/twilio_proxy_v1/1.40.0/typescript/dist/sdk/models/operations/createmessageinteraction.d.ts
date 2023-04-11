import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateMessageInteractionServerList: readonly ["https://proxy.twilio.com"];
export declare class CreateMessageInteractionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateMessageInteractionCreateMessageInteractionRequest extends SpeakeasyBase {
    /**
     * The message to send to the participant
     */
    body?: string;
    /**
     * Reserved. Not currently supported.
     */
    mediaUrl?: string[];
}
export declare class CreateMessageInteractionRequest extends SpeakeasyBase {
    /**
     * The SID of the [Participant](https://www.twilio.com/docs/proxy/api/participant) resource.
     */
    participantSid: string;
    requestBody?: CreateMessageInteractionCreateMessageInteractionRequest;
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
     */
    serviceSid: string;
    /**
     * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) resource.
     */
    sessionSid: string;
}
export declare class CreateMessageInteractionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    proxyV1ServiceSessionParticipantMessageInteraction?: shared.ProxyV1ServiceSessionParticipantMessageInteraction;
}
