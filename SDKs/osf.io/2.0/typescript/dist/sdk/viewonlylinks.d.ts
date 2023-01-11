import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ViewOnlyLinks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * viewOnlyLinksNodeList - List all nodes
     *
     *
     * The list of nodes which this view only link gives read-only access to.
     * #### Permissions
     * Only project administrators may retrieve the nodes of a view only link. Attempting to retrieve a view only link without appropriate permissions will result in a 403 Forbidden response.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
    **/
    viewOnlyLinksNodeList(req: operations.ViewOnlyLinksNodeListRequest, config?: AxiosRequestConfig): Promise<operations.ViewOnlyLinksNodeListResponse>;
    /**
     * viewOnlyLinksRead - Retrieve a view only link
     *
     * Retrieves details about a specific view only link.
     * #### Permissions
     * Only project administrators may retrieve the details of a view only link. Attempting to retrieve a view only link without appropriate permissions will result in a 403 Forbidden response.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
    **/
    viewOnlyLinksRead(req: operations.ViewOnlyLinksReadRequest, config?: AxiosRequestConfig): Promise<operations.ViewOnlyLinksReadResponse>;
}
