import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PrimaryStateTax {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addOrUpdatePrimaryStateTax - Add/update primary state tax
     *
     * Sends new or updated employee primary state tax information directly to Web Pay.
    **/
    addOrUpdatePrimaryStateTax(req: operations.AddOrUpdatePrimaryStateTaxRequest, config?: AxiosRequestConfig): Promise<operations.AddOrUpdatePrimaryStateTaxResponse>;
}
