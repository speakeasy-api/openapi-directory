import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class InventorySourceGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.
     */
    displayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit(req: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest, security: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse>;
    /**
     * Creates an assignment between an inventory source and an inventory source group.
     */
    displayvideoInventorySourceGroupsAssignedInventorySourcesCreate(req: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest, security: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse>;
    /**
     * Deletes the assignment between an inventory source and an inventory source group.
     */
    displayvideoInventorySourceGroupsAssignedInventorySourcesDelete(req: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest, security: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse>;
    /**
     * Lists inventory sources assigned to an inventory source group.
     */
    displayvideoInventorySourceGroupsAssignedInventorySourcesList(req: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest, security: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse>;
    /**
     * Creates a new inventory source group. Returns the newly created inventory source group if successful.
     */
    displayvideoInventorySourceGroupsCreate(req: operations.DisplayvideoInventorySourceGroupsCreateRequest, security: operations.DisplayvideoInventorySourceGroupsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourceGroupsCreateResponse>;
    /**
     * Deletes an inventory source group.
     */
    displayvideoInventorySourceGroupsDelete(req: operations.DisplayvideoInventorySourceGroupsDeleteRequest, security: operations.DisplayvideoInventorySourceGroupsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourceGroupsDeleteResponse>;
    /**
     * Gets an inventory source group.
     */
    displayvideoInventorySourceGroupsGet(req: operations.DisplayvideoInventorySourceGroupsGetRequest, security: operations.DisplayvideoInventorySourceGroupsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourceGroupsGetResponse>;
    /**
     * Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.
     */
    displayvideoInventorySourceGroupsList(req: operations.DisplayvideoInventorySourceGroupsListRequest, security: operations.DisplayvideoInventorySourceGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourceGroupsListResponse>;
}
