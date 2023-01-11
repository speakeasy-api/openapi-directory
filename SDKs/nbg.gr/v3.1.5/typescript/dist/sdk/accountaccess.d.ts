import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AccountAccess {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAccountAccessConsentsConsentId - Delete Account Access Consents
     *
     * Delete Account Access Consents by Consent ID
    **/
    deleteAccountAccessConsentsConsentId(req: operations.DeleteAccountAccessConsentsConsentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccountAccessConsentsConsentIdResponse>;
    /**
     * getAccountAccessConsentsConsentId - Get Account Access Consents
     *
     * Get Account Access Consents by Consent ID
    **/
    getAccountAccessConsentsConsentId(req: operations.GetAccountAccessConsentsConsentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountAccessConsentsConsentIdResponse>;
    /**
     * postAccountAccessConsents - Create Account Access Consents
     *
     * Create Account Access Consents
    **/
    postAccountAccessConsents(req: operations.PostAccountAccessConsentsRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountAccessConsentsResponse>;
}
