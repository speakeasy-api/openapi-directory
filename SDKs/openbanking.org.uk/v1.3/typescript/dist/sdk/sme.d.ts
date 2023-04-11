import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoint for getting Unsecured SME Loan data
 */
export declare class Sme {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a list of all `Unsercured SME Lending` objects.
     */
    getUnsecuredSmeLoans(req: operations.GetUnsecuredSmeLoansRequest, config?: AxiosRequestConfig): Promise<operations.GetUnsecuredSmeLoansResponse>;
    /**
     * Gets header information on the current set of `Unsercured SME Lending` data
     */
    headUnsecuredSmeLoans(req: operations.HeadUnsecuredSmeLoansRequest, config?: AxiosRequestConfig): Promise<operations.HeadUnsecuredSmeLoansResponse>;
}
