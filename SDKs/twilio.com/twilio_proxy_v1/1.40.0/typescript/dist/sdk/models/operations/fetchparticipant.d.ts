import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchParticipantServerList: readonly ["https://proxy.twilio.com"];
export declare class FetchParticipantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchParticipantRequest extends SpeakeasyBase {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the resource to fetch.
     */
    serviceSid: string;
    /**
     * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) of the resource to fetch.
     */
    sessionSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Participant resource to fetch.
     */
    sid: string;
}
export declare class FetchParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    proxyV1ServiceSessionParticipant?: shared.ProxyV1ServiceSessionParticipant;
}
