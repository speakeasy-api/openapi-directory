import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class EntityUsageReports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For more information, see the Entities Usage Report guide. For more information about the entities report's parameters, see the Entities Usage parameters reference guides.
     */
    reportsEntityUsageReportsGet(req: operations.ReportsEntityUsageReportsGetRequest, security: operations.ReportsEntityUsageReportsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ReportsEntityUsageReportsGetResponse>;
}
