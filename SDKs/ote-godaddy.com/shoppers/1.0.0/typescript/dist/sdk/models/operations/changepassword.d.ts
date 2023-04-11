import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangePasswordRequest extends SpeakeasyBase {
    /**
     * The value to set the subaccount's password to
     */
    secret: shared.Secret;
    /**
     * Shopper whose password will be set
     */
    shopperId: string;
}
export declare class ChangePasswordResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Authentication info not sent or invalid
     */
    error?: shared.ErrorT;
    /**
     * Request was not successful
     */
    passwordError?: shared.PasswordError;
    /**
     * Request was successful
     */
    shopperId?: shared.ShopperId;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
