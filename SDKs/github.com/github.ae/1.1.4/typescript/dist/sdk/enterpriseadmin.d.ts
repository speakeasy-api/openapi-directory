import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Enterprise Administration
 */
export declare class EnterpriseAdmin {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a self-hosted runner to a group for an enterprise
     *
     * @remarks
     * Adds a self-hosted runner to a runner group configured in an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise`
     * scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-enterprise} - API method documentation
     */
    enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise(req: operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse>;
    /**
     * Create a global webhook
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#create-a-global-webhook} - API method documentation
     */
    enterpriseAdminCreateGlobalWebhook(req: operations.EnterpriseAdminCreateGlobalWebhookRequestBody, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateGlobalWebhookResponse>;
    /**
     * Create an impersonation OAuth token
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#create-an-impersonation-oauth-token} - API method documentation
     */
    enterpriseAdminCreateImpersonationOAuthToken(req: operations.EnterpriseAdminCreateImpersonationOAuthTokenRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateImpersonationOAuthTokenResponse>;
    /**
     * Create an organization
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#create-an-organization} - API method documentation
     */
    enterpriseAdminCreateOrg(req: operations.EnterpriseAdminCreateOrgRequestBody, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateOrgResponse>;
    /**
     * Create a pre-receive environment
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#create-a-pre-receive-environment} - API method documentation
     */
    enterpriseAdminCreatePreReceiveEnvironment(req: operations.EnterpriseAdminCreatePreReceiveEnvironmentRequestBody, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreatePreReceiveEnvironmentResponse>;
    /**
     * Create a registration token for an enterprise
     *
     * @remarks
     * Returns a token that you can pass to the `config` script. The token expires after one hour.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * #### Example using registration token
     *
     * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
     *
     * ```
     * ./config.sh --url https://github.com/enterprises/octo-enterprise --token TOKEN
     * ```
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#create-a-registration-token-for-an-enterprise} - API method documentation
     */
    enterpriseAdminCreateRegistrationTokenForEnterprise(req: operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse>;
    /**
     * Create a remove token for an enterprise
     *
     * @remarks
     * Returns a token that you can pass to the `config` script to remove a self-hosted runner from an enterprise. The token expires after one hour.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * #### Example using remove token
     *
     * To remove your self-hosted runner from an enterprise, replace `TOKEN` with the remove token provided by this
     * endpoint.
     *
     * ```
     * ./config.sh remove --token TOKEN
     * ```
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#create-a-remove-token-for-an-enterprise} - API method documentation
     */
    enterpriseAdminCreateRemoveTokenForEnterprise(req: operations.EnterpriseAdminCreateRemoveTokenForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateRemoveTokenForEnterpriseResponse>;
    /**
     * Create a self-hosted runner group for an enterprise
     *
     * @remarks
     * Creates a new self-hosted runner group for an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#create-self-hosted-runner-group-for-an-enterprise} - API method documentation
     */
    enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise(req: operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse>;
    /**
     * Delete a global webhook
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#delete-a-global-webhook} - API method documentation
     */
    enterpriseAdminDeleteGlobalWebhook(req: operations.EnterpriseAdminDeleteGlobalWebhookRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteGlobalWebhookResponse>;
    /**
     * Delete an impersonation OAuth token
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#delete-an-impersonation-oauth-token} - API method documentation
     */
    enterpriseAdminDeleteImpersonationOAuthToken(req: operations.EnterpriseAdminDeleteImpersonationOAuthTokenRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteImpersonationOAuthTokenResponse>;
    /**
     * Delete a personal access token
     *
     * @remarks
     * Deletes a personal access token. Returns a `403 - Forbidden` status when a personal access token is in use. For example, if you access this endpoint with the same personal access token that you are trying to delete, you will receive this error.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#delete-a-personal-access-token} - API method documentation
     */
    enterpriseAdminDeletePersonalAccessToken(req: operations.EnterpriseAdminDeletePersonalAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeletePersonalAccessTokenResponse>;
    /**
     * Delete a pre-receive environment
     *
     * @remarks
     * If you attempt to delete an environment that cannot be deleted, you will receive a `422 Unprocessable Entity` response.
     *
     * The possible error messages are:
     *
     * *   _Cannot modify or delete the default environment_
     * *   _Cannot delete environment that has hooks_
     * *   _Cannot delete environment when download is in progress_
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#delete-a-pre-receive-environment} - API method documentation
     */
    enterpriseAdminDeletePreReceiveEnvironment(req: operations.EnterpriseAdminDeletePreReceiveEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeletePreReceiveEnvironmentResponse>;
    /**
     * Delete a public key
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#delete-a-public-key} - API method documentation
     */
    enterpriseAdminDeletePublicKey(req: operations.EnterpriseAdminDeletePublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeletePublicKeyResponse>;
    /**
     * Delete a self-hosted runner from an enterprise
     *
     * @remarks
     * Forces the removal of a self-hosted runner from an enterprise. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#delete-self-hosted-runner-from-an-enterprise} - API method documentation
     */
    enterpriseAdminDeleteSelfHostedRunnerFromEnterprise(req: operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse>;
    /**
     * Delete a self-hosted runner group from an enterprise
     *
     * @remarks
     * Deletes a self-hosted runner group for an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-enterprise} - API method documentation
     */
    enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise(req: operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse>;
    /**
     * Delete a user
     *
     * @remarks
     * Deleting a user will delete all their repositories, gists, applications, and personal settings. [Suspending a user](https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#suspend-a-user) is often a better option.
     *
     * You can delete any user account except your own.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#delete-a-user} - API method documentation
     */
    enterpriseAdminDeleteUser(req: operations.EnterpriseAdminDeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteUserResponse>;
    /**
     * Disable a selected organization for GitHub Actions in an enterprise
     *
     * @remarks
     * Removes an organization from the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#disable-a-selected-organization-for-github-actions-in-an-enterprise} - API method documentation
     */
    enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise(req: operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse>;
    /**
     * Enable a selected organization for GitHub Actions in an enterprise
     *
     * @remarks
     * Adds an organization to the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#enable-a-selected-organization-for-github-actions-in-an-enterprise} - API method documentation
     */
    enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise(req: operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse>;
    /**
     * Get all statistics
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#get-statistics} - API method documentation
     */
    enterpriseAdminGetAllStats(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetAllStatsResponse>;
    /**
     * Get allowed actions for an enterprise
     *
     * @remarks
     * Gets the selected actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#get-allowed-actions-for-an-enterprise} - API method documentation
     */
    enterpriseAdminGetAllowedActionsEnterprise(req: operations.EnterpriseAdminGetAllowedActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetAllowedActionsEnterpriseResponse>;
    /**
     * Get the global announcement banner
     *
     * @remarks
     * Gets the current message and expiration date of the global announcement banner in your enterprise.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/enterprise-admin/announcement#get-the-global-announcement-banner} - API method documentation
     */
    enterpriseAdminGetAnnouncement(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetAnnouncementResponse>;
    /**
     * Get the audit log for an enterprise
     *
     * @remarks
     * Gets the audit log for an enterprise. To use this endpoint, you must be an enterprise admin, and you must use an access token with the `admin:enterprise` scope.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#get-the-audit-log-for-an-enterprise} - API method documentation
     */
    enterpriseAdminGetAuditLog(req: operations.EnterpriseAdminGetAuditLogRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetAuditLogResponse>;
    /**
     * Get comment statistics
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#get-comment-statistics} - API method documentation
     */
    enterpriseAdminGetCommentStats(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetCommentStatsResponse>;
    /**
     * Get the download status for a pre-receive environment
     *
     * @remarks
     * In addition to seeing the download status at the "[Get a pre-receive environment](#get-a-pre-receive-environment)" endpoint, there is also this separate endpoint for just the download status.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#get-the-download-status-for-a-pre-receive-environment} - API method documentation
     */
    enterpriseAdminGetDownloadStatusForPreReceiveEnvironment(req: operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse>;
    /**
     * Get gist statistics
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#get-gist-statistics} - API method documentation
     */
    enterpriseAdminGetGistStats(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetGistStatsResponse>;
    /**
     * Get GitHub Actions permissions for an enterprise
     *
     * @remarks
     * Gets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#get-github-actions-permissions-for-an-enterprise} - API method documentation
     */
    enterpriseAdminGetGithubActionsPermissionsEnterprise(req: operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse>;
    /**
     * Get a global webhook
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#get-a-global-webhook} - API method documentation
     */
    enterpriseAdminGetGlobalWebhook(req: operations.EnterpriseAdminGetGlobalWebhookRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetGlobalWebhookResponse>;
    /**
     * Get hooks statistics
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#get-hooks-statistics} - API method documentation
     */
    enterpriseAdminGetHooksStats(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetHooksStatsResponse>;
    /**
     * Get issue statistics
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#get-issues-statistics} - API method documentation
     */
    enterpriseAdminGetIssueStats(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetIssueStatsResponse>;
    /**
     * Get license information
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#get-license-information} - API method documentation
     */
    enterpriseAdminGetLicenseInformation(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetLicenseInformationResponse>;
    /**
     * Get milestone statistics
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#get-milestone-statistics} - API method documentation
     */
    enterpriseAdminGetMilestoneStats(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetMilestoneStatsResponse>;
    /**
     * Get organization statistics
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#get-organization-statistics} - API method documentation
     */
    enterpriseAdminGetOrgStats(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetOrgStatsResponse>;
    /**
     * Get pages statistics
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#get-pages-statistics} - API method documentation
     */
    enterpriseAdminGetPagesStats(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetPagesStatsResponse>;
    /**
     * Get a pre-receive environment
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#get-a-pre-receive-environment} - API method documentation
     */
    enterpriseAdminGetPreReceiveEnvironment(req: operations.EnterpriseAdminGetPreReceiveEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetPreReceiveEnvironmentResponse>;
    /**
     * Get pull request statistics
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#get-pull-requests-statistics} - API method documentation
     */
    enterpriseAdminGetPullRequestStats(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetPullRequestStatsResponse>;
    /**
     * Get repository statistics
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#get-repository-statistics} - API method documentation
     */
    enterpriseAdminGetRepoStats(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetRepoStatsResponse>;
    /**
     * Get a self-hosted runner for an enterprise
     *
     * @remarks
     * Gets a specific self-hosted runner configured in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#get-a-self-hosted-runner-for-an-enterprise} - API method documentation
     */
    enterpriseAdminGetSelfHostedRunnerForEnterprise(req: operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse>;
    /**
     * Get a self-hosted runner group for an enterprise
     *
     * @remarks
     * Gets a specific self-hosted runner group for an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#get-a-self-hosted-runner-group-for-an-enterprise} - API method documentation
     */
    enterpriseAdminGetSelfHostedRunnerGroupForEnterprise(req: operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse>;
    /**
     * Get users statistics
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#get-users-statistics} - API method documentation
     */
    enterpriseAdminGetUserStats(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetUserStatsResponse>;
    /**
     * List global webhooks
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#list-global-webhooks} - API method documentation
     */
    enterpriseAdminListGlobalWebhooks(req: operations.EnterpriseAdminListGlobalWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListGlobalWebhooksResponse>;
    /**
     * List personal access tokens
     *
     * @remarks
     * Lists personal access tokens for all users, including admin users.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#list-personal-access-tokens} - API method documentation
     */
    enterpriseAdminListPersonalAccessTokens(req: operations.EnterpriseAdminListPersonalAccessTokensRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListPersonalAccessTokensResponse>;
    /**
     * List pre-receive environments
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#list-pre-receive-environments} - API method documentation
     */
    enterpriseAdminListPreReceiveEnvironments(req: operations.EnterpriseAdminListPreReceiveEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListPreReceiveEnvironmentsResponse>;
    /**
     * List public keys
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#list-public-keys} - API method documentation
     */
    enterpriseAdminListPublicKeys(req: operations.EnterpriseAdminListPublicKeysRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListPublicKeysResponse>;
    /**
     * List runner applications for an enterprise
     *
     * @remarks
     * Lists binaries for the runner application that you can download and run.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#list-runner-applications-for-an-enterprise} - API method documentation
     */
    enterpriseAdminListRunnerApplicationsForEnterprise(req: operations.EnterpriseAdminListRunnerApplicationsForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListRunnerApplicationsForEnterpriseResponse>;
    /**
     * List selected organizations enabled for GitHub Actions in an enterprise
     *
     * @remarks
     * Lists the organizations that are selected to have GitHub Actions enabled in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#list-selected-organizations-enabled-for-github-actions-in-an-enterprise} - API method documentation
     */
    enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise(req: operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse>;
    /**
     * List self-hosted runner groups for an enterprise
     *
     * @remarks
     * Lists all self-hosted runner groups for an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#list-self-hosted-runner-groups-for-an-enterprise} - API method documentation
     */
    enterpriseAdminListSelfHostedRunnerGroupsForEnterprise(req: operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse>;
    /**
     * List self-hosted runners for an enterprise
     *
     * @remarks
     * Lists all self-hosted runners configured for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#list-self-hosted-runners-for-an-enterprise} - API method documentation
     */
    enterpriseAdminListSelfHostedRunnersForEnterprise(req: operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse>;
    /**
     * List self-hosted runners in a group for an enterprise
     *
     * @remarks
     * Lists the self-hosted runners that are in a specific enterprise group.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-enterprise} - API method documentation
     */
    enterpriseAdminListSelfHostedRunnersInGroupForEnterprise(req: operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse>;
    /**
     * Ping a global webhook
     *
     * @remarks
     * This will trigger a [ping event](https://docs.github.com/github-ae@latest/webhooks/#ping-event) to be sent to the webhook.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#ping-a-global-webhook} - API method documentation
     */
    enterpriseAdminPingGlobalWebhook(req: operations.EnterpriseAdminPingGlobalWebhookRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminPingGlobalWebhookResponse>;
    /**
     * Remove the global announcement banner
     *
     * @remarks
     * Removes the global announcement banner in your enterprise.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/enterprise-admin/announcement#remove-the-global-announcement-banner} - API method documentation
     */
    enterpriseAdminRemoveAnnouncement(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemoveAnnouncementResponse>;
    /**
     * Remove a self-hosted runner from a group for an enterprise
     *
     * @remarks
     * Removes a self-hosted runner from a group configured in an enterprise. The runner is then returned to the default group.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-enterprise} - API method documentation
     */
    enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise(req: operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse>;
    /**
     * Set allowed actions for an enterprise
     *
     * @remarks
     * Sets the actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#set-allowed-actions-for-an-enterprise} - API method documentation
     */
    enterpriseAdminSetAllowedActionsEnterprise(req: operations.EnterpriseAdminSetAllowedActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetAllowedActionsEnterpriseResponse>;
    /**
     * Set the global announcement banner
     *
     * @remarks
     * Sets the message and expiration time for the global announcement banner in your enterprise.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/enterprise-admin/announcement#set-the-global-announcement-banner} - API method documentation
     */
    enterpriseAdminSetAnnouncement(req: shared.Announcement, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetAnnouncementResponse>;
    /**
     * Set GitHub Actions permissions for an enterprise
     *
     * @remarks
     * Sets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#set-github-actions-permissions-for-an-enterprise} - API method documentation
     */
    enterpriseAdminSetGithubActionsPermissionsEnterprise(req: operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse>;
    /**
     * Set selected organizations enabled for GitHub Actions in an enterprise
     *
     * @remarks
     * Replaces the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#set-selected-organizations-enabled-for-github-actions-in-an-enterprise} - API method documentation
     */
    enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise(req: operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse>;
    /**
     * Set self-hosted runners in a group for an enterprise
     *
     * @remarks
     * Replaces the list of self-hosted runners that are part of an enterprise runner group.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-enterprise} - API method documentation
     */
    enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise(req: operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse>;
    /**
     * Start a pre-receive environment download
     *
     * @remarks
     * Triggers a new download of the environment tarball from the environment's `image_url`. When the download is finished, the newly downloaded tarball will overwrite the existing environment.
     *
     * If a download cannot be triggered, you will receive a `422 Unprocessable Entity` response.
     *
     * The possible error messages are:
     *
     * * _Cannot modify or delete the default environment_
     * * _Can not start a new download when a download is in progress_
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#start-a-pre-receive-environment-download} - API method documentation
     */
    enterpriseAdminStartPreReceiveEnvironmentDownload(req: operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse>;
    /**
     * Suspend a user
     *
     * @remarks
     * If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://docs.github.com/github-ae@latest/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap), Active Directory LDAP-authenticated users cannot be suspended through this API. If you attempt to suspend an Active Directory LDAP-authenticated user through this API, it will return a `403` response.
     *
     * You can suspend any user account except your own.
     *
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/github-ae@latest/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#suspend-a-user} - API method documentation
     */
    enterpriseAdminSuspendUser(req: operations.EnterpriseAdminSuspendUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSuspendUserResponse>;
    /**
     * Unsuspend a user
     *
     * @remarks
     * If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://docs.github.com/github-ae@latest/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap), this API is disabled and will return a `403` response. Active Directory LDAP-authenticated users cannot be unsuspended using the API.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#unsuspend-a-user} - API method documentation
     */
    enterpriseAdminUnsuspendUser(req: operations.EnterpriseAdminUnsuspendUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUnsuspendUserResponse>;
    /**
     * Update a global webhook
     *
     * @remarks
     * Parameters that are not provided will be overwritten with the default value or removed if no default exists.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#update-a-global-webhook} - API method documentation
     */
    enterpriseAdminUpdateGlobalWebhook(req: operations.EnterpriseAdminUpdateGlobalWebhookRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateGlobalWebhookResponse>;
    /**
     * Update an organization name
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#update-an-organization-name} - API method documentation
     */
    enterpriseAdminUpdateOrgName(req: operations.EnterpriseAdminUpdateOrgNameRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateOrgNameResponse>;
    /**
     * Update a pre-receive environment
     *
     * @remarks
     * You cannot modify the default environment. If you attempt to modify the default environment, you will receive a `422 Unprocessable Entity` response.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/enterprise-admin#update-a-pre-receive-environment} - API method documentation
     */
    enterpriseAdminUpdatePreReceiveEnvironment(req: operations.EnterpriseAdminUpdatePreReceiveEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdatePreReceiveEnvironmentResponse>;
    /**
     * Update a self-hosted runner group for an enterprise
     *
     * @remarks
     * Updates the `name` and `visibility` of a self-hosted runner group in an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/github-ae@latest/rest/reference/actions#update-a-self-hosted-runner-group-for-an-enterprise} - API method documentation
     */
    enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise(req: operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse>;
}
