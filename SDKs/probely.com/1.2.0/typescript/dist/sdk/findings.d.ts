import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Findings are security issues found during scans.
 *
 * @remarks
 * We try hard to present valid findings only. We give as much information
 * as possible to help you know exactly what to do, without having to
 * resort to outside resources.
 *
 * Findings come with all the data we gathered during the scan, a
 * suggestion on how to fix it, and a description of the vulnerability.
 *
 */
export declare class Findings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List target findings
     */
    getTargetsTargetIdFindings(req: operations.GetTargetsTargetIdFindingsRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdFindingsResponse>;
    /**
     * Retrieve finding report PDF format
     */
    getTargetsTargetIdFindingsReport(req: operations.GetTargetsTargetIdFindingsReportRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdFindingsReportResponse>;
    /**
     * Retrieve finding
     */
    getTargetsTargetIdFindingsId(req: operations.GetTargetsTargetIdFindingsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdFindingsIdResponse>;
    /**
     * Finding activity log.
     *
     * @remarks
     * Finding activity log.
     */
    getTargetsTargetIdFindingsIdLog(req: operations.GetTargetsTargetIdFindingsIdLogRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdFindingsIdLogResponse>;
    /**
     * Bulk update findings
     */
    patchTargetsTargetIdFindingsBulkUpdate(req: operations.PatchTargetsTargetIdFindingsBulkUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdFindingsBulkUpdateResponse>;
    /**
     * Partial update finding
     */
    patchTargetsTargetIdFindingsId(req: operations.PatchTargetsTargetIdFindingsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdFindingsIdResponse>;
    /**
     * Finding report
     */
    postTargetsTargetIdFindingsBulkReport(req: operations.PostTargetsTargetIdFindingsBulkReportRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsTargetIdFindingsBulkReportResponse>;
    /**
     * Bulk retest findings
     */
    postTargetsTargetIdFindingsBulkRetest(req: operations.PostTargetsTargetIdFindingsBulkRetestRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsTargetIdFindingsBulkRetestResponse>;
    /**
     * Retest finding
     */
    postTargetsTargetIdFindingsIdRetest(req: operations.PostTargetsTargetIdFindingsIdRetestRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsTargetIdFindingsIdRetestResponse>;
    /**
     * Update finding
     */
    putTargetsTargetIdFindingsId(req: operations.PutTargetsTargetIdFindingsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsTargetIdFindingsIdResponse>;
}
