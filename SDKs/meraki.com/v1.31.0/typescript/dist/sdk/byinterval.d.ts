import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ByInterval {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Tracks organizations' API requests by response code across a given time period
     *
     * @remarks
     * Tracks organizations' API requests by response code across a given time period
     */
    getOrganizationApiRequestsOverviewResponseCodesByInterval(req: operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalResponse>;
}
