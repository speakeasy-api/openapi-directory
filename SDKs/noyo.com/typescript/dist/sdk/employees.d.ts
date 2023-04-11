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
     * Create Employee
     *
     * @remarks
     * When you add employees to your group, you’ll pass information like their hire date, employment status, and basic demographic information (address, DOB, SSN, etc.).
     */
    createEmployee(req: operations.CreateEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.CreateEmployeeResponse>;
    /**
     * Edit an Employee
     *
     * @remarks
     * Edit an employee based on the ID provided. The version parameter must match the latest employee version.
     */
    editEmployee(req: operations.EditEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.EditEmployeeResponse>;
    /**
     * Get Employee
     *
     * @remarks
     * Returns the latest version of a single employee based on the ID provided.
     */
    getEmployee(req: operations.GetEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeResponse>;
    /**
     * Get all Group Employees
     *
     * @remarks
     * Returns a list of all employees for a given group
     */
    getGroupEmployeesList(req: operations.GetGroupEmployeesListRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupEmployeesListResponse>;
}
