import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AssessmentData {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Find open response activity attempts
     *
     * @remarks
     * Responds with all learner activity attempts for open response activities in an offering matching the offeringId.
     */
    getOfferingsOfferingIdAnalyticsActivitiesResponses(req: operations.GetOfferingsOfferingIdAnalyticsActivitiesResponsesRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsActivitiesResponsesResponse>;
    /**
     * Find assessment marks
     *
     * @remarks
     * Responds with all learner assessment marks in an offering matching the offeringId.
     */
    getOfferingsOfferingIdAnalyticsMarksAssignments(req: operations.GetOfferingsOfferingIdAnalyticsMarksAssignmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsMarksAssignmentsResponse>;
    /**
     * Find quiz marks
     *
     * @remarks
     * Responds with all learner quiz marks in an offering matching the offeringId.
     */
    getOfferingsOfferingIdAnalyticsMarksQuizzes(req: operations.GetOfferingsOfferingIdAnalyticsMarksQuizzesRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsMarksQuizzesResponse>;
    /**
     * Find submissions to assessments, including marks if any
     *
     * @remarks
     * Responds with all learner assessment submissions and marks, if any, in an offering matching the offeringId.
     */
    getOfferingsOfferingIdAnalyticsSubmissionsAssignments(req: operations.GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsResponse>;
    /**
     * Find submissions to a specified open response assessment, including marks if any
     *
     * @remarks
     * Responds with all learner assessment submissions and marks, if any, in a specified open response assessment.
     */
    getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId(req: operations.GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdResponse>;
    /**
     * Find a learner's submission to a specified assessment, including marks if any
     *
     * @remarks
     * Responds with the learner's assessment submission and any marks for the submission.
     */
    getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId(req: operations.GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdResponse>;
}
