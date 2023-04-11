import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Queries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a query.
     */
    doubleclickbidmanagerQueriesCreate(req: operations.DoubleclickbidmanagerQueriesCreateRequest, security: operations.DoubleclickbidmanagerQueriesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesCreateResponse>;
    /**
     * Deletes a query as well as the associated reports.
     */
    doubleclickbidmanagerQueriesDelete(req: operations.DoubleclickbidmanagerQueriesDeleteRequest, security: operations.DoubleclickbidmanagerQueriesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesDeleteResponse>;
    /**
     * Retrieves a query.
     */
    doubleclickbidmanagerQueriesGet(req: operations.DoubleclickbidmanagerQueriesGetRequest, security: operations.DoubleclickbidmanagerQueriesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesGetResponse>;
    /**
     * Lists queries created by the current user.
     */
    doubleclickbidmanagerQueriesList(req: operations.DoubleclickbidmanagerQueriesListRequest, security: operations.DoubleclickbidmanagerQueriesListSecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesListResponse>;
    /**
     * Retrieves a report.
     */
    doubleclickbidmanagerQueriesReportsGet(req: operations.DoubleclickbidmanagerQueriesReportsGetRequest, security: operations.DoubleclickbidmanagerQueriesReportsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesReportsGetResponse>;
    /**
     * Lists reports associated with a query.
     */
    doubleclickbidmanagerQueriesReportsList(req: operations.DoubleclickbidmanagerQueriesReportsListRequest, security: operations.DoubleclickbidmanagerQueriesReportsListSecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesReportsListResponse>;
    /**
     * Runs a stored query to generate a report.
     */
    doubleclickbidmanagerQueriesRun(req: operations.DoubleclickbidmanagerQueriesRunRequest, security: operations.DoubleclickbidmanagerQueriesRunSecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesRunResponse>;
}
