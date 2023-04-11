import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PhoneNumbers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Phone Number Validation
     *
     * @remarks
     * Query for and validate phone numbers.
     *
     */
    phoneNumberValidation(req: operations.PhoneNumberValidationRequest, config?: AxiosRequestConfig): Promise<operations.PhoneNumberValidationResponse>;
}
