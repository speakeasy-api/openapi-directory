import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeletePhoneNumberServerList: readonly ["https://proxy.twilio.com"];
export declare class DeletePhoneNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeletePhoneNumberRequest extends SpeakeasyBase {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the PhoneNumber resource to delete.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the PhoneNumber resource to delete.
     */
    sid: string;
}
export declare class DeletePhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
