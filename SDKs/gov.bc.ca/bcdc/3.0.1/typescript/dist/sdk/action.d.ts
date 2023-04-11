import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * CKAN's Action API is a powerful, RPC-style API that exposes all of CKAN's core features to API clients.
 *
 * @see {@link http://docs.ckan.org/en/ckan-2.5.3/api/index.html} - Find out more
 */
export declare class Action {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the activity stream of an organization
     *
     * @remarks
     * Return an organization's activity stream
     */
    getActionOrganizationActivityList(req: operations.GetActionOrganizationActivityListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationActivityListResponse>;
    /**
     * Get the activity stream of an organization, HTML format
     *
     * @remarks
     * Return an organization's activity stream as HTML
     */
    getActionOrganizationActivityListHtml(req: operations.GetActionOrganizationActivityListHtmlRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationActivityListHtmlResponse>;
    /**
     * Get names of organizations that match a query string
     *
     * @remarks
     * Return a list of organization names that contain a string
     */
    getActionOrganizationAutocomplete(req: operations.GetActionOrganizationAutocompleteRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationAutocompleteResponse>;
    /**
     * Get number of followers of an organization
     *
     * @remarks
     * Return the number of followers of an organization
     */
    getActionOrganizationFollowerCount(req: operations.GetActionOrganizationFollowerCountRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationFollowerCountResponse>;
    /**
     * Get users following an organization
     *
     * @remarks
     * Return a list of users that are following a given organization
     */
    getActionOrganizationFollowerList(req: operations.GetActionOrganizationFollowerListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationFollowerListResponse>;
    /**
     * Get names of all organizations
     *
     * @remarks
     * Returns the names of all indexed organizations
     */
    getActionOrganizationList(req: operations.GetActionOrganizationListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationListResponse>;
    /**
     * Get organizations that a user has a given permission for
     *
     * @remarks
     * Return the organizations that the user has a given permission for
     */
    getActionOrganizationListForUser(req: operations.GetActionOrganizationListForUserRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationListForUserResponse>;
    /**
     * Get organization revisions
     *
     * @remarks
     * Return an organization's revisions
     */
    getActionOrganizationRevisionList(req: operations.GetActionOrganizationRevisionListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationRevisionListResponse>;
    /**
     * Get details of a specific organization
     *
     * @remarks
     * Return the details of an organization
     */
    getActionOrganizationShow(req: operations.GetActionOrganizationShowRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationShowResponse>;
    /**
     * Get the activity stream of a package (dataset)
     *
     * @remarks
     * Returns a package's activity stream
     */
    getActionPackageActivityList(req: operations.GetActionPackageActivityListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageActivityListResponse>;
    /**
     * Get the activity stream of a package (dataset), HTML format
     *
     * @remarks
     * The activity stream is rendered as a snippet of HTML meant to be included in an HTML pag, i.e it doesn't have any header or footer.
     */
    getActionPackageActivityListHtml(req: operations.GetActionPackageActivityListHtmlRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageActivityListHtmlResponse>;
    /**
     * Find packages (datasets) matching a query
     *
     * @remarks
     * Return a list of datasets that match a string
     */
    getActionPackageAutocomplete(req: operations.GetActionPackageAutocompleteRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageAutocompleteResponse>;
    /**
     * Get a list of all packages (datasets)
     *
     * @remarks
     * Returns the names of all indexed packages (datasets)
     */
    getActionPackageList(req: operations.GetActionPackageListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageListResponse>;
    /**
     * Get package (dataset) relationships
     *
     * @remarks
     * Return a dataset's relationships
     */
    getActionPackageRelationshipsList(req: operations.GetActionPackageRelationshipsListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageRelationshipsListResponse>;
    /**
     * Get list of revisions for a package (dataset)
     *
     * @remarks
     * Return a dataset's revision as a list of dictionaries
     */
    getActionPackageRevisionList(req: operations.GetActionPackageRevisionListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageRevisionListResponse>;
    /**
     * Find packages (datasets) matching query terms
     *
     * @remarks
     * Searches for packages (datasets) matching the specified query terms
     */
    getActionPackageSearch(req: operations.GetActionPackageSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageSearchResponse>;
    /**
     * Get metadata about one specific package (dataset)
     *
     * @remarks
     * Returns metadata about the package (dataset) corresponding to the specified unique name
     */
    getActionPackageShow(req: operations.GetActionPackageShowRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageShowResponse>;
    /**
     * Gets items related to a package (dataset)
     *
     * @remarks
     * Returns a dataset's related items.
     */
    getActionRelatedList(req: operations.GetActionRelatedListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionRelatedListResponse>;
    /**
     * Find resources
     *
     * @remarks
     * Returns a dictionary with two fields ``count`` and ``results``.             The ``count`` field contains the total number of Resources                found without the limit or query parameters having an effect.             The ``results`` field is a list of dictized Resource objects.             The query parameter is a required field. It is a string in                the form ``{field}:{term}`` or a list of strings, each of the             same form. Within each string, ``{field}`` is a field or extra             field on the Resource domain object.
     */
    getActionResourceSearch(req: operations.GetActionResourceSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetActionResourceSearchResponse>;
    /**
     * Get metadata for a specific resource
     *
     * @remarks
     * Return the metadata of a resource
     */
    getActionResourceShow(req: operations.GetActionResourceShowRequest, config?: AxiosRequestConfig): Promise<operations.GetActionResourceShowResponse>;
    /**
     * Get the site status
     *
     * @remarks
     * Returns the site status
     */
    getActionStatusShow(config?: AxiosRequestConfig): Promise<operations.GetActionStatusShowResponse>;
    /**
     * Get a list of tags
     *
     * @remarks
     * Returns the names of all indexed tags
     */
    getActionTagList(req: operations.GetActionTagListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionTagListResponse>;
}
