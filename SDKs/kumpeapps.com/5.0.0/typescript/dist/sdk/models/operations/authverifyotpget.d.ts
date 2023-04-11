import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AuthVerifyotpGetSecurity extends SpeakeasyBase {
    authKey: string;
}
export declare class AuthVerifyotpGetRequest extends SpeakeasyBase {
    /**
     * YubiKey OTP code
     */
    otp: string;
}
export declare class AuthVerifyotpGetResponse extends SpeakeasyBase {
    /**
     * Access Denied
     */
    fourHundredAndThree?: shared.FourHundredAndThree;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
