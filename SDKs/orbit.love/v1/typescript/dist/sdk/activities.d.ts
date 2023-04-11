import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Activities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a post activity
     */
    deleteWorkspaceSlugMembersMemberSlugActivitiesId(req: operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest, security: operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIdResponse>;
    /**
     * List activities for a workspace
     */
    getWorkspaceSlugActivities(req: operations.GetWorkspaceSlugActivitiesRequest, security: operations.GetWorkspaceSlugActivitiesSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceSlugActivitiesResponse>;
    /**
     * Get an activity in the workspace
     */
    getWorkspaceSlugActivitiesId(req: operations.GetWorkspaceSlugActivitiesIdRequest, security: operations.GetWorkspaceSlugActivitiesIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceSlugActivitiesIdResponse>;
    /**
     * List activities for a member
     */
    getWorkspaceSlugMembersMemberSlugActivities(req: operations.GetWorkspaceSlugMembersMemberSlugActivitiesRequest, security: operations.GetWorkspaceSlugMembersMemberSlugActivitiesSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceSlugMembersMemberSlugActivitiesResponse>;
    /**
     * List member activities in an organization
     */
    getWorkspaceSlugOrganizationsOrganizationIdActivities(req: operations.GetWorkspaceSlugOrganizationsOrganizationIdActivitiesRequest, security: operations.GetWorkspaceSlugOrganizationsOrganizationIdActivitiesSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceSlugOrganizationsOrganizationIdActivitiesResponse>;
    /**
     * Create a Custom or a Content activity for a new or existing member
     *
     * @remarks
     * Use this method when you know an identity of the member (github, email, twitter, etc.) but not their Orbit ID. Pass fields in the member object to update the member in addition to creating the activity.
     */
    postWorkspaceSlugActivities(req: operations.PostWorkspaceSlugActivitiesRequest, security: operations.PostWorkspaceSlugActivitiesSecurity, config?: AxiosRequestConfig): Promise<operations.PostWorkspaceSlugActivitiesResponse>;
    /**
     * Create a Custom or a Content activity for a member
     */
    postWorkspaceSlugMembersMemberSlugActivities(req: operations.PostWorkspaceSlugMembersMemberSlugActivitiesRequest, security: operations.PostWorkspaceSlugMembersMemberSlugActivitiesSecurity, config?: AxiosRequestConfig): Promise<operations.PostWorkspaceSlugMembersMemberSlugActivitiesResponse>;
    /**
     * Update a custom activity for a member
     */
    putWorkspaceSlugMembersMemberSlugActivitiesId(req: operations.PutWorkspaceSlugMembersMemberSlugActivitiesIdRequest, security: operations.PutWorkspaceSlugMembersMemberSlugActivitiesIdSecurity, config?: AxiosRequestConfig): Promise<operations.PutWorkspaceSlugMembersMemberSlugActivitiesIdResponse>;
}
