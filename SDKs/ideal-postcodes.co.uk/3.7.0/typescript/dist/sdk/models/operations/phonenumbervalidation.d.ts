import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PhoneNumberValidationRequest extends SpeakeasyBase {
    apiKey: string;
    /**
     * Specifies the phone number to validate. Phone number must include a country code in acceptable format. For instance, UK phone numbers should be suffixed `+44`, `44` or `0044`.
     */
    query: string;
}
export declare class PhoneNumberValidationResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    /**
     * Success
     */
    phoneNumberResponse?: shared.PhoneNumberResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
