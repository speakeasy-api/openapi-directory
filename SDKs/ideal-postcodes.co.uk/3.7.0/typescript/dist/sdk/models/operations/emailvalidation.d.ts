import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EmailValidationRequest extends SpeakeasyBase {
    apiKey: string;
    /**
     * Specifies the email address to validate
     */
    query: string;
}
export declare class EmailValidationResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    /**
     * Success
     */
    emailResponse?: shared.EmailResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
