import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PhoneValidateRequest extends SpeakeasyBase {
    /**
     * ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)
     */
    countryCode?: string;
    /**
     * Pass in a users IP address and we will assume numbers are based in the country of the IP address
     */
    ip?: string;
    /**
     * A phone number. This can be in international format (E.164) or local format. If passing local format you must also set either the 'country-code' OR 'ip' options as well
     */
    number: string;
}
export declare class PhoneValidateResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    phoneValidateResponse?: shared.PhoneValidateResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
