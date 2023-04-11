import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Claims {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search through fact-checked claims.
     */
    factchecktoolsClaimsSearch(req: operations.FactchecktoolsClaimsSearchRequest, config?: AxiosRequestConfig): Promise<operations.FactchecktoolsClaimsSearchResponse>;
}
