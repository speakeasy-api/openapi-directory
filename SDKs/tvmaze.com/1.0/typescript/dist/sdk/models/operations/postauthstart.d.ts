import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAuthStartRequestBody extends SpeakeasyBase {
    /**
     * The user's email address
     */
    email?: string;
    /**
     * Whether to email the user a confirmation link
     */
    emailConfirmation?: boolean;
}
/**
 * The authentication request was succesfully started
 */
export declare class PostAuthStart200ApplicationJSON extends SpeakeasyBase {
    /**
     * URL where the user can confirm the authentication request
     */
    confirmUrl?: string;
    /**
     * Authentication token to use in the `poll` endpoint
     */
    token?: string;
}
export declare class PostAuthStartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authentication request was succesfully started
     */
    postAuthStart200ApplicationJSONObject?: PostAuthStart200ApplicationJSON;
}
