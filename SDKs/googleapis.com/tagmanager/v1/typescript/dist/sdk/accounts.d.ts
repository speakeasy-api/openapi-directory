import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a Container.
     */
    tagmanagerAccountsContainersCreate(req: operations.TagmanagerAccountsContainersCreateRequest, security: operations.TagmanagerAccountsContainersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersCreateResponse>;
    /**
     * Deletes a Container.
     */
    tagmanagerAccountsContainersDelete(req: operations.TagmanagerAccountsContainersDeleteRequest, security: operations.TagmanagerAccountsContainersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersDeleteResponse>;
    /**
     * Creates a GTM Environment.
     */
    tagmanagerAccountsContainersEnvironmentsCreate(req: operations.TagmanagerAccountsContainersEnvironmentsCreateRequest, security: operations.TagmanagerAccountsContainersEnvironmentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersEnvironmentsCreateResponse>;
    /**
     * Deletes a GTM Environment.
     */
    tagmanagerAccountsContainersEnvironmentsDelete(req: operations.TagmanagerAccountsContainersEnvironmentsDeleteRequest, security: operations.TagmanagerAccountsContainersEnvironmentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersEnvironmentsDeleteResponse>;
    /**
     * Gets a GTM Environment.
     */
    tagmanagerAccountsContainersEnvironmentsGet(req: operations.TagmanagerAccountsContainersEnvironmentsGetRequest, security: operations.TagmanagerAccountsContainersEnvironmentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersEnvironmentsGetResponse>;
    /**
     * Lists all GTM Environments of a GTM Container.
     */
    tagmanagerAccountsContainersEnvironmentsList(req: operations.TagmanagerAccountsContainersEnvironmentsListRequest, security: operations.TagmanagerAccountsContainersEnvironmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersEnvironmentsListResponse>;
    /**
     * Updates a GTM Environment.
     */
    tagmanagerAccountsContainersEnvironmentsUpdate(req: operations.TagmanagerAccountsContainersEnvironmentsUpdateRequest, security: operations.TagmanagerAccountsContainersEnvironmentsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersEnvironmentsUpdateResponse>;
    /**
     * Creates a GTM Folder.
     */
    tagmanagerAccountsContainersFoldersCreate(req: operations.TagmanagerAccountsContainersFoldersCreateRequest, security: operations.TagmanagerAccountsContainersFoldersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersFoldersCreateResponse>;
    /**
     * Deletes a GTM Folder.
     */
    tagmanagerAccountsContainersFoldersDelete(req: operations.TagmanagerAccountsContainersFoldersDeleteRequest, security: operations.TagmanagerAccountsContainersFoldersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersFoldersDeleteResponse>;
    /**
     * List all entities in a GTM Folder.
     */
    tagmanagerAccountsContainersFoldersEntitiesList(req: operations.TagmanagerAccountsContainersFoldersEntitiesListRequest, security: operations.TagmanagerAccountsContainersFoldersEntitiesListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersFoldersEntitiesListResponse>;
    /**
     * Gets a GTM Folder.
     */
    tagmanagerAccountsContainersFoldersGet(req: operations.TagmanagerAccountsContainersFoldersGetRequest, security: operations.TagmanagerAccountsContainersFoldersGetSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersFoldersGetResponse>;
    /**
     * Lists all GTM Folders of a Container.
     */
    tagmanagerAccountsContainersFoldersList(req: operations.TagmanagerAccountsContainersFoldersListRequest, security: operations.TagmanagerAccountsContainersFoldersListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersFoldersListResponse>;
    /**
     * Updates a GTM Folder.
     */
    tagmanagerAccountsContainersFoldersUpdate(req: operations.TagmanagerAccountsContainersFoldersUpdateRequest, security: operations.TagmanagerAccountsContainersFoldersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersFoldersUpdateResponse>;
    /**
     * Gets a Container.
     */
    tagmanagerAccountsContainersGet(req: operations.TagmanagerAccountsContainersGetRequest, security: operations.TagmanagerAccountsContainersGetSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersGetResponse>;
    /**
     * Lists all Containers that belongs to a GTM Account.
     */
    tagmanagerAccountsContainersList(req: operations.TagmanagerAccountsContainersListRequest, security: operations.TagmanagerAccountsContainersListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersListResponse>;
    /**
     * Moves entities to a GTM Folder.
     */
    tagmanagerAccountsContainersMoveFoldersUpdate(req: operations.TagmanagerAccountsContainersMoveFoldersUpdateRequest, security: operations.TagmanagerAccountsContainersMoveFoldersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersMoveFoldersUpdateResponse>;
    /**
     * Re-generates the authorization code for a GTM Environment.
     */
    tagmanagerAccountsContainersReauthorizeEnvironmentsUpdate(req: operations.TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateRequest, security: operations.TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateResponse>;
    /**
     * Creates a GTM Tag.
     */
    tagmanagerAccountsContainersTagsCreate(req: operations.TagmanagerAccountsContainersTagsCreateRequest, security: operations.TagmanagerAccountsContainersTagsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersTagsCreateResponse>;
    /**
     * Deletes a GTM Tag.
     */
    tagmanagerAccountsContainersTagsDelete(req: operations.TagmanagerAccountsContainersTagsDeleteRequest, security: operations.TagmanagerAccountsContainersTagsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersTagsDeleteResponse>;
    /**
     * Gets a GTM Tag.
     */
    tagmanagerAccountsContainersTagsGet(req: operations.TagmanagerAccountsContainersTagsGetRequest, security: operations.TagmanagerAccountsContainersTagsGetSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersTagsGetResponse>;
    /**
     * Lists all GTM Tags of a Container.
     */
    tagmanagerAccountsContainersTagsList(req: operations.TagmanagerAccountsContainersTagsListRequest, security: operations.TagmanagerAccountsContainersTagsListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersTagsListResponse>;
    /**
     * Updates a GTM Tag.
     */
    tagmanagerAccountsContainersTagsUpdate(req: operations.TagmanagerAccountsContainersTagsUpdateRequest, security: operations.TagmanagerAccountsContainersTagsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersTagsUpdateResponse>;
    /**
     * Creates a GTM Trigger.
     */
    tagmanagerAccountsContainersTriggersCreate(req: operations.TagmanagerAccountsContainersTriggersCreateRequest, security: operations.TagmanagerAccountsContainersTriggersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersTriggersCreateResponse>;
    /**
     * Deletes a GTM Trigger.
     */
    tagmanagerAccountsContainersTriggersDelete(req: operations.TagmanagerAccountsContainersTriggersDeleteRequest, security: operations.TagmanagerAccountsContainersTriggersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersTriggersDeleteResponse>;
    /**
     * Gets a GTM Trigger.
     */
    tagmanagerAccountsContainersTriggersGet(req: operations.TagmanagerAccountsContainersTriggersGetRequest, security: operations.TagmanagerAccountsContainersTriggersGetSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersTriggersGetResponse>;
    /**
     * Lists all GTM Triggers of a Container.
     */
    tagmanagerAccountsContainersTriggersList(req: operations.TagmanagerAccountsContainersTriggersListRequest, security: operations.TagmanagerAccountsContainersTriggersListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersTriggersListResponse>;
    /**
     * Updates a GTM Trigger.
     */
    tagmanagerAccountsContainersTriggersUpdate(req: operations.TagmanagerAccountsContainersTriggersUpdateRequest, security: operations.TagmanagerAccountsContainersTriggersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersTriggersUpdateResponse>;
    /**
     * Updates a Container.
     */
    tagmanagerAccountsContainersUpdate(req: operations.TagmanagerAccountsContainersUpdateRequest, security: operations.TagmanagerAccountsContainersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersUpdateResponse>;
    /**
     * Creates a GTM Variable.
     */
    tagmanagerAccountsContainersVariablesCreate(req: operations.TagmanagerAccountsContainersVariablesCreateRequest, security: operations.TagmanagerAccountsContainersVariablesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVariablesCreateResponse>;
    /**
     * Deletes a GTM Variable.
     */
    tagmanagerAccountsContainersVariablesDelete(req: operations.TagmanagerAccountsContainersVariablesDeleteRequest, security: operations.TagmanagerAccountsContainersVariablesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVariablesDeleteResponse>;
    /**
     * Gets a GTM Variable.
     */
    tagmanagerAccountsContainersVariablesGet(req: operations.TagmanagerAccountsContainersVariablesGetRequest, security: operations.TagmanagerAccountsContainersVariablesGetSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVariablesGetResponse>;
    /**
     * Lists all GTM Variables of a Container.
     */
    tagmanagerAccountsContainersVariablesList(req: operations.TagmanagerAccountsContainersVariablesListRequest, security: operations.TagmanagerAccountsContainersVariablesListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVariablesListResponse>;
    /**
     * Updates a GTM Variable.
     */
    tagmanagerAccountsContainersVariablesUpdate(req: operations.TagmanagerAccountsContainersVariablesUpdateRequest, security: operations.TagmanagerAccountsContainersVariablesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVariablesUpdateResponse>;
    /**
     * Creates a Container Version.
     */
    tagmanagerAccountsContainersVersionsCreate(req: operations.TagmanagerAccountsContainersVersionsCreateRequest, security: operations.TagmanagerAccountsContainersVersionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsCreateResponse>;
    /**
     * Deletes a Container Version.
     */
    tagmanagerAccountsContainersVersionsDelete(req: operations.TagmanagerAccountsContainersVersionsDeleteRequest, security: operations.TagmanagerAccountsContainersVersionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsDeleteResponse>;
    /**
     * Gets a Container Version.
     */
    tagmanagerAccountsContainersVersionsGet(req: operations.TagmanagerAccountsContainersVersionsGetRequest, security: operations.TagmanagerAccountsContainersVersionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsGetResponse>;
    /**
     * Lists all Container Versions of a GTM Container.
     */
    tagmanagerAccountsContainersVersionsList(req: operations.TagmanagerAccountsContainersVersionsListRequest, security: operations.TagmanagerAccountsContainersVersionsListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsListResponse>;
    /**
     * Publishes a Container Version.
     */
    tagmanagerAccountsContainersVersionsPublish(req: operations.TagmanagerAccountsContainersVersionsPublishRequest, security: operations.TagmanagerAccountsContainersVersionsPublishSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsPublishResponse>;
    /**
     * Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).
     */
    tagmanagerAccountsContainersVersionsRestore(req: operations.TagmanagerAccountsContainersVersionsRestoreRequest, security: operations.TagmanagerAccountsContainersVersionsRestoreSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsRestoreResponse>;
    /**
     * Undeletes a Container Version.
     */
    tagmanagerAccountsContainersVersionsUndelete(req: operations.TagmanagerAccountsContainersVersionsUndeleteRequest, security: operations.TagmanagerAccountsContainersVersionsUndeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsUndeleteResponse>;
    /**
     * Updates a Container Version.
     */
    tagmanagerAccountsContainersVersionsUpdate(req: operations.TagmanagerAccountsContainersVersionsUpdateRequest, security: operations.TagmanagerAccountsContainersVersionsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsUpdateResponse>;
    /**
     * Gets a GTM Account.
     */
    tagmanagerAccountsGet(req: operations.TagmanagerAccountsGetRequest, security: operations.TagmanagerAccountsGetSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsGetResponse>;
    /**
     * Lists all GTM Accounts that a user has access to.
     */
    tagmanagerAccountsList(req: operations.TagmanagerAccountsListRequest, security: operations.TagmanagerAccountsListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsListResponse>;
    /**
     * Creates a user's Account & Container Permissions.
     */
    tagmanagerAccountsPermissionsCreate(req: operations.TagmanagerAccountsPermissionsCreateRequest, security: operations.TagmanagerAccountsPermissionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsPermissionsCreateResponse>;
    /**
     * Removes a user from the account, revoking access to it and all of its containers.
     */
    tagmanagerAccountsPermissionsDelete(req: operations.TagmanagerAccountsPermissionsDeleteRequest, security: operations.TagmanagerAccountsPermissionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsPermissionsDeleteResponse>;
    /**
     * Gets a user's Account & Container Permissions.
     */
    tagmanagerAccountsPermissionsGet(req: operations.TagmanagerAccountsPermissionsGetRequest, security: operations.TagmanagerAccountsPermissionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsPermissionsGetResponse>;
    /**
     * List all users that have access to the account along with Account and Container Permissions granted to each of them.
     */
    tagmanagerAccountsPermissionsList(req: operations.TagmanagerAccountsPermissionsListRequest, security: operations.TagmanagerAccountsPermissionsListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsPermissionsListResponse>;
    /**
     * Updates a user's Account & Container Permissions.
     */
    tagmanagerAccountsPermissionsUpdate(req: operations.TagmanagerAccountsPermissionsUpdateRequest, security: operations.TagmanagerAccountsPermissionsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsPermissionsUpdateResponse>;
    /**
     * Updates a GTM Account.
     */
    tagmanagerAccountsUpdate(req: operations.TagmanagerAccountsUpdateRequest, security: operations.TagmanagerAccountsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsUpdateResponse>;
}
