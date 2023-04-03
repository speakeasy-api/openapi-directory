# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### actions

* `actionsAddSelectedRepoToOrgSecret` - Add selected repository to an organization secret
* `actionsAddSelfHostedRunnerToGroupForOrg` - Add a self-hosted runner to a group for an organization
* `actionsCancelWorkflowRun` - Cancel a workflow run
* `actionsCreateOrUpdateOrgSecret` - Create or update an organization secret
* `actionsCreateOrUpdateRepoSecret` - Create or update a repository secret
* `actionsCreateRegistrationTokenForOrg` - Create a registration token for an organization
* `actionsCreateRegistrationTokenForRepo` - Create a registration token for a repository
* `actionsCreateRemoveTokenForOrg` - Create a remove token for an organization
* `actionsCreateRemoveTokenForRepo` - Create a remove token for a repository
* `actionsCreateSelfHostedRunnerGroupForOrg` - Create a self-hosted runner group for an organization
* `actionsCreateWorkflowDispatch` - Create a workflow dispatch event
* `actionsDeleteArtifact` - Delete an artifact
* `actionsDeleteOrgSecret` - Delete an organization secret
* `actionsDeleteRepoSecret` - Delete a repository secret
* `actionsDeleteSelfHostedRunnerFromOrg` - Delete a self-hosted runner from an organization
* `actionsDeleteSelfHostedRunnerFromRepo` - Delete a self-hosted runner from a repository
* `actionsDeleteSelfHostedRunnerGroupFromOrg` - Delete a self-hosted runner group from an organization
* `actionsDeleteWorkflowRun` - Delete a workflow run
* `actionsDeleteWorkflowRunLogs` - Delete workflow run logs
* `actionsDisableSelectedRepositoryGithubActionsOrganization` - Disable a selected repository for GitHub Actions in an organization
* `actionsDisableWorkflow` - Disable a workflow
* `actionsDownloadArtifact` - Download an artifact
* `actionsDownloadJobLogsForWorkflowRun` - Download job logs for a workflow run
* `actionsDownloadWorkflowRunAttemptLogs` - Download workflow run attempt logs
* `actionsDownloadWorkflowRunLogs` - Download workflow run logs
* `actionsEnableSelectedRepositoryGithubActionsOrganization` - Enable a selected repository for GitHub Actions in an organization
* `actionsEnableWorkflow` - Enable a workflow
* `actionsGetAllowedActionsOrganization` - Get allowed actions for an organization
* `actionsGetAllowedActionsRepository` - Get allowed actions for a repository
* `actionsGetArtifact` - Get an artifact
* `actionsGetGithubActionsPermissionsOrganization` - Get GitHub Actions permissions for an organization
* `actionsGetGithubActionsPermissionsRepository` - Get GitHub Actions permissions for a repository
* `actionsGetJobForWorkflowRun` - Get a job for a workflow run
* `actionsGetOrgPublicKey` - Get an organization public key
* `actionsGetOrgSecret` - Get an organization secret
* `actionsGetRepoPublicKey` - Get a repository public key
* `actionsGetRepoSecret` - Get a repository secret
* `actionsGetSelfHostedRunnerForOrg` - Get a self-hosted runner for an organization
* `actionsGetSelfHostedRunnerForRepo` - Get a self-hosted runner for a repository
* `actionsGetSelfHostedRunnerGroupForOrg` - Get a self-hosted runner group for an organization
* `actionsGetWorkflow` - Get a workflow
* `actionsGetWorkflowRun` - Get a workflow run
* `actionsGetWorkflowRunAttempt` - Get a workflow run attempt
* `actionsGetWorkflowRunUsage` - Get workflow run usage
* `actionsGetWorkflowUsage` - Get workflow usage
* `actionsListArtifactsForRepo` - List artifacts for a repository
* `actionsListJobsForWorkflowRun` - List jobs for a workflow run
* `actionsListJobsForWorkflowRunAttempt` - List jobs for a workflow run attempt
* `actionsListOrgSecrets` - List organization secrets
* `actionsListRepoSecrets` - List repository secrets
* `actionsListRepoWorkflows` - List repository workflows
* `actionsListRunnerApplicationsForOrg` - List runner applications for an organization
* `actionsListRunnerApplicationsForRepo` - List runner applications for a repository
* `actionsListSelectedReposForOrgSecret` - List selected repositories for an organization secret
* `actionsListSelectedRepositoriesEnabledGithubActionsOrganization` - List selected repositories enabled for GitHub Actions in an organization
* `actionsListSelfHostedRunnerGroupsForOrg` - List self-hosted runner groups for an organization
* `actionsListSelfHostedRunnersForOrg` - List self-hosted runners for an organization
* `actionsListSelfHostedRunnersForRepo` - List self-hosted runners for a repository
* `actionsListWorkflowRunArtifacts` - List workflow run artifacts
* `actionsListWorkflowRuns` - List workflow runs for a workflow
* `actionsListWorkflowRunsForRepo` - List workflow runs for a repository
* `actionsReRunWorkflow` - Re-run a workflow
* `actionsRemoveSelectedRepoFromOrgSecret` - Remove selected repository from an organization secret
* `actionsSetAllowedActionsOrganization` - Set allowed actions for an organization
* `actionsSetAllowedActionsRepository` - Set allowed actions for a repository
* `actionsSetGithubActionsPermissionsOrganization` - Set GitHub Actions permissions for an organization
* `actionsSetGithubActionsPermissionsRepository` - Set GitHub Actions permissions for a repository
* `actionsSetSelectedReposForOrgSecret` - Set selected repositories for an organization secret
* `actionsSetSelectedRepositoriesEnabledGithubActionsOrganization` - Set selected repositories enabled for GitHub Actions in an organization
* `actionsUpdateSelfHostedRunnerGroupForOrg` - Update a self-hosted runner group for an organization

### activity

* `activityCheckRepoIsStarredByAuthenticatedUser` - Check if a repository is starred by the authenticated user
* `activityDeleteRepoSubscription` - Delete a repository subscription
* `activityDeleteThreadSubscription` - Delete a thread subscription
* `activityGetFeeds` - Get feeds
* `activityGetRepoSubscription` - Get a repository subscription
* `activityGetThread` - Get a thread
* `activityGetThreadSubscriptionForAuthenticatedUser` - Get a thread subscription for the authenticated user
* `activityListEventsForAuthenticatedUser` - List events for the authenticated user
* `activityListNotificationsForAuthenticatedUser` - List notifications for the authenticated user
* `activityListOrgEventsForAuthenticatedUser` - List organization events for the authenticated user
* `activityListRepoEvents` - List repository events
* `activityListRepoNotificationsForAuthenticatedUser` - List repository notifications for the authenticated user
* `activityListReposStarredByAuthenticatedUser` - List repositories starred by the authenticated user
* `activityListReposStarredByUser` - List repositories starred by a user
* `activityListReposWatchedByUser` - List repositories watched by a user
* `activityListStargazersForRepo` - List stargazers
* `activityListWatchedReposForAuthenticatedUser` - List repositories watched by the authenticated user
* `activityListWatchersForRepo` - List watchers
* `activityMarkNotificationsAsRead` - Mark notifications as read
* `activityMarkRepoNotificationsAsRead` - Mark repository notifications as read
* `activityMarkThreadAsRead` - Mark a thread as read
* `activitySetRepoSubscription` - Set a repository subscription
* `activitySetThreadSubscription` - Set a thread subscription
* `activityStarRepoForAuthenticatedUser` - Star a repository for the authenticated user
* `activityUnstarRepoForAuthenticatedUser` - Unstar a repository for the authenticated user

### apps

* `appsAddRepoToInstallationForAuthenticatedUser` - Add a repository to an app installation
* `appsCheckToken` - Check a token
* `appsCreateFromManifest` - Create a GitHub App from a manifest
* `appsCreateInstallationAccessToken` - Create an installation access token for an app
* `appsDeleteAuthorization` - Delete an app authorization
* `appsDeleteInstallation` - Delete an installation for the authenticated app
* `appsDeleteToken` - Delete an app token
* `appsGetAuthenticated` - Get the authenticated app
* `appsGetBySlug` - Get an app
* `appsGetInstallation` - Get an installation for the authenticated app
* `appsGetOrgInstallation` - Get an organization installation for the authenticated app
* `appsGetRepoInstallation` - Get a repository installation for the authenticated app
* `appsGetUserInstallation` - Get a user installation for the authenticated app
* `appsGetWebhookConfigForApp` - Get a webhook configuration for an app
* `appsGetWebhookDelivery` - Get a delivery for an app webhook
* `appsListInstallationReposForAuthenticatedUser` - List repositories accessible to the user access token
* `appsListInstallations` - List installations for the authenticated app
* `appsListInstallationsForAuthenticatedUser` - List app installations accessible to the user access token
* `appsListReposAccessibleToInstallation` - List repositories accessible to the app installation
* `appsListWebhookDeliveries` - List deliveries for an app webhook
* `appsRedeliverWebhookDelivery` - Redeliver a delivery for an app webhook
* `appsRemoveRepoFromInstallationForAuthenticatedUser` - Remove a repository from an app installation
* `appsResetAuthorization` - Reset an authorization
* `appsResetToken` - Reset a token
* `appsRevokeInstallationAccessToken` - Revoke an installation access token
* `appsSuspendInstallation` - Suspend an app installation
* `appsUnsuspendInstallation` - Unsuspend an app installation
* `appsUpdateWebhookConfigForApp` - Update a webhook configuration for an app

### checks

* `checksCreate` - Create a check run
* `checksCreateSuite` - Create a check suite
* `checksGet` - Get a check run
* `checksGetSuite` - Get a check suite
* `checksListAnnotations` - List check run annotations
* `checksListForRef` - List check runs for a Git reference
* `checksListForSuite` - List check runs in a check suite
* `checksListSuitesForRef` - List check suites for a Git reference
* `checksRerequestRun` - Rerequest a check run
* `checksRerequestSuite` - Rerequest a check suite
* `checksSetSuitesPreferences` - Update repository preferences for check suites
* `checksUpdate` - Update a check run

### codeScanning

* `codeScanningDeleteAnalysis` - Delete a code scanning analysis from a repository
* `codeScanningGetAlert` - Get a code scanning alert
* `codeScanningGetAnalysis` - Get a code scanning analysis for a repository
* `codeScanningGetSarif` - Get information about a SARIF upload
* `codeScanningListAlertInstances` - List instances of a code scanning alert
* `codeScanningListAlertsForOrg` - List code scanning alerts for an organization
* `codeScanningListAlertsForRepo` - List code scanning alerts for a repository
* `codeScanningListRecentAnalyses` - List code scanning analyses for a repository
* `codeScanningUpdateAlert` - Update a code scanning alert
* `codeScanningUploadSarif` - Upload an analysis as SARIF data

### codesOfConduct

* `codesOfConductGetAllCodesOfConduct` - Get all codes of conduct
* `codesOfConductGetConductCode` - Get a code of conduct

### emojis

* `emojisGet` - Get emojis

### enterpriseAdmin

* `enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise` - Add a self-hosted runner to a group for an enterprise
* `enterpriseAdminCreateGlobalWebhook` - Create a global webhook
* `enterpriseAdminCreateImpersonationOAuthToken` - Create an impersonation OAuth token
* `enterpriseAdminCreateOrg` - Create an organization
* `enterpriseAdminCreatePreReceiveEnvironment` - Create a pre-receive environment
* `enterpriseAdminCreateRegistrationTokenForEnterprise` - Create a registration token for an enterprise
* `enterpriseAdminCreateRemoveTokenForEnterprise` - Create a remove token for an enterprise
* `enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise` - Create a self-hosted runner group for an enterprise
* `enterpriseAdminDeleteGlobalWebhook` - Delete a global webhook
* `enterpriseAdminDeleteImpersonationOAuthToken` - Delete an impersonation OAuth token
* `enterpriseAdminDeletePersonalAccessToken` - Delete a personal access token
* `enterpriseAdminDeletePreReceiveEnvironment` - Delete a pre-receive environment
* `enterpriseAdminDeletePublicKey` - Delete a public key
* `enterpriseAdminDeleteSelfHostedRunnerFromEnterprise` - Delete a self-hosted runner from an enterprise
* `enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise` - Delete a self-hosted runner group from an enterprise
* `enterpriseAdminDeleteUser` - Delete a user
* `enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise` - Disable a selected organization for GitHub Actions in an enterprise
* `enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise` - Enable a selected organization for GitHub Actions in an enterprise
* `enterpriseAdminGetAllStats` - Get all statistics
* `enterpriseAdminGetAllowedActionsEnterprise` - Get allowed actions for an enterprise
* `enterpriseAdminGetAnnouncement` - Get the global announcement banner
* `enterpriseAdminGetAuditLog` - Get the audit log for an enterprise
* `enterpriseAdminGetCommentStats` - Get comment statistics
* `enterpriseAdminGetDownloadStatusForPreReceiveEnvironment` - Get the download status for a pre-receive environment
* `enterpriseAdminGetGistStats` - Get gist statistics
* `enterpriseAdminGetGithubActionsPermissionsEnterprise` - Get GitHub Actions permissions for an enterprise
* `enterpriseAdminGetGlobalWebhook` - Get a global webhook
* `enterpriseAdminGetHooksStats` - Get hooks statistics
* `enterpriseAdminGetIssueStats` - Get issue statistics
* `enterpriseAdminGetLicenseInformation` - Get license information
* `enterpriseAdminGetMilestoneStats` - Get milestone statistics
* `enterpriseAdminGetOrgStats` - Get organization statistics
* `enterpriseAdminGetPagesStats` - Get pages statistics
* `enterpriseAdminGetPreReceiveEnvironment` - Get a pre-receive environment
* `enterpriseAdminGetPullRequestStats` - Get pull request statistics
* `enterpriseAdminGetRepoStats` - Get repository statistics
* `enterpriseAdminGetSelfHostedRunnerForEnterprise` - Get a self-hosted runner for an enterprise
* `enterpriseAdminGetSelfHostedRunnerGroupForEnterprise` - Get a self-hosted runner group for an enterprise
* `enterpriseAdminGetUserStats` - Get users statistics
* `enterpriseAdminListGlobalWebhooks` - List global webhooks
* `enterpriseAdminListPersonalAccessTokens` - List personal access tokens
* `enterpriseAdminListPreReceiveEnvironments` - List pre-receive environments
* `enterpriseAdminListPublicKeys` - List public keys
* `enterpriseAdminListRunnerApplicationsForEnterprise` - List runner applications for an enterprise
* `enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise` - List selected organizations enabled for GitHub Actions in an enterprise
* `enterpriseAdminListSelfHostedRunnerGroupsForEnterprise` - List self-hosted runner groups for an enterprise
* `enterpriseAdminListSelfHostedRunnersForEnterprise` - List self-hosted runners for an enterprise
* `enterpriseAdminListSelfHostedRunnersInGroupForEnterprise` - List self-hosted runners in a group for an enterprise
* `enterpriseAdminPingGlobalWebhook` - Ping a global webhook
* `enterpriseAdminRemoveAnnouncement` - Remove the global announcement banner
* `enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise` - Remove a self-hosted runner from a group for an enterprise
* `enterpriseAdminSetAllowedActionsEnterprise` - Set allowed actions for an enterprise
* `enterpriseAdminSetAnnouncement` - Set the global announcement banner
* `enterpriseAdminSetGithubActionsPermissionsEnterprise` - Set GitHub Actions permissions for an enterprise
* `enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise` - Set selected organizations enabled for GitHub Actions in an enterprise
* `enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise` - Set self-hosted runners in a group for an enterprise
* `enterpriseAdminStartPreReceiveEnvironmentDownload` - Start a pre-receive environment download
* `enterpriseAdminSuspendUser` - Suspend a user
* `enterpriseAdminUnsuspendUser` - Unsuspend a user
* `enterpriseAdminUpdateGlobalWebhook` - Update a global webhook
* `enterpriseAdminUpdateOrgName` - Update an organization name
* `enterpriseAdminUpdatePreReceiveEnvironment` - Update a pre-receive environment
* `enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise` - Update a self-hosted runner group for an enterprise

### gists

* `gistsCheckIsStarred` - Check if a gist is starred
* `gistsCreate` - Create a gist
* `gistsCreateComment` - Create a gist comment
* `gistsDelete` - Delete a gist
* `gistsDeleteComment` - Delete a gist comment
* `gistsFork` - Fork a gist
* `gistsGet` - Get a gist
* `gistsGetComment` - Get a gist comment
* `gistsGetRevision` - Get a gist revision
* `gistsList` - List gists for the authenticated user
* `gistsListComments` - List gist comments
* `gistsListCommits` - List gist commits
* `gistsListForUser` - List gists for a user
* `gistsListForks` - List gist forks
* `gistsListPublic` - List public gists
* `gistsListStarred` - List starred gists
* `gistsStar` - Star a gist
* `gistsUnstar` - Unstar a gist
* `gistsUpdate` - Update a gist
* `gistsUpdateComment` - Update a gist comment

### git

* `gitCreateBlob` - Create a blob
* `gitCreateCommit` - Create a commit
* `gitCreateRef` - Create a reference
* `gitCreateTag` - Create a tag object
* `gitCreateTree` - Create a tree
* `gitDeleteRef` - Delete a reference
* `gitGetBlob` - Get a blob
* `gitGetCommit` - Get a commit
* `gitGetRef` - Get a reference
* `gitGetTag` - Get a tag
* `gitGetTree` - Get a tree
* `gitListMatchingRefs` - List matching references
* `gitUpdateRef` - Update a reference

### gitignore

* `gitignoreGetAllTemplates` - Get all gitignore templates
* `gitignoreGetTemplate` - Get a gitignore template

### issues

* `issuesAddAssignees` - Add assignees to an issue
* `issuesAddLabels` - Add labels to an issue
* `issuesCheckUserCanBeAssigned` - Check if a user can be assigned
* `issuesCheckUserCanBeAssignedToIssue` - Check if a user can be assigned to a issue
* `issuesCreate` - Create an issue
* `issuesCreateComment` - Create an issue comment
* `issuesCreateLabel` - Create a label
* `issuesCreateMilestone` - Create a milestone
* `issuesDeleteComment` - Delete an issue comment
* `issuesDeleteLabel` - Delete a label
* `issuesDeleteMilestone` - Delete a milestone
* `issuesGet` - Get an issue
* `issuesGetComment` - Get an issue comment
* `issuesGetEvent` - Get an issue event
* `issuesGetLabel` - Get a label
* `issuesGetMilestone` - Get a milestone
* `issuesList` - List issues assigned to the authenticated user
* `issuesListAssignees` - List assignees
* `issuesListComments` - List issue comments
* `issuesListCommentsForRepo` - List issue comments for a repository
* `issuesListEvents` - List issue events
* `issuesListEventsForRepo` - List issue events for a repository
* `issuesListEventsForTimeline` - List timeline events for an issue
* `issuesListForAuthenticatedUser` - List user account issues assigned to the authenticated user
* `issuesListForOrg` - List organization issues assigned to the authenticated user
* `issuesListForRepo` - List repository issues
* `issuesListLabelsForMilestone` - List labels for issues in a milestone
* `issuesListLabelsForRepo` - List labels for a repository
* `issuesListLabelsOnIssue` - List labels for an issue
* `issuesListMilestones` - List milestones
* `issuesLock` - Lock an issue
* `issuesRemoveAllLabels` - Remove all labels from an issue
* `issuesRemoveAssignees` - Remove assignees from an issue
* `issuesRemoveLabel` - Remove a label from an issue
* `issuesSetLabels` - Set labels for an issue
* `issuesUnlock` - Unlock an issue
* `issuesUpdate` - Update an issue
* `issuesUpdateComment` - Update an issue comment
* `issuesUpdateLabel` - Update a label
* `issuesUpdateMilestone` - Update a milestone

### licenses

* `licensesGet` - Get a license
* `licensesGetAllCommonlyUsed` - Get all commonly used licenses
* `licensesGetForRepo` - Get the license for a repository

### markdown

* `markdownRender` - Render a Markdown document
* `markdownRenderRaw` - Render a Markdown document in raw mode

### meta

* `metaGet` - Get GitHub AE meta information
* `metaGetOctocat` - Get Octocat
* `metaGetZen` - Get the Zen of GitHub
* `metaRoot` - GitHub API Root

### migrations

* `migrationsDeleteArchiveForOrg` - Delete an organization migration archive
* `migrationsDownloadArchiveForOrg` - Download an organization migration archive
* `migrationsGetArchiveForAuthenticatedUser` - Download a user migration archive
* `migrationsGetStatusForOrg` - Get an organization migration status
* `migrationsListForAuthenticatedUser` - List user migrations
* `migrationsListForOrg` - List organization migrations
* `migrationsListReposForAuthenticatedUser` - List repositories for a user migration
* `migrationsListReposForOrg` - List repositories in an organization migration
* `migrationsStartForAuthenticatedUser` - Start a user migration
* `migrationsStartForOrg` - Start an organization migration
* `migrationsUnlockRepoForOrg` - Unlock an organization repository

### orgs

* `orgsCheckMembershipForUser` - Check organization membership for a user
* `orgsConvertMemberToOutsideCollaborator` - Convert an organization member to outside collaborator
* `orgsCreateWebhook` - Create an organization webhook
* `orgsDeleteWebhook` - Delete an organization webhook
* `orgsGet` - Get an organization
* `orgsGetAuditLog` - Get the audit log for an organization
* `orgsGetMembershipForAuthenticatedUser` - Get an organization membership for the authenticated user
* `orgsGetMembershipForUser` - Get organization membership for a user
* `orgsGetWebhook` - Get an organization webhook
* `orgsGetWebhookConfigForOrg` - Get a webhook configuration for an organization
* `orgsGetWebhookDelivery` - Get a webhook delivery for an organization webhook
* `orgsList` - List organizations
* `orgsListAppInstallations` - List app installations for an organization
* `orgsListForAuthenticatedUser` - List organizations for the authenticated user
* `orgsListForUser` - List organizations for a user
* `orgsListMembers` - List organization members
* `orgsListMembershipsForAuthenticatedUser` - List organization memberships for the authenticated user
* `orgsListOutsideCollaborators` - List outside collaborators for an organization
* `orgsListWebhookDeliveries` - List deliveries for an organization webhook
* `orgsListWebhooks` - List organization webhooks
* `orgsPingWebhook` - Ping an organization webhook
* `orgsRedeliverWebhookDelivery` - Redeliver a delivery for an organization webhook
* `orgsRemoveMember` - Remove an organization member
* `orgsRemoveMembershipForUser` - Remove organization membership for a user
* `orgsRemoveOutsideCollaborator` - Remove outside collaborator from an organization
* `orgsSetMembershipForUser` - Set organization membership for a user
* `orgsUpdate` - Update an organization
* `orgsUpdateMembershipForAuthenticatedUser` - Update an organization membership for the authenticated user
* `orgsUpdateWebhook` - Update an organization webhook
* `orgsUpdateWebhookConfigForOrg` - Update a webhook configuration for an organization

### projects

* `projectsAddCollaborator` - Add project collaborator
* `projectsCreateCard` - Create a project card
* `projectsCreateColumn` - Create a project column
* `projectsCreateForAuthenticatedUser` - Create a user project
* `projectsCreateForOrg` - Create an organization project
* `projectsCreateForRepo` - Create a repository project
* `projectsDelete` - Delete a project
* `projectsDeleteCard` - Delete a project card
* `projectsDeleteColumn` - Delete a project column
* `projectsGet` - Get a project
* `projectsGetCard` - Get a project card
* `projectsGetColumn` - Get a project column
* `projectsGetPermissionForUser` - Get project permission for a user
* `projectsListCards` - List project cards
* `projectsListCollaborators` - List project collaborators
* `projectsListColumns` - List project columns
* `projectsListForOrg` - List organization projects
* `projectsListForRepo` - List repository projects
* `projectsListForUser` - List user projects
* `projectsMoveCard` - Move a project card
* `projectsMoveColumn` - Move a project column
* `projectsRemoveCollaborator` - Remove user as a collaborator
* `projectsUpdate` - Update a project
* `projectsUpdateCard` - Update an existing project card
* `projectsUpdateColumn` - Update an existing project column

### pulls

* `pullsCheckIfMerged` - Check if a pull request has been merged
* `pullsCreate` - Create a pull request
* `pullsCreateReplyForReviewComment` - Create a reply for a review comment
* `pullsCreateReview` - Create a review for a pull request
* `pullsCreateReviewComment` - Create a review comment for a pull request
* `pullsDeletePendingReview` - Delete a pending review for a pull request
* `pullsDeleteReviewComment` - Delete a review comment for a pull request
* `pullsDismissReview` - Dismiss a review for a pull request
* `pullsGet` - Get a pull request
* `pullsGetReview` - Get a review for a pull request
* `pullsGetReviewComment` - Get a review comment for a pull request
* `pullsList` - List pull requests
* `pullsListCommentsForReview` - List comments for a pull request review
* `pullsListCommits` - List commits on a pull request
* `pullsListFiles` - List pull requests files
* `pullsListRequestedReviewers` - Get all requested reviewers for a pull request
* `pullsListReviewComments` - List review comments on a pull request
* `pullsListReviewCommentsForRepo` - List review comments in a repository
* `pullsListReviews` - List reviews for a pull request
* `pullsMerge` - Merge a pull request
* `pullsRemoveRequestedReviewers` - Remove requested reviewers from a pull request
* `pullsRequestReviewers` - Request reviewers for a pull request
* `pullsSubmitReview` - Submit a review for a pull request
* `pullsUpdate` - Update a pull request
* `pullsUpdateBranch` - Update a pull request branch
* `pullsUpdateReview` - Update a review for a pull request
* `pullsUpdateReviewComment` - Update a review comment for a pull request

### rateLimit

* `rateLimitGet` - Get rate limit status for the authenticated user

### reactions

* `reactionsCreateForCommitComment` - Create reaction for a commit comment
* `reactionsCreateForIssue` - Create reaction for an issue
* `reactionsCreateForIssueComment` - Create reaction for an issue comment
* `reactionsCreateForPullRequestReviewComment` - Create reaction for a pull request review comment
* `reactionsCreateForRelease` - Create reaction for a release
* `reactionsCreateForTeamDiscussionCommentInOrg` - Create reaction for a team discussion comment
* `reactionsCreateForTeamDiscussionInOrg` - Create reaction for a team discussion
* `reactionsDeleteForCommitComment` - Delete a commit comment reaction
* `reactionsDeleteForIssue` - Delete an issue reaction
* `reactionsDeleteForIssueComment` - Delete an issue comment reaction
* `reactionsDeleteForPullRequestComment` - Delete a pull request comment reaction
* `reactionsDeleteForRelease` - Delete a release reaction
* `reactionsDeleteForTeamDiscussion` - Delete team discussion reaction
* `reactionsDeleteForTeamDiscussionComment` - Delete team discussion comment reaction
* `reactionsListForCommitComment` - List reactions for a commit comment
* `reactionsListForIssue` - List reactions for an issue
* `reactionsListForIssueComment` - List reactions for an issue comment
* `reactionsListForPullRequestReviewComment` - List reactions for a pull request review comment
* `reactionsListForRelease` - List reactions for a release
* `reactionsListForTeamDiscussionCommentInOrg` - List reactions for a team discussion comment
* `reactionsListForTeamDiscussionInOrg` - List reactions for a team discussion

### repos

* `reposAcceptInvitationForAuthenticatedUser` - Accept a repository invitation
* `reposAddAppAccessRestrictions` - Add app access restrictions
* `reposAddCollaborator` - Add a repository collaborator
* `reposAddStatusCheckContexts` - Add status check contexts
* `reposAddTeamAccessRestrictions` - Add team access restrictions
* `reposAddUserAccessRestrictions` - Add user access restrictions
* `reposCheckCollaborator` - Check if a user is a repository collaborator
* `reposCodeownersErrors` - List CODEOWNERS errors
* `reposCompareCommits` - Compare two commits
* `reposCreateAutolink` - Create an autolink reference for a repository
* `reposCreateCommitComment` - Create a commit comment
* `reposCreateCommitSignatureProtection` - Create commit signature protection
* `reposCreateCommitStatus` - Create a commit status
* `reposCreateDeployKey` - Create a deploy key
* `reposCreateDeployment` - Create a deployment
* `reposCreateDeploymentBranchPolicy` - Create a deployment branch policy
* `reposCreateDeploymentStatus` - Create a deployment status
* `reposCreateDispatchEvent` - Create a repository dispatch event
* `reposCreateForAuthenticatedUser` - Create a repository for the authenticated user
* `reposCreateFork` - Create a fork
* `reposCreateInOrg` - Create an organization repository
* `reposCreateOrUpdateEnvironment` - Create or update an environment
* `reposCreateOrUpdateFileContents` - Create or update file contents
* `reposCreatePagesSite` - Create a GitHub AE Pages site
* `reposCreateRelease` - Create a release
* `reposCreateUsingTemplate` - Create a repository using a template
* `reposCreateWebhook` - Create a repository webhook
* `reposDeclineInvitationForAuthenticatedUser` - Decline a repository invitation
* `reposDelete` - Delete a repository
* `reposDeleteAccessRestrictions` - Delete access restrictions
* `reposDeleteAdminBranchProtection` - Delete admin branch protection
* `reposDeleteAnEnvironment` - Delete an environment
* `reposDeleteAutolink` - Delete an autolink reference from a repository
* `reposDeleteBranchProtection` - Delete branch protection
* `reposDeleteCommitComment` - Delete a commit comment
* `reposDeleteCommitSignatureProtection` - Delete commit signature protection
* `reposDeleteDeployKey` - Delete a deploy key
* `reposDeleteDeployment` - Delete a deployment
* `reposDeleteDeploymentBranchPolicy` - Delete a deployment branch policy
* `reposDeleteFile` - Delete a file
* `reposDeleteInvitation` - Delete a repository invitation
* `reposDeletePagesSite` - Delete a GitHub AE Pages site
* `reposDeletePullRequestReviewProtection` - Delete pull request review protection
* `reposDeleteRelease` - Delete a release
* `reposDeleteReleaseAsset` - Delete a release asset
* `reposDeleteWebhook` - Delete a repository webhook
* `reposDisableLfsForRepo` - Disable Git LFS for a repository
* `reposDownloadTarballArchive` - Download a repository archive (tar)
* `reposDownloadZipballArchive` - Download a repository archive (zip)
* `reposEnableLfsForRepo` - Enable Git LFS for a repository
* `reposGet` - Get a repository
* `reposGetAccessRestrictions` - Get access restrictions
* `reposGetAdminBranchProtection` - Get admin branch protection
* `reposGetAllEnvironments` - List environments
* `reposGetAllStatusCheckContexts` - Get all status check contexts
* `reposGetAllTopics` - Get all repository topics
* `reposGetAppsWithAccessToProtectedBranch` - Get apps with access to the protected branch
* `reposGetAutolink` - Get an autolink reference of a repository
* `reposGetBranch` - Get a branch
* `reposGetBranchProtection` - Get branch protection
* `reposGetCodeFrequencyStats` - Get the weekly commit activity
* `reposGetCollaboratorPermissionLevel` - Get repository permissions for a user
* `reposGetCombinedStatusForRef` - Get the combined status for a specific reference
* `reposGetCommit` - Get a commit
* `reposGetCommitActivityStats` - Get the last year of commit activity
* `reposGetCommitComment` - Get a commit comment
* `reposGetCommitSignatureProtection` - Get commit signature protection
* `reposGetContent` - Get repository content
* `reposGetContributorsStats` - Get all contributor commit activity
* `reposGetDeployKey` - Get a deploy key
* `reposGetDeployment` - Get a deployment
* `reposGetDeploymentBranchPolicy` - Get a deployment branch policy
* `reposGetDeploymentStatus` - Get a deployment status
* `reposGetEnvironment` - Get an environment
* `reposGetLatestPagesBuild` - Get latest Pages build
* `reposGetLatestRelease` - Get the latest release
* `reposGetPages` - Get a GitHub AE Pages site
* `reposGetPagesBuild` - Get GitHub AE Pages build
* `reposGetParticipationStats` - Get the weekly commit count
* `reposGetPullRequestReviewProtection` - Get pull request review protection
* `reposGetPunchCardStats` - Get the hourly commit count for each day
* `reposGetReadme` - Get a repository README
* `reposGetReadmeInDirectory` - Get a repository README for a directory
* `reposGetRelease` - Get a release
* `reposGetReleaseAsset` - Get a release asset
* `reposGetReleaseByTag` - Get a release by tag name
* `reposGetStatusChecksProtection` - Get status checks protection
* `reposGetTeamsWithAccessToProtectedBranch` - Get teams with access to the protected branch
* `reposGetUsersWithAccessToProtectedBranch` - Get users with access to the protected branch
* `reposGetWebhook` - Get a repository webhook
* `reposGetWebhookConfigForRepo` - Get a webhook configuration for a repository
* `reposGetWebhookDelivery` - Get a delivery for a repository webhook
* `reposListAutolinks` - List all autolinks of a repository
* `reposListBranches` - List branches
* `reposListBranchesForHeadCommit` - List branches for HEAD commit
* `reposListCollaborators` - List repository collaborators
* `reposListCommentsForCommit` - List commit comments
* `reposListCommitCommentsForRepo` - List commit comments for a repository
* `reposListCommitStatusesForRef` - List commit statuses for a reference
* `reposListCommits` - List commits
* `reposListContributors` - List repository contributors
* `reposListDeployKeys` - List deploy keys
* `reposListDeploymentBranchPolicies` - List deployment branch policies
* `reposListDeploymentStatuses` - List deployment statuses
* `reposListDeployments` - List deployments
* `reposListForAuthenticatedUser` - List repositories for the authenticated user
* `reposListForOrg` - List organization repositories
* `reposListForUser` - List repositories for a user
* `reposListForks` - List forks
* `reposListInvitations` - List repository invitations
* `reposListInvitationsForAuthenticatedUser` - List repository invitations for the authenticated user
* `reposListLanguages` - List repository languages
* `reposListPagesBuilds` - List GitHub AE Pages builds
* `reposListPullRequestsAssociatedWithCommit` - List pull requests associated with a commit
* `reposListReleaseAssets` - List release assets
* `reposListReleases` - List releases
* `reposListTags` - List repository tags
* `reposListTeams` - List repository teams
* `reposListWebhookDeliveries` - List deliveries for a repository webhook
* `reposListWebhooks` - List repository webhooks
* `reposMerge` - Merge a branch
* `reposMergeUpstream` - Sync a fork branch with the upstream repository
* `reposPingWebhook` - Ping a repository webhook
* `reposRedeliverWebhookDelivery` - Redeliver a delivery for a repository webhook
* `reposRemoveAppAccessRestrictions` - Remove app access restrictions
* `reposRemoveCollaborator` - Remove a repository collaborator
* `reposRemoveStatusCheckContexts` - Remove status check contexts
* `reposRemoveStatusCheckProtection` - Remove status check protection
* `reposRemoveTeamAccessRestrictions` - Remove team access restrictions
* `reposRemoveUserAccessRestrictions` - Remove user access restrictions
* `reposReplaceAllTopics` - Replace all repository topics
* `reposRequestPagesBuild` - Request a GitHub AE Pages build
* `reposSetAdminBranchProtection` - Set admin branch protection
* `reposSetAppAccessRestrictions` - Set app access restrictions
* `reposSetStatusCheckContexts` - Set status check contexts
* `reposSetTeamAccessRestrictions` - Set team access restrictions
* `reposSetUserAccessRestrictions` - Set user access restrictions
* `reposTestPushWebhook` - Test the push repository webhook
* `reposTransfer` - Transfer a repository
* `reposUpdate` - Update a repository
* `reposUpdateBranchProtection` - Update branch protection
* `reposUpdateCommitComment` - Update a commit comment
* `reposUpdateDeploymentBranchPolicy` - Update a deployment branch policy
* `reposUpdateInformationAboutPagesSite` - Update information about a GitHub AE Pages site
* `reposUpdateInvitation` - Update a repository invitation
* `reposUpdatePullRequestReviewProtection` - Update pull request review protection
* `reposUpdateRelease` - Update a release
* `reposUpdateReleaseAsset` - Update a release asset
* `reposUpdateStatusCheckProtection` - Update status check protection
* `reposUpdateWebhook` - Update a repository webhook
* `reposUpdateWebhookConfigForRepo` - Update a webhook configuration for a repository
* `reposUploadReleaseAsset` - Upload a release asset

### search

* `searchCode` - Search code
* `searchCommits` - Search commits
* `searchIssuesAndPullRequests` - Search issues and pull requests
* `searchLabels` - Search labels
* `searchRepos` - Search repositories
* `searchTopics` - Search topics
* `searchUsers` - Search users

### secretScanning

* `secretScanningGetAlert` - Get a secret scanning alert
* `secretScanningListAlertsForEnterprise` - List secret scanning alerts for an enterprise
* `secretScanningListAlertsForRepo` - List secret scanning alerts for a repository
* `secretScanningListLocationsForAlert` - List locations for a secret scanning alert
* `secretScanningUpdateAlert` - Update a secret scanning alert

### teams

* `teamsAddMemberLegacy` - Add team member (Legacy)
* `teamsAddOrUpdateMembershipForUserInOrg` - Add or update team membership for a user
* `teamsAddOrUpdateMembershipForUserLegacy` - Add or update team membership for a user (Legacy)
* `teamsAddOrUpdateProjectPermissionsInOrg` - Add or update team project permissions
* `teamsAddOrUpdateProjectPermissionsLegacy` - Add or update team project permissions (Legacy)
* `teamsAddOrUpdateRepoPermissionsInOrg` - Add or update team repository permissions
* `teamsAddOrUpdateRepoPermissionsLegacy` - Add or update team repository permissions (Legacy)
* `teamsCheckPermissionsForProjectInOrg` - Check team permissions for a project
* `teamsCheckPermissionsForProjectLegacy` - Check team permissions for a project (Legacy)
* `teamsCheckPermissionsForRepoInOrg` - Check team permissions for a repository
* `teamsCheckPermissionsForRepoLegacy` - Check team permissions for a repository (Legacy)
* `teamsCreate` - Create a team
* `teamsCreateDiscussionCommentInOrg` - Create a discussion comment
* `teamsCreateDiscussionCommentLegacy` - Create a discussion comment (Legacy)
* `teamsCreateDiscussionInOrg` - Create a discussion
* `teamsCreateDiscussionLegacy` - Create a discussion (Legacy)
* `teamsDeleteDiscussionCommentInOrg` - Delete a discussion comment
* `teamsDeleteDiscussionCommentLegacy` - Delete a discussion comment (Legacy)
* `teamsDeleteDiscussionInOrg` - Delete a discussion
* `teamsDeleteDiscussionLegacy` - Delete a discussion (Legacy)
* `teamsDeleteInOrg` - Delete a team
* `teamsDeleteLegacy` - Delete a team (Legacy)
* `teamsExternalIdpGroupInfoForOrg` - Get an external group
* `teamsGetByName` - Get a team by name
* `teamsGetDiscussionCommentInOrg` - Get a discussion comment
* `teamsGetDiscussionCommentLegacy` - Get a discussion comment (Legacy)
* `teamsGetDiscussionInOrg` - Get a discussion
* `teamsGetDiscussionLegacy` - Get a discussion (Legacy)
* `teamsGetLegacy` - Get a team (Legacy)
* `teamsGetMemberLegacy` - Get team member (Legacy)
* `teamsGetMembershipForUserInOrg` - Get team membership for a user
* `teamsGetMembershipForUserLegacy` - Get team membership for a user (Legacy)
* `teamsLinkExternalIdpGroupToTeamForOrg` - Update the connection between an external group and a team
* `teamsList` - List teams
* `teamsListChildInOrg` - List child teams
* `teamsListChildLegacy` - List child teams (Legacy)
* `teamsListDiscussionCommentsInOrg` - List discussion comments
* `teamsListDiscussionCommentsLegacy` - List discussion comments (Legacy)
* `teamsListDiscussionsInOrg` - List discussions
* `teamsListDiscussionsLegacy` - List discussions (Legacy)
* `teamsListExternalIdpGroupsForOrg` - List external groups in an organization
* `teamsListForAuthenticatedUser` - List teams for the authenticated user
* `teamsListMembersInOrg` - List team members
* `teamsListMembersLegacy` - List team members (Legacy)
* `teamsListProjectsInOrg` - List team projects
* `teamsListProjectsLegacy` - List team projects (Legacy)
* `teamsListReposInOrg` - List team repositories
* `teamsListReposLegacy` - List team repositories (Legacy)
* `teamsRemoveMemberLegacy` - Remove team member (Legacy)
* `teamsRemoveMembershipForUserInOrg` - Remove team membership for a user
* `teamsRemoveMembershipForUserLegacy` - Remove team membership for a user (Legacy)
* `teamsRemoveProjectInOrg` - Remove a project from a team
* `teamsRemoveProjectLegacy` - Remove a project from a team (Legacy)
* `teamsRemoveRepoInOrg` - Remove a repository from a team
* `teamsRemoveRepoLegacy` - Remove a repository from a team (Legacy)
* `teamsUnlinkExternalIdpGroupFromTeamForOrg` - Remove the connection between an external group and a team
* `teamsUpdateDiscussionCommentInOrg` - Update a discussion comment
* `teamsUpdateDiscussionCommentLegacy` - Update a discussion comment (Legacy)
* `teamsUpdateDiscussionInOrg` - Update a discussion
* `teamsUpdateDiscussionLegacy` - Update a discussion (Legacy)
* `teamsUpdateInOrg` - Update a team
* `teamsUpdateLegacy` - Update a team (Legacy)

### users

* `usersCheckFollowingForUser` - Check if a user follows another user
* `usersCheckPersonIsFollowedByAuthenticated` - Check if a person is followed by the authenticated user
* `usersCreateGpgKeyForAuthenticatedUser` - Create a GPG key for the authenticated user
* `usersCreatePublicSshKeyForAuthenticatedUser` - Create a public SSH key for the authenticated user
* `usersDeleteGpgKeyForAuthenticatedUser` - Delete a GPG key for the authenticated user
* `usersDeletePublicSshKeyForAuthenticatedUser` - Delete a public SSH key for the authenticated user
* `usersFollow` - Follow a user
* `usersGetAuthenticated` - Get the authenticated user
* `usersGetByUsername` - Get a user
* `usersGetContextForUser` - Get contextual information for a user
* `usersGetGpgKeyForAuthenticatedUser` - Get a GPG key for the authenticated user
* `usersGetPublicSshKeyForAuthenticatedUser` - Get a public SSH key for the authenticated user
* `usersList` - List users
* `usersListFollowedByAuthenticatedUser` - List the people the authenticated user follows
* `usersListFollowersForAuthenticatedUser` - List followers of the authenticated user
* `usersListFollowersForUser` - List followers of a user
* `usersListFollowingForUser` - List the people a user follows
* `usersListGpgKeysForAuthenticatedUser` - List GPG keys for the authenticated user
* `usersListGpgKeysForUser` - List GPG keys for a user
* `usersListPublicKeysForUser` - List public keys for a user
* `usersListPublicSshKeysForAuthenticatedUser` - List public SSH keys for the authenticated user
* `usersUnfollow` - Unfollow a user
* `usersUpdateAuthenticated` - Update the authenticated user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
