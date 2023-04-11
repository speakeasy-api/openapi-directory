import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSafelistServerList: readonly ["https://verify.twilio.com"];
export declare class FetchSafelistSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSafelistRequest extends SpeakeasyBase {
    /**
     * The phone number to be fetched from SafeList. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
     */
    phoneNumber: string;
}
export declare class FetchSafelistResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    verifyV2Safelist?: shared.VerifyV2Safelist;
}
