import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PhoneVerifyRequestBody extends SpeakeasyBase {
    /**
     * The number of digits to use in the security code (between 4 and 12)
     */
    codeLength?: number;
    /**
     * ISO 2-letter country code, assume numbers are based in this country. <br>If not set numbers are assumed to be in international format (with or without the leading + sign)
     */
    countryCode?: string;
    /**
     * The language to playback the verification code in, available languages are: <ul> <li>de - German</li> <li>en - English</li> <li>es - Spanish</li> <li>fr - French</li> <li>it - Italian</li> <li>pt - Portuguese</li> <li>ru - Russian</li> </ul>
     */
    languageCode?: string;
    /**
     * Limit the total number of calls allowed to the supplied phone number, if the limit is reached within the TTL then error code 14 will be returned
     */
    limit?: number;
    /**
     * Set the TTL in number of days that the 'limit' option will remember a phone number (the default is 1 day and the maximum is 365 days)
     */
    limitTtl?: number;
    /**
     * The phone number to send the verification code to
     */
    number: string;
    /**
     * The delay in milliseconds between the playback of each security code
     */
    playbackDelay?: number;
    /**
     * Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code
     */
    securityCode?: number;
}
export declare class PhoneVerifyResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    phoneVerifyResponse?: shared.PhoneVerifyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
