import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Interact with GitHub Orgs.
 */
export declare class Orgs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Check organization membership for a user
     *
     * @remarks
     * Check if a user is, publicly or privately, a member of the organization.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#check-organization-membership-for-a-user} - API method documentation
     */
    orgsCheckMembershipForUser(req: operations.OrgsCheckMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCheckMembershipForUserResponse>;
    /**
     * Check public organization membership for a user
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#check-public-organization-membership-for-a-user} - API method documentation
     */
    orgsCheckPublicMembershipForUser(req: operations.OrgsCheckPublicMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCheckPublicMembershipForUserResponse>;
    /**
     * Convert an organization member to outside collaborator
     *
     * @remarks
     * When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://docs.github.com/enterprise-server@3.1/articles/converting-an-organization-member-to-an-outside-collaborator/)".
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator} - API method documentation
     */
    orgsConvertMemberToOutsideCollaborator(req: operations.OrgsConvertMemberToOutsideCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.OrgsConvertMemberToOutsideCollaboratorResponse>;
    /**
     * Create an organization webhook
     *
     * @remarks
     * Here's how you can create a hook that posts payloads in JSON format:
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#create-an-organization-webhook} - API method documentation
     */
    orgsCreateWebhook(req: operations.OrgsCreateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCreateWebhookResponse>;
    /**
     * Delete an organization webhook
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#delete-an-organization-webhook} - API method documentation
     */
    orgsDeleteWebhook(req: operations.OrgsDeleteWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsDeleteWebhookResponse>;
    /**
     * Get an organization
     *
     * @remarks
     * To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://docs.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).
     *
     * GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub Enterprise Server plan. See "[Authenticating with GitHub Apps](https://docs.github.com/enterprise-server@3.1/apps/building-github-apps/authenticating-with-github-apps/)" for details. For an example response, see 'Response with GitHub Enterprise Server plan information' below."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#get-an-organization} - API method documentation
     */
    orgsGet(req: operations.OrgsGetRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetResponse>;
    /**
     * Get an organization membership for the authenticated user
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user} - API method documentation
     */
    orgsGetMembershipForAuthenticatedUser(req: operations.OrgsGetMembershipForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetMembershipForAuthenticatedUserResponse>;
    /**
     * Get organization membership for a user
     *
     * @remarks
     * In order to get a user's membership with an organization, the authenticated user must be an organization member. The `state` parameter in the response can be used to identify the user's membership status.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#get-organization-membership-for-a-user} - API method documentation
     */
    orgsGetMembershipForUser(req: operations.OrgsGetMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetMembershipForUserResponse>;
    /**
     * Get an organization webhook
     *
     * @remarks
     * Returns a webhook configured in an organization. To get only the webhook `config` properties, see "[Get a webhook configuration for an organization](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#get-an-organization-webhook} - API method documentation
     */
    orgsGetWebhook(req: operations.OrgsGetWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetWebhookResponse>;
    /**
     * Get a webhook configuration for an organization
     *
     * @remarks
     * Returns the webhook configuration for an organization. To get more information about the webhook, including the `active` state and `events`, use "[Get an organization webhook ](/rest/reference/orgs#get-an-organization-webhook)."
     *
     * Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:read` permission.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#get-a-webhook-configuration-for-an-organization} - API method documentation
     */
    orgsGetWebhookConfigForOrg(req: operations.OrgsGetWebhookConfigForOrgRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetWebhookConfigForOrgResponse>;
    /**
     * List organizations
     *
     * @remarks
     * Lists all organizations, in the order that they were created on GitHub Enterprise Server.
     *
     * **Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@3.1/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of organizations.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#list-organizations} - API method documentation
     */
    orgsList(req: operations.OrgsListRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListResponse>;
    /**
     * List app installations for an organization
     *
     * @remarks
     * Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. You must be an organization owner with `admin:read` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#list-app-installations-for-an-organization} - API method documentation
     */
    orgsListAppInstallations(req: operations.OrgsListAppInstallationsRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListAppInstallationsResponse>;
    /**
     * List organizations for the authenticated user
     *
     * @remarks
     * List organizations for the authenticated user.
     *
     * **OAuth scope requirements**
     *
     * This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#list-organizations-for-the-authenticated-user} - API method documentation
     */
    orgsListForAuthenticatedUser(req: operations.OrgsListForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListForAuthenticatedUserResponse>;
    /**
     * List organizations for a user
     *
     * @remarks
     * List [public organization memberships](https://docs.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.
     *
     * This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#list-organizations-for-the-authenticated-user) API instead.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#list-organizations-for-a-user} - API method documentation
     */
    orgsListForUser(req: operations.OrgsListForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListForUserResponse>;
    /**
     * List organization members
     *
     * @remarks
     * List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#list-organization-members} - API method documentation
     */
    orgsListMembers(req: operations.OrgsListMembersRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListMembersResponse>;
    /**
     * List organization memberships for the authenticated user
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#list-organization-memberships-for-the-authenticated-user} - API method documentation
     */
    orgsListMembershipsForAuthenticatedUser(req: operations.OrgsListMembershipsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListMembershipsForAuthenticatedUserResponse>;
    /**
     * List outside collaborators for an organization
     *
     * @remarks
     * List all users who are outside collaborators of an organization.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#list-outside-collaborators-for-an-organization} - API method documentation
     */
    orgsListOutsideCollaborators(req: operations.OrgsListOutsideCollaboratorsRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListOutsideCollaboratorsResponse>;
    /**
     * List public organization members
     *
     * @remarks
     * Members of an organization can choose to have their membership publicized or not.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#list-public-organization-members} - API method documentation
     */
    orgsListPublicMembers(req: operations.OrgsListPublicMembersRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListPublicMembersResponse>;
    /**
     * List organization webhooks
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#list-organization-webhooks} - API method documentation
     */
    orgsListWebhooks(req: operations.OrgsListWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListWebhooksResponse>;
    /**
     * Ping an organization webhook
     *
     * @remarks
     * This will trigger a [ping event](https://docs.github.com/enterprise-server@3.1/webhooks/#ping-event) to be sent to the hook.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#ping-an-organization-webhook} - API method documentation
     */
    orgsPingWebhook(req: operations.OrgsPingWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsPingWebhookResponse>;
    /**
     * Remove an organization member
     *
     * @remarks
     * Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#remove-an-organization-member} - API method documentation
     */
    orgsRemoveMember(req: operations.OrgsRemoveMemberRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemoveMemberResponse>;
    /**
     * Remove organization membership for a user
     *
     * @remarks
     * In order to remove a user's membership with an organization, the authenticated user must be an organization owner.
     *
     * If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#remove-organization-membership-for-a-user} - API method documentation
     */
    orgsRemoveMembershipForUser(req: operations.OrgsRemoveMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemoveMembershipForUserResponse>;
    /**
     * Remove outside collaborator from an organization
     *
     * @remarks
     * Removing a user from this list will remove them from all the organization's repositories.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#remove-outside-collaborator-from-an-organization} - API method documentation
     */
    orgsRemoveOutsideCollaborator(req: operations.OrgsRemoveOutsideCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemoveOutsideCollaboratorResponse>;
    /**
     * Remove public organization membership for the authenticated user
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user} - API method documentation
     */
    orgsRemovePublicMembershipForAuthenticatedUser(req: operations.OrgsRemovePublicMembershipForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemovePublicMembershipForAuthenticatedUserResponse>;
    /**
     * Set organization membership for a user
     *
     * @remarks
     * Only authenticated organization owners can add a member to the organization or update the member's role.
     *
     * *   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
     *
     * *   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.
     *
     * **Rate limits**
     *
     * To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#set-organization-membership-for-a-user} - API method documentation
     */
    orgsSetMembershipForUser(req: operations.OrgsSetMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsSetMembershipForUserResponse>;
    /**
     * Set public organization membership for the authenticated user
     *
     * @remarks
     * The user can publicize their own membership. (A user cannot publicize the membership for another user.)
     *
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.1/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user} - API method documentation
     */
    orgsSetPublicMembershipForAuthenticatedUser(req: operations.OrgsSetPublicMembershipForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsSetPublicMembershipForAuthenticatedUserResponse>;
    /**
     * Update an organization
     *
     * @remarks
     * **Parameter Deprecation Notice:** GitHub Enterprise Server will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).
     *
     * Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs/#update-an-organization} - API method documentation
     */
    orgsUpdate(req: operations.OrgsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUpdateResponse>;
    /**
     * Update an organization membership for the authenticated user
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user} - API method documentation
     */
    orgsUpdateMembershipForAuthenticatedUser(req: operations.OrgsUpdateMembershipForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUpdateMembershipForAuthenticatedUserResponse>;
    /**
     * Update an organization webhook
     *
     * @remarks
     * Updates a webhook configured in an organization. When you update a webhook, the `secret` will be overwritten. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for an organization](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#update-an-organization-webhook} - API method documentation
     */
    orgsUpdateWebhook(req: operations.OrgsUpdateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUpdateWebhookResponse>;
    /**
     * Update a webhook configuration for an organization
     *
     * @remarks
     * Updates the webhook configuration for an organization. To update more information about the webhook, including the `active` state and `events`, use "[Update an organization webhook ](/rest/reference/orgs#update-an-organization-webhook)."
     *
     * Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:write` permission.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#update-a-webhook-configuration-for-an-organization} - API method documentation
     */
    orgsUpdateWebhookConfigForOrg(req: operations.OrgsUpdateWebhookConfigForOrgRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUpdateWebhookConfigForOrgResponse>;
}
