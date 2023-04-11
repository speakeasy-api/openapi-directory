import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Preprints {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all Bibliographic Contributors
     *
     * @remarks
     * A paginated list of the Preprint's Bibliographic Contributors, sorted by their index.
     * Contributors are users who can make changes to the Preprint. Contributors with WRITE permissions may edit preprint details, and ADMIN Contributors may add or remove other Contributors.
     *
     * Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
     *
     * Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.
     *
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of 10 contributors. Each resource in the array contains the full representation of the contributor, meaning additional requests to a contributor's detail view are not necessary. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * #### Filtering
     * You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/y9jdt/contributors/?filter[bibliographic]=true.
     *
     * Contributors may be filtered by their `bibliographic` and `permission` attributes.
     */
    preprintsBibliographicContributorsList(req: operations.PreprintsBibliographicContributorsListRequest, config?: AxiosRequestConfig): Promise<operations.PreprintsBibliographicContributorsListResponse>;
    /**
     * Retrieve citation details
     *
     * @remarks
     * The citation details for a preprint, in CSL format.
     * #### Returns
     * Returns a JSON object with a `data` key that contains the representation of the details necessary for the preprint citation.
     */
    preprintsCitationList(req: operations.PreprintsCitationListRequest, config?: AxiosRequestConfig): Promise<operations.PreprintsCitationListResponse>;
    /**
     * Retrieve a styled citation
     *
     * @remarks
     * The citation for a preprint in a specific style.
     * #### Returns
     * Returns a JSON object with a `data` key that contains the representation of the preprint citation, in the requested style.
     */
    preprintsCitationRead(req: operations.PreprintsCitationReadRequest, config?: AxiosRequestConfig): Promise<operations.PreprintsCitationReadResponse>;
    /**
     * Retrieve a contributor
     *
     * @remarks
     * Retrieves the details of a contributor on this Preprint.
     * Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
     *
     * Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested contributor, if the request is successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    preprintsContributorRead(req: operations.PreprintsContributorReadRequest, config?: AxiosRequestConfig): Promise<operations.PreprintsContributorReadResponse>;
    /**
     * Create a Contributor
     *
     * @remarks
     * Adds a contributor to a Preprint, effectively creating a relationship between the Preprint and a user.
     *
     * Contributors are users who can make changes to the Preprint. Contributors with WRITE permissions may edit preprint details, and ADMIN Contributors may add or remove other Contributors.
     *
     * Contributors are categorized as either "bibliographic" or "non-bibliographic" contributors. From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
     * #### Permissions
     * Only project administrators can add contributors to a Preprint.
     * #### Required
     * A relationship object with a `data` key, containing the `users` type and valid user ID is required.
     *
     * All attributes describing the relationship between the Preprint and the user are optional.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the new contributor, if the request is successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    preprintsContributorsCreate(req: operations.PreprintsContributorsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PreprintsContributorsCreateResponse>;
    /**
     * List all Contributors for a Preprint
     *
     * @remarks
     * A paginated list of the Preprint's Contributors, sorted by their index.
     *
     * Contributors are users who can make changes to the Preprint. Contributors with WRITE permissions may edit preprint details, and ADMIN Contributors may add or remove other Contributors.
     *
     * Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
     *
     * Note that if an anonymous view_only key is being used to view the list of Contributors, the user relationship will not be exposed and the Contributor ID will be an empty string.
     *
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of 10 contributors. Each resource in the array contains the full representation of the contributor, meaning additional requests to a contributor's detail view are not necessary. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * #### Filtering
     * You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/y9jdt/contributors/?filter[bibliographic]=true.
     *
     * Contributors may be filtered by their `bibliographic` and `permission` attributes.
     */
    preprintsContributorsList(req: operations.PreprintsContributorsListRequest, config?: AxiosRequestConfig): Promise<operations.PreprintsContributorsListResponse>;
    /**
     * Create a preprint
     *
     * @remarks
     * Creates a new preprint.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the created preprint, if the request is successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.
     */
    preprintsCreate(req: operations.PreprintsCreatePreprintInput, config?: AxiosRequestConfig): Promise<operations.PreprintsCreateResponse>;
    /**
     * List all preprints
     *
     * @remarks
     *
     * A paginated list of preprints from all preprint providers. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     *
     * This request should never return an error.
     * #### Filtering
     * You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/?filter[provider]=socarxiv.
     *
     * Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.
     */
    preprintsList(config?: AxiosRequestConfig): Promise<operations.PreprintsListResponse>;
    /**
     * Update a preprint
     *
     * @remarks
     * Updates the specified preprint by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     * #### Returns
     * Returns a JSON object with a `data` key containing the new representation of the updated preprint, if the request is successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.
     */
    preprintsPartialUpdate(req: operations.PreprintsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PreprintsPartialUpdateResponse>;
    /**
     * Retrieve a preprint
     *
     * @remarks
     * Retrieves the details of a preprint.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested preprint, if the request is successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    preprintsRead(req: operations.PreprintsReadRequest, config?: AxiosRequestConfig): Promise<operations.PreprintsReadResponse>;
}
