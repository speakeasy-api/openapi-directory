import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VerifySecurityCodeRequest extends SpeakeasyBase {
    /**
     * If set then enable additional brute-force protection by limiting the number of attempts by the supplied value. This can be set to any unique identifier you would like to limit by, for example a hash of the users email, phone number or IP address. Requests to this API will be ignored after approximately 10 failed verification attempts
     */
    limitBy?: string;
    /**
     * The security code to verify
     */
    securityCode: string;
}
export declare class VerifySecurityCodeResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    verifySecurityCodeResponse?: shared.VerifySecurityCodeResponse;
}
