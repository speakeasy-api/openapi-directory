import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AssessmentData {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOfferingsOfferingIdAnalyticsActivitiesResponses - Find open response activity attempts
     *
     * Responds with all learner activity attempts for open response activities in an offering matching the offeringId.
    **/
    getOfferingsOfferingIdAnalyticsActivitiesResponses(req: operations.GetOfferingsOfferingIdAnalyticsActivitiesResponsesRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsActivitiesResponsesResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsMarksAssignments - Find assessment marks
     *
     * Responds with all learner assessment marks in an offering matching the offeringId.
    **/
    getOfferingsOfferingIdAnalyticsMarksAssignments(req: operations.GetOfferingsOfferingIdAnalyticsMarksAssignmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsMarksAssignmentsResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsMarksQuizzes - Find quiz marks
     *
     * Responds with all learner quiz marks in an offering matching the offeringId.
    **/
    getOfferingsOfferingIdAnalyticsMarksQuizzes(req: operations.GetOfferingsOfferingIdAnalyticsMarksQuizzesRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsMarksQuizzesResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsSubmissionsAssignments - Find submissions to assessments, including marks if any
     *
     * Responds with all learner assessment submissions and marks, if any, in an offering matching the offeringId.
    **/
    getOfferingsOfferingIdAnalyticsSubmissionsAssignments(req: operations.GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId - Find submissions to a specified open response assessment, including marks if any
     *
     * Responds with all learner assessment submissions and marks, if any, in a specified open response assessment.
    **/
    getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId(req: operations.GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId - Find a learner's submission to a specified assessment, including marks if any
     *
     * Responds with the learner's assessment submission and any marks for the submission.
    **/
    getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId(req: operations.GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdResponse>;
}
