import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Taxonomies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all taxonomies
     *
     * @remarks
     *
     * A paginated list of all [bepress disciplines taxonomies](https://www.bepress.com/wp-content/uploads/2016/12/Digital-Commons-Disciplines-taxonomy-2017-01.pdf).
     * Note: this API endpoint is under active development, and is subject to change in the future.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of up to 10 taxonomies. Each resource in the array is a separate taxonomy object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     *
     * This request should never return an error.
     * #### Filtering
     * You can optionally request that the response only include taxonomies that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/taxonomies/?filter['id']='{taxonomy_id}'.
     *
     * Taxonomies may be filtered by their `id`, `parents`, and `text`.
     */
    taxonomiesList(config?: AxiosRequestConfig): Promise<operations.TaxonomiesListResponse>;
    /**
     * Retrieve a taxonomy
     *
     * @remarks
     * Retrieves the details of a taxonomy.
     * #### Returns
     *
     * Returns a JSON object with a `data` key containing the representation of the requested taxonomy, if the request is successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    taxonomiesRead(req: operations.TaxonomiesReadRequest, config?: AxiosRequestConfig): Promise<operations.TaxonomiesReadResponse>;
}
