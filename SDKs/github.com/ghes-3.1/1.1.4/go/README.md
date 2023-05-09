# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/github.com/ghes-3.1/1.1.4/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrg(ctx, operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest{
        Org: "corrupti",
        RepositoryID: 592845,
        RunnerGroupID: 715190,
    })
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
## Available Resources and Operations


### [Actions](docs/actions/README.md)

* [ActionsAddRepoAccessToSelfHostedRunnerGroupInOrg](docs/actions/README.md#actionsaddrepoaccesstoselfhostedrunnergroupinorg) - Add repository access to a self-hosted runner group in an organization
* [ActionsAddSelectedRepoToOrgSecret](docs/actions/README.md#actionsaddselectedrepotoorgsecret) - Add selected repository to an organization secret
* [ActionsAddSelfHostedRunnerToGroupForOrg](docs/actions/README.md#actionsaddselfhostedrunnertogroupfororg) - Add a self-hosted runner to a group for an organization
* [ActionsCancelWorkflowRun](docs/actions/README.md#actionscancelworkflowrun) - Cancel a workflow run
* [ActionsCreateOrUpdateOrgSecret](docs/actions/README.md#actionscreateorupdateorgsecret) - Create or update an organization secret
* [ActionsCreateOrUpdateRepoSecret](docs/actions/README.md#actionscreateorupdatereposecret) - Create or update a repository secret
* [ActionsCreateRegistrationTokenForOrg](docs/actions/README.md#actionscreateregistrationtokenfororg) - Create a registration token for an organization
* [ActionsCreateRegistrationTokenForRepo](docs/actions/README.md#actionscreateregistrationtokenforrepo) - Create a registration token for a repository
* [ActionsCreateRemoveTokenForOrg](docs/actions/README.md#actionscreateremovetokenfororg) - Create a remove token for an organization
* [ActionsCreateRemoveTokenForRepo](docs/actions/README.md#actionscreateremovetokenforrepo) - Create a remove token for a repository
* [ActionsCreateSelfHostedRunnerGroupForOrg](docs/actions/README.md#actionscreateselfhostedrunnergroupfororg) - Create a self-hosted runner group for an organization
* [ActionsCreateWorkflowDispatch](docs/actions/README.md#actionscreateworkflowdispatch) - Create a workflow dispatch event
* [ActionsDeleteArtifact](docs/actions/README.md#actionsdeleteartifact) - Delete an artifact
* [ActionsDeleteOrgSecret](docs/actions/README.md#actionsdeleteorgsecret) - Delete an organization secret
* [ActionsDeleteRepoSecret](docs/actions/README.md#actionsdeletereposecret) - Delete a repository secret
* [ActionsDeleteSelfHostedRunnerFromOrg](docs/actions/README.md#actionsdeleteselfhostedrunnerfromorg) - Delete a self-hosted runner from an organization
* [ActionsDeleteSelfHostedRunnerFromRepo](docs/actions/README.md#actionsdeleteselfhostedrunnerfromrepo) - Delete a self-hosted runner from a repository
* [ActionsDeleteSelfHostedRunnerGroupFromOrg](docs/actions/README.md#actionsdeleteselfhostedrunnergroupfromorg) - Delete a self-hosted runner group from an organization
* [ActionsDeleteWorkflowRun](docs/actions/README.md#actionsdeleteworkflowrun) - Delete a workflow run
* [ActionsDeleteWorkflowRunLogs](docs/actions/README.md#actionsdeleteworkflowrunlogs) - Delete workflow run logs
* [ActionsDisableSelectedRepositoryGithubActionsOrganization](docs/actions/README.md#actionsdisableselectedrepositorygithubactionsorganization) - Disable a selected repository for GitHub Actions in an organization
* [ActionsDisableWorkflow](docs/actions/README.md#actionsdisableworkflow) - Disable a workflow
* [ActionsDownloadArtifact](docs/actions/README.md#actionsdownloadartifact) - Download an artifact
* [ActionsDownloadJobLogsForWorkflowRun](docs/actions/README.md#actionsdownloadjoblogsforworkflowrun) - Download job logs for a workflow run
* [ActionsDownloadWorkflowRunLogs](docs/actions/README.md#actionsdownloadworkflowrunlogs) - Download workflow run logs
* [ActionsEnableSelectedRepositoryGithubActionsOrganization](docs/actions/README.md#actionsenableselectedrepositorygithubactionsorganization) - Enable a selected repository for GitHub Actions in an organization
* [ActionsEnableWorkflow](docs/actions/README.md#actionsenableworkflow) - Enable a workflow
* [ActionsGetAllowedActionsOrganization](docs/actions/README.md#actionsgetallowedactionsorganization) - Get allowed actions for an organization
* [ActionsGetAllowedActionsRepository](docs/actions/README.md#actionsgetallowedactionsrepository) - Get allowed actions for a repository
* [ActionsGetArtifact](docs/actions/README.md#actionsgetartifact) - Get an artifact
* [ActionsGetGithubActionsPermissionsOrganization](docs/actions/README.md#actionsgetgithubactionspermissionsorganization) - Get GitHub Actions permissions for an organization
* [ActionsGetGithubActionsPermissionsRepository](docs/actions/README.md#actionsgetgithubactionspermissionsrepository) - Get GitHub Actions permissions for a repository
* [ActionsGetJobForWorkflowRun](docs/actions/README.md#actionsgetjobforworkflowrun) - Get a job for a workflow run
* [ActionsGetOrgPublicKey](docs/actions/README.md#actionsgetorgpublickey) - Get an organization public key
* [ActionsGetOrgSecret](docs/actions/README.md#actionsgetorgsecret) - Get an organization secret
* [ActionsGetRepoPublicKey](docs/actions/README.md#actionsgetrepopublickey) - Get a repository public key
* [ActionsGetRepoSecret](docs/actions/README.md#actionsgetreposecret) - Get a repository secret
* [ActionsGetSelfHostedRunnerForOrg](docs/actions/README.md#actionsgetselfhostedrunnerfororg) - Get a self-hosted runner for an organization
* [ActionsGetSelfHostedRunnerForRepo](docs/actions/README.md#actionsgetselfhostedrunnerforrepo) - Get a self-hosted runner for a repository
* [ActionsGetSelfHostedRunnerGroupForOrg](docs/actions/README.md#actionsgetselfhostedrunnergroupfororg) - Get a self-hosted runner group for an organization
* [ActionsGetWorkflow](docs/actions/README.md#actionsgetworkflow) - Get a workflow
* [ActionsGetWorkflowRun](docs/actions/README.md#actionsgetworkflowrun) - Get a workflow run
* [ActionsListArtifactsForRepo](docs/actions/README.md#actionslistartifactsforrepo) - List artifacts for a repository
* [ActionsListJobsForWorkflowRun](docs/actions/README.md#actionslistjobsforworkflowrun) - List jobs for a workflow run
* [ActionsListOrgSecrets](docs/actions/README.md#actionslistorgsecrets) - List organization secrets
* [ActionsListRepoAccessToSelfHostedRunnerGroupInOrg](docs/actions/README.md#actionslistrepoaccesstoselfhostedrunnergroupinorg) - List repository access to a self-hosted runner group in an organization
* [ActionsListRepoSecrets](docs/actions/README.md#actionslistreposecrets) - List repository secrets
* [ActionsListRepoWorkflows](docs/actions/README.md#actionslistrepoworkflows) - List repository workflows
* [ActionsListRunnerApplicationsForOrg](docs/actions/README.md#actionslistrunnerapplicationsfororg) - List runner applications for an organization
* [ActionsListRunnerApplicationsForRepo](docs/actions/README.md#actionslistrunnerapplicationsforrepo) - List runner applications for a repository
* [ActionsListSelectedReposForOrgSecret](docs/actions/README.md#actionslistselectedreposfororgsecret) - List selected repositories for an organization secret
* [ActionsListSelectedRepositoriesEnabledGithubActionsOrganization](docs/actions/README.md#actionslistselectedrepositoriesenabledgithubactionsorganization) - List selected repositories enabled for GitHub Actions in an organization
* [ActionsListSelfHostedRunnerGroupsForOrg](docs/actions/README.md#actionslistselfhostedrunnergroupsfororg) - List self-hosted runner groups for an organization
* [ActionsListSelfHostedRunnersForOrg](docs/actions/README.md#actionslistselfhostedrunnersfororg) - List self-hosted runners for an organization
* [ActionsListSelfHostedRunnersForRepo](docs/actions/README.md#actionslistselfhostedrunnersforrepo) - List self-hosted runners for a repository
* [ActionsListSelfHostedRunnersInGroupForOrg](docs/actions/README.md#actionslistselfhostedrunnersingroupfororg) - List self-hosted runners in a group for an organization
* [ActionsListWorkflowRunArtifacts](docs/actions/README.md#actionslistworkflowrunartifacts) - List workflow run artifacts
* [ActionsListWorkflowRuns](docs/actions/README.md#actionslistworkflowruns) - List workflow runs
* [ActionsListWorkflowRunsForRepo](docs/actions/README.md#actionslistworkflowrunsforrepo) - List workflow runs for a repository
* [ActionsReRunWorkflow](docs/actions/README.md#actionsrerunworkflow) - Re-run a workflow
* [ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg](docs/actions/README.md#actionsremoverepoaccesstoselfhostedrunnergroupinorg) - Remove repository access to a self-hosted runner group in an organization
* [ActionsRemoveSelectedRepoFromOrgSecret](docs/actions/README.md#actionsremoveselectedrepofromorgsecret) - Remove selected repository from an organization secret
* [ActionsRemoveSelfHostedRunnerFromGroupForOrg](docs/actions/README.md#actionsremoveselfhostedrunnerfromgroupfororg) - Remove a self-hosted runner from a group for an organization
* [ActionsSetAllowedActionsOrganization](docs/actions/README.md#actionssetallowedactionsorganization) - Set allowed actions for an organization
* [ActionsSetAllowedActionsRepository](docs/actions/README.md#actionssetallowedactionsrepository) - Set allowed actions for a repository
* [ActionsSetGithubActionsPermissionsOrganization](docs/actions/README.md#actionssetgithubactionspermissionsorganization) - Set GitHub Actions permissions for an organization
* [ActionsSetGithubActionsPermissionsRepository](docs/actions/README.md#actionssetgithubactionspermissionsrepository) - Set GitHub Actions permissions for a repository
* [ActionsSetRepoAccessToSelfHostedRunnerGroupInOrg](docs/actions/README.md#actionssetrepoaccesstoselfhostedrunnergroupinorg) - Set repository access for a self-hosted runner group in an organization
* [ActionsSetSelectedReposForOrgSecret](docs/actions/README.md#actionssetselectedreposfororgsecret) - Set selected repositories for an organization secret
* [ActionsSetSelectedRepositoriesEnabledGithubActionsOrganization](docs/actions/README.md#actionssetselectedrepositoriesenabledgithubactionsorganization) - Set selected repositories enabled for GitHub Actions in an organization
* [ActionsSetSelfHostedRunnersInGroupForOrg](docs/actions/README.md#actionssetselfhostedrunnersingroupfororg) - Set self-hosted runners in a group for an organization
* [ActionsUpdateSelfHostedRunnerGroupForOrg](docs/actions/README.md#actionsupdateselfhostedrunnergroupfororg) - Update a self-hosted runner group for an organization

### [Activity](docs/activity/README.md)

* [ActivityCheckRepoIsStarredByAuthenticatedUser](docs/activity/README.md#activitycheckrepoisstarredbyauthenticateduser) - Check if a repository is starred by the authenticated user
* [ActivityDeleteRepoSubscription](docs/activity/README.md#activitydeletereposubscription) - Delete a repository subscription
* [ActivityDeleteThreadSubscription](docs/activity/README.md#activitydeletethreadsubscription) - Delete a thread subscription
* [ActivityGetFeeds](docs/activity/README.md#activitygetfeeds) - Get feeds
* [ActivityGetRepoSubscription](docs/activity/README.md#activitygetreposubscription) - Get a repository subscription
* [ActivityGetThread](docs/activity/README.md#activitygetthread) - Get a thread
* [ActivityGetThreadSubscriptionForAuthenticatedUser](docs/activity/README.md#activitygetthreadsubscriptionforauthenticateduser) - Get a thread subscription for the authenticated user
* [ActivityListEventsForAuthenticatedUser](docs/activity/README.md#activitylisteventsforauthenticateduser) - List events for the authenticated user
* [ActivityListNotificationsForAuthenticatedUser](docs/activity/README.md#activitylistnotificationsforauthenticateduser) - List notifications for the authenticated user
* [ActivityListOrgEventsForAuthenticatedUser](docs/activity/README.md#activitylistorgeventsforauthenticateduser) - List organization events for the authenticated user
* [ActivityListPublicEvents](docs/activity/README.md#activitylistpublicevents) - List public events
* [ActivityListPublicEventsForRepoNetwork](docs/activity/README.md#activitylistpubliceventsforreponetwork) - List public events for a network of repositories
* [ActivityListPublicEventsForUser](docs/activity/README.md#activitylistpubliceventsforuser) - List public events for a user
* [ActivityListPublicOrgEvents](docs/activity/README.md#activitylistpublicorgevents) - List public organization events
* [ActivityListReceivedEventsForUser](docs/activity/README.md#activitylistreceivedeventsforuser) - List events received by the authenticated user
* [ActivityListReceivedPublicEventsForUser](docs/activity/README.md#activitylistreceivedpubliceventsforuser) - List public events received by a user
* [ActivityListRepoEvents](docs/activity/README.md#activitylistrepoevents) - List repository events
* [ActivityListRepoNotificationsForAuthenticatedUser](docs/activity/README.md#activitylistreponotificationsforauthenticateduser) - List repository notifications for the authenticated user
* [ActivityListReposStarredByAuthenticatedUser](docs/activity/README.md#activitylistreposstarredbyauthenticateduser) - List repositories starred by the authenticated user
* [ActivityListReposStarredByUser](docs/activity/README.md#activitylistreposstarredbyuser) - List repositories starred by a user
* [ActivityListReposWatchedByUser](docs/activity/README.md#activitylistreposwatchedbyuser) - List repositories watched by a user
* [ActivityListStargazersForRepo](docs/activity/README.md#activityliststargazersforrepo) - List stargazers
* [ActivityListWatchedReposForAuthenticatedUser](docs/activity/README.md#activitylistwatchedreposforauthenticateduser) - List repositories watched by the authenticated user
* [ActivityListWatchersForRepo](docs/activity/README.md#activitylistwatchersforrepo) - List watchers
* [ActivityMarkNotificationsAsRead](docs/activity/README.md#activitymarknotificationsasread) - Mark notifications as read
* [ActivityMarkRepoNotificationsAsRead](docs/activity/README.md#activitymarkreponotificationsasread) - Mark repository notifications as read
* [ActivityMarkThreadAsRead](docs/activity/README.md#activitymarkthreadasread) - Mark a thread as read
* [ActivitySetRepoSubscription](docs/activity/README.md#activitysetreposubscription) - Set a repository subscription
* [ActivitySetThreadSubscription](docs/activity/README.md#activitysetthreadsubscription) - Set a thread subscription
* [ActivityStarRepoForAuthenticatedUser](docs/activity/README.md#activitystarrepoforauthenticateduser) - Star a repository for the authenticated user
* [ActivityUnstarRepoForAuthenticatedUser](docs/activity/README.md#activityunstarrepoforauthenticateduser) - Unstar a repository for the authenticated user

### [Apps](docs/apps/README.md)

* [AppsAddRepoToInstallationForAuthenticatedUser](docs/apps/README.md#appsaddrepotoinstallationforauthenticateduser) - Add a repository to an app installation
* [~~AppsCheckAuthorization~~](docs/apps/README.md#appscheckauthorization) - Check an authorization :warning: **Deprecated**
* [AppsCheckToken](docs/apps/README.md#appschecktoken) - Check a token
* [AppsCreateContentAttachment](docs/apps/README.md#appscreatecontentattachment) - Create a content attachment
* [AppsCreateFromManifest](docs/apps/README.md#appscreatefrommanifest) - Create a GitHub App from a manifest
* [AppsCreateInstallationAccessToken](docs/apps/README.md#appscreateinstallationaccesstoken) - Create an installation access token for an app
* [AppsDeleteAuthorization](docs/apps/README.md#appsdeleteauthorization) - Delete an app authorization
* [AppsDeleteInstallation](docs/apps/README.md#appsdeleteinstallation) - Delete an installation for the authenticated app
* [AppsDeleteToken](docs/apps/README.md#appsdeletetoken) - Delete an app token
* [AppsGetAuthenticated](docs/apps/README.md#appsgetauthenticated) - Get the authenticated app
* [AppsGetBySlug](docs/apps/README.md#appsgetbyslug) - Get an app
* [AppsGetInstallation](docs/apps/README.md#appsgetinstallation) - Get an installation for the authenticated app
* [AppsGetOrgInstallation](docs/apps/README.md#appsgetorginstallation) - Get an organization installation for the authenticated app
* [AppsGetRepoInstallation](docs/apps/README.md#appsgetrepoinstallation) - Get a repository installation for the authenticated app
* [AppsGetUserInstallation](docs/apps/README.md#appsgetuserinstallation) - Get a user installation for the authenticated app
* [AppsGetWebhookConfigForApp](docs/apps/README.md#appsgetwebhookconfigforapp) - Get a webhook configuration for an app
* [AppsListInstallationReposForAuthenticatedUser](docs/apps/README.md#appslistinstallationreposforauthenticateduser) - List repositories accessible to the user access token
* [AppsListInstallations](docs/apps/README.md#appslistinstallations) - List installations for the authenticated app
* [AppsListInstallationsForAuthenticatedUser](docs/apps/README.md#appslistinstallationsforauthenticateduser) - List app installations accessible to the user access token
* [AppsListReposAccessibleToInstallation](docs/apps/README.md#appslistreposaccessibletoinstallation) - List repositories accessible to the app installation
* [AppsRemoveRepoFromInstallationForAuthenticatedUser](docs/apps/README.md#appsremoverepofrominstallationforauthenticateduser) - Remove a repository from an app installation
* [~~AppsResetAuthorization~~](docs/apps/README.md#appsresetauthorization) - Reset an authorization :warning: **Deprecated**
* [AppsResetToken](docs/apps/README.md#appsresettoken) - Reset a token
* [~~AppsRevokeAuthorizationForApplication~~](docs/apps/README.md#appsrevokeauthorizationforapplication) - Revoke an authorization for an application :warning: **Deprecated**
* [~~AppsRevokeGrantForApplication~~](docs/apps/README.md#appsrevokegrantforapplication) - Revoke a grant for an application :warning: **Deprecated**
* [AppsRevokeInstallationAccessToken](docs/apps/README.md#appsrevokeinstallationaccesstoken) - Revoke an installation access token
* [AppsScopeToken](docs/apps/README.md#appsscopetoken) - Create a scoped access token
* [AppsSuspendInstallation](docs/apps/README.md#appssuspendinstallation) - Suspend an app installation
* [AppsUnsuspendInstallation](docs/apps/README.md#appsunsuspendinstallation) - Unsuspend an app installation
* [AppsUpdateWebhookConfigForApp](docs/apps/README.md#appsupdatewebhookconfigforapp) - Update a webhook configuration for an app

### [Checks](docs/checks/README.md)

* [ChecksCreate](docs/checks/README.md#checkscreate) - Create a check run
* [ChecksCreateSuite](docs/checks/README.md#checkscreatesuite) - Create a check suite
* [ChecksGet](docs/checks/README.md#checksget) - Get a check run
* [ChecksGetSuite](docs/checks/README.md#checksgetsuite) - Get a check suite
* [ChecksListAnnotations](docs/checks/README.md#checkslistannotations) - List check run annotations
* [ChecksListForRef](docs/checks/README.md#checkslistforref) - List check runs for a Git reference
* [ChecksListForSuite](docs/checks/README.md#checkslistforsuite) - List check runs in a check suite
* [ChecksListSuitesForRef](docs/checks/README.md#checkslistsuitesforref) - List check suites for a Git reference
* [ChecksRerequestSuite](docs/checks/README.md#checksrerequestsuite) - Rerequest a check suite
* [ChecksSetSuitesPreferences](docs/checks/README.md#checkssetsuitespreferences) - Update repository preferences for check suites
* [ChecksUpdate](docs/checks/README.md#checksupdate) - Update a check run

### [CodeScanning](docs/codescanning/README.md)

* [CodeScanningDeleteAnalysis](docs/codescanning/README.md#codescanningdeleteanalysis) - Delete a code scanning analysis from a repository
* [CodeScanningGetAlert](docs/codescanning/README.md#codescanninggetalert) - Get a code scanning alert
* [CodeScanningGetAnalysis](docs/codescanning/README.md#codescanninggetanalysis) - Get a code scanning analysis for a repository
* [CodeScanningGetSarif](docs/codescanning/README.md#codescanninggetsarif) - Get information about a SARIF upload
* [CodeScanningListAlertInstances](docs/codescanning/README.md#codescanninglistalertinstances) - List instances of a code scanning alert
* [CodeScanningListAlertsForRepo](docs/codescanning/README.md#codescanninglistalertsforrepo) - List code scanning alerts for a repository
* [CodeScanningListRecentAnalyses](docs/codescanning/README.md#codescanninglistrecentanalyses) - List code scanning analyses for a repository
* [CodeScanningUpdateAlert](docs/codescanning/README.md#codescanningupdatealert) - Update a code scanning alert
* [CodeScanningUploadSarif](docs/codescanning/README.md#codescanninguploadsarif) - Upload an analysis as SARIF data

### [CodesOfConduct](docs/codesofconduct/README.md)

* [CodesOfConductGetAllCodesOfConduct](docs/codesofconduct/README.md#codesofconductgetallcodesofconduct) - Get all codes of conduct
* [CodesOfConductGetConductCode](docs/codesofconduct/README.md#codesofconductgetconductcode) - Get a code of conduct

### [Emojis](docs/emojis/README.md)

* [EmojisGet](docs/emojis/README.md#emojisget) - Get emojis

### [EnterpriseAdmin](docs/enterpriseadmin/README.md)

* [EnterpriseAdminAddAuthorizedSSHKey](docs/enterpriseadmin/README.md#enterpriseadminaddauthorizedsshkey) - Add an authorized SSH key
* [EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise](docs/enterpriseadmin/README.md#enterpriseadminaddorgaccesstoselfhostedrunnergroupinenterprise) - Add organization access to a self-hosted runner group in an enterprise
* [EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminaddselfhostedrunnertogroupforenterprise) - Add a self-hosted runner to a group for an enterprise
* [EnterpriseAdminCreateEnterpriseServerLicense](docs/enterpriseadmin/README.md#enterpriseadmincreateenterpriseserverlicense) - Create a GitHub license
* [EnterpriseAdminCreateGlobalWebhook](docs/enterpriseadmin/README.md#enterpriseadmincreateglobalwebhook) - Create a global webhook
* [EnterpriseAdminCreateImpersonationOAuthToken](docs/enterpriseadmin/README.md#enterpriseadmincreateimpersonationoauthtoken) - Create an impersonation OAuth token
* [EnterpriseAdminCreateOrg](docs/enterpriseadmin/README.md#enterpriseadmincreateorg) - Create an organization
* [EnterpriseAdminCreatePreReceiveEnvironment](docs/enterpriseadmin/README.md#enterpriseadmincreateprereceiveenvironment) - Create a pre-receive environment
* [EnterpriseAdminCreatePreReceiveHook](docs/enterpriseadmin/README.md#enterpriseadmincreateprereceivehook) - Create a pre-receive hook
* [EnterpriseAdminCreateRegistrationTokenForEnterprise](docs/enterpriseadmin/README.md#enterpriseadmincreateregistrationtokenforenterprise) - Create a registration token for an enterprise
* [EnterpriseAdminCreateRemoveTokenForEnterprise](docs/enterpriseadmin/README.md#enterpriseadmincreateremovetokenforenterprise) - Create a remove token for an enterprise
* [EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprise](docs/enterpriseadmin/README.md#enterpriseadmincreateselfhostedrunnergroupforenterprise) - Create a self-hosted runner group for an enterprise
* [EnterpriseAdminCreateUser](docs/enterpriseadmin/README.md#enterpriseadmincreateuser) - Create a user
* [EnterpriseAdminDeleteGlobalWebhook](docs/enterpriseadmin/README.md#enterpriseadmindeleteglobalwebhook) - Delete a global webhook
* [EnterpriseAdminDeleteImpersonationOAuthToken](docs/enterpriseadmin/README.md#enterpriseadmindeleteimpersonationoauthtoken) - Delete an impersonation OAuth token
* [EnterpriseAdminDeletePersonalAccessToken](docs/enterpriseadmin/README.md#enterpriseadmindeletepersonalaccesstoken) - Delete a personal access token
* [EnterpriseAdminDeletePreReceiveEnvironment](docs/enterpriseadmin/README.md#enterpriseadmindeleteprereceiveenvironment) - Delete a pre-receive environment
* [EnterpriseAdminDeletePreReceiveHook](docs/enterpriseadmin/README.md#enterpriseadmindeleteprereceivehook) - Delete a pre-receive hook
* [EnterpriseAdminDeletePublicKey](docs/enterpriseadmin/README.md#enterpriseadmindeletepublickey) - Delete a public key
* [EnterpriseAdminDeleteSelfHostedRunnerFromEnterprise](docs/enterpriseadmin/README.md#enterpriseadmindeleteselfhostedrunnerfromenterprise) - Delete a self-hosted runner from an enterprise
* [EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise](docs/enterpriseadmin/README.md#enterpriseadmindeleteselfhostedrunnergroupfromenterprise) - Delete a self-hosted runner group from an enterprise
* [EnterpriseAdminDeleteUser](docs/enterpriseadmin/README.md#enterpriseadmindeleteuser) - Delete a user
* [EnterpriseAdminDemoteSiteAdministrator](docs/enterpriseadmin/README.md#enterpriseadmindemotesiteadministrator) - Demote a site administrator
* [EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise](docs/enterpriseadmin/README.md#enterpriseadmindisableselectedorganizationgithubactionsenterprise) - Disable a selected organization for GitHub Actions in an enterprise
* [EnterpriseAdminEnableOrDisableMaintenanceMode](docs/enterpriseadmin/README.md#enterpriseadminenableordisablemaintenancemode) - Enable or disable maintenance mode
* [EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise](docs/enterpriseadmin/README.md#enterpriseadminenableselectedorganizationgithubactionsenterprise) - Enable a selected organization for GitHub Actions in an enterprise
* [EnterpriseAdminGetAllAuthorizedSSHKeys](docs/enterpriseadmin/README.md#enterpriseadmingetallauthorizedsshkeys) - Get all authorized SSH keys
* [EnterpriseAdminGetAllStats](docs/enterpriseadmin/README.md#enterpriseadmingetallstats) - Get all statistics
* [EnterpriseAdminGetAllowedActionsEnterprise](docs/enterpriseadmin/README.md#enterpriseadmingetallowedactionsenterprise) - Get allowed actions for an enterprise
* [EnterpriseAdminGetAnnouncement](docs/enterpriseadmin/README.md#enterpriseadmingetannouncement) - Get the global announcement banner
* [EnterpriseAdminGetCommentStats](docs/enterpriseadmin/README.md#enterpriseadmingetcommentstats) - Get comment statistics
* [EnterpriseAdminGetConfigurationStatus](docs/enterpriseadmin/README.md#enterpriseadmingetconfigurationstatus) - Get the configuration status
* [EnterpriseAdminGetDownloadStatusForPreReceiveEnvironment](docs/enterpriseadmin/README.md#enterpriseadmingetdownloadstatusforprereceiveenvironment) - Get the download status for a pre-receive environment
* [EnterpriseAdminGetGistStats](docs/enterpriseadmin/README.md#enterpriseadmingetgiststats) - Get gist statistics
* [EnterpriseAdminGetGithubActionsPermissionsEnterprise](docs/enterpriseadmin/README.md#enterpriseadmingetgithubactionspermissionsenterprise) - Get GitHub Actions permissions for an enterprise
* [EnterpriseAdminGetGlobalWebhook](docs/enterpriseadmin/README.md#enterpriseadmingetglobalwebhook) - Get a global webhook
* [EnterpriseAdminGetHooksStats](docs/enterpriseadmin/README.md#enterpriseadmingethooksstats) - Get hooks statistics
* [EnterpriseAdminGetIssueStats](docs/enterpriseadmin/README.md#enterpriseadmingetissuestats) - Get issue statistics
* [EnterpriseAdminGetLicenseInformation](docs/enterpriseadmin/README.md#enterpriseadmingetlicenseinformation) - Get license information
* [EnterpriseAdminGetMaintenanceStatus](docs/enterpriseadmin/README.md#enterpriseadmingetmaintenancestatus) - Get the maintenance status
* [EnterpriseAdminGetMilestoneStats](docs/enterpriseadmin/README.md#enterpriseadmingetmilestonestats) - Get milestone statistics
* [EnterpriseAdminGetOrgStats](docs/enterpriseadmin/README.md#enterpriseadmingetorgstats) - Get organization statistics
* [EnterpriseAdminGetPagesStats](docs/enterpriseadmin/README.md#enterpriseadmingetpagesstats) - Get pages statistics
* [EnterpriseAdminGetPreReceiveEnvironment](docs/enterpriseadmin/README.md#enterpriseadmingetprereceiveenvironment) - Get a pre-receive environment
* [EnterpriseAdminGetPreReceiveHook](docs/enterpriseadmin/README.md#enterpriseadmingetprereceivehook) - Get a pre-receive hook
* [EnterpriseAdminGetPreReceiveHookForOrg](docs/enterpriseadmin/README.md#enterpriseadmingetprereceivehookfororg) - Get a pre-receive hook for an organization
* [EnterpriseAdminGetPreReceiveHookForRepo](docs/enterpriseadmin/README.md#enterpriseadmingetprereceivehookforrepo) - Get a pre-receive hook for a repository
* [EnterpriseAdminGetPullRequestStats](docs/enterpriseadmin/README.md#enterpriseadmingetpullrequeststats) - Get pull request statistics
* [EnterpriseAdminGetRepoStats](docs/enterpriseadmin/README.md#enterpriseadmingetrepostats) - Get repository statistics
* [EnterpriseAdminGetSelfHostedRunnerForEnterprise](docs/enterpriseadmin/README.md#enterpriseadmingetselfhostedrunnerforenterprise) - Get a self-hosted runner for an enterprise
* [EnterpriseAdminGetSelfHostedRunnerGroupForEnterprise](docs/enterpriseadmin/README.md#enterpriseadmingetselfhostedrunnergroupforenterprise) - Get a self-hosted runner group for an enterprise
* [EnterpriseAdminGetSettings](docs/enterpriseadmin/README.md#enterpriseadmingetsettings) - Get settings
* [EnterpriseAdminGetUserStats](docs/enterpriseadmin/README.md#enterpriseadmingetuserstats) - Get users statistics
* [EnterpriseAdminListGlobalWebhooks](docs/enterpriseadmin/README.md#enterpriseadminlistglobalwebhooks) - List global webhooks
* [EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise](docs/enterpriseadmin/README.md#enterpriseadminlistorgaccesstoselfhostedrunnergroupinenterprise) - List organization access to a self-hosted runner group in an enterprise
* [EnterpriseAdminListPersonalAccessTokens](docs/enterpriseadmin/README.md#enterpriseadminlistpersonalaccesstokens) - List personal access tokens
* [EnterpriseAdminListPreReceiveEnvironments](docs/enterpriseadmin/README.md#enterpriseadminlistprereceiveenvironments) - List pre-receive environments
* [EnterpriseAdminListPreReceiveHooks](docs/enterpriseadmin/README.md#enterpriseadminlistprereceivehooks) - List pre-receive hooks
* [EnterpriseAdminListPreReceiveHooksForOrg](docs/enterpriseadmin/README.md#enterpriseadminlistprereceivehooksfororg) - List pre-receive hooks for an organization
* [EnterpriseAdminListPreReceiveHooksForRepo](docs/enterpriseadmin/README.md#enterpriseadminlistprereceivehooksforrepo) - List pre-receive hooks for a repository
* [EnterpriseAdminListPublicKeys](docs/enterpriseadmin/README.md#enterpriseadminlistpublickeys) - List public keys
* [EnterpriseAdminListRunnerApplicationsForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminlistrunnerapplicationsforenterprise) - List runner applications for an enterprise
* [EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise](docs/enterpriseadmin/README.md#enterpriseadminlistselectedorganizationsenabledgithubactionsenterprise) - List selected organizations enabled for GitHub Actions in an enterprise
* [EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminlistselfhostedrunnergroupsforenterprise) - List self-hosted runner groups for an enterprise
* [EnterpriseAdminListSelfHostedRunnersForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminlistselfhostedrunnersforenterprise) - List self-hosted runners for an enterprise
* [EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminlistselfhostedrunnersingroupforenterprise) - List self-hosted runners in a group for an enterprise
* [EnterpriseAdminPingGlobalWebhook](docs/enterpriseadmin/README.md#enterpriseadminpingglobalwebhook) - Ping a global webhook
* [EnterpriseAdminPromoteUserToBeSiteAdministrator](docs/enterpriseadmin/README.md#enterpriseadminpromoteusertobesiteadministrator) - Promote a user to be a site administrator
* [EnterpriseAdminRemoveAnnouncement](docs/enterpriseadmin/README.md#enterpriseadminremoveannouncement) - Remove the global announcement banner
* [EnterpriseAdminRemoveAuthorizedSSHKey](docs/enterpriseadmin/README.md#enterpriseadminremoveauthorizedsshkey) - Remove an authorized SSH key
* [EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise](docs/enterpriseadmin/README.md#enterpriseadminremoveorgaccesstoselfhostedrunnergroupinenterprise) - Remove organization access to a self-hosted runner group in an enterprise
* [EnterpriseAdminRemovePreReceiveHookEnforcementForOrg](docs/enterpriseadmin/README.md#enterpriseadminremoveprereceivehookenforcementfororg) - Remove pre-receive hook enforcement for an organization
* [EnterpriseAdminRemovePreReceiveHookEnforcementForRepo](docs/enterpriseadmin/README.md#enterpriseadminremoveprereceivehookenforcementforrepo) - Remove pre-receive hook enforcement for a repository
* [EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminremoveselfhostedrunnerfromgroupforenterprise) - Remove a self-hosted runner from a group for an enterprise
* [EnterpriseAdminSetAllowedActionsEnterprise](docs/enterpriseadmin/README.md#enterpriseadminsetallowedactionsenterprise) - Set allowed actions for an enterprise
* [EnterpriseAdminSetAnnouncement](docs/enterpriseadmin/README.md#enterpriseadminsetannouncement) - Set the global announcement banner
* [EnterpriseAdminSetGithubActionsPermissionsEnterprise](docs/enterpriseadmin/README.md#enterpriseadminsetgithubactionspermissionsenterprise) - Set GitHub Actions permissions for an enterprise
* [EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise](docs/enterpriseadmin/README.md#enterpriseadminsetorgaccesstoselfhostedrunnergroupinenterprise) - Set organization access for a self-hosted runner group in an enterprise
* [EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise](docs/enterpriseadmin/README.md#enterpriseadminsetselectedorganizationsenabledgithubactionsenterprise) - Set selected organizations enabled for GitHub Actions in an enterprise
* [EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminsetselfhostedrunnersingroupforenterprise) - Set self-hosted runners in a group for an enterprise
* [EnterpriseAdminSetSettings](docs/enterpriseadmin/README.md#enterpriseadminsetsettings) - Set settings
* [EnterpriseAdminStartConfigurationProcess](docs/enterpriseadmin/README.md#enterpriseadminstartconfigurationprocess) - Start a configuration process
* [EnterpriseAdminStartPreReceiveEnvironmentDownload](docs/enterpriseadmin/README.md#enterpriseadminstartprereceiveenvironmentdownload) - Start a pre-receive environment download
* [EnterpriseAdminSuspendUser](docs/enterpriseadmin/README.md#enterpriseadminsuspenduser) - Suspend a user
* [EnterpriseAdminSyncLdapMappingForTeam](docs/enterpriseadmin/README.md#enterpriseadminsyncldapmappingforteam) - Sync LDAP mapping for a team
* [EnterpriseAdminSyncLdapMappingForUser](docs/enterpriseadmin/README.md#enterpriseadminsyncldapmappingforuser) - Sync LDAP mapping for a user
* [EnterpriseAdminUnsuspendUser](docs/enterpriseadmin/README.md#enterpriseadminunsuspenduser) - Unsuspend a user
* [EnterpriseAdminUpdateGlobalWebhook](docs/enterpriseadmin/README.md#enterpriseadminupdateglobalwebhook) - Update a global webhook
* [EnterpriseAdminUpdateLdapMappingForTeam](docs/enterpriseadmin/README.md#enterpriseadminupdateldapmappingforteam) - Update LDAP mapping for a team
* [EnterpriseAdminUpdateLdapMappingForUser](docs/enterpriseadmin/README.md#enterpriseadminupdateldapmappingforuser) - Update LDAP mapping for a user
* [EnterpriseAdminUpdateOrgName](docs/enterpriseadmin/README.md#enterpriseadminupdateorgname) - Update an organization name
* [EnterpriseAdminUpdatePreReceiveEnvironment](docs/enterpriseadmin/README.md#enterpriseadminupdateprereceiveenvironment) - Update a pre-receive environment
* [EnterpriseAdminUpdatePreReceiveHook](docs/enterpriseadmin/README.md#enterpriseadminupdateprereceivehook) - Update a pre-receive hook
* [EnterpriseAdminUpdatePreReceiveHookEnforcementForOrg](docs/enterpriseadmin/README.md#enterpriseadminupdateprereceivehookenforcementfororg) - Update pre-receive hook enforcement for an organization
* [EnterpriseAdminUpdatePreReceiveHookEnforcementForRepo](docs/enterpriseadmin/README.md#enterpriseadminupdateprereceivehookenforcementforrepo) - Update pre-receive hook enforcement for a repository
* [EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminupdateselfhostedrunnergroupforenterprise) - Update a self-hosted runner group for an enterprise
* [EnterpriseAdminUpdateUsernameForUser](docs/enterpriseadmin/README.md#enterpriseadminupdateusernameforuser) - Update the username for a user
* [EnterpriseAdminUpgradeLicense](docs/enterpriseadmin/README.md#enterpriseadminupgradelicense) - Upgrade a license

### [Gists](docs/gists/README.md)

* [GistsCheckIsStarred](docs/gists/README.md#gistscheckisstarred) - Check if a gist is starred
* [GistsCreate](docs/gists/README.md#gistscreate) - Create a gist
* [GistsCreateComment](docs/gists/README.md#gistscreatecomment) - Create a gist comment
* [GistsDelete](docs/gists/README.md#gistsdelete) - Delete a gist
* [GistsDeleteComment](docs/gists/README.md#gistsdeletecomment) - Delete a gist comment
* [GistsFork](docs/gists/README.md#gistsfork) - Fork a gist
* [GistsGet](docs/gists/README.md#gistsget) - Get a gist
* [GistsGetComment](docs/gists/README.md#gistsgetcomment) - Get a gist comment
* [GistsGetRevision](docs/gists/README.md#gistsgetrevision) - Get a gist revision
* [GistsList](docs/gists/README.md#gistslist) - List gists for the authenticated user
* [GistsListComments](docs/gists/README.md#gistslistcomments) - List gist comments
* [GistsListCommits](docs/gists/README.md#gistslistcommits) - List gist commits
* [GistsListForUser](docs/gists/README.md#gistslistforuser) - List gists for a user
* [GistsListForks](docs/gists/README.md#gistslistforks) - List gist forks
* [GistsListPublic](docs/gists/README.md#gistslistpublic) - List public gists
* [GistsListStarred](docs/gists/README.md#gistsliststarred) - List starred gists
* [GistsStar](docs/gists/README.md#gistsstar) - Star a gist
* [GistsUnstar](docs/gists/README.md#gistsunstar) - Unstar a gist
* [GistsUpdate](docs/gists/README.md#gistsupdate) - Update a gist
* [GistsUpdateComment](docs/gists/README.md#gistsupdatecomment) - Update a gist comment

### [Git](docs/git/README.md)

* [GitCreateBlob](docs/git/README.md#gitcreateblob) - Create a blob
* [GitCreateCommit](docs/git/README.md#gitcreatecommit) - Create a commit
* [GitCreateRef](docs/git/README.md#gitcreateref) - Create a reference
* [GitCreateTag](docs/git/README.md#gitcreatetag) - Create a tag object
* [GitCreateTree](docs/git/README.md#gitcreatetree) - Create a tree
* [GitDeleteRef](docs/git/README.md#gitdeleteref) - Delete a reference
* [GitGetBlob](docs/git/README.md#gitgetblob) - Get a blob
* [GitGetCommit](docs/git/README.md#gitgetcommit) - Get a commit
* [GitGetRef](docs/git/README.md#gitgetref) - Get a reference
* [GitGetTag](docs/git/README.md#gitgettag) - Get a tag
* [GitGetTree](docs/git/README.md#gitgettree) - Get a tree
* [GitListMatchingRefs](docs/git/README.md#gitlistmatchingrefs) - List matching references
* [GitUpdateRef](docs/git/README.md#gitupdateref) - Update a reference

### [Gitignore](docs/gitignore/README.md)

* [GitignoreGetAllTemplates](docs/gitignore/README.md#gitignoregetalltemplates) - Get all gitignore templates
* [GitignoreGetTemplate](docs/gitignore/README.md#gitignoregettemplate) - Get a gitignore template

### [Issues](docs/issues/README.md)

* [IssuesAddAssignees](docs/issues/README.md#issuesaddassignees) - Add assignees to an issue
* [IssuesAddLabels](docs/issues/README.md#issuesaddlabels) - Add labels to an issue
* [IssuesCheckUserCanBeAssigned](docs/issues/README.md#issuescheckusercanbeassigned) - Check if a user can be assigned
* [IssuesCreate](docs/issues/README.md#issuescreate) - Create an issue
* [IssuesCreateComment](docs/issues/README.md#issuescreatecomment) - Create an issue comment
* [IssuesCreateLabel](docs/issues/README.md#issuescreatelabel) - Create a label
* [IssuesCreateMilestone](docs/issues/README.md#issuescreatemilestone) - Create a milestone
* [IssuesDeleteComment](docs/issues/README.md#issuesdeletecomment) - Delete an issue comment
* [IssuesDeleteLabel](docs/issues/README.md#issuesdeletelabel) - Delete a label
* [IssuesDeleteMilestone](docs/issues/README.md#issuesdeletemilestone) - Delete a milestone
* [IssuesGet](docs/issues/README.md#issuesget) - Get an issue
* [IssuesGetComment](docs/issues/README.md#issuesgetcomment) - Get an issue comment
* [IssuesGetEvent](docs/issues/README.md#issuesgetevent) - Get an issue event
* [IssuesGetLabel](docs/issues/README.md#issuesgetlabel) - Get a label
* [IssuesGetMilestone](docs/issues/README.md#issuesgetmilestone) - Get a milestone
* [IssuesList](docs/issues/README.md#issueslist) - List issues assigned to the authenticated user
* [IssuesListAssignees](docs/issues/README.md#issueslistassignees) - List assignees
* [IssuesListComments](docs/issues/README.md#issueslistcomments) - List issue comments
* [IssuesListCommentsForRepo](docs/issues/README.md#issueslistcommentsforrepo) - List issue comments for a repository
* [IssuesListEvents](docs/issues/README.md#issueslistevents) - List issue events
* [IssuesListEventsForRepo](docs/issues/README.md#issueslisteventsforrepo) - List issue events for a repository
* [IssuesListEventsForTimeline](docs/issues/README.md#issueslisteventsfortimeline) - List timeline events for an issue
* [IssuesListForAuthenticatedUser](docs/issues/README.md#issueslistforauthenticateduser) - List user account issues assigned to the authenticated user
* [IssuesListForOrg](docs/issues/README.md#issueslistfororg) - List organization issues assigned to the authenticated user
* [IssuesListForRepo](docs/issues/README.md#issueslistforrepo) - List repository issues
* [IssuesListLabelsForMilestone](docs/issues/README.md#issueslistlabelsformilestone) - List labels for issues in a milestone
* [IssuesListLabelsForRepo](docs/issues/README.md#issueslistlabelsforrepo) - List labels for a repository
* [IssuesListLabelsOnIssue](docs/issues/README.md#issueslistlabelsonissue) - List labels for an issue
* [IssuesListMilestones](docs/issues/README.md#issueslistmilestones) - List milestones
* [IssuesLock](docs/issues/README.md#issueslock) - Lock an issue
* [IssuesRemoveAllLabels](docs/issues/README.md#issuesremovealllabels) - Remove all labels from an issue
* [IssuesRemoveAssignees](docs/issues/README.md#issuesremoveassignees) - Remove assignees from an issue
* [IssuesRemoveLabel](docs/issues/README.md#issuesremovelabel) - Remove a label from an issue
* [IssuesSetLabels](docs/issues/README.md#issuessetlabels) - Set labels for an issue
* [IssuesUnlock](docs/issues/README.md#issuesunlock) - Unlock an issue
* [IssuesUpdate](docs/issues/README.md#issuesupdate) - Update an issue
* [IssuesUpdateComment](docs/issues/README.md#issuesupdatecomment) - Update an issue comment
* [IssuesUpdateLabel](docs/issues/README.md#issuesupdatelabel) - Update a label
* [IssuesUpdateMilestone](docs/issues/README.md#issuesupdatemilestone) - Update a milestone

### [Licenses](docs/licenses/README.md)

* [LicensesGet](docs/licenses/README.md#licensesget) - Get a license
* [LicensesGetAllCommonlyUsed](docs/licenses/README.md#licensesgetallcommonlyused) - Get all commonly used licenses
* [LicensesGetForRepo](docs/licenses/README.md#licensesgetforrepo) - Get the license for a repository

### [Markdown](docs/markdown/README.md)

* [MarkdownRender](docs/markdown/README.md#markdownrender) - Render a Markdown document
* [MarkdownRenderRaw](docs/markdown/README.md#markdownrenderraw) - Render a Markdown document in raw mode

### [Meta](docs/meta/README.md)

* [MetaGet](docs/meta/README.md#metaget) - Get GitHub Enterprise Server meta information
* [MetaGetOctocat](docs/meta/README.md#metagetoctocat) - Get Octocat
* [MetaGetZen](docs/meta/README.md#metagetzen) - Get the Zen of GitHub
* [MetaRoot](docs/meta/README.md#metaroot) - GitHub API Root

### [OauthAuthorizations](docs/oauthauthorizations/README.md)

* [~~OauthAuthorizationsCreateAuthorization~~](docs/oauthauthorizations/README.md#oauthauthorizationscreateauthorization) - Create a new authorization :warning: **Deprecated**
* [~~OauthAuthorizationsDeleteAuthorization~~](docs/oauthauthorizations/README.md#oauthauthorizationsdeleteauthorization) - Delete an authorization :warning: **Deprecated**
* [~~OauthAuthorizationsDeleteGrant~~](docs/oauthauthorizations/README.md#oauthauthorizationsdeletegrant) - Delete a grant :warning: **Deprecated**
* [~~OauthAuthorizationsGetAuthorization~~](docs/oauthauthorizations/README.md#oauthauthorizationsgetauthorization) - Get a single authorization :warning: **Deprecated**
* [~~OauthAuthorizationsGetGrant~~](docs/oauthauthorizations/README.md#oauthauthorizationsgetgrant) - Get a single grant :warning: **Deprecated**
* [~~OauthAuthorizationsGetOrCreateAuthorizationForApp~~](docs/oauthauthorizations/README.md#oauthauthorizationsgetorcreateauthorizationforapp) - Get-or-create an authorization for a specific app :warning: **Deprecated**
* [~~OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint~~](docs/oauthauthorizations/README.md#oauthauthorizationsgetorcreateauthorizationforappandfingerprint) - Get-or-create an authorization for a specific app and fingerprint :warning: **Deprecated**
* [~~OauthAuthorizationsListAuthorizations~~](docs/oauthauthorizations/README.md#oauthauthorizationslistauthorizations) - List your authorizations :warning: **Deprecated**
* [~~OauthAuthorizationsListGrants~~](docs/oauthauthorizations/README.md#oauthauthorizationslistgrants) - List your grants :warning: **Deprecated**
* [~~OauthAuthorizationsUpdateAuthorization~~](docs/oauthauthorizations/README.md#oauthauthorizationsupdateauthorization) - Update an existing authorization :warning: **Deprecated**

### [Orgs](docs/orgs/README.md)

* [OrgsCheckMembershipForUser](docs/orgs/README.md#orgscheckmembershipforuser) - Check organization membership for a user
* [OrgsCheckPublicMembershipForUser](docs/orgs/README.md#orgscheckpublicmembershipforuser) - Check public organization membership for a user
* [OrgsConvertMemberToOutsideCollaborator](docs/orgs/README.md#orgsconvertmembertooutsidecollaborator) - Convert an organization member to outside collaborator
* [OrgsCreateWebhook](docs/orgs/README.md#orgscreatewebhook) - Create an organization webhook
* [OrgsDeleteWebhook](docs/orgs/README.md#orgsdeletewebhook) - Delete an organization webhook
* [OrgsGet](docs/orgs/README.md#orgsget) - Get an organization
* [OrgsGetMembershipForAuthenticatedUser](docs/orgs/README.md#orgsgetmembershipforauthenticateduser) - Get an organization membership for the authenticated user
* [OrgsGetMembershipForUser](docs/orgs/README.md#orgsgetmembershipforuser) - Get organization membership for a user
* [OrgsGetWebhook](docs/orgs/README.md#orgsgetwebhook) - Get an organization webhook
* [OrgsGetWebhookConfigForOrg](docs/orgs/README.md#orgsgetwebhookconfigfororg) - Get a webhook configuration for an organization
* [OrgsList](docs/orgs/README.md#orgslist) - List organizations
* [OrgsListAppInstallations](docs/orgs/README.md#orgslistappinstallations) - List app installations for an organization
* [OrgsListForAuthenticatedUser](docs/orgs/README.md#orgslistforauthenticateduser) - List organizations for the authenticated user
* [OrgsListForUser](docs/orgs/README.md#orgslistforuser) - List organizations for a user
* [OrgsListMembers](docs/orgs/README.md#orgslistmembers) - List organization members
* [OrgsListMembershipsForAuthenticatedUser](docs/orgs/README.md#orgslistmembershipsforauthenticateduser) - List organization memberships for the authenticated user
* [OrgsListOutsideCollaborators](docs/orgs/README.md#orgslistoutsidecollaborators) - List outside collaborators for an organization
* [OrgsListPublicMembers](docs/orgs/README.md#orgslistpublicmembers) - List public organization members
* [OrgsListWebhooks](docs/orgs/README.md#orgslistwebhooks) - List organization webhooks
* [OrgsPingWebhook](docs/orgs/README.md#orgspingwebhook) - Ping an organization webhook
* [OrgsRemoveMember](docs/orgs/README.md#orgsremovemember) - Remove an organization member
* [OrgsRemoveMembershipForUser](docs/orgs/README.md#orgsremovemembershipforuser) - Remove organization membership for a user
* [OrgsRemoveOutsideCollaborator](docs/orgs/README.md#orgsremoveoutsidecollaborator) - Remove outside collaborator from an organization
* [OrgsRemovePublicMembershipForAuthenticatedUser](docs/orgs/README.md#orgsremovepublicmembershipforauthenticateduser) - Remove public organization membership for the authenticated user
* [OrgsSetMembershipForUser](docs/orgs/README.md#orgssetmembershipforuser) - Set organization membership for a user
* [OrgsSetPublicMembershipForAuthenticatedUser](docs/orgs/README.md#orgssetpublicmembershipforauthenticateduser) - Set public organization membership for the authenticated user
* [OrgsUpdate](docs/orgs/README.md#orgsupdate) - Update an organization
* [OrgsUpdateMembershipForAuthenticatedUser](docs/orgs/README.md#orgsupdatemembershipforauthenticateduser) - Update an organization membership for the authenticated user
* [OrgsUpdateWebhook](docs/orgs/README.md#orgsupdatewebhook) - Update an organization webhook
* [OrgsUpdateWebhookConfigForOrg](docs/orgs/README.md#orgsupdatewebhookconfigfororg) - Update a webhook configuration for an organization

### [Projects](docs/projects/README.md)

* [ProjectsAddCollaborator](docs/projects/README.md#projectsaddcollaborator) - Add project collaborator
* [ProjectsCreateCard](docs/projects/README.md#projectscreatecard) - Create a project card
* [ProjectsCreateColumn](docs/projects/README.md#projectscreatecolumn) - Create a project column
* [ProjectsCreateForAuthenticatedUser](docs/projects/README.md#projectscreateforauthenticateduser) - Create a user project
* [ProjectsCreateForOrg](docs/projects/README.md#projectscreatefororg) - Create an organization project
* [ProjectsCreateForRepo](docs/projects/README.md#projectscreateforrepo) - Create a repository project
* [ProjectsDelete](docs/projects/README.md#projectsdelete) - Delete a project
* [ProjectsDeleteCard](docs/projects/README.md#projectsdeletecard) - Delete a project card
* [ProjectsDeleteColumn](docs/projects/README.md#projectsdeletecolumn) - Delete a project column
* [ProjectsGet](docs/projects/README.md#projectsget) - Get a project
* [ProjectsGetCard](docs/projects/README.md#projectsgetcard) - Get a project card
* [ProjectsGetColumn](docs/projects/README.md#projectsgetcolumn) - Get a project column
* [ProjectsGetPermissionForUser](docs/projects/README.md#projectsgetpermissionforuser) - Get project permission for a user
* [ProjectsListCards](docs/projects/README.md#projectslistcards) - List project cards
* [ProjectsListCollaborators](docs/projects/README.md#projectslistcollaborators) - List project collaborators
* [ProjectsListColumns](docs/projects/README.md#projectslistcolumns) - List project columns
* [ProjectsListForOrg](docs/projects/README.md#projectslistfororg) - List organization projects
* [ProjectsListForRepo](docs/projects/README.md#projectslistforrepo) - List repository projects
* [ProjectsListForUser](docs/projects/README.md#projectslistforuser) - List user projects
* [ProjectsMoveCard](docs/projects/README.md#projectsmovecard) - Move a project card
* [ProjectsMoveColumn](docs/projects/README.md#projectsmovecolumn) - Move a project column
* [ProjectsRemoveCollaborator](docs/projects/README.md#projectsremovecollaborator) - Remove user as a collaborator
* [ProjectsUpdate](docs/projects/README.md#projectsupdate) - Update a project
* [ProjectsUpdateCard](docs/projects/README.md#projectsupdatecard) - Update an existing project card
* [ProjectsUpdateColumn](docs/projects/README.md#projectsupdatecolumn) - Update an existing project column

### [Pulls](docs/pulls/README.md)

* [PullsCheckIfMerged](docs/pulls/README.md#pullscheckifmerged) - Check if a pull request has been merged
* [PullsCreate](docs/pulls/README.md#pullscreate) - Create a pull request
* [PullsCreateReplyForReviewComment](docs/pulls/README.md#pullscreatereplyforreviewcomment) - Create a reply for a review comment
* [PullsCreateReview](docs/pulls/README.md#pullscreatereview) - Create a review for a pull request
* [PullsCreateReviewComment](docs/pulls/README.md#pullscreatereviewcomment) - Create a review comment for a pull request
* [PullsDeletePendingReview](docs/pulls/README.md#pullsdeletependingreview) - Delete a pending review for a pull request
* [PullsDeleteReviewComment](docs/pulls/README.md#pullsdeletereviewcomment) - Delete a review comment for a pull request
* [PullsDismissReview](docs/pulls/README.md#pullsdismissreview) - Dismiss a review for a pull request
* [PullsGet](docs/pulls/README.md#pullsget) - Get a pull request
* [PullsGetReview](docs/pulls/README.md#pullsgetreview) - Get a review for a pull request
* [PullsGetReviewComment](docs/pulls/README.md#pullsgetreviewcomment) - Get a review comment for a pull request
* [PullsList](docs/pulls/README.md#pullslist) - List pull requests
* [PullsListCommentsForReview](docs/pulls/README.md#pullslistcommentsforreview) - List comments for a pull request review
* [PullsListCommits](docs/pulls/README.md#pullslistcommits) - List commits on a pull request
* [PullsListFiles](docs/pulls/README.md#pullslistfiles) - List pull requests files
* [PullsListRequestedReviewers](docs/pulls/README.md#pullslistrequestedreviewers) - List requested reviewers for a pull request
* [PullsListReviewComments](docs/pulls/README.md#pullslistreviewcomments) - List review comments on a pull request
* [PullsListReviewCommentsForRepo](docs/pulls/README.md#pullslistreviewcommentsforrepo) - List review comments in a repository
* [PullsListReviews](docs/pulls/README.md#pullslistreviews) - List reviews for a pull request
* [PullsMerge](docs/pulls/README.md#pullsmerge) - Merge a pull request
* [PullsRemoveRequestedReviewers](docs/pulls/README.md#pullsremoverequestedreviewers) - Remove requested reviewers from a pull request
* [PullsRequestReviewers](docs/pulls/README.md#pullsrequestreviewers) - Request reviewers for a pull request
* [PullsSubmitReview](docs/pulls/README.md#pullssubmitreview) - Submit a review for a pull request
* [PullsUpdate](docs/pulls/README.md#pullsupdate) - Update a pull request
* [PullsUpdateBranch](docs/pulls/README.md#pullsupdatebranch) - Update a pull request branch
* [PullsUpdateReview](docs/pulls/README.md#pullsupdatereview) - Update a review for a pull request
* [PullsUpdateReviewComment](docs/pulls/README.md#pullsupdatereviewcomment) - Update a review comment for a pull request

### [RateLimit](docs/ratelimit/README.md)

* [RateLimitGet](docs/ratelimit/README.md#ratelimitget) - Get rate limit status for the authenticated user

### [Reactions](docs/reactions/README.md)

* [ReactionsCreateForCommitComment](docs/reactions/README.md#reactionscreateforcommitcomment) - Create reaction for a commit comment
* [ReactionsCreateForIssue](docs/reactions/README.md#reactionscreateforissue) - Create reaction for an issue
* [ReactionsCreateForIssueComment](docs/reactions/README.md#reactionscreateforissuecomment) - Create reaction for an issue comment
* [ReactionsCreateForPullRequestReviewComment](docs/reactions/README.md#reactionscreateforpullrequestreviewcomment) - Create reaction for a pull request review comment
* [ReactionsCreateForTeamDiscussionCommentInOrg](docs/reactions/README.md#reactionscreateforteamdiscussioncommentinorg) - Create reaction for a team discussion comment
* [~~ReactionsCreateForTeamDiscussionCommentLegacy~~](docs/reactions/README.md#reactionscreateforteamdiscussioncommentlegacy) - Create reaction for a team discussion comment (Legacy) :warning: **Deprecated**
* [ReactionsCreateForTeamDiscussionInOrg](docs/reactions/README.md#reactionscreateforteamdiscussioninorg) - Create reaction for a team discussion
* [~~ReactionsCreateForTeamDiscussionLegacy~~](docs/reactions/README.md#reactionscreateforteamdiscussionlegacy) - Create reaction for a team discussion (Legacy) :warning: **Deprecated**
* [ReactionsDeleteForCommitComment](docs/reactions/README.md#reactionsdeleteforcommitcomment) - Delete a commit comment reaction
* [ReactionsDeleteForIssue](docs/reactions/README.md#reactionsdeleteforissue) - Delete an issue reaction
* [ReactionsDeleteForIssueComment](docs/reactions/README.md#reactionsdeleteforissuecomment) - Delete an issue comment reaction
* [ReactionsDeleteForPullRequestComment](docs/reactions/README.md#reactionsdeleteforpullrequestcomment) - Delete a pull request comment reaction
* [ReactionsDeleteForTeamDiscussion](docs/reactions/README.md#reactionsdeleteforteamdiscussion) - Delete team discussion reaction
* [ReactionsDeleteForTeamDiscussionComment](docs/reactions/README.md#reactionsdeleteforteamdiscussioncomment) - Delete team discussion comment reaction
* [~~ReactionsDeleteLegacy~~](docs/reactions/README.md#reactionsdeletelegacy) - Delete a reaction (Legacy) :warning: **Deprecated**
* [ReactionsListForCommitComment](docs/reactions/README.md#reactionslistforcommitcomment) - List reactions for a commit comment
* [ReactionsListForIssue](docs/reactions/README.md#reactionslistforissue) - List reactions for an issue
* [ReactionsListForIssueComment](docs/reactions/README.md#reactionslistforissuecomment) - List reactions for an issue comment
* [ReactionsListForPullRequestReviewComment](docs/reactions/README.md#reactionslistforpullrequestreviewcomment) - List reactions for a pull request review comment
* [ReactionsListForTeamDiscussionCommentInOrg](docs/reactions/README.md#reactionslistforteamdiscussioncommentinorg) - List reactions for a team discussion comment
* [~~ReactionsListForTeamDiscussionCommentLegacy~~](docs/reactions/README.md#reactionslistforteamdiscussioncommentlegacy) - List reactions for a team discussion comment (Legacy) :warning: **Deprecated**
* [ReactionsListForTeamDiscussionInOrg](docs/reactions/README.md#reactionslistforteamdiscussioninorg) - List reactions for a team discussion
* [~~ReactionsListForTeamDiscussionLegacy~~](docs/reactions/README.md#reactionslistforteamdiscussionlegacy) - List reactions for a team discussion (Legacy) :warning: **Deprecated**

### [Repos](docs/repos/README.md)

* [ReposAcceptInvitationForAuthenticatedUser](docs/repos/README.md#reposacceptinvitationforauthenticateduser) - Accept a repository invitation
* [ReposAddAppAccessRestrictions](docs/repos/README.md#reposaddappaccessrestrictions) - Add app access restrictions
* [ReposAddCollaborator](docs/repos/README.md#reposaddcollaborator) - Add a repository collaborator
* [ReposAddStatusCheckContexts](docs/repos/README.md#reposaddstatuscheckcontexts) - Add status check contexts
* [ReposAddTeamAccessRestrictions](docs/repos/README.md#reposaddteamaccessrestrictions) - Add team access restrictions
* [ReposAddUserAccessRestrictions](docs/repos/README.md#reposadduseraccessrestrictions) - Add user access restrictions
* [ReposCheckCollaborator](docs/repos/README.md#reposcheckcollaborator) - Check if a user is a repository collaborator
* [ReposCompareCommits](docs/repos/README.md#reposcomparecommits) - Compare two commits
* [ReposCreateCommitComment](docs/repos/README.md#reposcreatecommitcomment) - Create a commit comment
* [ReposCreateCommitSignatureProtection](docs/repos/README.md#reposcreatecommitsignatureprotection) - Create commit signature protection
* [ReposCreateCommitStatus](docs/repos/README.md#reposcreatecommitstatus) - Create a commit status
* [ReposCreateDeployKey](docs/repos/README.md#reposcreatedeploykey) - Create a deploy key
* [ReposCreateDeployment](docs/repos/README.md#reposcreatedeployment) - Create a deployment
* [ReposCreateDeploymentStatus](docs/repos/README.md#reposcreatedeploymentstatus) - Create a deployment status
* [ReposCreateDispatchEvent](docs/repos/README.md#reposcreatedispatchevent) - Create a repository dispatch event
* [ReposCreateForAuthenticatedUser](docs/repos/README.md#reposcreateforauthenticateduser) - Create a repository for the authenticated user
* [ReposCreateFork](docs/repos/README.md#reposcreatefork) - Create a fork
* [ReposCreateInOrg](docs/repos/README.md#reposcreateinorg) - Create an organization repository
* [ReposCreateOrUpdateFileContents](docs/repos/README.md#reposcreateorupdatefilecontents) - Create or update file contents
* [ReposCreatePagesSite](docs/repos/README.md#reposcreatepagessite) - Create a GitHub Enterprise Server Pages site
* [ReposCreateRelease](docs/repos/README.md#reposcreaterelease) - Create a release
* [ReposCreateUsingTemplate](docs/repos/README.md#reposcreateusingtemplate) - Create a repository using a template
* [ReposCreateWebhook](docs/repos/README.md#reposcreatewebhook) - Create a repository webhook
* [ReposDeclineInvitationForAuthenticatedUser](docs/repos/README.md#reposdeclineinvitationforauthenticateduser) - Decline a repository invitation
* [ReposDelete](docs/repos/README.md#reposdelete) - Delete a repository
* [ReposDeleteAccessRestrictions](docs/repos/README.md#reposdeleteaccessrestrictions) - Delete access restrictions
* [ReposDeleteAdminBranchProtection](docs/repos/README.md#reposdeleteadminbranchprotection) - Delete admin branch protection
* [ReposDeleteBranchProtection](docs/repos/README.md#reposdeletebranchprotection) - Delete branch protection
* [ReposDeleteCommitComment](docs/repos/README.md#reposdeletecommitcomment) - Delete a commit comment
* [ReposDeleteCommitSignatureProtection](docs/repos/README.md#reposdeletecommitsignatureprotection) - Delete commit signature protection
* [ReposDeleteDeployKey](docs/repos/README.md#reposdeletedeploykey) - Delete a deploy key
* [ReposDeleteDeployment](docs/repos/README.md#reposdeletedeployment) - Delete a deployment
* [ReposDeleteFile](docs/repos/README.md#reposdeletefile) - Delete a file
* [ReposDeleteInvitation](docs/repos/README.md#reposdeleteinvitation) - Delete a repository invitation
* [ReposDeletePagesSite](docs/repos/README.md#reposdeletepagessite) - Delete a GitHub Enterprise Server Pages site
* [ReposDeletePullRequestReviewProtection](docs/repos/README.md#reposdeletepullrequestreviewprotection) - Delete pull request review protection
* [ReposDeleteRelease](docs/repos/README.md#reposdeleterelease) - Delete a release
* [ReposDeleteReleaseAsset](docs/repos/README.md#reposdeletereleaseasset) - Delete a release asset
* [ReposDeleteWebhook](docs/repos/README.md#reposdeletewebhook) - Delete a repository webhook
* [ReposDownloadTarballArchive](docs/repos/README.md#reposdownloadtarballarchive) - Download a repository archive (tar)
* [ReposDownloadZipballArchive](docs/repos/README.md#reposdownloadzipballarchive) - Download a repository archive (zip)
* [ReposGet](docs/repos/README.md#reposget) - Get a repository
* [ReposGetAccessRestrictions](docs/repos/README.md#reposgetaccessrestrictions) - Get access restrictions
* [ReposGetAdminBranchProtection](docs/repos/README.md#reposgetadminbranchprotection) - Get admin branch protection
* [ReposGetAllStatusCheckContexts](docs/repos/README.md#reposgetallstatuscheckcontexts) - Get all status check contexts
* [ReposGetAllTopics](docs/repos/README.md#reposgetalltopics) - Get all repository topics
* [ReposGetAppsWithAccessToProtectedBranch](docs/repos/README.md#reposgetappswithaccesstoprotectedbranch) - Get apps with access to the protected branch
* [ReposGetBranch](docs/repos/README.md#reposgetbranch) - Get a branch
* [ReposGetBranchProtection](docs/repos/README.md#reposgetbranchprotection) - Get branch protection
* [ReposGetCodeFrequencyStats](docs/repos/README.md#reposgetcodefrequencystats) - Get the weekly commit activity
* [ReposGetCollaboratorPermissionLevel](docs/repos/README.md#reposgetcollaboratorpermissionlevel) - Get repository permissions for a user
* [ReposGetCombinedStatusForRef](docs/repos/README.md#reposgetcombinedstatusforref) - Get the combined status for a specific reference
* [ReposGetCommit](docs/repos/README.md#reposgetcommit) - Get a commit
* [ReposGetCommitActivityStats](docs/repos/README.md#reposgetcommitactivitystats) - Get the last year of commit activity
* [ReposGetCommitComment](docs/repos/README.md#reposgetcommitcomment) - Get a commit comment
* [ReposGetCommitSignatureProtection](docs/repos/README.md#reposgetcommitsignatureprotection) - Get commit signature protection
* [ReposGetContent](docs/repos/README.md#reposgetcontent) - Get repository content
* [ReposGetContributorsStats](docs/repos/README.md#reposgetcontributorsstats) - Get all contributor commit activity
* [ReposGetDeployKey](docs/repos/README.md#reposgetdeploykey) - Get a deploy key
* [ReposGetDeployment](docs/repos/README.md#reposgetdeployment) - Get a deployment
* [ReposGetDeploymentStatus](docs/repos/README.md#reposgetdeploymentstatus) - Get a deployment status
* [ReposGetLatestPagesBuild](docs/repos/README.md#reposgetlatestpagesbuild) - Get latest Pages build
* [ReposGetLatestRelease](docs/repos/README.md#reposgetlatestrelease) - Get the latest release
* [ReposGetPages](docs/repos/README.md#reposgetpages) - Get a GitHub Enterprise Server Pages site
* [ReposGetPagesBuild](docs/repos/README.md#reposgetpagesbuild) - Get GitHub Enterprise Server Pages build
* [ReposGetParticipationStats](docs/repos/README.md#reposgetparticipationstats) - Get the weekly commit count
* [ReposGetPullRequestReviewProtection](docs/repos/README.md#reposgetpullrequestreviewprotection) - Get pull request review protection
* [ReposGetPunchCardStats](docs/repos/README.md#reposgetpunchcardstats) - Get the hourly commit count for each day
* [ReposGetReadme](docs/repos/README.md#reposgetreadme) - Get a repository README
* [ReposGetReadmeInDirectory](docs/repos/README.md#reposgetreadmeindirectory) - Get a repository README for a directory
* [ReposGetRelease](docs/repos/README.md#reposgetrelease) - Get a release
* [ReposGetReleaseAsset](docs/repos/README.md#reposgetreleaseasset) - Get a release asset
* [ReposGetReleaseByTag](docs/repos/README.md#reposgetreleasebytag) - Get a release by tag name
* [ReposGetStatusChecksProtection](docs/repos/README.md#reposgetstatuschecksprotection) - Get status checks protection
* [ReposGetTeamsWithAccessToProtectedBranch](docs/repos/README.md#reposgetteamswithaccesstoprotectedbranch) - Get teams with access to the protected branch
* [ReposGetUsersWithAccessToProtectedBranch](docs/repos/README.md#reposgetuserswithaccesstoprotectedbranch) - Get users with access to the protected branch
* [ReposGetWebhook](docs/repos/README.md#reposgetwebhook) - Get a repository webhook
* [ReposGetWebhookConfigForRepo](docs/repos/README.md#reposgetwebhookconfigforrepo) - Get a webhook configuration for a repository
* [ReposListBranches](docs/repos/README.md#reposlistbranches) - List branches
* [ReposListBranchesForHeadCommit](docs/repos/README.md#reposlistbranchesforheadcommit) - List branches for HEAD commit
* [ReposListCollaborators](docs/repos/README.md#reposlistcollaborators) - List repository collaborators
* [ReposListCommentsForCommit](docs/repos/README.md#reposlistcommentsforcommit) - List commit comments
* [ReposListCommitCommentsForRepo](docs/repos/README.md#reposlistcommitcommentsforrepo) - List commit comments for a repository
* [ReposListCommitStatusesForRef](docs/repos/README.md#reposlistcommitstatusesforref) - List commit statuses for a reference
* [ReposListCommits](docs/repos/README.md#reposlistcommits) - List commits
* [ReposListContributors](docs/repos/README.md#reposlistcontributors) - List repository contributors
* [ReposListDeployKeys](docs/repos/README.md#reposlistdeploykeys) - List deploy keys
* [ReposListDeploymentStatuses](docs/repos/README.md#reposlistdeploymentstatuses) - List deployment statuses
* [ReposListDeployments](docs/repos/README.md#reposlistdeployments) - List deployments
* [ReposListForAuthenticatedUser](docs/repos/README.md#reposlistforauthenticateduser) - List repositories for the authenticated user
* [ReposListForOrg](docs/repos/README.md#reposlistfororg) - List organization repositories
* [ReposListForUser](docs/repos/README.md#reposlistforuser) - List repositories for a user
* [ReposListForks](docs/repos/README.md#reposlistforks) - List forks
* [ReposListInvitations](docs/repos/README.md#reposlistinvitations) - List repository invitations
* [ReposListInvitationsForAuthenticatedUser](docs/repos/README.md#reposlistinvitationsforauthenticateduser) - List repository invitations for the authenticated user
* [ReposListLanguages](docs/repos/README.md#reposlistlanguages) - List repository languages
* [ReposListPagesBuilds](docs/repos/README.md#reposlistpagesbuilds) - List GitHub Enterprise Server Pages builds
* [ReposListPublic](docs/repos/README.md#reposlistpublic) - List public repositories
* [ReposListPullRequestsAssociatedWithCommit](docs/repos/README.md#reposlistpullrequestsassociatedwithcommit) - List pull requests associated with a commit
* [ReposListReleaseAssets](docs/repos/README.md#reposlistreleaseassets) - List release assets
* [ReposListReleases](docs/repos/README.md#reposlistreleases) - List releases
* [ReposListTags](docs/repos/README.md#reposlisttags) - List repository tags
* [ReposListTeams](docs/repos/README.md#reposlistteams) - List repository teams
* [ReposListWebhooks](docs/repos/README.md#reposlistwebhooks) - List repository webhooks
* [ReposMerge](docs/repos/README.md#reposmerge) - Merge a branch
* [ReposPingWebhook](docs/repos/README.md#repospingwebhook) - Ping a repository webhook
* [ReposRemoveAppAccessRestrictions](docs/repos/README.md#reposremoveappaccessrestrictions) - Remove app access restrictions
* [ReposRemoveCollaborator](docs/repos/README.md#reposremovecollaborator) - Remove a repository collaborator
* [ReposRemoveStatusCheckContexts](docs/repos/README.md#reposremovestatuscheckcontexts) - Remove status check contexts
* [ReposRemoveStatusCheckProtection](docs/repos/README.md#reposremovestatuscheckprotection) - Remove status check protection
* [ReposRemoveTeamAccessRestrictions](docs/repos/README.md#reposremoveteamaccessrestrictions) - Remove team access restrictions
* [ReposRemoveUserAccessRestrictions](docs/repos/README.md#reposremoveuseraccessrestrictions) - Remove user access restrictions
* [ReposRenameBranch](docs/repos/README.md#reposrenamebranch) - Rename a branch
* [ReposReplaceAllTopics](docs/repos/README.md#reposreplacealltopics) - Replace all repository topics
* [ReposRequestPagesBuild](docs/repos/README.md#reposrequestpagesbuild) - Request a GitHub Enterprise Server Pages build
* [ReposSetAdminBranchProtection](docs/repos/README.md#repossetadminbranchprotection) - Set admin branch protection
* [ReposSetAppAccessRestrictions](docs/repos/README.md#repossetappaccessrestrictions) - Set app access restrictions
* [ReposSetStatusCheckContexts](docs/repos/README.md#repossetstatuscheckcontexts) - Set status check contexts
* [ReposSetTeamAccessRestrictions](docs/repos/README.md#repossetteamaccessrestrictions) - Set team access restrictions
* [ReposSetUserAccessRestrictions](docs/repos/README.md#repossetuseraccessrestrictions) - Set user access restrictions
* [ReposTestPushWebhook](docs/repos/README.md#repostestpushwebhook) - Test the push repository webhook
* [ReposTransfer](docs/repos/README.md#repostransfer) - Transfer a repository
* [ReposUpdate](docs/repos/README.md#reposupdate) - Update a repository
* [ReposUpdateBranchProtection](docs/repos/README.md#reposupdatebranchprotection) - Update branch protection
* [ReposUpdateCommitComment](docs/repos/README.md#reposupdatecommitcomment) - Update a commit comment
* [ReposUpdateInformationAboutPagesSite](docs/repos/README.md#reposupdateinformationaboutpagessite) - Update information about a GitHub Enterprise Server Pages site
* [ReposUpdateInvitation](docs/repos/README.md#reposupdateinvitation) - Update a repository invitation
* [ReposUpdatePullRequestReviewProtection](docs/repos/README.md#reposupdatepullrequestreviewprotection) - Update pull request review protection
* [ReposUpdateRelease](docs/repos/README.md#reposupdaterelease) - Update a release
* [ReposUpdateReleaseAsset](docs/repos/README.md#reposupdatereleaseasset) - Update a release asset
* [ReposUpdateStatusCheckProtection](docs/repos/README.md#reposupdatestatuscheckprotection) - Update status check protection
* [ReposUpdateWebhook](docs/repos/README.md#reposupdatewebhook) - Update a repository webhook
* [ReposUpdateWebhookConfigForRepo](docs/repos/README.md#reposupdatewebhookconfigforrepo) - Update a webhook configuration for a repository
* [ReposUploadReleaseAsset](docs/repos/README.md#reposuploadreleaseasset) - Upload a release asset

### [Search](docs/search/README.md)

* [SearchCode](docs/search/README.md#searchcode) - Search code
* [SearchCommits](docs/search/README.md#searchcommits) - Search commits
* [SearchIssuesAndPullRequests](docs/search/README.md#searchissuesandpullrequests) - Search issues and pull requests
* [SearchLabels](docs/search/README.md#searchlabels) - Search labels
* [SearchRepos](docs/search/README.md#searchrepos) - Search repositories
* [SearchTopics](docs/search/README.md#searchtopics) - Search topics
* [SearchUsers](docs/search/README.md#searchusers) - Search users

### [SecretScanning](docs/secretscanning/README.md)

* [SecretScanningGetAlert](docs/secretscanning/README.md#secretscanninggetalert) - Get a secret scanning alert
* [SecretScanningListAlertsForRepo](docs/secretscanning/README.md#secretscanninglistalertsforrepo) - List secret scanning alerts for a repository
* [SecretScanningUpdateAlert](docs/secretscanning/README.md#secretscanningupdatealert) - Update a secret scanning alert

### [Teams](docs/teams/README.md)

* [~~TeamsAddMemberLegacy~~](docs/teams/README.md#teamsaddmemberlegacy) - Add team member (Legacy) :warning: **Deprecated**
* [TeamsAddOrUpdateMembershipForUserInOrg](docs/teams/README.md#teamsaddorupdatemembershipforuserinorg) - Add or update team membership for a user
* [~~TeamsAddOrUpdateMembershipForUserLegacy~~](docs/teams/README.md#teamsaddorupdatemembershipforuserlegacy) - Add or update team membership for a user (Legacy) :warning: **Deprecated**
* [TeamsAddOrUpdateProjectPermissionsInOrg](docs/teams/README.md#teamsaddorupdateprojectpermissionsinorg) - Add or update team project permissions
* [~~TeamsAddOrUpdateProjectPermissionsLegacy~~](docs/teams/README.md#teamsaddorupdateprojectpermissionslegacy) - Add or update team project permissions (Legacy) :warning: **Deprecated**
* [TeamsAddOrUpdateRepoPermissionsInOrg](docs/teams/README.md#teamsaddorupdaterepopermissionsinorg) - Add or update team repository permissions
* [~~TeamsAddOrUpdateRepoPermissionsLegacy~~](docs/teams/README.md#teamsaddorupdaterepopermissionslegacy) - Add or update team repository permissions (Legacy) :warning: **Deprecated**
* [TeamsCheckPermissionsForProjectInOrg](docs/teams/README.md#teamscheckpermissionsforprojectinorg) - Check team permissions for a project
* [~~TeamsCheckPermissionsForProjectLegacy~~](docs/teams/README.md#teamscheckpermissionsforprojectlegacy) - Check team permissions for a project (Legacy) :warning: **Deprecated**
* [TeamsCheckPermissionsForRepoInOrg](docs/teams/README.md#teamscheckpermissionsforrepoinorg) - Check team permissions for a repository
* [~~TeamsCheckPermissionsForRepoLegacy~~](docs/teams/README.md#teamscheckpermissionsforrepolegacy) - Check team permissions for a repository (Legacy) :warning: **Deprecated**
* [TeamsCreate](docs/teams/README.md#teamscreate) - Create a team
* [TeamsCreateDiscussionCommentInOrg](docs/teams/README.md#teamscreatediscussioncommentinorg) - Create a discussion comment
* [~~TeamsCreateDiscussionCommentLegacy~~](docs/teams/README.md#teamscreatediscussioncommentlegacy) - Create a discussion comment (Legacy) :warning: **Deprecated**
* [TeamsCreateDiscussionInOrg](docs/teams/README.md#teamscreatediscussioninorg) - Create a discussion
* [~~TeamsCreateDiscussionLegacy~~](docs/teams/README.md#teamscreatediscussionlegacy) - Create a discussion (Legacy) :warning: **Deprecated**
* [TeamsDeleteDiscussionCommentInOrg](docs/teams/README.md#teamsdeletediscussioncommentinorg) - Delete a discussion comment
* [~~TeamsDeleteDiscussionCommentLegacy~~](docs/teams/README.md#teamsdeletediscussioncommentlegacy) - Delete a discussion comment (Legacy) :warning: **Deprecated**
* [TeamsDeleteDiscussionInOrg](docs/teams/README.md#teamsdeletediscussioninorg) - Delete a discussion
* [~~TeamsDeleteDiscussionLegacy~~](docs/teams/README.md#teamsdeletediscussionlegacy) - Delete a discussion (Legacy) :warning: **Deprecated**
* [TeamsDeleteInOrg](docs/teams/README.md#teamsdeleteinorg) - Delete a team
* [~~TeamsDeleteLegacy~~](docs/teams/README.md#teamsdeletelegacy) - Delete a team (Legacy) :warning: **Deprecated**
* [TeamsGetByName](docs/teams/README.md#teamsgetbyname) - Get a team by name
* [TeamsGetDiscussionCommentInOrg](docs/teams/README.md#teamsgetdiscussioncommentinorg) - Get a discussion comment
* [~~TeamsGetDiscussionCommentLegacy~~](docs/teams/README.md#teamsgetdiscussioncommentlegacy) - Get a discussion comment (Legacy) :warning: **Deprecated**
* [TeamsGetDiscussionInOrg](docs/teams/README.md#teamsgetdiscussioninorg) - Get a discussion
* [~~TeamsGetDiscussionLegacy~~](docs/teams/README.md#teamsgetdiscussionlegacy) - Get a discussion (Legacy) :warning: **Deprecated**
* [~~TeamsGetLegacy~~](docs/teams/README.md#teamsgetlegacy) - Get a team (Legacy) :warning: **Deprecated**
* [~~TeamsGetMemberLegacy~~](docs/teams/README.md#teamsgetmemberlegacy) - Get team member (Legacy) :warning: **Deprecated**
* [TeamsGetMembershipForUserInOrg](docs/teams/README.md#teamsgetmembershipforuserinorg) - Get team membership for a user
* [~~TeamsGetMembershipForUserLegacy~~](docs/teams/README.md#teamsgetmembershipforuserlegacy) - Get team membership for a user (Legacy) :warning: **Deprecated**
* [TeamsList](docs/teams/README.md#teamslist) - List teams
* [TeamsListChildInOrg](docs/teams/README.md#teamslistchildinorg) - List child teams
* [~~TeamsListChildLegacy~~](docs/teams/README.md#teamslistchildlegacy) - List child teams (Legacy) :warning: **Deprecated**
* [TeamsListDiscussionCommentsInOrg](docs/teams/README.md#teamslistdiscussioncommentsinorg) - List discussion comments
* [~~TeamsListDiscussionCommentsLegacy~~](docs/teams/README.md#teamslistdiscussioncommentslegacy) - List discussion comments (Legacy) :warning: **Deprecated**
* [TeamsListDiscussionsInOrg](docs/teams/README.md#teamslistdiscussionsinorg) - List discussions
* [~~TeamsListDiscussionsLegacy~~](docs/teams/README.md#teamslistdiscussionslegacy) - List discussions (Legacy) :warning: **Deprecated**
* [TeamsListForAuthenticatedUser](docs/teams/README.md#teamslistforauthenticateduser) - List teams for the authenticated user
* [TeamsListMembersInOrg](docs/teams/README.md#teamslistmembersinorg) - List team members
* [~~TeamsListMembersLegacy~~](docs/teams/README.md#teamslistmemberslegacy) - List team members (Legacy) :warning: **Deprecated**
* [TeamsListProjectsInOrg](docs/teams/README.md#teamslistprojectsinorg) - List team projects
* [~~TeamsListProjectsLegacy~~](docs/teams/README.md#teamslistprojectslegacy) - List team projects (Legacy) :warning: **Deprecated**
* [TeamsListReposInOrg](docs/teams/README.md#teamslistreposinorg) - List team repositories
* [~~TeamsListReposLegacy~~](docs/teams/README.md#teamslistreposlegacy) - List team repositories (Legacy) :warning: **Deprecated**
* [~~TeamsRemoveMemberLegacy~~](docs/teams/README.md#teamsremovememberlegacy) - Remove team member (Legacy) :warning: **Deprecated**
* [TeamsRemoveMembershipForUserInOrg](docs/teams/README.md#teamsremovemembershipforuserinorg) - Remove team membership for a user
* [~~TeamsRemoveMembershipForUserLegacy~~](docs/teams/README.md#teamsremovemembershipforuserlegacy) - Remove team membership for a user (Legacy) :warning: **Deprecated**
* [TeamsRemoveProjectInOrg](docs/teams/README.md#teamsremoveprojectinorg) - Remove a project from a team
* [~~TeamsRemoveProjectLegacy~~](docs/teams/README.md#teamsremoveprojectlegacy) - Remove a project from a team (Legacy) :warning: **Deprecated**
* [TeamsRemoveRepoInOrg](docs/teams/README.md#teamsremoverepoinorg) - Remove a repository from a team
* [~~TeamsRemoveRepoLegacy~~](docs/teams/README.md#teamsremoverepolegacy) - Remove a repository from a team (Legacy) :warning: **Deprecated**
* [TeamsUpdateDiscussionCommentInOrg](docs/teams/README.md#teamsupdatediscussioncommentinorg) - Update a discussion comment
* [~~TeamsUpdateDiscussionCommentLegacy~~](docs/teams/README.md#teamsupdatediscussioncommentlegacy) - Update a discussion comment (Legacy) :warning: **Deprecated**
* [TeamsUpdateDiscussionInOrg](docs/teams/README.md#teamsupdatediscussioninorg) - Update a discussion
* [~~TeamsUpdateDiscussionLegacy~~](docs/teams/README.md#teamsupdatediscussionlegacy) - Update a discussion (Legacy) :warning: **Deprecated**
* [TeamsUpdateInOrg](docs/teams/README.md#teamsupdateinorg) - Update a team
* [~~TeamsUpdateLegacy~~](docs/teams/README.md#teamsupdatelegacy) - Update a team (Legacy) :warning: **Deprecated**

### [Users](docs/users/README.md)

* [UsersAddEmailForAuthenticatedUser](docs/users/README.md#usersaddemailforauthenticateduser) - Add an email address for the authenticated user
* [UsersCheckFollowingForUser](docs/users/README.md#userscheckfollowingforuser) - Check if a user follows another user
* [UsersCheckPersonIsFollowedByAuthenticated](docs/users/README.md#userscheckpersonisfollowedbyauthenticated) - Check if a person is followed by the authenticated user
* [UsersCreateGpgKeyForAuthenticatedUser](docs/users/README.md#userscreategpgkeyforauthenticateduser) - Create a GPG key for the authenticated user
* [UsersCreatePublicSSHKeyForAuthenticatedUser](docs/users/README.md#userscreatepublicsshkeyforauthenticateduser) - Create a public SSH key for the authenticated user
* [UsersDeleteEmailForAuthenticatedUser](docs/users/README.md#usersdeleteemailforauthenticateduser) - Delete an email address for the authenticated user
* [UsersDeleteGpgKeyForAuthenticatedUser](docs/users/README.md#usersdeletegpgkeyforauthenticateduser) - Delete a GPG key for the authenticated user
* [UsersDeletePublicSSHKeyForAuthenticatedUser](docs/users/README.md#usersdeletepublicsshkeyforauthenticateduser) - Delete a public SSH key for the authenticated user
* [UsersFollow](docs/users/README.md#usersfollow) - Follow a user
* [UsersGetAuthenticated](docs/users/README.md#usersgetauthenticated) - Get the authenticated user
* [UsersGetByUsername](docs/users/README.md#usersgetbyusername) - Get a user
* [UsersGetContextForUser](docs/users/README.md#usersgetcontextforuser) - Get contextual information for a user
* [UsersGetGpgKeyForAuthenticatedUser](docs/users/README.md#usersgetgpgkeyforauthenticateduser) - Get a GPG key for the authenticated user
* [UsersGetPublicSSHKeyForAuthenticatedUser](docs/users/README.md#usersgetpublicsshkeyforauthenticateduser) - Get a public SSH key for the authenticated user
* [UsersList](docs/users/README.md#userslist) - List users
* [UsersListEmailsForAuthenticatedUser](docs/users/README.md#userslistemailsforauthenticateduser) - List email addresses for the authenticated user
* [UsersListFollowedByAuthenticatedUser](docs/users/README.md#userslistfollowedbyauthenticateduser) - List the people the authenticated user follows
* [UsersListFollowersForAuthenticatedUser](docs/users/README.md#userslistfollowersforauthenticateduser) - List followers of the authenticated user
* [UsersListFollowersForUser](docs/users/README.md#userslistfollowersforuser) - List followers of a user
* [UsersListFollowingForUser](docs/users/README.md#userslistfollowingforuser) - List the people a user follows
* [UsersListGpgKeysForAuthenticatedUser](docs/users/README.md#userslistgpgkeysforauthenticateduser) - List GPG keys for the authenticated user
* [UsersListGpgKeysForUser](docs/users/README.md#userslistgpgkeysforuser) - List GPG keys for a user
* [UsersListPublicEmailsForAuthenticatedUser](docs/users/README.md#userslistpublicemailsforauthenticateduser) - List public email addresses for the authenticated user
* [UsersListPublicKeysForUser](docs/users/README.md#userslistpublickeysforuser) - List public keys for a user
* [UsersListPublicSSHKeysForAuthenticatedUser](docs/users/README.md#userslistpublicsshkeysforauthenticateduser) - List public SSH keys for the authenticated user
* [UsersUnfollow](docs/users/README.md#usersunfollow) - Unfollow a user
* [UsersUpdateAuthenticated](docs/users/README.md#usersupdateauthenticated) - Update the authenticated user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
