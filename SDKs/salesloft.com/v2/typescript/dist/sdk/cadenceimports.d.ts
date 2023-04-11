import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Cadence Importing
 */
export declare class CadenceImports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Import cadences from JSON
     *
     * @remarks
     * New cadences can be created or steps can be imported onto existing cadences which do not have steps.
     * <a href="/cadence-imports.html" target="_blank" rel="noopener noreferrer">Visit here for more details</a>.
     *
     */
    postV2CadenceImportsJson(req: operations.PostV2CadenceImportsJsonRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2CadenceImportsJsonResponse>;
}
