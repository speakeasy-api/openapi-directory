import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Information for integrations and installations.
 */
export declare class Apps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a repository to an app installation
     *
     * @remarks
     * Add a single repository to an installation. The authenticated user must have admin access to the repository.
     *
     * You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@3.0/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#add-a-repository-to-an-app-installation} - API method documentation
     */
    appsAddRepoToInstallationForAuthenticatedUser(req: operations.AppsAddRepoToInstallationForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.AppsAddRepoToInstallationForAuthenticatedUserResponse>;
    /**
     * Check an authorization
     *
     * @remarks
     * **Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
     *
     * OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#check-an-authorization} - API method documentation
     */
    appsCheckAuthorization(req: operations.AppsCheckAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.AppsCheckAuthorizationResponse>;
    /**
     * Check a token
     *
     * @remarks
     * OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#check-a-token} - API method documentation
     */
    appsCheckToken(req: operations.AppsCheckTokenRequest, config?: AxiosRequestConfig): Promise<operations.AppsCheckTokenResponse>;
    /**
     * Create a content attachment
     *
     * @remarks
     * Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` and `repository` `full_name` of the content reference from the [`content_reference` event](https://docs.github.com/enterprise-server@3.0/webhooks/event-payloads/#content_reference) to create an attachment.
     *
     * The app must create a content attachment within six hours of the content reference URL being posted. See "[Using content attachments](https://docs.github.com/enterprise-server@3.0/apps/using-content-attachments/)" for details about content attachments.
     *
     * You must use an [installation access token](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#create-a-content-attachment} - API method documentation
     */
    appsCreateContentAttachment(req: operations.AppsCreateContentAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.AppsCreateContentAttachmentResponse>;
    /**
     * Create a GitHub App from a manifest
     *
     * @remarks
     * Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#create-a-github-app-from-a-manifest} - API method documentation
     */
    appsCreateFromManifest(req: operations.AppsCreateFromManifestRequest, config?: AxiosRequestConfig): Promise<operations.AppsCreateFromManifestResponse>;
    /**
     * Create an installation access token for an app
     *
     * @remarks
     * Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps/#create-an-installation-access-token-for-an-app} - API method documentation
     */
    appsCreateInstallationAccessToken(req: operations.AppsCreateInstallationAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.AppsCreateInstallationAccessTokenResponse>;
    /**
     * Delete an app authorization
     *
     * @remarks
     * OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
     * Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#delete-an-app-authorization} - API method documentation
     */
    appsDeleteAuthorization(req: operations.AppsDeleteAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.AppsDeleteAuthorizationResponse>;
    /**
     * Delete an installation for the authenticated app
     *
     * @remarks
     * Uninstalls a GitHub App on a user, organization, or business account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the "[Suspend an app installation](https://docs.github.com/enterprise-server@3.0/rest/reference/apps/#suspend-an-app-installation)" endpoint.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#delete-an-installation-for-the-authenticated-app} - API method documentation
     */
    appsDeleteInstallation(req: operations.AppsDeleteInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsDeleteInstallationResponse>;
    /**
     * Delete an app token
     *
     * @remarks
     * OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#delete-an-app-token} - API method documentation
     */
    appsDeleteToken(req: operations.AppsDeleteTokenRequest, config?: AxiosRequestConfig): Promise<operations.AppsDeleteTokenResponse>;
    /**
     * Get the authenticated app
     *
     * @remarks
     * Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/enterprise-server@3.0/rest/reference/apps#list-installations-for-the-authenticated-app)" endpoint.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#get-the-authenticated-app} - API method documentation
     */
    appsGetAuthenticated(config?: AxiosRequestConfig): Promise<operations.AppsGetAuthenticatedResponse>;
    /**
     * Get an app
     *
     * @remarks
     * **Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).
     *
     * If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://docs.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps/#get-an-app} - API method documentation
     */
    appsGetBySlug(req: operations.AppsGetBySlugRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetBySlugResponse>;
    /**
     * Get an installation for the authenticated app
     *
     * @remarks
     * Enables an authenticated GitHub App to find an installation's information using the installation id.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#get-an-installation-for-the-authenticated-app} - API method documentation
     */
    appsGetInstallation(req: operations.AppsGetInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetInstallationResponse>;
    /**
     * Get an organization installation for the authenticated app
     *
     * @remarks
     * Enables an authenticated GitHub App to find the organization's installation information.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app} - API method documentation
     */
    appsGetOrgInstallation(req: operations.AppsGetOrgInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetOrgInstallationResponse>;
    /**
     * Get a repository installation for the authenticated app
     *
     * @remarks
     * Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#get-a-repository-installation-for-the-authenticated-app} - API method documentation
     */
    appsGetRepoInstallation(req: operations.AppsGetRepoInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetRepoInstallationResponse>;
    /**
     * Get a user installation for the authenticated app
     *
     * @remarks
     * Enables an authenticated GitHub App to find the user’s installation information.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#get-a-user-installation-for-the-authenticated-app} - API method documentation
     */
    appsGetUserInstallation(req: operations.AppsGetUserInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetUserInstallationResponse>;
    /**
     * Get a webhook configuration for an app
     *
     * @remarks
     * Returns the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#get-a-webhook-configuration-for-an-app} - API method documentation
     */
    appsGetWebhookConfigForApp(config?: AxiosRequestConfig): Promise<operations.AppsGetWebhookConfigForAppResponse>;
    /**
     * List repositories accessible to the user access token
     *
     * @remarks
     * List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.
     *
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     *
     * You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
     *
     * The access the user has to each repository is included in the hash under the `permissions` key.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#list-repositories-accessible-to-the-user-access-token} - API method documentation
     */
    appsListInstallationReposForAuthenticatedUser(req: operations.AppsListInstallationReposForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.AppsListInstallationReposForAuthenticatedUserResponse>;
    /**
     * List installations for the authenticated app
     *
     * @remarks
     * You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * The permissions the installation has are included under the `permissions` key.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#list-installations-for-the-authenticated-app} - API method documentation
     */
    appsListInstallations(req: operations.AppsListInstallationsRequest, config?: AxiosRequestConfig): Promise<operations.AppsListInstallationsResponse>;
    /**
     * List app installations accessible to the user access token
     *
     * @remarks
     * Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
     *
     * You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
     *
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     *
     * You can find the permissions for the installation under the `permissions` key.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token} - API method documentation
     */
    appsListInstallationsForAuthenticatedUser(req: operations.AppsListInstallationsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.AppsListInstallationsForAuthenticatedUserResponse>;
    /**
     * List repositories accessible to the app installation
     *
     * @remarks
     * List repositories that an app installation can access.
     *
     * You must use an [installation access token](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#list-repositories-accessible-to-the-app-installation} - API method documentation
     */
    appsListReposAccessibleToInstallation(req: operations.AppsListReposAccessibleToInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsListReposAccessibleToInstallationResponse>;
    /**
     * Remove a repository from an app installation
     *
     * @remarks
     * Remove a single repository from an installation. The authenticated user must have admin access to the repository.
     *
     * You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@3.0/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#remove-a-repository-from-an-app-installation} - API method documentation
     */
    appsRemoveRepoFromInstallationForAuthenticatedUser(req: operations.AppsRemoveRepoFromInstallationForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.AppsRemoveRepoFromInstallationForAuthenticatedUserResponse>;
    /**
     * Reset an authorization
     *
     * @remarks
     * **Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
     *
     * OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#reset-an-authorization} - API method documentation
     */
    appsResetAuthorization(req: operations.AppsResetAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.AppsResetAuthorizationResponse>;
    /**
     * Reset a token
     *
     * @remarks
     * OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#reset-a-token} - API method documentation
     */
    appsResetToken(req: operations.AppsResetTokenRequest, config?: AxiosRequestConfig): Promise<operations.AppsResetTokenResponse>;
    /**
     * Revoke an authorization for an application
     *
     * @remarks
     * **Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
     *
     * OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#revoke-an-authorization-for-an-application} - API method documentation
     */
    appsRevokeAuthorizationForApplication(req: operations.AppsRevokeAuthorizationForApplicationRequest, config?: AxiosRequestConfig): Promise<operations.AppsRevokeAuthorizationForApplicationResponse>;
    /**
     * Revoke a grant for an application
     *
     * @remarks
     * **Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
     *
     * OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid token as `:access_token` and the grant for the token's owner will be deleted.
     *
     * Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the Applications settings page under "Authorized OAuth Apps" on GitHub Enterprise Server](https://github.com/settings/applications#authorized).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#revoke-a-grant-for-an-application} - API method documentation
     */
    appsRevokeGrantForApplication(req: operations.AppsRevokeGrantForApplicationRequest, config?: AxiosRequestConfig): Promise<operations.AppsRevokeGrantForApplicationResponse>;
    /**
     * Revoke an installation access token
     *
     * @remarks
     * Revokes the installation token you're using to authenticate as an installation and access this endpoint.
     *
     * Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/enterprise-server@3.0/rest/reference/apps#create-an-installation-access-token-for-an-app)" endpoint.
     *
     * You must use an [installation access token](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#revoke-an-installation-access-token} - API method documentation
     */
    appsRevokeInstallationAccessToken(config?: AxiosRequestConfig): Promise<operations.AppsRevokeInstallationAccessTokenResponse>;
    /**
     * Create a scoped access token
     *
     * @remarks
     * Use a non-scoped user-to-server OAuth access token to create a repository scoped and/or permission scoped user-to-server OAuth access token. You can specify which repositories the token can access and which permissions are granted to the token. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#create-a-scoped-access-token} - API method documentation
     */
    appsScopeToken(req: operations.AppsScopeTokenRequest, config?: AxiosRequestConfig): Promise<operations.AppsScopeTokenResponse>;
    /**
     * Suspend an app installation
     *
     * @remarks
     * Suspends a GitHub App on a user, organization, or business account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub Enterprise Server API or webhook events is blocked for that account.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#suspend-an-app-installation} - API method documentation
     */
    appsSuspendInstallation(req: operations.AppsSuspendInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsSuspendInstallationResponse>;
    /**
     * Unsuspend an app installation
     *
     * @remarks
     * Removes a GitHub App installation suspension.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#unsuspend-an-app-installation} - API method documentation
     */
    appsUnsuspendInstallation(req: operations.AppsUnsuspendInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsUnsuspendInstallationResponse>;
    /**
     * Update a webhook configuration for an app
     *
     * @remarks
     * Updates the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/apps#update-a-webhook-configuration-for-an-app} - API method documentation
     */
    appsUpdateWebhookConfigForApp(req: operations.AppsUpdateWebhookConfigForAppRequestBody, config?: AxiosRequestConfig): Promise<operations.AppsUpdateWebhookConfigForAppResponse>;
}
