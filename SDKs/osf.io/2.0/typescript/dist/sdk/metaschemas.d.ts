import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Metaschemas {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * metaschemasList - List all metaschemas
     *
     *
     * A paginated list of all active metaschemas.
     * Metaschemas describe the supplemental questions that accompany a registration.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of 10 metaschemas. Each resource in the array is a separate metaschema object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     *
     * This request should never return an error.
    **/
    metaschemasList(config?: AxiosRequestConfig): Promise<operations.MetaschemasListResponse>;
    /**
     * metaschemasRead - Retrieve a metaschema
     *
     * Retrieves the details of a given metaschema.
     *
     * Metaschemas describe the supplemental questions that accompany a registration.
     *
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested metaschema, if the request is successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
    **/
    metaschemasRead(req: operations.MetaschemasReadRequest, config?: AxiosRequestConfig): Promise<operations.MetaschemasReadResponse>;
}
