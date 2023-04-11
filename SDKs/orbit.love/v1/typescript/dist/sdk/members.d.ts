import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Members {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a member
     */
    deleteWorkspaceSlugMembersMemberSlug(req: operations.DeleteWorkspaceSlugMembersMemberSlugRequest, security: operations.DeleteWorkspaceSlugMembersMemberSlugSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceSlugMembersMemberSlugResponse>;
    /**
     * Remove identity from a member
     */
    deleteWorkspaceSlugMembersMemberSlugIdentities(req: operations.DeleteWorkspaceSlugMembersMemberSlugIdentitiesRequest, security: operations.DeleteWorkspaceSlugMembersMemberSlugIdentitiesSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceSlugMembersMemberSlugIdentitiesResponse>;
    /**
     * List members in a workspace
     */
    getWorkspaceSlugMembers(req: operations.GetWorkspaceSlugMembersRequest, security: operations.GetWorkspaceSlugMembersSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceSlugMembersResponse>;
    /**
     * Find a member by an identity
     *
     * @remarks
     * Provide a source and one of username/uid/email params to return a member with that identity, if one exists. Common values for source include github, twitter, and email.
     */
    getWorkspaceSlugMembersFind(req: operations.GetWorkspaceSlugMembersFindRequest, security: operations.GetWorkspaceSlugMembersFindSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceSlugMembersFindResponse>;
    /**
     * Get a member
     */
    getWorkspaceSlugMembersMemberSlug(req: operations.GetWorkspaceSlugMembersMemberSlugRequest, security: operations.GetWorkspaceSlugMembersMemberSlugSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceSlugMembersMemberSlugResponse>;
    /**
     * List members in an organization
     */
    getWorkspaceSlugOrganizationsOrganizationIdMembers(req: operations.GetWorkspaceSlugOrganizationsOrganizationIdMembersRequest, security: operations.GetWorkspaceSlugOrganizationsOrganizationIdMembersSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceSlugOrganizationsOrganizationIdMembersResponse>;
    /**
     * Create or update a member
     *
     * @remarks
     * This method is useful when you know a member's identity in another system and want to create or update the corresponding Orbit member. Identities can be specified in the identity object or member attributes like member.github. If no member exists, a new member will be created and linked to any provided identities.
     */
    postWorkspaceSlugMembers(req: operations.PostWorkspaceSlugMembersRequest, security: operations.PostWorkspaceSlugMembersSecurity, config?: AxiosRequestConfig): Promise<operations.PostWorkspaceSlugMembersResponse>;
    /**
     * Add identity to a member
     */
    postWorkspaceSlugMembersMemberSlugIdentities(req: operations.PostWorkspaceSlugMembersMemberSlugIdentitiesRequest, security: operations.PostWorkspaceSlugMembersMemberSlugIdentitiesSecurity, config?: AxiosRequestConfig): Promise<operations.PostWorkspaceSlugMembersMemberSlugIdentitiesResponse>;
    /**
     * Update a member
     */
    putWorkspaceSlugMembersMemberSlug(req: operations.PutWorkspaceSlugMembersMemberSlugRequest, security: operations.PutWorkspaceSlugMembersMemberSlugSecurity, config?: AxiosRequestConfig): Promise<operations.PutWorkspaceSlugMembersMemberSlugResponse>;
}
