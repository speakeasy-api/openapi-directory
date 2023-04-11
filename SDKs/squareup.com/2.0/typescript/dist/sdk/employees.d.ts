import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Employees {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * ListEmployees
     */
    getV2Employees(req: operations.GetV2EmployeesRequest, security: operations.GetV2EmployeesSecurity, config?: AxiosRequestConfig): Promise<operations.GetV2EmployeesResponse>;
    /**
     * RetrieveEmployee
     */
    getV2EmployeesId(req: operations.GetV2EmployeesIdRequest, security: operations.GetV2EmployeesIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetV2EmployeesIdResponse>;
}
