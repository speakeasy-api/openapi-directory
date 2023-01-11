import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PayRun {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletePayRun - Deletes a pay run
     *
     * Delete the specified pay run
    **/
    deletePayRun(req: operations.DeletePayRunRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayRunResponse>;
    /**
     * deletePayRunEmployee - Deletes a pay run employee
     *
     * Delete pay run results for a single employee
    **/
    deletePayRunEmployee(req: operations.DeletePayRunEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayRunEmployeeResponse>;
    /**
     * getAeAssessmentsFromPayRun - Get the auto enrolment assessments
     *
     * Gets all auto enrolment assessments from the specified pay run
    **/
    getAeAssessmentsFromPayRun(req: operations.GetAeAssessmentsFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetAeAssessmentsFromPayRunResponse>;
    /**
     * getAllPayRunTags - Get all pay run tags
     *
     * Gets all the pay run tags
    **/
    getAllPayRunTags(req: operations.GetAllPayRunTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayRunTagsResponse>;
    /**
     * getCommentariesFromPayRun - Get links to all commentaries for the specified pay run
     *
     * Get links to all commentaries for the specified pay run.
    **/
    getCommentariesFromPayRun(req: operations.GetCommentariesFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentariesFromPayRunResponse>;
    /**
     * getCommentaryFromPayRunByEmployee - Get commentary from payrun by specified employee.
     *
     * Get commentary from payrun by specified employee.
    **/
    getCommentaryFromPayRunByEmployee(req: operations.GetCommentaryFromPayRunByEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentaryFromPayRunByEmployeeResponse>;
    /**
     * getEmployeesFromPayRun - Get employees from the pay run
     *
     * Gets links to all employees included in the specified pay run.
    **/
    getEmployeesFromPayRun(req: operations.GetEmployeesFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromPayRunResponse>;
    /**
     * getPayRunFromPaySchedule - Gets the pay run from the pay schedule
     *
     * Returns the pay run from the pay schedule
    **/
    getPayRunFromPaySchedule(req: operations.GetPayRunFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunFromPayScheduleResponse>;
    /**
     * getPayRunsFromEmployee - Gets the pay runs from the employee
     *
     * Get links to all pay runs for the specified employee.
    **/
    getPayRunsFromEmployee(req: operations.GetPayRunsFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunsFromEmployeeResponse>;
    /**
     * getPayRunsFromPaySchedule - Gets the pay runs from the pay schedule
     *
     * Get links to all pay runs for the specified pay schedule
    **/
    getPayRunsFromPaySchedule(req: operations.GetPayRunsFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunsFromPayScheduleResponse>;
    /**
     * getPayRunsWithTag - Get pay runs with tag
     *
     * Gets the pay runs with the tag
    **/
    getPayRunsWithTag(req: operations.GetPayRunsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunsWithTagResponse>;
    /**
     * getReportLinesFromPayRun - Gets the report lines from the specified pay run
     *
     * Returns all report lines associated with the specified pay run
    **/
    getReportLinesFromPayRun(req: operations.GetReportLinesFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetReportLinesFromPayRunResponse>;
}
