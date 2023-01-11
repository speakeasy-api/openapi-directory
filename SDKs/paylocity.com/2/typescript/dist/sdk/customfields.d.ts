import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CustomFields {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAllCustomFieldsByCategory - Get All Custom Fields
     *
     * Get All Custom Fields for the selected company
    **/
    getAllCustomFieldsByCategory(req: operations.GetAllCustomFieldsByCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetAllCustomFieldsByCategoryResponse>;
}
