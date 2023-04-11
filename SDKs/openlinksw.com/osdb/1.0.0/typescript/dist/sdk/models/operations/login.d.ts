import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LoginResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response
     */
    errorModel?: shared.ErrorModel;
    /**
     * Confirmation of a successful OSDB login.
     */
    loginResponse?: shared.LoginResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
