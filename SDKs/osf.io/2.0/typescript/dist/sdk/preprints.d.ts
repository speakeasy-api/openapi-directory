import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Preprints {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * preprintsCitationList - Retrieve citation details
     *
     * The citation details for a preprint, in CSL format.
     * #### Returns
     * Returns a JSON object with a `data` key that contains the representation of the details necessary for the preprint citation.
    **/
    preprintsCitationList(req: operations.PreprintsCitationListRequest, config?: AxiosRequestConfig): Promise<operations.PreprintsCitationListResponse>;
    /**
     * preprintsCitationRead - Retrieve a styled citation
     *
     * The citation for a preprint in a specific style.
     * #### Returns
     * Returns a JSON object with a `data` key that contains the representation of the preprint citation, in the requested style.
    **/
    preprintsCitationRead(req: operations.PreprintsCitationReadRequest, config?: AxiosRequestConfig): Promise<operations.PreprintsCitationReadResponse>;
    /**
     * preprintsCreate - Create a preprint
     *
     * Creates a new preprint.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the created preprint, if the request is successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.
    **/
    preprintsCreate(req: operations.PreprintsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PreprintsCreateResponse>;
    /**
     * preprintsList - List all preprints
     *
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
    **/
    preprintsList(config?: AxiosRequestConfig): Promise<operations.PreprintsListResponse>;
    /**
     * preprintsPartialUpdate - Update a preprint
     *
     * Updates the specified preprint by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     * #### Returns
     * Returns a JSON object with a `data` key containing the new representation of the updated preprint, if the request is successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.
    **/
    preprintsPartialUpdate(req: operations.PreprintsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PreprintsPartialUpdateResponse>;
    /**
     * preprintsRead - Retrieve a preprint
     *
     * Retrieves the details of a preprint.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested preprint, if the request is successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
    **/
    preprintsRead(req: operations.PreprintsReadRequest, config?: AxiosRequestConfig): Promise<operations.PreprintsReadResponse>;
}
