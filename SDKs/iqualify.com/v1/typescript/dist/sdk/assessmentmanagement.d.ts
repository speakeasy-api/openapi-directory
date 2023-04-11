import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AssessmentManagement {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Remove assessment document
     *
     * @remarks
     * Removes the assessment document file for a specified assessment in an offering.
     */
    deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId(req: operations.DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdResponse>;
    /**
     * Reset user's assessment to draft state
     *
     * @remarks
     * Resets the user's submitted assessment to a draft state.
     */
    deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId(req: operations.DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdResponse>;
    /**
     * Find offering's activities
     *
     * @remarks
     * Responds with the activities in a specific offering.
     */
    getOfferingsOfferingIdActivitiesOpenresponse(req: operations.GetOfferingsOfferingIdActivitiesOpenresponseRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdActivitiesOpenresponseResponse>;
    /**
     * Find offering's assessments
     *
     * @remarks
     * Responds with all assessments in an offering matching the offeringId.
     */
    getOfferingsOfferingIdAssessments(req: operations.GetOfferingsOfferingIdAssessmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAssessmentsResponse>;
    /**
     * Find learners with assessments pending x days before due date within the specified offeringId
     *
     * @remarks
     * Responds with learners who have one or more assessments due x days before the due date, with each assessment that is due, where x = the number of days specified in the request. The default is 3 days.
     */
    getOfferingsOfferingIdLearnersPendingSubmission(req: operations.GetOfferingsOfferingIdLearnersPendingSubmissionRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdLearnersPendingSubmissionResponse>;
    /**
     * Find learner's open response assessment submissions
     *
     * @remarks
     * Responds with open response assessment submissions by a learner in an offering.
     */
    getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse(req: operations.GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse>;
    /**
     * Update assessment details
     *
     * @remarks
     * Updates the assessment details for a specified assessment in an offering.
     */
    patchOfferingsOfferingIdAssessmentsAssessmentId(req: operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdResponse>;
    /**
     * Update the due dates for a learner's quiz attempt
     *
     * @remarks
     * Updates the due dates for a learner's quiz attempt specified by the assessmentId.
     */
    patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail(req: operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest, config?: AxiosRequestConfig): Promise<operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailResponse>;
}
