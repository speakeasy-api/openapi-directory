import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Emails {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Email Validation
     *
     * @remarks
     * Query for and validate email addresses.
     *
     */
    emailValidation(req: operations.EmailValidationRequest, config?: AxiosRequestConfig): Promise<operations.EmailValidationResponse>;
}
