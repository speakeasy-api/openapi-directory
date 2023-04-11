import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Requires Organization Key
 */
export declare class Organization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Clear all tags across multiple assets based on a search query
     */
    clearBulkAssetTags(req: shared.Search, security: operations.ClearBulkAssetTagsSecurity, config?: AxiosRequestConfig): Promise<operations.ClearBulkAssetTagsResponse>;
    /**
     * Create a scan task for a given site
     */
    createScan(req: operations.CreateScanRequest, security: operations.CreateScanSecurity, config?: AxiosRequestConfig): Promise<operations.CreateScanResponse>;
    /**
     * Create a new site
     */
    createSite(req: shared.SiteOptions, security: operations.CreateSiteSecurity, config?: AxiosRequestConfig): Promise<operations.CreateSiteResponse>;
    /**
     * Get details for a single agent
     */
    getAgent(req: operations.GetAgentRequest, security: operations.GetAgentSecurity, config?: AxiosRequestConfig): Promise<operations.GetAgentResponse>;
    /**
     * Get all agents
     */
    getAgents(config?: AxiosRequestConfig): Promise<operations.GetAgentsResponse>;
    /**
     * Get asset details
     */
    getAsset(req: operations.GetAssetRequest, security: operations.GetAssetSecurity, config?: AxiosRequestConfig): Promise<operations.GetAssetResponse>;
    /**
     * Get all assets
     */
    getAssets(req: operations.GetAssetsRequest, security: operations.GetAssetsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAssetsResponse>;
    /**
     * Get API key details
     */
    getKey(config?: AxiosRequestConfig): Promise<operations.GetKeyResponse>;
    /**
     * Get organization details
     */
    getOrganization(config?: AxiosRequestConfig): Promise<operations.GetOrganizationResponse>;
    /**
     * Get service details
     */
    getService(req: operations.GetServiceRequest, security: operations.GetServiceSecurity, config?: AxiosRequestConfig): Promise<operations.GetServiceResponse>;
    /**
     * Get all services
     */
    getServices(req: operations.GetServicesRequest, security: operations.GetServicesSecurity, config?: AxiosRequestConfig): Promise<operations.GetServicesResponse>;
    /**
     * Get site details
     */
    getSite(req: operations.GetSiteRequest, security: operations.GetSiteSecurity, config?: AxiosRequestConfig): Promise<operations.GetSiteResponse>;
    /**
     * Get all sites
     */
    getSites(config?: AxiosRequestConfig): Promise<operations.GetSitesResponse>;
    /**
     * Get task details
     */
    getTask(req: operations.GetTaskRequest, security: operations.GetTaskSecurity, config?: AxiosRequestConfig): Promise<operations.GetTaskResponse>;
    /**
     * Returns a temporary task change report data url
     */
    getTaskChangeReport(req: operations.GetTaskChangeReportRequest, security: operations.GetTaskChangeReportSecurity, config?: AxiosRequestConfig): Promise<operations.GetTaskChangeReportResponse>;
    /**
     * Returns a temporary task log data url
     */
    getTaskLog(req: operations.GetTaskLogRequest, security: operations.GetTaskLogSecurity, config?: AxiosRequestConfig): Promise<operations.GetTaskLogResponse>;
    /**
     * Returns a temporary task scan data url
     */
    getTaskScanData(req: operations.GetTaskScanDataRequest, security: operations.GetTaskScanDataSecurity, config?: AxiosRequestConfig): Promise<operations.GetTaskScanDataResponse>;
    /**
     * Get all tasks (last 1000)
     */
    getTasks(req: operations.GetTasksRequest, security: operations.GetTasksSecurity, config?: AxiosRequestConfig): Promise<operations.GetTasksResponse>;
    /**
     * Get wireless LAN details
     */
    getWirelessLAN(req: operations.GetWirelessLANRequest, security: operations.GetWirelessLANSecurity, config?: AxiosRequestConfig): Promise<operations.GetWirelessLANResponse>;
    /**
     * Get all wireless LANs
     */
    getWirelessLANs(req: operations.GetWirelessLANsRequest, security: operations.GetWirelessLANsSecurity, config?: AxiosRequestConfig): Promise<operations.GetWirelessLANsResponse>;
    /**
     * Signal that a completed task should be hidden
     */
    hideTask(req: operations.HideTaskRequest, security: operations.HideTaskSecurity, config?: AxiosRequestConfig): Promise<operations.HideTaskResponse>;
    /**
     * Import a Nessus scan data file into a site
     */
    importNessusScanData(req: operations.ImportNessusScanDataRequest, security: operations.ImportNessusScanDataSecurity, config?: AxiosRequestConfig): Promise<operations.ImportNessusScanDataResponse>;
    /**
     * Import a scan data file into a site
     */
    importScanData(req: operations.ImportScanDataRequest, security: operations.ImportScanDataSecurity, config?: AxiosRequestConfig): Promise<operations.ImportScanDataResponse>;
    /**
     * Remove and uninstall an agent
     */
    removeAgent(req: operations.RemoveAgentRequest, security: operations.RemoveAgentSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveAgentResponse>;
    /**
     * Remove an asset
     */
    removeAsset(req: operations.RemoveAssetRequest, security: operations.RemoveAssetSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveAssetResponse>;
    /**
     * Remove the current API key
     */
    removeKey(config?: AxiosRequestConfig): Promise<operations.RemoveKeyResponse>;
    /**
     * Remove a service
     */
    removeService(req: operations.RemoveServiceRequest, security: operations.RemoveServiceSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveServiceResponse>;
    /**
     * Remove a site and associated assets
     */
    removeSite(req: operations.RemoveSiteRequest, security: operations.RemoveSiteSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveSiteResponse>;
    /**
     * Remove a wireless LAN
     */
    removeWirelessLAN(req: operations.RemoveWirelessLANRequest, security: operations.RemoveWirelessLANSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveWirelessLANResponse>;
    /**
     * Rotate the API key secret and return the updated key
     */
    rotateKey(config?: AxiosRequestConfig): Promise<operations.RotateKeyResponse>;
    /**
     * Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks
     */
    stopTask(req: operations.StopTaskRequest, security: operations.StopTaskSecurity, config?: AxiosRequestConfig): Promise<operations.StopTaskResponse>;
    /**
     * Update the site associated with agent
     */
    updateAgentSite(req: operations.UpdateAgentSiteRequest, security: operations.UpdateAgentSiteSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateAgentSiteResponse>;
    /**
     * Update asset comments
     */
    updateAssetComments(req: operations.UpdateAssetCommentsRequest, security: operations.UpdateAssetCommentsSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateAssetCommentsResponse>;
    /**
     * Update asset tags
     */
    updateAssetTags(req: operations.UpdateAssetTagsRequest, security: operations.UpdateAssetTagsSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateAssetTagsResponse>;
    /**
     * Update tags across multiple assets based on a search query
     */
    updateBulkAssetTags(req: shared.AssetTagsWithSearch, security: operations.UpdateBulkAssetTagsSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateBulkAssetTagsResponse>;
    /**
     * Update organization details
     */
    updateOrganization(req: shared.OrgOptions, security: operations.UpdateOrganizationSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationResponse>;
    /**
     * Update a site definition
     */
    updateSite(req: operations.UpdateSiteRequest, security: operations.UpdateSiteSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateSiteResponse>;
    /**
     * Update task parameters
     */
    updateTask(req: operations.UpdateTaskRequest, security: operations.UpdateTaskSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateTaskResponse>;
    /**
     * Force an agent to update and restart
     */
    upgradeAgent(req: operations.UpgradeAgentRequest, security: operations.UpgradeAgentSecurity, config?: AxiosRequestConfig): Promise<operations.UpgradeAgentResponse>;
}
