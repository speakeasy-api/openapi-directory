import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchShortCodeServerList: readonly ["https://messaging.twilio.com"];
export declare class FetchShortCodeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchShortCodeRequest extends SpeakeasyBase {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to fetch the resource from.
     */
    serviceSid: string;
    /**
     * The SID of the ShortCode resource to fetch.
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
    messagingV1ServiceShortCode?: shared.MessagingV1ServiceShortCode;
}
