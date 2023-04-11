import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FundsConfirmations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Funds Confirmation Consent
     */
    createFundsConfirmationConsents(req: operations.CreateFundsConfirmationConsentsRequest, security: operations.CreateFundsConfirmationConsentsSecurity, config?: AxiosRequestConfig): Promise<operations.CreateFundsConfirmationConsentsResponse>;
    /**
     * Create Funds Confirmation
     */
    createFundsConfirmations(req: operations.CreateFundsConfirmationsRequest, security: operations.CreateFundsConfirmationsSecurity, config?: AxiosRequestConfig): Promise<operations.CreateFundsConfirmationsResponse>;
    /**
     * Delete Funds Confirmation Consent
     */
    deleteFundsConfirmationConsentsConsentId(req: operations.DeleteFundsConfirmationConsentsConsentIdRequest, security: operations.DeleteFundsConfirmationConsentsConsentIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteFundsConfirmationConsentsConsentIdResponse>;
    /**
     * Get Funds Confirmation Consent
     */
    getFundsConfirmationConsentsConsentId(req: operations.GetFundsConfirmationConsentsConsentIdRequest, security: operations.GetFundsConfirmationConsentsConsentIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetFundsConfirmationConsentsConsentIdResponse>;
}
