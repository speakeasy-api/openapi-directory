import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AccountAccess {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Account Access Consents
     *
     * @remarks
     * Delete Account Access Consents by Consent ID
     */
    deleteAccountAccessConsentsConsentId(req: operations.DeleteAccountAccessConsentsConsentIdRequest, security: operations.DeleteAccountAccessConsentsConsentIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteAccountAccessConsentsConsentIdResponse>;
    /**
     * Get Account Access Consents
     *
     * @remarks
     * Get Account Access Consents by Consent ID
     */
    getAccountAccessConsentsConsentId(req: operations.GetAccountAccessConsentsConsentIdRequest, security: operations.GetAccountAccessConsentsConsentIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountAccessConsentsConsentIdResponse>;
    /**
     * Create Account Access Consents
     *
     * @remarks
     * Create Account Access Consents
     */
    postAccountAccessConsents(req: operations.PostAccountAccessConsentsRequest, security: operations.PostAccountAccessConsentsSecurity, config?: AxiosRequestConfig): Promise<operations.PostAccountAccessConsentsResponse>;
}
