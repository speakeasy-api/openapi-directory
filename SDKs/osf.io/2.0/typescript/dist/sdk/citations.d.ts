import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Citations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * citationsStylesList - List all citation styles
     *
     *
     * A paginated list of all standard citation styles available for rendering citations.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of 10 citation styles. Each resource in the array is a separate citation syle and contains the full representation of the citation style object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     *
     * This request should never return an error.
     * #### Filtering
     * You can optionally request that the response only include citation styles that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/citations/styles/?filter[title]=open.
     *
     * Citation styles may be filtered by their `id`, `title`, `short-title`, and `summary`.
    **/
    citationsStylesList(config?: AxiosRequestConfig): Promise<operations.CitationsStylesListResponse>;
    /**
     * citationsStylesRead - Retrieve a citation style
     *
     * Retrieves the details of a citation style.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested citation style, if the request is successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
    **/
    citationsStylesRead(req: operations.CitationsStylesReadRequest, config?: AxiosRequestConfig): Promise<operations.CitationsStylesReadResponse>;
}
