# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/github.com/github.ae/1.1.4/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ActionsAddSelectedRepoToOrgSecretRequest{
        PathParams: operations.ActionsAddSelectedRepoToOrgSecretPathParams{
            Org: "unde",
            RepositoryID: 592845,
            SecretName: "porro",
        },
    }

    ctx := context.Background()
    res, err := s.Actions.ActionsAddSelectedRepoToOrgSecret(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Actions

* `ActionsAddSelectedRepoToOrgSecret` - Add selected repository to an organization secret
* `ActionsAddSelfHostedRunnerToGroupForOrg` - Add a self-hosted runner to a group for an organization
* `ActionsCancelWorkflowRun` - Cancel a workflow run
* `ActionsCreateOrUpdateOrgSecret` - Create or update an organization secret
* `ActionsCreateOrUpdateRepoSecret` - Create or update a repository secret
* `ActionsCreateRegistrationTokenForOrg` - Create a registration token for an organization
* `ActionsCreateRegistrationTokenForRepo` - Create a registration token for a repository
* `ActionsCreateRemoveTokenForOrg` - Create a remove token for an organization
* `ActionsCreateRemoveTokenForRepo` - Create a remove token for a repository
* `ActionsCreateSelfHostedRunnerGroupForOrg` - Create a self-hosted runner group for an organization
* `ActionsCreateWorkflowDispatch` - Create a workflow dispatch event
* `ActionsDeleteArtifact` - Delete an artifact
* `ActionsDeleteOrgSecret` - Delete an organization secret
* `ActionsDeleteRepoSecret` - Delete a repository secret
* `ActionsDeleteSelfHostedRunnerFromOrg` - Delete a self-hosted runner from an organization
* `ActionsDeleteSelfHostedRunnerFromRepo` - Delete a self-hosted runner from a repository
* `ActionsDeleteSelfHostedRunnerGroupFromOrg` - Delete a self-hosted runner group from an organization
* `ActionsDeleteWorkflowRun` - Delete a workflow run
* `ActionsDeleteWorkflowRunLogs` - Delete workflow run logs
* `ActionsDisableSelectedRepositoryGithubActionsOrganization` - Disable a selected repository for GitHub Actions in an organization
* `ActionsDisableWorkflow` - Disable a workflow
* `ActionsDownloadArtifact` - Download an artifact
* `ActionsDownloadJobLogsForWorkflowRun` - Download job logs for a workflow run
* `ActionsDownloadWorkflowRunAttemptLogs` - Download workflow run attempt logs
* `ActionsDownloadWorkflowRunLogs` - Download workflow run logs
* `ActionsEnableSelectedRepositoryGithubActionsOrganization` - Enable a selected repository for GitHub Actions in an organization
* `ActionsEnableWorkflow` - Enable a workflow
* `ActionsGetAllowedActionsOrganization` - Get allowed actions for an organization
* `ActionsGetAllowedActionsRepository` - Get allowed actions for a repository
* `ActionsGetArtifact` - Get an artifact
* `ActionsGetGithubActionsPermissionsOrganization` - Get GitHub Actions permissions for an organization
* `ActionsGetGithubActionsPermissionsRepository` - Get GitHub Actions permissions for a repository
* `ActionsGetJobForWorkflowRun` - Get a job for a workflow run
* `ActionsGetOrgPublicKey` - Get an organization public key
* `ActionsGetOrgSecret` - Get an organization secret
* `ActionsGetRepoPublicKey` - Get a repository public key
* `ActionsGetRepoSecret` - Get a repository secret
* `ActionsGetSelfHostedRunnerForOrg` - Get a self-hosted runner for an organization
* `ActionsGetSelfHostedRunnerForRepo` - Get a self-hosted runner for a repository
* `ActionsGetSelfHostedRunnerGroupForOrg` - Get a self-hosted runner group for an organization
* `ActionsGetWorkflow` - Get a workflow
* `ActionsGetWorkflowRun` - Get a workflow run
* `ActionsGetWorkflowRunAttempt` - Get a workflow run attempt
* `ActionsGetWorkflowRunUsage` - Get workflow run usage
* `ActionsGetWorkflowUsage` - Get workflow usage
* `ActionsListArtifactsForRepo` - List artifacts for a repository
* `ActionsListJobsForWorkflowRun` - List jobs for a workflow run
* `ActionsListJobsForWorkflowRunAttempt` - List jobs for a workflow run attempt
* `ActionsListOrgSecrets` - List organization secrets
* `ActionsListRepoSecrets` - List repository secrets
* `ActionsListRepoWorkflows` - List repository workflows
* `ActionsListRunnerApplicationsForOrg` - List runner applications for an organization
* `ActionsListRunnerApplicationsForRepo` - List runner applications for a repository
* `ActionsListSelectedReposForOrgSecret` - List selected repositories for an organization secret
* `ActionsListSelectedRepositoriesEnabledGithubActionsOrganization` - List selected repositories enabled for GitHub Actions in an organization
* `ActionsListSelfHostedRunnerGroupsForOrg` - List self-hosted runner groups for an organization
* `ActionsListSelfHostedRunnersForOrg` - List self-hosted runners for an organization
* `ActionsListSelfHostedRunnersForRepo` - List self-hosted runners for a repository
* `ActionsListWorkflowRunArtifacts` - List workflow run artifacts
* `ActionsListWorkflowRuns` - List workflow runs for a workflow
* `ActionsListWorkflowRunsForRepo` - List workflow runs for a repository
* `ActionsReRunWorkflow` - Re-run a workflow
* `ActionsRemoveSelectedRepoFromOrgSecret` - Remove selected repository from an organization secret
* `ActionsSetAllowedActionsOrganization` - Set allowed actions for an organization
* `ActionsSetAllowedActionsRepository` - Set allowed actions for a repository
* `ActionsSetGithubActionsPermissionsOrganization` - Set GitHub Actions permissions for an organization
* `ActionsSetGithubActionsPermissionsRepository` - Set GitHub Actions permissions for a repository
* `ActionsSetSelectedReposForOrgSecret` - Set selected repositories for an organization secret
* `ActionsSetSelectedRepositoriesEnabledGithubActionsOrganization` - Set selected repositories enabled for GitHub Actions in an organization
* `ActionsUpdateSelfHostedRunnerGroupForOrg` - Update a self-hosted runner group for an organization

### Activity

* `ActivityCheckRepoIsStarredByAuthenticatedUser` - Check if a repository is starred by the authenticated user
* `ActivityDeleteRepoSubscription` - Delete a repository subscription
* `ActivityDeleteThreadSubscription` - Delete a thread subscription
* `ActivityGetFeeds` - Get feeds
* `ActivityGetRepoSubscription` - Get a repository subscription
* `ActivityGetThread` - Get a thread
* `ActivityGetThreadSubscriptionForAuthenticatedUser` - Get a thread subscription for the authenticated user
* `ActivityListEventsForAuthenticatedUser` - List events for the authenticated user
* `ActivityListNotificationsForAuthenticatedUser` - List notifications for the authenticated user
* `ActivityListOrgEventsForAuthenticatedUser` - List organization events for the authenticated user
* `ActivityListRepoEvents` - List repository events
* `ActivityListRepoNotificationsForAuthenticatedUser` - List repository notifications for the authenticated user
* `ActivityListReposStarredByAuthenticatedUser` - List repositories starred by the authenticated user
* `ActivityListReposStarredByUser` - List repositories starred by a user
* `ActivityListReposWatchedByUser` - List repositories watched by a user
* `ActivityListStargazersForRepo` - List stargazers
* `ActivityListWatchedReposForAuthenticatedUser` - List repositories watched by the authenticated user
* `ActivityListWatchersForRepo` - List watchers
* `ActivityMarkNotificationsAsRead` - Mark notifications as read
* `ActivityMarkRepoNotificationsAsRead` - Mark repository notifications as read
* `ActivityMarkThreadAsRead` - Mark a thread as read
* `ActivitySetRepoSubscription` - Set a repository subscription
* `ActivitySetThreadSubscription` - Set a thread subscription
* `ActivityStarRepoForAuthenticatedUser` - Star a repository for the authenticated user
* `ActivityUnstarRepoForAuthenticatedUser` - Unstar a repository for the authenticated user

### Apps

* `AppsAddRepoToInstallationForAuthenticatedUser` - Add a repository to an app installation
* `AppsCheckToken` - Check a token
* `AppsCreateFromManifest` - Create a GitHub App from a manifest
* `AppsCreateInstallationAccessToken` - Create an installation access token for an app
* `AppsDeleteAuthorization` - Delete an app authorization
* `AppsDeleteInstallation` - Delete an installation for the authenticated app
* `AppsDeleteToken` - Delete an app token
* `AppsGetAuthenticated` - Get the authenticated app
* `AppsGetBySlug` - Get an app
* `AppsGetInstallation` - Get an installation for the authenticated app
* `AppsGetOrgInstallation` - Get an organization installation for the authenticated app
* `AppsGetRepoInstallation` - Get a repository installation for the authenticated app
* `AppsGetUserInstallation` - Get a user installation for the authenticated app
* `AppsGetWebhookConfigForApp` - Get a webhook configuration for an app
* `AppsGetWebhookDelivery` - Get a delivery for an app webhook
* `AppsListInstallationReposForAuthenticatedUser` - List repositories accessible to the user access token
* `AppsListInstallations` - List installations for the authenticated app
* `AppsListInstallationsForAuthenticatedUser` - List app installations accessible to the user access token
* `AppsListReposAccessibleToInstallation` - List repositories accessible to the app installation
* `AppsListWebhookDeliveries` - List deliveries for an app webhook
* `AppsRedeliverWebhookDelivery` - Redeliver a delivery for an app webhook
* `AppsRemoveRepoFromInstallationForAuthenticatedUser` - Remove a repository from an app installation
* `AppsResetAuthorization` - Reset an authorization
* `AppsResetToken` - Reset a token
* `AppsRevokeInstallationAccessToken` - Revoke an installation access token
* `AppsSuspendInstallation` - Suspend an app installation
* `AppsUnsuspendInstallation` - Unsuspend an app installation
* `AppsUpdateWebhookConfigForApp` - Update a webhook configuration for an app

### Checks

* `ChecksCreate` - Create a check run
* `ChecksCreateSuite` - Create a check suite
* `ChecksGet` - Get a check run
* `ChecksGetSuite` - Get a check suite
* `ChecksListAnnotations` - List check run annotations
* `ChecksListForRef` - List check runs for a Git reference
* `ChecksListForSuite` - List check runs in a check suite
* `ChecksListSuitesForRef` - List check suites for a Git reference
* `ChecksRerequestRun` - Rerequest a check run
* `ChecksRerequestSuite` - Rerequest a check suite
* `ChecksSetSuitesPreferences` - Update repository preferences for check suites
* `ChecksUpdate` - Update a check run

### CodeScanning

* `CodeScanningDeleteAnalysis` - Delete a code scanning analysis from a repository
* `CodeScanningGetAlert` - Get a code scanning alert
* `CodeScanningGetAnalysis` - Get a code scanning analysis for a repository
* `CodeScanningGetSarif` - Get information about a SARIF upload
* `CodeScanningListAlertInstances` - List instances of a code scanning alert
* `CodeScanningListAlertsForOrg` - List code scanning alerts for an organization
* `CodeScanningListAlertsForRepo` - List code scanning alerts for a repository
* `CodeScanningListRecentAnalyses` - List code scanning analyses for a repository
* `CodeScanningUpdateAlert` - Update a code scanning alert
* `CodeScanningUploadSarif` - Upload an analysis as SARIF data

### CodesOfConduct

* `CodesOfConductGetAllCodesOfConduct` - Get all codes of conduct
* `CodesOfConductGetConductCode` - Get a code of conduct

### Emojis

* `EmojisGet` - Get emojis

### EnterpriseAdmin

* `EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprise` - Add a self-hosted runner to a group for an enterprise
* `EnterpriseAdminCreateGlobalWebhook` - Create a global webhook
* `EnterpriseAdminCreateImpersonationOAuthToken` - Create an impersonation OAuth token
* `EnterpriseAdminCreateOrg` - Create an organization
* `EnterpriseAdminCreatePreReceiveEnvironment` - Create a pre-receive environment
* `EnterpriseAdminCreateRegistrationTokenForEnterprise` - Create a registration token for an enterprise
* `EnterpriseAdminCreateRemoveTokenForEnterprise` - Create a remove token for an enterprise
* `EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprise` - Create a self-hosted runner group for an enterprise
* `EnterpriseAdminDeleteGlobalWebhook` - Delete a global webhook
* `EnterpriseAdminDeleteImpersonationOAuthToken` - Delete an impersonation OAuth token
* `EnterpriseAdminDeletePersonalAccessToken` - Delete a personal access token
* `EnterpriseAdminDeletePreReceiveEnvironment` - Delete a pre-receive environment
* `EnterpriseAdminDeletePublicKey` - Delete a public key
* `EnterpriseAdminDeleteSelfHostedRunnerFromEnterprise` - Delete a self-hosted runner from an enterprise
* `EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise` - Delete a self-hosted runner group from an enterprise
* `EnterpriseAdminDeleteUser` - Delete a user
* `EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise` - Disable a selected organization for GitHub Actions in an enterprise
* `EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise` - Enable a selected organization for GitHub Actions in an enterprise
* `EnterpriseAdminGetAllStats` - Get all statistics
* `EnterpriseAdminGetAllowedActionsEnterprise` - Get allowed actions for an enterprise
* `EnterpriseAdminGetAnnouncement` - Get the global announcement banner
* `EnterpriseAdminGetAuditLog` - Get the audit log for an enterprise
* `EnterpriseAdminGetCommentStats` - Get comment statistics
* `EnterpriseAdminGetDownloadStatusForPreReceiveEnvironment` - Get the download status for a pre-receive environment
* `EnterpriseAdminGetGistStats` - Get gist statistics
* `EnterpriseAdminGetGithubActionsPermissionsEnterprise` - Get GitHub Actions permissions for an enterprise
* `EnterpriseAdminGetGlobalWebhook` - Get a global webhook
* `EnterpriseAdminGetHooksStats` - Get hooks statistics
* `EnterpriseAdminGetIssueStats` - Get issue statistics
* `EnterpriseAdminGetLicenseInformation` - Get license information
* `EnterpriseAdminGetMilestoneStats` - Get milestone statistics
* `EnterpriseAdminGetOrgStats` - Get organization statistics
* `EnterpriseAdminGetPagesStats` - Get pages statistics
* `EnterpriseAdminGetPreReceiveEnvironment` - Get a pre-receive environment
* `EnterpriseAdminGetPullRequestStats` - Get pull request statistics
* `EnterpriseAdminGetRepoStats` - Get repository statistics
* `EnterpriseAdminGetSelfHostedRunnerForEnterprise` - Get a self-hosted runner for an enterprise
* `EnterpriseAdminGetSelfHostedRunnerGroupForEnterprise` - Get a self-hosted runner group for an enterprise
* `EnterpriseAdminGetUserStats` - Get users statistics
* `EnterpriseAdminListGlobalWebhooks` - List global webhooks
* `EnterpriseAdminListPersonalAccessTokens` - List personal access tokens
* `EnterpriseAdminListPreReceiveEnvironments` - List pre-receive environments
* `EnterpriseAdminListPublicKeys` - List public keys
* `EnterpriseAdminListRunnerApplicationsForEnterprise` - List runner applications for an enterprise
* `EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise` - List selected organizations enabled for GitHub Actions in an enterprise
* `EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise` - List self-hosted runner groups for an enterprise
* `EnterpriseAdminListSelfHostedRunnersForEnterprise` - List self-hosted runners for an enterprise
* `EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise` - List self-hosted runners in a group for an enterprise
* `EnterpriseAdminPingGlobalWebhook` - Ping a global webhook
* `EnterpriseAdminRemoveAnnouncement` - Remove the global announcement banner
* `EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise` - Remove a self-hosted runner from a group for an enterprise
* `EnterpriseAdminSetAllowedActionsEnterprise` - Set allowed actions for an enterprise
* `EnterpriseAdminSetAnnouncement` - Set the global announcement banner
* `EnterpriseAdminSetGithubActionsPermissionsEnterprise` - Set GitHub Actions permissions for an enterprise
* `EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise` - Set selected organizations enabled for GitHub Actions in an enterprise
* `EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprise` - Set self-hosted runners in a group for an enterprise
* `EnterpriseAdminStartPreReceiveEnvironmentDownload` - Start a pre-receive environment download
* `EnterpriseAdminSuspendUser` - Suspend a user
* `EnterpriseAdminUnsuspendUser` - Unsuspend a user
* `EnterpriseAdminUpdateGlobalWebhook` - Update a global webhook
* `EnterpriseAdminUpdateOrgName` - Update an organization name
* `EnterpriseAdminUpdatePreReceiveEnvironment` - Update a pre-receive environment
* `EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise` - Update a self-hosted runner group for an enterprise

### Gists

* `GistsCheckIsStarred` - Check if a gist is starred
* `GistsCreate` - Create a gist
* `GistsCreateComment` - Create a gist comment
* `GistsDelete` - Delete a gist
* `GistsDeleteComment` - Delete a gist comment
* `GistsFork` - Fork a gist
* `GistsGet` - Get a gist
* `GistsGetComment` - Get a gist comment
* `GistsGetRevision` - Get a gist revision
* `GistsList` - List gists for the authenticated user
* `GistsListComments` - List gist comments
* `GistsListCommits` - List gist commits
* `GistsListForUser` - List gists for a user
* `GistsListForks` - List gist forks
* `GistsListPublic` - List public gists
* `GistsListStarred` - List starred gists
* `GistsStar` - Star a gist
* `GistsUnstar` - Unstar a gist
* `GistsUpdate` - Update a gist
* `GistsUpdateComment` - Update a gist comment

### Git

* `GitCreateBlob` - Create a blob
* `GitCreateCommit` - Create a commit
* `GitCreateRef` - Create a reference
* `GitCreateTag` - Create a tag object
* `GitCreateTree` - Create a tree
* `GitDeleteRef` - Delete a reference
* `GitGetBlob` - Get a blob
* `GitGetCommit` - Get a commit
* `GitGetRef` - Get a reference
* `GitGetTag` - Get a tag
* `GitGetTree` - Get a tree
* `GitListMatchingRefs` - List matching references
* `GitUpdateRef` - Update a reference

### Gitignore

* `GitignoreGetAllTemplates` - Get all gitignore templates
* `GitignoreGetTemplate` - Get a gitignore template

### Issues

* `IssuesAddAssignees` - Add assignees to an issue
* `IssuesAddLabels` - Add labels to an issue
* `IssuesCheckUserCanBeAssigned` - Check if a user can be assigned
* `IssuesCheckUserCanBeAssignedToIssue` - Check if a user can be assigned to a issue
* `IssuesCreate` - Create an issue
* `IssuesCreateComment` - Create an issue comment
* `IssuesCreateLabel` - Create a label
* `IssuesCreateMilestone` - Create a milestone
* `IssuesDeleteComment` - Delete an issue comment
* `IssuesDeleteLabel` - Delete a label
* `IssuesDeleteMilestone` - Delete a milestone
* `IssuesGet` - Get an issue
* `IssuesGetComment` - Get an issue comment
* `IssuesGetEvent` - Get an issue event
* `IssuesGetLabel` - Get a label
* `IssuesGetMilestone` - Get a milestone
* `IssuesList` - List issues assigned to the authenticated user
* `IssuesListAssignees` - List assignees
* `IssuesListComments` - List issue comments
* `IssuesListCommentsForRepo` - List issue comments for a repository
* `IssuesListEvents` - List issue events
* `IssuesListEventsForRepo` - List issue events for a repository
* `IssuesListEventsForTimeline` - List timeline events for an issue
* `IssuesListForAuthenticatedUser` - List user account issues assigned to the authenticated user
* `IssuesListForOrg` - List organization issues assigned to the authenticated user
* `IssuesListForRepo` - List repository issues
* `IssuesListLabelsForMilestone` - List labels for issues in a milestone
* `IssuesListLabelsForRepo` - List labels for a repository
* `IssuesListLabelsOnIssue` - List labels for an issue
* `IssuesListMilestones` - List milestones
* `IssuesLock` - Lock an issue
* `IssuesRemoveAllLabels` - Remove all labels from an issue
* `IssuesRemoveAssignees` - Remove assignees from an issue
* `IssuesRemoveLabel` - Remove a label from an issue
* `IssuesSetLabels` - Set labels for an issue
* `IssuesUnlock` - Unlock an issue
* `IssuesUpdate` - Update an issue
* `IssuesUpdateComment` - Update an issue comment
* `IssuesUpdateLabel` - Update a label
* `IssuesUpdateMilestone` - Update a milestone

### Licenses

* `LicensesGet` - Get a license
* `LicensesGetAllCommonlyUsed` - Get all commonly used licenses
* `LicensesGetForRepo` - Get the license for a repository

### Markdown

* `MarkdownRender` - Render a Markdown document
* `MarkdownRenderRaw` - Render a Markdown document in raw mode

### Meta

* `MetaGet` - Get GitHub AE meta information
* `MetaGetOctocat` - Get Octocat
* `MetaGetZen` - Get the Zen of GitHub
* `MetaRoot` - GitHub API Root

### Migrations

* `MigrationsDeleteArchiveForOrg` - Delete an organization migration archive
* `MigrationsDownloadArchiveForOrg` - Download an organization migration archive
* `MigrationsGetArchiveForAuthenticatedUser` - Download a user migration archive
* `MigrationsGetStatusForOrg` - Get an organization migration status
* `MigrationsListForAuthenticatedUser` - List user migrations
* `MigrationsListForOrg` - List organization migrations
* `MigrationsListReposForAuthenticatedUser` - List repositories for a user migration
* `MigrationsListReposForOrg` - List repositories in an organization migration
* `MigrationsStartForAuthenticatedUser` - Start a user migration
* `MigrationsStartForOrg` - Start an organization migration
* `MigrationsUnlockRepoForOrg` - Unlock an organization repository

### Orgs

* `OrgsCheckMembershipForUser` - Check organization membership for a user
* `OrgsConvertMemberToOutsideCollaborator` - Convert an organization member to outside collaborator
* `OrgsCreateWebhook` - Create an organization webhook
* `OrgsDeleteWebhook` - Delete an organization webhook
* `OrgsGet` - Get an organization
* `OrgsGetAuditLog` - Get the audit log for an organization
* `OrgsGetMembershipForAuthenticatedUser` - Get an organization membership for the authenticated user
* `OrgsGetMembershipForUser` - Get organization membership for a user
* `OrgsGetWebhook` - Get an organization webhook
* `OrgsGetWebhookConfigForOrg` - Get a webhook configuration for an organization
* `OrgsGetWebhookDelivery` - Get a webhook delivery for an organization webhook
* `OrgsList` - List organizations
* `OrgsListAppInstallations` - List app installations for an organization
* `OrgsListForAuthenticatedUser` - List organizations for the authenticated user
* `OrgsListForUser` - List organizations for a user
* `OrgsListMembers` - List organization members
* `OrgsListMembershipsForAuthenticatedUser` - List organization memberships for the authenticated user
* `OrgsListOutsideCollaborators` - List outside collaborators for an organization
* `OrgsListWebhookDeliveries` - List deliveries for an organization webhook
* `OrgsListWebhooks` - List organization webhooks
* `OrgsPingWebhook` - Ping an organization webhook
* `OrgsRedeliverWebhookDelivery` - Redeliver a delivery for an organization webhook
* `OrgsRemoveMember` - Remove an organization member
* `OrgsRemoveMembershipForUser` - Remove organization membership for a user
* `OrgsRemoveOutsideCollaborator` - Remove outside collaborator from an organization
* `OrgsSetMembershipForUser` - Set organization membership for a user
* `OrgsUpdate` - Update an organization
* `OrgsUpdateMembershipForAuthenticatedUser` - Update an organization membership for the authenticated user
* `OrgsUpdateWebhook` - Update an organization webhook
* `OrgsUpdateWebhookConfigForOrg` - Update a webhook configuration for an organization

### Projects

* `ProjectsAddCollaborator` - Add project collaborator
* `ProjectsCreateCard` - Create a project card
* `ProjectsCreateColumn` - Create a project column
* `ProjectsCreateForAuthenticatedUser` - Create a user project
* `ProjectsCreateForOrg` - Create an organization project
* `ProjectsCreateForRepo` - Create a repository project
* `ProjectsDelete` - Delete a project
* `ProjectsDeleteCard` - Delete a project card
* `ProjectsDeleteColumn` - Delete a project column
* `ProjectsGet` - Get a project
* `ProjectsGetCard` - Get a project card
* `ProjectsGetColumn` - Get a project column
* `ProjectsGetPermissionForUser` - Get project permission for a user
* `ProjectsListCards` - List project cards
* `ProjectsListCollaborators` - List project collaborators
* `ProjectsListColumns` - List project columns
* `ProjectsListForOrg` - List organization projects
* `ProjectsListForRepo` - List repository projects
* `ProjectsListForUser` - List user projects
* `ProjectsMoveCard` - Move a project card
* `ProjectsMoveColumn` - Move a project column
* `ProjectsRemoveCollaborator` - Remove user as a collaborator
* `ProjectsUpdate` - Update a project
* `ProjectsUpdateCard` - Update an existing project card
* `ProjectsUpdateColumn` - Update an existing project column

### Pulls

* `PullsCheckIfMerged` - Check if a pull request has been merged
* `PullsCreate` - Create a pull request
* `PullsCreateReplyForReviewComment` - Create a reply for a review comment
* `PullsCreateReview` - Create a review for a pull request
* `PullsCreateReviewComment` - Create a review comment for a pull request
* `PullsDeletePendingReview` - Delete a pending review for a pull request
* `PullsDeleteReviewComment` - Delete a review comment for a pull request
* `PullsDismissReview` - Dismiss a review for a pull request
* `PullsGet` - Get a pull request
* `PullsGetReview` - Get a review for a pull request
* `PullsGetReviewComment` - Get a review comment for a pull request
* `PullsList` - List pull requests
* `PullsListCommentsForReview` - List comments for a pull request review
* `PullsListCommits` - List commits on a pull request
* `PullsListFiles` - List pull requests files
* `PullsListRequestedReviewers` - Get all requested reviewers for a pull request
* `PullsListReviewComments` - List review comments on a pull request
* `PullsListReviewCommentsForRepo` - List review comments in a repository
* `PullsListReviews` - List reviews for a pull request
* `PullsMerge` - Merge a pull request
* `PullsRemoveRequestedReviewers` - Remove requested reviewers from a pull request
* `PullsRequestReviewers` - Request reviewers for a pull request
* `PullsSubmitReview` - Submit a review for a pull request
* `PullsUpdate` - Update a pull request
* `PullsUpdateBranch` - Update a pull request branch
* `PullsUpdateReview` - Update a review for a pull request
* `PullsUpdateReviewComment` - Update a review comment for a pull request

### RateLimit

* `RateLimitGet` - Get rate limit status for the authenticated user

### Reactions

* `ReactionsCreateForCommitComment` - Create reaction for a commit comment
* `ReactionsCreateForIssue` - Create reaction for an issue
* `ReactionsCreateForIssueComment` - Create reaction for an issue comment
* `ReactionsCreateForPullRequestReviewComment` - Create reaction for a pull request review comment
* `ReactionsCreateForRelease` - Create reaction for a release
* `ReactionsCreateForTeamDiscussionCommentInOrg` - Create reaction for a team discussion comment
* `ReactionsCreateForTeamDiscussionInOrg` - Create reaction for a team discussion
* `ReactionsDeleteForCommitComment` - Delete a commit comment reaction
* `ReactionsDeleteForIssue` - Delete an issue reaction
* `ReactionsDeleteForIssueComment` - Delete an issue comment reaction
* `ReactionsDeleteForPullRequestComment` - Delete a pull request comment reaction
* `ReactionsDeleteForRelease` - Delete a release reaction
* `ReactionsDeleteForTeamDiscussion` - Delete team discussion reaction
* `ReactionsDeleteForTeamDiscussionComment` - Delete team discussion comment reaction
* `ReactionsListForCommitComment` - List reactions for a commit comment
* `ReactionsListForIssue` - List reactions for an issue
* `ReactionsListForIssueComment` - List reactions for an issue comment
* `ReactionsListForPullRequestReviewComment` - List reactions for a pull request review comment
* `ReactionsListForRelease` - List reactions for a release
* `ReactionsListForTeamDiscussionCommentInOrg` - List reactions for a team discussion comment
* `ReactionsListForTeamDiscussionInOrg` - List reactions for a team discussion

### Repos

* `ReposAcceptInvitationForAuthenticatedUser` - Accept a repository invitation
* `ReposAddAppAccessRestrictions` - Add app access restrictions
* `ReposAddCollaborator` - Add a repository collaborator
* `ReposAddStatusCheckContexts` - Add status check contexts
* `ReposAddTeamAccessRestrictions` - Add team access restrictions
* `ReposAddUserAccessRestrictions` - Add user access restrictions
* `ReposCheckCollaborator` - Check if a user is a repository collaborator
* `ReposCodeownersErrors` - List CODEOWNERS errors
* `ReposCompareCommits` - Compare two commits
* `ReposCreateAutolink` - Create an autolink reference for a repository
* `ReposCreateCommitComment` - Create a commit comment
* `ReposCreateCommitSignatureProtection` - Create commit signature protection
* `ReposCreateCommitStatus` - Create a commit status
* `ReposCreateDeployKey` - Create a deploy key
* `ReposCreateDeployment` - Create a deployment
* `ReposCreateDeploymentBranchPolicy` - Create a deployment branch policy
* `ReposCreateDeploymentStatus` - Create a deployment status
* `ReposCreateDispatchEvent` - Create a repository dispatch event
* `ReposCreateForAuthenticatedUser` - Create a repository for the authenticated user
* `ReposCreateFork` - Create a fork
* `ReposCreateInOrg` - Create an organization repository
* `ReposCreateOrUpdateEnvironment` - Create or update an environment
* `ReposCreateOrUpdateFileContents` - Create or update file contents
* `ReposCreatePagesSite` - Create a GitHub AE Pages site
* `ReposCreateRelease` - Create a release
* `ReposCreateUsingTemplate` - Create a repository using a template
* `ReposCreateWebhook` - Create a repository webhook
* `ReposDeclineInvitationForAuthenticatedUser` - Decline a repository invitation
* `ReposDelete` - Delete a repository
* `ReposDeleteAccessRestrictions` - Delete access restrictions
* `ReposDeleteAdminBranchProtection` - Delete admin branch protection
* `ReposDeleteAnEnvironment` - Delete an environment
* `ReposDeleteAutolink` - Delete an autolink reference from a repository
* `ReposDeleteBranchProtection` - Delete branch protection
* `ReposDeleteCommitComment` - Delete a commit comment
* `ReposDeleteCommitSignatureProtection` - Delete commit signature protection
* `ReposDeleteDeployKey` - Delete a deploy key
* `ReposDeleteDeployment` - Delete a deployment
* `ReposDeleteDeploymentBranchPolicy` - Delete a deployment branch policy
* `ReposDeleteFile` - Delete a file
* `ReposDeleteInvitation` - Delete a repository invitation
* `ReposDeletePagesSite` - Delete a GitHub AE Pages site
* `ReposDeletePullRequestReviewProtection` - Delete pull request review protection
* `ReposDeleteRelease` - Delete a release
* `ReposDeleteReleaseAsset` - Delete a release asset
* `ReposDeleteWebhook` - Delete a repository webhook
* `ReposDisableLfsForRepo` - Disable Git LFS for a repository
* `ReposDownloadTarballArchive` - Download a repository archive (tar)
* `ReposDownloadZipballArchive` - Download a repository archive (zip)
* `ReposEnableLfsForRepo` - Enable Git LFS for a repository
* `ReposGet` - Get a repository
* `ReposGetAccessRestrictions` - Get access restrictions
* `ReposGetAdminBranchProtection` - Get admin branch protection
* `ReposGetAllEnvironments` - List environments
* `ReposGetAllStatusCheckContexts` - Get all status check contexts
* `ReposGetAllTopics` - Get all repository topics
* `ReposGetAppsWithAccessToProtectedBranch` - Get apps with access to the protected branch
* `ReposGetAutolink` - Get an autolink reference of a repository
* `ReposGetBranch` - Get a branch
* `ReposGetBranchProtection` - Get branch protection
* `ReposGetCodeFrequencyStats` - Get the weekly commit activity
* `ReposGetCollaboratorPermissionLevel` - Get repository permissions for a user
* `ReposGetCombinedStatusForRef` - Get the combined status for a specific reference
* `ReposGetCommit` - Get a commit
* `ReposGetCommitActivityStats` - Get the last year of commit activity
* `ReposGetCommitComment` - Get a commit comment
* `ReposGetCommitSignatureProtection` - Get commit signature protection
* `ReposGetContent` - Get repository content
* `ReposGetContributorsStats` - Get all contributor commit activity
* `ReposGetDeployKey` - Get a deploy key
* `ReposGetDeployment` - Get a deployment
* `ReposGetDeploymentBranchPolicy` - Get a deployment branch policy
* `ReposGetDeploymentStatus` - Get a deployment status
* `ReposGetEnvironment` - Get an environment
* `ReposGetLatestPagesBuild` - Get latest Pages build
* `ReposGetLatestRelease` - Get the latest release
* `ReposGetPages` - Get a GitHub AE Pages site
* `ReposGetPagesBuild` - Get GitHub AE Pages build
* `ReposGetParticipationStats` - Get the weekly commit count
* `ReposGetPullRequestReviewProtection` - Get pull request review protection
* `ReposGetPunchCardStats` - Get the hourly commit count for each day
* `ReposGetReadme` - Get a repository README
* `ReposGetReadmeInDirectory` - Get a repository README for a directory
* `ReposGetRelease` - Get a release
* `ReposGetReleaseAsset` - Get a release asset
* `ReposGetReleaseByTag` - Get a release by tag name
* `ReposGetStatusChecksProtection` - Get status checks protection
* `ReposGetTeamsWithAccessToProtectedBranch` - Get teams with access to the protected branch
* `ReposGetUsersWithAccessToProtectedBranch` - Get users with access to the protected branch
* `ReposGetWebhook` - Get a repository webhook
* `ReposGetWebhookConfigForRepo` - Get a webhook configuration for a repository
* `ReposGetWebhookDelivery` - Get a delivery for a repository webhook
* `ReposListAutolinks` - List all autolinks of a repository
* `ReposListBranches` - List branches
* `ReposListBranchesForHeadCommit` - List branches for HEAD commit
* `ReposListCollaborators` - List repository collaborators
* `ReposListCommentsForCommit` - List commit comments
* `ReposListCommitCommentsForRepo` - List commit comments for a repository
* `ReposListCommitStatusesForRef` - List commit statuses for a reference
* `ReposListCommits` - List commits
* `ReposListContributors` - List repository contributors
* `ReposListDeployKeys` - List deploy keys
* `ReposListDeploymentBranchPolicies` - List deployment branch policies
* `ReposListDeploymentStatuses` - List deployment statuses
* `ReposListDeployments` - List deployments
* `ReposListForAuthenticatedUser` - List repositories for the authenticated user
* `ReposListForOrg` - List organization repositories
* `ReposListForUser` - List repositories for a user
* `ReposListForks` - List forks
* `ReposListInvitations` - List repository invitations
* `ReposListInvitationsForAuthenticatedUser` - List repository invitations for the authenticated user
* `ReposListLanguages` - List repository languages
* `ReposListPagesBuilds` - List GitHub AE Pages builds
* `ReposListPullRequestsAssociatedWithCommit` - List pull requests associated with a commit
* `ReposListReleaseAssets` - List release assets
* `ReposListReleases` - List releases
* `ReposListTags` - List repository tags
* `ReposListTeams` - List repository teams
* `ReposListWebhookDeliveries` - List deliveries for a repository webhook
* `ReposListWebhooks` - List repository webhooks
* `ReposMerge` - Merge a branch
* `ReposMergeUpstream` - Sync a fork branch with the upstream repository
* `ReposPingWebhook` - Ping a repository webhook
* `ReposRedeliverWebhookDelivery` - Redeliver a delivery for a repository webhook
* `ReposRemoveAppAccessRestrictions` - Remove app access restrictions
* `ReposRemoveCollaborator` - Remove a repository collaborator
* `ReposRemoveStatusCheckContexts` - Remove status check contexts
* `ReposRemoveStatusCheckProtection` - Remove status check protection
* `ReposRemoveTeamAccessRestrictions` - Remove team access restrictions
* `ReposRemoveUserAccessRestrictions` - Remove user access restrictions
* `ReposReplaceAllTopics` - Replace all repository topics
* `ReposRequestPagesBuild` - Request a GitHub AE Pages build
* `ReposSetAdminBranchProtection` - Set admin branch protection
* `ReposSetAppAccessRestrictions` - Set app access restrictions
* `ReposSetStatusCheckContexts` - Set status check contexts
* `ReposSetTeamAccessRestrictions` - Set team access restrictions
* `ReposSetUserAccessRestrictions` - Set user access restrictions
* `ReposTestPushWebhook` - Test the push repository webhook
* `ReposTransfer` - Transfer a repository
* `ReposUpdate` - Update a repository
* `ReposUpdateBranchProtection` - Update branch protection
* `ReposUpdateCommitComment` - Update a commit comment
* `ReposUpdateDeploymentBranchPolicy` - Update a deployment branch policy
* `ReposUpdateInformationAboutPagesSite` - Update information about a GitHub AE Pages site
* `ReposUpdateInvitation` - Update a repository invitation
* `ReposUpdatePullRequestReviewProtection` - Update pull request review protection
* `ReposUpdateRelease` - Update a release
* `ReposUpdateReleaseAsset` - Update a release asset
* `ReposUpdateStatusCheckProtection` - Update status check protection
* `ReposUpdateWebhook` - Update a repository webhook
* `ReposUpdateWebhookConfigForRepo` - Update a webhook configuration for a repository
* `ReposUploadReleaseAsset` - Upload a release asset

### Search

* `SearchCode` - Search code
* `SearchCommits` - Search commits
* `SearchIssuesAndPullRequests` - Search issues and pull requests
* `SearchLabels` - Search labels
* `SearchRepos` - Search repositories
* `SearchTopics` - Search topics
* `SearchUsers` - Search users

### SecretScanning

* `SecretScanningGetAlert` - Get a secret scanning alert
* `SecretScanningListAlertsForEnterprise` - List secret scanning alerts for an enterprise
* `SecretScanningListAlertsForRepo` - List secret scanning alerts for a repository
* `SecretScanningListLocationsForAlert` - List locations for a secret scanning alert
* `SecretScanningUpdateAlert` - Update a secret scanning alert

### Teams

* `TeamsAddMemberLegacy` - Add team member (Legacy)
* `TeamsAddOrUpdateMembershipForUserInOrg` - Add or update team membership for a user
* `TeamsAddOrUpdateMembershipForUserLegacy` - Add or update team membership for a user (Legacy)
* `TeamsAddOrUpdateProjectPermissionsInOrg` - Add or update team project permissions
* `TeamsAddOrUpdateProjectPermissionsLegacy` - Add or update team project permissions (Legacy)
* `TeamsAddOrUpdateRepoPermissionsInOrg` - Add or update team repository permissions
* `TeamsAddOrUpdateRepoPermissionsLegacy` - Add or update team repository permissions (Legacy)
* `TeamsCheckPermissionsForProjectInOrg` - Check team permissions for a project
* `TeamsCheckPermissionsForProjectLegacy` - Check team permissions for a project (Legacy)
* `TeamsCheckPermissionsForRepoInOrg` - Check team permissions for a repository
* `TeamsCheckPermissionsForRepoLegacy` - Check team permissions for a repository (Legacy)
* `TeamsCreate` - Create a team
* `TeamsCreateDiscussionCommentInOrg` - Create a discussion comment
* `TeamsCreateDiscussionCommentLegacy` - Create a discussion comment (Legacy)
* `TeamsCreateDiscussionInOrg` - Create a discussion
* `TeamsCreateDiscussionLegacy` - Create a discussion (Legacy)
* `TeamsDeleteDiscussionCommentInOrg` - Delete a discussion comment
* `TeamsDeleteDiscussionCommentLegacy` - Delete a discussion comment (Legacy)
* `TeamsDeleteDiscussionInOrg` - Delete a discussion
* `TeamsDeleteDiscussionLegacy` - Delete a discussion (Legacy)
* `TeamsDeleteInOrg` - Delete a team
* `TeamsDeleteLegacy` - Delete a team (Legacy)
* `TeamsExternalIdpGroupInfoForOrg` - Get an external group
* `TeamsGetByName` - Get a team by name
* `TeamsGetDiscussionCommentInOrg` - Get a discussion comment
* `TeamsGetDiscussionCommentLegacy` - Get a discussion comment (Legacy)
* `TeamsGetDiscussionInOrg` - Get a discussion
* `TeamsGetDiscussionLegacy` - Get a discussion (Legacy)
* `TeamsGetLegacy` - Get a team (Legacy)
* `TeamsGetMemberLegacy` - Get team member (Legacy)
* `TeamsGetMembershipForUserInOrg` - Get team membership for a user
* `TeamsGetMembershipForUserLegacy` - Get team membership for a user (Legacy)
* `TeamsLinkExternalIdpGroupToTeamForOrg` - Update the connection between an external group and a team
* `TeamsList` - List teams
* `TeamsListChildInOrg` - List child teams
* `TeamsListChildLegacy` - List child teams (Legacy)
* `TeamsListDiscussionCommentsInOrg` - List discussion comments
* `TeamsListDiscussionCommentsLegacy` - List discussion comments (Legacy)
* `TeamsListDiscussionsInOrg` - List discussions
* `TeamsListDiscussionsLegacy` - List discussions (Legacy)
* `TeamsListExternalIdpGroupsForOrg` - List external groups in an organization
* `TeamsListForAuthenticatedUser` - List teams for the authenticated user
* `TeamsListMembersInOrg` - List team members
* `TeamsListMembersLegacy` - List team members (Legacy)
* `TeamsListProjectsInOrg` - List team projects
* `TeamsListProjectsLegacy` - List team projects (Legacy)
* `TeamsListReposInOrg` - List team repositories
* `TeamsListReposLegacy` - List team repositories (Legacy)
* `TeamsRemoveMemberLegacy` - Remove team member (Legacy)
* `TeamsRemoveMembershipForUserInOrg` - Remove team membership for a user
* `TeamsRemoveMembershipForUserLegacy` - Remove team membership for a user (Legacy)
* `TeamsRemoveProjectInOrg` - Remove a project from a team
* `TeamsRemoveProjectLegacy` - Remove a project from a team (Legacy)
* `TeamsRemoveRepoInOrg` - Remove a repository from a team
* `TeamsRemoveRepoLegacy` - Remove a repository from a team (Legacy)
* `TeamsUnlinkExternalIdpGroupFromTeamForOrg` - Remove the connection between an external group and a team
* `TeamsUpdateDiscussionCommentInOrg` - Update a discussion comment
* `TeamsUpdateDiscussionCommentLegacy` - Update a discussion comment (Legacy)
* `TeamsUpdateDiscussionInOrg` - Update a discussion
* `TeamsUpdateDiscussionLegacy` - Update a discussion (Legacy)
* `TeamsUpdateInOrg` - Update a team
* `TeamsUpdateLegacy` - Update a team (Legacy)

### Users

* `UsersCheckFollowingForUser` - Check if a user follows another user
* `UsersCheckPersonIsFollowedByAuthenticated` - Check if a person is followed by the authenticated user
* `UsersCreateGpgKeyForAuthenticatedUser` - Create a GPG key for the authenticated user
* `UsersCreatePublicSSHKeyForAuthenticatedUser` - Create a public SSH key for the authenticated user
* `UsersDeleteGpgKeyForAuthenticatedUser` - Delete a GPG key for the authenticated user
* `UsersDeletePublicSSHKeyForAuthenticatedUser` - Delete a public SSH key for the authenticated user
* `UsersFollow` - Follow a user
* `UsersGetAuthenticated` - Get the authenticated user
* `UsersGetByUsername` - Get a user
* `UsersGetContextForUser` - Get contextual information for a user
* `UsersGetGpgKeyForAuthenticatedUser` - Get a GPG key for the authenticated user
* `UsersGetPublicSSHKeyForAuthenticatedUser` - Get a public SSH key for the authenticated user
* `UsersList` - List users
* `UsersListFollowedByAuthenticatedUser` - List the people the authenticated user follows
* `UsersListFollowersForAuthenticatedUser` - List followers of the authenticated user
* `UsersListFollowersForUser` - List followers of a user
* `UsersListFollowingForUser` - List the people a user follows
* `UsersListGpgKeysForAuthenticatedUser` - List GPG keys for the authenticated user
* `UsersListGpgKeysForUser` - List GPG keys for a user
* `UsersListPublicKeysForUser` - List public keys for a user
* `UsersListPublicSSHKeysForAuthenticatedUser` - List public SSH keys for the authenticated user
* `UsersUnfollow` - Unfollow a user
* `UsersUpdateAuthenticated` - Update the authenticated user
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
