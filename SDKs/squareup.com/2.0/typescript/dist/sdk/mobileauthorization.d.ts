import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MobileAuthorization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CreateMobileAuthorizationCode
     *
     * @remarks
     * Generates code to authorize a mobile application to connect to a Square card reader
     *
     * Authorization codes are one-time-use and expire __60 minutes__ after being issued.
     *
     * __Important:__ The `Authorization` header you provide to this endpoint must have the following format:
     *
     * ```
     * Authorization: Bearer ACCESS_TOKEN
     * ```
     *
     * Replace `ACCESS_TOKEN` with a
     * [valid production authorization credential](https://developer.squareup.com/docs/build-basics/access-tokens).
     */
    createMobileAuthorizationCode(req: shared.CreateMobileAuthorizationCodeRequest, security: operations.CreateMobileAuthorizationCodeSecurity, config?: AxiosRequestConfig): Promise<operations.CreateMobileAuthorizationCodeResponse>;
}
