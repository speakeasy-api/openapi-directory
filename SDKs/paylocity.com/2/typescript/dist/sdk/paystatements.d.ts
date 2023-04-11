import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PayStatements {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get employee pay statement details data for the specified year.
     *
     * @remarks
     * Get pay statement details API will return employee pay statement details data currently available in Web Pay for the specified year.
     */
    getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear(req: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest, security: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity, config?: AxiosRequestConfig): Promise<operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse>;
    /**
     * Get employee pay statement details data for the specified year and check date.
     *
     * @remarks
     * Get pay statement details API will return employee pay statement detail data currently available in Web Pay for the specified year and check date.
     */
    getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate(req: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest, security: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity, config?: AxiosRequestConfig): Promise<operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse>;
    /**
     * Get employee pay statement summary data for the specified year.
     *
     * @remarks
     * Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year.
     */
    getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear(req: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest, security: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity, config?: AxiosRequestConfig): Promise<operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse>;
    /**
     * Get employee pay statement summary data for the specified year and check date.
     *
     * @remarks
     * Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year and check date.
     */
    getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate(req: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest, security: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateSecurity, config?: AxiosRequestConfig): Promise<operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse>;
}
