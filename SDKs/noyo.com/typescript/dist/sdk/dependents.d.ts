import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Dependents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createDependent - Create Dependent
     *
     * Now, you can associate dependents who are electing coverage with respective employees.
    **/
    createDependent(req: operations.CreateDependentRequest, config?: AxiosRequestConfig): Promise<operations.CreateDependentResponse>;
    /**
     * editDependent - Edit a Dependent
     *
     * Edit a dependent based on the ID provided. The version parameter must match the latest dependent version.
    **/
    editDependent(req: operations.EditDependentRequest, config?: AxiosRequestConfig): Promise<operations.EditDependentResponse>;
    /**
     * getDependent - Get Dependent
     *
     * Returns the latest version of a single dependent based on the ID provided.
    **/
    getDependent(req: operations.GetDependentRequest, config?: AxiosRequestConfig): Promise<operations.GetDependentResponse>;
    /**
     * getEmployeeDependentsList - Get all Employee Dependents
     *
     * Returns a list of all dependents for a given employee
    **/
    getEmployeeDependentsList(req: operations.GetEmployeeDependentsListRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeDependentsListResponse>;
}
