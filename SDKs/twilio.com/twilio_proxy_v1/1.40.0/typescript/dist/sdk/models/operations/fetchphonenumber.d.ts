import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchPhoneNumberServerList: readonly ["https://proxy.twilio.com"];
export declare class FetchPhoneNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchPhoneNumberRequest extends SpeakeasyBase {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the PhoneNumber resource to fetch.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the PhoneNumber resource to fetch.
     */
    sid: string;
}
export declare class FetchPhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    proxyV1ServicePhoneNumber?: shared.ProxyV1ServicePhoneNumber;
}
