import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Images {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve all library item images
     *
     * @remarks
     * Retrieves all library items images used by the organization, sorted by updated date
     */
    getAllImageUrls(req: operations.GetAllImageUrlsRequest, security: operations.GetAllImageUrlsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAllImageUrlsResponse>;
}
