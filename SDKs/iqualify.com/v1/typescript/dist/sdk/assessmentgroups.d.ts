import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AssessmentGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Remove a learner from an assessment group
     *
     * @remarks
     * Removes a learner from the specified assessment group.
     */
    deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmail(req: operations.DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailResponse>;
    /**
     * Find assessment groups
     *
     * @remarks
     * Responds with a list of assessment groups in an offering.
     */
    getOfferingsOfferingIdGroups(req: operations.GetOfferingsOfferingIdGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdGroupsResponse>;
    /**
     * Find learners in an assessment group
     *
     * @remarks
     * Responds with a list of learners in a specified assessment group.
     */
    getOfferingsOfferingIdGroupsGroupIdLearners(req: operations.GetOfferingsOfferingIdGroupsGroupIdLearnersRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdGroupsGroupIdLearnersResponse>;
    /**
     * Add an assessment group
     *
     * @remarks
     * Creates a new assessment group in an offering.
     */
    postOfferingsOfferingIdGroups(req: operations.PostOfferingsOfferingIdGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostOfferingsOfferingIdGroupsResponse>;
    /**
     * Add a learner to an assessment group
     *
     * @remarks
     * Adds a learner into the specified assessment group.
     */
    postOfferingsOfferingIdGroupsGroupIdLearners(req: operations.PostOfferingsOfferingIdGroupsGroupIdLearnersRequest, config?: AxiosRequestConfig): Promise<operations.PostOfferingsOfferingIdGroupsGroupIdLearnersResponse>;
}
