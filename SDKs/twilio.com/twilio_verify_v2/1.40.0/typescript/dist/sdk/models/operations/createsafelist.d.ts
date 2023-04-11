import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSafelistServerList: readonly ["https://verify.twilio.com"];
export declare class CreateSafelistSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSafelistCreateSafelistRequest extends SpeakeasyBase {
    /**
     * The phone number to be added in SafeList. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
     */
    phoneNumber: string;
}
export declare class CreateSafelistResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    verifyV2Safelist?: shared.VerifyV2Safelist;
}
