import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Interact with GitHub Projects.
 */
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add project collaborator
     *
     * @remarks
     * Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#add-project-collaborator} - API method documentation
     */
    projectsAddCollaborator(req: operations.ProjectsAddCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsAddCollaboratorResponse>;
    /**
     * Create a project card
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#create-a-project-card} - API method documentation
     */
    projectsCreateCard(req: operations.ProjectsCreateCardRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsCreateCardResponse>;
    /**
     * Create a project column
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#create-a-project-column} - API method documentation
     */
    projectsCreateColumn(req: operations.ProjectsCreateColumnRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsCreateColumnResponse>;
    /**
     * Create a user project
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#create-a-user-project} - API method documentation
     */
    projectsCreateForAuthenticatedUser(req: operations.ProjectsCreateForAuthenticatedUserRequestBody, config?: AxiosRequestConfig): Promise<operations.ProjectsCreateForAuthenticatedUserResponse>;
    /**
     * Create an organization project
     *
     * @remarks
     * Creates an organization project board. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#create-an-organization-project} - API method documentation
     */
    projectsCreateForOrg(req: operations.ProjectsCreateForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsCreateForOrgResponse>;
    /**
     * Create a repository project
     *
     * @remarks
     * Creates a repository project board. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#create-a-repository-project} - API method documentation
     */
    projectsCreateForRepo(req: operations.ProjectsCreateForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsCreateForRepoResponse>;
    /**
     * Delete a project
     *
     * @remarks
     * Deletes a project board. Returns a `404 Not Found` status if projects are disabled.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#delete-a-project} - API method documentation
     */
    projectsDelete(req: operations.ProjectsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsDeleteResponse>;
    /**
     * Delete a project card
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#delete-a-project-card} - API method documentation
     */
    projectsDeleteCard(req: operations.ProjectsDeleteCardRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsDeleteCardResponse>;
    /**
     * Delete a project column
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#delete-a-project-column} - API method documentation
     */
    projectsDeleteColumn(req: operations.ProjectsDeleteColumnRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsDeleteColumnResponse>;
    /**
     * Get a project
     *
     * @remarks
     * Gets a project by its `id`. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#get-a-project} - API method documentation
     */
    projectsGet(req: operations.ProjectsGetRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsGetResponse>;
    /**
     * Get a project card
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#get-a-project-card} - API method documentation
     */
    projectsGetCard(req: operations.ProjectsGetCardRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsGetCardResponse>;
    /**
     * Get a project column
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#get-a-project-column} - API method documentation
     */
    projectsGetColumn(req: operations.ProjectsGetColumnRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsGetColumnResponse>;
    /**
     * Get project permission for a user
     *
     * @remarks
     * Returns the collaborator's permission level for an organization project. Possible values for the `permission` key: `admin`, `write`, `read`, `none`. You must be an organization owner or a project `admin` to review a user's permission level.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#get-project-permission-for-a-user} - API method documentation
     */
    projectsGetPermissionForUser(req: operations.ProjectsGetPermissionForUserRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsGetPermissionForUserResponse>;
    /**
     * List project cards
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#list-project-cards} - API method documentation
     */
    projectsListCards(req: operations.ProjectsListCardsRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsListCardsResponse>;
    /**
     * List project collaborators
     *
     * @remarks
     * Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project `admin` to list collaborators.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#list-project-collaborators} - API method documentation
     */
    projectsListCollaborators(req: operations.ProjectsListCollaboratorsRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsListCollaboratorsResponse>;
    /**
     * List project columns
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#list-project-columns} - API method documentation
     */
    projectsListColumns(req: operations.ProjectsListColumnsRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsListColumnsResponse>;
    /**
     * List organization projects
     *
     * @remarks
     * Lists the projects in an organization. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#list-organization-projects} - API method documentation
     */
    projectsListForOrg(req: operations.ProjectsListForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsListForOrgResponse>;
    /**
     * List repository projects
     *
     * @remarks
     * Lists the projects in a repository. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#list-repository-projects} - API method documentation
     */
    projectsListForRepo(req: operations.ProjectsListForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsListForRepoResponse>;
    /**
     * List user projects
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#list-user-projects} - API method documentation
     */
    projectsListForUser(req: operations.ProjectsListForUserRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsListForUserResponse>;
    /**
     * Move a project card
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#move-a-project-card} - API method documentation
     */
    projectsMoveCard(req: operations.ProjectsMoveCardRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsMoveCardResponse>;
    /**
     * Move a project column
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#move-a-project-column} - API method documentation
     */
    projectsMoveColumn(req: operations.ProjectsMoveColumnRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsMoveColumnResponse>;
    /**
     * Remove user as a collaborator
     *
     * @remarks
     * Removes a collaborator from an organization project. You must be an organization owner or a project `admin` to remove a collaborator.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#remove-project-collaborator} - API method documentation
     */
    projectsRemoveCollaborator(req: operations.ProjectsRemoveCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsRemoveCollaboratorResponse>;
    /**
     * Update a project
     *
     * @remarks
     * Updates a project board's information. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#update-a-project} - API method documentation
     */
    projectsUpdate(req: operations.ProjectsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsUpdateResponse>;
    /**
     * Update an existing project card
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#update-a-project-card} - API method documentation
     */
    projectsUpdateCard(req: operations.ProjectsUpdateCardRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsUpdateCardResponse>;
    /**
     * Update an existing project column
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/projects#update-a-project-column} - API method documentation
     */
    projectsUpdateColumn(req: operations.ProjectsUpdateColumnRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsUpdateColumnResponse>;
}
