import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AuthAuthkeyGetSecurity extends SpeakeasyBase {
    appKey: string;
}
export declare class AuthAuthkeyGetRequest extends SpeakeasyBase {
    /**
     * User's device name
     */
    deviceName?: string;
    /**
     * identifierForVendor for User's Device (if app is iOS)
     */
    identifierForVendor?: string;
    /**
     * YubiKey OTP (if configured for user)
     */
    otp?: string;
    /**
     * Authenticated password
     */
    password: string;
    /**
     * Authenticated username
     */
    username: string;
}
export declare class AuthAuthkeyGetResponse extends SpeakeasyBase {
    /**
     * Access Denied
     */
    fourHundredAndThree?: shared.FourHundredAndThree;
    /**
     * OTP required but not supplied. Please resubmit request with OTP
     */
    fourHundredAndFortyNine?: shared.FourHundredAndFortyNine;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User Authenticated Sucessfully
     */
    inlineResponse2011?: shared.InlineResponse2011;
}
