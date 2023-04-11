import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Statistics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get clicks statistics
     *
     * @remarks
     * Retrieve the raw click statistics for your account. Clicks are retrieved by creation date in descending order.
     */
    getStatistics(req: shared.ClicksFilterModel, security: operations.GetStatisticsSecurity, config?: AxiosRequestConfig): Promise<operations.GetStatisticsResponse>;
}
