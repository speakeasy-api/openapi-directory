import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSessionServerList: readonly ["https://proxy.twilio.com"];
export declare class FetchSessionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSessionRequest extends SpeakeasyBase {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the resource to fetch.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Session resource to fetch.
     */
    sid: string;
}
export declare class FetchSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    proxyV1ServiceSession?: shared.ProxyV1ServiceSession;
}
