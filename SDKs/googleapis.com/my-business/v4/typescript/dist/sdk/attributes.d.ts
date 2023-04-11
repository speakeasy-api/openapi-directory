import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Attributes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the list of available attributes that would be available for a location with the given primary category and country.
     */
    mybusinessAttributesList(req: operations.MybusinessAttributesListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAttributesListResponse>;
}
