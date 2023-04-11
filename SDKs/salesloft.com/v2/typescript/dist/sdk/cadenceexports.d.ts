import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Cadence Exports
 */
export declare class CadenceExports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Export a cadence
     *
     * @remarks
     * Exports a cadence as JSON.
     *
     */
    getV2CadenceExportsIdJson(req: operations.GetV2CadenceExportsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CadenceExportsIdJsonResponse>;
}
