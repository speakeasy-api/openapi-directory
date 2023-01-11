import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Employee {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addEmployee - Add new employee
     *
     * New Employee API sends new employee data directly to Web Pay. Companies who use the New Hire Template in Web Pay may require additional fields when hiring employees. New Employee API Requests will honor these required fields.
    **/
    addEmployee(req: operations.AddEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.AddEmployeeResponse>;
    /**
     * getAllEmployees - Get all employees
     *
     * Get All Employees API will return employee data currently available in Web Pay.
    **/
    getAllEmployees(req: operations.GetAllEmployeesRequest, config?: AxiosRequestConfig): Promise<operations.GetAllEmployeesResponse>;
    /**
     * getEmployee - Get employee
     *
     * Get Employee API will return employee data currently available in Web Pay.
    **/
    getEmployee(req: operations.GetEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeResponse>;
    /**
     * updateEmployee - Update employee
     *
     * Update Employee API will update existing employee data in WebPay.
    **/
    updateEmployee(req: operations.UpdateEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEmployeeResponse>;
}
