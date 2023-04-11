import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * API Endpoints of IBANAPI
 */
export declare class Ibanapi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Account Balance
     *
     * @remarks
     * Returns the account balance and expiry
     */
    getBalance(config?: AxiosRequestConfig): Promise<operations.GetBalanceResponse>;
    /**
     * Validate IBAN
     *
     * @remarks
     * Returns the validation results
     */
    validateIBAN(req: operations.ValidateIBANRequest, security: operations.ValidateIBANSecurity, config?: AxiosRequestConfig): Promise<operations.ValidateIBANResponse>;
    /**
     * Validate IBAN Basic
     *
     * @remarks
     * Returns the basic validation results
     */
    validateIBANBasic(req: operations.ValidateIBANBasicRequest, security: operations.ValidateIBANBasicSecurity, config?: AxiosRequestConfig): Promise<operations.ValidateIBANBasicResponse>;
}
