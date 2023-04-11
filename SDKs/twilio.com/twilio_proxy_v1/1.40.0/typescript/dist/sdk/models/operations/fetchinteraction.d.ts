import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchInteractionServerList: readonly ["https://proxy.twilio.com"];
export declare class FetchInteractionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchInteractionRequest extends SpeakeasyBase {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the resource to fetch.
     */
    serviceSid: string;
    /**
     * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) of the resource to fetch.
     */
    sessionSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Interaction resource to fetch.
     */
    sid: string;
}
export declare class FetchInteractionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    proxyV1ServiceSessionInteraction?: shared.ProxyV1ServiceSessionInteraction;
}
