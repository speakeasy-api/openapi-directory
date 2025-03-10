import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Interact with GitHub Repos.
 */
export declare class Repos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Accept a repository invitation
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#accept-a-repository-invitation} - API method documentation
     */
    reposAcceptInvitationForAuthenticatedUser(req: operations.ReposAcceptInvitationForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ReposAcceptInvitationForAuthenticatedUserResponse>;
    /**
     * Add app access restrictions
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Grants the specified apps push access for this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     *
     * | Type    | Description                                                                                                                                                |
     * | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#add-app-access-restrictions} - API method documentation
     */
    reposAddAppAccessRestrictions(req: operations.ReposAddAppAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposAddAppAccessRestrictionsResponse>;
    /**
     * Add a repository collaborator
     *
     * @remarks
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
     *
     * For more information on permission levels, see "[Repository permission levels for an organization](https://docs.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)". There are restrictions on which permissions can be granted to organization members when an organization base role is in place. In this case, the permission being given must be equal to or higher than the org base permission. Otherwise, the request will fail with:
     *
     * ```
     * Cannot assign {member} permission of {role name}
     * ```
     *
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [repository invitations API endpoints](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#invitations).
     *
     * **Rate limits**
     *
     * You are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#add-a-repository-collaborator} - API method documentation
     */
    reposAddCollaborator(req: operations.ReposAddCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.ReposAddCollaboratorResponse>;
    /**
     * Add status check contexts
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#add-status-check-contexts} - API method documentation
     */
    reposAddStatusCheckContexts(req: operations.ReposAddStatusCheckContextsRequest, config?: AxiosRequestConfig): Promise<operations.ReposAddStatusCheckContextsResponse>;
    /**
     * Add team access restrictions
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Grants the specified teams push access for this branch. You can also give push access to child teams.
     *
     * | Type    | Description                                                                                                                                |
     * | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
     * | `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#add-team-access-restrictions} - API method documentation
     */
    reposAddTeamAccessRestrictions(req: operations.ReposAddTeamAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposAddTeamAccessRestrictionsResponse>;
    /**
     * Add user access restrictions
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Grants the specified people push access for this branch.
     *
     * | Type    | Description                                                                                                                   |
     * | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#add-user-access-restrictions} - API method documentation
     */
    reposAddUserAccessRestrictions(req: operations.ReposAddUserAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposAddUserAccessRestrictionsResponse>;
    /**
     * Check if a user is a repository collaborator
     *
     * @remarks
     * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
     *
     * Team members will include the members of child teams.
     *
     * You must authenticate using an access token with the `read:org` and `repo` scopes with push access to use this
     * endpoint. GitHub Apps must have the `members` organization permission and `metadata` repository permission to use this
     * endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#check-if-a-user-is-a-repository-collaborator} - API method documentation
     */
    reposCheckCollaborator(req: operations.ReposCheckCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.ReposCheckCollaboratorResponse>;
    /**
     * Compare two commits
     *
     * @remarks
     * The `basehead` param is comprised of two parts: `base` and `head`. Both must be branch names in `repo`. To compare branches across other repositories in the same network as `repo`, use the format `<USERNAME>:branch`.
     *
     * The response from the API is equivalent to running the `git log base..head` command; however, commits are returned in chronological order. Pass the appropriate [media type](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
     *
     * The response also includes details on the files that were changed between the two commits. This includes the status of the change (for example, if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.
     *
     * **Working with large comparisons**
     *
     * The response will include a comparison of up to 250 commits. If you are working with a larger commit range, you can use the [List commits](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-commits) to enumerate all commits in the range.
     *
     * For comparisons with extremely large diffs, you may receive an error response indicating that the diff took too long
     * to generate. You can typically resolve this error by using a smaller commit range.
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#compare-two-commits} - API method documentation
     */
    reposCompareCommits(req: operations.ReposCompareCommitsRequest, config?: AxiosRequestConfig): Promise<operations.ReposCompareCommitsResponse>;
    /**
     * Create a commit comment
     *
     * @remarks
     * Create a comment for a commit using its `:commit_sha`.
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-commit-comment} - API method documentation
     */
    reposCreateCommitComment(req: operations.ReposCreateCommitCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateCommitCommentResponse>;
    /**
     * Create commit signature protection
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-commit-signature-protection} - API method documentation
     */
    reposCreateCommitSignatureProtection(req: operations.ReposCreateCommitSignatureProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateCommitSignatureProtectionResponse>;
    /**
     * Create a commit status
     *
     * @remarks
     * Users with push access in a repository can create commit statuses for a given SHA.
     *
     * Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-commit-status} - API method documentation
     */
    reposCreateCommitStatus(req: operations.ReposCreateCommitStatusRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateCommitStatusResponse>;
    /**
     * Create a deploy key
     *
     * @remarks
     * You can create a read-only deploy key.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-deploy-key} - API method documentation
     */
    reposCreateDeployKey(req: operations.ReposCreateDeployKeyRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateDeployKeyResponse>;
    /**
     * Create a deployment
     *
     * @remarks
     * Deployments offer a few configurable parameters with certain defaults.
     *
     * The `ref` parameter can be any named branch, tag, or SHA. At GitHub Enterprise Server we often deploy branches and verify them
     * before we merge a pull request.
     *
     * The `environment` parameter allows deployments to be issued to different runtime environments. Teams often have
     * multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter
     * makes it easier to track which environments have requested deployments. The default environment is `production`.
     *
     * The `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If
     * the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds,
     * the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will
     * return a failure response.
     *
     * By default, [commit statuses](https://docs.github.com/enterprise-server@3.0/rest/reference/commits#commit-statuses) for every submitted context must be in a `success`
     * state. The `required_contexts` parameter allows you to specify a subset of contexts that must be `success`, or to
     * specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do
     * not require any contexts or create any commit statuses, the deployment will always succeed.
     *
     * The `payload` parameter is available for any extra information that a deployment system might need. It is a JSON text
     * field that will be passed on when a deployment event is dispatched.
     *
     * The `task` parameter is used by the deployment system to allow different execution paths. In the web world this might
     * be `deploy:migrations` to run schema changes on the system. In the compiled world this could be a flag to compile an
     * application with debugging enabled.
     *
     * Users with `repo` or `repo_deployment` scopes can create a deployment for a given ref.
     *
     * #### Merged branch response
     * You will see this response when GitHub automatically merges the base branch into the topic branch instead of creating
     * a deployment. This auto-merge happens when:
     * *   Auto-merge option is enabled in the repository
     * *   Topic branch does not include the latest changes on the base branch, which is `master` in the response example
     * *   There are no merge conflicts
     *
     * If there are no new commits in the base branch, a new request to create a deployment should give a successful
     * response.
     *
     * #### Merge conflict response
     * This error happens when the `auto_merge` option is enabled and when the default branch (in this case `master`), can't
     * be merged into the branch that's being deployed (in this case `topic-branch`), due to merge conflicts.
     *
     * #### Failed commit status checks
     * This error happens when the `required_contexts` parameter indicates that one or more contexts need to have a `success`
     * status for the commit to be deployed, but one or more of the required contexts do not have a state of `success`.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-deployment} - API method documentation
     */
    reposCreateDeployment(req: operations.ReposCreateDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateDeploymentResponse>;
    /**
     * Create a deployment status
     *
     * @remarks
     * Users with `push` access can create deployment statuses for a given deployment.
     *
     * GitHub Apps require `read & write` access to "Deployments" and `read-only` access to "Repo contents" (for private repos). OAuth Apps require the `repo_deployment` scope.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-deployment-status} - API method documentation
     */
    reposCreateDeploymentStatus(req: operations.ReposCreateDeploymentStatusRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateDeploymentStatusResponse>;
    /**
     * Create a repository dispatch event
     *
     * @remarks
     * You can use this endpoint to trigger a webhook event called `repository_dispatch` when you want activity that happens outside of GitHub Enterprise Server to trigger a GitHub Actions workflow or GitHub App webhook. You must configure your GitHub Actions workflow or GitHub App to run when the `repository_dispatch` event occurs. For an example `repository_dispatch` webhook payload, see "[RepositoryDispatchEvent](https://docs.github.com/enterprise-server@3.0/webhooks/event-payloads/#repository_dispatch)."
     *
     * The `client_payload` parameter is available for any extra information that your workflow might need. This parameter is a JSON payload that will be passed on when the webhook event is dispatched. For example, the `client_payload` can include a message that a user would like to send using a GitHub Actions workflow. Or the `client_payload` can be used as a test to debug your workflow.
     *
     * This endpoint requires write access to the repository by providing either:
     *
     *   - Personal access tokens with `repo` scope. For more information, see "[Creating a personal access token for the command line](https://docs.github.com/articles/creating-a-personal-access-token-for-the-command-line)" in the GitHub Help documentation.
     *   - GitHub Apps with both `metadata:read` and `contents:read&write` permissions.
     *
     * This input example shows how you can use the `client_payload` as a test to debug your workflow.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-repository-dispatch-event} - API method documentation
     */
    reposCreateDispatchEvent(req: operations.ReposCreateDispatchEventRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateDispatchEventResponse>;
    /**
     * Create a repository for the authenticated user
     *
     * @remarks
     * Creates a new repository for the authenticated user.
     *
     * **OAuth scope requirements**
     *
     * When using [OAuth](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
     *
     * *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
     * *   `repo` scope to create a private repository.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-repository-for-the-authenticated-user} - API method documentation
     */
    reposCreateForAuthenticatedUser(req: operations.ReposCreateForAuthenticatedUserRequestBody, config?: AxiosRequestConfig): Promise<operations.ReposCreateForAuthenticatedUserResponse>;
    /**
     * Create a fork
     *
     * @remarks
     * Create a fork for the authenticated user.
     *
     * **Note**: Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Enterprise Server Support](https://support.github.com/contact?tags=dotcom-rest-api).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-fork} - API method documentation
     */
    reposCreateFork(req: operations.ReposCreateForkRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateForkResponse>;
    /**
     * Create an organization repository
     *
     * @remarks
     * Creates a new repository in the specified organization. The authenticated user must be a member of the organization.
     *
     * **OAuth scope requirements**
     *
     * When using [OAuth](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
     *
     * *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
     * *   `repo` scope to create a private repository
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-an-organization-repository} - API method documentation
     */
    reposCreateInOrg(req: operations.ReposCreateInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateInOrgResponse>;
    /**
     * Create or update file contents
     *
     * @remarks
     * Creates a new file or replaces an existing file in a repository.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-or-update-file-contents} - API method documentation
     */
    reposCreateOrUpdateFileContents(req: operations.ReposCreateOrUpdateFileContentsRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateOrUpdateFileContentsResponse>;
    /**
     * Create a GitHub Enterprise Server Pages site
     *
     * @remarks
     * Configures a GitHub Enterprise Server Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-github-pages-site} - API method documentation
     */
    reposCreatePagesSite(req: operations.ReposCreatePagesSiteRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreatePagesSiteResponse>;
    /**
     * Create a release
     *
     * @remarks
     * Users with push access to the repository can create a release.
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-release} - API method documentation
     */
    reposCreateRelease(req: operations.ReposCreateReleaseRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateReleaseResponse>;
    /**
     * Create a repository using a template
     *
     * @remarks
     * Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. The authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-repository) endpoint and check that the `is_template` key is `true`.
     *
     * **OAuth scope requirements**
     *
     * When using [OAuth](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
     *
     * *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
     * *   `repo` scope to create a private repository
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-repository-using-a-template} - API method documentation
     */
    reposCreateUsingTemplate(req: operations.ReposCreateUsingTemplateRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateUsingTemplateResponse>;
    /**
     * Create a repository webhook
     *
     * @remarks
     * Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can
     * share the same `config` as long as those webhooks do not have any `events` that overlap.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-repository-webhook} - API method documentation
     */
    reposCreateWebhook(req: operations.ReposCreateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateWebhookResponse>;
    /**
     * Decline a repository invitation
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#decline-a-repository-invitation} - API method documentation
     */
    reposDeclineInvitationForAuthenticatedUser(req: operations.ReposDeclineInvitationForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeclineInvitationForAuthenticatedUserResponse>;
    /**
     * Delete a repository
     *
     * @remarks
     * Deleting a repository requires admin access. If OAuth is used, the `delete_repo` scope is required.
     *
     * If an organization owner has configured the organization to prevent members from deleting organization-owned
     * repositories, you will get a `403 Forbidden` response.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-a-repository} - API method documentation
     */
    reposDelete(req: operations.ReposDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteResponse>;
    /**
     * Delete access restrictions
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Disables the ability to restrict who can push to this branch.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-access-restrictions} - API method documentation
     */
    reposDeleteAccessRestrictions(req: operations.ReposDeleteAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteAccessRestrictionsResponse>;
    /**
     * Delete admin branch protection
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-admin-branch-protection} - API method documentation
     */
    reposDeleteAdminBranchProtection(req: operations.ReposDeleteAdminBranchProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteAdminBranchProtectionResponse>;
    /**
     * Delete branch protection
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-branch-protection} - API method documentation
     */
    reposDeleteBranchProtection(req: operations.ReposDeleteBranchProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteBranchProtectionResponse>;
    /**
     * Delete a commit comment
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-a-commit-comment} - API method documentation
     */
    reposDeleteCommitComment(req: operations.ReposDeleteCommitCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteCommitCommentResponse>;
    /**
     * Delete commit signature protection
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-commit-signature-protection} - API method documentation
     */
    reposDeleteCommitSignatureProtection(req: operations.ReposDeleteCommitSignatureProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteCommitSignatureProtectionResponse>;
    /**
     * Delete a deploy key
     *
     * @remarks
     * Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-a-deploy-key} - API method documentation
     */
    reposDeleteDeployKey(req: operations.ReposDeleteDeployKeyRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteDeployKeyResponse>;
    /**
     * Delete a deployment
     *
     * @remarks
     * If the repository only has one deployment, you can delete the deployment regardless of its status. If the repository has more than one deployment, you can only delete inactive deployments. This ensures that repositories with multiple deployments will always have an active deployment. Anyone with `repo` or `repo_deployment` scopes can delete a deployment.
     *
     * To set a deployment as inactive, you must:
     *
     * *   Create a new deployment that is active so that the system has a record of the current state, then delete the previously active deployment.
     * *   Mark the active deployment as inactive by adding any non-successful deployment status.
     *
     * For more information, see "[Create a deployment](https://docs.github.com/enterprise-server@3.0/rest/reference/repos/#create-a-deployment)" and "[Create a deployment status](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-deployment-status)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-a-deployment} - API method documentation
     */
    reposDeleteDeployment(req: operations.ReposDeleteDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteDeploymentResponse>;
    /**
     * Delete a file
     *
     * @remarks
     * Deletes a file in a repository.
     *
     * You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author.
     *
     * The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.
     *
     * You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-a-file} - API method documentation
     */
    reposDeleteFile(req: operations.ReposDeleteFileRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteFileResponse>;
    /**
     * Delete a repository invitation
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-a-repository-invitation} - API method documentation
     */
    reposDeleteInvitation(req: operations.ReposDeleteInvitationRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteInvitationResponse>;
    /**
     * Delete a GitHub Enterprise Server Pages site
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-a-github-pages-site} - API method documentation
     */
    reposDeletePagesSite(req: operations.ReposDeletePagesSiteRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeletePagesSiteResponse>;
    /**
     * Delete pull request review protection
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-pull-request-review-protection} - API method documentation
     */
    reposDeletePullRequestReviewProtection(req: operations.ReposDeletePullRequestReviewProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeletePullRequestReviewProtectionResponse>;
    /**
     * Delete a release
     *
     * @remarks
     * Users with push access to the repository can delete a release.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-a-release} - API method documentation
     */
    reposDeleteRelease(req: operations.ReposDeleteReleaseRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteReleaseResponse>;
    /**
     * Delete a release asset
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-a-release-asset} - API method documentation
     */
    reposDeleteReleaseAsset(req: operations.ReposDeleteReleaseAssetRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteReleaseAssetResponse>;
    /**
     * Delete a repository webhook
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-a-repository-webhook} - API method documentation
     */
    reposDeleteWebhook(req: operations.ReposDeleteWebhookRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteWebhookResponse>;
    /**
     * Download a repository archive (tar)
     *
     * @remarks
     * Gets a redirect URL to download a tar archive for a repository. If you omit `:ref`, the repository’s default branch (usually
     * `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
     * the `Location` header to make a second `GET` request.
     * **Note**: For private repositories, these links are temporary and expire after five minutes.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#download-a-repository-archive} - API method documentation
     */
    reposDownloadTarballArchive(req: operations.ReposDownloadTarballArchiveRequest, config?: AxiosRequestConfig): Promise<operations.ReposDownloadTarballArchiveResponse>;
    /**
     * Download a repository archive (zip)
     *
     * @remarks
     * Gets a redirect URL to download a zip archive for a repository. If you omit `:ref`, the repository’s default branch (usually
     * `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
     * the `Location` header to make a second `GET` request.
     * **Note**: For private repositories, these links are temporary and expire after five minutes.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#download-a-repository-archive} - API method documentation
     */
    reposDownloadZipballArchive(req: operations.ReposDownloadZipballArchiveRequest, config?: AxiosRequestConfig): Promise<operations.ReposDownloadZipballArchiveResponse>;
    /**
     * Get a repository
     *
     * @remarks
     * When you pass the `scarlet-witch-preview` media type, requests to get a repository will also return the repository's code of conduct if it can be detected from the repository's code of conduct file.
     *
     * The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-repository} - API method documentation
     */
    reposGet(req: operations.ReposGetRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetResponse>;
    /**
     * Get access restrictions
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists who has access to this protected branch.
     *
     * **Note**: Users, apps, and teams `restrictions` are only available for organization-owned repositories.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-access-restrictions} - API method documentation
     */
    reposGetAccessRestrictions(req: operations.ReposGetAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetAccessRestrictionsResponse>;
    /**
     * Get admin branch protection
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-admin-branch-protection} - API method documentation
     */
    reposGetAdminBranchProtection(req: operations.ReposGetAdminBranchProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetAdminBranchProtectionResponse>;
    /**
     * Get all status check contexts
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-all-status-check-contexts} - API method documentation
     */
    reposGetAllStatusCheckContexts(req: operations.ReposGetAllStatusCheckContextsRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetAllStatusCheckContextsResponse>;
    /**
     * Get all repository topics
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-all-repository-topics} - API method documentation
     */
    reposGetAllTopics(req: operations.ReposGetAllTopicsRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetAllTopicsResponse>;
    /**
     * Get apps with access to the protected branch
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists the GitHub Apps that have push access to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-apps-with-access-to-the-protected-branch} - API method documentation
     */
    reposGetAppsWithAccessToProtectedBranch(req: operations.ReposGetAppsWithAccessToProtectedBranchRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetAppsWithAccessToProtectedBranchResponse>;
    /**
     * Get a branch
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-branch} - API method documentation
     */
    reposGetBranch(req: operations.ReposGetBranchRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetBranchResponse>;
    /**
     * Get branch protection
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-branch-protection} - API method documentation
     */
    reposGetBranchProtection(req: operations.ReposGetBranchProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetBranchProtectionResponse>;
    /**
     * Get the weekly commit activity
     *
     * @remarks
     * Returns a weekly aggregate of the number of additions and deletions pushed to a repository.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-the-weekly-commit-activity} - API method documentation
     */
    reposGetCodeFrequencyStats(req: operations.ReposGetCodeFrequencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetCodeFrequencyStatsResponse>;
    /**
     * Get repository permissions for a user
     *
     * @remarks
     * Checks the repository permission of a collaborator. The possible repository permissions are `admin`, `write`, `read`, and `none`.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-repository-permissions-for-a-user} - API method documentation
     */
    reposGetCollaboratorPermissionLevel(req: operations.ReposGetCollaboratorPermissionLevelRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetCollaboratorPermissionLevelResponse>;
    /**
     * Get the combined status for a specific reference
     *
     * @remarks
     * Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.
     *
     *
     * Additionally, a combined `state` is returned. The `state` is one of:
     *
     * *   **failure** if any of the contexts report as `error` or `failure`
     * *   **pending** if there are no statuses or a context is `pending`
     * *   **success** if the latest status for all contexts is `success`
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-the-combined-status-for-a-specific-reference} - API method documentation
     */
    reposGetCombinedStatusForRef(req: operations.ReposGetCombinedStatusForRefRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetCombinedStatusForRefResponse>;
    /**
     * Get a commit
     *
     * @remarks
     * Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.
     *
     * **Note:** If there are more than 300 files in the commit diff, the response will include pagination link headers for the remaining files, up to a limit of 3000 files. Each page contains the static commit information, and the only changes are to the file listing.
     *
     * You can pass the appropriate [media type](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to  fetch `diff` and `patch` formats. Diffs with binary data will have no `patch` property.
     *
     * To return only the SHA-1 hash of the commit reference, you can provide the `sha` custom [media type](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) in the `Accept` header. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-commit} - API method documentation
     */
    reposGetCommit(req: operations.ReposGetCommitRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetCommitResponse>;
    /**
     * Get the last year of commit activity
     *
     * @remarks
     * Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-the-last-year-of-commit-activity} - API method documentation
     */
    reposGetCommitActivityStats(req: operations.ReposGetCommitActivityStatsRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetCommitActivityStatsResponse>;
    /**
     * Get a commit comment
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-commit-comment} - API method documentation
     */
    reposGetCommitComment(req: operations.ReposGetCommitCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetCommitCommentResponse>;
    /**
     * Get commit signature protection
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://docs.github.com/articles/signing-commits-with-gpg) in GitHub Help.
     *
     * **Note**: You must enable branch protection to require signed commits.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-commit-signature-protection} - API method documentation
     */
    reposGetCommitSignatureProtection(req: operations.ReposGetCommitSignatureProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetCommitSignatureProtectionResponse>;
    /**
     * Get repository content
     *
     * @remarks
     * Gets the contents of a file or directory in a repository. Specify the file path or directory in `:path`. If you omit
     * `:path`, you will receive the contents of the repository's root directory. See the description below regarding what the API response includes for directories.
     *
     * Files and symlinks support [a custom media type](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#custom-media-types) for
     * retrieving the raw content or rendered HTML (when supported). All content types support [a custom media
     * type](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#custom-media-types) to ensure the content is returned in a consistent
     * object format.
     *
     * **Note**:
     * *   To get a repository's contents recursively, you can [recursively get the tree](https://docs.github.com/enterprise-server@3.0/rest/reference/git#trees).
     * *   This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees
     * API](https://docs.github.com/enterprise-server@3.0/rest/reference/git#get-a-tree).
     * *   This API supports files up to 1 megabyte in size.
     *
     * #### If the content is a directory
     * The response will be an array of objects, one object for each item in the directory.
     * When listing the contents of a directory, submodules have their "type" specified as "file". Logically, the value
     * _should_ be "submodule". This behavior exists in API v3 [for backwards compatibility purposes](https://git.io/v1YCW).
     * In the next major version of the API, the type will be returned as "submodule".
     *
     * #### If the content is a symlink
     * If the requested `:path` points to a symlink, and the symlink's target is a normal file in the repository, then the
     * API responds with the content of the file (in the format shown in the example. Otherwise, the API responds with an object
     * describing the symlink itself.
     *
     * #### If the content is a submodule
     * The `submodule_git_url` identifies the location of the submodule repository, and the `sha` identifies a specific
     * commit within the submodule repository. Git uses the given URL when cloning the submodule repository, and checks out
     * the submodule at that specific commit.
     *
     * If the submodule repository is not hosted on github.com, the Git URLs (`git_url` and `_links["git"]`) and the
     * github.com URLs (`html_url` and `_links["html"]`) will have null values.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-repository-content} - API method documentation
     */
    reposGetContent(req: operations.ReposGetContentRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetContentResponse>;
    /**
     * Get all contributor commit activity
     *
     * @remarks
     *
     * Returns the `total` number of commits authored by the contributor. In addition, the response includes a Weekly Hash (`weeks` array) with the following information:
     *
     * *   `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
     * *   `a` - Number of additions
     * *   `d` - Number of deletions
     * *   `c` - Number of commits
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-all-contributor-commit-activity} - API method documentation
     */
    reposGetContributorsStats(req: operations.ReposGetContributorsStatsRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetContributorsStatsResponse>;
    /**
     * Get a deploy key
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-deploy-key} - API method documentation
     */
    reposGetDeployKey(req: operations.ReposGetDeployKeyRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetDeployKeyResponse>;
    /**
     * Get a deployment
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-deployment} - API method documentation
     */
    reposGetDeployment(req: operations.ReposGetDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetDeploymentResponse>;
    /**
     * Get a deployment status
     *
     * @remarks
     * Users with pull access can view a deployment status for a deployment:
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-deployment-status} - API method documentation
     */
    reposGetDeploymentStatus(req: operations.ReposGetDeploymentStatusRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetDeploymentStatusResponse>;
    /**
     * Get latest Pages build
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-latest-pages-build} - API method documentation
     */
    reposGetLatestPagesBuild(req: operations.ReposGetLatestPagesBuildRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetLatestPagesBuildResponse>;
    /**
     * Get the latest release
     *
     * @remarks
     * View the latest published full release for the repository.
     *
     * The latest release is the most recent non-prerelease, non-draft release, sorted by the `created_at` attribute. The `created_at` attribute is the date of the commit used for the release, and not the date when the release was drafted or published.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-the-latest-release} - API method documentation
     */
    reposGetLatestRelease(req: operations.ReposGetLatestReleaseRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetLatestReleaseResponse>;
    /**
     * Get a GitHub Enterprise Server Pages site
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-github-pages-site} - API method documentation
     */
    reposGetPages(req: operations.ReposGetPagesRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetPagesResponse>;
    /**
     * Get GitHub Enterprise Server Pages build
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-github-pages-build} - API method documentation
     */
    reposGetPagesBuild(req: operations.ReposGetPagesBuildRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetPagesBuildResponse>;
    /**
     * Get the weekly commit count
     *
     * @remarks
     * Returns the total commit counts for the `owner` and total commit counts in `all`. `all` is everyone combined, including the `owner` in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract `owner` from `all`.
     *
     * The array order is oldest week (index 0) to most recent week.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-the-weekly-commit-count} - API method documentation
     */
    reposGetParticipationStats(req: operations.ReposGetParticipationStatsRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetParticipationStatsResponse>;
    /**
     * Get pull request review protection
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-pull-request-review-protection} - API method documentation
     */
    reposGetPullRequestReviewProtection(req: operations.ReposGetPullRequestReviewProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetPullRequestReviewProtectionResponse>;
    /**
     * Get the hourly commit count for each day
     *
     * @remarks
     * Each array contains the day number, hour number, and number of commits:
     *
     * *   `0-6`: Sunday - Saturday
     * *   `0-23`: Hour of day
     * *   Number of commits
     *
     * For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-the-hourly-commit-count-for-each-day} - API method documentation
     */
    reposGetPunchCardStats(req: operations.ReposGetPunchCardStatsRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetPunchCardStatsResponse>;
    /**
     * Get a repository README
     *
     * @remarks
     * Gets the preferred README for a repository.
     *
     * READMEs support [custom media types](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-repository-readme} - API method documentation
     */
    reposGetReadme(req: operations.ReposGetReadmeRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetReadmeResponse>;
    /**
     * Get a repository README for a directory
     *
     * @remarks
     * Gets the README from a repository directory.
     *
     * READMEs support [custom media types](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-repository-directory-readme} - API method documentation
     */
    reposGetReadmeInDirectory(req: operations.ReposGetReadmeInDirectoryRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetReadmeInDirectoryResponse>;
    /**
     * Get a release
     *
     * @remarks
     * **Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#hypermedia).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-release} - API method documentation
     */
    reposGetRelease(req: operations.ReposGetReleaseRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetReleaseResponse>;
    /**
     * Get a release asset
     *
     * @remarks
     * To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-release-asset} - API method documentation
     */
    reposGetReleaseAsset(req: operations.ReposGetReleaseAssetRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetReleaseAssetResponse>;
    /**
     * Get a release by tag name
     *
     * @remarks
     * Get a published release with the specified tag.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-release-by-tag-name} - API method documentation
     */
    reposGetReleaseByTag(req: operations.ReposGetReleaseByTagRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetReleaseByTagResponse>;
    /**
     * Get status checks protection
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-status-checks-protection} - API method documentation
     */
    reposGetStatusChecksProtection(req: operations.ReposGetStatusChecksProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetStatusChecksProtectionResponse>;
    /**
     * Get teams with access to the protected branch
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists the teams who have push access to this branch. The list includes child teams.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-teams-with-access-to-the-protected-branch} - API method documentation
     */
    reposGetTeamsWithAccessToProtectedBranch(req: operations.ReposGetTeamsWithAccessToProtectedBranchRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetTeamsWithAccessToProtectedBranchResponse>;
    /**
     * Get users with access to the protected branch
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists the people who have push access to this branch.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-users-with-access-to-the-protected-branch} - API method documentation
     */
    reposGetUsersWithAccessToProtectedBranch(req: operations.ReposGetUsersWithAccessToProtectedBranchRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetUsersWithAccessToProtectedBranchResponse>;
    /**
     * Get a repository webhook
     *
     * @remarks
     * Returns a webhook configured in a repository. To get only the webhook `config` properties, see "[Get a webhook configuration for a repository](/rest/reference/repos#get-a-webhook-configuration-for-a-repository)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-repository-webhook} - API method documentation
     */
    reposGetWebhook(req: operations.ReposGetWebhookRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetWebhookResponse>;
    /**
     * Get a webhook configuration for a repository
     *
     * @remarks
     * Returns the webhook configuration for a repository. To get more information about the webhook, including the `active` state and `events`, use "[Get a repository webhook](/rest/reference/orgs#get-a-repository-webhook)."
     *
     * Access tokens must have the `read:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:read` permission.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-webhook-configuration-for-a-repository} - API method documentation
     */
    reposGetWebhookConfigForRepo(req: operations.ReposGetWebhookConfigForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetWebhookConfigForRepoResponse>;
    /**
     * List branches
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-branches} - API method documentation
     */
    reposListBranches(req: operations.ReposListBranchesRequest, config?: AxiosRequestConfig): Promise<operations.ReposListBranchesResponse>;
    /**
     * List branches for HEAD commit
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-branches-for-head-commit} - API method documentation
     */
    reposListBranchesForHeadCommit(req: operations.ReposListBranchesForHeadCommitRequest, config?: AxiosRequestConfig): Promise<operations.ReposListBranchesForHeadCommitResponse>;
    /**
     * List repository collaborators
     *
     * @remarks
     * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
     *
     * Team members will include the members of child teams.
     *
     * You must authenticate using an access token with the `read:org` and `repo` scopes with push access to use this
     * endpoint. GitHub Apps must have the `members` organization permission and `metadata` repository permission to use this
     * endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repository-collaborators} - API method documentation
     */
    reposListCollaborators(req: operations.ReposListCollaboratorsRequest, config?: AxiosRequestConfig): Promise<operations.ReposListCollaboratorsResponse>;
    /**
     * List commit comments
     *
     * @remarks
     * Use the `:commit_sha` to specify the commit that will have its comments listed.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-commit-comments} - API method documentation
     */
    reposListCommentsForCommit(req: operations.ReposListCommentsForCommitRequest, config?: AxiosRequestConfig): Promise<operations.ReposListCommentsForCommitResponse>;
    /**
     * List commit comments for a repository
     *
     * @remarks
     * Commit Comments use [these custom media types](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#custom-media-types). You can read more about the use of media types in the API [here](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types/).
     *
     * Comments are ordered by ascending ID.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-commit-comments-for-a-repository} - API method documentation
     */
    reposListCommitCommentsForRepo(req: operations.ReposListCommitCommentsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ReposListCommitCommentsForRepoResponse>;
    /**
     * List commit statuses for a reference
     *
     * @remarks
     * Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.
     *
     * This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-commit-statuses-for-a-reference} - API method documentation
     */
    reposListCommitStatusesForRef(req: operations.ReposListCommitStatusesForRefRequest, config?: AxiosRequestConfig): Promise<operations.ReposListCommitStatusesForRefResponse>;
    /**
     * List commits
     *
     * @remarks
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-commits} - API method documentation
     */
    reposListCommits(req: operations.ReposListCommitsRequest, config?: AxiosRequestConfig): Promise<operations.ReposListCommitsResponse>;
    /**
     * List repository contributors
     *
     * @remarks
     * Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API v3 caches contributor data to improve performance.
     *
     * GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repository-contributors} - API method documentation
     */
    reposListContributors(req: operations.ReposListContributorsRequest, config?: AxiosRequestConfig): Promise<operations.ReposListContributorsResponse>;
    /**
     * List deploy keys
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-deploy-keys} - API method documentation
     */
    reposListDeployKeys(req: operations.ReposListDeployKeysRequest, config?: AxiosRequestConfig): Promise<operations.ReposListDeployKeysResponse>;
    /**
     * List deployment statuses
     *
     * @remarks
     * Users with pull access can view deployment statuses for a deployment:
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-deployment-statuses} - API method documentation
     */
    reposListDeploymentStatuses(req: operations.ReposListDeploymentStatusesRequest, config?: AxiosRequestConfig): Promise<operations.ReposListDeploymentStatusesResponse>;
    /**
     * List deployments
     *
     * @remarks
     * Simple filtering of deployments is available via query parameters:
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-deployments} - API method documentation
     */
    reposListDeployments(req: operations.ReposListDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.ReposListDeploymentsResponse>;
    /**
     * List repositories for the authenticated user
     *
     * @remarks
     * Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
     *
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repositories-for-the-authenticated-user} - API method documentation
     */
    reposListForAuthenticatedUser(req: operations.ReposListForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ReposListForAuthenticatedUserResponse>;
    /**
     * List organization repositories
     *
     * @remarks
     * Lists repositories for the specified organization.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-organization-repositories} - API method documentation
     */
    reposListForOrg(req: operations.ReposListForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ReposListForOrgResponse>;
    /**
     * List repositories for a user
     *
     * @remarks
     * Lists public repositories for the specified user. Note: For GitHub AE, this endpoint will list internal repositories for the specified user.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repositories-for-a-user} - API method documentation
     */
    reposListForUser(req: operations.ReposListForUserRequest, config?: AxiosRequestConfig): Promise<operations.ReposListForUserResponse>;
    /**
     * List forks
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-forks} - API method documentation
     */
    reposListForks(req: operations.ReposListForksRequest, config?: AxiosRequestConfig): Promise<operations.ReposListForksResponse>;
    /**
     * List repository invitations
     *
     * @remarks
     * When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repository-invitations} - API method documentation
     */
    reposListInvitations(req: operations.ReposListInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.ReposListInvitationsResponse>;
    /**
     * List repository invitations for the authenticated user
     *
     * @remarks
     * When authenticating as a user, this endpoint will list all currently open repository invitations for that user.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repository-invitations-for-the-authenticated-user} - API method documentation
     */
    reposListInvitationsForAuthenticatedUser(req: operations.ReposListInvitationsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ReposListInvitationsForAuthenticatedUserResponse>;
    /**
     * List repository languages
     *
     * @remarks
     * Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repository-languages} - API method documentation
     */
    reposListLanguages(req: operations.ReposListLanguagesRequest, config?: AxiosRequestConfig): Promise<operations.ReposListLanguagesResponse>;
    /**
     * List GitHub Enterprise Server Pages builds
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-github-pages-builds} - API method documentation
     */
    reposListPagesBuilds(req: operations.ReposListPagesBuildsRequest, config?: AxiosRequestConfig): Promise<operations.ReposListPagesBuildsResponse>;
    /**
     * List public repositories
     *
     * @remarks
     * Lists all public repositories in the order that they were created.
     *
     * Note:
     * - For GitHub Enterprise Server, this endpoint will only list repositories available to all users on the enterprise.
     * - Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of repositories.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-public-repositories} - API method documentation
     */
    reposListPublic(req: operations.ReposListPublicRequest, config?: AxiosRequestConfig): Promise<operations.ReposListPublicResponse>;
    /**
     * List pull requests associated with a commit
     *
     * @remarks
     * Lists the merged pull request that introduced the commit to the repository. If the commit is not present in the default branch, additionally returns open pull requests associated with the commit. The results may include open and closed pull requests. Additional preview headers may be required to see certain details for associated pull requests, such as whether a pull request is in a draft state. For more information about previews that might affect this endpoint, see the [List pull requests](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-pull-requests) endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-pull-requests-associated-with-a-commit} - API method documentation
     */
    reposListPullRequestsAssociatedWithCommit(req: operations.ReposListPullRequestsAssociatedWithCommitRequest, config?: AxiosRequestConfig): Promise<operations.ReposListPullRequestsAssociatedWithCommitResponse>;
    /**
     * List release assets
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-release-assets} - API method documentation
     */
    reposListReleaseAssets(req: operations.ReposListReleaseAssetsRequest, config?: AxiosRequestConfig): Promise<operations.ReposListReleaseAssetsResponse>;
    /**
     * List releases
     *
     * @remarks
     * This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repository-tags).
     *
     * Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-releases} - API method documentation
     */
    reposListReleases(req: operations.ReposListReleasesRequest, config?: AxiosRequestConfig): Promise<operations.ReposListReleasesResponse>;
    /**
     * List repository tags
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repository-tags} - API method documentation
     */
    reposListTags(req: operations.ReposListTagsRequest, config?: AxiosRequestConfig): Promise<operations.ReposListTagsResponse>;
    /**
     * List repository teams
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repository-teams} - API method documentation
     */
    reposListTeams(req: operations.ReposListTeamsRequest, config?: AxiosRequestConfig): Promise<operations.ReposListTeamsResponse>;
    /**
     * List repository webhooks
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repository-webhooks} - API method documentation
     */
    reposListWebhooks(req: operations.ReposListWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.ReposListWebhooksResponse>;
    /**
     * Merge a branch
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#merge-a-branch} - API method documentation
     */
    reposMerge(req: operations.ReposMergeRequest, config?: AxiosRequestConfig): Promise<operations.ReposMergeResponse>;
    /**
     * Ping a repository webhook
     *
     * @remarks
     * This will trigger a [ping event](https://docs.github.com/enterprise-server@3.0/webhooks/#ping-event) to be sent to the hook.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#ping-a-repository-webhook} - API method documentation
     */
    reposPingWebhook(req: operations.ReposPingWebhookRequest, config?: AxiosRequestConfig): Promise<operations.ReposPingWebhookResponse>;
    /**
     * Remove app access restrictions
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Removes the ability of an app to push to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     *
     * | Type    | Description                                                                                                                                                |
     * | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#remove-app-access-restrictions} - API method documentation
     */
    reposRemoveAppAccessRestrictions(req: operations.ReposRemoveAppAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposRemoveAppAccessRestrictionsResponse>;
    /**
     * Remove a repository collaborator
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#remove-a-repository-collaborator} - API method documentation
     */
    reposRemoveCollaborator(req: operations.ReposRemoveCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.ReposRemoveCollaboratorResponse>;
    /**
     * Remove status check contexts
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#remove-status-check-contexts} - API method documentation
     */
    reposRemoveStatusCheckContexts(req: operations.ReposRemoveStatusCheckContextsRequest, config?: AxiosRequestConfig): Promise<operations.ReposRemoveStatusCheckContextsResponse>;
    /**
     * Remove status check protection
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#remove-status-check-protection} - API method documentation
     */
    reposRemoveStatusCheckProtection(req: operations.ReposRemoveStatusCheckProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposRemoveStatusCheckProtectionResponse>;
    /**
     * Remove team access restrictions
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Removes the ability of a team to push to this branch. You can also remove push access for child teams.
     *
     * | Type    | Description                                                                                                                                         |
     * | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | Teams that should no longer have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#remove-team-access-restrictions} - API method documentation
     */
    reposRemoveTeamAccessRestrictions(req: operations.ReposRemoveTeamAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposRemoveTeamAccessRestrictionsResponse>;
    /**
     * Remove user access restrictions
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Removes the ability of a user to push to this branch.
     *
     * | Type    | Description                                                                                                                                   |
     * | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | Usernames of the people who should no longer have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#remove-user-access-restrictions} - API method documentation
     */
    reposRemoveUserAccessRestrictions(req: operations.ReposRemoveUserAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposRemoveUserAccessRestrictionsResponse>;
    /**
     * Replace all repository topics
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#replace-all-repository-topics} - API method documentation
     */
    reposReplaceAllTopics(req: operations.ReposReplaceAllTopicsRequest, config?: AxiosRequestConfig): Promise<operations.ReposReplaceAllTopicsResponse>;
    /**
     * Request a GitHub Enterprise Server Pages build
     *
     * @remarks
     * You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.
     *
     * Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#request-a-github-pages-build} - API method documentation
     */
    reposRequestPagesBuild(req: operations.ReposRequestPagesBuildRequest, config?: AxiosRequestConfig): Promise<operations.ReposRequestPagesBuildResponse>;
    /**
     * Set admin branch protection
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#set-admin-branch-protection} - API method documentation
     */
    reposSetAdminBranchProtection(req: operations.ReposSetAdminBranchProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposSetAdminBranchProtectionResponse>;
    /**
     * Set app access restrictions
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Replaces the list of apps that have push access to this branch. This removes all apps that previously had push access and grants push access to the new list of apps. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     *
     * | Type    | Description                                                                                                                                                |
     * | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#set-app-access-restrictions} - API method documentation
     */
    reposSetAppAccessRestrictions(req: operations.ReposSetAppAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposSetAppAccessRestrictionsResponse>;
    /**
     * Set status check contexts
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#set-status-check-contexts} - API method documentation
     */
    reposSetStatusCheckContexts(req: operations.ReposSetStatusCheckContextsRequest, config?: AxiosRequestConfig): Promise<operations.ReposSetStatusCheckContextsResponse>;
    /**
     * Set team access restrictions
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. Team restrictions include child teams.
     *
     * | Type    | Description                                                                                                                                |
     * | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
     * | `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#set-team-access-restrictions} - API method documentation
     */
    reposSetTeamAccessRestrictions(req: operations.ReposSetTeamAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposSetTeamAccessRestrictionsResponse>;
    /**
     * Set user access restrictions
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.
     *
     * | Type    | Description                                                                                                                   |
     * | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#set-user-access-restrictions} - API method documentation
     */
    reposSetUserAccessRestrictions(req: operations.ReposSetUserAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposSetUserAccessRestrictionsResponse>;
    /**
     * Test the push repository webhook
     *
     * @remarks
     * This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.
     *
     * **Note**: Previously `/repos/:owner/:repo/hooks/:hook_id/test`
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#test-the-push-repository-webhook} - API method documentation
     */
    reposTestPushWebhook(req: operations.ReposTestPushWebhookRequest, config?: AxiosRequestConfig): Promise<operations.ReposTestPushWebhookResponse>;
    /**
     * Transfer a repository
     *
     * @remarks
     * A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://docs.github.com/articles/about-repository-transfers/).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#transfer-a-repository} - API method documentation
     */
    reposTransfer(req: operations.ReposTransferRequest, config?: AxiosRequestConfig): Promise<operations.ReposTransferResponse>;
    /**
     * Update a repository
     *
     * @remarks
     * **Note**: To edit a repository's topics, use the [Replace all repository topics](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#replace-all-repository-topics) endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos/#update-a-repository} - API method documentation
     */
    reposUpdate(req: operations.ReposUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdateResponse>;
    /**
     * Update branch protection
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Protecting a branch requires admin or owner permissions to the repository.
     *
     * **Note**: Passing new arrays of `users` and `teams` replaces their previous values.
     *
     * **Note**: The list of users, apps, and teams in total is limited to 100 items.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#update-branch-protection} - API method documentation
     */
    reposUpdateBranchProtection(req: operations.ReposUpdateBranchProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdateBranchProtectionResponse>;
    /**
     * Update a commit comment
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#update-a-commit-comment} - API method documentation
     */
    reposUpdateCommitComment(req: operations.ReposUpdateCommitCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdateCommitCommentResponse>;
    /**
     * Update information about a GitHub Enterprise Server Pages site
     *
     * @remarks
     * Updates information for a GitHub Enterprise Server Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#update-information-about-a-github-pages-site} - API method documentation
     */
    reposUpdateInformationAboutPagesSite(req: operations.ReposUpdateInformationAboutPagesSiteRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdateInformationAboutPagesSiteResponse>;
    /**
     * Update a repository invitation
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#update-a-repository-invitation} - API method documentation
     */
    reposUpdateInvitation(req: operations.ReposUpdateInvitationRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdateInvitationResponse>;
    /**
     * Update pull request review protection
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
     *
     * **Note**: Passing new arrays of `users` and `teams` replaces their previous values.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#update-pull-request-review-protection} - API method documentation
     */
    reposUpdatePullRequestReviewProtection(req: operations.ReposUpdatePullRequestReviewProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdatePullRequestReviewProtectionResponse>;
    /**
     * Update a release
     *
     * @remarks
     * Users with push access to the repository can edit a release.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#update-a-release} - API method documentation
     */
    reposUpdateRelease(req: operations.ReposUpdateReleaseRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdateReleaseResponse>;
    /**
     * Update a release asset
     *
     * @remarks
     * Users with push access to the repository can edit a release asset.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#update-a-release-asset} - API method documentation
     */
    reposUpdateReleaseAsset(req: operations.ReposUpdateReleaseAssetRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdateReleaseAssetResponse>;
    /**
     * Update status check protection
     *
     * @remarks
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#update-status-check-protection} - API method documentation
     */
    reposUpdateStatusCheckProtection(req: operations.ReposUpdateStatusCheckProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdateStatusCheckProtectionResponse>;
    /**
     * Update a repository webhook
     *
     * @remarks
     * Updates a webhook configured in a repository. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for a repository](/rest/reference/repos#update-a-webhook-configuration-for-a-repository)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#update-a-repository-webhook} - API method documentation
     */
    reposUpdateWebhook(req: operations.ReposUpdateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdateWebhookResponse>;
    /**
     * Update a webhook configuration for a repository
     *
     * @remarks
     * Updates the webhook configuration for a repository. To update more information about the webhook, including the `active` state and `events`, use "[Update a repository webhook](/rest/reference/orgs#update-a-repository-webhook)."
     *
     * Access tokens must have the `write:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:write` permission.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#update-a-webhook-configuration-for-a-repository} - API method documentation
     */
    reposUpdateWebhookConfigForRepo(req: operations.ReposUpdateWebhookConfigForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdateWebhookConfigForRepoResponse>;
    /**
     * Upload a release asset
     *
     * @remarks
     * This endpoint makes use of [a Hypermedia relation](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in
     * the response of the [Create a release endpoint](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-release) to upload a release asset.
     *
     * You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.
     *
     * Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example:
     *
     * `application/zip`
     *
     * GitHub Enterprise Server expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example,
     * you'll still need to pass your authentication to be able to upload an asset.
     *
     * When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted.
     *
     * **Notes:**
     * *   GitHub Enterprise Server renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The "[List assets for a release](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-assets-for-a-release)"
     * endpoint lists the renamed filenames. For more information and help, contact [GitHub Enterprise Server Support](https://support.github.com/contact?tags=dotcom-rest-api).
     * *   If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.0/rest/reference/repos#upload-a-release-asset} - API method documentation
     */
    reposUploadReleaseAsset(req: operations.ReposUploadReleaseAssetRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ReposUploadReleaseAssetResponse>;
}
