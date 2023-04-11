import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateShortCodeServerList: readonly ["https://proxy.twilio.com"];
export declare class CreateShortCodeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateShortCodeCreateShortCodeRequest extends SpeakeasyBase {
    /**
     * The SID of a Twilio [ShortCode](https://www.twilio.com/docs/sms/api/short-code) resource that represents the short code you would like to assign to your Proxy Service.
     */
    sid: string;
}
export declare class CreateShortCodeRequest extends SpeakeasyBase {
    requestBody?: CreateShortCodeCreateShortCodeRequest;
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
     */
    serviceSid: string;
}
export declare class CreateShortCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    proxyV1ServiceShortCode?: shared.ProxyV1ServiceShortCode;
}
