import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EmployeeStaging {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addNewEmployeeToWebLink - Add new employee to Web Link
     *
     * Add new employee to Web Link will send partially completed or potentially erroneous new hire record to Web Link, where it can be corrected and competed by company administrator or authorized Paylocity Service Bureau employee.
    **/
    addNewEmployeeToWebLink(req: operations.AddNewEmployeeToWebLinkRequest, config?: AxiosRequestConfig): Promise<operations.AddNewEmployeeToWebLinkResponse>;
}
