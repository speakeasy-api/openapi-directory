import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AeAssessment {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAeAssessment - Delete auto enrolment assessment
     *
     * Deletes an existing auto enrolment assessment for the employee. Used to remove historical assessments
    **/
    deleteAeAssessment(req: operations.DeleteAeAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAeAssessmentResponse>;
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
     * getAeAssessmentsFromPayRun - Get the auto enrolment assessments
     *
     * Gets all auto enrolment assessments from the specified pay run
    **/
    getAeAssessmentsFromPayRun(req: operations.GetAeAssessmentsFromPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetAeAssessmentsFromPayRunResponse>;
    /**
     * postNewAeAssessment - Insert new auto enrolment assessment
     *
     * Creates a new auto enrolment assessment for the employee. Used to insert historical assessments
    **/
    postNewAeAssessment(req: operations.PostNewAeAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.PostNewAeAssessmentResponse>;
    /**
     * putNewAeAssessment - Insert new auto enrolment assessment
     *
     * Creates a new auto enrolment assessment for the employee. Used to insert historical assessments
    **/
    putNewAeAssessment(req: operations.PutNewAeAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.PutNewAeAssessmentResponse>;
}
