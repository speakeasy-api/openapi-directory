import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Auth Controller
 */
export declare class AuthController {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Basic User Information
     *
     * @remarks
     * Once logged in and have a token, get basic user information including group role membership
     */
    getBasicUserInformation(req: operations.GetBasicUserInformationRequest, config?: AxiosRequestConfig): Promise<operations.GetBasicUserInformationResponse>;
    /**
     * Log In
     *
     * @remarks
     * Authenticate using username and password, returns token, which must be added to X-Auth-Token in header of all future requests
     */
    logIn(req: shared.Credentials, config?: AxiosRequestConfig): Promise<operations.LogInResponse>;
    /**
     * Log Out
     *
     * @remarks
     * Log Out
     */
    logOut(req: operations.LogOutRequest, config?: AxiosRequestConfig): Promise<operations.LogOutResponse>;
}
