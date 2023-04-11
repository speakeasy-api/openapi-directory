import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PrimaryStateTax {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add/update primary state tax
     *
     * @remarks
     * Sends new or updated employee primary state tax information directly to Web Pay.
     */
    addOrUpdatePrimaryStateTax(req: operations.AddOrUpdatePrimaryStateTaxRequest, security: operations.AddOrUpdatePrimaryStateTaxSecurity, config?: AxiosRequestConfig): Promise<operations.AddOrUpdatePrimaryStateTaxResponse>;
}
