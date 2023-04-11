import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchPhoneNumberServerList: readonly ["https://messaging.twilio.com"];
export declare class FetchPhoneNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchPhoneNumberRequest extends SpeakeasyBase {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to fetch the resource from.
     */
    serviceSid: string;
    /**
     * The SID of the PhoneNumber resource to fetch.
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
    messagingV1ServicePhoneNumber?: shared.MessagingV1ServicePhoneNumber;
}
