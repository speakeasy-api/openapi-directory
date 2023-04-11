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
     * Delete an Employee
     *
     * @remarks
     * Delete the specified employee
     */
    deleteEmployee(req: operations.DeleteEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployeeResponse>;
    /**
     * Delete an Employee revision matching the specified revision date.
     *
     * @remarks
     * Deletes the specified employee revision for the matching revision date
     */
    deleteEmployeeRevision(req: operations.DeleteEmployeeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployeeRevisionResponse>;
    /**
     * Delete an Employee revision matching the specified revision number.
     *
     * @remarks
     * Deletes the specified employee revision for the matching revision number
     */
    deleteEmployeeRevisionByNumber(req: operations.DeleteEmployeeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployeeRevisionByNumberResponse>;
    /**
     * Deletes employee secret
     *
     * @remarks
     * Deletes an employee secret from the given resource location
     */
    deleteEmployeeSecret(req: operations.DeleteEmployeeSecretRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployeeSecretResponse>;
    /**
     * Get the auto enrolment assessment
     *
     * @remarks
     * Gets the auto enrolment assessment from the specified employee
     */
    getAEAssessmentFromEmployee(req: operations.GetAEAssessmentFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetAEAssessmentFromEmployeeResponse>;
    /**
     * Get the auto enrolment assessments
     *
     * @remarks
     * Gets all auto enrolment assessments from the specified employee
     */
    getAEAssessmentsFromEmployee(req: operations.GetAEAssessmentsFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetAEAssessmentsFromEmployeeResponse>;
    /**
     * Get all employee tags
     *
     * @remarks
     * Gets all the employee tags
     */
    getAllEmployeeTags(req: operations.GetAllEmployeeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllEmployeeTagsResponse>;
    /**
     * Get links to all commentaries for the specified employee
     *
     * @remarks
     * Get links to all commentaries for the specified employee.
     */
    getCommentariesFromEmployee(req: operations.GetCommentariesFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentariesFromEmployeeResponse>;
    /**
     * Get commentary from employee
     *
     * @remarks
     * Gets the specified commentary report from the employee
     */
    getCommentaryFromEmployee(req: operations.GetCommentaryFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentaryFromEmployeeResponse>;
    /**
     * Get commentary from payrun by specified employee.
     *
     * @remarks
     * Get commentary from payrun by specified employee.
     */
    getCommentaryFromPayRunByEmployee(req: operations.GetCommentaryFromPayRunByEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentaryFromPayRunByEmployeeResponse>;
    /**
     * Get employee by effective date.
     *
     * @remarks
     * Returns the employee's state at the specified effective date.
     */
    getEmployeeByEffectiveDate(req: operations.GetEmployeeByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeByEffectiveDateResponse>;
    /**
     * Get employee from employer
     *
     * @remarks
     * Gets the specified employee from employer by employee code.
     */
    getEmployeeFromEmployer(req: operations.GetEmployeeFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeFromEmployerResponse>;
    /**
     * Gets the employee by revision number
     *
     * @remarks
     * Get the employee revision matching the specified revision number
     */
    getEmployeeRevisionByNumber(req: operations.GetEmployeeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeRevisionByNumberResponse>;
    /**
     * Get all employee revision summaries
     *
     * @remarks
     * Gets links to all employee revision summaries
     */
    getEmployeeRevisionSummaries(req: operations.GetEmployeeRevisionSummariesRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeRevisionSummariesResponse>;
    /**
     * Gets the employee summary by revision number
     *
     * @remarks
     * Get the employee revision summary matching the specified revision number
     */
    getEmployeeRevisionSummaryByNumber(req: operations.GetEmployeeRevisionSummaryByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeRevisionSummaryByNumberResponse>;
    /**
     * Get all employee revisions
     *
     * @remarks
     * Gets links to all employee revisions
     */
    getEmployeeRevisions(req: operations.GetEmployeeRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeRevisionsResponse>;
    /**
     * Get employee secret
     *
     * @remarks
     * Get the public visible employee secret object
     */
    getEmployeeSecret(req: operations.GetEmployeeSecretRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeSecretResponse>;
    /**
     * Get all employee secret links
     *
     * @remarks
     * Get all the employee secret links
     */
    getEmployeeSecrets(req: operations.GetEmployeeSecretsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeSecretsResponse>;
    /**
     * Get employee summaries from employer at a given effective date.
     *
     * @remarks
     * Get links to all employee summaries for the employer on specified effective date.
     */
    getEmployeeSummariesByEffectiveDate(req: operations.GetEmployeeSummariesByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeSummariesByEffectiveDateResponse>;
    /**
     * Get employee summaries from employer.
     *
     * @remarks
     * Get links to all employee summaries for the specified employer.
     */
    getEmployeeSummariesFromEmployer(req: operations.GetEmployeeSummariesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeSummariesFromEmployerResponse>;
    /**
     * Get employee summary by effective date.
     *
     * @remarks
     * Gets the employee summary for the specified effective date.
     */
    getEmployeeSummaryByEffectiveDate(req: operations.GetEmployeeSummaryByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeSummaryByEffectiveDateResponse>;
    /**
     * Get employee summary from employer
     *
     * @remarks
     * Gets the specified employee summary data from employer by employee code.
     */
    getEmployeeSummaryFromEmployer(req: operations.GetEmployeeSummaryFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeSummaryFromEmployerResponse>;
    /**
     * Get employees from employer at a given effective date.
     *
     * @remarks
     * Get links to all employees for the employer on specified effective date.
     */
    getEmployeesByEffectiveDate(req: operations.GetEmployeesByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesByEffectiveDateResponse>;
    /**
     * Get employees from employer.
     *
     * @remarks
     * Get links to all employees for the specified employer.
     */
    getEmployeesFromEmployer(req: operations.GetEmployeesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromEmployerResponse>;
    /**
     * Get employees from the pay run
     *
     * @remarks
     * Gets links to all employees included in the specified pay run.
     */
    getEmployeesFromPayRun(req: operations.GetEmployeesFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromPayRunResponse>;
    /**
     * Get all employees revisions from a pay schedule.
     *
     * @remarks
     * Gets links to all employee revisions that have ever existed in the specified pay schedule.
     */
    getEmployeesFromPaySchedule(req: operations.GetEmployeesFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromPayScheduleResponse>;
    /**
     * Get employees from a pay schedule on effective date.
     *
     * @remarks
     * Gets links to all employee revisions in the specified pay schedule for the given effective date.
     */
    getEmployeesFromPayScheduleOnEffectiveDate(req: operations.GetEmployeesFromPayScheduleOnEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromPayScheduleOnEffectiveDateResponse>;
    /**
     * Get employees with tag
     *
     * @remarks
     * Gets the employees with the tag
     */
    getEmployeesWithTag(req: operations.GetEmployeesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesWithTagResponse>;
    /**
     * Gets the pay runs from the employee
     *
     * @remarks
     * Get links to all pay runs for the specified employee.
     */
    getPayRunsFromEmployee(req: operations.GetPayRunsFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunsFromEmployeeResponse>;
    /**
     * Patches the employee
     *
     * @remarks
     * Patches the specified employee with the supplied values
     */
    patchEmployee(req: operations.PatchEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.PatchEmployeeResponse>;
    /**
     * Create a new Employee
     *
     * @remarks
     * Create a new employee object
     */
    postEmployeeIntoEmployer(req: operations.PostEmployeeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostEmployeeIntoEmployerResponse>;
    /**
     * Create a new employee secret
     *
     * @remarks
     * Create new employee secret using auto generated resource location key
     */
    postEmployeeSecret(req: operations.PostEmployeeSecretRequest, config?: AxiosRequestConfig): Promise<operations.PostEmployeeSecretResponse>;
    /**
     * Updates the Employee
     *
     * @remarks
     * Updates the existing specified employee object
     */
    putEmployeeIntoEmployer(req: operations.PutEmployeeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployeeIntoEmployerResponse>;
    /**
     * Create a new employee secret
     *
     * @remarks
     * Create / update an employee secret at the given resource location
     */
    putEmployeeSecret(req: operations.PutEmployeeSecretRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployeeSecretResponse>;
}
