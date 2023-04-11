import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Reports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
     */
    dfareportingReportsCompatibleFieldsQuery(req: operations.DfareportingReportsCompatibleFieldsQueryRequest, security: operations.DfareportingReportsCompatibleFieldsQuerySecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingReportsCompatibleFieldsQueryResponse>;
    /**
     * Deletes a report by its ID.
     */
    dfareportingReportsDelete(req: operations.DfareportingReportsDeleteRequest, security: operations.DfareportingReportsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingReportsDeleteResponse>;
    /**
     * Retrieves a report file by its report ID and file ID. This method supports media download.
     */
    dfareportingReportsFilesGet(req: operations.DfareportingReportsFilesGetRequest, security: operations.DfareportingReportsFilesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingReportsFilesGetResponse>;
    /**
     * Lists files for a report.
     */
    dfareportingReportsFilesList(req: operations.DfareportingReportsFilesListRequest, security: operations.DfareportingReportsFilesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingReportsFilesListResponse>;
    /**
     * Retrieves a report by its ID.
     */
    dfareportingReportsGet(req: operations.DfareportingReportsGetRequest, security: operations.DfareportingReportsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingReportsGetResponse>;
    /**
     * Creates a report.
     */
    dfareportingReportsInsert(req: operations.DfareportingReportsInsertRequest, security: operations.DfareportingReportsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingReportsInsertResponse>;
    /**
     * Retrieves list of reports.
     */
    dfareportingReportsList(req: operations.DfareportingReportsListRequest, security: operations.DfareportingReportsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingReportsListResponse>;
    /**
     * Updates an existing report. This method supports patch semantics.
     */
    dfareportingReportsPatch(req: operations.DfareportingReportsPatchRequest, security: operations.DfareportingReportsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingReportsPatchResponse>;
    /**
     * Runs a report.
     */
    dfareportingReportsRun(req: operations.DfareportingReportsRunRequest, security: operations.DfareportingReportsRunSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingReportsRunResponse>;
    /**
     * Updates a report.
     */
    dfareportingReportsUpdate(req: operations.DfareportingReportsUpdateRequest, security: operations.DfareportingReportsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingReportsUpdateResponse>;
}
