import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CreativeAssets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Inserts a new creative asset.
     */
    dfareportingCreativeAssetsInsert(req: operations.DfareportingCreativeAssetsInsertRequest, security: operations.DfareportingCreativeAssetsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeAssetsInsertResponse>;
}
