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
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#check-organization-membership-for-a-user} - API method documentation
     */
    orgsCheckMembershipForUser(req: operations.OrgsCheckMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCheckMembershipForUserResponse>;
    /**
     * Convert an organization member to outside collaborator
     *
     * @remarks
     * When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://docs.github.com/github-ae@latest/articles/converting-an-organization-member-to-an-outside-collaborator/)". Converting an organization member to an outside collaborator may be restricted by enterprise administrators. For more information, see "[Enforcing repository management policies in your enterprise](https://docs.github.com/github-ae@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)."
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator} - API method documentation
     */
    orgsConvertMemberToOutsideCollaborator(req: operations.OrgsConvertMemberToOutsideCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.OrgsConvertMemberToOutsideCollaboratorResponse>;
    /**
     * Create an organization webhook
     *
     * @remarks
     * Here's how you can create a hook that posts payloads in JSON format:
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#create-an-organization-webhook} - API method documentation
     */
    orgsCreateWebhook(req: operations.OrgsCreateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCreateWebhookResponse>;
    /**
     * Delete an organization webhook
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#delete-an-organization-webhook} - API method documentation
     */
    orgsDeleteWebhook(req: operations.OrgsDeleteWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsDeleteWebhookResponse>;
    /**
     * Get an organization
     *
     * @remarks
     * To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://docs.github.com/github-ae@latest/articles/securing-your-account-with-two-factor-authentication-2fa/).
     *
     * GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub AE plan. See "[Authenticating with GitHub Apps](https://docs.github.com/github-ae@latest/apps/building-github-apps/authenticating-with-github-apps/)" for details. For an example response, see 'Response with GitHub AE plan information' below."
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#get-an-organization} - API method documentation
     */
    orgsGet(req: operations.OrgsGetRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetResponse>;
    /**
     * Get the audit log for an organization
     *
     * @remarks
     * Gets the audit log for an organization. For more information, see "[Reviewing the audit log for your organization](https://docs.github.com/github-ae@latest/github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization)."
     *
     * This endpoint is available for organizations on GitHub Enterprise Cloud. To use this endpoint, you must be an organization owner, and you must use an access token with the `admin:org` scope. GitHub Apps must have the `organization_administration` read permission to use this endpoint.
     *
     * By default, the response includes up to 30 events from the past three months. Use the `phrase` parameter to filter results and retrieve older events. For example, use the `phrase` parameter with the `created` qualifier to filter events based on when the events occurred. For more information, see "[Reviewing the audit log for your organization](https://docs.github.com/github-ae@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#searching-the-audit-log)."
     *
     * Use pagination to retrieve fewer or more than 30 events. For more information, see "[Resources in the REST API](https://docs.github.com/github-ae@latest/rest/overview/resources-in-the-rest-api#pagination)."
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#get-audit-log} - API method documentation
     */
    orgsGetAuditLog(req: operations.OrgsGetAuditLogRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetAuditLogResponse>;
    /**
     * Get an organization membership for the authenticated user
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user} - API method documentation
     */
    orgsGetMembershipForAuthenticatedUser(req: operations.OrgsGetMembershipForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetMembershipForAuthenticatedUserResponse>;
    /**
     * Get organization membership for a user
     *
     * @remarks
     * In order to get a user's membership with an organization, the authenticated user must be an organization member. The `state` parameter in the response can be used to identify the user's membership status.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#get-organization-membership-for-a-user} - API method documentation
     */
    orgsGetMembershipForUser(req: operations.OrgsGetMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetMembershipForUserResponse>;
    /**
     * Get an organization webhook
     *
     * @remarks
     * Returns a webhook configured in an organization. To get only the webhook `config` properties, see "[Get a webhook configuration for an organization](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization)."
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#get-an-organization-webhook} - API method documentation
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
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#get-a-webhook-configuration-for-an-organization} - API method documentation
     */
    orgsGetWebhookConfigForOrg(req: operations.OrgsGetWebhookConfigForOrgRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetWebhookConfigForOrgResponse>;
    /**
     * Get a webhook delivery for an organization webhook
     *
     * @remarks
     * Returns a delivery for a webhook configured in an organization.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#get-a-webhook-delivery-for-an-organization-webhook} - API method documentation
     */
    orgsGetWebhookDelivery(req: operations.OrgsGetWebhookDeliveryRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetWebhookDeliveryResponse>;
    /**
     * List organizations
     *
     * @remarks
     * Lists all organizations, in the order that they were created on GitHub AE.
     *
     * **Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/github-ae@latest/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of organizations.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#list-organizations} - API method documentation
     */
    orgsList(req: operations.OrgsListRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListResponse>;
    /**
     * List app installations for an organization
     *
     * @remarks
     * Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. You must be an organization owner with `admin:read` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#list-app-installations-for-an-organization} - API method documentation
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
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#list-organizations-for-the-authenticated-user} - API method documentation
     */
    orgsListForAuthenticatedUser(req: operations.OrgsListForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListForAuthenticatedUserResponse>;
    /**
     * List organizations for a user
     *
     * @remarks
     * List [public organization memberships](https://docs.github.com/github-ae@latest/articles/publicizing-or-concealing-organization-membership) for the specified user.
     *
     * This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/github-ae@latest/rest/reference/orgs#list-organizations-for-the-authenticated-user) API instead.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#list-organizations-for-a-user} - API method documentation
     */
    orgsListForUser(req: operations.OrgsListForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListForUserResponse>;
    /**
     * List organization members
     *
     * @remarks
     * List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#list-organization-members} - API method documentation
     */
    orgsListMembers(req: operations.OrgsListMembersRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListMembersResponse>;
    /**
     * List organization memberships for the authenticated user
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#list-organization-memberships-for-the-authenticated-user} - API method documentation
     */
    orgsListMembershipsForAuthenticatedUser(req: operations.OrgsListMembershipsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListMembershipsForAuthenticatedUserResponse>;
    /**
     * List outside collaborators for an organization
     *
     * @remarks
     * List all users who are outside collaborators of an organization.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#list-outside-collaborators-for-an-organization} - API method documentation
     */
    orgsListOutsideCollaborators(req: operations.OrgsListOutsideCollaboratorsRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListOutsideCollaboratorsResponse>;
    /**
     * List deliveries for an organization webhook
     *
     * @remarks
     * Returns a list of webhook deliveries for a webhook configured in an organization.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#list-deliveries-for-an-organization-webhook} - API method documentation
     */
    orgsListWebhookDeliveries(req: operations.OrgsListWebhookDeliveriesRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListWebhookDeliveriesResponse>;
    /**
     * List organization webhooks
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#list-organization-webhooks} - API method documentation
     */
    orgsListWebhooks(req: operations.OrgsListWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListWebhooksResponse>;
    /**
     * Ping an organization webhook
     *
     * @remarks
     * This will trigger a [ping event](https://docs.github.com/github-ae@latest/webhooks/#ping-event) to be sent to the hook.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#ping-an-organization-webhook} - API method documentation
     */
    orgsPingWebhook(req: operations.OrgsPingWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsPingWebhookResponse>;
    /**
     * Redeliver a delivery for an organization webhook
     *
     * @remarks
     * Redeliver a delivery for a webhook configured in an organization.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#redeliver-a-delivery-for-an-organization-webhook} - API method documentation
     */
    orgsRedeliverWebhookDelivery(req: operations.OrgsRedeliverWebhookDeliveryRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRedeliverWebhookDeliveryResponse>;
    /**
     * Remove an organization member
     *
     * @remarks
     * Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#remove-an-organization-member} - API method documentation
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
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#remove-organization-membership-for-a-user} - API method documentation
     */
    orgsRemoveMembershipForUser(req: operations.OrgsRemoveMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemoveMembershipForUserResponse>;
    /**
     * Remove outside collaborator from an organization
     *
     * @remarks
     * Removing a user from this list will remove them from all the organization's repositories.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#remove-outside-collaborator-from-an-organization} - API method documentation
     */
    orgsRemoveOutsideCollaborator(req: operations.OrgsRemoveOutsideCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemoveOutsideCollaboratorResponse>;
    /**
     * Set organization membership for a user
     *
     * @remarks
     * Only authenticated organization owners can add a member to the organization or update the member's role.
     *
     * *   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/github-ae@latest/rest/reference/orgs#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
     *
     * *   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.
     *
     * **Rate limits**
     *
     * To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#set-organization-membership-for-a-user} - API method documentation
     */
    orgsSetMembershipForUser(req: operations.OrgsSetMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsSetMembershipForUserResponse>;
    /**
     * Update an organization
     *
     * @remarks
     * **Parameter Deprecation Notice:** GitHub AE will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).
     *
     * Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#update-an-organization} - API method documentation
     */
    orgsUpdate(req: operations.OrgsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUpdateResponse>;
    /**
     * Update an organization membership for the authenticated user
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user} - API method documentation
     */
    orgsUpdateMembershipForAuthenticatedUser(req: operations.OrgsUpdateMembershipForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUpdateMembershipForAuthenticatedUserResponse>;
    /**
     * Update an organization webhook
     *
     * @remarks
     * Updates a webhook configured in an organization. When you update a webhook, the `secret` will be overwritten. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for an organization](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization)."
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#update-an-organization-webhook} - API method documentation
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
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/orgs#update-a-webhook-configuration-for-an-organization} - API method documentation
     */
    orgsUpdateWebhookConfigForOrg(req: operations.OrgsUpdateWebhookConfigForOrgRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUpdateWebhookConfigForOrgResponse>;
}
