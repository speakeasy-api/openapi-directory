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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest();
    $request->requestBody = new ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestBody();
    $request->requestBody->labels = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->org = 'unde';
    $request->runnerId = 857946;

    $response = $sdk->actions->actionsAddCustomLabelsToSelfHostedRunnerForOrg($request);

    if ($response->actionsAddCustomLabelsToSelfHostedRunnerForOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [actions](docs/actions/README.md)

* [actionsAddCustomLabelsToSelfHostedRunnerForOrg](docs/actions/README.md#actionsaddcustomlabelstoselfhostedrunnerfororg) - Add custom labels to a self-hosted runner for an organization
* [actionsAddCustomLabelsToSelfHostedRunnerForRepo](docs/actions/README.md#actionsaddcustomlabelstoselfhostedrunnerforrepo) - Add custom labels to a self-hosted runner for a repository
* [actionsAddRepoAccessToSelfHostedRunnerGroupInOrg](docs/actions/README.md#actionsaddrepoaccesstoselfhostedrunnergroupinorg) - Add repository access to a self-hosted runner group in an organization
* [actionsAddSelectedRepoToOrgSecret](docs/actions/README.md#actionsaddselectedrepotoorgsecret) - Add selected repository to an organization secret
* [actionsAddSelfHostedRunnerToGroupForOrg](docs/actions/README.md#actionsaddselfhostedrunnertogroupfororg) - Add a self-hosted runner to a group for an organization
* [actionsCancelWorkflowRun](docs/actions/README.md#actionscancelworkflowrun) - Cancel a workflow run
* [actionsCreateOrUpdateEnvironmentSecret](docs/actions/README.md#actionscreateorupdateenvironmentsecret) - Create or update an environment secret
* [actionsCreateOrUpdateOrgSecret](docs/actions/README.md#actionscreateorupdateorgsecret) - Create or update an organization secret
* [actionsCreateOrUpdateRepoSecret](docs/actions/README.md#actionscreateorupdatereposecret) - Create or update a repository secret
* [actionsCreateRegistrationTokenForOrg](docs/actions/README.md#actionscreateregistrationtokenfororg) - Create a registration token for an organization
* [actionsCreateRegistrationTokenForRepo](docs/actions/README.md#actionscreateregistrationtokenforrepo) - Create a registration token for a repository
* [actionsCreateRemoveTokenForOrg](docs/actions/README.md#actionscreateremovetokenfororg) - Create a remove token for an organization
* [actionsCreateRemoveTokenForRepo](docs/actions/README.md#actionscreateremovetokenforrepo) - Create a remove token for a repository
* [actionsCreateSelfHostedRunnerGroupForOrg](docs/actions/README.md#actionscreateselfhostedrunnergroupfororg) - Create a self-hosted runner group for an organization
* [actionsCreateWorkflowDispatch](docs/actions/README.md#actionscreateworkflowdispatch) - Create a workflow dispatch event
* [actionsDeleteArtifact](docs/actions/README.md#actionsdeleteartifact) - Delete an artifact
* [actionsDeleteEnvironmentSecret](docs/actions/README.md#actionsdeleteenvironmentsecret) - Delete an environment secret
* [actionsDeleteOrgSecret](docs/actions/README.md#actionsdeleteorgsecret) - Delete an organization secret
* [actionsDeleteRepoSecret](docs/actions/README.md#actionsdeletereposecret) - Delete a repository secret
* [actionsDeleteSelfHostedRunnerFromOrg](docs/actions/README.md#actionsdeleteselfhostedrunnerfromorg) - Delete a self-hosted runner from an organization
* [actionsDeleteSelfHostedRunnerFromRepo](docs/actions/README.md#actionsdeleteselfhostedrunnerfromrepo) - Delete a self-hosted runner from a repository
* [actionsDeleteSelfHostedRunnerGroupFromOrg](docs/actions/README.md#actionsdeleteselfhostedrunnergroupfromorg) - Delete a self-hosted runner group from an organization
* [actionsDeleteWorkflowRun](docs/actions/README.md#actionsdeleteworkflowrun) - Delete a workflow run
* [actionsDeleteWorkflowRunLogs](docs/actions/README.md#actionsdeleteworkflowrunlogs) - Delete workflow run logs
* [actionsDisableSelectedRepositoryGithubActionsOrganization](docs/actions/README.md#actionsdisableselectedrepositorygithubactionsorganization) - Disable a selected repository for GitHub Actions in an organization
* [actionsDisableWorkflow](docs/actions/README.md#actionsdisableworkflow) - Disable a workflow
* [actionsDownloadArtifact](docs/actions/README.md#actionsdownloadartifact) - Download an artifact
* [actionsDownloadJobLogsForWorkflowRun](docs/actions/README.md#actionsdownloadjoblogsforworkflowrun) - Download job logs for a workflow run
* [actionsDownloadWorkflowRunLogs](docs/actions/README.md#actionsdownloadworkflowrunlogs) - Download workflow run logs
* [actionsEnableSelectedRepositoryGithubActionsOrganization](docs/actions/README.md#actionsenableselectedrepositorygithubactionsorganization) - Enable a selected repository for GitHub Actions in an organization
* [actionsEnableWorkflow](docs/actions/README.md#actionsenableworkflow) - Enable a workflow
* [actionsGetAllowedActionsOrganization](docs/actions/README.md#actionsgetallowedactionsorganization) - Get allowed actions for an organization
* [actionsGetAllowedActionsRepository](docs/actions/README.md#actionsgetallowedactionsrepository) - Get allowed actions for a repository
* [actionsGetArtifact](docs/actions/README.md#actionsgetartifact) - Get an artifact
* [actionsGetEnvironmentPublicKey](docs/actions/README.md#actionsgetenvironmentpublickey) - Get an environment public key
* [actionsGetEnvironmentSecret](docs/actions/README.md#actionsgetenvironmentsecret) - Get an environment secret
* [actionsGetGithubActionsPermissionsOrganization](docs/actions/README.md#actionsgetgithubactionspermissionsorganization) - Get GitHub Actions permissions for an organization
* [actionsGetGithubActionsPermissionsRepository](docs/actions/README.md#actionsgetgithubactionspermissionsrepository) - Get GitHub Actions permissions for a repository
* [actionsGetJobForWorkflowRun](docs/actions/README.md#actionsgetjobforworkflowrun) - Get a job for a workflow run
* [actionsGetOrgPublicKey](docs/actions/README.md#actionsgetorgpublickey) - Get an organization public key
* [actionsGetOrgSecret](docs/actions/README.md#actionsgetorgsecret) - Get an organization secret
* [actionsGetPendingDeploymentsForRun](docs/actions/README.md#actionsgetpendingdeploymentsforrun) - Get pending deployments for a workflow run
* [actionsGetRepoPublicKey](docs/actions/README.md#actionsgetrepopublickey) - Get a repository public key
* [actionsGetRepoSecret](docs/actions/README.md#actionsgetreposecret) - Get a repository secret
* [actionsGetReviewsForRun](docs/actions/README.md#actionsgetreviewsforrun) - Get the review history for a workflow run
* [actionsGetSelfHostedRunnerForOrg](docs/actions/README.md#actionsgetselfhostedrunnerfororg) - Get a self-hosted runner for an organization
* [actionsGetSelfHostedRunnerForRepo](docs/actions/README.md#actionsgetselfhostedrunnerforrepo) - Get a self-hosted runner for a repository
* [actionsGetSelfHostedRunnerGroupForOrg](docs/actions/README.md#actionsgetselfhostedrunnergroupfororg) - Get a self-hosted runner group for an organization
* [actionsGetWorkflow](docs/actions/README.md#actionsgetworkflow) - Get a workflow
* [actionsGetWorkflowRun](docs/actions/README.md#actionsgetworkflowrun) - Get a workflow run
* [actionsListArtifactsForRepo](docs/actions/README.md#actionslistartifactsforrepo) - List artifacts for a repository
* [actionsListEnvironmentSecrets](docs/actions/README.md#actionslistenvironmentsecrets) - List environment secrets
* [actionsListJobsForWorkflowRun](docs/actions/README.md#actionslistjobsforworkflowrun) - List jobs for a workflow run
* [actionsListLabelsForSelfHostedRunnerForOrg](docs/actions/README.md#actionslistlabelsforselfhostedrunnerfororg) - List labels for a self-hosted runner for an organization
* [actionsListLabelsForSelfHostedRunnerForRepo](docs/actions/README.md#actionslistlabelsforselfhostedrunnerforrepo) - List labels for a self-hosted runner for a repository
* [actionsListOrgSecrets](docs/actions/README.md#actionslistorgsecrets) - List organization secrets
* [actionsListRepoAccessToSelfHostedRunnerGroupInOrg](docs/actions/README.md#actionslistrepoaccesstoselfhostedrunnergroupinorg) - List repository access to a self-hosted runner group in an organization
* [actionsListRepoSecrets](docs/actions/README.md#actionslistreposecrets) - List repository secrets
* [actionsListRepoWorkflows](docs/actions/README.md#actionslistrepoworkflows) - List repository workflows
* [actionsListRunnerApplicationsForOrg](docs/actions/README.md#actionslistrunnerapplicationsfororg) - List runner applications for an organization
* [actionsListRunnerApplicationsForRepo](docs/actions/README.md#actionslistrunnerapplicationsforrepo) - List runner applications for a repository
* [actionsListSelectedReposForOrgSecret](docs/actions/README.md#actionslistselectedreposfororgsecret) - List selected repositories for an organization secret
* [actionsListSelectedRepositoriesEnabledGithubActionsOrganization](docs/actions/README.md#actionslistselectedrepositoriesenabledgithubactionsorganization) - List selected repositories enabled for GitHub Actions in an organization
* [actionsListSelfHostedRunnerGroupsForOrg](docs/actions/README.md#actionslistselfhostedrunnergroupsfororg) - List self-hosted runner groups for an organization
* [actionsListSelfHostedRunnersForOrg](docs/actions/README.md#actionslistselfhostedrunnersfororg) - List self-hosted runners for an organization
* [actionsListSelfHostedRunnersForRepo](docs/actions/README.md#actionslistselfhostedrunnersforrepo) - List self-hosted runners for a repository
* [actionsListSelfHostedRunnersInGroupForOrg](docs/actions/README.md#actionslistselfhostedrunnersingroupfororg) - List self-hosted runners in a group for an organization
* [actionsListWorkflowRunArtifacts](docs/actions/README.md#actionslistworkflowrunartifacts) - List workflow run artifacts
* [actionsListWorkflowRuns](docs/actions/README.md#actionslistworkflowruns) - List workflow runs for a workflow
* [actionsListWorkflowRunsForRepo](docs/actions/README.md#actionslistworkflowrunsforrepo) - List workflow runs for a repository
* [actionsReRunWorkflow](docs/actions/README.md#actionsrerunworkflow) - Re-run a workflow
* [actionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg](docs/actions/README.md#actionsremoveallcustomlabelsfromselfhostedrunnerfororg) - Remove all custom labels from a self-hosted runner for an organization
* [actionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo](docs/actions/README.md#actionsremoveallcustomlabelsfromselfhostedrunnerforrepo) - Remove all custom labels from a self-hosted runner for a repository
* [actionsRemoveCustomLabelFromSelfHostedRunnerForOrg](docs/actions/README.md#actionsremovecustomlabelfromselfhostedrunnerfororg) - Remove a custom label from a self-hosted runner for an organization
* [actionsRemoveCustomLabelFromSelfHostedRunnerForRepo](docs/actions/README.md#actionsremovecustomlabelfromselfhostedrunnerforrepo) - Remove a custom label from a self-hosted runner for a repository
* [actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg](docs/actions/README.md#actionsremoverepoaccesstoselfhostedrunnergroupinorg) - Remove repository access to a self-hosted runner group in an organization
* [actionsRemoveSelectedRepoFromOrgSecret](docs/actions/README.md#actionsremoveselectedrepofromorgsecret) - Remove selected repository from an organization secret
* [actionsRemoveSelfHostedRunnerFromGroupForOrg](docs/actions/README.md#actionsremoveselfhostedrunnerfromgroupfororg) - Remove a self-hosted runner from a group for an organization
* [actionsReviewPendingDeploymentsForRun](docs/actions/README.md#actionsreviewpendingdeploymentsforrun) - Review pending deployments for a workflow run
* [actionsSetAllowedActionsOrganization](docs/actions/README.md#actionssetallowedactionsorganization) - Set allowed actions for an organization
* [actionsSetAllowedActionsRepository](docs/actions/README.md#actionssetallowedactionsrepository) - Set allowed actions for a repository
* [actionsSetCustomLabelsForSelfHostedRunnerForOrg](docs/actions/README.md#actionssetcustomlabelsforselfhostedrunnerfororg) - Set custom labels for a self-hosted runner for an organization
* [actionsSetCustomLabelsForSelfHostedRunnerForRepo](docs/actions/README.md#actionssetcustomlabelsforselfhostedrunnerforrepo) - Set custom labels for a self-hosted runner for a repository
* [actionsSetGithubActionsPermissionsOrganization](docs/actions/README.md#actionssetgithubactionspermissionsorganization) - Set GitHub Actions permissions for an organization
* [actionsSetGithubActionsPermissionsRepository](docs/actions/README.md#actionssetgithubactionspermissionsrepository) - Set GitHub Actions permissions for a repository
* [actionsSetRepoAccessToSelfHostedRunnerGroupInOrg](docs/actions/README.md#actionssetrepoaccesstoselfhostedrunnergroupinorg) - Set repository access for a self-hosted runner group in an organization
* [actionsSetSelectedReposForOrgSecret](docs/actions/README.md#actionssetselectedreposfororgsecret) - Set selected repositories for an organization secret
* [actionsSetSelectedRepositoriesEnabledGithubActionsOrganization](docs/actions/README.md#actionssetselectedrepositoriesenabledgithubactionsorganization) - Set selected repositories enabled for GitHub Actions in an organization
* [actionsSetSelfHostedRunnersInGroupForOrg](docs/actions/README.md#actionssetselfhostedrunnersingroupfororg) - Set self-hosted runners in a group for an organization
* [actionsUpdateSelfHostedRunnerGroupForOrg](docs/actions/README.md#actionsupdateselfhostedrunnergroupfororg) - Update a self-hosted runner group for an organization

### [activity](docs/activity/README.md)

* [activityCheckRepoIsStarredByAuthenticatedUser](docs/activity/README.md#activitycheckrepoisstarredbyauthenticateduser) - Check if a repository is starred by the authenticated user
* [activityDeleteRepoSubscription](docs/activity/README.md#activitydeletereposubscription) - Delete a repository subscription
* [activityDeleteThreadSubscription](docs/activity/README.md#activitydeletethreadsubscription) - Delete a thread subscription
* [activityGetFeeds](docs/activity/README.md#activitygetfeeds) - Get feeds
* [activityGetRepoSubscription](docs/activity/README.md#activitygetreposubscription) - Get a repository subscription
* [activityGetThread](docs/activity/README.md#activitygetthread) - Get a thread
* [activityGetThreadSubscriptionForAuthenticatedUser](docs/activity/README.md#activitygetthreadsubscriptionforauthenticateduser) - Get a thread subscription for the authenticated user
* [activityListEventsForAuthenticatedUser](docs/activity/README.md#activitylisteventsforauthenticateduser) - List events for the authenticated user
* [activityListNotificationsForAuthenticatedUser](docs/activity/README.md#activitylistnotificationsforauthenticateduser) - List notifications for the authenticated user
* [activityListOrgEventsForAuthenticatedUser](docs/activity/README.md#activitylistorgeventsforauthenticateduser) - List organization events for the authenticated user
* [activityListPublicEvents](docs/activity/README.md#activitylistpublicevents) - List public events
* [activityListPublicEventsForRepoNetwork](docs/activity/README.md#activitylistpubliceventsforreponetwork) - List public events for a network of repositories
* [activityListPublicEventsForUser](docs/activity/README.md#activitylistpubliceventsforuser) - List public events for a user
* [activityListPublicOrgEvents](docs/activity/README.md#activitylistpublicorgevents) - List public organization events
* [activityListReceivedEventsForUser](docs/activity/README.md#activitylistreceivedeventsforuser) - List events received by the authenticated user
* [activityListReceivedPublicEventsForUser](docs/activity/README.md#activitylistreceivedpubliceventsforuser) - List public events received by a user
* [activityListRepoEvents](docs/activity/README.md#activitylistrepoevents) - List repository events
* [activityListRepoNotificationsForAuthenticatedUser](docs/activity/README.md#activitylistreponotificationsforauthenticateduser) - List repository notifications for the authenticated user
* [activityListReposStarredByAuthenticatedUser](docs/activity/README.md#activitylistreposstarredbyauthenticateduser) - List repositories starred by the authenticated user
* [activityListReposStarredByUser](docs/activity/README.md#activitylistreposstarredbyuser) - List repositories starred by a user
* [activityListReposWatchedByUser](docs/activity/README.md#activitylistreposwatchedbyuser) - List repositories watched by a user
* [activityListStargazersForRepo](docs/activity/README.md#activityliststargazersforrepo) - List stargazers
* [activityListWatchedReposForAuthenticatedUser](docs/activity/README.md#activitylistwatchedreposforauthenticateduser) - List repositories watched by the authenticated user
* [activityListWatchersForRepo](docs/activity/README.md#activitylistwatchersforrepo) - List watchers
* [activityMarkNotificationsAsRead](docs/activity/README.md#activitymarknotificationsasread) - Mark notifications as read
* [activityMarkRepoNotificationsAsRead](docs/activity/README.md#activitymarkreponotificationsasread) - Mark repository notifications as read
* [activityMarkThreadAsRead](docs/activity/README.md#activitymarkthreadasread) - Mark a thread as read
* [activitySetRepoSubscription](docs/activity/README.md#activitysetreposubscription) - Set a repository subscription
* [activitySetThreadSubscription](docs/activity/README.md#activitysetthreadsubscription) - Set a thread subscription
* [activityStarRepoForAuthenticatedUser](docs/activity/README.md#activitystarrepoforauthenticateduser) - Star a repository for the authenticated user
* [activityUnstarRepoForAuthenticatedUser](docs/activity/README.md#activityunstarrepoforauthenticateduser) - Unstar a repository for the authenticated user

### [apps](docs/apps/README.md)

* [appsAddRepoToInstallationForAuthenticatedUser](docs/apps/README.md#appsaddrepotoinstallationforauthenticateduser) - Add a repository to an app installation
* [appsCheckToken](docs/apps/README.md#appschecktoken) - Check a token
* [appsCreateFromManifest](docs/apps/README.md#appscreatefrommanifest) - Create a GitHub App from a manifest
* [appsCreateInstallationAccessToken](docs/apps/README.md#appscreateinstallationaccesstoken) - Create an installation access token for an app
* [appsDeleteAuthorization](docs/apps/README.md#appsdeleteauthorization) - Delete an app authorization
* [appsDeleteInstallation](docs/apps/README.md#appsdeleteinstallation) - Delete an installation for the authenticated app
* [appsDeleteToken](docs/apps/README.md#appsdeletetoken) - Delete an app token
* [appsGetAuthenticated](docs/apps/README.md#appsgetauthenticated) - Get the authenticated app
* [appsGetBySlug](docs/apps/README.md#appsgetbyslug) - Get an app
* [appsGetInstallation](docs/apps/README.md#appsgetinstallation) - Get an installation for the authenticated app
* [appsGetOrgInstallation](docs/apps/README.md#appsgetorginstallation) - Get an organization installation for the authenticated app
* [appsGetRepoInstallation](docs/apps/README.md#appsgetrepoinstallation) - Get a repository installation for the authenticated app
* [appsGetUserInstallation](docs/apps/README.md#appsgetuserinstallation) - Get a user installation for the authenticated app
* [appsGetWebhookConfigForApp](docs/apps/README.md#appsgetwebhookconfigforapp) - Get a webhook configuration for an app
* [appsGetWebhookDelivery](docs/apps/README.md#appsgetwebhookdelivery) - Get a delivery for an app webhook
* [appsListInstallationReposForAuthenticatedUser](docs/apps/README.md#appslistinstallationreposforauthenticateduser) - List repositories accessible to the user access token
* [appsListInstallations](docs/apps/README.md#appslistinstallations) - List installations for the authenticated app
* [appsListInstallationsForAuthenticatedUser](docs/apps/README.md#appslistinstallationsforauthenticateduser) - List app installations accessible to the user access token
* [appsListReposAccessibleToInstallation](docs/apps/README.md#appslistreposaccessibletoinstallation) - List repositories accessible to the app installation
* [appsListWebhookDeliveries](docs/apps/README.md#appslistwebhookdeliveries) - List deliveries for an app webhook
* [appsRedeliverWebhookDelivery](docs/apps/README.md#appsredeliverwebhookdelivery) - Redeliver a delivery for an app webhook
* [appsRemoveRepoFromInstallationForAuthenticatedUser](docs/apps/README.md#appsremoverepofrominstallationforauthenticateduser) - Remove a repository from an app installation
* [appsResetToken](docs/apps/README.md#appsresettoken) - Reset a token
* [appsRevokeInstallationAccessToken](docs/apps/README.md#appsrevokeinstallationaccesstoken) - Revoke an installation access token
* [appsScopeToken](docs/apps/README.md#appsscopetoken) - Create a scoped access token
* [appsSuspendInstallation](docs/apps/README.md#appssuspendinstallation) - Suspend an app installation
* [appsUnsuspendInstallation](docs/apps/README.md#appsunsuspendinstallation) - Unsuspend an app installation
* [appsUpdateWebhookConfigForApp](docs/apps/README.md#appsupdatewebhookconfigforapp) - Update a webhook configuration for an app

### [billing](docs/billing/README.md)

* [billingGetGithubAdvancedSecurityBillingGhe](docs/billing/README.md#billinggetgithubadvancedsecuritybillingghe) - Get GitHub Advanced Security active committers for an enterprise
* [billingGetGithubAdvancedSecurityBillingOrg](docs/billing/README.md#billinggetgithubadvancedsecuritybillingorg) - Get GitHub Advanced Security active committers for an organization

### [checks](docs/checks/README.md)

* [checksCreate](docs/checks/README.md#checkscreate) - Create a check run
* [checksCreateSuite](docs/checks/README.md#checkscreatesuite) - Create a check suite
* [checksGet](docs/checks/README.md#checksget) - Get a check run
* [checksGetSuite](docs/checks/README.md#checksgetsuite) - Get a check suite
* [checksListAnnotations](docs/checks/README.md#checkslistannotations) - List check run annotations
* [checksListForRef](docs/checks/README.md#checkslistforref) - List check runs for a Git reference
* [checksListForSuite](docs/checks/README.md#checkslistforsuite) - List check runs in a check suite
* [checksListSuitesForRef](docs/checks/README.md#checkslistsuitesforref) - List check suites for a Git reference
* [checksRerequestRun](docs/checks/README.md#checksrerequestrun) - Rerequest a check run
* [checksRerequestSuite](docs/checks/README.md#checksrerequestsuite) - Rerequest a check suite
* [checksSetSuitesPreferences](docs/checks/README.md#checkssetsuitespreferences) - Update repository preferences for check suites
* [checksUpdate](docs/checks/README.md#checksupdate) - Update a check run

### [codeScanning](docs/codescanning/README.md)

* [codeScanningDeleteAnalysis](docs/codescanning/README.md#codescanningdeleteanalysis) - Delete a code scanning analysis from a repository
* [codeScanningGetAlert](docs/codescanning/README.md#codescanninggetalert) - Get a code scanning alert
* [codeScanningGetAnalysis](docs/codescanning/README.md#codescanninggetanalysis) - Get a code scanning analysis for a repository
* [codeScanningGetSarif](docs/codescanning/README.md#codescanninggetsarif) - Get information about a SARIF upload
* [codeScanningListAlertInstances](docs/codescanning/README.md#codescanninglistalertinstances) - List instances of a code scanning alert
* [codeScanningListAlertsForRepo](docs/codescanning/README.md#codescanninglistalertsforrepo) - List code scanning alerts for a repository
* [codeScanningListRecentAnalyses](docs/codescanning/README.md#codescanninglistrecentanalyses) - List code scanning analyses for a repository
* [codeScanningUpdateAlert](docs/codescanning/README.md#codescanningupdatealert) - Update a code scanning alert
* [codeScanningUploadSarif](docs/codescanning/README.md#codescanninguploadsarif) - Upload an analysis as SARIF data

### [codesOfConduct](docs/codesofconduct/README.md)

* [codesOfConductGetAllCodesOfConduct](docs/codesofconduct/README.md#codesofconductgetallcodesofconduct) - Get all codes of conduct
* [codesOfConductGetConductCode](docs/codesofconduct/README.md#codesofconductgetconductcode) - Get a code of conduct

### [dependabot](docs/dependabot/README.md)

* [dependabotAddSelectedRepoToOrgSecret](docs/dependabot/README.md#dependabotaddselectedrepotoorgsecret) - Add selected repository to an organization secret
* [dependabotCreateOrUpdateOrgSecret](docs/dependabot/README.md#dependabotcreateorupdateorgsecret) - Create or update an organization secret
* [dependabotCreateOrUpdateRepoSecret](docs/dependabot/README.md#dependabotcreateorupdatereposecret) - Create or update a repository secret
* [dependabotDeleteOrgSecret](docs/dependabot/README.md#dependabotdeleteorgsecret) - Delete an organization secret
* [dependabotDeleteRepoSecret](docs/dependabot/README.md#dependabotdeletereposecret) - Delete a repository secret
* [dependabotGetOrgPublicKey](docs/dependabot/README.md#dependabotgetorgpublickey) - Get an organization public key
* [dependabotGetOrgSecret](docs/dependabot/README.md#dependabotgetorgsecret) - Get an organization secret
* [dependabotGetRepoPublicKey](docs/dependabot/README.md#dependabotgetrepopublickey) - Get a repository public key
* [dependabotGetRepoSecret](docs/dependabot/README.md#dependabotgetreposecret) - Get a repository secret
* [dependabotListOrgSecrets](docs/dependabot/README.md#dependabotlistorgsecrets) - List organization secrets
* [dependabotListRepoSecrets](docs/dependabot/README.md#dependabotlistreposecrets) - List repository secrets
* [dependabotListSelectedReposForOrgSecret](docs/dependabot/README.md#dependabotlistselectedreposfororgsecret) - List selected repositories for an organization secret
* [dependabotRemoveSelectedRepoFromOrgSecret](docs/dependabot/README.md#dependabotremoveselectedrepofromorgsecret) - Remove selected repository from an organization secret
* [dependabotSetSelectedReposForOrgSecret](docs/dependabot/README.md#dependabotsetselectedreposfororgsecret) - Set selected repositories for an organization secret

### [emojis](docs/emojis/README.md)

* [emojisGet](docs/emojis/README.md#emojisget) - Get emojis

### [enterpriseAdmin](docs/enterpriseadmin/README.md)

* [enterpriseAdminAddAuthorizedSshKey](docs/enterpriseadmin/README.md#enterpriseadminaddauthorizedsshkey) - Add an authorized SSH key
* [enterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminaddcustomlabelstoselfhostedrunnerforenterprise) - Add custom labels to a self-hosted runner for an enterprise
* [enterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise](docs/enterpriseadmin/README.md#enterpriseadminaddorgaccesstoselfhostedrunnergroupinenterprise) - Add organization access to a self-hosted runner group in an enterprise
* [enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminaddselfhostedrunnertogroupforenterprise) - Add a self-hosted runner to a group for an enterprise
* [enterpriseAdminCreateEnterpriseServerLicense](docs/enterpriseadmin/README.md#enterpriseadmincreateenterpriseserverlicense) - Create a GitHub license
* [enterpriseAdminCreateGlobalWebhook](docs/enterpriseadmin/README.md#enterpriseadmincreateglobalwebhook) - Create a global webhook
* [enterpriseAdminCreateImpersonationOAuthToken](docs/enterpriseadmin/README.md#enterpriseadmincreateimpersonationoauthtoken) - Create an impersonation OAuth token
* [enterpriseAdminCreateOrg](docs/enterpriseadmin/README.md#enterpriseadmincreateorg) - Create an organization
* [enterpriseAdminCreatePreReceiveEnvironment](docs/enterpriseadmin/README.md#enterpriseadmincreateprereceiveenvironment) - Create a pre-receive environment
* [enterpriseAdminCreatePreReceiveHook](docs/enterpriseadmin/README.md#enterpriseadmincreateprereceivehook) - Create a pre-receive hook
* [enterpriseAdminCreateRegistrationTokenForEnterprise](docs/enterpriseadmin/README.md#enterpriseadmincreateregistrationtokenforenterprise) - Create a registration token for an enterprise
* [enterpriseAdminCreateRemoveTokenForEnterprise](docs/enterpriseadmin/README.md#enterpriseadmincreateremovetokenforenterprise) - Create a remove token for an enterprise
* [enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise](docs/enterpriseadmin/README.md#enterpriseadmincreateselfhostedrunnergroupforenterprise) - Create a self-hosted runner group for an enterprise
* [enterpriseAdminCreateUser](docs/enterpriseadmin/README.md#enterpriseadmincreateuser) - Create a user
* [enterpriseAdminDeleteGlobalWebhook](docs/enterpriseadmin/README.md#enterpriseadmindeleteglobalwebhook) - Delete a global webhook
* [enterpriseAdminDeleteImpersonationOAuthToken](docs/enterpriseadmin/README.md#enterpriseadmindeleteimpersonationoauthtoken) - Delete an impersonation OAuth token
* [enterpriseAdminDeletePersonalAccessToken](docs/enterpriseadmin/README.md#enterpriseadmindeletepersonalaccesstoken) - Delete a personal access token
* [enterpriseAdminDeletePreReceiveEnvironment](docs/enterpriseadmin/README.md#enterpriseadmindeleteprereceiveenvironment) - Delete a pre-receive environment
* [enterpriseAdminDeletePreReceiveHook](docs/enterpriseadmin/README.md#enterpriseadmindeleteprereceivehook) - Delete a pre-receive hook
* [enterpriseAdminDeletePublicKey](docs/enterpriseadmin/README.md#enterpriseadmindeletepublickey) - Delete a public key
* [enterpriseAdminDeleteSelfHostedRunnerFromEnterprise](docs/enterpriseadmin/README.md#enterpriseadmindeleteselfhostedrunnerfromenterprise) - Delete a self-hosted runner from an enterprise
* [enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise](docs/enterpriseadmin/README.md#enterpriseadmindeleteselfhostedrunnergroupfromenterprise) - Delete a self-hosted runner group from an enterprise
* [enterpriseAdminDeleteUser](docs/enterpriseadmin/README.md#enterpriseadmindeleteuser) - Delete a user
* [enterpriseAdminDemoteSiteAdministrator](docs/enterpriseadmin/README.md#enterpriseadmindemotesiteadministrator) - Demote a site administrator
* [enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise](docs/enterpriseadmin/README.md#enterpriseadmindisableselectedorganizationgithubactionsenterprise) - Disable a selected organization for GitHub Actions in an enterprise
* [enterpriseAdminEnableOrDisableMaintenanceMode](docs/enterpriseadmin/README.md#enterpriseadminenableordisablemaintenancemode) - Enable or disable maintenance mode
* [enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise](docs/enterpriseadmin/README.md#enterpriseadminenableselectedorganizationgithubactionsenterprise) - Enable a selected organization for GitHub Actions in an enterprise
* [enterpriseAdminGetAllAuthorizedSshKeys](docs/enterpriseadmin/README.md#enterpriseadmingetallauthorizedsshkeys) - Get all authorized SSH keys
* [enterpriseAdminGetAllStats](docs/enterpriseadmin/README.md#enterpriseadmingetallstats) - Get all statistics
* [enterpriseAdminGetAllowedActionsEnterprise](docs/enterpriseadmin/README.md#enterpriseadmingetallowedactionsenterprise) - Get allowed actions for an enterprise
* [enterpriseAdminGetAnnouncement](docs/enterpriseadmin/README.md#enterpriseadmingetannouncement) - Get the global announcement banner
* [enterpriseAdminGetAuditLog](docs/enterpriseadmin/README.md#enterpriseadmingetauditlog) - Get the audit log for an enterprise
* [enterpriseAdminGetCommentStats](docs/enterpriseadmin/README.md#enterpriseadmingetcommentstats) - Get comment statistics
* [enterpriseAdminGetConfigurationStatus](docs/enterpriseadmin/README.md#enterpriseadmingetconfigurationstatus) - Get the configuration status
* [enterpriseAdminGetDownloadStatusForPreReceiveEnvironment](docs/enterpriseadmin/README.md#enterpriseadmingetdownloadstatusforprereceiveenvironment) - Get the download status for a pre-receive environment
* [enterpriseAdminGetGistStats](docs/enterpriseadmin/README.md#enterpriseadmingetgiststats) - Get gist statistics
* [enterpriseAdminGetGithubActionsPermissionsEnterprise](docs/enterpriseadmin/README.md#enterpriseadmingetgithubactionspermissionsenterprise) - Get GitHub Actions permissions for an enterprise
* [enterpriseAdminGetGlobalWebhook](docs/enterpriseadmin/README.md#enterpriseadmingetglobalwebhook) - Get a global webhook
* [enterpriseAdminGetHooksStats](docs/enterpriseadmin/README.md#enterpriseadmingethooksstats) - Get hooks statistics
* [enterpriseAdminGetIssueStats](docs/enterpriseadmin/README.md#enterpriseadmingetissuestats) - Get issue statistics
* [enterpriseAdminGetLicenseInformation](docs/enterpriseadmin/README.md#enterpriseadmingetlicenseinformation) - Get license information
* [enterpriseAdminGetMaintenanceStatus](docs/enterpriseadmin/README.md#enterpriseadmingetmaintenancestatus) - Get the maintenance status
* [enterpriseAdminGetMilestoneStats](docs/enterpriseadmin/README.md#enterpriseadmingetmilestonestats) - Get milestone statistics
* [enterpriseAdminGetOrgStats](docs/enterpriseadmin/README.md#enterpriseadmingetorgstats) - Get organization statistics
* [enterpriseAdminGetPagesStats](docs/enterpriseadmin/README.md#enterpriseadmingetpagesstats) - Get pages statistics
* [enterpriseAdminGetPreReceiveEnvironment](docs/enterpriseadmin/README.md#enterpriseadmingetprereceiveenvironment) - Get a pre-receive environment
* [enterpriseAdminGetPreReceiveHook](docs/enterpriseadmin/README.md#enterpriseadmingetprereceivehook) - Get a pre-receive hook
* [enterpriseAdminGetPreReceiveHookForOrg](docs/enterpriseadmin/README.md#enterpriseadmingetprereceivehookfororg) - Get a pre-receive hook for an organization
* [enterpriseAdminGetPreReceiveHookForRepo](docs/enterpriseadmin/README.md#enterpriseadmingetprereceivehookforrepo) - Get a pre-receive hook for a repository
* [enterpriseAdminGetPullRequestStats](docs/enterpriseadmin/README.md#enterpriseadmingetpullrequeststats) - Get pull request statistics
* [enterpriseAdminGetRepoStats](docs/enterpriseadmin/README.md#enterpriseadmingetrepostats) - Get repository statistics
* [enterpriseAdminGetSelfHostedRunnerForEnterprise](docs/enterpriseadmin/README.md#enterpriseadmingetselfhostedrunnerforenterprise) - Get a self-hosted runner for an enterprise
* [enterpriseAdminGetSelfHostedRunnerGroupForEnterprise](docs/enterpriseadmin/README.md#enterpriseadmingetselfhostedrunnergroupforenterprise) - Get a self-hosted runner group for an enterprise
* [enterpriseAdminGetSettings](docs/enterpriseadmin/README.md#enterpriseadmingetsettings) - Get settings
* [enterpriseAdminGetUserStats](docs/enterpriseadmin/README.md#enterpriseadmingetuserstats) - Get users statistics
* [enterpriseAdminListGlobalWebhooks](docs/enterpriseadmin/README.md#enterpriseadminlistglobalwebhooks) - List global webhooks
* [enterpriseAdminListLabelsForSelfHostedRunnerForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminlistlabelsforselfhostedrunnerforenterprise) - List labels for a self-hosted runner for an enterprise
* [enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise](docs/enterpriseadmin/README.md#enterpriseadminlistorgaccesstoselfhostedrunnergroupinenterprise) - List organization access to a self-hosted runner group in an enterprise
* [enterpriseAdminListPersonalAccessTokens](docs/enterpriseadmin/README.md#enterpriseadminlistpersonalaccesstokens) - List personal access tokens
* [enterpriseAdminListPreReceiveEnvironments](docs/enterpriseadmin/README.md#enterpriseadminlistprereceiveenvironments) - List pre-receive environments
* [enterpriseAdminListPreReceiveHooks](docs/enterpriseadmin/README.md#enterpriseadminlistprereceivehooks) - List pre-receive hooks
* [enterpriseAdminListPreReceiveHooksForOrg](docs/enterpriseadmin/README.md#enterpriseadminlistprereceivehooksfororg) - List pre-receive hooks for an organization
* [enterpriseAdminListPreReceiveHooksForRepo](docs/enterpriseadmin/README.md#enterpriseadminlistprereceivehooksforrepo) - List pre-receive hooks for a repository
* [enterpriseAdminListPublicKeys](docs/enterpriseadmin/README.md#enterpriseadminlistpublickeys) - List public keys
* [enterpriseAdminListRunnerApplicationsForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminlistrunnerapplicationsforenterprise) - List runner applications for an enterprise
* [enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise](docs/enterpriseadmin/README.md#enterpriseadminlistselectedorganizationsenabledgithubactionsenterprise) - List selected organizations enabled for GitHub Actions in an enterprise
* [enterpriseAdminListSelfHostedRunnerGroupsForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminlistselfhostedrunnergroupsforenterprise) - List self-hosted runner groups for an enterprise
* [enterpriseAdminListSelfHostedRunnersForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminlistselfhostedrunnersforenterprise) - List self-hosted runners for an enterprise
* [enterpriseAdminListSelfHostedRunnersInGroupForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminlistselfhostedrunnersingroupforenterprise) - List self-hosted runners in a group for an enterprise
* [enterpriseAdminPingGlobalWebhook](docs/enterpriseadmin/README.md#enterpriseadminpingglobalwebhook) - Ping a global webhook
* [enterpriseAdminPromoteUserToBeSiteAdministrator](docs/enterpriseadmin/README.md#enterpriseadminpromoteusertobesiteadministrator) - Promote a user to be a site administrator
* [enterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminremoveallcustomlabelsfromselfhostedrunnerforenterprise) - Remove all custom labels from a self-hosted runner for an enterprise
* [enterpriseAdminRemoveAnnouncement](docs/enterpriseadmin/README.md#enterpriseadminremoveannouncement) - Remove the global announcement banner
* [enterpriseAdminRemoveAuthorizedSshKey](docs/enterpriseadmin/README.md#enterpriseadminremoveauthorizedsshkey) - Remove an authorized SSH key
* [enterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminremovecustomlabelfromselfhostedrunnerforenterprise) - Remove a custom label from a self-hosted runner for an enterprise
* [enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise](docs/enterpriseadmin/README.md#enterpriseadminremoveorgaccesstoselfhostedrunnergroupinenterprise) - Remove organization access to a self-hosted runner group in an enterprise
* [enterpriseAdminRemovePreReceiveHookEnforcementForOrg](docs/enterpriseadmin/README.md#enterpriseadminremoveprereceivehookenforcementfororg) - Remove pre-receive hook enforcement for an organization
* [enterpriseAdminRemovePreReceiveHookEnforcementForRepo](docs/enterpriseadmin/README.md#enterpriseadminremoveprereceivehookenforcementforrepo) - Remove pre-receive hook enforcement for a repository
* [enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminremoveselfhostedrunnerfromgroupforenterprise) - Remove a self-hosted runner from a group for an enterprise
* [enterpriseAdminSetAllowedActionsEnterprise](docs/enterpriseadmin/README.md#enterpriseadminsetallowedactionsenterprise) - Set allowed actions for an enterprise
* [enterpriseAdminSetAnnouncement](docs/enterpriseadmin/README.md#enterpriseadminsetannouncement) - Set the global announcement banner
* [enterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminsetcustomlabelsforselfhostedrunnerforenterprise) - Set custom labels for a self-hosted runner for an enterprise
* [enterpriseAdminSetGithubActionsPermissionsEnterprise](docs/enterpriseadmin/README.md#enterpriseadminsetgithubactionspermissionsenterprise) - Set GitHub Actions permissions for an enterprise
* [enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise](docs/enterpriseadmin/README.md#enterpriseadminsetorgaccesstoselfhostedrunnergroupinenterprise) - Set organization access for a self-hosted runner group in an enterprise
* [enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise](docs/enterpriseadmin/README.md#enterpriseadminsetselectedorganizationsenabledgithubactionsenterprise) - Set selected organizations enabled for GitHub Actions in an enterprise
* [enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminsetselfhostedrunnersingroupforenterprise) - Set self-hosted runners in a group for an enterprise
* [enterpriseAdminSetSettings](docs/enterpriseadmin/README.md#enterpriseadminsetsettings) - Set settings
* [enterpriseAdminStartConfigurationProcess](docs/enterpriseadmin/README.md#enterpriseadminstartconfigurationprocess) - Start a configuration process
* [enterpriseAdminStartPreReceiveEnvironmentDownload](docs/enterpriseadmin/README.md#enterpriseadminstartprereceiveenvironmentdownload) - Start a pre-receive environment download
* [enterpriseAdminSuspendUser](docs/enterpriseadmin/README.md#enterpriseadminsuspenduser) - Suspend a user
* [enterpriseAdminSyncLdapMappingForTeam](docs/enterpriseadmin/README.md#enterpriseadminsyncldapmappingforteam) - Sync LDAP mapping for a team
* [enterpriseAdminSyncLdapMappingForUser](docs/enterpriseadmin/README.md#enterpriseadminsyncldapmappingforuser) - Sync LDAP mapping for a user
* [enterpriseAdminUnsuspendUser](docs/enterpriseadmin/README.md#enterpriseadminunsuspenduser) - Unsuspend a user
* [enterpriseAdminUpdateGlobalWebhook](docs/enterpriseadmin/README.md#enterpriseadminupdateglobalwebhook) - Update a global webhook
* [enterpriseAdminUpdateLdapMappingForTeam](docs/enterpriseadmin/README.md#enterpriseadminupdateldapmappingforteam) - Update LDAP mapping for a team
* [enterpriseAdminUpdateLdapMappingForUser](docs/enterpriseadmin/README.md#enterpriseadminupdateldapmappingforuser) - Update LDAP mapping for a user
* [enterpriseAdminUpdateOrgName](docs/enterpriseadmin/README.md#enterpriseadminupdateorgname) - Update an organization name
* [enterpriseAdminUpdatePreReceiveEnvironment](docs/enterpriseadmin/README.md#enterpriseadminupdateprereceiveenvironment) - Update a pre-receive environment
* [enterpriseAdminUpdatePreReceiveHook](docs/enterpriseadmin/README.md#enterpriseadminupdateprereceivehook) - Update a pre-receive hook
* [enterpriseAdminUpdatePreReceiveHookEnforcementForOrg](docs/enterpriseadmin/README.md#enterpriseadminupdateprereceivehookenforcementfororg) - Update pre-receive hook enforcement for an organization
* [enterpriseAdminUpdatePreReceiveHookEnforcementForRepo](docs/enterpriseadmin/README.md#enterpriseadminupdateprereceivehookenforcementforrepo) - Update pre-receive hook enforcement for a repository
* [enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise](docs/enterpriseadmin/README.md#enterpriseadminupdateselfhostedrunnergroupforenterprise) - Update a self-hosted runner group for an enterprise
* [enterpriseAdminUpdateUsernameForUser](docs/enterpriseadmin/README.md#enterpriseadminupdateusernameforuser) - Update the username for a user
* [enterpriseAdminUpgradeLicense](docs/enterpriseadmin/README.md#enterpriseadminupgradelicense) - Upgrade a license

### [gists](docs/gists/README.md)

* [gistsCheckIsStarred](docs/gists/README.md#gistscheckisstarred) - Check if a gist is starred
* [gistsCreate](docs/gists/README.md#gistscreate) - Create a gist
* [gistsCreateComment](docs/gists/README.md#gistscreatecomment) - Create a gist comment
* [gistsDelete](docs/gists/README.md#gistsdelete) - Delete a gist
* [gistsDeleteComment](docs/gists/README.md#gistsdeletecomment) - Delete a gist comment
* [gistsFork](docs/gists/README.md#gistsfork) - Fork a gist
* [gistsGet](docs/gists/README.md#gistsget) - Get a gist
* [gistsGetComment](docs/gists/README.md#gistsgetcomment) - Get a gist comment
* [gistsGetRevision](docs/gists/README.md#gistsgetrevision) - Get a gist revision
* [gistsList](docs/gists/README.md#gistslist) - List gists for the authenticated user
* [gistsListComments](docs/gists/README.md#gistslistcomments) - List gist comments
* [gistsListCommits](docs/gists/README.md#gistslistcommits) - List gist commits
* [gistsListForUser](docs/gists/README.md#gistslistforuser) - List gists for a user
* [gistsListForks](docs/gists/README.md#gistslistforks) - List gist forks
* [gistsListPublic](docs/gists/README.md#gistslistpublic) - List public gists
* [gistsListStarred](docs/gists/README.md#gistsliststarred) - List starred gists
* [gistsStar](docs/gists/README.md#gistsstar) - Star a gist
* [gistsUnstar](docs/gists/README.md#gistsunstar) - Unstar a gist
* [gistsUpdate](docs/gists/README.md#gistsupdate) - Update a gist
* [gistsUpdateComment](docs/gists/README.md#gistsupdatecomment) - Update a gist comment

### [git](docs/git/README.md)

* [gitCreateBlob](docs/git/README.md#gitcreateblob) - Create a blob
* [gitCreateCommit](docs/git/README.md#gitcreatecommit) - Create a commit
* [gitCreateRef](docs/git/README.md#gitcreateref) - Create a reference
* [gitCreateTag](docs/git/README.md#gitcreatetag) - Create a tag object
* [gitCreateTree](docs/git/README.md#gitcreatetree) - Create a tree
* [gitDeleteRef](docs/git/README.md#gitdeleteref) - Delete a reference
* [gitGetBlob](docs/git/README.md#gitgetblob) - Get a blob
* [gitGetCommit](docs/git/README.md#gitgetcommit) - Get a commit
* [gitGetRef](docs/git/README.md#gitgetref) - Get a reference
* [gitGetTag](docs/git/README.md#gitgettag) - Get a tag
* [gitGetTree](docs/git/README.md#gitgettree) - Get a tree
* [gitListMatchingRefs](docs/git/README.md#gitlistmatchingrefs) - List matching references
* [gitUpdateRef](docs/git/README.md#gitupdateref) - Update a reference

### [gitignore](docs/gitignore/README.md)

* [gitignoreGetAllTemplates](docs/gitignore/README.md#gitignoregetalltemplates) - Get all gitignore templates
* [gitignoreGetTemplate](docs/gitignore/README.md#gitignoregettemplate) - Get a gitignore template

### [issues](docs/issues/README.md)

* [issuesAddAssignees](docs/issues/README.md#issuesaddassignees) - Add assignees to an issue
* [issuesAddLabels](docs/issues/README.md#issuesaddlabels) - Add labels to an issue
* [issuesCheckUserCanBeAssigned](docs/issues/README.md#issuescheckusercanbeassigned) - Check if a user can be assigned
* [issuesCheckUserCanBeAssignedToIssue](docs/issues/README.md#issuescheckusercanbeassignedtoissue) - Check if a user can be assigned to a issue
* [issuesCreate](docs/issues/README.md#issuescreate) - Create an issue
* [issuesCreateComment](docs/issues/README.md#issuescreatecomment) - Create an issue comment
* [issuesCreateLabel](docs/issues/README.md#issuescreatelabel) - Create a label
* [issuesCreateMilestone](docs/issues/README.md#issuescreatemilestone) - Create a milestone
* [issuesDeleteComment](docs/issues/README.md#issuesdeletecomment) - Delete an issue comment
* [issuesDeleteLabel](docs/issues/README.md#issuesdeletelabel) - Delete a label
* [issuesDeleteMilestone](docs/issues/README.md#issuesdeletemilestone) - Delete a milestone
* [issuesGet](docs/issues/README.md#issuesget) - Get an issue
* [issuesGetComment](docs/issues/README.md#issuesgetcomment) - Get an issue comment
* [issuesGetEvent](docs/issues/README.md#issuesgetevent) - Get an issue event
* [issuesGetLabel](docs/issues/README.md#issuesgetlabel) - Get a label
* [issuesGetMilestone](docs/issues/README.md#issuesgetmilestone) - Get a milestone
* [issuesList](docs/issues/README.md#issueslist) - List issues assigned to the authenticated user
* [issuesListAssignees](docs/issues/README.md#issueslistassignees) - List assignees
* [issuesListComments](docs/issues/README.md#issueslistcomments) - List issue comments
* [issuesListCommentsForRepo](docs/issues/README.md#issueslistcommentsforrepo) - List issue comments for a repository
* [issuesListEvents](docs/issues/README.md#issueslistevents) - List issue events
* [issuesListEventsForRepo](docs/issues/README.md#issueslisteventsforrepo) - List issue events for a repository
* [issuesListEventsForTimeline](docs/issues/README.md#issueslisteventsfortimeline) - List timeline events for an issue
* [issuesListForAuthenticatedUser](docs/issues/README.md#issueslistforauthenticateduser) - List user account issues assigned to the authenticated user
* [issuesListForOrg](docs/issues/README.md#issueslistfororg) - List organization issues assigned to the authenticated user
* [issuesListForRepo](docs/issues/README.md#issueslistforrepo) - List repository issues
* [issuesListLabelsForMilestone](docs/issues/README.md#issueslistlabelsformilestone) - List labels for issues in a milestone
* [issuesListLabelsForRepo](docs/issues/README.md#issueslistlabelsforrepo) - List labels for a repository
* [issuesListLabelsOnIssue](docs/issues/README.md#issueslistlabelsonissue) - List labels for an issue
* [issuesListMilestones](docs/issues/README.md#issueslistmilestones) - List milestones
* [issuesLock](docs/issues/README.md#issueslock) - Lock an issue
* [issuesRemoveAllLabels](docs/issues/README.md#issuesremovealllabels) - Remove all labels from an issue
* [issuesRemoveAssignees](docs/issues/README.md#issuesremoveassignees) - Remove assignees from an issue
* [issuesRemoveLabel](docs/issues/README.md#issuesremovelabel) - Remove a label from an issue
* [issuesSetLabels](docs/issues/README.md#issuessetlabels) - Set labels for an issue
* [issuesUnlock](docs/issues/README.md#issuesunlock) - Unlock an issue
* [issuesUpdate](docs/issues/README.md#issuesupdate) - Update an issue
* [issuesUpdateComment](docs/issues/README.md#issuesupdatecomment) - Update an issue comment
* [issuesUpdateLabel](docs/issues/README.md#issuesupdatelabel) - Update a label
* [issuesUpdateMilestone](docs/issues/README.md#issuesupdatemilestone) - Update a milestone

### [licenses](docs/licenses/README.md)

* [licensesGet](docs/licenses/README.md#licensesget) - Get a license
* [licensesGetAllCommonlyUsed](docs/licenses/README.md#licensesgetallcommonlyused) - Get all commonly used licenses
* [licensesGetForRepo](docs/licenses/README.md#licensesgetforrepo) - Get the license for a repository

### [markdown](docs/markdown/README.md)

* [markdownRender](docs/markdown/README.md#markdownrender) - Render a Markdown document
* [markdownRenderRaw](docs/markdown/README.md#markdownrenderraw) - Render a Markdown document in raw mode

### [meta](docs/meta/README.md)

* [metaGet](docs/meta/README.md#metaget) - Get GitHub Enterprise Server meta information
* [metaGetOctocat](docs/meta/README.md#metagetoctocat) - Get Octocat
* [metaGetZen](docs/meta/README.md#metagetzen) - Get the Zen of GitHub
* [metaRoot](docs/meta/README.md#metaroot) - GitHub API Root

### [migrations](docs/migrations/README.md)

* [migrationsDeleteArchiveForOrg](docs/migrations/README.md#migrationsdeletearchivefororg) - Delete an organization migration archive
* [migrationsDownloadArchiveForOrg](docs/migrations/README.md#migrationsdownloadarchivefororg) - Download an organization migration archive
* [migrationsGetArchiveForAuthenticatedUser](docs/migrations/README.md#migrationsgetarchiveforauthenticateduser) - Download a user migration archive
* [migrationsGetStatusForOrg](docs/migrations/README.md#migrationsgetstatusfororg) - Get an organization migration status
* [migrationsListForAuthenticatedUser](docs/migrations/README.md#migrationslistforauthenticateduser) - List user migrations
* [migrationsListForOrg](docs/migrations/README.md#migrationslistfororg) - List organization migrations
* [migrationsListReposForAuthenticatedUser](docs/migrations/README.md#migrationslistreposforauthenticateduser) - List repositories for a user migration
* [migrationsListReposForOrg](docs/migrations/README.md#migrationslistreposfororg) - List repositories in an organization migration
* [migrationsStartForAuthenticatedUser](docs/migrations/README.md#migrationsstartforauthenticateduser) - Start a user migration
* [migrationsStartForOrg](docs/migrations/README.md#migrationsstartfororg) - Start an organization migration
* [migrationsUnlockRepoForOrg](docs/migrations/README.md#migrationsunlockrepofororg) - Unlock an organization repository

### [oauthAuthorizations](docs/oauthauthorizations/README.md)

* [~~oauthAuthorizationsCreateAuthorization~~](docs/oauthauthorizations/README.md#oauthauthorizationscreateauthorization) - Create a new authorization :warning: **Deprecated**
* [~~oauthAuthorizationsDeleteAuthorization~~](docs/oauthauthorizations/README.md#oauthauthorizationsdeleteauthorization) - Delete an authorization :warning: **Deprecated**
* [~~oauthAuthorizationsDeleteGrant~~](docs/oauthauthorizations/README.md#oauthauthorizationsdeletegrant) - Delete a grant :warning: **Deprecated**
* [~~oauthAuthorizationsGetAuthorization~~](docs/oauthauthorizations/README.md#oauthauthorizationsgetauthorization) - Get a single authorization :warning: **Deprecated**
* [~~oauthAuthorizationsGetGrant~~](docs/oauthauthorizations/README.md#oauthauthorizationsgetgrant) - Get a single grant :warning: **Deprecated**
* [~~oauthAuthorizationsGetOrCreateAuthorizationForApp~~](docs/oauthauthorizations/README.md#oauthauthorizationsgetorcreateauthorizationforapp) - Get-or-create an authorization for a specific app :warning: **Deprecated**
* [~~oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint~~](docs/oauthauthorizations/README.md#oauthauthorizationsgetorcreateauthorizationforappandfingerprint) - Get-or-create an authorization for a specific app and fingerprint :warning: **Deprecated**
* [~~oauthAuthorizationsListAuthorizations~~](docs/oauthauthorizations/README.md#oauthauthorizationslistauthorizations) - List your authorizations :warning: **Deprecated**
* [~~oauthAuthorizationsListGrants~~](docs/oauthauthorizations/README.md#oauthauthorizationslistgrants) - List your grants :warning: **Deprecated**
* [~~oauthAuthorizationsUpdateAuthorization~~](docs/oauthauthorizations/README.md#oauthauthorizationsupdateauthorization) - Update an existing authorization :warning: **Deprecated**

### [orgs](docs/orgs/README.md)

* [orgsCheckMembershipForUser](docs/orgs/README.md#orgscheckmembershipforuser) - Check organization membership for a user
* [orgsCheckPublicMembershipForUser](docs/orgs/README.md#orgscheckpublicmembershipforuser) - Check public organization membership for a user
* [orgsConvertMemberToOutsideCollaborator](docs/orgs/README.md#orgsconvertmembertooutsidecollaborator) - Convert an organization member to outside collaborator
* [orgsCreateWebhook](docs/orgs/README.md#orgscreatewebhook) - Create an organization webhook
* [orgsDeleteWebhook](docs/orgs/README.md#orgsdeletewebhook) - Delete an organization webhook
* [orgsGet](docs/orgs/README.md#orgsget) - Get an organization
* [orgsGetAuditLog](docs/orgs/README.md#orgsgetauditlog) - Get the audit log for an organization
* [orgsGetMembershipForAuthenticatedUser](docs/orgs/README.md#orgsgetmembershipforauthenticateduser) - Get an organization membership for the authenticated user
* [orgsGetMembershipForUser](docs/orgs/README.md#orgsgetmembershipforuser) - Get organization membership for a user
* [orgsGetWebhook](docs/orgs/README.md#orgsgetwebhook) - Get an organization webhook
* [orgsGetWebhookConfigForOrg](docs/orgs/README.md#orgsgetwebhookconfigfororg) - Get a webhook configuration for an organization
* [orgsGetWebhookDelivery](docs/orgs/README.md#orgsgetwebhookdelivery) - Get a webhook delivery for an organization webhook
* [orgsList](docs/orgs/README.md#orgslist) - List organizations
* [orgsListAppInstallations](docs/orgs/README.md#orgslistappinstallations) - List app installations for an organization
* [orgsListCustomRoles](docs/orgs/README.md#orgslistcustomroles) - List custom repository roles in an organization
* [orgsListForAuthenticatedUser](docs/orgs/README.md#orgslistforauthenticateduser) - List organizations for the authenticated user
* [orgsListForUser](docs/orgs/README.md#orgslistforuser) - List organizations for a user
* [orgsListMembers](docs/orgs/README.md#orgslistmembers) - List organization members
* [orgsListMembershipsForAuthenticatedUser](docs/orgs/README.md#orgslistmembershipsforauthenticateduser) - List organization memberships for the authenticated user
* [orgsListOutsideCollaborators](docs/orgs/README.md#orgslistoutsidecollaborators) - List outside collaborators for an organization
* [orgsListPublicMembers](docs/orgs/README.md#orgslistpublicmembers) - List public organization members
* [orgsListWebhookDeliveries](docs/orgs/README.md#orgslistwebhookdeliveries) - List deliveries for an organization webhook
* [orgsListWebhooks](docs/orgs/README.md#orgslistwebhooks) - List organization webhooks
* [orgsPingWebhook](docs/orgs/README.md#orgspingwebhook) - Ping an organization webhook
* [orgsRedeliverWebhookDelivery](docs/orgs/README.md#orgsredeliverwebhookdelivery) - Redeliver a delivery for an organization webhook
* [orgsRemoveMember](docs/orgs/README.md#orgsremovemember) - Remove an organization member
* [orgsRemoveMembershipForUser](docs/orgs/README.md#orgsremovemembershipforuser) - Remove organization membership for a user
* [orgsRemoveOutsideCollaborator](docs/orgs/README.md#orgsremoveoutsidecollaborator) - Remove outside collaborator from an organization
* [orgsRemovePublicMembershipForAuthenticatedUser](docs/orgs/README.md#orgsremovepublicmembershipforauthenticateduser) - Remove public organization membership for the authenticated user
* [orgsSetMembershipForUser](docs/orgs/README.md#orgssetmembershipforuser) - Set organization membership for a user
* [orgsSetPublicMembershipForAuthenticatedUser](docs/orgs/README.md#orgssetpublicmembershipforauthenticateduser) - Set public organization membership for the authenticated user
* [orgsUpdate](docs/orgs/README.md#orgsupdate) - Update an organization
* [orgsUpdateMembershipForAuthenticatedUser](docs/orgs/README.md#orgsupdatemembershipforauthenticateduser) - Update an organization membership for the authenticated user
* [orgsUpdateWebhook](docs/orgs/README.md#orgsupdatewebhook) - Update an organization webhook
* [orgsUpdateWebhookConfigForOrg](docs/orgs/README.md#orgsupdatewebhookconfigfororg) - Update a webhook configuration for an organization

### [projects](docs/projects/README.md)

* [projectsAddCollaborator](docs/projects/README.md#projectsaddcollaborator) - Add project collaborator
* [projectsCreateCard](docs/projects/README.md#projectscreatecard) - Create a project card
* [projectsCreateColumn](docs/projects/README.md#projectscreatecolumn) - Create a project column
* [projectsCreateForAuthenticatedUser](docs/projects/README.md#projectscreateforauthenticateduser) - Create a user project
* [projectsCreateForOrg](docs/projects/README.md#projectscreatefororg) - Create an organization project
* [projectsCreateForRepo](docs/projects/README.md#projectscreateforrepo) - Create a repository project
* [projectsDelete](docs/projects/README.md#projectsdelete) - Delete a project
* [projectsDeleteCard](docs/projects/README.md#projectsdeletecard) - Delete a project card
* [projectsDeleteColumn](docs/projects/README.md#projectsdeletecolumn) - Delete a project column
* [projectsGet](docs/projects/README.md#projectsget) - Get a project
* [projectsGetCard](docs/projects/README.md#projectsgetcard) - Get a project card
* [projectsGetColumn](docs/projects/README.md#projectsgetcolumn) - Get a project column
* [projectsGetPermissionForUser](docs/projects/README.md#projectsgetpermissionforuser) - Get project permission for a user
* [projectsListCards](docs/projects/README.md#projectslistcards) - List project cards
* [projectsListCollaborators](docs/projects/README.md#projectslistcollaborators) - List project collaborators
* [projectsListColumns](docs/projects/README.md#projectslistcolumns) - List project columns
* [projectsListForOrg](docs/projects/README.md#projectslistfororg) - List organization projects
* [projectsListForRepo](docs/projects/README.md#projectslistforrepo) - List repository projects
* [projectsListForUser](docs/projects/README.md#projectslistforuser) - List user projects
* [projectsMoveCard](docs/projects/README.md#projectsmovecard) - Move a project card
* [projectsMoveColumn](docs/projects/README.md#projectsmovecolumn) - Move a project column
* [projectsRemoveCollaborator](docs/projects/README.md#projectsremovecollaborator) - Remove user as a collaborator
* [projectsUpdate](docs/projects/README.md#projectsupdate) - Update a project
* [projectsUpdateCard](docs/projects/README.md#projectsupdatecard) - Update an existing project card
* [projectsUpdateColumn](docs/projects/README.md#projectsupdatecolumn) - Update an existing project column

### [pulls](docs/pulls/README.md)

* [pullsCheckIfMerged](docs/pulls/README.md#pullscheckifmerged) - Check if a pull request has been merged
* [pullsCreate](docs/pulls/README.md#pullscreate) - Create a pull request
* [pullsCreateReplyForReviewComment](docs/pulls/README.md#pullscreatereplyforreviewcomment) - Create a reply for a review comment
* [pullsCreateReview](docs/pulls/README.md#pullscreatereview) - Create a review for a pull request
* [pullsCreateReviewComment](docs/pulls/README.md#pullscreatereviewcomment) - Create a review comment for a pull request
* [pullsDeletePendingReview](docs/pulls/README.md#pullsdeletependingreview) - Delete a pending review for a pull request
* [pullsDeleteReviewComment](docs/pulls/README.md#pullsdeletereviewcomment) - Delete a review comment for a pull request
* [pullsDismissReview](docs/pulls/README.md#pullsdismissreview) - Dismiss a review for a pull request
* [pullsGet](docs/pulls/README.md#pullsget) - Get a pull request
* [pullsGetReview](docs/pulls/README.md#pullsgetreview) - Get a review for a pull request
* [pullsGetReviewComment](docs/pulls/README.md#pullsgetreviewcomment) - Get a review comment for a pull request
* [pullsList](docs/pulls/README.md#pullslist) - List pull requests
* [pullsListCommentsForReview](docs/pulls/README.md#pullslistcommentsforreview) - List comments for a pull request review
* [pullsListCommits](docs/pulls/README.md#pullslistcommits) - List commits on a pull request
* [pullsListFiles](docs/pulls/README.md#pullslistfiles) - List pull requests files
* [pullsListRequestedReviewers](docs/pulls/README.md#pullslistrequestedreviewers) - Get all requested reviewers for a pull request
* [pullsListReviewComments](docs/pulls/README.md#pullslistreviewcomments) - List review comments on a pull request
* [pullsListReviewCommentsForRepo](docs/pulls/README.md#pullslistreviewcommentsforrepo) - List review comments in a repository
* [pullsListReviews](docs/pulls/README.md#pullslistreviews) - List reviews for a pull request
* [pullsMerge](docs/pulls/README.md#pullsmerge) - Merge a pull request
* [pullsRemoveRequestedReviewers](docs/pulls/README.md#pullsremoverequestedreviewers) - Remove requested reviewers from a pull request
* [pullsRequestReviewers](docs/pulls/README.md#pullsrequestreviewers) - Request reviewers for a pull request
* [pullsSubmitReview](docs/pulls/README.md#pullssubmitreview) - Submit a review for a pull request
* [pullsUpdate](docs/pulls/README.md#pullsupdate) - Update a pull request
* [pullsUpdateBranch](docs/pulls/README.md#pullsupdatebranch) - Update a pull request branch
* [pullsUpdateReview](docs/pulls/README.md#pullsupdatereview) - Update a review for a pull request
* [pullsUpdateReviewComment](docs/pulls/README.md#pullsupdatereviewcomment) - Update a review comment for a pull request

### [rateLimit](docs/ratelimit/README.md)

* [rateLimitGet](docs/ratelimit/README.md#ratelimitget) - Get rate limit status for the authenticated user

### [reactions](docs/reactions/README.md)

* [reactionsCreateForCommitComment](docs/reactions/README.md#reactionscreateforcommitcomment) - Create reaction for a commit comment
* [reactionsCreateForIssue](docs/reactions/README.md#reactionscreateforissue) - Create reaction for an issue
* [reactionsCreateForIssueComment](docs/reactions/README.md#reactionscreateforissuecomment) - Create reaction for an issue comment
* [reactionsCreateForPullRequestReviewComment](docs/reactions/README.md#reactionscreateforpullrequestreviewcomment) - Create reaction for a pull request review comment
* [reactionsCreateForRelease](docs/reactions/README.md#reactionscreateforrelease) - Create reaction for a release
* [reactionsCreateForTeamDiscussionCommentInOrg](docs/reactions/README.md#reactionscreateforteamdiscussioncommentinorg) - Create reaction for a team discussion comment
* [~~reactionsCreateForTeamDiscussionCommentLegacy~~](docs/reactions/README.md#reactionscreateforteamdiscussioncommentlegacy) - Create reaction for a team discussion comment (Legacy) :warning: **Deprecated**
* [reactionsCreateForTeamDiscussionInOrg](docs/reactions/README.md#reactionscreateforteamdiscussioninorg) - Create reaction for a team discussion
* [~~reactionsCreateForTeamDiscussionLegacy~~](docs/reactions/README.md#reactionscreateforteamdiscussionlegacy) - Create reaction for a team discussion (Legacy) :warning: **Deprecated**
* [reactionsDeleteForCommitComment](docs/reactions/README.md#reactionsdeleteforcommitcomment) - Delete a commit comment reaction
* [reactionsDeleteForIssue](docs/reactions/README.md#reactionsdeleteforissue) - Delete an issue reaction
* [reactionsDeleteForIssueComment](docs/reactions/README.md#reactionsdeleteforissuecomment) - Delete an issue comment reaction
* [reactionsDeleteForPullRequestComment](docs/reactions/README.md#reactionsdeleteforpullrequestcomment) - Delete a pull request comment reaction
* [reactionsDeleteForRelease](docs/reactions/README.md#reactionsdeleteforrelease) - Delete a release reaction
* [reactionsDeleteForTeamDiscussion](docs/reactions/README.md#reactionsdeleteforteamdiscussion) - Delete team discussion reaction
* [reactionsDeleteForTeamDiscussionComment](docs/reactions/README.md#reactionsdeleteforteamdiscussioncomment) - Delete team discussion comment reaction
* [~~reactionsDeleteLegacy~~](docs/reactions/README.md#reactionsdeletelegacy) - Delete a reaction (Legacy) :warning: **Deprecated**
* [reactionsListForCommitComment](docs/reactions/README.md#reactionslistforcommitcomment) - List reactions for a commit comment
* [reactionsListForIssue](docs/reactions/README.md#reactionslistforissue) - List reactions for an issue
* [reactionsListForIssueComment](docs/reactions/README.md#reactionslistforissuecomment) - List reactions for an issue comment
* [reactionsListForPullRequestReviewComment](docs/reactions/README.md#reactionslistforpullrequestreviewcomment) - List reactions for a pull request review comment
* [reactionsListForRelease](docs/reactions/README.md#reactionslistforrelease) - List reactions for a release
* [reactionsListForTeamDiscussionCommentInOrg](docs/reactions/README.md#reactionslistforteamdiscussioncommentinorg) - List reactions for a team discussion comment
* [~~reactionsListForTeamDiscussionCommentLegacy~~](docs/reactions/README.md#reactionslistforteamdiscussioncommentlegacy) - List reactions for a team discussion comment (Legacy) :warning: **Deprecated**
* [reactionsListForTeamDiscussionInOrg](docs/reactions/README.md#reactionslistforteamdiscussioninorg) - List reactions for a team discussion
* [~~reactionsListForTeamDiscussionLegacy~~](docs/reactions/README.md#reactionslistforteamdiscussionlegacy) - List reactions for a team discussion (Legacy) :warning: **Deprecated**

### [repos](docs/repos/README.md)

* [reposAcceptInvitationForAuthenticatedUser](docs/repos/README.md#reposacceptinvitationforauthenticateduser) - Accept a repository invitation
* [reposAddAppAccessRestrictions](docs/repos/README.md#reposaddappaccessrestrictions) - Add app access restrictions
* [reposAddCollaborator](docs/repos/README.md#reposaddcollaborator) - Add a repository collaborator
* [reposAddStatusCheckContexts](docs/repos/README.md#reposaddstatuscheckcontexts) - Add status check contexts
* [reposAddTeamAccessRestrictions](docs/repos/README.md#reposaddteamaccessrestrictions) - Add team access restrictions
* [reposAddUserAccessRestrictions](docs/repos/README.md#reposadduseraccessrestrictions) - Add user access restrictions
* [reposCheckCollaborator](docs/repos/README.md#reposcheckcollaborator) - Check if a user is a repository collaborator
* [reposCompareCommits](docs/repos/README.md#reposcomparecommits) - Compare two commits
* [reposCreateAutolink](docs/repos/README.md#reposcreateautolink) - Create an autolink reference for a repository
* [reposCreateCommitComment](docs/repos/README.md#reposcreatecommitcomment) - Create a commit comment
* [reposCreateCommitSignatureProtection](docs/repos/README.md#reposcreatecommitsignatureprotection) - Create commit signature protection
* [reposCreateCommitStatus](docs/repos/README.md#reposcreatecommitstatus) - Create a commit status
* [reposCreateDeployKey](docs/repos/README.md#reposcreatedeploykey) - Create a deploy key
* [reposCreateDeployment](docs/repos/README.md#reposcreatedeployment) - Create a deployment
* [reposCreateDeploymentBranchPolicy](docs/repos/README.md#reposcreatedeploymentbranchpolicy) - Create a deployment branch policy
* [reposCreateDeploymentStatus](docs/repos/README.md#reposcreatedeploymentstatus) - Create a deployment status
* [reposCreateDispatchEvent](docs/repos/README.md#reposcreatedispatchevent) - Create a repository dispatch event
* [reposCreateForAuthenticatedUser](docs/repos/README.md#reposcreateforauthenticateduser) - Create a repository for the authenticated user
* [reposCreateFork](docs/repos/README.md#reposcreatefork) - Create a fork
* [reposCreateInOrg](docs/repos/README.md#reposcreateinorg) - Create an organization repository
* [reposCreateOrUpdateEnvironment](docs/repos/README.md#reposcreateorupdateenvironment) - Create or update an environment
* [reposCreateOrUpdateFileContents](docs/repos/README.md#reposcreateorupdatefilecontents) - Create or update file contents
* [reposCreatePagesSite](docs/repos/README.md#reposcreatepagessite) - Create a GitHub Enterprise Server Pages site
* [reposCreateRelease](docs/repos/README.md#reposcreaterelease) - Create a release
* [reposCreateUsingTemplate](docs/repos/README.md#reposcreateusingtemplate) - Create a repository using a template
* [reposCreateWebhook](docs/repos/README.md#reposcreatewebhook) - Create a repository webhook
* [reposDeclineInvitationForAuthenticatedUser](docs/repos/README.md#reposdeclineinvitationforauthenticateduser) - Decline a repository invitation
* [reposDelete](docs/repos/README.md#reposdelete) - Delete a repository
* [reposDeleteAccessRestrictions](docs/repos/README.md#reposdeleteaccessrestrictions) - Delete access restrictions
* [reposDeleteAdminBranchProtection](docs/repos/README.md#reposdeleteadminbranchprotection) - Delete admin branch protection
* [reposDeleteAnEnvironment](docs/repos/README.md#reposdeleteanenvironment) - Delete an environment
* [reposDeleteAutolink](docs/repos/README.md#reposdeleteautolink) - Delete an autolink reference from a repository
* [reposDeleteBranchProtection](docs/repos/README.md#reposdeletebranchprotection) - Delete branch protection
* [reposDeleteCommitComment](docs/repos/README.md#reposdeletecommitcomment) - Delete a commit comment
* [reposDeleteCommitSignatureProtection](docs/repos/README.md#reposdeletecommitsignatureprotection) - Delete commit signature protection
* [reposDeleteDeployKey](docs/repos/README.md#reposdeletedeploykey) - Delete a deploy key
* [reposDeleteDeployment](docs/repos/README.md#reposdeletedeployment) - Delete a deployment
* [reposDeleteDeploymentBranchPolicy](docs/repos/README.md#reposdeletedeploymentbranchpolicy) - Delete a deployment branch policy
* [reposDeleteFile](docs/repos/README.md#reposdeletefile) - Delete a file
* [reposDeleteInvitation](docs/repos/README.md#reposdeleteinvitation) - Delete a repository invitation
* [reposDeletePagesSite](docs/repos/README.md#reposdeletepagessite) - Delete a GitHub Enterprise Server Pages site
* [reposDeletePullRequestReviewProtection](docs/repos/README.md#reposdeletepullrequestreviewprotection) - Delete pull request review protection
* [reposDeleteRelease](docs/repos/README.md#reposdeleterelease) - Delete a release
* [reposDeleteReleaseAsset](docs/repos/README.md#reposdeletereleaseasset) - Delete a release asset
* [reposDeleteWebhook](docs/repos/README.md#reposdeletewebhook) - Delete a repository webhook
* [reposDisableLfsForRepo](docs/repos/README.md#reposdisablelfsforrepo) - Disable Git LFS for a repository
* [reposDownloadTarballArchive](docs/repos/README.md#reposdownloadtarballarchive) - Download a repository archive (tar)
* [reposDownloadZipballArchive](docs/repos/README.md#reposdownloadzipballarchive) - Download a repository archive (zip)
* [reposEnableLfsForRepo](docs/repos/README.md#reposenablelfsforrepo) - Enable Git LFS for a repository
* [reposGenerateReleaseNotes](docs/repos/README.md#reposgeneratereleasenotes) - Generate release notes content for a release
* [reposGet](docs/repos/README.md#reposget) - Get a repository
* [reposGetAccessRestrictions](docs/repos/README.md#reposgetaccessrestrictions) - Get access restrictions
* [reposGetAdminBranchProtection](docs/repos/README.md#reposgetadminbranchprotection) - Get admin branch protection
* [reposGetAllEnvironments](docs/repos/README.md#reposgetallenvironments) - List environments
* [reposGetAllStatusCheckContexts](docs/repos/README.md#reposgetallstatuscheckcontexts) - Get all status check contexts
* [reposGetAllTopics](docs/repos/README.md#reposgetalltopics) - Get all repository topics
* [reposGetAppsWithAccessToProtectedBranch](docs/repos/README.md#reposgetappswithaccesstoprotectedbranch) - Get apps with access to the protected branch
* [reposGetAutolink](docs/repos/README.md#reposgetautolink) - Get an autolink reference of a repository
* [reposGetBranch](docs/repos/README.md#reposgetbranch) - Get a branch
* [reposGetBranchProtection](docs/repos/README.md#reposgetbranchprotection) - Get branch protection
* [reposGetCodeFrequencyStats](docs/repos/README.md#reposgetcodefrequencystats) - Get the weekly commit activity
* [reposGetCollaboratorPermissionLevel](docs/repos/README.md#reposgetcollaboratorpermissionlevel) - Get repository permissions for a user
* [reposGetCombinedStatusForRef](docs/repos/README.md#reposgetcombinedstatusforref) - Get the combined status for a specific reference
* [reposGetCommit](docs/repos/README.md#reposgetcommit) - Get a commit
* [reposGetCommitActivityStats](docs/repos/README.md#reposgetcommitactivitystats) - Get the last year of commit activity
* [reposGetCommitComment](docs/repos/README.md#reposgetcommitcomment) - Get a commit comment
* [reposGetCommitSignatureProtection](docs/repos/README.md#reposgetcommitsignatureprotection) - Get commit signature protection
* [reposGetContent](docs/repos/README.md#reposgetcontent) - Get repository content
* [reposGetContributorsStats](docs/repos/README.md#reposgetcontributorsstats) - Get all contributor commit activity
* [reposGetDeployKey](docs/repos/README.md#reposgetdeploykey) - Get a deploy key
* [reposGetDeployment](docs/repos/README.md#reposgetdeployment) - Get a deployment
* [reposGetDeploymentBranchPolicy](docs/repos/README.md#reposgetdeploymentbranchpolicy) - Get a deployment branch policy
* [reposGetDeploymentStatus](docs/repos/README.md#reposgetdeploymentstatus) - Get a deployment status
* [reposGetEnvironment](docs/repos/README.md#reposgetenvironment) - Get an environment
* [reposGetLatestPagesBuild](docs/repos/README.md#reposgetlatestpagesbuild) - Get latest Pages build
* [reposGetLatestRelease](docs/repos/README.md#reposgetlatestrelease) - Get the latest release
* [reposGetPages](docs/repos/README.md#reposgetpages) - Get a GitHub Enterprise Server Pages site
* [reposGetPagesBuild](docs/repos/README.md#reposgetpagesbuild) - Get GitHub Enterprise Server Pages build
* [reposGetParticipationStats](docs/repos/README.md#reposgetparticipationstats) - Get the weekly commit count
* [reposGetPullRequestReviewProtection](docs/repos/README.md#reposgetpullrequestreviewprotection) - Get pull request review protection
* [reposGetPunchCardStats](docs/repos/README.md#reposgetpunchcardstats) - Get the hourly commit count for each day
* [reposGetReadme](docs/repos/README.md#reposgetreadme) - Get a repository README
* [reposGetReadmeInDirectory](docs/repos/README.md#reposgetreadmeindirectory) - Get a repository README for a directory
* [reposGetRelease](docs/repos/README.md#reposgetrelease) - Get a release
* [reposGetReleaseAsset](docs/repos/README.md#reposgetreleaseasset) - Get a release asset
* [reposGetReleaseByTag](docs/repos/README.md#reposgetreleasebytag) - Get a release by tag name
* [reposGetStatusChecksProtection](docs/repos/README.md#reposgetstatuschecksprotection) - Get status checks protection
* [reposGetTeamsWithAccessToProtectedBranch](docs/repos/README.md#reposgetteamswithaccesstoprotectedbranch) - Get teams with access to the protected branch
* [reposGetUsersWithAccessToProtectedBranch](docs/repos/README.md#reposgetuserswithaccesstoprotectedbranch) - Get users with access to the protected branch
* [reposGetWebhook](docs/repos/README.md#reposgetwebhook) - Get a repository webhook
* [reposGetWebhookConfigForRepo](docs/repos/README.md#reposgetwebhookconfigforrepo) - Get a webhook configuration for a repository
* [reposGetWebhookDelivery](docs/repos/README.md#reposgetwebhookdelivery) - Get a delivery for a repository webhook
* [reposListAutolinks](docs/repos/README.md#reposlistautolinks) - List all autolinks of a repository
* [reposListBranches](docs/repos/README.md#reposlistbranches) - List branches
* [reposListBranchesForHeadCommit](docs/repos/README.md#reposlistbranchesforheadcommit) - List branches for HEAD commit
* [reposListCacheInfo](docs/repos/README.md#reposlistcacheinfo) - List repository cache replication status
* [reposListCollaborators](docs/repos/README.md#reposlistcollaborators) - List repository collaborators
* [reposListCommentsForCommit](docs/repos/README.md#reposlistcommentsforcommit) - List commit comments
* [reposListCommitCommentsForRepo](docs/repos/README.md#reposlistcommitcommentsforrepo) - List commit comments for a repository
* [reposListCommitStatusesForRef](docs/repos/README.md#reposlistcommitstatusesforref) - List commit statuses for a reference
* [reposListCommits](docs/repos/README.md#reposlistcommits) - List commits
* [reposListContributors](docs/repos/README.md#reposlistcontributors) - List repository contributors
* [reposListDeployKeys](docs/repos/README.md#reposlistdeploykeys) - List deploy keys
* [reposListDeploymentBranchPolicies](docs/repos/README.md#reposlistdeploymentbranchpolicies) - List deployment branch policies
* [reposListDeploymentStatuses](docs/repos/README.md#reposlistdeploymentstatuses) - List deployment statuses
* [reposListDeployments](docs/repos/README.md#reposlistdeployments) - List deployments
* [reposListForAuthenticatedUser](docs/repos/README.md#reposlistforauthenticateduser) - List repositories for the authenticated user
* [reposListForOrg](docs/repos/README.md#reposlistfororg) - List organization repositories
* [reposListForUser](docs/repos/README.md#reposlistforuser) - List repositories for a user
* [reposListForks](docs/repos/README.md#reposlistforks) - List forks
* [reposListInvitations](docs/repos/README.md#reposlistinvitations) - List repository invitations
* [reposListInvitationsForAuthenticatedUser](docs/repos/README.md#reposlistinvitationsforauthenticateduser) - List repository invitations for the authenticated user
* [reposListLanguages](docs/repos/README.md#reposlistlanguages) - List repository languages
* [reposListPagesBuilds](docs/repos/README.md#reposlistpagesbuilds) - List GitHub Enterprise Server Pages builds
* [reposListPublic](docs/repos/README.md#reposlistpublic) - List public repositories
* [reposListPullRequestsAssociatedWithCommit](docs/repos/README.md#reposlistpullrequestsassociatedwithcommit) - List pull requests associated with a commit
* [reposListReleaseAssets](docs/repos/README.md#reposlistreleaseassets) - List release assets
* [reposListReleases](docs/repos/README.md#reposlistreleases) - List releases
* [reposListTags](docs/repos/README.md#reposlisttags) - List repository tags
* [reposListTeams](docs/repos/README.md#reposlistteams) - List repository teams
* [reposListWebhookDeliveries](docs/repos/README.md#reposlistwebhookdeliveries) - List deliveries for a repository webhook
* [reposListWebhooks](docs/repos/README.md#reposlistwebhooks) - List repository webhooks
* [reposMerge](docs/repos/README.md#reposmerge) - Merge a branch
* [reposMergeUpstream](docs/repos/README.md#reposmergeupstream) - Sync a fork branch with the upstream repository
* [reposPingWebhook](docs/repos/README.md#repospingwebhook) - Ping a repository webhook
* [reposRedeliverWebhookDelivery](docs/repos/README.md#reposredeliverwebhookdelivery) - Redeliver a delivery for a repository webhook
* [reposRemoveAppAccessRestrictions](docs/repos/README.md#reposremoveappaccessrestrictions) - Remove app access restrictions
* [reposRemoveCollaborator](docs/repos/README.md#reposremovecollaborator) - Remove a repository collaborator
* [reposRemoveStatusCheckContexts](docs/repos/README.md#reposremovestatuscheckcontexts) - Remove status check contexts
* [reposRemoveStatusCheckProtection](docs/repos/README.md#reposremovestatuscheckprotection) - Remove status check protection
* [reposRemoveTeamAccessRestrictions](docs/repos/README.md#reposremoveteamaccessrestrictions) - Remove team access restrictions
* [reposRemoveUserAccessRestrictions](docs/repos/README.md#reposremoveuseraccessrestrictions) - Remove user access restrictions
* [reposRenameBranch](docs/repos/README.md#reposrenamebranch) - Rename a branch
* [reposReplaceAllTopics](docs/repos/README.md#reposreplacealltopics) - Replace all repository topics
* [reposRequestPagesBuild](docs/repos/README.md#reposrequestpagesbuild) - Request a GitHub Enterprise Server Pages build
* [reposSetAdminBranchProtection](docs/repos/README.md#repossetadminbranchprotection) - Set admin branch protection
* [reposSetAppAccessRestrictions](docs/repos/README.md#repossetappaccessrestrictions) - Set app access restrictions
* [reposSetStatusCheckContexts](docs/repos/README.md#repossetstatuscheckcontexts) - Set status check contexts
* [reposSetTeamAccessRestrictions](docs/repos/README.md#repossetteamaccessrestrictions) - Set team access restrictions
* [reposSetUserAccessRestrictions](docs/repos/README.md#repossetuseraccessrestrictions) - Set user access restrictions
* [reposTestPushWebhook](docs/repos/README.md#repostestpushwebhook) - Test the push repository webhook
* [reposTransfer](docs/repos/README.md#repostransfer) - Transfer a repository
* [reposUpdate](docs/repos/README.md#reposupdate) - Update a repository
* [reposUpdateBranchProtection](docs/repos/README.md#reposupdatebranchprotection) - Update branch protection
* [reposUpdateCommitComment](docs/repos/README.md#reposupdatecommitcomment) - Update a commit comment
* [reposUpdateDeploymentBranchPolicy](docs/repos/README.md#reposupdatedeploymentbranchpolicy) - Update a deployment branch policy
* [reposUpdateInformationAboutPagesSite](docs/repos/README.md#reposupdateinformationaboutpagessite) - Update information about a GitHub Enterprise Server Pages site
* [reposUpdateInvitation](docs/repos/README.md#reposupdateinvitation) - Update a repository invitation
* [reposUpdatePullRequestReviewProtection](docs/repos/README.md#reposupdatepullrequestreviewprotection) - Update pull request review protection
* [reposUpdateRelease](docs/repos/README.md#reposupdaterelease) - Update a release
* [reposUpdateReleaseAsset](docs/repos/README.md#reposupdatereleaseasset) - Update a release asset
* [reposUpdateStatusCheckProtection](docs/repos/README.md#reposupdatestatuscheckprotection) - Update status check protection
* [reposUpdateWebhook](docs/repos/README.md#reposupdatewebhook) - Update a repository webhook
* [reposUpdateWebhookConfigForRepo](docs/repos/README.md#reposupdatewebhookconfigforrepo) - Update a webhook configuration for a repository
* [reposUploadReleaseAsset](docs/repos/README.md#reposuploadreleaseasset) - Upload a release asset

### [search](docs/search/README.md)

* [searchCode](docs/search/README.md#searchcode) - Search code
* [searchCommits](docs/search/README.md#searchcommits) - Search commits
* [searchIssuesAndPullRequests](docs/search/README.md#searchissuesandpullrequests) - Search issues and pull requests
* [searchLabels](docs/search/README.md#searchlabels) - Search labels
* [searchRepos](docs/search/README.md#searchrepos) - Search repositories
* [searchTopics](docs/search/README.md#searchtopics) - Search topics
* [searchUsers](docs/search/README.md#searchusers) - Search users

### [secretScanning](docs/secretscanning/README.md)

* [secretScanningGetAlert](docs/secretscanning/README.md#secretscanninggetalert) - Get a secret scanning alert
* [secretScanningListAlertsForEnterprise](docs/secretscanning/README.md#secretscanninglistalertsforenterprise) - List secret scanning alerts for an enterprise
* [secretScanningListAlertsForOrg](docs/secretscanning/README.md#secretscanninglistalertsfororg) - List secret scanning alerts for an organization
* [secretScanningListAlertsForRepo](docs/secretscanning/README.md#secretscanninglistalertsforrepo) - List secret scanning alerts for a repository
* [secretScanningListLocationsForAlert](docs/secretscanning/README.md#secretscanninglistlocationsforalert) - List locations for a secret scanning alert
* [secretScanningUpdateAlert](docs/secretscanning/README.md#secretscanningupdatealert) - Update a secret scanning alert

### [teams](docs/teams/README.md)

* [~~teamsAddMemberLegacy~~](docs/teams/README.md#teamsaddmemberlegacy) - Add team member (Legacy) :warning: **Deprecated**
* [teamsAddOrUpdateMembershipForUserInOrg](docs/teams/README.md#teamsaddorupdatemembershipforuserinorg) - Add or update team membership for a user
* [~~teamsAddOrUpdateMembershipForUserLegacy~~](docs/teams/README.md#teamsaddorupdatemembershipforuserlegacy) - Add or update team membership for a user (Legacy) :warning: **Deprecated**
* [teamsAddOrUpdateProjectPermissionsInOrg](docs/teams/README.md#teamsaddorupdateprojectpermissionsinorg) - Add or update team project permissions
* [~~teamsAddOrUpdateProjectPermissionsLegacy~~](docs/teams/README.md#teamsaddorupdateprojectpermissionslegacy) - Add or update team project permissions (Legacy) :warning: **Deprecated**
* [teamsAddOrUpdateRepoPermissionsInOrg](docs/teams/README.md#teamsaddorupdaterepopermissionsinorg) - Add or update team repository permissions
* [~~teamsAddOrUpdateRepoPermissionsLegacy~~](docs/teams/README.md#teamsaddorupdaterepopermissionslegacy) - Add or update team repository permissions (Legacy) :warning: **Deprecated**
* [teamsCheckPermissionsForProjectInOrg](docs/teams/README.md#teamscheckpermissionsforprojectinorg) - Check team permissions for a project
* [~~teamsCheckPermissionsForProjectLegacy~~](docs/teams/README.md#teamscheckpermissionsforprojectlegacy) - Check team permissions for a project (Legacy) :warning: **Deprecated**
* [teamsCheckPermissionsForRepoInOrg](docs/teams/README.md#teamscheckpermissionsforrepoinorg) - Check team permissions for a repository
* [~~teamsCheckPermissionsForRepoLegacy~~](docs/teams/README.md#teamscheckpermissionsforrepolegacy) - Check team permissions for a repository (Legacy) :warning: **Deprecated**
* [teamsCreate](docs/teams/README.md#teamscreate) - Create a team
* [teamsCreateDiscussionCommentInOrg](docs/teams/README.md#teamscreatediscussioncommentinorg) - Create a discussion comment
* [~~teamsCreateDiscussionCommentLegacy~~](docs/teams/README.md#teamscreatediscussioncommentlegacy) - Create a discussion comment (Legacy) :warning: **Deprecated**
* [teamsCreateDiscussionInOrg](docs/teams/README.md#teamscreatediscussioninorg) - Create a discussion
* [~~teamsCreateDiscussionLegacy~~](docs/teams/README.md#teamscreatediscussionlegacy) - Create a discussion (Legacy) :warning: **Deprecated**
* [teamsDeleteDiscussionCommentInOrg](docs/teams/README.md#teamsdeletediscussioncommentinorg) - Delete a discussion comment
* [~~teamsDeleteDiscussionCommentLegacy~~](docs/teams/README.md#teamsdeletediscussioncommentlegacy) - Delete a discussion comment (Legacy) :warning: **Deprecated**
* [teamsDeleteDiscussionInOrg](docs/teams/README.md#teamsdeletediscussioninorg) - Delete a discussion
* [~~teamsDeleteDiscussionLegacy~~](docs/teams/README.md#teamsdeletediscussionlegacy) - Delete a discussion (Legacy) :warning: **Deprecated**
* [teamsDeleteInOrg](docs/teams/README.md#teamsdeleteinorg) - Delete a team
* [~~teamsDeleteLegacy~~](docs/teams/README.md#teamsdeletelegacy) - Delete a team (Legacy) :warning: **Deprecated**
* [teamsGetByName](docs/teams/README.md#teamsgetbyname) - Get a team by name
* [teamsGetDiscussionCommentInOrg](docs/teams/README.md#teamsgetdiscussioncommentinorg) - Get a discussion comment
* [~~teamsGetDiscussionCommentLegacy~~](docs/teams/README.md#teamsgetdiscussioncommentlegacy) - Get a discussion comment (Legacy) :warning: **Deprecated**
* [teamsGetDiscussionInOrg](docs/teams/README.md#teamsgetdiscussioninorg) - Get a discussion
* [~~teamsGetDiscussionLegacy~~](docs/teams/README.md#teamsgetdiscussionlegacy) - Get a discussion (Legacy) :warning: **Deprecated**
* [~~teamsGetLegacy~~](docs/teams/README.md#teamsgetlegacy) - Get a team (Legacy) :warning: **Deprecated**
* [~~teamsGetMemberLegacy~~](docs/teams/README.md#teamsgetmemberlegacy) - Get team member (Legacy) :warning: **Deprecated**
* [teamsGetMembershipForUserInOrg](docs/teams/README.md#teamsgetmembershipforuserinorg) - Get team membership for a user
* [~~teamsGetMembershipForUserLegacy~~](docs/teams/README.md#teamsgetmembershipforuserlegacy) - Get team membership for a user (Legacy) :warning: **Deprecated**
* [teamsList](docs/teams/README.md#teamslist) - List teams
* [teamsListChildInOrg](docs/teams/README.md#teamslistchildinorg) - List child teams
* [~~teamsListChildLegacy~~](docs/teams/README.md#teamslistchildlegacy) - List child teams (Legacy) :warning: **Deprecated**
* [teamsListDiscussionCommentsInOrg](docs/teams/README.md#teamslistdiscussioncommentsinorg) - List discussion comments
* [~~teamsListDiscussionCommentsLegacy~~](docs/teams/README.md#teamslistdiscussioncommentslegacy) - List discussion comments (Legacy) :warning: **Deprecated**
* [teamsListDiscussionsInOrg](docs/teams/README.md#teamslistdiscussionsinorg) - List discussions
* [~~teamsListDiscussionsLegacy~~](docs/teams/README.md#teamslistdiscussionslegacy) - List discussions (Legacy) :warning: **Deprecated**
* [teamsListForAuthenticatedUser](docs/teams/README.md#teamslistforauthenticateduser) - List teams for the authenticated user
* [teamsListMembersInOrg](docs/teams/README.md#teamslistmembersinorg) - List team members
* [~~teamsListMembersLegacy~~](docs/teams/README.md#teamslistmemberslegacy) - List team members (Legacy) :warning: **Deprecated**
* [teamsListProjectsInOrg](docs/teams/README.md#teamslistprojectsinorg) - List team projects
* [~~teamsListProjectsLegacy~~](docs/teams/README.md#teamslistprojectslegacy) - List team projects (Legacy) :warning: **Deprecated**
* [teamsListReposInOrg](docs/teams/README.md#teamslistreposinorg) - List team repositories
* [~~teamsListReposLegacy~~](docs/teams/README.md#teamslistreposlegacy) - List team repositories (Legacy) :warning: **Deprecated**
* [~~teamsRemoveMemberLegacy~~](docs/teams/README.md#teamsremovememberlegacy) - Remove team member (Legacy) :warning: **Deprecated**
* [teamsRemoveMembershipForUserInOrg](docs/teams/README.md#teamsremovemembershipforuserinorg) - Remove team membership for a user
* [~~teamsRemoveMembershipForUserLegacy~~](docs/teams/README.md#teamsremovemembershipforuserlegacy) - Remove team membership for a user (Legacy) :warning: **Deprecated**
* [teamsRemoveProjectInOrg](docs/teams/README.md#teamsremoveprojectinorg) - Remove a project from a team
* [~~teamsRemoveProjectLegacy~~](docs/teams/README.md#teamsremoveprojectlegacy) - Remove a project from a team (Legacy) :warning: **Deprecated**
* [teamsRemoveRepoInOrg](docs/teams/README.md#teamsremoverepoinorg) - Remove a repository from a team
* [~~teamsRemoveRepoLegacy~~](docs/teams/README.md#teamsremoverepolegacy) - Remove a repository from a team (Legacy) :warning: **Deprecated**
* [teamsUpdateDiscussionCommentInOrg](docs/teams/README.md#teamsupdatediscussioncommentinorg) - Update a discussion comment
* [~~teamsUpdateDiscussionCommentLegacy~~](docs/teams/README.md#teamsupdatediscussioncommentlegacy) - Update a discussion comment (Legacy) :warning: **Deprecated**
* [teamsUpdateDiscussionInOrg](docs/teams/README.md#teamsupdatediscussioninorg) - Update a discussion
* [~~teamsUpdateDiscussionLegacy~~](docs/teams/README.md#teamsupdatediscussionlegacy) - Update a discussion (Legacy) :warning: **Deprecated**
* [teamsUpdateInOrg](docs/teams/README.md#teamsupdateinorg) - Update a team
* [~~teamsUpdateLegacy~~](docs/teams/README.md#teamsupdatelegacy) - Update a team (Legacy) :warning: **Deprecated**

### [users](docs/users/README.md)

* [usersAddEmailForAuthenticatedUser](docs/users/README.md#usersaddemailforauthenticateduser) - Add an email address for the authenticated user
* [usersCheckFollowingForUser](docs/users/README.md#userscheckfollowingforuser) - Check if a user follows another user
* [usersCheckPersonIsFollowedByAuthenticated](docs/users/README.md#userscheckpersonisfollowedbyauthenticated) - Check if a person is followed by the authenticated user
* [usersCreateGpgKeyForAuthenticatedUser](docs/users/README.md#userscreategpgkeyforauthenticateduser) - Create a GPG key for the authenticated user
* [usersCreatePublicSshKeyForAuthenticatedUser](docs/users/README.md#userscreatepublicsshkeyforauthenticateduser) - Create a public SSH key for the authenticated user
* [usersDeleteEmailForAuthenticatedUser](docs/users/README.md#usersdeleteemailforauthenticateduser) - Delete an email address for the authenticated user
* [usersDeleteGpgKeyForAuthenticatedUser](docs/users/README.md#usersdeletegpgkeyforauthenticateduser) - Delete a GPG key for the authenticated user
* [usersDeletePublicSshKeyForAuthenticatedUser](docs/users/README.md#usersdeletepublicsshkeyforauthenticateduser) - Delete a public SSH key for the authenticated user
* [usersFollow](docs/users/README.md#usersfollow) - Follow a user
* [usersGetAuthenticated](docs/users/README.md#usersgetauthenticated) - Get the authenticated user
* [usersGetByUsername](docs/users/README.md#usersgetbyusername) - Get a user
* [usersGetContextForUser](docs/users/README.md#usersgetcontextforuser) - Get contextual information for a user
* [usersGetGpgKeyForAuthenticatedUser](docs/users/README.md#usersgetgpgkeyforauthenticateduser) - Get a GPG key for the authenticated user
* [usersGetPublicSshKeyForAuthenticatedUser](docs/users/README.md#usersgetpublicsshkeyforauthenticateduser) - Get a public SSH key for the authenticated user
* [usersList](docs/users/README.md#userslist) - List users
* [usersListEmailsForAuthenticatedUser](docs/users/README.md#userslistemailsforauthenticateduser) - List email addresses for the authenticated user
* [usersListFollowedByAuthenticatedUser](docs/users/README.md#userslistfollowedbyauthenticateduser) - List the people the authenticated user follows
* [usersListFollowersForAuthenticatedUser](docs/users/README.md#userslistfollowersforauthenticateduser) - List followers of the authenticated user
* [usersListFollowersForUser](docs/users/README.md#userslistfollowersforuser) - List followers of a user
* [usersListFollowingForUser](docs/users/README.md#userslistfollowingforuser) - List the people a user follows
* [usersListGpgKeysForAuthenticatedUser](docs/users/README.md#userslistgpgkeysforauthenticateduser) - List GPG keys for the authenticated user
* [usersListGpgKeysForUser](docs/users/README.md#userslistgpgkeysforuser) - List GPG keys for a user
* [usersListPublicEmailsForAuthenticatedUser](docs/users/README.md#userslistpublicemailsforauthenticateduser) - List public email addresses for the authenticated user
* [usersListPublicKeysForUser](docs/users/README.md#userslistpublickeysforuser) - List public keys for a user
* [usersListPublicSshKeysForAuthenticatedUser](docs/users/README.md#userslistpublicsshkeysforauthenticateduser) - List public SSH keys for the authenticated user
* [usersUnfollow](docs/users/README.md#usersunfollow) - Unfollow a user
* [usersUpdateAuthenticated](docs/users/README.md#usersupdateauthenticated) - Update the authenticated user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
