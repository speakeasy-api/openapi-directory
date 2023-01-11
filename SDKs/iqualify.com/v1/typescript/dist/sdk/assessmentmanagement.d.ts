import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AssessmentManagement {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId - Remove assessment document
     *
     * Removes the assessment document file for a specified assessment in an offering.
    **/
    deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId(req: operations.DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdResponse>;
    /**
     * deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId - Reset user's assessment to draft state
     *
     * Resets the user's submitted assessment to a draft state.
    **/
    deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId(req: operations.DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdResponse>;
    /**
     * getOfferingsOfferingIdActivitiesOpenresponse - Find offering's activities
     *
     * Responds with the activities in a specific offering.
    **/
    getOfferingsOfferingIdActivitiesOpenresponse(req: operations.GetOfferingsOfferingIdActivitiesOpenresponseRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdActivitiesOpenresponseResponse>;
    /**
     * getOfferingsOfferingIdAssessments - Find offering's assessments
     *
     * Responds with all assessments in an offering matching the offeringId.
    **/
    getOfferingsOfferingIdAssessments(req: operations.GetOfferingsOfferingIdAssessmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAssessmentsResponse>;
    /**
     * getOfferingsOfferingIdLearnersPendingSubmission - Find learners with assessments pending x days before due date within the specified offeringId
     *
     * Responds with learners who have one or more assessments due x days before the due date, with each assessment that is due, where x = the number of days specified in the request. The default is 3 days.
    **/
    getOfferingsOfferingIdLearnersPendingSubmission(req: operations.GetOfferingsOfferingIdLearnersPendingSubmissionRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdLearnersPendingSubmissionResponse>;
    /**
     * getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse - Find learner's open response assessment submissions
     *
     * Responds with open response assessment submissions by a learner in an offering.
    **/
    getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse(req: operations.GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse>;
    /**
     * patchOfferingsOfferingIdAssessmentsAssessmentId - Update assessment details
     *
     * Updates the assessment details for a specified assessment in an offering.
    **/
    patchOfferingsOfferingIdAssessmentsAssessmentId(req: operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdResponse>;
    /**
     * patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail - Update the due dates for a learner's quiz attempt
     *
     * Updates the due dates for a learner's quiz attempt specified by the assessmentId.
    **/
    patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail(req: operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest, config?: AxiosRequestConfig): Promise<operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailResponse>;
}
