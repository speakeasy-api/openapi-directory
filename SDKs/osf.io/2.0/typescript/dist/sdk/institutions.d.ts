import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Institutions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve an institution
     *
     * @remarks
     * Retrieves the details of an institution
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested institution, if the request was successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    institutionsDetail(req: operations.InstitutionsDetailRequest, config?: AxiosRequestConfig): Promise<operations.InstitutionsDetailResponse>;
    /**
     * List all institutions
     *
     * @remarks
     *
     * A paginated list of all verified institutions.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of 10 institutions. Each resource in the array is a separate institution object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     *
     * This request should never return an error.
     * #### Filtering
     * You can optionally request that the response only include institutions that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/?filter[id]=cos.
     *
     * Institutions may be filtered by their `id`, `name`, and `auth_url`
     */
    institutionsList(config?: AxiosRequestConfig): Promise<operations.InstitutionsListResponse>;
    /**
     * List all affiliated nodes
     *
     * @remarks
     * A paginated list of all nodes affiliated with an institution.
     * #### Versioning
     * As of version `2.2`, affiliated components (in addition to affiliated top-level projects) are returned from this endpoint.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of 10 nodes. Each resource in the array is a separate nodes object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     * #### Filtering
     * You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/nodes?filter[title]=science.
     *
     * Nodes may be filtered by their `id`, `title`, `description`, `public`, `tags`, `category`, `date_created`, `date_modified`, `root`, `parent`, `contributors`, and `preprint`
     */
    institutionsNodeList(req: operations.InstitutionsNodeListRequest, config?: AxiosRequestConfig): Promise<operations.InstitutionsNodeListResponse>;
    /**
     * List all affiliated registrations
     *
     * @remarks
     * A paginated list of all registrations affiliated with an institution.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of 10 registrations. Each resource in the array is a separate users object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     * #### Filtering
     * You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/registrations?filter[title]=science.
     *
     * Registrations may be filtered by their  `id`, `title`, `description`, `public`, `tags`, `category`, `date_created`, `date_modified`, `root`, `parent`, `contributors`, and `preprint`
     */
    institutionsRegistrationList(req: operations.InstitutionsRegistrationListRequest, config?: AxiosRequestConfig): Promise<operations.InstitutionsRegistrationListResponse>;
    /**
     * List all affiliated users
     *
     * @remarks
     * A paginated list of all users affiliated with an institution.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of 10 users. Each resource in the array is a separate users object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     * #### Filtering
     * You can optionally request that the response only include users that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/users?filter[family_name]=Nosek.
     *
     * Users may be filtered by their `id`, `full_name`, `given_name`, `middle_names`, and `family_name`
     */
    institutionsUsersList(req: operations.InstitutionsUsersListRequest, config?: AxiosRequestConfig): Promise<operations.InstitutionsUsersListResponse>;
}
