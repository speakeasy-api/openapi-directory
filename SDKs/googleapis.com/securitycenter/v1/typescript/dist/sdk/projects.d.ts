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
     * Filters an organization's assets and groups them by their specified properties.
     */
    securitycenterProjectsAssetsGroup(req: operations.SecuritycenterProjectsAssetsGroupRequest, security: operations.SecuritycenterProjectsAssetsGroupSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsAssetsGroupResponse>;
    /**
     * Lists an organization's assets.
     */
    securitycenterProjectsAssetsList(req: operations.SecuritycenterProjectsAssetsListRequest, security: operations.SecuritycenterProjectsAssetsListSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsAssetsListResponse>;
    /**
     * Creates a BigQuery export.
     */
    securitycenterProjectsBigQueryExportsCreate(req: operations.SecuritycenterProjectsBigQueryExportsCreateRequest, security: operations.SecuritycenterProjectsBigQueryExportsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsBigQueryExportsCreateResponse>;
    /**
     * Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
     */
    securitycenterProjectsBigQueryExportsList(req: operations.SecuritycenterProjectsBigQueryExportsListRequest, security: operations.SecuritycenterProjectsBigQueryExportsListSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsBigQueryExportsListResponse>;
    /**
     * Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
     */
    securitycenterProjectsFindingsBulkMute(req: operations.SecuritycenterProjectsFindingsBulkMuteRequest, security: operations.SecuritycenterProjectsFindingsBulkMuteSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsFindingsBulkMuteResponse>;
    /**
     * Creates a mute config.
     */
    securitycenterProjectsMuteConfigsCreate(req: operations.SecuritycenterProjectsMuteConfigsCreateRequest, security: operations.SecuritycenterProjectsMuteConfigsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsMuteConfigsCreateResponse>;
    /**
     * Lists mute configs.
     */
    securitycenterProjectsMuteConfigsList(req: operations.SecuritycenterProjectsMuteConfigsListRequest, security: operations.SecuritycenterProjectsMuteConfigsListSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsMuteConfigsListResponse>;
    /**
     * Creates a notification config.
     */
    securitycenterProjectsNotificationConfigsCreate(req: operations.SecuritycenterProjectsNotificationConfigsCreateRequest, security: operations.SecuritycenterProjectsNotificationConfigsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsNotificationConfigsCreateResponse>;
    /**
     * Deletes a notification config.
     */
    securitycenterProjectsNotificationConfigsDelete(req: operations.SecuritycenterProjectsNotificationConfigsDeleteRequest, security: operations.SecuritycenterProjectsNotificationConfigsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsNotificationConfigsDeleteResponse>;
    /**
     * Gets a notification config.
     */
    securitycenterProjectsNotificationConfigsGet(req: operations.SecuritycenterProjectsNotificationConfigsGetRequest, security: operations.SecuritycenterProjectsNotificationConfigsGetSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsNotificationConfigsGetResponse>;
    /**
     * Lists notification configs.
     */
    securitycenterProjectsNotificationConfigsList(req: operations.SecuritycenterProjectsNotificationConfigsListRequest, security: operations.SecuritycenterProjectsNotificationConfigsListSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsNotificationConfigsListResponse>;
    /**
     * Updates external system. This is for a given finding.
     */
    securitycenterProjectsSourcesFindingsExternalSystemsPatch(req: operations.SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest, security: operations.SecuritycenterProjectsSourcesFindingsExternalSystemsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsSourcesFindingsExternalSystemsPatchResponse>;
    /**
     * Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings
     */
    securitycenterProjectsSourcesFindingsGroup(req: operations.SecuritycenterProjectsSourcesFindingsGroupRequest, security: operations.SecuritycenterProjectsSourcesFindingsGroupSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsSourcesFindingsGroupResponse>;
    /**
     * Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings
     */
    securitycenterProjectsSourcesFindingsList(req: operations.SecuritycenterProjectsSourcesFindingsListRequest, security: operations.SecuritycenterProjectsSourcesFindingsListSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsSourcesFindingsListResponse>;
    /**
     * Updates the mute state of a finding.
     */
    securitycenterProjectsSourcesFindingsSetMute(req: operations.SecuritycenterProjectsSourcesFindingsSetMuteRequest, security: operations.SecuritycenterProjectsSourcesFindingsSetMuteSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsSourcesFindingsSetMuteResponse>;
    /**
     * Updates the state of a finding.
     */
    securitycenterProjectsSourcesFindingsSetState(req: operations.SecuritycenterProjectsSourcesFindingsSetStateRequest, security: operations.SecuritycenterProjectsSourcesFindingsSetStateSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsSourcesFindingsSetStateResponse>;
    /**
     * Lists all sources belonging to an organization.
     */
    securitycenterProjectsSourcesList(req: operations.SecuritycenterProjectsSourcesListRequest, security: operations.SecuritycenterProjectsSourcesListSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsSourcesListResponse>;
}
