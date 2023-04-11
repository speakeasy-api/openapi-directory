import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class NonPrimaryStateTax {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add/update non-primary state tax
     *
     * @remarks
     * Sends new or updated employee non-primary state tax information directly to Web Pay.
     */
    addOrUpdateNonPrimaryStateTax(req: operations.AddOrUpdateNonPrimaryStateTaxRequest, security: operations.AddOrUpdateNonPrimaryStateTaxSecurity, config?: AxiosRequestConfig): Promise<operations.AddOrUpdateNonPrimaryStateTaxResponse>;
}
