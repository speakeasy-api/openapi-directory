import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Images {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAllImageUrls - Retrieves all library item images
     *
     * Retrieves all library items images used by the organization, sorted by updated date
    **/
    getAllImageUrls(req: operations.GetAllImageUrlsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllImageUrlsResponse>;
}
