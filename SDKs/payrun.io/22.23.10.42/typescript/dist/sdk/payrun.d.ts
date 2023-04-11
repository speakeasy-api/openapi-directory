import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PayRun {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a pay run
     *
     * @remarks
     * Delete the specified pay run
     */
    deletePayRun(req: operations.DeletePayRunRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayRunResponse>;
    /**
     * Deletes a pay run employee
     *
     * @remarks
     * Delete pay run results for a single employee
     */
    deletePayRunEmployee(req: operations.DeletePayRunEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayRunEmployeeResponse>;
    /**
     * Get the auto enrolment assessments
     *
     * @remarks
     * Gets all auto enrolment assessments from the specified pay run
     */
    getAEAssessmentsFromPayRun(req: operations.GetAEAssessmentsFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetAEAssessmentsFromPayRunResponse>;
    /**
     * Get all pay run tags
     *
     * @remarks
     * Gets all the pay run tags
     */
    getAllPayRunTags(req: operations.GetAllPayRunTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayRunTagsResponse>;
    /**
     * Get links to all commentaries for the specified pay run
     *
     * @remarks
     * Get links to all commentaries for the specified pay run.
     */
    getCommentariesFromPayRun(req: operations.GetCommentariesFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentariesFromPayRunResponse>;
    /**
     * Get commentary from payrun by specified employee.
     *
     * @remarks
     * Get commentary from payrun by specified employee.
     */
    getCommentaryFromPayRunByEmployee(req: operations.GetCommentaryFromPayRunByEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentaryFromPayRunByEmployeeResponse>;
    /**
     * Get employees from the pay run
     *
     * @remarks
     * Gets links to all employees included in the specified pay run.
     */
    getEmployeesFromPayRun(req: operations.GetEmployeesFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromPayRunResponse>;
    /**
     * Gets the pay run from the pay schedule
     *
     * @remarks
     * Returns the pay run from the pay schedule
     */
    getPayRunFromPaySchedule(req: operations.GetPayRunFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunFromPayScheduleResponse>;
    /**
     * Gets the pay runs from the employee
     *
     * @remarks
     * Get links to all pay runs for the specified employee.
     */
    getPayRunsFromEmployee(req: operations.GetPayRunsFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunsFromEmployeeResponse>;
    /**
     * Gets the pay runs from the pay schedule
     *
     * @remarks
     * Get links to all pay runs for the specified pay schedule
     */
    getPayRunsFromPaySchedule(req: operations.GetPayRunsFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunsFromPayScheduleResponse>;
    /**
     * Get pay runs with tag
     *
     * @remarks
     * Gets the pay runs with the tag
     */
    getPayRunsWithTag(req: operations.GetPayRunsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunsWithTagResponse>;
    /**
     * Gets the report lines from the specified pay run
     *
     * @remarks
     * Returns all report lines associated with the specified pay run
     */
    getReportLinesFromPayRun(req: operations.GetReportLinesFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetReportLinesFromPayRunResponse>;
}
