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
     * Combines Containers.
     */
    tagmanagerAccountsContainersCombine(req: operations.TagmanagerAccountsContainersCombineRequest, security: operations.TagmanagerAccountsContainersCombineSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersCombineResponse>;
    /**
     * Creates a Container.
     */
    tagmanagerAccountsContainersCreate(req: operations.TagmanagerAccountsContainersCreateRequest, security: operations.TagmanagerAccountsContainersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersCreateResponse>;
    /**
     * Adds a Destination to this Container and removes it from the Container to which it is currently linked.
     */
    tagmanagerAccountsContainersDestinationsLink(req: operations.TagmanagerAccountsContainersDestinationsLinkRequest, security: operations.TagmanagerAccountsContainersDestinationsLinkSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersDestinationsLinkResponse>;
    /**
     * Lists all Destinations linked to a GTM Container.
     */
    tagmanagerAccountsContainersDestinationsList(req: operations.TagmanagerAccountsContainersDestinationsListRequest, security: operations.TagmanagerAccountsContainersDestinationsListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersDestinationsListResponse>;
    /**
     * Creates a GTM Environment.
     */
    tagmanagerAccountsContainersEnvironmentsCreate(req: operations.TagmanagerAccountsContainersEnvironmentsCreateRequest, security: operations.TagmanagerAccountsContainersEnvironmentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersEnvironmentsCreateResponse>;
    /**
     * Lists all GTM Environments of a GTM Container.
     */
    tagmanagerAccountsContainersEnvironmentsList(req: operations.TagmanagerAccountsContainersEnvironmentsListRequest, security: operations.TagmanagerAccountsContainersEnvironmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersEnvironmentsListResponse>;
    /**
     * Re-generates the authorization code for a GTM Environment.
     */
    tagmanagerAccountsContainersEnvironmentsReauthorize(req: operations.TagmanagerAccountsContainersEnvironmentsReauthorizeRequest, security: operations.TagmanagerAccountsContainersEnvironmentsReauthorizeSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersEnvironmentsReauthorizeResponse>;
    /**
     * Lists all Containers that belongs to a GTM Account.
     */
    tagmanagerAccountsContainersList(req: operations.TagmanagerAccountsContainersListRequest, security: operations.TagmanagerAccountsContainersListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersListResponse>;
    /**
     * Looks up a Container by destination ID.
     */
    tagmanagerAccountsContainersLookup(req: operations.TagmanagerAccountsContainersLookupRequest, security: operations.TagmanagerAccountsContainersLookupSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersLookupResponse>;
    /**
     * Move Tag ID out of a Container.
     */
    tagmanagerAccountsContainersMoveTagId(req: operations.TagmanagerAccountsContainersMoveTagIdRequest, security: operations.TagmanagerAccountsContainersMoveTagIdSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersMoveTagIdResponse>;
    /**
     * Gets the tagging snippet for a Container.
     */
    tagmanagerAccountsContainersSnippet(req: operations.TagmanagerAccountsContainersSnippetRequest, security: operations.TagmanagerAccountsContainersSnippetSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersSnippetResponse>;
    /**
     * Gets the latest container version header
     */
    tagmanagerAccountsContainersVersionHeadersLatest(req: operations.TagmanagerAccountsContainersVersionHeadersLatestRequest, security: operations.TagmanagerAccountsContainersVersionHeadersLatestSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionHeadersLatestResponse>;
    /**
     * Lists all Container Versions of a GTM Container.
     */
    tagmanagerAccountsContainersVersionHeadersList(req: operations.TagmanagerAccountsContainersVersionHeadersListRequest, security: operations.TagmanagerAccountsContainersVersionHeadersListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionHeadersListResponse>;
    /**
     * Gets the live (i.e. published) container version
     */
    tagmanagerAccountsContainersVersionsLive(req: operations.TagmanagerAccountsContainersVersionsLiveRequest, security: operations.TagmanagerAccountsContainersVersionsLiveSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsLiveResponse>;
    /**
     * Publishes a Container Version.
     */
    tagmanagerAccountsContainersVersionsPublish(req: operations.TagmanagerAccountsContainersVersionsPublishRequest, security: operations.TagmanagerAccountsContainersVersionsPublishSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsPublishResponse>;
    /**
     * Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
     */
    tagmanagerAccountsContainersVersionsSetLatest(req: operations.TagmanagerAccountsContainersVersionsSetLatestRequest, security: operations.TagmanagerAccountsContainersVersionsSetLatestSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsSetLatestResponse>;
    /**
     * Undeletes a Container Version.
     */
    tagmanagerAccountsContainersVersionsUndelete(req: operations.TagmanagerAccountsContainersVersionsUndeleteRequest, security: operations.TagmanagerAccountsContainersVersionsUndeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsUndeleteResponse>;
    /**
     * Creates one or more GTM Built-In Variables.
     */
    tagmanagerAccountsContainersWorkspacesBuiltInVariablesCreate(req: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest, security: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateResponse>;
    /**
     * Lists all the enabled Built-In Variables of a GTM Container.
     */
    tagmanagerAccountsContainersWorkspacesBuiltInVariablesList(req: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest, security: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListResponse>;
    /**
     * Reverts changes to a GTM Built-In Variables in a GTM Workspace.
     */
    tagmanagerAccountsContainersWorkspacesBuiltInVariablesRevert(req: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertRequest, security: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertResponse>;
    /**
     * Creates a GTM Client.
     */
    tagmanagerAccountsContainersWorkspacesClientsCreate(req: operations.TagmanagerAccountsContainersWorkspacesClientsCreateRequest, security: operations.TagmanagerAccountsContainersWorkspacesClientsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesClientsCreateResponse>;
    /**
     * Lists all GTM Clients of a GTM container workspace.
     */
    tagmanagerAccountsContainersWorkspacesClientsList(req: operations.TagmanagerAccountsContainersWorkspacesClientsListRequest, security: operations.TagmanagerAccountsContainersWorkspacesClientsListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesClientsListResponse>;
    /**
     * Creates a Workspace.
     */
    tagmanagerAccountsContainersWorkspacesCreate(req: operations.TagmanagerAccountsContainersWorkspacesCreateRequest, security: operations.TagmanagerAccountsContainersWorkspacesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesCreateResponse>;
    /**
     * Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
     */
    tagmanagerAccountsContainersWorkspacesCreateVersion(req: operations.TagmanagerAccountsContainersWorkspacesCreateVersionRequest, security: operations.TagmanagerAccountsContainersWorkspacesCreateVersionSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesCreateVersionResponse>;
    /**
     * Creates a GTM Folder.
     */
    tagmanagerAccountsContainersWorkspacesFoldersCreate(req: operations.TagmanagerAccountsContainersWorkspacesFoldersCreateRequest, security: operations.TagmanagerAccountsContainersWorkspacesFoldersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesFoldersCreateResponse>;
    /**
     * List all entities in a GTM Folder.
     */
    tagmanagerAccountsContainersWorkspacesFoldersEntities(req: operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesRequest, security: operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesResponse>;
    /**
     * Lists all GTM Folders of a Container.
     */
    tagmanagerAccountsContainersWorkspacesFoldersList(req: operations.TagmanagerAccountsContainersWorkspacesFoldersListRequest, security: operations.TagmanagerAccountsContainersWorkspacesFoldersListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesFoldersListResponse>;
    /**
     * Moves entities to a GTM Folder.
     */
    tagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolder(req: operations.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest, security: operations.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderResponse>;
    /**
     * Finds conflicting and modified entities in the workspace.
     */
    tagmanagerAccountsContainersWorkspacesGetStatus(req: operations.TagmanagerAccountsContainersWorkspacesGetStatusRequest, security: operations.TagmanagerAccountsContainersWorkspacesGetStatusSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesGetStatusResponse>;
    /**
     * Creates a Google tag config.
     */
    tagmanagerAccountsContainersWorkspacesGtagConfigCreate(req: operations.TagmanagerAccountsContainersWorkspacesGtagConfigCreateRequest, security: operations.TagmanagerAccountsContainersWorkspacesGtagConfigCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesGtagConfigCreateResponse>;
    /**
     * Lists all Google tag configs in a Container.
     */
    tagmanagerAccountsContainersWorkspacesGtagConfigList(req: operations.TagmanagerAccountsContainersWorkspacesGtagConfigListRequest, security: operations.TagmanagerAccountsContainersWorkspacesGtagConfigListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesGtagConfigListResponse>;
    /**
     * Lists all Workspaces that belong to a GTM Container.
     */
    tagmanagerAccountsContainersWorkspacesList(req: operations.TagmanagerAccountsContainersWorkspacesListRequest, security: operations.TagmanagerAccountsContainersWorkspacesListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesListResponse>;
    /**
     * Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
     */
    tagmanagerAccountsContainersWorkspacesQuickPreview(req: operations.TagmanagerAccountsContainersWorkspacesQuickPreviewRequest, security: operations.TagmanagerAccountsContainersWorkspacesQuickPreviewSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesQuickPreviewResponse>;
    /**
     * Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
     */
    tagmanagerAccountsContainersWorkspacesResolveConflict(req: operations.TagmanagerAccountsContainersWorkspacesResolveConflictRequest, security: operations.TagmanagerAccountsContainersWorkspacesResolveConflictSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesResolveConflictResponse>;
    /**
     * Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
     */
    tagmanagerAccountsContainersWorkspacesSync(req: operations.TagmanagerAccountsContainersWorkspacesSyncRequest, security: operations.TagmanagerAccountsContainersWorkspacesSyncSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesSyncResponse>;
    /**
     * Creates a GTM Tag.
     */
    tagmanagerAccountsContainersWorkspacesTagsCreate(req: operations.TagmanagerAccountsContainersWorkspacesTagsCreateRequest, security: operations.TagmanagerAccountsContainersWorkspacesTagsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesTagsCreateResponse>;
    /**
     * Lists all GTM Tags of a Container.
     */
    tagmanagerAccountsContainersWorkspacesTagsList(req: operations.TagmanagerAccountsContainersWorkspacesTagsListRequest, security: operations.TagmanagerAccountsContainersWorkspacesTagsListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesTagsListResponse>;
    /**
     * Creates a GTM Custom Template.
     */
    tagmanagerAccountsContainersWorkspacesTemplatesCreate(req: operations.TagmanagerAccountsContainersWorkspacesTemplatesCreateRequest, security: operations.TagmanagerAccountsContainersWorkspacesTemplatesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesTemplatesCreateResponse>;
    /**
     * Lists all GTM Templates of a GTM container workspace.
     */
    tagmanagerAccountsContainersWorkspacesTemplatesList(req: operations.TagmanagerAccountsContainersWorkspacesTemplatesListRequest, security: operations.TagmanagerAccountsContainersWorkspacesTemplatesListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesTemplatesListResponse>;
    /**
     * Creates a GTM Trigger.
     */
    tagmanagerAccountsContainersWorkspacesTriggersCreate(req: operations.TagmanagerAccountsContainersWorkspacesTriggersCreateRequest, security: operations.TagmanagerAccountsContainersWorkspacesTriggersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesTriggersCreateResponse>;
    /**
     * Lists all GTM Triggers of a Container.
     */
    tagmanagerAccountsContainersWorkspacesTriggersList(req: operations.TagmanagerAccountsContainersWorkspacesTriggersListRequest, security: operations.TagmanagerAccountsContainersWorkspacesTriggersListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesTriggersListResponse>;
    /**
     * Creates a GTM Variable.
     */
    tagmanagerAccountsContainersWorkspacesVariablesCreate(req: operations.TagmanagerAccountsContainersWorkspacesVariablesCreateRequest, security: operations.TagmanagerAccountsContainersWorkspacesVariablesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesVariablesCreateResponse>;
    /**
     * Lists all GTM Variables of a Container.
     */
    tagmanagerAccountsContainersWorkspacesVariablesList(req: operations.TagmanagerAccountsContainersWorkspacesVariablesListRequest, security: operations.TagmanagerAccountsContainersWorkspacesVariablesListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesVariablesListResponse>;
    /**
     * Creates a GTM Zone.
     */
    tagmanagerAccountsContainersWorkspacesZonesCreate(req: operations.TagmanagerAccountsContainersWorkspacesZonesCreateRequest, security: operations.TagmanagerAccountsContainersWorkspacesZonesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesZonesCreateResponse>;
    /**
     * Lists all GTM Zones of a GTM container workspace.
     */
    tagmanagerAccountsContainersWorkspacesZonesList(req: operations.TagmanagerAccountsContainersWorkspacesZonesListRequest, security: operations.TagmanagerAccountsContainersWorkspacesZonesListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesZonesListResponse>;
    /**
     * Reverts changes to a GTM Zone in a GTM Workspace.
     */
    tagmanagerAccountsContainersWorkspacesZonesRevert(req: operations.TagmanagerAccountsContainersWorkspacesZonesRevertRequest, security: operations.TagmanagerAccountsContainersWorkspacesZonesRevertSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesZonesRevertResponse>;
    /**
     * Lists all GTM Accounts that a user has access to.
     */
    tagmanagerAccountsList(req: operations.TagmanagerAccountsListRequest, security: operations.TagmanagerAccountsListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsListResponse>;
    /**
     * Creates a user's Account & Container access.
     */
    tagmanagerAccountsUserPermissionsCreate(req: operations.TagmanagerAccountsUserPermissionsCreateRequest, security: operations.TagmanagerAccountsUserPermissionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsUserPermissionsCreateResponse>;
    /**
     * Removes a user from the account, revoking access to it and all of its containers.
     */
    tagmanagerAccountsUserPermissionsDelete(req: operations.TagmanagerAccountsUserPermissionsDeleteRequest, security: operations.TagmanagerAccountsUserPermissionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsUserPermissionsDeleteResponse>;
    /**
     * Gets a user's Account & Container access.
     */
    tagmanagerAccountsUserPermissionsGet(req: operations.TagmanagerAccountsUserPermissionsGetRequest, security: operations.TagmanagerAccountsUserPermissionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsUserPermissionsGetResponse>;
    /**
     * List all users that have access to the account along with Account and Container user access granted to each of them.
     */
    tagmanagerAccountsUserPermissionsList(req: operations.TagmanagerAccountsUserPermissionsListRequest, security: operations.TagmanagerAccountsUserPermissionsListSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsUserPermissionsListResponse>;
    /**
     * Updates a user's Account & Container access.
     */
    tagmanagerAccountsUserPermissionsUpdate(req: operations.TagmanagerAccountsUserPermissionsUpdateRequest, security: operations.TagmanagerAccountsUserPermissionsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsUserPermissionsUpdateResponse>;
}
