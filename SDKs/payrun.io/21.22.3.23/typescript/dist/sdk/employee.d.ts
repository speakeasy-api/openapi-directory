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
     * deleteEmployee - Delete an Employee
     *
     * Delete the specified employee
    **/
    deleteEmployee(req: operations.DeleteEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployeeResponse>;
    /**
     * deleteEmployeeRevision - Delete an Employee revision matching the specified revision date.
     *
     * Deletes the specified employee revision for the matching revision date
    **/
    deleteEmployeeRevision(req: operations.DeleteEmployeeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployeeRevisionResponse>;
    /**
     * deleteEmployeeRevisionByNumber - Delete an Employee revision matching the specified revision number.
     *
     * Deletes the specified employee revision for the matching revision number
    **/
    deleteEmployeeRevisionByNumber(req: operations.DeleteEmployeeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployeeRevisionByNumberResponse>;
    /**
     * deleteEmployeeSecret - Deletes employee secret
     *
     * Deletes an employee secret from the given resource location
    **/
    deleteEmployeeSecret(req: operations.DeleteEmployeeSecretRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployeeSecretResponse>;
    /**
     * getAeAssessmentFromEmployee - Get the auto enrolment assessment
     *
     * Gets the auto enrolment assessment from the specified employee
    **/
    getAeAssessmentFromEmployee(req: operations.GetAeAssessmentFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetAeAssessmentFromEmployeeResponse>;
    /**
     * getAeAssessmentsFromEmployee - Get the auto enrolment assessments
     *
     * Gets all auto enrolment assessments from the specified employee
    **/
    getAeAssessmentsFromEmployee(req: operations.GetAeAssessmentsFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetAeAssessmentsFromEmployeeResponse>;
    /**
     * getAllEmployeeTags - Get all employee tags
     *
     * Gets all the employee tags
    **/
    getAllEmployeeTags(req: operations.GetAllEmployeeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllEmployeeTagsResponse>;
    /**
     * getCommentariesFromEmployee - Get links to all commentaries for the specified employee
     *
     * Get links to all commentaries for the specified employee.
    **/
    getCommentariesFromEmployee(req: operations.GetCommentariesFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentariesFromEmployeeResponse>;
    /**
     * getCommentaryFromEmployee - Get commentary from employee
     *
     * Gets the specified commentary report from the employee
    **/
    getCommentaryFromEmployee(req: operations.GetCommentaryFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentaryFromEmployeeResponse>;
    /**
     * getCommentaryFromPayRunByEmployee - Get commentary from payrun by specified employee.
     *
     * Get commentary from payrun by specified employee.
    **/
    getCommentaryFromPayRunByEmployee(req: operations.GetCommentaryFromPayRunByEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentaryFromPayRunByEmployeeResponse>;
    /**
     * getEmployeeByEffectiveDate - Get employee by effective date.
     *
     * Returns the employee's state at the specified effective date.
    **/
    getEmployeeByEffectiveDate(req: operations.GetEmployeeByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeByEffectiveDateResponse>;
    /**
     * getEmployeeFromEmployer - Get employee from employer
     *
     * Gets the specified employee from employer by employee code.
    **/
    getEmployeeFromEmployer(req: operations.GetEmployeeFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeFromEmployerResponse>;
    /**
     * getEmployeeRevisionByNumber - Gets the employee by revision number
     *
     * Get the employee revision matching the specified revision number
    **/
    getEmployeeRevisionByNumber(req: operations.GetEmployeeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeRevisionByNumberResponse>;
    /**
     * getEmployeeRevisions - Get all employee revisions
     *
     * Gets links to all employee revisions
    **/
    getEmployeeRevisions(req: operations.GetEmployeeRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeRevisionsResponse>;
    /**
     * getEmployeeSecret - Get employee secret
     *
     * Get the public visible employee secret object
    **/
    getEmployeeSecret(req: operations.GetEmployeeSecretRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeSecretResponse>;
    /**
     * getEmployeeSecrets - Get all employee secret links
     *
     * Get all the employee secret links
    **/
    getEmployeeSecrets(req: operations.GetEmployeeSecretsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeSecretsResponse>;
    /**
     * getEmployeesByEffectiveDate - Get employees from employer at a given effective date.
     *
     * Get links to all employees for the employer on specified effective date.
    **/
    getEmployeesByEffectiveDate(req: operations.GetEmployeesByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesByEffectiveDateResponse>;
    /**
     * getEmployeesFromEmployer - Get employees from employer.
     *
     * Get links to all employees for the specified employer.
    **/
    getEmployeesFromEmployer(req: operations.GetEmployeesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromEmployerResponse>;
    /**
     * getEmployeesFromPayRun - Get employees from the pay run
     *
     * Gets links to all employees included in the specified pay run.
    **/
    getEmployeesFromPayRun(req: operations.GetEmployeesFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromPayRunResponse>;
    /**
     * getEmployeesFromPaySchedule - Get all employees revisions from a pay schedule.
     *
     * Gets links to all employee revisions that have ever existed in the specified pay schedule.
    **/
    getEmployeesFromPaySchedule(req: operations.GetEmployeesFromPayScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromPayScheduleResponse>;
    /**
     * getEmployeesFromPayScheduleOnEffectiveDate - Get employees from a pay schedule on effective date.
     *
     * Gets links to all employee revisions in the specified pay schedule for the given effective date.
    **/
    getEmployeesFromPayScheduleOnEffectiveDate(req: operations.GetEmployeesFromPayScheduleOnEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesFromPayScheduleOnEffectiveDateResponse>;
    /**
     * getEmployeesWithTag - Get employees with tag
     *
     * Gets the employees with the tag
    **/
    getEmployeesWithTag(req: operations.GetEmployeesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesWithTagResponse>;
    /**
     * getPayRunsFromEmployee - Gets the pay runs from the employee
     *
     * Get links to all pay runs for the specified employee.
    **/
    getPayRunsFromEmployee(req: operations.GetPayRunsFromEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunsFromEmployeeResponse>;
    /**
     * patchEmployee - Patches the employee
     *
     * Patches the specified employee with the supplied values
    **/
    patchEmployee(req: operations.PatchEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.PatchEmployeeResponse>;
    /**
     * postEmployeeIntoEmployer - Create a new Employee
     *
     * Create a new employee object
    **/
    postEmployeeIntoEmployer(req: operations.PostEmployeeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostEmployeeIntoEmployerResponse>;
    /**
     * postEmployeeSecret - Create a new employee secret
     *
     * Create new employee secret using auto generated resource location key
    **/
    postEmployeeSecret(req: operations.PostEmployeeSecretRequest, config?: AxiosRequestConfig): Promise<operations.PostEmployeeSecretResponse>;
    /**
     * putEmployeeIntoEmployer - Updates the Employee
     *
     * Updates the existing specified employee object
    **/
    putEmployeeIntoEmployer(req: operations.PutEmployeeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployeeIntoEmployerResponse>;
    /**
     * putEmployeeSecret - Create a new employee secret
     *
     * Create / update an employee secret at the given resource location
    **/
    putEmployeeSecret(req: operations.PutEmployeeSecretRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployeeSecretResponse>;
}
