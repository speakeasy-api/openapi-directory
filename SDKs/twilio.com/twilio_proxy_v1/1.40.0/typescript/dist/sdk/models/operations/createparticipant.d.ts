import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateParticipantServerList: readonly ["https://proxy.twilio.com"];
export declare class CreateParticipantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateParticipantCreateParticipantRequest extends SpeakeasyBase {
    /**
     * The string that you assigned to describe the participant. This value must be 255 characters or fewer. **This value should not have PII.**
     */
    friendlyName?: string;
    /**
     * The phone number of the Participant.
     */
    identifier: string;
    /**
     * The proxy phone number to use for the Participant. If not specified, Proxy will select a number from the pool.
     */
    proxyIdentifier?: string;
    /**
     * The SID of the Proxy Identifier to assign to the Participant.
     */
    proxyIdentifierSid?: string;
}
export declare class CreateParticipantRequest extends SpeakeasyBase {
    requestBody?: CreateParticipantCreateParticipantRequest;
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
     */
    serviceSid: string;
    /**
     * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) resource.
     */
    sessionSid: string;
}
export declare class CreateParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    proxyV1ServiceSessionParticipant?: shared.ProxyV1ServiceSessionParticipant;
}
