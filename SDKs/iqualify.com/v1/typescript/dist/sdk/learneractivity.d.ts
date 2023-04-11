import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LearnerActivity {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Find learner progress in a specified offering
     *
     * @remarks
     * Responds with all learner progress in the offering.
     */
    getOfferingsOfferingIdAnalyticsLearnersProgress(req: operations.GetOfferingsOfferingIdAnalyticsLearnersProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsLearnersProgressResponse>;
    /**
     * Find shared social notes in an offering
     *
     * @remarks
     * Responds with all shared social notes in a specified offering.
     */
    getOfferingsOfferingIdAnalyticsSocialNotes(req: operations.GetOfferingsOfferingIdAnalyticsSocialNotesRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsSocialNotesResponse>;
    /**
     * Find unit reactions
     *
     * @remarks
     * Responds with user reactions to units in a specified offering.
     */
    getOfferingsOfferingIdAnalyticsUnitReactions(req: operations.GetOfferingsOfferingIdAnalyticsUnitReactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsUnitReactionsResponse>;
    /**
     * Find learner's progress in a specified offering
     *
     * @remarks
     * Responds with the learner's progress in a specified offering.
     */
    getUsersUserEmailOfferingsOfferingIdProgress(req: operations.GetUsersUserEmailOfferingsOfferingIdProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserEmailOfferingsOfferingIdProgressResponse>;
    /**
     * Find learner's progress in offerings
     *
     * @remarks
     * Responds with the specified learner's progress in all offerings.
     */
    getUsersUserEmailProgress(req: operations.GetUsersUserEmailProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserEmailProgressResponse>;
}
