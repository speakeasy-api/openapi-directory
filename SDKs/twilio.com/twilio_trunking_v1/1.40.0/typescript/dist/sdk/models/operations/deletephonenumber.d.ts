import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeletePhoneNumberServerList: readonly ["https://trunking.twilio.com"];
export declare class DeletePhoneNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeletePhoneNumberRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the PhoneNumber resource to delete.
     */
    sid: string;
    /**
     * The SID of the Trunk from which to delete the PhoneNumber resource.
     */
    trunkSid: string;
}
export declare class DeletePhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
