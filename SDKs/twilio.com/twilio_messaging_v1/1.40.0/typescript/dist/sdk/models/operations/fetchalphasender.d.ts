import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchAlphaSenderServerList: readonly ["https://messaging.twilio.com"];
export declare class FetchAlphaSenderSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchAlphaSenderRequest extends SpeakeasyBase {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to fetch the resource from.
     */
    serviceSid: string;
    /**
     * The SID of the AlphaSender resource to fetch.
     */
    sid: string;
}
export declare class FetchAlphaSenderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    messagingV1ServiceAlphaSender?: shared.MessagingV1ServiceAlphaSender;
}
