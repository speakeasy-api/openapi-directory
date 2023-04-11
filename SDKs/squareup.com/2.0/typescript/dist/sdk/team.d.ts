import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Team {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * BulkCreateTeamMembers
     *
     * @remarks
     * Creates multiple `TeamMember` objects. The created `TeamMember` objects are returned on successful creates.
     * This process is non-transactional and processes as much of the request as possible. If one of the creates in
     * the request cannot be successfully processed, the request is not marked as failed, but the body of the response
     * contains explicit error information for the failed create.
     *
     * Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#bulk-create-team-members).
     */
    bulkCreateTeamMembers(req: shared.BulkCreateTeamMembersRequest, security: operations.BulkCreateTeamMembersSecurity, config?: AxiosRequestConfig): Promise<operations.BulkCreateTeamMembersResponse>;
    /**
     * BulkUpdateTeamMembers
     *
     * @remarks
     * Updates multiple `TeamMember` objects. The updated `TeamMember` objects are returned on successful updates.
     * This process is non-transactional and processes as much of the request as possible. If one of the updates in
     * the request cannot be successfully processed, the request is not marked as failed, but the body of the response
     * contains explicit error information for the failed update.
     * Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#bulk-update-team-members).
     */
    bulkUpdateTeamMembers(req: shared.BulkUpdateTeamMembersRequest, security: operations.BulkUpdateTeamMembersSecurity, config?: AxiosRequestConfig): Promise<operations.BulkUpdateTeamMembersResponse>;
    /**
     * CreateTeamMember
     *
     * @remarks
     * Creates a single `TeamMember` object. The `TeamMember` object is returned on successful creates.
     * You must provide the following values in your request to this endpoint:
     * - `given_name`
     * - `family_name`
     *
     * Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#createteammember).
     */
    createTeamMember(req: shared.CreateTeamMemberRequest, security: operations.CreateTeamMemberSecurity, config?: AxiosRequestConfig): Promise<operations.CreateTeamMemberResponse>;
    /**
     * RetrieveTeamMember
     *
     * @remarks
     * Retrieves a `TeamMember` object for the given `TeamMember.id`.
     * Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#retrieve-a-team-member).
     */
    retrieveTeamMember(req: operations.RetrieveTeamMemberRequest, security: operations.RetrieveTeamMemberSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveTeamMemberResponse>;
    /**
     * RetrieveWageSetting
     *
     * @remarks
     * Retrieves a `WageSetting` object for a team member specified
     * by `TeamMember.id`.
     * Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#retrievewagesetting).
     */
    retrieveWageSetting(req: operations.RetrieveWageSettingRequest, security: operations.RetrieveWageSettingSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveWageSettingResponse>;
    /**
     * SearchTeamMembers
     *
     * @remarks
     * Returns a paginated list of `TeamMember` objects for a business.
     * The list can be filtered by the following:
     * - location IDs
     * - `status`
     */
    searchTeamMembers(req: shared.SearchTeamMembersRequest, security: operations.SearchTeamMembersSecurity, config?: AxiosRequestConfig): Promise<operations.SearchTeamMembersResponse>;
    /**
     * UpdateTeamMember
     *
     * @remarks
     * Updates a single `TeamMember` object. The `TeamMember` object is returned on successful updates.
     * Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#update-a-team-member).
     */
    updateTeamMember(req: operations.UpdateTeamMemberRequest, security: operations.UpdateTeamMemberSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateTeamMemberResponse>;
    /**
     * UpdateWageSetting
     *
     * @remarks
     * Creates or updates a `WageSetting` object. The object is created if a
     * `WageSetting` with the specified `team_member_id` does not exist. Otherwise,
     * it fully replaces the `WageSetting` object for the team member.
     * The `WageSetting` is returned on a successful update.
     * Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#create-or-update-a-wage-setting).
     */
    updateWageSetting(req: operations.UpdateWageSettingRequest, security: operations.UpdateWageSettingSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateWageSettingResponse>;
}
