import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Findings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getTargetsTargetIdFindings - List target findings
    **/
    getTargetsTargetIdFindings(req: operations.GetTargetsTargetIdFindingsRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdFindingsResponse>;
    /**
     * getTargetsTargetIdFindingsReport - Retrieve finding report PDF format
    **/
    getTargetsTargetIdFindingsReport(req: operations.GetTargetsTargetIdFindingsReportRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdFindingsReportResponse>;
    /**
     * getTargetsTargetIdFindingsId - Retrieve finding
    **/
    getTargetsTargetIdFindingsId(req: operations.GetTargetsTargetIdFindingsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdFindingsIdResponse>;
    /**
     * getTargetsTargetIdFindingsIdLog - Finding activity log.
     *
     * Finding activity log.
    **/
    getTargetsTargetIdFindingsIdLog(req: operations.GetTargetsTargetIdFindingsIdLogRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdFindingsIdLogResponse>;
    /**
     * patchTargetsTargetIdFindingsBulkUpdate - Bulk update findings
    **/
    patchTargetsTargetIdFindingsBulkUpdate(req: operations.PatchTargetsTargetIdFindingsBulkUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdFindingsBulkUpdateResponse>;
    /**
     * patchTargetsTargetIdFindingsId - Partial update finding
    **/
    patchTargetsTargetIdFindingsId(req: operations.PatchTargetsTargetIdFindingsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdFindingsIdResponse>;
    /**
     * postTargetsTargetIdFindingsBulkReport - Finding report
    **/
    postTargetsTargetIdFindingsBulkReport(req: operations.PostTargetsTargetIdFindingsBulkReportRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsTargetIdFindingsBulkReportResponse>;
    /**
     * postTargetsTargetIdFindingsBulkRetest - Bulk retest findings
    **/
    postTargetsTargetIdFindingsBulkRetest(req: operations.PostTargetsTargetIdFindingsBulkRetestRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsTargetIdFindingsBulkRetestResponse>;
    /**
     * postTargetsTargetIdFindingsIdRetest - Retest finding
    **/
    postTargetsTargetIdFindingsIdRetest(req: operations.PostTargetsTargetIdFindingsIdRetestRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsTargetIdFindingsIdRetestResponse>;
    /**
     * putTargetsTargetIdFindingsId - Update finding
    **/
    putTargetsTargetIdFindingsId(req: operations.PutTargetsTargetIdFindingsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsTargetIdFindingsIdResponse>;
}
