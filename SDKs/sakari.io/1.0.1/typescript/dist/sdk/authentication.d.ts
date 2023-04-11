import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Sakari uses OAuth2 for authentication. After you have created an account at [https://hub.sakari.io](https://hub.sakari.io), you can retrieve your client id and secret from the 'Account Details' screen (click on the 'cog' icon in the top right corner and scroll down to API Credentials)
 *
 * @remarks
 *
 * Using your client id and secret, you can exchange these for a JWT ([JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token))
 *
 * The JWT should then be used when accessing any of the core API's. It should be passed in the `Authorization` header.
 *
 * For example:
 *
 * ``Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImt....``
 *
 */
export declare class Authentication {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get token for accessing APIs
     */
    authToken(req: shared.TokenRequest, config?: AxiosRequestConfig): Promise<operations.AuthTokenResponse>;
}
