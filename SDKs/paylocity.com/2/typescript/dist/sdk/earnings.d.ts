import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Earnings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addOrUpdateAnEmployeeEarning - Add/Update Earning
     *
     * Add/Update Earning API sends new or updated employee earnings information directly to Web Pay.
    **/
    addOrUpdateAnEmployeeEarning(req: operations.AddOrUpdateAnEmployeeEarningRequest, config?: AxiosRequestConfig): Promise<operations.AddOrUpdateAnEmployeeEarningResponse>;
    /**
     * deleteEarningByEarningCodeAndStartDate - Delete Earning by Earning Code and Start Date
     *
     * Delete Earning by Earning Code and Start Date
    **/
    deleteEarningByEarningCodeAndStartDate(req: operations.DeleteEarningByEarningCodeAndStartDateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEarningByEarningCodeAndStartDateResponse>;
    /**
     * getAllEarnings - Get All Earnings
     *
     * Get All Earnings returns all earnings for the selected employee.
    **/
    getAllEarnings(req: operations.GetAllEarningsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllEarningsResponse>;
    /**
     * getEarningByEarningCodeAndStartDate - Get Earning by Earning Code and Start Date
     *
     * Get Earnings returns the single earning with the provided earning code and start date for the selected employee.
    **/
    getEarningByEarningCodeAndStartDate(req: operations.GetEarningByEarningCodeAndStartDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEarningByEarningCodeAndStartDateResponse>;
    /**
     * getEarningsByEarningCode - Get Earnings by Earning Code
     *
     * Get Earnings returns all earnings with the provided earning code for the selected employee.
    **/
    getEarningsByEarningCode(req: operations.GetEarningsByEarningCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetEarningsByEarningCodeResponse>;
}
