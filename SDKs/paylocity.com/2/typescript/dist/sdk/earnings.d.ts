import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Earnings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add/Update Earning
     *
     * @remarks
     * Add/Update Earning API sends new or updated employee earnings information directly to Web Pay.
     */
    addOrUpdateAnEmployeeEarning(req: operations.AddOrUpdateAnEmployeeEarningRequest, security: operations.AddOrUpdateAnEmployeeEarningSecurity, config?: AxiosRequestConfig): Promise<operations.AddOrUpdateAnEmployeeEarningResponse>;
    /**
     * Delete Earning by Earning Code and Start Date
     *
     * @remarks
     * Delete Earning by Earning Code and Start Date
     */
    deleteEarningByEarningCodeAndStartDate(req: operations.DeleteEarningByEarningCodeAndStartDateRequest, security: operations.DeleteEarningByEarningCodeAndStartDateSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteEarningByEarningCodeAndStartDateResponse>;
    /**
     * Get All Earnings
     *
     * @remarks
     * Get All Earnings returns all earnings for the selected employee.
     */
    getAllEarnings(req: operations.GetAllEarningsRequest, security: operations.GetAllEarningsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAllEarningsResponse>;
    /**
     * Get Earning by Earning Code and Start Date
     *
     * @remarks
     * Get Earnings returns the single earning with the provided earning code and start date for the selected employee.
     */
    getEarningByEarningCodeAndStartDate(req: operations.GetEarningByEarningCodeAndStartDateRequest, security: operations.GetEarningByEarningCodeAndStartDateSecurity, config?: AxiosRequestConfig): Promise<operations.GetEarningByEarningCodeAndStartDateResponse>;
    /**
     * Get Earnings by Earning Code
     *
     * @remarks
     * Get Earnings returns all earnings with the provided earning code for the selected employee.
     */
    getEarningsByEarningCode(req: operations.GetEarningsByEarningCodeRequest, security: operations.GetEarningsByEarningCodeSecurity, config?: AxiosRequestConfig): Promise<operations.GetEarningsByEarningCodeResponse>;
}
