import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PayStatements {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear - Get employee pay statement details data for the specified year.
     *
     * Get pay statement details API will return employee pay statement details data currently available in Web Pay for the specified year.
    **/
    getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear(req: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest, config?: AxiosRequestConfig): Promise<operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse>;
    /**
     * getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate - Get employee pay statement details data for the specified year and check date.
     *
     * Get pay statement details API will return employee pay statement detail data currently available in Web Pay for the specified year and check date.
    **/
    getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate(req: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest, config?: AxiosRequestConfig): Promise<operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse>;
    /**
     * getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear - Get employee pay statement summary data for the specified year.
     *
     * Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year.
    **/
    getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear(req: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest, config?: AxiosRequestConfig): Promise<operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse>;
    /**
     * getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate - Get employee pay statement summary data for the specified year and check date.
     *
     * Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year and check date.
    **/
    getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate(req: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest, config?: AxiosRequestConfig): Promise<operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse>;
}
