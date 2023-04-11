import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchMessageInteractionServerList: readonly ["https://proxy.twilio.com"];
export declare class FetchMessageInteractionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchMessageInteractionRequest extends SpeakeasyBase {
    /**
     * The SID of the [Participant](https://www.twilio.com/docs/proxy/api/participant) resource.
     */
    participantSid: string;
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the resource to fetch.
     */
    serviceSid: string;
    /**
     * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) of the resource to fetch.
     */
    sessionSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the MessageInteraction resource to fetch.
     */
    sid: string;
}
export declare class FetchMessageInteractionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    proxyV1ServiceSessionParticipantMessageInteraction?: shared.ProxyV1ServiceSessionParticipantMessageInteraction;
}
