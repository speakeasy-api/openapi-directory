import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UserFields {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List projec home user fields of client workgroup
     *
     * @remarks
     * List projec home user fields of client workgroup
     */
    getProjectHomeUserFieldListOfClient(req: operations.GetProjectHomeUserFieldListOfClientRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectHomeUserFieldListOfClientResponse>;
    /**
     * List projec home user fields
     *
     * @remarks
     * List projec home user fields
     */
    getProjectHomeUserFieldsList(req: operations.GetProjectHomeUserFieldsListRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectHomeUserFieldsListResponse>;
}
