import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new ScanConfig.
     */
    websecurityscannerProjectsScanConfigsCreate(req: operations.WebsecurityscannerProjectsScanConfigsCreateRequest, security: operations.WebsecurityscannerProjectsScanConfigsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsCreateResponse>;
    /**
     * Deletes an existing ScanConfig and its child resources.
     */
    websecurityscannerProjectsScanConfigsDelete(req: operations.WebsecurityscannerProjectsScanConfigsDeleteRequest, security: operations.WebsecurityscannerProjectsScanConfigsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsDeleteResponse>;
    /**
     * Lists ScanConfigs under a given project.
     */
    websecurityscannerProjectsScanConfigsList(req: operations.WebsecurityscannerProjectsScanConfigsListRequest, security: operations.WebsecurityscannerProjectsScanConfigsListSecurity, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsListResponse>;
    /**
     * Updates a ScanConfig. This method support partial update of a ScanConfig.
     */
    websecurityscannerProjectsScanConfigsPatch(req: operations.WebsecurityscannerProjectsScanConfigsPatchRequest, security: operations.WebsecurityscannerProjectsScanConfigsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsPatchResponse>;
    /**
     * List CrawledUrls under a given ScanRun.
     */
    websecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList(req: operations.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListRequest, security: operations.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListSecurity, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListResponse>;
    /**
     * List all FindingTypeStats under a given ScanRun.
     */
    websecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList(req: operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest, security: operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListSecurity, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse>;
    /**
     * Gets a Finding.
     */
    websecurityscannerProjectsScanConfigsScanRunsFindingsGet(req: operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest, security: operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetSecurity, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse>;
    /**
     * List Findings under a given ScanRun.
     */
    websecurityscannerProjectsScanConfigsScanRunsFindingsList(req: operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest, security: operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsListSecurity, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse>;
    /**
     * Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.
     */
    websecurityscannerProjectsScanConfigsScanRunsList(req: operations.WebsecurityscannerProjectsScanConfigsScanRunsListRequest, security: operations.WebsecurityscannerProjectsScanConfigsScanRunsListSecurity, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsScanRunsListResponse>;
    /**
     * Stops a ScanRun. The stopped ScanRun is returned.
     */
    websecurityscannerProjectsScanConfigsScanRunsStop(req: operations.WebsecurityscannerProjectsScanConfigsScanRunsStopRequest, security: operations.WebsecurityscannerProjectsScanConfigsScanRunsStopSecurity, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsScanRunsStopResponse>;
    /**
     * Start a ScanRun according to the given ScanConfig.
     */
    websecurityscannerProjectsScanConfigsStart(req: operations.WebsecurityscannerProjectsScanConfigsStartRequest, security: operations.WebsecurityscannerProjectsScanConfigsStartSecurity, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsStartResponse>;
}
