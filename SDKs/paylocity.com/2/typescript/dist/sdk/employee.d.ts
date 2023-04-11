import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Employee {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add new employee
     *
     * @remarks
     * New Employee API sends new employee data directly to Web Pay. Companies who use the New Hire Template in Web Pay may require additional fields when hiring employees. New Employee API Requests will honor these required fields.
     */
    addEmployee(req: operations.AddEmployeeRequest, security: operations.AddEmployeeSecurity, config?: AxiosRequestConfig): Promise<operations.AddEmployeeResponse>;
    /**
     * Get all employees
     *
     * @remarks
     * Get All Employees API will return employee data currently available in Web Pay.
     */
    getAllEmployees(req: operations.GetAllEmployeesRequest, security: operations.GetAllEmployeesSecurity, config?: AxiosRequestConfig): Promise<operations.GetAllEmployeesResponse>;
    /**
     * Get employee
     *
     * @remarks
     * Get Employee API will return employee data currently available in Web Pay.
     */
    getEmployee(req: operations.GetEmployeeRequest, security: operations.GetEmployeeSecurity, config?: AxiosRequestConfig): Promise<operations.GetEmployeeResponse>;
    /**
     * Update employee
     *
     * @remarks
     * Update Employee API will update existing employee data in WebPay.
     */
    updateEmployee(req: operations.UpdateEmployeeRequest, security: operations.UpdateEmployeeSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateEmployeeResponse>;
}
