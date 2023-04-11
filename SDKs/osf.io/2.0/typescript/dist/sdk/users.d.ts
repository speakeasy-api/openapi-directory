import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all addon accounts
     *
     * @remarks
     *
     * A paginated list of addon accounts authorized by this user.
     *
     * #### Permissions
     *
     * Addon accounts are visible only to the user that authorized the account.
     *
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of at most 10 addon account objects. Each resource in the array is a separate  addon account object and contains the full representation of the addon account.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     */
    usersAddonAccountsList(req: operations.UsersAddonAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.UsersAddonAccountsListResponse>;
    /**
     * Retrieve an addon account
     *
     * @remarks
     * Retrieves the details of an addon account
     *
     * #### Permissions
     *
     * Addon accounts are visible only to the user that authorized the account.
     *
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested addon account, if the request was successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    usersAddonAccountsRead(req: operations.UsersAddonAccountsReadRequest, config?: AxiosRequestConfig): Promise<operations.UsersAddonAccountsReadResponse>;
    /**
     * List all user addons
     *
     * @remarks
     *
     * A paginated list of authorized user addons
     *
     * #### Permissions
     *
     * User addons are visible only to the user that authorized the addon.
     *
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of up to 10 addons. Each resource in the array is a separate addon object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     *
     * Attempting to request the accounts for an addon that is not enabled will result in a **404 Not Found** response.
     */
    usersAddonsList(req: operations.UsersAddonsListRequest, config?: AxiosRequestConfig): Promise<operations.UsersAddonsListResponse>;
    /**
     * Retrieve a user addon
     *
     * @remarks
     * Retrieves the details of an authorized user addon
     *
     * #### Permissions
     *
     * User addons are visible only to the user that authorized the addon.
     *
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested user addon, if the request was successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     *
     * Attempting to request the accounts for an addon that is not enabled will result in a **404 Not Found** response.
     */
    usersAddonsRead(req: operations.UsersAddonsReadRequest, config?: AxiosRequestConfig): Promise<operations.UsersAddonsReadResponse>;
    /**
     * List all institutions
     *
     * @remarks
     * A paginated list of institutions that the user is affiliated with.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of 10 institutions. Each resource in the array is a complete institution object and contains the full representation of the institution, meaning additional requests to a institution's detail view are not necessary.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     */
    usersInstitutionsList(req: operations.UsersInstitutionsListRequest, config?: AxiosRequestConfig): Promise<operations.UsersInstitutionsListResponse>;
    /**
     * List all users
     *
     * @remarks
     *
     * A paginated list of all users registered on the OSF. The returned users are sorted by their `date_registered`, with the most recently registered users appearing first.
     *
     * The subroute `/users/me/` is a special endpoint that always points to the currently logged-in user.
     * #### Versioning
     * As of version `2.3`, merged users will not be returned from this endpoint.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of 10 users. Each resource in the array is a separate users object and contains the full representation of the user, meaning additional requests to a user's detail view are not necessary.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     *
     * This request should never return an error.
     * #### Filtering
     * You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/?filter[family_name]=Nosek.
     *
     * Users may be filtered by their `id`, `full_name`, `given_name`, `middle_name`, or `family_name`.
     */
    usersList(config?: AxiosRequestConfig): Promise<operations.UsersListResponse>;
    /**
     * List all nodes
     *
     * @remarks
     * A paginated list of nodes that the user is a contributor to. The returned nodes are sorted by their `date_modified`, with the most recently updated nodes appearing first.
     *
     * If the user ID in the path is the same as the logged-in user, all nodes will be returned. Otherwise, only the user's public nodes will be returned.
     *
     * User registrations are not available at this endpoint.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * #### Filtering
     * You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/nodes/?filter[title]=open.
     *
     * Nodes may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, `preprint`, and `contributors`.
     */
    usersNodesList(req: operations.UsersNodesListRequest, config?: AxiosRequestConfig): Promise<operations.UsersNodesListResponse>;
    /**
     * Update a user
     *
     * @remarks
     * Updates a user by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.
     *
     * Users can be updated with either a **PUT** or **PATCH** request. The `full_name` field is mandatory in a **PUT** request, and optional in a **PATCH**.
     *
     * **Note**: if you make a PUT/PATCH request to the `/users/me/` endpoint, you must still provide your full user ID in the ID field of the request. We do not support using the `me` alias in request bodies at this time.
     * #### Returns
     * Returns a JSON object with a `data` key containing the new representation of the updated node, if the request is successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    usersPartialUpdate(req: operations.UsersPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.UsersPartialUpdateResponse>;
    /**
     * List all preprints
     *
     * @remarks
     * A paginated list of preprints that the user contributes to. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of 10 preprints. Each resource in the array is a complete preprint object and contains the full representation of the preprint, meaning additional requests to a preprint's detail view are not necessary.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * #### Filtering
     * You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/preprints/?filter[provider]=psyarxiv.
     *
     * Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.
     */
    usersPreprintsList(req: operations.UsersPreprintsListRequest, config?: AxiosRequestConfig): Promise<operations.UsersPreprintsListResponse>;
    /**
     * Retrieve a user
     *
     * @remarks
     * Retrieves the details of a given users.
     *
     * The returned information includes the user's bibliographic information and the date the user was registered.
     *
     * Additionally, relationships to the list of institutions with which the user is affiliated, and to the list of nodes which the user contributes to (that the requesting user has permission to see) are returned.
     *
     * If `me` is given as the `user_id` in the request path, the record of the currently logged-in user will be returned.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested user, if the request is successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    usersRead(req: operations.UsersReadRequest, config?: AxiosRequestConfig): Promise<operations.UsersReadResponse>;
    /**
     * List all registrations
     *
     * @remarks
     * A paginated list of registrations that the user is a contributor to. The returned registrations are sorted by their `date_modified`, with the most recently updated registrations appearing first.
     *
     * If the user ID in the path is the same as the logged-in user, all registrations will be returned. Otherwise, only the user's public registrations will be returned.
     *
     * User nodes are not available at this endpoint.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of 10 registrations. Each resource in the array is a separate registration object and contains the full representation of the registration, meaning additional requests to a registration's detail view are not necessary.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * #### Filtering
     * You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/registrations/?filter[title]=replication.
     *
     * Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.
     */
    usersRegistrationsList(req: operations.UsersRegistrationsListRequest, config?: AxiosRequestConfig): Promise<operations.UsersRegistrationsListResponse>;
}
