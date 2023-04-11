import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ValidateIBANBasicSecurity extends SpeakeasyBase {
    apiKeySecurity: string;
}
export declare class ValidateIBANBasicRequest extends SpeakeasyBase {
    /**
     * The IBAN
     */
    iban: string;
}
export declare class ValidateIBANBasicResponse extends SpeakeasyBase {
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
    ibanResultBasic?: shared.IBANResultBasic;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
