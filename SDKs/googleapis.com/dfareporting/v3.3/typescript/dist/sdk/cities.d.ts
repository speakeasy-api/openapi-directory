import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Cities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves a list of cities, possibly filtered.
     */
    dfareportingCitiesList(req: operations.DfareportingCitiesListRequest, security: operations.DfareportingCitiesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCitiesListResponse>;
}
