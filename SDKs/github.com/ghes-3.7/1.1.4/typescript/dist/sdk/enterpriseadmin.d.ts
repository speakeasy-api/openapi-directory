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
     * Add an authorized SSH key
     *
     * @remarks
     * **Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#add-an-authorized-ssh-key} - API method documentation
     */
    enterpriseAdminAddAuthorizedSshKey(req: operations.EnterpriseAdminAddAuthorizedSshKeyRequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminAddAuthorizedSshKeyResponse>;
    /**
     * Add custom labels to a self-hosted runner for an enterprise
     *
     * @remarks
     * Add custom labels to a self-hosted runner configured in an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-an-enterprise} - API method documentation
     */
    enterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise(req: operations.EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseResponse>;
    /**
     * Add organization access to a self-hosted runner group in an enterprise
     *
     * @remarks
     * Adds an organization to the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#add-organization-access-to-a-self-hosted-runner-group-in-an-enterprise} - API method documentation
     */
    enterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise(req: operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse>;
    /**
     * Add a self-hosted runner to a group for an enterprise
     *
     * @remarks
     * Adds a self-hosted runner to a runner group configured in an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise`
     * scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-enterprise} - API method documentation
     */
    enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise(req: operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse>;
    /**
     * Create a GitHub license
     *
     * @remarks
     * When you boot a GitHub instance for the first time, you can use the following endpoint to upload a license.
     *
     * Note that you need to `POST` to [`/setup/api/configure`](https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#start-a-configuration-process) to start the actual configuration process.
     *
     * When using this endpoint, your GitHub instance must have a password set. This can be accomplished two ways:
     *
     * 1.  If you're working directly with the API before accessing the web interface, you must pass in the password parameter to set your password.
     * 2.  If you set up your instance via the web interface before accessing the API, your calls to this endpoint do not need the password parameter.
     *
     * **Note:** The request body for this operation must be submitted as `multipart/form-data` data. You can can reference the license file by prefixing the filename with the `@` symbol using `curl`. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#-F).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#create-a-github-enterprise-server-license} - API method documentation
     */
    enterpriseAdminCreateEnterpriseServerLicense(req: operations.EnterpriseAdminCreateEnterpriseServerLicenseRequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateEnterpriseServerLicenseResponse>;
    /**
     * Create a global webhook
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#create-a-global-webhook} - API method documentation
     */
    enterpriseAdminCreateGlobalWebhook(req: operations.EnterpriseAdminCreateGlobalWebhookRequestBody, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateGlobalWebhookResponse>;
    /**
     * Create an impersonation OAuth token
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#create-an-impersonation-oauth-token} - API method documentation
     */
    enterpriseAdminCreateImpersonationOAuthToken(req: operations.EnterpriseAdminCreateImpersonationOAuthTokenRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateImpersonationOAuthTokenResponse>;
    /**
     * Create an organization
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#create-an-organization} - API method documentation
     */
    enterpriseAdminCreateOrg(req: operations.EnterpriseAdminCreateOrgRequestBody, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateOrgResponse>;
    /**
     * Create a pre-receive environment
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#create-a-pre-receive-environment} - API method documentation
     */
    enterpriseAdminCreatePreReceiveEnvironment(req: operations.EnterpriseAdminCreatePreReceiveEnvironmentRequestBody, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreatePreReceiveEnvironmentResponse>;
    /**
     * Create a pre-receive hook
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#create-a-pre-receive-hook} - API method documentation
     */
    enterpriseAdminCreatePreReceiveHook(req: operations.EnterpriseAdminCreatePreReceiveHookRequestBody, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreatePreReceiveHookResponse>;
    /**
     * Create a registration token for an enterprise
     *
     * @remarks
     * Returns a token that you can pass to the `config` script. The token expires after one hour.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * #### Example using registration token
     *
     * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
     *
     * ```
     * ./config.sh --url https://github.com/enterprises/octo-enterprise --token TOKEN
     * ```
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#create-a-registration-token-for-an-enterprise} - API method documentation
     */
    enterpriseAdminCreateRegistrationTokenForEnterprise(req: operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse>;
    /**
     * Create a remove token for an enterprise
     *
     * @remarks
     * Returns a token that you can pass to the `config` script to remove a self-hosted runner from an enterprise. The token expires after one hour.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
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
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#create-a-remove-token-for-an-enterprise} - API method documentation
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
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#create-self-hosted-runner-group-for-an-enterprise} - API method documentation
     */
    enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise(req: operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse>;
    /**
     * Create a user
     *
     * @remarks
     * If an external authentication mechanism is used, the login name should match the login name in the external system. If you are using LDAP authentication, you should also [update the LDAP mapping](https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user) for the user.
     *
     * The login name will be normalized to only contain alphanumeric characters or single hyphens. For example, if you send `"octo_cat"` as the login, a user named `"octo-cat"` will be created.
     *
     * If the login name or email address is already associated with an account, the server will return a `422` response.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#create-a-user} - API method documentation
     */
    enterpriseAdminCreateUser(req: operations.EnterpriseAdminCreateUserRequestBody, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateUserResponse>;
    /**
     * Delete a global webhook
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#delete-a-global-webhook} - API method documentation
     */
    enterpriseAdminDeleteGlobalWebhook(req: operations.EnterpriseAdminDeleteGlobalWebhookRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteGlobalWebhookResponse>;
    /**
     * Delete an impersonation OAuth token
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#delete-an-impersonation-oauth-token} - API method documentation
     */
    enterpriseAdminDeleteImpersonationOAuthToken(req: operations.EnterpriseAdminDeleteImpersonationOAuthTokenRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteImpersonationOAuthTokenResponse>;
    /**
     * Delete a personal access token
     *
     * @remarks
     * Deletes a personal access token. Returns a `403 - Forbidden` status when a personal access token is in use. For example, if you access this endpoint with the same personal access token that you are trying to delete, you will receive this error.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#delete-a-personal-access-token} - API method documentation
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
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#delete-a-pre-receive-environment} - API method documentation
     */
    enterpriseAdminDeletePreReceiveEnvironment(req: operations.EnterpriseAdminDeletePreReceiveEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeletePreReceiveEnvironmentResponse>;
    /**
     * Delete a pre-receive hook
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#delete-a-pre-receive-hook} - API method documentation
     */
    enterpriseAdminDeletePreReceiveHook(req: operations.EnterpriseAdminDeletePreReceiveHookRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeletePreReceiveHookResponse>;
    /**
     * Delete a public key
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#delete-a-public-key} - API method documentation
     */
    enterpriseAdminDeletePublicKey(req: operations.EnterpriseAdminDeletePublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeletePublicKeyResponse>;
    /**
     * Delete a SCIM group from an enterprise
     *
     * @remarks
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.
     *
     *  Deletes a SCIM group from an enterprise.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#delete-a-scim-group-from-an-enterprise} - API method documentation
     */
    enterpriseAdminDeleteScimGroupFromEnterprise(req: operations.EnterpriseAdminDeleteScimGroupFromEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteScimGroupFromEnterpriseResponse>;
    /**
     * Delete a self-hosted runner from an enterprise
     *
     * @remarks
     * Forces the removal of a self-hosted runner from an enterprise. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#delete-self-hosted-runner-from-an-enterprise} - API method documentation
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
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-enterprise} - API method documentation
     */
    enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise(req: operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse>;
    /**
     * Delete a user
     *
     * @remarks
     * Deleting a user will delete all their repositories, gists, applications, and personal settings. [Suspending a user](https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#suspend-a-user) is often a better option.
     *
     * You can delete any user account except your own.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#delete-a-user} - API method documentation
     */
    enterpriseAdminDeleteUser(req: operations.EnterpriseAdminDeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteUserResponse>;
    /**
     * Delete a SCIM user from an enterprise
     *
     * @remarks
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.
     *
     * Permanently suspends a SCIM user from an enterprise, removes all data for the user, obfuscates the login, email, and display name of the user, removes all external-identity SCIM attributes, and deletes the emails, avatar, PATs, SSH keys, OAuth authorizations credentials, GPG keys, and SAML mappings for the user. You will not be able to undo this action.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#delete-a-scim-user-from-an-enterprise} - API method documentation
     */
    enterpriseAdminDeleteUserFromEnterprise(req: operations.EnterpriseAdminDeleteUserFromEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteUserFromEnterpriseResponse>;
    /**
     * Demote a site administrator
     *
     * @remarks
     * You can demote any user account except your own.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#demote-a-site-administrator} - API method documentation
     */
    enterpriseAdminDemoteSiteAdministrator(req: operations.EnterpriseAdminDemoteSiteAdministratorRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDemoteSiteAdministratorResponse>;
    /**
     * Disable a selected organization for GitHub Actions in an enterprise
     *
     * @remarks
     * Removes an organization from the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#disable-a-selected-organization-for-github-actions-in-an-enterprise} - API method documentation
     */
    enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise(req: operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse>;
    /**
     * Enable or disable maintenance mode
     *
     * @remarks
     * **Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode} - API method documentation
     */
    enterpriseAdminEnableOrDisableMaintenanceMode(req: operations.EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminEnableOrDisableMaintenanceModeResponse>;
    /**
     * Enable a selected organization for GitHub Actions in an enterprise
     *
     * @remarks
     * Adds an organization to the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#enable-a-selected-organization-for-github-actions-in-an-enterprise} - API method documentation
     */
    enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise(req: operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse>;
    /**
     * Get all authorized SSH keys
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-all-authorized-ssh-keys} - API method documentation
     */
    enterpriseAdminGetAllAuthorizedSshKeys(serverURL?: string, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetAllAuthorizedSshKeysResponse>;
    /**
     * Get all statistics
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-statistics} - API method documentation
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
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#get-allowed-actions-for-an-enterprise} - API method documentation
     */
    enterpriseAdminGetAllowedActionsEnterprise(req: operations.EnterpriseAdminGetAllowedActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetAllowedActionsEnterpriseResponse>;
    /**
     * Get the global announcement banner
     *
     * @remarks
     * Gets the current message and expiration date of the global announcement banner in your enterprise.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/enterprise-admin/announcement#get-the-global-announcement-banner} - API method documentation
     */
    enterpriseAdminGetAnnouncement(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetAnnouncementResponse>;
    /**
     * Get the audit log for an enterprise
     *
     * @remarks
     * Gets the audit log for an enterprise. To use this endpoint, you must be an enterprise admin, and you must use an access token with the `admin:enterprise` scope.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-the-audit-log-for-an-enterprise} - API method documentation
     */
    enterpriseAdminGetAuditLog(req: operations.EnterpriseAdminGetAuditLogRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetAuditLogResponse>;
    /**
     * Get comment statistics
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-comment-statistics} - API method documentation
     */
    enterpriseAdminGetCommentStats(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetCommentStatsResponse>;
    /**
     * Get the configuration status
     *
     * @remarks
     * This endpoint allows you to check the status of the most recent configuration process:
     *
     * Note that you may need to wait several seconds after you start a process before you can check its status.
     *
     * The different statuses are:
     *
     * | Status        | Description                       |
     * | ------------- | --------------------------------- |
     * | `PENDING`     | The job has not started yet       |
     * | `CONFIGURING` | The job is running                |
     * | `DONE`        | The job has finished correctly    |
     * | `FAILED`      | The job has finished unexpectedly |
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-the-configuration-status} - API method documentation
     */
    enterpriseAdminGetConfigurationStatus(serverURL?: string, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetConfigurationStatusResponse>;
    /**
     * Get the download status for a pre-receive environment
     *
     * @remarks
     * In addition to seeing the download status at the "[Get a pre-receive environment](#get-a-pre-receive-environment)" endpoint, there is also this separate endpoint for just the download status.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-the-download-status-for-a-pre-receive-environment} - API method documentation
     */
    enterpriseAdminGetDownloadStatusForPreReceiveEnvironment(req: operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse>;
    /**
     * Get gist statistics
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-gist-statistics} - API method documentation
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
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#get-github-actions-permissions-for-an-enterprise} - API method documentation
     */
    enterpriseAdminGetGithubActionsPermissionsEnterprise(req: operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse>;
    /**
     * Get a global webhook
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-a-global-webhook} - API method documentation
     */
    enterpriseAdminGetGlobalWebhook(req: operations.EnterpriseAdminGetGlobalWebhookRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetGlobalWebhookResponse>;
    /**
     * Get hooks statistics
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-hooks-statistics} - API method documentation
     */
    enterpriseAdminGetHooksStats(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetHooksStatsResponse>;
    /**
     * Get issue statistics
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-issues-statistics} - API method documentation
     */
    enterpriseAdminGetIssueStats(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetIssueStatsResponse>;
    /**
     * Get license information
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-license-information} - API method documentation
     */
    enterpriseAdminGetLicenseInformation(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetLicenseInformationResponse>;
    /**
     * Get the maintenance status
     *
     * @remarks
     * Check your installation's maintenance status:
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-the-maintenance-status} - API method documentation
     */
    enterpriseAdminGetMaintenanceStatus(serverURL?: string, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetMaintenanceStatusResponse>;
    /**
     * Get milestone statistics
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-milestone-statistics} - API method documentation
     */
    enterpriseAdminGetMilestoneStats(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetMilestoneStatsResponse>;
    /**
     * Get organization statistics
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-organization-statistics} - API method documentation
     */
    enterpriseAdminGetOrgStats(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetOrgStatsResponse>;
    /**
     * Get pages statistics
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-pages-statistics} - API method documentation
     */
    enterpriseAdminGetPagesStats(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetPagesStatsResponse>;
    /**
     * Get a pre-receive environment
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-a-pre-receive-environment} - API method documentation
     */
    enterpriseAdminGetPreReceiveEnvironment(req: operations.EnterpriseAdminGetPreReceiveEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetPreReceiveEnvironmentResponse>;
    /**
     * Get a pre-receive hook
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-a-pre-receive-hook} - API method documentation
     */
    enterpriseAdminGetPreReceiveHook(req: operations.EnterpriseAdminGetPreReceiveHookRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetPreReceiveHookResponse>;
    /**
     * Get a pre-receive hook for an organization
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization} - API method documentation
     */
    enterpriseAdminGetPreReceiveHookForOrg(req: operations.EnterpriseAdminGetPreReceiveHookForOrgRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetPreReceiveHookForOrgResponse>;
    /**
     * Get a pre-receive hook for a repository
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository} - API method documentation
     */
    enterpriseAdminGetPreReceiveHookForRepo(req: operations.EnterpriseAdminGetPreReceiveHookForRepoRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetPreReceiveHookForRepoResponse>;
    /**
     * Get SCIM provisioning information for an enterprise group
     *
     * @remarks
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.
     *
     * Gets information about a SCIM group.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-group} - API method documentation
     */
    enterpriseAdminGetProvisioningInformationForEnterpriseGroup(req: operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse>;
    /**
     * Get SCIM provisioning information for an enterprise user
     *
     * @remarks
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.
     *
     * Gets information about a SCIM user.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-user} - API method documentation
     */
    enterpriseAdminGetProvisioningInformationForEnterpriseUser(req: operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse>;
    /**
     * Get pull request statistics
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-pull-requests-statistics} - API method documentation
     */
    enterpriseAdminGetPullRequestStats(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetPullRequestStatsResponse>;
    /**
     * Get repository statistics
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-repository-statistics} - API method documentation
     */
    enterpriseAdminGetRepoStats(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetRepoStatsResponse>;
    /**
     * Get a self-hosted runner for an enterprise
     *
     * @remarks
     * Gets a specific self-hosted runner configured in an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#get-a-self-hosted-runner-for-an-enterprise} - API method documentation
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
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#get-a-self-hosted-runner-group-for-an-enterprise} - API method documentation
     */
    enterpriseAdminGetSelfHostedRunnerGroupForEnterprise(req: operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse>;
    /**
     * Get settings
     *
     * @remarks
     * Gets the settings for your instance. To change settings, see the [Set settings endpoint](https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#set-settings).
     *
     * **Note:** You cannot retrieve the management console password with the Enterprise administration API.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-settings} - API method documentation
     */
    enterpriseAdminGetSettings(serverURL?: string, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetSettingsResponse>;
    /**
     * Get users statistics
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-users-statistics} - API method documentation
     */
    enterpriseAdminGetUserStats(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetUserStatsResponse>;
    /**
     * List global webhooks
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#list-global-webhooks} - API method documentation
     */
    enterpriseAdminListGlobalWebhooks(req: operations.EnterpriseAdminListGlobalWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListGlobalWebhooksResponse>;
    /**
     * List labels for a self-hosted runner for an enterprise
     *
     * @remarks
     * Lists all labels for a self-hosted runner configured in an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-an-enterprise} - API method documentation
     */
    enterpriseAdminListLabelsForSelfHostedRunnerForEnterprise(req: operations.EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseResponse>;
    /**
     * List organization access to a self-hosted runner group in an enterprise
     *
     * @remarks
     * Lists the organizations with access to a self-hosted runner group.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#list-organization-access-to-a-self-hosted-runner-group-in-a-enterprise} - API method documentation
     */
    enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise(req: operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse>;
    /**
     * List personal access tokens
     *
     * @remarks
     * Lists personal access tokens for all users, including admin users.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#list-personal-access-tokens} - API method documentation
     */
    enterpriseAdminListPersonalAccessTokens(req: operations.EnterpriseAdminListPersonalAccessTokensRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListPersonalAccessTokensResponse>;
    /**
     * List pre-receive environments
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#list-pre-receive-environments} - API method documentation
     */
    enterpriseAdminListPreReceiveEnvironments(req: operations.EnterpriseAdminListPreReceiveEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListPreReceiveEnvironmentsResponse>;
    /**
     * List pre-receive hooks
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#list-pre-receive-hooks} - API method documentation
     */
    enterpriseAdminListPreReceiveHooks(req: operations.EnterpriseAdminListPreReceiveHooksRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListPreReceiveHooksResponse>;
    /**
     * List pre-receive hooks for an organization
     *
     * @remarks
     * List all pre-receive hooks that are enabled or testing for this organization as well as any disabled hooks that can be configured at the organization level. Globally disabled pre-receive hooks that do not allow downstream configuration are not listed.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization} - API method documentation
     */
    enterpriseAdminListPreReceiveHooksForOrg(req: operations.EnterpriseAdminListPreReceiveHooksForOrgRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListPreReceiveHooksForOrgResponse>;
    /**
     * List pre-receive hooks for a repository
     *
     * @remarks
     * List all pre-receive hooks that are enabled or testing for this repository as well as any disabled hooks that are allowed to be enabled at the repository level. Pre-receive hooks that are disabled at a higher level and are not configurable will not be listed.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository} - API method documentation
     */
    enterpriseAdminListPreReceiveHooksForRepo(req: operations.EnterpriseAdminListPreReceiveHooksForRepoRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListPreReceiveHooksForRepoResponse>;
    /**
     * List provisioned SCIM groups for an enterprise
     *
     * @remarks
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.
     *
     * Lists provisioned SCIM groups in an enterprise.
     *
     * You can improve query search time by using the `excludedAttributes` query parameter with a value of `members` to exclude members from the response.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#list-provisioned-scim-groups-for-an-enterprise} - API method documentation
     */
    enterpriseAdminListProvisionedGroupsEnterprise(req: operations.EnterpriseAdminListProvisionedGroupsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListProvisionedGroupsEnterpriseResponse>;
    /**
     * List SCIM provisioned identities for an enterprise
     *
     * @remarks
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.
     *
     * Lists provisioned SCIM enterprise members.
     *
     * When a user with a SCIM-provisioned external identity is removed from an enterprise through a `patch` with `active` flag set to `false`, the account's metadata is preserved to allow the user to re-join the enterprise in the future. However, the user's account will be suspended and the user will not be able to sign-in. In order to permanently suspend the users account with no ability to re-join the enterprise in the future, use the `delete` request. Users that were not permanently deleted will be visible in the returned results.
     *
     * You can improve query search time by using the `excludedAttributes` query parameter with a value of `groups` to exclude groups from the response.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#list-scim-provisioned-identities-for-an-enterprise} - API method documentation
     */
    enterpriseAdminListProvisionedIdentitiesEnterprise(req: operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse>;
    /**
     * List public keys
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#list-public-keys} - API method documentation
     */
    enterpriseAdminListPublicKeys(req: operations.EnterpriseAdminListPublicKeysRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListPublicKeysResponse>;
    /**
     * List runner applications for an enterprise
     *
     * @remarks
     * Lists binaries for the runner application that you can download and run.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#list-runner-applications-for-an-enterprise} - API method documentation
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
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#list-selected-organizations-enabled-for-github-actions-in-an-enterprise} - API method documentation
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
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#list-self-hosted-runner-groups-for-an-enterprise} - API method documentation
     */
    enterpriseAdminListSelfHostedRunnerGroupsForEnterprise(req: operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse>;
    /**
     * List self-hosted runners for an enterprise
     *
     * @remarks
     * Lists all self-hosted runners configured for an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#list-self-hosted-runners-for-an-enterprise} - API method documentation
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
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-enterprise} - API method documentation
     */
    enterpriseAdminListSelfHostedRunnersInGroupForEnterprise(req: operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse>;
    /**
     * Ping a global webhook
     *
     * @remarks
     * This will trigger a [ping event](https://docs.github.com/enterprise-server@3.7/webhooks/#ping-event) to be sent to the webhook.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#ping-a-global-webhook} - API method documentation
     */
    enterpriseAdminPingGlobalWebhook(req: operations.EnterpriseAdminPingGlobalWebhookRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminPingGlobalWebhookResponse>;
    /**
     * Promote a user to be a site administrator
     *
     * @remarks
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.7/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#promote-a-user-to-be-a-site-administrator} - API method documentation
     */
    enterpriseAdminPromoteUserToBeSiteAdministrator(req: operations.EnterpriseAdminPromoteUserToBeSiteAdministratorRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminPromoteUserToBeSiteAdministratorResponse>;
    /**
     * Provision a SCIM enterprise group
     *
     * @remarks
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.
     *
     * Creates a SCIM group for an enterprise.
     *
     * If members are included as part of the group provisioning payload, they will be created as external group members. It is up to a provider to store a mapping between the `externalId` and `id` of each user.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#provision-a-scim-enterprise-group} - API method documentation
     */
    enterpriseAdminProvisionEnterpriseGroup(req: shared.Group, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminProvisionEnterpriseGroupResponse>;
    /**
     * Provision a SCIM enterprise user
     *
     * @remarks
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.
     *
     * Creates an external identity for a new SCIM enterprise user.
     *
     * SCIM does not authenticate users, it only provisions them. The authentication of users is done by SAML. However, when SCIM is enabled, all users need to be provisioned through SCIM before a user can sign in through SAML. The matching of a user to a SCIM provisioned user is done when the SAML assertion is consumed. The user will be matched on SAML response `NameID` to SCIM `userName`.
     *
     * When converting existing enterprise to use SCIM, the user handle (`userName`) from the SCIM payload will be used to match the provisioned user to an already existing user in the enterprise. Since the new identity record is created for newly provisioned users the matching for those records is done using a user's handle. Currently the matching will be performed to all of the users no matter if they were SAML JIT provisioned or created as local users.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#provision-a-scim-enterprise-user} - API method documentation
     */
    enterpriseAdminProvisionEnterpriseUser(req: shared.User, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminProvisionEnterpriseUserResponse>;
    /**
     * Remove all custom labels from a self-hosted runner for an enterprise
     *
     * @remarks
     * Remove all custom labels from a self-hosted runner configured in an
     * enterprise. Returns the remaining read-only labels from the runner.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-an-enterprise} - API method documentation
     */
    enterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise(req: operations.EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseResponse>;
    /**
     * Remove the global announcement banner
     *
     * @remarks
     * Removes the global announcement banner in your enterprise.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/enterprise-admin/announcement#remove-the-global-announcement-banner} - API method documentation
     */
    enterpriseAdminRemoveAnnouncement(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemoveAnnouncementResponse>;
    /**
     * Remove an authorized SSH key
     *
     * @remarks
     * **Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#remove-an-authorized-ssh-key} - API method documentation
     */
    enterpriseAdminRemoveAuthorizedSshKey(req: operations.EnterpriseAdminRemoveAuthorizedSshKeyRequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemoveAuthorizedSshKeyResponse>;
    /**
     * Remove a custom label from a self-hosted runner for an enterprise
     *
     * @remarks
     * Remove a custom label from a self-hosted runner configured
     * in an enterprise. Returns the remaining labels from the runner.
     *
     * This endpoint returns a `404 Not Found` status if the custom label is not
     * present on the runner.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-enterprise} - API method documentation
     */
    enterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise(req: operations.EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseResponse>;
    /**
     * Remove organization access to a self-hosted runner group in an enterprise
     *
     * @remarks
     * Removes an organization from the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#remove-organization-access-to-a-self-hosted-runner-group-in-an-enterprise} - API method documentation
     */
    enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise(req: operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse>;
    /**
     * Remove pre-receive hook enforcement for an organization
     *
     * @remarks
     * Removes any overrides for this hook at the org level for this org.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization} - API method documentation
     */
    enterpriseAdminRemovePreReceiveHookEnforcementForOrg(req: operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse>;
    /**
     * Remove pre-receive hook enforcement for a repository
     *
     * @remarks
     * Deletes any overridden enforcement on this repository for the specified hook.
     *
     * Responds with effective values inherited from owner and/or global level.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository} - API method documentation
     */
    enterpriseAdminRemovePreReceiveHookEnforcementForRepo(req: operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse>;
    /**
     * Remove a self-hosted runner from a group for an enterprise
     *
     * @remarks
     * Removes a self-hosted runner from a group configured in an enterprise. The runner is then returned to the default group.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-enterprise} - API method documentation
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
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#set-allowed-actions-for-an-enterprise} - API method documentation
     */
    enterpriseAdminSetAllowedActionsEnterprise(req: operations.EnterpriseAdminSetAllowedActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetAllowedActionsEnterpriseResponse>;
    /**
     * Set the global announcement banner
     *
     * @remarks
     * Sets the message and expiration time for the global announcement banner in your enterprise.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/enterprise-admin/announcement#set-the-global-announcement-banner} - API method documentation
     */
    enterpriseAdminSetAnnouncement(req: shared.Announcement, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetAnnouncementResponse>;
    /**
     * Set custom labels for a self-hosted runner for an enterprise
     *
     * @remarks
     * Remove all previous custom labels and set the new custom labels for a specific
     * self-hosted runner configured in an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-an-enterprise} - API method documentation
     */
    enterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise(req: operations.EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseResponse>;
    /**
     * Set GitHub Actions permissions for an enterprise
     *
     * @remarks
     * Sets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#set-github-actions-permissions-for-an-enterprise} - API method documentation
     */
    enterpriseAdminSetGithubActionsPermissionsEnterprise(req: operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse>;
    /**
     * Set SCIM information for a provisioned enterprise group
     *
     * @remarks
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.
     *
     * Replaces an existing provisioned group’s information.
     *
     * You must provide all the information required for the group as if you were provisioning it for the first time. Any existing group information that you don't provide will be removed, including group membership. If you want to only update a specific attribute, use the [Update an attribute for a SCIM enterprise group](#update-an-attribute-for-a-scim-enterprise-group) endpoint instead.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-group} - API method documentation
     */
    enterpriseAdminSetInformationForProvisionedEnterpriseGroup(req: operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse>;
    /**
     * Set SCIM information for a provisioned enterprise user
     *
     * @remarks
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.
     *
     * Replaces an existing provisioned user's information.
     *
     * You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don't provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](#update-an-attribute-for-a-scim-enterprise-user) endpoint instead.
     *
     * **Warning:** Setting `active: false` will suspend a user and obfuscate the user handle and user email. Since the implementation is a generic SCIM implementation and does not differentiate yet between different IdP providers, for Okta, the user GDPR data will not be purged and the credentials will not be removed.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-user} - API method documentation
     */
    enterpriseAdminSetInformationForProvisionedEnterpriseUser(req: operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse>;
    /**
     * Set organization access for a self-hosted runner group in an enterprise
     *
     * @remarks
     * Replaces the list of organizations that have access to a self-hosted runner configured in an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#set-organization-access-to-a-self-hosted-runner-group-in-an-enterprise} - API method documentation
     */
    enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise(req: operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse>;
    /**
     * Set selected organizations enabled for GitHub Actions in an enterprise
     *
     * @remarks
     * Replaces the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#set-selected-organizations-enabled-for-github-actions-in-an-enterprise} - API method documentation
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
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-enterprise} - API method documentation
     */
    enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise(req: operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse>;
    /**
     * Set settings
     *
     * @remarks
     * Applies settings on your instance. For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-settings).
     *
     * **Notes:**
     *
     * - The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).
     * - You cannot set the management console password with the Enterprise administration API. Use the `ghe-set-password` utility to change the management console password. For more information, see "[Command-line utilities](https://docs.github.com/enterprise-server@3.7/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-set-password)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#set-settings} - API method documentation
     */
    enterpriseAdminSetSettings(req: operations.EnterpriseAdminSetSettingsRequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetSettingsResponse>;
    /**
     * Start a configuration process
     *
     * @remarks
     * This endpoint allows you to start a configuration process at any time for your updated settings to take effect:
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#start-a-configuration-process} - API method documentation
     */
    enterpriseAdminStartConfigurationProcess(serverURL?: string, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminStartConfigurationProcessResponse>;
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
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#start-a-pre-receive-environment-download} - API method documentation
     */
    enterpriseAdminStartPreReceiveEnvironmentDownload(req: operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse>;
    /**
     * Suspend a user
     *
     * @remarks
     * If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://docs.github.com/enterprise-server@3.7/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap), Active Directory LDAP-authenticated users cannot be suspended through this API. If you attempt to suspend an Active Directory LDAP-authenticated user through this API, it will return a `403` response.
     *
     * You can suspend any user account except your own.
     *
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.7/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#suspend-a-user} - API method documentation
     */
    enterpriseAdminSuspendUser(req: operations.EnterpriseAdminSuspendUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSuspendUserResponse>;
    /**
     * Sync LDAP mapping for a team
     *
     * @remarks
     * Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-team} - API method documentation
     */
    enterpriseAdminSyncLdapMappingForTeam(req: operations.EnterpriseAdminSyncLdapMappingForTeamRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSyncLdapMappingForTeamResponse>;
    /**
     * Sync LDAP mapping for a user
     *
     * @remarks
     * Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-user} - API method documentation
     */
    enterpriseAdminSyncLdapMappingForUser(req: operations.EnterpriseAdminSyncLdapMappingForUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSyncLdapMappingForUserResponse>;
    /**
     * Unsuspend a user
     *
     * @remarks
     * If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://docs.github.com/enterprise-server@3.7/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap), this API is disabled and will return a `403` response. Active Directory LDAP-authenticated users cannot be unsuspended using the API.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#unsuspend-a-user} - API method documentation
     */
    enterpriseAdminUnsuspendUser(req: operations.EnterpriseAdminUnsuspendUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUnsuspendUserResponse>;
    /**
     * Update an attribute for a SCIM enterprise group
     *
     * @remarks
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.
     *
     * Update a provisioned group’s individual attributes.
     *
     * To change a group’s values, you must provide a specific Operations JSON format that contains at least one of the add, remove, or replace operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).  Update can also be used to add group memberships.
     *
     * Group memberships can be sent one at a time or in batches for faster performance. **Note**: The memberships are referenced through a local user `id`, and the user will need to be created before they are referenced here.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-an-attribute-for-a-scim-enterprise-group} - API method documentation
     */
    enterpriseAdminUpdateAttributeForEnterpriseGroup(req: operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse>;
    /**
     * Update an attribute for a SCIM enterprise user
     *
     * @remarks
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.
     *
     * Update a provisioned user's individual attributes.
     *
     * To change a user's values, you must provide a specific `Operations` JSON format that contains at least one of the `add`, `remove`, or `replace` operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).
     *
     * **Note:** Complicated SCIM `path` selectors that include filters are not supported. For example, a `path` selector defined as `"path": "emails[type eq \"work\"]"` will not work.
     *
     * **Warning:** Setting `active: false` will suspend a user and obfuscate the user handle and user email. Since the implementation is a generic SCIM implementation and does not differentiate yet between different IdP providers, for Okta, the user GDPR data will not be purged and the credentials will not be removed.
     * ```
     * {
     *   "Operations":[{
     *     "op":"replace",
     *     "value":{
     *       "active":false
     *     }
     *   }]
     * }
     * ```
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-an-attribute-for-a-scim-enterprise-user} - API method documentation
     */
    enterpriseAdminUpdateAttributeForEnterpriseUser(req: operations.EnterpriseAdminUpdateAttributeForEnterpriseUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateAttributeForEnterpriseUserResponse>;
    /**
     * Update a global webhook
     *
     * @remarks
     * Parameters that are not provided will be overwritten with the default value or removed if no default exists.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-a-global-webhook} - API method documentation
     */
    enterpriseAdminUpdateGlobalWebhook(req: operations.EnterpriseAdminUpdateGlobalWebhookRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateGlobalWebhookResponse>;
    /**
     * Update LDAP mapping for a team
     *
     * @remarks
     * Updates the [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team. [LDAP synchronization](https://docs.github.com/enterprise-server@3.7/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap#enabling-ldap-sync) must be enabled to map LDAP entries to a team. Use the [Create a team](https://docs.github.com/enterprise-server@3.7/rest/reference/teams/#create-a-team) endpoint to create a team with LDAP mapping.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-ldap-mapping-for-a-team} - API method documentation
     */
    enterpriseAdminUpdateLdapMappingForTeam(req: operations.EnterpriseAdminUpdateLdapMappingForTeamRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateLdapMappingForTeamResponse>;
    /**
     * Update LDAP mapping for a user
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user} - API method documentation
     */
    enterpriseAdminUpdateLdapMappingForUser(req: operations.EnterpriseAdminUpdateLdapMappingForUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateLdapMappingForUserResponse>;
    /**
     * Update an organization name
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-an-organization-name} - API method documentation
     */
    enterpriseAdminUpdateOrgName(req: operations.EnterpriseAdminUpdateOrgNameRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateOrgNameResponse>;
    /**
     * Update a pre-receive environment
     *
     * @remarks
     * You cannot modify the default environment. If you attempt to modify the default environment, you will receive a `422 Unprocessable Entity` response.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-a-pre-receive-environment} - API method documentation
     */
    enterpriseAdminUpdatePreReceiveEnvironment(req: operations.EnterpriseAdminUpdatePreReceiveEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdatePreReceiveEnvironmentResponse>;
    /**
     * Update a pre-receive hook
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-a-pre-receive-hook} - API method documentation
     */
    enterpriseAdminUpdatePreReceiveHook(req: operations.EnterpriseAdminUpdatePreReceiveHookRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdatePreReceiveHookResponse>;
    /**
     * Update pre-receive hook enforcement for an organization
     *
     * @remarks
     * For pre-receive hooks which are allowed to be configured at the org level, you can set `enforcement` and `allow_downstream_configuration`
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization} - API method documentation
     */
    enterpriseAdminUpdatePreReceiveHookEnforcementForOrg(req: operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse>;
    /**
     * Update pre-receive hook enforcement for a repository
     *
     * @remarks
     * For pre-receive hooks which are allowed to be configured at the repo level, you can set `enforcement`
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository} - API method documentation
     */
    enterpriseAdminUpdatePreReceiveHookEnforcementForRepo(req: operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse>;
    /**
     * Update a self-hosted runner group for an enterprise
     *
     * @remarks
     * Updates the `name` and `visibility` of a self-hosted runner group in an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/actions#update-a-self-hosted-runner-group-for-an-enterprise} - API method documentation
     */
    enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise(req: operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse>;
    /**
     * Update the username for a user
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-the-username-for-a-user} - API method documentation
     */
    enterpriseAdminUpdateUsernameForUser(req: operations.EnterpriseAdminUpdateUsernameForUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateUsernameForUserResponse>;
    /**
     * Upgrade a license
     *
     * @remarks
     * This API upgrades your license and also triggers the configuration process.
     *
     * **Note:** The request body for this operation must be submitted as `multipart/form-data` data. You can can reference the license file by prefixing the filename with the `@` symbol using `curl`. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#-F).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#upgrade-a-license} - API method documentation
     */
    enterpriseAdminUpgradeLicense(req: operations.EnterpriseAdminUpgradeLicenseRequestBody, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpgradeLicenseResponse>;
}
