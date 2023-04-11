import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeletePhoneNumberServerList: readonly ["https://messaging.twilio.com"];
export declare class DeletePhoneNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeletePhoneNumberRequest extends SpeakeasyBase {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to delete the resource from.
     */
    serviceSid: string;
    /**
     * The SID of the PhoneNumber resource to delete.
     */
    sid: string;
}
export declare class DeletePhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
