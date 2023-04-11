import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Activity Histories
 */
export declare class ActivityHistories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Past Activities
     *
     * @remarks
     * Fetches all of the customer's past activities for your application. Returns all the Activities that are found on the Salesloft Activity Feed. <a href="/activity-history.html" target="_blank" rel="noopener noreferrer">Visit here for more details</a>.
     */
    getV2ActivityHistories(req: operations.GetV2ActivityHistoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetV2ActivityHistoriesResponse>;
}
