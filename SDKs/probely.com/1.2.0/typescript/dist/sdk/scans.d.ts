import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Start and manage scans against the target.
 *
 * @remarks
 * You can also produce reports and access the list of scanned endpoints.
 *
 */
export declare class Scans {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List scans for all targets
     */
    getTargetsAllScans(req: operations.GetTargetsAllScansRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsAllScansResponse>;
    /**
     * List scans
     */
    getTargetsTargetIdScans(req: operations.GetTargetsTargetIdScansRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdScansResponse>;
    /**
     * Dates where scans have ocurred
     */
    getTargetsTargetIdScansDates(req: operations.GetTargetsTargetIdScansDatesRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdScansDatesResponse>;
    /**
     * Scan page
     *
     * @remarks
     * Given a date return the page number
     */
    getTargetsTargetIdScansRetrievePage(req: operations.GetTargetsTargetIdScansRetrievePageRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdScansRetrievePageResponse>;
    /**
     * Retrieve scan
     */
    getTargetsTargetIdScansId(req: operations.GetTargetsTargetIdScansIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdScansIdResponse>;
    /**
     * Scan endpoints file
     */
    getTargetsTargetIdScansIdEndpoints(req: operations.GetTargetsTargetIdScansIdEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdScansIdEndpointsResponse>;
    /**
     * Scan report PDF, using the report type specified for the target
     */
    getTargetsTargetIdScansIdReport(req: operations.GetTargetsTargetIdScansIdReportRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdScansIdReportResponse>;
    /**
     * Scan report PDF, using the default report type
     */
    getTargetsTargetIdScansIdReportDefault(req: operations.GetTargetsTargetIdScansIdReportDefaultRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdScansIdReportDefaultResponse>;
    /**
     * Scan report PDF, using the OWASP report type
     */
    getTargetsTargetIdScansIdReportOwasp(req: operations.GetTargetsTargetIdScansIdReportOwaspRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdScansIdReportOwaspResponse>;
    /**
     * Scan report PDF, using the PCI report type
     */
    getTargetsTargetIdScansIdReportPci(req: operations.GetTargetsTargetIdScansIdReportPciRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdScansIdReportPciResponse>;
    /**
     * Start a scan on the target
     */
    postTargetsTargetIdScanNow(req: operations.PostTargetsTargetIdScanNowRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsTargetIdScanNowResponse>;
    /**
     * Cancel running scan
     */
    postTargetsTargetIdScansIdCancel(req: operations.PostTargetsTargetIdScansIdCancelRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsTargetIdScansIdCancelResponse>;
}
