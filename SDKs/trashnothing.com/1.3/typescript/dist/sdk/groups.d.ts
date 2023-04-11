import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search, subscribe and unsubscribe to groups.
 */
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Contact group moderators
     */
    contactModerators(req: operations.ContactModeratorsRequest, config?: AxiosRequestConfig): Promise<operations.ContactModeratorsResponse>;
    /**
     * Retrieve a group
     */
    getGroup(req: operations.GetGroupRequest, security: operations.GetGroupSecurity, config?: AxiosRequestConfig): Promise<operations.GetGroupResponse>;
    /**
     * Retrieve multiple groups
     */
    getGroupsByIds(req: operations.GetGroupsByIdsRequest, security: operations.GetGroupsByIdsSecurity, config?: AxiosRequestConfig): Promise<operations.GetGroupsByIdsResponse>;
    /**
     * Join groups
     *
     * @remarks
     * Request membership to one or more groups. <br /><br /> NOTE: Any group with a has_questions field set to true will also require answers to the groups' new member questionnaire to be submitted.  Groups waiting for answers will have their membership field set to 'pending-questions'.  And the questionnaire that needs to be answered can be found in the membership.questionnaire field of the group after a subscribe request is made to that group.
     *
     */
    joinGroups(req: operations.JoinGroupsRequestBody, config?: AxiosRequestConfig): Promise<operations.JoinGroupsResponse>;
    /**
     * Leave a group
     */
    leaveGroup(req: operations.LeaveGroupRequest, config?: AxiosRequestConfig): Promise<operations.LeaveGroupResponse>;
    /**
     * Search groups
     */
    searchGroups(req: operations.SearchGroupsRequest, security: operations.SearchGroupsSecurity, config?: AxiosRequestConfig): Promise<operations.SearchGroupsResponse>;
    /**
     * Submit group answers
     *
     * @remarks
     * Submits answers to a groups' membership questionnaire. <br /><br /> The request body should be a JSON object mapping each question from the group membership.questionnaire.questions field to an answer (eg. {"Where do you live?": "New York City"} ). All questions are required so no null or empty string answers are allowed.
     *
     */
    submitAnswers(req: operations.SubmitAnswersRequest, config?: AxiosRequestConfig): Promise<operations.SubmitAnswersResponse>;
}
