import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomFields {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get All Custom Fields
     *
     * @remarks
     * Get All Custom Fields for the selected company
     */
    getAllCustomFieldsByCategory(req: operations.GetAllCustomFieldsByCategoryRequest, security: operations.GetAllCustomFieldsByCategorySecurity, config?: AxiosRequestConfig): Promise<operations.GetAllCustomFieldsByCategoryResponse>;
}
