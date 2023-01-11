import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AssessmentGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmail - Remove a learner from an assessment group
     *
     * Removes a learner from the specified assessment group.
    **/
    deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmail(req: operations.DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailResponse>;
    /**
     * getOfferingsOfferingIdGroups - Find assessment groups
     *
     * Responds with a list of assessment groups in an offering.
    **/
    getOfferingsOfferingIdGroups(req: operations.GetOfferingsOfferingIdGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdGroupsResponse>;
    /**
     * getOfferingsOfferingIdGroupsGroupIdLearners - Find learners in an assessment group
     *
     * Responds with a list of learners in a specified assessment group.
    **/
    getOfferingsOfferingIdGroupsGroupIdLearners(req: operations.GetOfferingsOfferingIdGroupsGroupIdLearnersRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdGroupsGroupIdLearnersResponse>;
    /**
     * postOfferingsOfferingIdGroups - Add an assessment group
     *
     * Creates a new assessment group in an offering.
    **/
    postOfferingsOfferingIdGroups(req: operations.PostOfferingsOfferingIdGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostOfferingsOfferingIdGroupsResponse>;
    /**
     * postOfferingsOfferingIdGroupsGroupIdLearners - Add a learner to an assessment group
     *
     * Adds a learner into the specified assessment group.
    **/
    postOfferingsOfferingIdGroupsGroupIdLearners(req: operations.PostOfferingsOfferingIdGroupsGroupIdLearnersRequest, config?: AxiosRequestConfig): Promise<operations.PostOfferingsOfferingIdGroupsGroupIdLearnersResponse>;
}
