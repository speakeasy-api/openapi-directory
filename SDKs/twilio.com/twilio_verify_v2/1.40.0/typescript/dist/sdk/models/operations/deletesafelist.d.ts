import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSafelistServerList: readonly ["https://verify.twilio.com"];
export declare class DeleteSafelistSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSafelistRequest extends SpeakeasyBase {
    /**
     * The phone number to be removed from SafeList. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
     */
    phoneNumber: string;
}
export declare class DeleteSafelistResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
