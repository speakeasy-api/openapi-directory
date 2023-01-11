import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Organization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createScan - Create a scan task for a given site
    **/
    createScan(req: operations.CreateScanRequest, config?: AxiosRequestConfig): Promise<operations.CreateScanResponse>;
    /**
     * createSite - Create a new site
    **/
    createSite(req: operations.CreateSiteRequest, config?: AxiosRequestConfig): Promise<operations.CreateSiteResponse>;
    /**
     * getAgent - Get details for a single agent
    **/
    getAgent(req: operations.GetAgentRequest, config?: AxiosRequestConfig): Promise<operations.GetAgentResponse>;
    /**
     * getAgents - Get all agents
    **/
    getAgents(req: operations.GetAgentsRequest, config?: AxiosRequestConfig): Promise<operations.GetAgentsResponse>;
    /**
     * getAsset - Get asset details
    **/
    getAsset(req: operations.GetAssetRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetResponse>;
    /**
     * getAssets - Get all assets
    **/
    getAssets(req: operations.GetAssetsRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetsResponse>;
    /**
     * getKey - Get API key details
    **/
    getKey(req: operations.GetKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetKeyResponse>;
    /**
     * getOrganization - Get organization details
    **/
    getOrganization(req: operations.GetOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationResponse>;
    /**
     * getService - Get service details
    **/
    getService(req: operations.GetServiceRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceResponse>;
    /**
     * getServices - Get all services
    **/
    getServices(req: operations.GetServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetServicesResponse>;
    /**
     * getSite - Get site details
    **/
    getSite(req: operations.GetSiteRequest, config?: AxiosRequestConfig): Promise<operations.GetSiteResponse>;
    /**
     * getSites - Get all sites
    **/
    getSites(req: operations.GetSitesRequest, config?: AxiosRequestConfig): Promise<operations.GetSitesResponse>;
    /**
     * getTask - Get task details
    **/
    getTask(req: operations.GetTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskResponse>;
    /**
     * getTaskChangeReport - Returns a temporary task change report data url
    **/
    getTaskChangeReport(req: operations.GetTaskChangeReportRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskChangeReportResponse>;
    /**
     * getTaskScanData - Returns a temporary task scan data url
    **/
    getTaskScanData(req: operations.GetTaskScanDataRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskScanDataResponse>;
    /**
     * getTasks - Get all tasks (last 1000)
    **/
    getTasks(req: operations.GetTasksRequest, config?: AxiosRequestConfig): Promise<operations.GetTasksResponse>;
    /**
     * getWirelessLan - Get wireless LAN details
    **/
    getWirelessLan(req: operations.GetWirelessLanRequest, config?: AxiosRequestConfig): Promise<operations.GetWirelessLanResponse>;
    /**
     * getWirelessLaNs - Get all wireless LANs
    **/
    getWirelessLaNs(req: operations.GetWirelessLaNsRequest, config?: AxiosRequestConfig): Promise<operations.GetWirelessLaNsResponse>;
    /**
     * hideTask - Signal that a completed task should be hidden
    **/
    hideTask(req: operations.HideTaskRequest, config?: AxiosRequestConfig): Promise<operations.HideTaskResponse>;
    /**
     * importScanData - Import a scan data file into a site
    **/
    importScanData(req: operations.ImportScanDataRequest, config?: AxiosRequestConfig): Promise<operations.ImportScanDataResponse>;
    /**
     * removeAgent - Remove and uninstall an agent
    **/
    removeAgent(req: operations.RemoveAgentRequest, config?: AxiosRequestConfig): Promise<operations.RemoveAgentResponse>;
    /**
     * removeAsset - Remove an asset
    **/
    removeAsset(req: operations.RemoveAssetRequest, config?: AxiosRequestConfig): Promise<operations.RemoveAssetResponse>;
    /**
     * removeKey - Remove the current API key
    **/
    removeKey(req: operations.RemoveKeyRequest, config?: AxiosRequestConfig): Promise<operations.RemoveKeyResponse>;
    /**
     * removeService - Remove a service
    **/
    removeService(req: operations.RemoveServiceRequest, config?: AxiosRequestConfig): Promise<operations.RemoveServiceResponse>;
    /**
     * removeSite - Remove a site and associated assets
    **/
    removeSite(req: operations.RemoveSiteRequest, config?: AxiosRequestConfig): Promise<operations.RemoveSiteResponse>;
    /**
     * removeWirelessLan - Remove a wireless LAN
    **/
    removeWirelessLan(req: operations.RemoveWirelessLanRequest, config?: AxiosRequestConfig): Promise<operations.RemoveWirelessLanResponse>;
    /**
     * rotateKey - Rotate the API key secret and return the updated key
    **/
    rotateKey(req: operations.RotateKeyRequest, config?: AxiosRequestConfig): Promise<operations.RotateKeyResponse>;
    /**
     * stopTask - Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks
    **/
    stopTask(req: operations.StopTaskRequest, config?: AxiosRequestConfig): Promise<operations.StopTaskResponse>;
    /**
     * updateAgentSite - Update the site associated with agent
    **/
    updateAgentSite(req: operations.UpdateAgentSiteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAgentSiteResponse>;
    /**
     * updateAssetComments - Update asset comments
    **/
    updateAssetComments(req: operations.UpdateAssetCommentsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAssetCommentsResponse>;
    /**
     * updateAssetTags - Update asset tags
    **/
    updateAssetTags(req: operations.UpdateAssetTagsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAssetTagsResponse>;
    /**
     * updateOrganization - Update organization details
    **/
    updateOrganization(req: operations.UpdateOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationResponse>;
    /**
     * updateSite - Update a site definition
    **/
    updateSite(req: operations.UpdateSiteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSiteResponse>;
    /**
     * updateTask - Update task parameters
    **/
    updateTask(req: operations.UpdateTaskRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTaskResponse>;
    /**
     * upgradeAgent - Force an agent to update and restart
    **/
    upgradeAgent(req: operations.UpgradeAgentRequest, config?: AxiosRequestConfig): Promise<operations.UpgradeAgentResponse>;
}
