import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ValidateIBANSecurity extends SpeakeasyBase {
    apiKeySecurity: string;
}
export declare class ValidateIBANRequest extends SpeakeasyBase {
    /**
     * The IBAN
     */
    iban: string;
}
export declare class ValidateIBANResponse extends SpeakeasyBase {
    /**
     * Your balance is exhausted or bad request
     */
    fourHundred?: shared.FourHundred;
    /**
     * Package expired or account was blocked
     */
    fourHundredAndOne?: shared.FourHundredAndOne;
    /**
     * Invalid API Key
     */
    fourHundredAndThree?: shared.FourHundredAndThree;
    /**
     * API key is missing
     */
    fourHundredAndTwentyTwo?: shared.FourHundredAndTwentyTwo;
    contentType: string;
    /**
     * Valid IBAN response
     */
    ibanResult?: shared.IBANResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
