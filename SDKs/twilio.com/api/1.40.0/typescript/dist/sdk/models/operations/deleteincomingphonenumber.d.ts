import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteIncomingPhoneNumberServerList: readonly ["https://api.twilio.com"];
export declare class DeleteIncomingPhoneNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteIncomingPhoneNumberRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IncomingPhoneNumber resources to delete.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the IncomingPhoneNumber resource to delete.
     */
    sid: string;
}
export declare class DeleteIncomingPhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
