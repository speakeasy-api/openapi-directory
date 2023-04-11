import { SpeakeasyBase } from "../../../internal/utils";
export declare class PhoneVerifyResponse extends SpeakeasyBase {
    /**
     * True if the call is being made now
     */
    calling: boolean;
    /**
     * True if this a valid phone number
     */
    numberValid: boolean;
    /**
     * The security code generated, you can save this code to perform your own verification or you can use the <a href="https://www.neutrinoapi.com/api/verify-security-code/">Verify Security Code API</a>
     */
    securityCode: string;
}
