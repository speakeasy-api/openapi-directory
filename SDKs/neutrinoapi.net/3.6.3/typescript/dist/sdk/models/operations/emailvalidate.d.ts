import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EmailValidateRequest extends SpeakeasyBase {
    /**
     * An email address
     */
    email: string;
    /**
     * Automatically attempt to fix typos in the address
     */
    fixTypos?: boolean;
}
export declare class EmailValidateResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    emailValidateResponse?: shared.EmailValidateResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
