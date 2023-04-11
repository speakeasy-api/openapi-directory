import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChangeLogs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one change log by ID.
     */
    dfareportingChangeLogsGet(req: operations.DfareportingChangeLogsGetRequest, security: operations.DfareportingChangeLogsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingChangeLogsGetResponse>;
    /**
     * Retrieves a list of change logs. This method supports paging.
     */
    dfareportingChangeLogsList(req: operations.DfareportingChangeLogsListRequest, security: operations.DfareportingChangeLogsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingChangeLogsListResponse>;
}
