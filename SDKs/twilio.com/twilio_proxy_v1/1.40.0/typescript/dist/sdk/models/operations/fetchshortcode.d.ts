import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchShortCodeServerList: readonly ["https://proxy.twilio.com"];
export declare class FetchShortCodeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchShortCodeRequest extends SpeakeasyBase {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) to fetch the resource from.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the ShortCode resource to fetch.
     */
    sid: string;
}
export declare class FetchShortCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    proxyV1ServiceShortCode?: shared.ProxyV1ServiceShortCode;
}
