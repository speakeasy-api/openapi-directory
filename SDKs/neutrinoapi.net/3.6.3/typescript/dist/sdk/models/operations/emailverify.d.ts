import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EmailVerifyRequest extends SpeakeasyBase {
    /**
     * An email address
     */
    email: string;
    /**
     * Automatically attempt to fix typos in the address
     */
    fixTypos?: boolean;
}
export declare class EmailVerifyResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    emailVerifyResponse?: shared.EmailVerifyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
