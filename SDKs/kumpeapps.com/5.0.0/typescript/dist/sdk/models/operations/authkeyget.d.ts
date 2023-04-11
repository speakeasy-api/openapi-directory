import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AuthkeyGetSecurity extends SpeakeasyBase {
    appKey: string;
}
export declare class AuthkeyGetRequest extends SpeakeasyBase {
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
export declare class AuthkeyGetResponse extends SpeakeasyBase {
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
