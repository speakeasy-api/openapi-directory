import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Licenses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * licenseList - List all licenses
     *
     * A paginated list of licenses. The returned licenses are sorted by their name.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * The `data` key contains an array of 10 licenses. Each resource in the array is a separate license object and contains the full representation of the license, meaning additional requests to a license's detail view are not necessary.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     *
     * This request should never return an error.
     * #### Filtering
     * You can optionally request that the response only include licenses that match your filters by utilizing the `filter` query parameter, e.g. [https://api.osf.io/v2/licenses/?filter[name]=apache](https://api.osf.io/v2/licenses/?filter[name]=apache).
     *
     * Licenses may be filtered by their `id`, and `name`.
    **/
    licenseList(config?: AxiosRequestConfig): Promise<operations.LicenseListResponse>;
    /**
     * licensesRead - Retrieve a license
     *
     * Retrieves the details of a license.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested license, if the request is successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
    **/
    licensesRead(req: operations.LicensesReadRequest, config?: AxiosRequestConfig): Promise<operations.LicensesReadResponse>;
}
