import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DimensionValues {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves list of report dimension values for a list of filters.
     */
    dfareportingDimensionValuesQuery(req: operations.DfareportingDimensionValuesQueryRequest, security: operations.DfareportingDimensionValuesQuerySecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingDimensionValuesQueryResponse>;
}
