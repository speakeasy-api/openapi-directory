import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LearnerActivity {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOfferingsOfferingIdAnalyticsLearnersProgress - Find learner progress in a specified offering
     *
     * Responds with all learner progress in the offering.
    **/
    getOfferingsOfferingIdAnalyticsLearnersProgress(req: operations.GetOfferingsOfferingIdAnalyticsLearnersProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsLearnersProgressResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsSocialNotes - Find shared social notes in an offering
     *
     * Responds with all shared social notes in a specified offering.
    **/
    getOfferingsOfferingIdAnalyticsSocialNotes(req: operations.GetOfferingsOfferingIdAnalyticsSocialNotesRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsSocialNotesResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsUnitReactions - Find unit reactions
     *
     * Responds with user reactions to units in a specified offering.
    **/
    getOfferingsOfferingIdAnalyticsUnitReactions(req: operations.GetOfferingsOfferingIdAnalyticsUnitReactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsUnitReactionsResponse>;
    /**
     * getUsersUserEmailOfferingsOfferingIdProgress - Find learner's progress in a specified offering
     *
     * Responds with the learner's progress in a specified offering.
    **/
    getUsersUserEmailOfferingsOfferingIdProgress(req: operations.GetUsersUserEmailOfferingsOfferingIdProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserEmailOfferingsOfferingIdProgressResponse>;
    /**
     * getUsersUserEmailProgress - Find learner's progress in offerings
     *
     * Responds with the specified learner's progress in all offerings.
    **/
    getUsersUserEmailProgress(req: operations.GetUsersUserEmailProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserEmailProgressResponse>;
}
