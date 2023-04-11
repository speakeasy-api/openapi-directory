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
    doubleclickbidmanagerQueriesCreatequery(req: operations.DoubleclickbidmanagerQueriesCreatequeryRequest, security: operations.DoubleclickbidmanagerQueriesCreatequerySecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesCreatequeryResponse>;
    /**
     * Deletes a stored query as well as the associated stored reports.
     */
    doubleclickbidmanagerQueriesDeletequery(req: operations.DoubleclickbidmanagerQueriesDeletequeryRequest, security: operations.DoubleclickbidmanagerQueriesDeletequerySecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesDeletequeryResponse>;
    /**
     * Retrieves a stored query.
     */
    doubleclickbidmanagerQueriesGetquery(req: operations.DoubleclickbidmanagerQueriesGetqueryRequest, security: operations.DoubleclickbidmanagerQueriesGetquerySecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesGetqueryResponse>;
    /**
     * Retrieves stored queries.
     */
    doubleclickbidmanagerQueriesListqueries(req: operations.DoubleclickbidmanagerQueriesListqueriesRequest, security: operations.DoubleclickbidmanagerQueriesListqueriesSecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesListqueriesResponse>;
    /**
     * Runs a stored query to generate a report.
     */
    doubleclickbidmanagerQueriesRunquery(req: operations.DoubleclickbidmanagerQueriesRunqueryRequest, security: operations.DoubleclickbidmanagerQueriesRunquerySecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesRunqueryResponse>;
}
