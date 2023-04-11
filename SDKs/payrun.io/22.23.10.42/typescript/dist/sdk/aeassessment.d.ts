import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AEAssessment {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete auto enrolment assessment
     *
     * @remarks
     * Deletes an existing auto enrolment assessment for the employee. Used to remove historical assessments
     */
    deleteAEAssessment(req: operations.DeleteAEAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAEAssessmentResponse>;
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
     * Get the auto enrolment assessments
     *
     * @remarks
     * Gets all auto enrolment assessments from the specified pay run
     */
    getAEAssessmentsFromPayRun(req: operations.GetAEAssessmentsFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetAEAssessmentsFromPayRunResponse>;
    /**
     * Insert new auto enrolment assessment
     *
     * @remarks
     * Creates a new auto enrolment assessment for the employee. Used to insert historical assessments
     */
    postNewAEAssessment(req: operations.PostNewAEAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.PostNewAEAssessmentResponse>;
    /**
     * Insert new auto enrolment assessment
     *
     * @remarks
     * Creates a new auto enrolment assessment for the employee. Used to insert historical assessments
     */
    putNewAEAssessment(req: operations.PutNewAEAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.PutNewAEAssessmentResponse>;
}
