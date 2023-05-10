# repos

## Overview

Interact with GitHub Repos.

### Available Operations

* [reposAcceptInvitationForAuthenticatedUser](#reposacceptinvitationforauthenticateduser) - Accept a repository invitation
* [reposAddAppAccessRestrictions](#reposaddappaccessrestrictions) - Add app access restrictions
* [reposAddCollaborator](#reposaddcollaborator) - Add a repository collaborator
* [reposAddStatusCheckContexts](#reposaddstatuscheckcontexts) - Add status check contexts
* [reposAddTeamAccessRestrictions](#reposaddteamaccessrestrictions) - Add team access restrictions
* [reposAddUserAccessRestrictions](#reposadduseraccessrestrictions) - Add user access restrictions
* [reposCheckCollaborator](#reposcheckcollaborator) - Check if a user is a repository collaborator
* [reposCodeownersErrors](#reposcodeownerserrors) - List CODEOWNERS errors
* [reposCompareCommits](#reposcomparecommits) - Compare two commits
* [reposCreateAutolink](#reposcreateautolink) - Create an autolink reference for a repository
* [reposCreateCommitComment](#reposcreatecommitcomment) - Create a commit comment
* [reposCreateCommitSignatureProtection](#reposcreatecommitsignatureprotection) - Create commit signature protection
* [reposCreateCommitStatus](#reposcreatecommitstatus) - Create a commit status
* [reposCreateDeployKey](#reposcreatedeploykey) - Create a deploy key
* [reposCreateDeployment](#reposcreatedeployment) - Create a deployment
* [reposCreateDeploymentBranchPolicy](#reposcreatedeploymentbranchpolicy) - Create a deployment branch policy
* [reposCreateDeploymentStatus](#reposcreatedeploymentstatus) - Create a deployment status
* [reposCreateDispatchEvent](#reposcreatedispatchevent) - Create a repository dispatch event
* [reposCreateForAuthenticatedUser](#reposcreateforauthenticateduser) - Create a repository for the authenticated user
* [reposCreateFork](#reposcreatefork) - Create a fork
* [reposCreateInOrg](#reposcreateinorg) - Create an organization repository
* [reposCreateOrUpdateEnvironment](#reposcreateorupdateenvironment) - Create or update an environment
* [reposCreateOrUpdateFileContents](#reposcreateorupdatefilecontents) - Create or update file contents
* [reposCreatePagesSite](#reposcreatepagessite) - Create a GitHub Enterprise Server Pages site
* [reposCreateRelease](#reposcreaterelease) - Create a release
* [reposCreateTagProtection](#reposcreatetagprotection) - Create a tag protection state for a repository
* [reposCreateUsingTemplate](#reposcreateusingtemplate) - Create a repository using a template
* [reposCreateWebhook](#reposcreatewebhook) - Create a repository webhook
* [reposDeclineInvitationForAuthenticatedUser](#reposdeclineinvitationforauthenticateduser) - Decline a repository invitation
* [reposDelete](#reposdelete) - Delete a repository
* [reposDeleteAccessRestrictions](#reposdeleteaccessrestrictions) - Delete access restrictions
* [reposDeleteAdminBranchProtection](#reposdeleteadminbranchprotection) - Delete admin branch protection
* [reposDeleteAnEnvironment](#reposdeleteanenvironment) - Delete an environment
* [reposDeleteAutolink](#reposdeleteautolink) - Delete an autolink reference from a repository
* [reposDeleteBranchProtection](#reposdeletebranchprotection) - Delete branch protection
* [reposDeleteCommitComment](#reposdeletecommitcomment) - Delete a commit comment
* [reposDeleteCommitSignatureProtection](#reposdeletecommitsignatureprotection) - Delete commit signature protection
* [reposDeleteDeployKey](#reposdeletedeploykey) - Delete a deploy key
* [reposDeleteDeployment](#reposdeletedeployment) - Delete a deployment
* [reposDeleteDeploymentBranchPolicy](#reposdeletedeploymentbranchpolicy) - Delete a deployment branch policy
* [reposDeleteFile](#reposdeletefile) - Delete a file
* [reposDeleteInvitation](#reposdeleteinvitation) - Delete a repository invitation
* [reposDeletePagesSite](#reposdeletepagessite) - Delete a GitHub Enterprise Server Pages site
* [reposDeletePullRequestReviewProtection](#reposdeletepullrequestreviewprotection) - Delete pull request review protection
* [reposDeleteRelease](#reposdeleterelease) - Delete a release
* [reposDeleteReleaseAsset](#reposdeletereleaseasset) - Delete a release asset
* [reposDeleteTagProtection](#reposdeletetagprotection) - Delete a tag protection state for a repository
* [reposDeleteWebhook](#reposdeletewebhook) - Delete a repository webhook
* [reposDisableLfsForRepo](#reposdisablelfsforrepo) - Disable Git LFS for a repository
* [reposDownloadTarballArchive](#reposdownloadtarballarchive) - Download a repository archive (tar)
* [reposDownloadZipballArchive](#reposdownloadzipballarchive) - Download a repository archive (zip)
* [reposEnableLfsForRepo](#reposenablelfsforrepo) - Enable Git LFS for a repository
* [reposGenerateReleaseNotes](#reposgeneratereleasenotes) - Generate release notes content for a release
* [reposGet](#reposget) - Get a repository
* [reposGetAccessRestrictions](#reposgetaccessrestrictions) - Get access restrictions
* [reposGetAdminBranchProtection](#reposgetadminbranchprotection) - Get admin branch protection
* [reposGetAllEnvironments](#reposgetallenvironments) - List environments
* [reposGetAllStatusCheckContexts](#reposgetallstatuscheckcontexts) - Get all status check contexts
* [reposGetAllTopics](#reposgetalltopics) - Get all repository topics
* [reposGetAppsWithAccessToProtectedBranch](#reposgetappswithaccesstoprotectedbranch) - Get apps with access to the protected branch
* [reposGetAutolink](#reposgetautolink) - Get an autolink reference of a repository
* [reposGetBranch](#reposgetbranch) - Get a branch
* [reposGetBranchProtection](#reposgetbranchprotection) - Get branch protection
* [reposGetCodeFrequencyStats](#reposgetcodefrequencystats) - Get the weekly commit activity
* [reposGetCollaboratorPermissionLevel](#reposgetcollaboratorpermissionlevel) - Get repository permissions for a user
* [reposGetCombinedStatusForRef](#reposgetcombinedstatusforref) - Get the combined status for a specific reference
* [reposGetCommit](#reposgetcommit) - Get a commit
* [reposGetCommitActivityStats](#reposgetcommitactivitystats) - Get the last year of commit activity
* [reposGetCommitComment](#reposgetcommitcomment) - Get a commit comment
* [reposGetCommitSignatureProtection](#reposgetcommitsignatureprotection) - Get commit signature protection
* [reposGetContent](#reposgetcontent) - Get repository content
* [reposGetContributorsStats](#reposgetcontributorsstats) - Get all contributor commit activity
* [reposGetDeployKey](#reposgetdeploykey) - Get a deploy key
* [reposGetDeployment](#reposgetdeployment) - Get a deployment
* [reposGetDeploymentBranchPolicy](#reposgetdeploymentbranchpolicy) - Get a deployment branch policy
* [reposGetDeploymentStatus](#reposgetdeploymentstatus) - Get a deployment status
* [reposGetEnvironment](#reposgetenvironment) - Get an environment
* [reposGetLatestPagesBuild](#reposgetlatestpagesbuild) - Get latest Pages build
* [reposGetLatestRelease](#reposgetlatestrelease) - Get the latest release
* [reposGetPages](#reposgetpages) - Get a GitHub Enterprise Server Pages site
* [reposGetPagesBuild](#reposgetpagesbuild) - Get GitHub Enterprise Server Pages build
* [reposGetParticipationStats](#reposgetparticipationstats) - Get the weekly commit count
* [reposGetPullRequestReviewProtection](#reposgetpullrequestreviewprotection) - Get pull request review protection
* [reposGetPunchCardStats](#reposgetpunchcardstats) - Get the hourly commit count for each day
* [reposGetReadme](#reposgetreadme) - Get a repository README
* [reposGetReadmeInDirectory](#reposgetreadmeindirectory) - Get a repository README for a directory
* [reposGetRelease](#reposgetrelease) - Get a release
* [reposGetReleaseAsset](#reposgetreleaseasset) - Get a release asset
* [reposGetReleaseByTag](#reposgetreleasebytag) - Get a release by tag name
* [reposGetStatusChecksProtection](#reposgetstatuschecksprotection) - Get status checks protection
* [reposGetTeamsWithAccessToProtectedBranch](#reposgetteamswithaccesstoprotectedbranch) - Get teams with access to the protected branch
* [reposGetUsersWithAccessToProtectedBranch](#reposgetuserswithaccesstoprotectedbranch) - Get users with access to the protected branch
* [reposGetWebhook](#reposgetwebhook) - Get a repository webhook
* [reposGetWebhookConfigForRepo](#reposgetwebhookconfigforrepo) - Get a webhook configuration for a repository
* [reposGetWebhookDelivery](#reposgetwebhookdelivery) - Get a delivery for a repository webhook
* [reposListAutolinks](#reposlistautolinks) - List all autolinks of a repository
* [reposListBranches](#reposlistbranches) - List branches
* [reposListBranchesForHeadCommit](#reposlistbranchesforheadcommit) - List branches for HEAD commit
* [reposListCacheInfo](#reposlistcacheinfo) - List repository cache replication status
* [reposListCollaborators](#reposlistcollaborators) - List repository collaborators
* [reposListCommentsForCommit](#reposlistcommentsforcommit) - List commit comments
* [reposListCommitCommentsForRepo](#reposlistcommitcommentsforrepo) - List commit comments for a repository
* [reposListCommitStatusesForRef](#reposlistcommitstatusesforref) - List commit statuses for a reference
* [reposListCommits](#reposlistcommits) - List commits
* [reposListContributors](#reposlistcontributors) - List repository contributors
* [reposListDeployKeys](#reposlistdeploykeys) - List deploy keys
* [reposListDeploymentBranchPolicies](#reposlistdeploymentbranchpolicies) - List deployment branch policies
* [reposListDeploymentStatuses](#reposlistdeploymentstatuses) - List deployment statuses
* [reposListDeployments](#reposlistdeployments) - List deployments
* [reposListForAuthenticatedUser](#reposlistforauthenticateduser) - List repositories for the authenticated user
* [reposListForOrg](#reposlistfororg) - List organization repositories
* [reposListForUser](#reposlistforuser) - List repositories for a user
* [reposListForks](#reposlistforks) - List forks
* [reposListInvitations](#reposlistinvitations) - List repository invitations
* [reposListInvitationsForAuthenticatedUser](#reposlistinvitationsforauthenticateduser) - List repository invitations for the authenticated user
* [reposListLanguages](#reposlistlanguages) - List repository languages
* [reposListPagesBuilds](#reposlistpagesbuilds) - List GitHub Enterprise Server Pages builds
* [reposListPublic](#reposlistpublic) - List public repositories
* [reposListPullRequestsAssociatedWithCommit](#reposlistpullrequestsassociatedwithcommit) - List pull requests associated with a commit
* [reposListReleaseAssets](#reposlistreleaseassets) - List release assets
* [reposListReleases](#reposlistreleases) - List releases
* [reposListTagProtection](#reposlisttagprotection) - List tag protection states for a repository
* [reposListTags](#reposlisttags) - List repository tags
* [reposListTeams](#reposlistteams) - List repository teams
* [reposListWebhookDeliveries](#reposlistwebhookdeliveries) - List deliveries for a repository webhook
* [reposListWebhooks](#reposlistwebhooks) - List repository webhooks
* [reposMerge](#reposmerge) - Merge a branch
* [reposMergeUpstream](#reposmergeupstream) - Sync a fork branch with the upstream repository
* [reposPingWebhook](#repospingwebhook) - Ping a repository webhook
* [reposRedeliverWebhookDelivery](#reposredeliverwebhookdelivery) - Redeliver a delivery for a repository webhook
* [reposRemoveAppAccessRestrictions](#reposremoveappaccessrestrictions) - Remove app access restrictions
* [reposRemoveCollaborator](#reposremovecollaborator) - Remove a repository collaborator
* [reposRemoveStatusCheckContexts](#reposremovestatuscheckcontexts) - Remove status check contexts
* [reposRemoveStatusCheckProtection](#reposremovestatuscheckprotection) - Remove status check protection
* [reposRemoveTeamAccessRestrictions](#reposremoveteamaccessrestrictions) - Remove team access restrictions
* [reposRemoveUserAccessRestrictions](#reposremoveuseraccessrestrictions) - Remove user access restrictions
* [reposRenameBranch](#reposrenamebranch) - Rename a branch
* [reposReplaceAllTopics](#reposreplacealltopics) - Replace all repository topics
* [reposRequestPagesBuild](#reposrequestpagesbuild) - Request a GitHub Enterprise Server Pages build
* [reposSetAdminBranchProtection](#repossetadminbranchprotection) - Set admin branch protection
* [reposSetAppAccessRestrictions](#repossetappaccessrestrictions) - Set app access restrictions
* [reposSetStatusCheckContexts](#repossetstatuscheckcontexts) - Set status check contexts
* [reposSetTeamAccessRestrictions](#repossetteamaccessrestrictions) - Set team access restrictions
* [reposSetUserAccessRestrictions](#repossetuseraccessrestrictions) - Set user access restrictions
* [reposTestPushWebhook](#repostestpushwebhook) - Test the push repository webhook
* [reposTransfer](#repostransfer) - Transfer a repository
* [reposUpdate](#reposupdate) - Update a repository
* [reposUpdateBranchProtection](#reposupdatebranchprotection) - Update branch protection
* [reposUpdateCommitComment](#reposupdatecommitcomment) - Update a commit comment
* [reposUpdateDeploymentBranchPolicy](#reposupdatedeploymentbranchpolicy) - Update a deployment branch policy
* [reposUpdateInformationAboutPagesSite](#reposupdateinformationaboutpagessite) - Update information about a GitHub Enterprise Server Pages site
* [reposUpdateInvitation](#reposupdateinvitation) - Update a repository invitation
* [reposUpdatePullRequestReviewProtection](#reposupdatepullrequestreviewprotection) - Update pull request review protection
* [reposUpdateRelease](#reposupdaterelease) - Update a release
* [reposUpdateReleaseAsset](#reposupdatereleaseasset) - Update a release asset
* [reposUpdateStatusCheckProtection](#reposupdatestatuscheckprotection) - Update status check protection
* [reposUpdateWebhook](#reposupdatewebhook) - Update a repository webhook
* [reposUpdateWebhookConfigForRepo](#reposupdatewebhookconfigforrepo) - Update a webhook configuration for a repository
* [reposUploadReleaseAsset](#reposuploadreleaseasset) - Upload a release asset

## reposAcceptInvitationForAuthenticatedUser

Accept a repository invitation

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/collaborators/invitations#accept-a-repository-invitation>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposAcceptInvitationForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposAcceptInvitationForAuthenticatedUserRequest();
    $request->invitationId = 152027;

    $response = $sdk->repos->reposAcceptInvitationForAuthenticatedUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposAddAppAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified apps push access for this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#add-app-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposAddAppAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposAddAppAccessRestrictionsRequest();
    $request->requestBody = new ReposAddAppAccessRestrictionsRequestBody1();
    $request->requestBody->apps = [
        'eveniet',
    ];
    $request->branch = 'hic';
    $request->owner = 'voluptatem';
    $request->repo = 'incidunt';

    $response = $sdk->repos->reposAddAppAccessRestrictions($request);

    if ($response->integrations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposAddCollaborator

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.5/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.5/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.5/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

For more information on permission levels, see "[Repository permission levels for an organization](https://docs.github.com/enterprise-server@3.5/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)". There are restrictions on which permissions can be granted to organization members when an organization base role is in place. In this case, the permission being given must be equal to or higher than the org base permission. Otherwise, the request will fail with:

```
Cannot assign {member} permission of {role name}
```

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.5/rest/overview/resources-in-the-rest-api#http-verbs)."

The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [repository invitations API endpoints](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#invitations).

**Updating an existing collaborator's permission level**

The endpoint can also be used to change the permissions of an existing collaborator without first removing and re-adding the collaborator. To change the permissions, use the same endpoint and pass a different `permission` parameter. The response will be a `204`, with no other indication that the permission level changed.

**Rate limits**

You are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/collaborators/collaborators#add-a-repository-collaborator>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposAddCollaboratorRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposAddCollaboratorRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposAddCollaboratorRequest();
    $request->requestBody = new ReposAddCollaboratorRequestBody();
    $request->requestBody->permission = 'qui';
    $request->owner = 'qui';
    $request->repo = 'necessitatibus';
    $request->username = 'Mateo39';

    $response = $sdk->repos->reposAddCollaborator($request);

    if ($response->repositoryInvitation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposAddStatusCheckContexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#add-status-check-contexts>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposAddStatusCheckContextsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposAddStatusCheckContextsRequest();
    $request->requestBody = new ReposAddStatusCheckContextsRequestBody1();
    $request->requestBody->contexts = [
        'voluptatibus',
        'molestias',
        'officia',
        'libero',
    ];
    $request->branch = 'totam';
    $request->owner = 'sequi';
    $request->repo = 'aliquid';

    $response = $sdk->repos->reposAddStatusCheckContexts($request);

    if ($response->reposAddStatusCheckContexts200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposAddTeamAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified teams push access for this branch. You can also give push access to child teams.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#add-team-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposAddTeamAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposAddTeamAccessRestrictionsRequest();
    $request->requestBody = new ReposAddTeamAccessRestrictionsRequestBody1();
    $request->requestBody->teams = [
        'ducimus',
        'odit',
        'velit',
        'reiciendis',
    ];
    $request->branch = 'repellat';
    $request->owner = 'nulla';
    $request->repo = 'laborum';

    $response = $sdk->repos->reposAddTeamAccessRestrictions($request);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposAddUserAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified people push access for this branch.

| Type    | Description                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#add-user-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposAddUserAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposAddUserAccessRestrictionsRequest();
    $request->requestBody = [
        'doloremque',
        'nisi',
        'rerum',
        'recusandae',
    ];
    $request->branch = 'voluptates';
    $request->owner = 'non';
    $request->repo = 'rem';

    $response = $sdk->repos->reposAddUserAccessRestrictions($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCheckCollaborator

For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.

Team members will include the members of child teams.

You must authenticate using an access token with the `read:org` and `repo` scopes with push access to use this
endpoint. GitHub Apps must have the `members` organization permission and `metadata` repository permission to use this
endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/collaborators/collaborators#check-if-a-user-is-a-repository-collaborator>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCheckCollaboratorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCheckCollaboratorRequest();
    $request->owner = 'quia';
    $request->repo = 'ullam';
    $request->username = 'Pansy_Carter6';

    $response = $sdk->repos->reposCheckCollaborator($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCodeownersErrors

List any syntax errors that are detected in the CODEOWNERS
file.

For more information about the correct CODEOWNERS syntax,
see "[About code owners](https://docs.github.com/enterprise-server@3.5/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)."

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#list-codeowners-errors>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCodeownersErrorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCodeownersErrorsRequest();
    $request->owner = 'officiis';
    $request->ref = 'architecto';
    $request->repo = 'architecto';

    $response = $sdk->repos->reposCodeownersErrors($request);

    if ($response->codeownersErrors !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCompareCommits

Compares two commits against one another. You can compare branches in the same repository, or you can compare branches that exist in different repositories within the same repository network, including fork branches. For more information about how to view a repository's network, see "[Understanding connections between repositories](https://docs.github.com/enterprise-server@3.5/repositories/viewing-activity-and-data-for-your-repository/understanding-connections-between-repositories)."

This endpoint is equivalent to running the `git log BASE...HEAD` command, but it returns commits in a different order. The `git log BASE...HEAD` command returns commits in reverse chronological order, whereas the API returns commits in chronological order. You can pass the appropriate [media type](https://docs.github.com/enterprise-server@3.5/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.

The API response includes details about the files that were changed between the two commits. This includes the status of the change (if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.

When calling this endpoint without any paging parameter (`per_page` or `page`), the returned list is limited to 250 commits, and the last commit in the list is the most recent of the entire comparison.

**Working with large comparisons**

To process a response with a large number of commits, use a query parameter (`per_page` or `page`) to paginate the results. When using pagination:

- The list of changed files is only shown on the first page of results, but it includes all changed files for the entire comparison.
- The results are returned in chronological order, but the last commit in the returned list may not be the most recent one in the entire set if there are more pages of results.

For more information on working with pagination, see "[Using pagination in the REST API](https://docs.github.com/enterprise-server@3.5/rest/guides/using-pagination-in-the-rest-api)."

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The `verification` object includes the following fields:

| Name | Type | Description |
| ---- | ---- | ----------- |
| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
| `signature` | `string` | The signature that was extracted from the commit. |
| `payload` | `string` | The value that was signed. |

These are the possible values for `reason` in the `verification` object:

| Value | Description |
| ----- | ----------- |
| `expired_key` | The key that made the signature is expired. |
| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
| `gpgverify_error` | There was an error communicating with the signature verification service. |
| `gpgverify_unavailable` | The signature verification service is currently unavailable. |
| `unsigned` | The object does not include a signature. |
| `unknown_signature_type` | A non-PGP signature was found in the commit. |
| `no_user` | No user was associated with the `committer` email address in the commit. |
| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
| `unknown_key` | The key that made the signature has not been registered with any user's account. |
| `malformed_signature` | There was an error parsing the signature. |
| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
| `valid` | None of the above errors applied, so the signature is considered to be verified. |

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/commits/commits#compare-two-commits>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCompareCommitsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCompareCommitsRequest();
    $request->basehead = 'enim';
    $request->owner = 'optio';
    $request->page = 525951;
    $request->perPage = 17060;
    $request->repo = 'facilis';

    $response = $sdk->repos->reposCompareCommits($request);

    if ($response->commitComparison !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateAutolink

Users with admin access to the repository can create an autolink.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/repos/autolinks#create-an-autolink-reference-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateAutolinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateAutolinkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateAutolinkRequest();
    $request->requestBody = new ReposCreateAutolinkRequestBody();
    $request->requestBody->isAlphanumeric = false;
    $request->requestBody->keyPrefix = 'reiciendis';
    $request->requestBody->urlTemplate = 'a';
    $request->owner = 'iste';
    $request->repo = 'dicta';

    $response = $sdk->repos->reposCreateAutolink($request);

    if ($response->autolink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateCommitComment

Create a comment for a commit using its `:commit_sha`.

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.5/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.5/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.5/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/commits/comments#create-a-commit-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateCommitCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateCommitCommentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateCommitCommentRequest();
    $request->requestBody = new ReposCreateCommitCommentRequestBody();
    $request->requestBody->body = 'quos';
    $request->requestBody->line = 356315;
    $request->requestBody->path = 'dolore';
    $request->requestBody->position = 266284;
    $request->commitSha = 'itaque';
    $request->owner = 'maxime';
    $request->repo = 'modi';

    $response = $sdk->repos->reposCreateCommitComment($request);

    if ($response->commitComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateCommitSignatureProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#create-commit-signature-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateCommitSignatureProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateCommitSignatureProtectionRequest();
    $request->branch = 'consequuntur';
    $request->owner = 'assumenda';
    $request->repo = 'vero';

    $response = $sdk->repos->reposCreateCommitSignatureProtection($request);

    if ($response->protectedBranchAdminEnforced !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateCommitStatus

Users with push access in a repository can create commit statuses for a given SHA.

Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/commits/statuses#create-a-commit-status>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateCommitStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateCommitStatusRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateCommitStatusRequestBodyStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateCommitStatusRequest();
    $request->requestBody = new ReposCreateCommitStatusRequestBody();
    $request->requestBody->context = 'doloribus';
    $request->requestBody->description = 'impedit';
    $request->requestBody->state = ReposCreateCommitStatusRequestBodyStateEnum::SUCCESS;
    $request->requestBody->targetUrl = 'accusamus';
    $request->owner = 'totam';
    $request->repo = 'reiciendis';
    $request->sha = 'ab';

    $response = $sdk->repos->reposCreateCommitStatus($request);

    if ($response->status !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateDeployKey

You can create a read-only deploy key.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/deploy-keys#create-a-deploy-key>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateDeployKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateDeployKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateDeployKeyRequest();
    $request->requestBody = new ReposCreateDeployKeyRequestBody();
    $request->requestBody->key = 'sint';
    $request->requestBody->readOnly = false;
    $request->requestBody->title = 'Ms.';
    $request->owner = 'esse';
    $request->repo = 'iure';

    $response = $sdk->repos->reposCreateDeployKey($request);

    if ($response->deployKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateDeployment

Deployments offer a few configurable parameters with certain defaults.

The `ref` parameter can be any named branch, tag, or SHA. At GitHub Enterprise Server we often deploy branches and verify them
before we merge a pull request.

The `environment` parameter allows deployments to be issued to different runtime environments. Teams often have
multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter
makes it easier to track which environments have requested deployments. The default environment is `production`.

The `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If
the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds,
the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will
return a failure response.

By default, [commit statuses](https://docs.github.com/enterprise-server@3.5/rest/commits/statuses) for every submitted context must be in a `success`
state. The `required_contexts` parameter allows you to specify a subset of contexts that must be `success`, or to
specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do
not require any contexts or create any commit statuses, the deployment will always succeed.

The `payload` parameter is available for any extra information that a deployment system might need. It is a JSON text
field that will be passed on when a deployment event is dispatched.

The `task` parameter is used by the deployment system to allow different execution paths. In the web world this might
be `deploy:migrations` to run schema changes on the system. In the compiled world this could be a flag to compile an
application with debugging enabled.

Users with `repo` or `repo_deployment` scopes can create a deployment for a given ref.

#### Merged branch response
You will see this response when GitHub automatically merges the base branch into the topic branch instead of creating
a deployment. This auto-merge happens when:
*   Auto-merge option is enabled in the repository
*   Topic branch does not include the latest changes on the base branch, which is `master` in the response example
*   There are no merge conflicts

If there are no new commits in the base branch, a new request to create a deployment should give a successful
response.

#### Merge conflict response
This error happens when the `auto_merge` option is enabled and when the default branch (in this case `master`), can't
be merged into the branch that's being deployed (in this case `topic-branch`), due to merge conflicts.

#### Failed commit status checks
This error happens when the `required_contexts` parameter indicates that one or more contexts need to have a `success`
status for the commit to be deployed, but one or more of the required contexts do not have a state of `success`.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/deployments/deployments#create-a-deployment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateDeploymentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateDeploymentRequest();
    $request->requestBody = new ReposCreateDeploymentRequestBody();
    $request->requestBody->autoMerge = false;
    $request->requestBody->description = 'odio';
    $request->requestBody->environment = 'nesciunt';
    $request->requestBody->payload = 'vel';
    $request->requestBody->productionEnvironment = false;
    $request->requestBody->ref = 'neque';
    $request->requestBody->requiredContexts = [
        'voluptas',
        'consequuntur',
    ];
    $request->requestBody->task = 'officia';
    $request->requestBody->transientEnvironment = false;
    $request->owner = 'reprehenderit';
    $request->repo = 'distinctio';

    $response = $sdk->repos->reposCreateDeployment($request);

    if ($response->deployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateDeploymentBranchPolicy

Creates a deployment branch policy for an environment.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/deployments/branch-policies#create-deployment-branch-policy>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateDeploymentBranchPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentBranchPolicyNamePattern;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateDeploymentBranchPolicyRequest();
    $request->deploymentBranchPolicyNamePattern = new DeploymentBranchPolicyNamePattern();
    $request->deploymentBranchPolicyNamePattern->name = 'release/*';
    $request->environmentName = 'eius';
    $request->owner = 'ipsa';
    $request->repo = 'rem';

    $response = $sdk->repos->reposCreateDeploymentBranchPolicy($request);

    if ($response->deploymentBranchPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateDeploymentStatus

Users with `push` access can create deployment statuses for a given deployment.

GitHub Apps require `read & write` access to "Deployments" and `read-only` access to "Repo contents" (for private repos). OAuth Apps require the `repo_deployment` scope.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/deployments/statuses#create-a-deployment-status>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateDeploymentStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateDeploymentStatusRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateDeploymentStatusRequestBodyEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateDeploymentStatusRequestBodyStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateDeploymentStatusRequest();
    $request->requestBody = new ReposCreateDeploymentStatusRequestBody();
    $request->requestBody->autoInactive = false;
    $request->requestBody->description = 'maiores';
    $request->requestBody->environment = ReposCreateDeploymentStatusRequestBodyEnvironmentEnum::PRODUCTION;
    $request->requestBody->environmentUrl = 'veniam';
    $request->requestBody->logUrl = 'saepe';
    $request->requestBody->state = ReposCreateDeploymentStatusRequestBodyStateEnum::FAILURE;
    $request->requestBody->targetUrl = 'facere';
    $request->deploymentId = 307173;
    $request->owner = 'quos';
    $request->repo = 'doloribus';

    $response = $sdk->repos->reposCreateDeploymentStatus($request);

    if ($response->deploymentStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateDispatchEvent

You can use this endpoint to trigger a webhook event called `repository_dispatch` when you want activity that happens outside of GitHub Enterprise Server to trigger a GitHub Actions workflow or GitHub App webhook. You must configure your GitHub Actions workflow or GitHub App to run when the `repository_dispatch` event occurs. For an example `repository_dispatch` webhook payload, see "[RepositoryDispatchEvent](https://docs.github.com/enterprise-server@3.5/webhooks/event-payloads/#repository_dispatch)."

The `client_payload` parameter is available for any extra information that your workflow might need. This parameter is a JSON payload that will be passed on when the webhook event is dispatched. For example, the `client_payload` can include a message that a user would like to send using a GitHub Actions workflow. Or the `client_payload` can be used as a test to debug your workflow.

This endpoint requires write access to the repository by providing either:

  - Personal access tokens with `repo` scope. For more information, see "[Creating a personal access token for the command line](https://docs.github.com/enterprise-server@3.5/articles/creating-a-personal-access-token-for-the-command-line)" in the GitHub Help documentation.
  - GitHub Apps with both `metadata:read` and `contents:read&write` permissions.

This input example shows how you can use the `client_payload` as a test to debug your workflow.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#create-a-repository-dispatch-event>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateDispatchEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateDispatchEventRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateDispatchEventRequest();
    $request->requestBody = new ReposCreateDispatchEventRequestBody();
    $request->requestBody->clientPayload = [
        'est' => 'delectus',
        'velit' => 'vitae',
        'nesciunt' => 'similique',
        'illo' => 'repellat',
    ];
    $request->requestBody->eventType = 'nemo';
    $request->owner = 'doloribus';
    $request->repo = 'possimus';

    $response = $sdk->repos->reposCreateDispatchEvent($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateForAuthenticatedUser

Creates a new repository for the authenticated user.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
*   `repo` scope to create a private repository.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#create-a-repository-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateForAuthenticatedUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateForAuthenticatedUserRequestBodyMergeCommitMessageEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateForAuthenticatedUserRequestBodyMergeCommitTitleEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateForAuthenticatedUserRequestBodySquashMergeCommitMessageEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateForAuthenticatedUserRequestBodySquashMergeCommitTitleEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateForAuthenticatedUserRequestBody();
    $request->allowAutoMerge = false;
    $request->allowMergeCommit = true;
    $request->allowRebaseMerge = true;
    $request->allowSquashMerge = true;
    $request->autoInit = false;
    $request->deleteBranchOnMerge = false;
    $request->description = 'unde';
    $request->gitignoreTemplate = 'Haskell';
    $request->hasDiscussions = true;
    $request->hasDownloads = true;
    $request->hasIssues = true;
    $request->hasProjects = true;
    $request->hasWiki = true;
    $request->homepage = 'incidunt';
    $request->isTemplate = true;
    $request->licenseTemplate = 'mit';
    $request->mergeCommitMessage = ReposCreateForAuthenticatedUserRequestBodyMergeCommitMessageEnum::PR_BODY;
    $request->mergeCommitTitle = ReposCreateForAuthenticatedUserRequestBodyMergeCommitTitleEnum::PR_TITLE;
    $request->name = 'Team Environment';
    $request->private = false;
    $request->squashMergeCommitMessage = ReposCreateForAuthenticatedUserRequestBodySquashMergeCommitMessageEnum::COMMIT_MESSAGES;
    $request->squashMergeCommitTitle = ReposCreateForAuthenticatedUserRequestBodySquashMergeCommitTitleEnum::COMMIT_OR_PR_TITLE;
    $request->teamId = 2064;

    $response = $sdk->repos->reposCreateForAuthenticatedUser($request);

    if ($response->repository !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateFork

Create a fork for the authenticated user.

**Note**: Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Enterprise Server Support](https://support.github.com/contact?tags=dotcom-rest-api).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#create-a-fork>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateForkRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateForkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateForkRequest();
    $request->requestBody = new ReposCreateForkRequestBody();
    $request->requestBody->organization = 'quidem';
    $request->owner = 'nesciunt';
    $request->repo = 'commodi';

    $response = $sdk->repos->reposCreateFork($request);

    if ($response->fullRepository !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateInOrg

Creates a new repository in the specified organization. The authenticated user must be a member of the organization.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
*   `repo` scope to create a private repository

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#create-an-organization-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateInOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateInOrgRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateInOrgRequestBodyMergeCommitMessageEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateInOrgRequestBodyMergeCommitTitleEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateInOrgRequestBodySquashMergeCommitMessageEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateInOrgRequestBodySquashMergeCommitTitleEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateInOrgRequestBodyVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateInOrgRequest();
    $request->requestBody = new ReposCreateInOrgRequestBody();
    $request->requestBody->allowAutoMerge = false;
    $request->requestBody->allowMergeCommit = false;
    $request->requestBody->allowRebaseMerge = false;
    $request->requestBody->allowSquashMerge = false;
    $request->requestBody->autoInit = false;
    $request->requestBody->deleteBranchOnMerge = false;
    $request->requestBody->description = 'sapiente';
    $request->requestBody->gitignoreTemplate = 'consequuntur';
    $request->requestBody->hasDownloads = true;
    $request->requestBody->hasIssues = false;
    $request->requestBody->hasProjects = false;
    $request->requestBody->hasWiki = false;
    $request->requestBody->homepage = 'veniam';
    $request->requestBody->isTemplate = false;
    $request->requestBody->licenseTemplate = 'debitis';
    $request->requestBody->mergeCommitMessage = ReposCreateInOrgRequestBodyMergeCommitMessageEnum::PR_TITLE;
    $request->requestBody->mergeCommitTitle = ReposCreateInOrgRequestBodyMergeCommitTitleEnum::MERGE_MESSAGE;
    $request->requestBody->name = 'Carrie White';
    $request->requestBody->private = false;
    $request->requestBody->squashMergeCommitMessage = ReposCreateInOrgRequestBodySquashMergeCommitMessageEnum::COMMIT_MESSAGES;
    $request->requestBody->squashMergeCommitTitle = ReposCreateInOrgRequestBodySquashMergeCommitTitleEnum::PR_TITLE;
    $request->requestBody->teamId = 403147;
    $request->requestBody->useSquashPrTitleAsDefault = false;
    $request->requestBody->visibility = ReposCreateInOrgRequestBodyVisibilityEnum::INTERNAL;
    $request->org = 'ab';

    $response = $sdk->repos->reposCreateInOrg($request);

    if ($response->repository !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateOrUpdateEnvironment

Create or update an environment with protection rules, such as required reviewers. For more information about environment protection rules, see "[Environments](/actions/reference/environments#environment-protection-rules)."

**Note:** To create or update name patterns that branches must match in order to deploy to this environment, see "[Deployment branch policies](/rest/deployments/branch-policies)."

**Note:** To create or update secrets for an environment, see "[Secrets](/rest/reference/actions#secrets)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/deployments/environments#create-or-update-an-environment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateOrUpdateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateOrUpdateEnvironmentRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentBranchPolicySettings;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateOrUpdateEnvironmentRequestBodyReviewers;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentReviewerTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateOrUpdateEnvironmentRequest();
    $request->requestBody = new ReposCreateOrUpdateEnvironmentRequestBody();
    $request->requestBody->deploymentBranchPolicy = new DeploymentBranchPolicySettings();
    $request->requestBody->deploymentBranchPolicy->customBranchPolicies = false;
    $request->requestBody->deploymentBranchPolicy->protectedBranches = false;
    $request->requestBody->reviewers = [
        new ReposCreateOrUpdateEnvironmentRequestBodyReviewers(),
    ];
    $request->requestBody->waitTimer = 30;
    $request->environmentName = 'hic';
    $request->owner = 'nisi';
    $request->repo = 'quisquam';

    $response = $sdk->repos->reposCreateOrUpdateEnvironment($request);

    if ($response->environment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateOrUpdateFileContents

Creates a new file or replaces an existing file in a repository. You must authenticate using an access token with the `workflow` scope to use this endpoint.

**Note:** If you use this endpoint and the "[Delete a file](https://docs.github.com/enterprise-server@3.5/rest/reference/repos/#delete-file)" endpoint in parallel, the concurrent requests will conflict and you will receive errors. You must use these endpoints serially instead.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#create-or-update-file-contents>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateOrUpdateFileContentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateOrUpdateFileContentsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateOrUpdateFileContentsRequestBodyAuthor;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateOrUpdateFileContentsRequestBodyCommitter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateOrUpdateFileContentsRequest();
    $request->requestBody = new ReposCreateOrUpdateFileContentsRequestBody();
    $request->requestBody->author = new ReposCreateOrUpdateFileContentsRequestBodyAuthor();
    $request->requestBody->author->date = '"2013-01-15T17:13:22+05:00"';
    $request->requestBody->author->email = 'Jerrold10@gmail.com';
    $request->requestBody->author->name = 'Beth Cummerata';
    $request->requestBody->branch = 'praesentium';
    $request->requestBody->committer = new ReposCreateOrUpdateFileContentsRequestBodyCommitter();
    $request->requestBody->committer->date = '"2013-01-05T13:13:22+05:00"';
    $request->requestBody->committer->email = 'Faye_Quitzon2@gmail.com';
    $request->requestBody->committer->name = 'Molly Cronin';
    $request->requestBody->content = 'modi';
    $request->requestBody->message = 'veniam';
    $request->requestBody->sha = 'quod';
    $request->owner = 'itaque';
    $request->path = 'a';
    $request->repo = 'quisquam';

    $response = $sdk->repos->reposCreateOrUpdateFileContents($request);

    if ($response->fileCommit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreatePagesSite

Configures a GitHub Enterprise Server Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages)."

To use this endpoint, you must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission. A token with the `repo` scope or Pages write permission is required. GitHub Apps must have the `administration:write` and `pages:write` permissions.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/pages#create-a-github-pages-site>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreatePagesSiteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreatePagesSiteRequest();
    $request->requestBody = new ReposCreatePagesSiteRequestBody1();
    $request->requestBody->buildType = ReposCreatePagesSiteRequestBody1BuildTypeEnum::WORKFLOW;
    $request->requestBody->source = new ReposCreatePagesSiteRequestBody1Source();
    $request->requestBody->source->branch = 'assumenda';
    $request->requestBody->source->path = ReposCreatePagesSiteRequestBody1SourcePathEnum::ROOT_DOCS;
    $request->owner = 'architecto';
    $request->repo = 'alias';

    $response = $sdk->repos->reposCreatePagesSite($request);

    if ($response->page !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateRelease

Users with push access to the repository can create a release.

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.5/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.5/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.5/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/releases/releases#create-a-release>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateReleaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateReleaseRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateReleaseRequest();
    $request->requestBody = new ReposCreateReleaseRequestBody();
    $request->requestBody->body = 'culpa';
    $request->requestBody->draft = false;
    $request->requestBody->generateReleaseNotes = false;
    $request->requestBody->name = 'Della Treutel III';
    $request->requestBody->prerelease = false;
    $request->requestBody->tagName = 'perspiciatis';
    $request->requestBody->targetCommitish = 'debitis';
    $request->owner = 'ullam';
    $request->repo = 'architecto';

    $response = $sdk->repos->reposCreateRelease($request);

    if ($response->release !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateTagProtection

This creates a tag protection state for a repository.
This endpoint is only available to repository administrators.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#create-tag-protection-state-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateTagProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateTagProtectionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateTagProtectionRequest();
    $request->requestBody = new ReposCreateTagProtectionRequestBody();
    $request->requestBody->pattern = 'accusantium';
    $request->owner = 'perferendis';
    $request->repo = 'veritatis';

    $response = $sdk->repos->reposCreateTagProtection($request);

    if ($response->tagProtection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateUsingTemplate

Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. If the repository is not public, the authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#get-a-repository) endpoint and check that the `is_template` key is `true`.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
*   `repo` scope to create a private repository

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#create-a-repository-using-a-template>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateUsingTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateUsingTemplateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateUsingTemplateRequest();
    $request->requestBody = new ReposCreateUsingTemplateRequestBody();
    $request->requestBody->description = 'provident';
    $request->requestBody->includeAllBranches = false;
    $request->requestBody->name = 'Elmer Spinka';
    $request->requestBody->owner = 'recusandae';
    $request->requestBody->private = false;
    $request->templateOwner = 'velit';
    $request->templateRepo = 'magnam';

    $response = $sdk->repos->reposCreateUsingTemplate($request);

    if ($response->repository !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateWebhook

Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can
share the same `config` as long as those webhooks do not have any `events` that overlap.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/webhooks/repos#create-a-repository-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateWebhookRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateWebhookRequestBodyConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateWebhookRequest();
    $request->requestBody = new ReposCreateWebhookRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->config = new ReposCreateWebhookRequestBodyConfig();
    $request->requestBody->config->contentType = '"json"';
    $request->requestBody->config->digest = '"sha256"';
    $request->requestBody->config->insecureSsl = '"0"';
    $request->requestBody->config->secret = '"********"';
    $request->requestBody->config->token = '"abc"';
    $request->requestBody->config->url = 'https://example.com/webhook';
    $request->requestBody->events = [
        'sed',
        'odio',
    ];
    $request->requestBody->name = 'Rene Ritchie';
    $request->owner = 'quidem';
    $request->repo = 'itaque';

    $response = $sdk->repos->reposCreateWebhook($request);

    if ($response->hook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeclineInvitationForAuthenticatedUser

Decline a repository invitation

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/collaborators/invitations#decline-a-repository-invitation>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeclineInvitationForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeclineInvitationForAuthenticatedUserRequest();
    $request->invitationId = 389548;

    $response = $sdk->repos->reposDeclineInvitationForAuthenticatedUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDelete

Deleting a repository requires admin access. If OAuth is used, the `delete_repo` scope is required.

If an organization owner has configured the organization to prevent members from deleting organization-owned
repositories, you will get a `403 Forbidden` response.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#delete-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteRequest();
    $request->owner = 'unde';
    $request->repo = 'modi';

    $response = $sdk->repos->reposDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Disables the ability to restrict who can push to this branch.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#delete-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteAccessRestrictionsRequest();
    $request->branch = 'perspiciatis';
    $request->owner = 'hic';
    $request->repo = 'cum';

    $response = $sdk->repos->reposDeleteAccessRestrictions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteAdminBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#delete-admin-branch-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteAdminBranchProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteAdminBranchProtectionRequest();
    $request->branch = 'aspernatur';
    $request->owner = 'libero';
    $request->repo = 'nam';

    $response = $sdk->repos->reposDeleteAdminBranchProtection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteAnEnvironment

You must authenticate using an access token with the repo scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/deployments/environments#delete-an-environment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteAnEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteAnEnvironmentRequest();
    $request->environmentName = 'incidunt';
    $request->owner = 'recusandae';
    $request->repo = 'quod';

    $response = $sdk->repos->reposDeleteAnEnvironment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteAutolink

This deletes a single autolink reference by ID that was configured for the given repository.

Information about autolinks are only available to repository administrators.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/repos/autolinks#delete-an-autolink-reference-from-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteAutolinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteAutolinkRequest();
    $request->autolinkId = 664666;
    $request->owner = 'saepe';
    $request->repo = 'autem';

    $response = $sdk->repos->reposDeleteAutolink($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#delete-branch-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteBranchProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteBranchProtectionRequest();
    $request->branch = 'quo';
    $request->owner = 'nesciunt';
    $request->repo = 'illum';

    $response = $sdk->repos->reposDeleteBranchProtection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteCommitComment

Delete a commit comment

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/commits/comments#delete-a-commit-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteCommitCommentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteCommitCommentRequest();
    $request->commentId = 367475;
    $request->owner = 'illum';
    $request->repo = 'facilis';

    $response = $sdk->repos->reposDeleteCommitComment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteCommitSignatureProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#delete-commit-signature-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteCommitSignatureProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteCommitSignatureProtectionRequest();
    $request->branch = 'non';
    $request->owner = 'mollitia';
    $request->repo = 'assumenda';

    $response = $sdk->repos->reposDeleteCommitSignatureProtection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteDeployKey

Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/deploy-keys#delete-a-deploy-key>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteDeployKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteDeployKeyRequest();
    $request->keyId = 927977;
    $request->owner = 'distinctio';
    $request->repo = 'pariatur';

    $response = $sdk->repos->reposDeleteDeployKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteDeployment

If the repository only has one deployment, you can delete the deployment regardless of its status. If the repository has more than one deployment, you can only delete inactive deployments. This ensures that repositories with multiple deployments will always have an active deployment. Anyone with `repo` or `repo_deployment` scopes can delete a deployment.

To set a deployment as inactive, you must:

*   Create a new deployment that is active so that the system has a record of the current state, then delete the previously active deployment.
*   Mark the active deployment as inactive by adding any non-successful deployment status.

For more information, see "[Create a deployment](https://docs.github.com/enterprise-server@3.5/rest/deployments/deployments/#create-a-deployment)" and "[Create a deployment status](https://docs.github.com/enterprise-server@3.5/rest/deployments/deployment-statuses#create-a-deployment-status)."

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/deployments/deployments#delete-a-deployment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteDeploymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteDeploymentRequest();
    $request->deploymentId = 323365;
    $request->owner = 'facere';
    $request->repo = 'laborum';

    $response = $sdk->repos->reposDeleteDeployment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteDeploymentBranchPolicy

Deletes a deployment branch policy for an environment.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/deployments/branch-policies#delete-deployment-branch-policy>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteDeploymentBranchPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteDeploymentBranchPolicyRequest();
    $request->branchPolicyId = 911451;
    $request->environmentName = 'laborum';
    $request->owner = 'incidunt';
    $request->repo = 'maxime';

    $response = $sdk->repos->reposDeleteDeploymentBranchPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteFile

Deletes a file in a repository.

You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author.

The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.

You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.

**Note:** If you use this endpoint and the "[Create or update file contents](https://docs.github.com/enterprise-server@3.5/rest/reference/repos/#create-or-update-file-contents)" endpoint in parallel, the concurrent requests will conflict and you will receive errors. You must use these endpoints serially instead.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#delete-a-file>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteFileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteFileRequestBodyAuthor;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteFileRequestBodyCommitter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteFileRequest();
    $request->requestBody = new ReposDeleteFileRequestBody();
    $request->requestBody->author = new ReposDeleteFileRequestBodyAuthor();
    $request->requestBody->author->email = 'Aaliyah_Hoeger@yahoo.com';
    $request->requestBody->author->name = 'Ernesto Mayert';
    $request->requestBody->branch = 'perferendis';
    $request->requestBody->committer = new ReposDeleteFileRequestBodyCommitter();
    $request->requestBody->committer->email = 'Green75@gmail.com';
    $request->requestBody->committer->name = 'Gordon Towne';
    $request->requestBody->message = 'error';
    $request->requestBody->sha = 'mollitia';
    $request->owner = 'magnam';
    $request->path = 'nostrum';
    $request->repo = 'esse';

    $response = $sdk->repos->reposDeleteFile($request);

    if ($response->fileCommit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteInvitation

Delete a repository invitation

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/collaborators/invitations#delete-a-repository-invitation>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteInvitationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteInvitationRequest();
    $request->invitationId = 548849;
    $request->owner = 'fuga';
    $request->repo = 'facere';

    $response = $sdk->repos->reposDeleteInvitation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeletePagesSite

Deletes a GitHub Enterprise Server Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages).

To use this endpoint, you must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission. A token with the `repo` scope or Pages write permission is required. GitHub Apps must have the `administration:write` and `pages:write` permissions.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/pages#delete-a-github-pages-site>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeletePagesSiteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeletePagesSiteRequest();
    $request->owner = 'impedit';
    $request->repo = 'quasi';

    $response = $sdk->repos->reposDeletePagesSite($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeletePullRequestReviewProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#delete-pull-request-review-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeletePullRequestReviewProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeletePullRequestReviewProtectionRequest();
    $request->branch = 'deserunt';
    $request->owner = 'quod';
    $request->repo = 'laboriosam';

    $response = $sdk->repos->reposDeletePullRequestReviewProtection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteRelease

Users with push access to the repository can delete a release.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#delete-a-release>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteReleaseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteReleaseRequest();
    $request->owner = 'doloremque';
    $request->releaseId = 31574;
    $request->repo = 'facere';

    $response = $sdk->repos->reposDeleteRelease($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteReleaseAsset

Delete a release asset

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#delete-a-release-asset>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteReleaseAssetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteReleaseAssetRequest();
    $request->assetId = 901008;
    $request->owner = 'maxime';
    $request->repo = 'consequatur';

    $response = $sdk->repos->reposDeleteReleaseAsset($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteTagProtection

This deletes a tag protection state for a repository.
This endpoint is only available to repository administrators.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#delete-tag-protection-state-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteTagProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteTagProtectionRequest();
    $request->owner = 'eaque';
    $request->repo = 'architecto';
    $request->tagProtectionId = 627161;

    $response = $sdk->repos->reposDeleteTagProtection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteWebhook

Delete a repository webhook

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/webhooks/repos#delete-a-repository-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteWebhookRequest();
    $request->hookId = 783274;
    $request->owner = 'blanditiis';
    $request->repo = 'quae';

    $response = $sdk->repos->reposDeleteWebhook($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDisableLfsForRepo

Disables Git LFS for a repository. Access tokens must have the `admin:enterprise` scope.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#disable-git-lfs-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDisableLfsForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDisableLfsForRepoRequest();
    $request->owner = 'magni';
    $request->repo = 'officiis';

    $response = $sdk->repos->reposDisableLfsForRepo($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDownloadTarballArchive

Gets a redirect URL to download a tar archive for a repository. If you omit `:ref`, the repository’s default branch (usually
`main`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
the `Location` header to make a second `GET` request.
**Note**: For private repositories, these links are temporary and expire after five minutes.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#download-a-repository-archive>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDownloadTarballArchiveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDownloadTarballArchiveRequest();
    $request->owner = 'sed';
    $request->ref = 'necessitatibus';
    $request->repo = 'impedit';

    $response = $sdk->repos->reposDownloadTarballArchive($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDownloadZipballArchive

Gets a redirect URL to download a zip archive for a repository. If you omit `:ref`, the repository’s default branch (usually
`main`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
the `Location` header to make a second `GET` request.

**Note**: For private repositories, these links are temporary and expire after five minutes. If the repository is empty, you will receive a 404 when you follow the redirect.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#download-a-repository-archive>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDownloadZipballArchiveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDownloadZipballArchiveRequest();
    $request->owner = 'ipsa';
    $request->ref = 'excepturi';
    $request->repo = 'a';

    $response = $sdk->repos->reposDownloadZipballArchive($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposEnableLfsForRepo

Enables Git LFS for a repository. Access tokens must have the `admin:enterprise` scope.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#enable-git-lfs-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposEnableLfsForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposEnableLfsForRepoRequest();
    $request->owner = 'maiores';
    $request->repo = 'laudantium';

    $response = $sdk->repos->reposEnableLfsForRepo($request);

    if ($response->reposEnableLfsForRepo202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGenerateReleaseNotes

Generate a name and body describing a [release](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#releases). The body content will be markdown formatted and contain information like the changes since last release and users who contributed. The generated release notes are not saved anywhere. They are intended to be generated and used when creating a new release.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#generate-release-notes>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGenerateReleaseNotesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposGenerateReleaseNotesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGenerateReleaseNotesRequest();
    $request->requestBody = new ReposGenerateReleaseNotesRequestBody();
    $request->requestBody->configurationFilePath = 'maiores';
    $request->requestBody->previousTagName = 'alias';
    $request->requestBody->tagName = 'asperiores';
    $request->requestBody->targetCommitish = 'rem';
    $request->owner = 'dicta';
    $request->repo = 'suscipit';

    $response = $sdk->repos->reposGenerateReleaseNotes($request);

    if ($response->releaseNotesContent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGet

The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network.

**Note:** In order to see the `security_and_analysis` block for a repository you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/enterprise-server@3.5/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#get-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetRequest();
    $request->owner = 'earum';
    $request->repo = 'doloribus';

    $response = $sdk->repos->reposGet($request);

    if ($response->fullRepository !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists who has access to this protected branch.

**Note**: Users, apps, and teams `restrictions` are only available for organization-owned repositories.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#get-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetAccessRestrictionsRequest();
    $request->branch = 'velit';
    $request->owner = 'eius';
    $request->repo = 'esse';

    $response = $sdk->repos->reposGetAccessRestrictions($request);

    if ($response->branchRestrictionPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetAdminBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#get-admin-branch-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetAdminBranchProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetAdminBranchProtectionRequest();
    $request->branch = 'in';
    $request->owner = 'eligendi';
    $request->repo = 'quasi';

    $response = $sdk->repos->reposGetAdminBranchProtection($request);

    if ($response->protectedBranchAdminEnforced !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetAllEnvironments

Lists the environments for a repository.

Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/deployments/environments#list-environments>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetAllEnvironmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetAllEnvironmentsRequest();
    $request->owner = 'neque';
    $request->page = 876649;
    $request->perPage = 566312;
    $request->repo = 'accusantium';

    $response = $sdk->repos->reposGetAllEnvironments($request);

    if ($response->reposGetAllEnvironments200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetAllStatusCheckContexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#get-all-status-check-contexts>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetAllStatusCheckContextsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetAllStatusCheckContextsRequest();
    $request->branch = 'qui';
    $request->owner = 'impedit';
    $request->repo = 'beatae';

    $response = $sdk->repos->reposGetAllStatusCheckContexts($request);

    if ($response->reposGetAllStatusCheckContexts200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetAllTopics

Get all repository topics

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#get-all-repository-topics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetAllTopicsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetAllTopicsRequest();
    $request->owner = 'incidunt';
    $request->page = 116558;
    $request->perPage = 139133;
    $request->repo = 'corporis';

    $response = $sdk->repos->reposGetAllTopics($request);

    if ($response->topic !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetAppsWithAccessToProtectedBranch

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the GitHub Apps that have push access to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#list-apps-with-access-to-the-protected-branch>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetAppsWithAccessToProtectedBranchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetAppsWithAccessToProtectedBranchRequest();
    $request->branch = 'rerum';
    $request->owner = 'alias';
    $request->repo = 'error';

    $response = $sdk->repos->reposGetAppsWithAccessToProtectedBranch($request);

    if ($response->integrations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetAutolink

This returns a single autolink reference by ID that was configured for the given repository.

Information about autolinks are only available to repository administrators.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/repos/autolinks#get-an-autolink-reference-of-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetAutolinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetAutolinkRequest();
    $request->autolinkId = 424854;
    $request->owner = 'accusantium';
    $request->repo = 'id';

    $response = $sdk->repos->reposGetAutolink($request);

    if ($response->autolink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetBranch

Get a branch

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branches#get-a-branch>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetBranchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetBranchRequest();
    $request->branch = 'laboriosam';
    $request->owner = 'ex';
    $request->repo = 'quas';

    $response = $sdk->repos->reposGetBranch($request);

    if ($response->branchWithProtection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#get-branch-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetBranchProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetBranchProtectionRequest();
    $request->branch = 'veritatis';
    $request->owner = 'ullam';
    $request->repo = 'quae';

    $response = $sdk->repos->reposGetBranchProtection($request);

    if ($response->branchProtection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetCodeFrequencyStats

Returns a weekly aggregate of the number of additions and deletions pushed to a repository.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/metrics/statistics#get-the-weekly-commit-activity>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetCodeFrequencyStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetCodeFrequencyStatsRequest();
    $request->owner = 'similique';
    $request->repo = 'incidunt';

    $response = $sdk->repos->reposGetCodeFrequencyStats($request);

    if ($response->codeFrequencyStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetCollaboratorPermissionLevel

Checks the repository permission of a collaborator. The possible repository permissions are `admin`, `write`, `read`, and `none`.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/collaborators/collaborators#get-repository-permissions-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetCollaboratorPermissionLevelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetCollaboratorPermissionLevelRequest();
    $request->owner = 'quam';
    $request->repo = 'magni';
    $request->username = 'Lura.Wintheiser';

    $response = $sdk->repos->reposGetCollaboratorPermissionLevel($request);

    if ($response->repositoryCollaboratorPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetCombinedStatusForRef

Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.


Additionally, a combined `state` is returned. The `state` is one of:

*   **failure** if any of the contexts report as `error` or `failure`
*   **pending** if there are no statuses or a context is `pending`
*   **success** if the latest status for all contexts is `success`

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/commits/statuses#get-the-combined-status-for-a-specific-reference>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetCombinedStatusForRefRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetCombinedStatusForRefRequest();
    $request->owner = 'nesciunt';
    $request->page = 805463;
    $request->perPage = 337841;
    $request->ref = 'cupiditate';
    $request->repo = 'aliquam';

    $response = $sdk->repos->reposGetCombinedStatusForRef($request);

    if ($response->combinedCommitStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetCommit

Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.

**Note:** If there are more than 300 files in the commit diff, the response will include pagination link headers for the remaining files, up to a limit of 3000 files. Each page contains the static commit information, and the only changes are to the file listing.

You can pass the appropriate [media type](https://docs.github.com/enterprise-server@3.5/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to  fetch `diff` and `patch` formats. Diffs with binary data will have no `patch` property.

To return only the SHA-1 hash of the commit reference, you can provide the `sha` custom [media type](https://docs.github.com/enterprise-server@3.5/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) in the `Accept` header. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name | Type | Description |
| ---- | ---- | ----------- |
| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
| `signature` | `string` | The signature that was extracted from the commit. |
| `payload` | `string` | The value that was signed. |

These are the possible values for `reason` in the `verification` object:

| Value | Description |
| ----- | ----------- |
| `expired_key` | The key that made the signature is expired. |
| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
| `gpgverify_error` | There was an error communicating with the signature verification service. |
| `gpgverify_unavailable` | The signature verification service is currently unavailable. |
| `unsigned` | The object does not include a signature. |
| `unknown_signature_type` | A non-PGP signature was found in the commit. |
| `no_user` | No user was associated with the `committer` email address in the commit. |
| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
| `unknown_key` | The key that made the signature has not been registered with any user's account. |
| `malformed_signature` | There was an error parsing the signature. |
| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
| `valid` | None of the above errors applied, so the signature is considered to be verified. |

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/commits/commits#get-a-commit>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetCommitRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetCommitRequest();
    $request->owner = 'excepturi';
    $request->page = 980410;
    $request->perPage = 512081;
    $request->ref = 'velit';
    $request->repo = 'reiciendis';

    $response = $sdk->repos->reposGetCommit($request);

    if ($response->commit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetCommitActivityStats

Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/metrics/statistics#get-the-last-year-of-commit-activity>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetCommitActivityStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetCommitActivityStatsRequest();
    $request->owner = 'amet';
    $request->repo = 'nemo';

    $response = $sdk->repos->reposGetCommitActivityStats($request);

    if ($response->commitActivities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetCommitComment

Get a commit comment

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/commits/comments#get-a-commit-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetCommitCommentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetCommitCommentRequest();
    $request->commentId = 57470;
    $request->owner = 'quisquam';
    $request->repo = 'tenetur';

    $response = $sdk->repos->reposGetCommitComment($request);

    if ($response->commitComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetCommitSignatureProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://docs.github.com/enterprise-server@3.5/articles/signing-commits-with-gpg) in GitHub Help.

**Note**: You must enable branch protection to require signed commits.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#get-commit-signature-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetCommitSignatureProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetCommitSignatureProtectionRequest();
    $request->branch = 'quas';
    $request->owner = 'molestiae';
    $request->repo = 'aliquid';

    $response = $sdk->repos->reposGetCommitSignatureProtection($request);

    if ($response->protectedBranchAdminEnforced !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetContent

Gets the contents of a file or directory in a repository. Specify the file path or directory in `:path`. If you omit
`:path`, you will receive the contents of the repository's root directory. See the description below regarding what the API response includes for directories. 

Files and symlinks support [a custom media type](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#custom-media-types) for
retrieving the raw content or rendered HTML (when supported). All content types support [a custom media
type](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#custom-media-types) to ensure the content is returned in a consistent
object format.

**Notes**:
*   To get a repository's contents recursively, you can [recursively get the tree](https://docs.github.com/enterprise-server@3.5/rest/reference/git#trees).
*   This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees
API](https://docs.github.com/enterprise-server@3.5/rest/reference/git#get-a-tree).
 *  Download URLs expire and are meant to be used just once. To ensure the download URL does not expire, please use the contents API to obtain a fresh download URL for each download. 
*   This API supports files up to 1 megabyte in size.

#### If the content is a directory
The response will be an array of objects, one object for each item in the directory.
When listing the contents of a directory, submodules have their "type" specified as "file". Logically, the value
_should_ be "submodule". This behavior exists in API v3 [for backwards compatibility purposes](https://git.io/v1YCW).
In the next major version of the API, the type will be returned as "submodule".

#### If the content is a symlink 
If the requested `:path` points to a symlink, and the symlink's target is a normal file in the repository, then the
API responds with the content of the file (in the format shown in the example. Otherwise, the API responds with an object 
describing the symlink itself.

#### If the content is a submodule
The `submodule_git_url` identifies the location of the submodule repository, and the `sha` identifies a specific
commit within the submodule repository. Git uses the given URL when cloning the submodule repository, and checks out
the submodule at that specific commit.

If the submodule repository is not hosted on github.com, the Git URLs (`git_url` and `_links["git"]`) and the
github.com URLs (`html_url` and `_links["html"]`) will have null values.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#get-repository-content>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetContentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetContentRequest();
    $request->owner = 'asperiores';
    $request->path = 'a';
    $request->ref = 'nobis';
    $request->repo = 'perspiciatis';

    $response = $sdk->repos->reposGetContent($request);

    if ($response->reposGetContent200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetContributorsStats


Returns the `total` number of commits authored by the contributor. In addition, the response includes a Weekly Hash (`weeks` array) with the following information:

*   `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
*   `a` - Number of additions
*   `d` - Number of deletions
*   `c` - Number of commits

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/metrics/statistics#get-all-contributor-commit-activity>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetContributorsStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetContributorsStatsRequest();
    $request->owner = 'accusantium';
    $request->repo = 'dicta';

    $response = $sdk->repos->reposGetContributorsStats($request);

    if ($response->contributorActivities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetDeployKey

Get a deploy key

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/deploy-keys#get-a-deploy-key>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetDeployKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetDeployKeyRequest();
    $request->keyId = 795546;
    $request->owner = 'commodi';
    $request->repo = 'eveniet';

    $response = $sdk->repos->reposGetDeployKey($request);

    if ($response->deployKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetDeployment

Get a deployment

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/deployments/deployments#get-a-deployment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetDeploymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetDeploymentRequest();
    $request->deploymentId = 781582;
    $request->owner = 'tempore';
    $request->repo = 'quidem';

    $response = $sdk->repos->reposGetDeployment($request);

    if ($response->deployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetDeploymentBranchPolicy

Gets a deployment branch policy for an environment.

Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/deployments/branch-policies#get-deployment-branch-policy>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetDeploymentBranchPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetDeploymentBranchPolicyRequest();
    $request->branchPolicyId = 265930;
    $request->environmentName = 'voluptates';
    $request->owner = 'fugit';
    $request->repo = 'eius';

    $response = $sdk->repos->reposGetDeploymentBranchPolicy($request);

    if ($response->deploymentBranchPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetDeploymentStatus

Users with pull access can view a deployment status for a deployment:

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/deployments/statuses#get-a-deployment-status>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetDeploymentStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetDeploymentStatusRequest();
    $request->deploymentId = 194058;
    $request->owner = 'eligendi';
    $request->repo = 'asperiores';
    $request->statusId = 459875;

    $response = $sdk->repos->reposGetDeploymentStatus($request);

    if ($response->deploymentStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetEnvironment

**Note:** To get information about name patterns that branches must match in order to deploy to this environment, see "[Get a deployment branch policy](/rest/deployments/branch-policies#get-a-deployment-branch-policy)."

Anyone with read access to the repository can use this endpoint. If the
repository is private, you must use an access token with the `repo` scope. GitHub
Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/deployments/environments#get-an-environment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetEnvironmentRequest();
    $request->environmentName = 'blanditiis';
    $request->owner = 'sint';
    $request->repo = 'repellat';

    $response = $sdk->repos->reposGetEnvironment($request);

    if ($response->environment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetLatestPagesBuild

Get latest Pages build

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/pages#get-latest-pages-build>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetLatestPagesBuildRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetLatestPagesBuildRequest();
    $request->owner = 'a';
    $request->repo = 'animi';

    $response = $sdk->repos->reposGetLatestPagesBuild($request);

    if ($response->pageBuild !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetLatestRelease

View the latest published full release for the repository.

The latest release is the most recent non-prerelease, non-draft release, sorted by the `created_at` attribute. The `created_at` attribute is the date of the commit used for the release, and not the date when the release was drafted or published.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#get-the-latest-release>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetLatestReleaseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetLatestReleaseRequest();
    $request->owner = 'maiores';
    $request->repo = 'itaque';

    $response = $sdk->repos->reposGetLatestRelease($request);

    if ($response->release !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetPages

Get a GitHub Enterprise Server Pages site

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/pages#get-a-github-pages-site>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetPagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetPagesRequest();
    $request->owner = 'nulla';
    $request->repo = 'deserunt';

    $response = $sdk->repos->reposGetPages($request);

    if ($response->page !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetPagesBuild

Get GitHub Enterprise Server Pages build

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/pages#get-github-pages-build>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetPagesBuildRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetPagesBuildRequest();
    $request->buildId = 359097;
    $request->owner = 'velit';
    $request->repo = 'officiis';

    $response = $sdk->repos->reposGetPagesBuild($request);

    if ($response->pageBuild !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetParticipationStats

Returns the total commit counts for the `owner` and total commit counts in `all`. `all` is everyone combined, including the `owner` in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract `owner` from `all`.

The array order is oldest week (index 0) to most recent week.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/metrics/statistics#get-the-weekly-commit-count>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetParticipationStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetParticipationStatsRequest();
    $request->owner = 'enim';
    $request->repo = 'officia';

    $response = $sdk->repos->reposGetParticipationStats($request);

    if ($response->participationStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetPullRequestReviewProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#get-pull-request-review-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetPullRequestReviewProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetPullRequestReviewProtectionRequest();
    $request->branch = 'saepe';
    $request->owner = 'eum';
    $request->repo = 'repudiandae';

    $response = $sdk->repos->reposGetPullRequestReviewProtection($request);

    if ($response->protectedBranchPullRequestReview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetPunchCardStats

Each array contains the day number, hour number, and number of commits:

*   `0-6`: Sunday - Saturday
*   `0-23`: Hour of day
*   Number of commits

For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/metrics/statistics#get-the-hourly-commit-count-for-each-day>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetPunchCardStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetPunchCardStatsRequest();
    $request->owner = 'accusantium';
    $request->repo = 'officia';

    $response = $sdk->repos->reposGetPunchCardStats($request);

    if ($response->codeFrequencyStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetReadme

Gets the preferred README for a repository.

READMEs support [custom media types](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#get-a-repository-readme>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetReadmeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetReadmeRequest();
    $request->owner = 'impedit';
    $request->ref = 'quasi';
    $request->repo = 'blanditiis';

    $response = $sdk->repos->reposGetReadme($request);

    if ($response->contentFile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetReadmeInDirectory

Gets the README from a repository directory.

READMEs support [custom media types](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#get-a-repository-directory-readme>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetReadmeInDirectoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetReadmeInDirectoryRequest();
    $request->dir = 'eius';
    $request->owner = 'quisquam';
    $request->ref = 'eos';
    $request->repo = 'nobis';

    $response = $sdk->repos->reposGetReadmeInDirectory($request);

    if ($response->contentFile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetRelease

**Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://docs.github.com/enterprise-server@3.5/rest/overview/resources-in-the-rest-api#hypermedia).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#get-a-release>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetReleaseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetReleaseRequest();
    $request->owner = 'natus';
    $request->releaseId = 793568;
    $request->repo = 'quia';

    $response = $sdk->repos->reposGetRelease($request);

    if ($response->release !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetReleaseAsset

To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://docs.github.com/enterprise-server@3.5/rest/overview/media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#get-a-release-asset>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetReleaseAssetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetReleaseAssetRequest();
    $request->assetId = 300651;
    $request->owner = 'reprehenderit';
    $request->repo = 'quod';

    $response = $sdk->repos->reposGetReleaseAsset($request);

    if ($response->releaseAsset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetReleaseByTag

Get a published release with the specified tag.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#get-a-release-by-tag-name>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetReleaseByTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetReleaseByTagRequest();
    $request->owner = 'quos';
    $request->repo = 'corrupti';
    $request->tag = 'amet';

    $response = $sdk->repos->reposGetReleaseByTag($request);

    if ($response->release !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetStatusChecksProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#get-status-checks-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetStatusChecksProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetStatusChecksProtectionRequest();
    $request->branch = 'molestiae';
    $request->owner = 'amet';
    $request->repo = 'laborum';

    $response = $sdk->repos->reposGetStatusChecksProtection($request);

    if ($response->statusCheckPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetTeamsWithAccessToProtectedBranch

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the teams who have push access to this branch. The list includes child teams.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#list-teams-with-access-to-the-protected-branch>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetTeamsWithAccessToProtectedBranchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetTeamsWithAccessToProtectedBranchRequest();
    $request->branch = 'modi';
    $request->owner = 'perferendis';
    $request->repo = 'necessitatibus';

    $response = $sdk->repos->reposGetTeamsWithAccessToProtectedBranch($request);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetUsersWithAccessToProtectedBranch

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the people who have push access to this branch.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#list-users-with-access-to-the-protected-branch>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetUsersWithAccessToProtectedBranchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetUsersWithAccessToProtectedBranchRequest();
    $request->branch = 'architecto';
    $request->owner = 'molestias';
    $request->repo = 'dolore';

    $response = $sdk->repos->reposGetUsersWithAccessToProtectedBranch($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetWebhook

Returns a webhook configured in a repository. To get only the webhook `config` properties, see "[Get a webhook configuration for a repository](/rest/reference/repos#get-a-webhook-configuration-for-a-repository)."

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/webhooks/repos#get-a-repository-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetWebhookRequest();
    $request->hookId = 125811;
    $request->owner = 'maiores';
    $request->repo = 'neque';

    $response = $sdk->repos->reposGetWebhook($request);

    if ($response->hook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetWebhookConfigForRepo

Returns the webhook configuration for a repository. To get more information about the webhook, including the `active` state and `events`, use "[Get a repository webhook](/rest/reference/orgs#get-a-repository-webhook)."

Access tokens must have the `read:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:read` permission.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/webhooks/repo-config#get-a-webhook-configuration-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetWebhookConfigForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetWebhookConfigForRepoRequest();
    $request->hookId = 139745;
    $request->owner = 'earum';
    $request->repo = 'veniam';

    $response = $sdk->repos->reposGetWebhookConfigForRepo($request);

    if ($response->webhookConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetWebhookDelivery

Returns a delivery for a webhook configured in a repository.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/webhooks/repo-deliveries#get-a-delivery-for-a-repository-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetWebhookDeliveryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetWebhookDeliveryRequest();
    $request->deliveryId = 373106;
    $request->hookId = 51053;
    $request->owner = 'exercitationem';
    $request->repo = 'veniam';

    $response = $sdk->repos->reposGetWebhookDelivery($request);

    if ($response->hookDelivery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListAutolinks

This returns a list of autolinks configured for the given repository.

Information about autolinks are only available to repository administrators.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/repos/autolinks#list-all-autolinks-of-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListAutolinksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListAutolinksRequest();
    $request->owner = 'nihil';
    $request->page = 320326;
    $request->repo = 'nisi';

    $response = $sdk->repos->reposListAutolinks($request);

    if ($response->autolinks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListBranches

List branches

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branches#list-branches>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListBranchesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListBranchesRequest();
    $request->owner = 'tenetur';
    $request->page = 338281;
    $request->perPage = 845154;
    $request->protected = false;
    $request->repo = 'nemo';

    $response = $sdk->repos->reposListBranches($request);

    if ($response->shortBranches !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListBranchesForHeadCommit

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/commits/commits#list-branches-for-head-commit>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListBranchesForHeadCommitRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListBranchesForHeadCommitRequest();
    $request->commitSha = 'suscipit';
    $request->owner = 'pariatur';
    $request->repo = 'sit';

    $response = $sdk->repos->reposListBranchesForHeadCommit($request);

    if ($response->branchShorts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListCacheInfo

Lists the status of each repository cache replica.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#list-repository-cache-replication-status>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListCacheInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListCacheInfoRequest();
    $request->owner = 'quidem';
    $request->page = 831031;
    $request->perPage = 17768;
    $request->repo = 'id';

    $response = $sdk->repos->reposListCacheInfo($request);

    if ($response->reposListCacheInfo200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListCollaborators

For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
Organization members with write, maintain, or admin privileges on the organization-owned repository can use this endpoint.

Team members will include the members of child teams.

You must authenticate using an access token with the `read:org` and `repo` scopes with push access to use this
endpoint. GitHub Apps must have the `members` organization permission and `metadata` repository permission to use this
endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/collaborators/collaborators#list-repository-collaborators>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListCollaboratorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposListCollaboratorsAffiliationEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListCollaboratorsRequest();
    $request->affiliation = ReposListCollaboratorsAffiliationEnum::ALL;
    $request->owner = 'sed';
    $request->page = 823572;
    $request->perPage = 996072;
    $request->repo = 'repudiandae';

    $response = $sdk->repos->reposListCollaborators($request);

    if ($response->collaborators !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListCommentsForCommit

Use the `:commit_sha` to specify the commit that will have its comments listed.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/commits/comments#list-commit-comments>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListCommentsForCommitRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListCommentsForCommitRequest();
    $request->commitSha = 'architecto';
    $request->owner = 'adipisci';
    $request->page = 867115;
    $request->perPage = 688463;
    $request->repo = 'dolore';

    $response = $sdk->repos->reposListCommentsForCommit($request);

    if ($response->commitComments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListCommitCommentsForRepo

Commit Comments use [these custom media types](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#custom-media-types). You can read more about the use of media types in the API [here](https://docs.github.com/enterprise-server@3.5/rest/overview/media-types/).

Comments are ordered by ascending ID.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/commits/comments#list-commit-comments-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListCommitCommentsForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListCommitCommentsForRepoRequest();
    $request->owner = 'voluptatibus';
    $request->page = 435353;
    $request->perPage = 127087;
    $request->repo = 'minus';

    $response = $sdk->repos->reposListCommitCommentsForRepo($request);

    if ($response->commitComments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListCommitStatusesForRef

Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.

This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/commits/statuses#list-commit-statuses-for-a-reference>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListCommitStatusesForRefRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListCommitStatusesForRefRequest();
    $request->owner = 'soluta';
    $request->page = 677509;
    $request->perPage = 242531;
    $request->ref = 'earum';
    $request->repo = 'praesentium';

    $response = $sdk->repos->reposListCommitStatusesForRef($request);

    if ($response->statuses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListCommits

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name | Type | Description |
| ---- | ---- | ----------- |
| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
| `signature` | `string` | The signature that was extracted from the commit. |
| `payload` | `string` | The value that was signed. |

These are the possible values for `reason` in the `verification` object:

| Value | Description |
| ----- | ----------- |
| `expired_key` | The key that made the signature is expired. |
| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
| `gpgverify_error` | There was an error communicating with the signature verification service. |
| `gpgverify_unavailable` | The signature verification service is currently unavailable. |
| `unsigned` | The object does not include a signature. |
| `unknown_signature_type` | A non-PGP signature was found in the commit. |
| `no_user` | No user was associated with the `committer` email address in the commit. |
| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
| `unknown_key` | The key that made the signature has not been registered with any user's account. |
| `malformed_signature` | There was an error parsing the signature. |
| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
| `valid` | None of the above errors applied, so the signature is considered to be verified. |

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/commits/commits#list-commits>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListCommitsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListCommitsRequest();
    $request->author = 'error';
    $request->owner = 'non';
    $request->page = 97810;
    $request->path = 'mollitia';
    $request->perPage = 884361;
    $request->repo = 'harum';
    $request->sha = 'cumque';
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-16T04:00:53.162Z');
    $request->until = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-22T18:35:16.911Z');

    $response = $sdk->repos->reposListCommits($request);

    if ($response->commits !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListContributors

Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API caches contributor data to improve performance.

GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#list-repository-contributors>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListContributorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListContributorsRequest();
    $request->anon = 'deserunt';
    $request->owner = 'aliquid';
    $request->page = 570423;
    $request->perPage = 167435;
    $request->repo = 'tempora';

    $response = $sdk->repos->reposListContributors($request);

    if ($response->contributors !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListDeployKeys

List deploy keys

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/deploy-keys#list-deploy-keys>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListDeployKeysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListDeployKeysRequest();
    $request->owner = 'possimus';
    $request->page = 220824;
    $request->perPage = 700529;
    $request->repo = 'sed';

    $response = $sdk->repos->reposListDeployKeys($request);

    if ($response->deployKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListDeploymentBranchPolicies

Lists the deployment branch policies for an environment.

Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/deployments/branch-policies#list-deployment-branch-policies>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListDeploymentBranchPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListDeploymentBranchPoliciesRequest();
    $request->environmentName = 'accusamus';
    $request->owner = 'optio';
    $request->page = 966576;
    $request->perPage = 792719;
    $request->repo = 'quo';

    $response = $sdk->repos->reposListDeploymentBranchPolicies($request);

    if ($response->reposListDeploymentBranchPolicies200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListDeploymentStatuses

Users with pull access can view deployment statuses for a deployment:

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/deployments/statuses#list-deployment-statuses>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListDeploymentStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListDeploymentStatusesRequest();
    $request->deploymentId = 550338;
    $request->owner = 'asperiores';
    $request->page = 532326;
    $request->perPage = 614770;
    $request->repo = 'corporis';

    $response = $sdk->repos->reposListDeploymentStatuses($request);

    if ($response->deploymentStatuses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListDeployments

Simple filtering of deployments is available via query parameters:

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/deployments/deployments#list-deployments>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListDeploymentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListDeploymentsRequest();
    $request->environment = 'accusantium';
    $request->owner = 'illo';
    $request->page = 14251;
    $request->perPage = 984031;
    $request->ref = 'nostrum';
    $request->repo = 'at';
    $request->sha = 'possimus';
    $request->task = 'neque';

    $response = $sdk->repos->reposListDeployments($request);

    if ($response->deployments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListForAuthenticatedUser

Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#list-repositories-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForAuthenticatedUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForAuthenticatedUserDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForAuthenticatedUserSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForAuthenticatedUserTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForAuthenticatedUserVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListForAuthenticatedUserRequest();
    $request->affiliation = 'pariatur';
    $request->before = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-15T07:16:56.146Z');
    $request->direction = ReposListForAuthenticatedUserDirectionEnum::DESC;
    $request->page = 65121;
    $request->perPage = 552646;
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-01T07:29:12.481Z');
    $request->sort = ReposListForAuthenticatedUserSortEnum::FULL_NAME;
    $request->type = ReposListForAuthenticatedUserTypeEnum::OWNER;
    $request->visibility = ReposListForAuthenticatedUserVisibilityEnum::ALL;

    $response = $sdk->repos->reposListForAuthenticatedUser($request);

    if ($response->repositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListForOrg

Lists repositories for the specified organization.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#list-organization-repositories>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForOrgDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForOrgSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForOrgTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListForOrgRequest();
    $request->direction = ReposListForOrgDirectionEnum::DESC;
    $request->org = 'quas';
    $request->page = 162450;
    $request->perPage = 982445;
    $request->sort = ReposListForOrgSortEnum::CREATED;
    $request->type = ReposListForOrgTypeEnum::PRIVATE;

    $response = $sdk->repos->reposListForOrg($request);

    if ($response->minimalRepositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListForUser

Lists public repositories for the specified user. Note: For GitHub AE, this endpoint will list internal repositories for the specified user.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#list-repositories-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForUserDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForUserSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForUserTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListForUserRequest();
    $request->direction = ReposListForUserDirectionEnum::DESC;
    $request->page = 665872;
    $request->perPage = 221329;
    $request->sort = ReposListForUserSortEnum::UPDATED;
    $request->type = ReposListForUserTypeEnum::ALL;
    $request->username = 'Oda.Leffler';

    $response = $sdk->repos->reposListForUser($request);

    if ($response->minimalRepositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListForks

List forks

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#list-forks>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForksSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListForksRequest();
    $request->owner = 'adipisci';
    $request->page = 927959;
    $request->perPage = 271306;
    $request->repo = 'blanditiis';
    $request->sort = ReposListForksSortEnum::OLDEST;

    $response = $sdk->repos->reposListForks($request);

    if ($response->minimalRepositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListInvitations

When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/collaborators/invitations#list-repository-invitations>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListInvitationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListInvitationsRequest();
    $request->owner = 'sequi';
    $request->page = 532320;
    $request->perPage = 27078;
    $request->repo = 'rerum';

    $response = $sdk->repos->reposListInvitations($request);

    if ($response->repositoryInvitations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListInvitationsForAuthenticatedUser

When authenticating as a user, this endpoint will list all currently open repository invitations for that user.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/collaborators/invitations#list-repository-invitations-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListInvitationsForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListInvitationsForAuthenticatedUserRequest();
    $request->page = 84178;
    $request->perPage = 949280;

    $response = $sdk->repos->reposListInvitationsForAuthenticatedUser($request);

    if ($response->repositoryInvitations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListLanguages

Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#list-repository-languages>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListLanguagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListLanguagesRequest();
    $request->owner = 'autem';
    $request->repo = 'quidem';

    $response = $sdk->repos->reposListLanguages($request);

    if ($response->language !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListPagesBuilds

List GitHub Enterprise Server Pages builds

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/pages#list-github-pages-builds>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListPagesBuildsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListPagesBuildsRequest();
    $request->owner = 'totam';
    $request->page = 781193;
    $request->perPage = 646491;
    $request->repo = 'magni';

    $response = $sdk->repos->reposListPagesBuilds($request);

    if ($response->pageBuilds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListPublic

Lists all public repositories in the order that they were created.

Note:
- For GitHub Enterprise Server, this endpoint will only list repositories available to all users on the enterprise.
- Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@3.5/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of repositories.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#list-public-repositories>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListPublicRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposListPublicVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListPublicRequest();
    $request->since = 471207;
    $request->visibility = ReposListPublicVisibilityEnum::ALL;

    $response = $sdk->repos->reposListPublic($request);

    if ($response->minimalRepositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListPullRequestsAssociatedWithCommit

Lists the merged pull request that introduced the commit to the repository. If the commit is not present in the default branch, will only return open pull requests associated with the commit.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/commits/commits#list-pull-requests-associated-with-a-commit>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListPullRequestsAssociatedWithCommitRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListPullRequestsAssociatedWithCommitRequest();
    $request->commitSha = 'voluptas';
    $request->owner = 'animi';
    $request->page = 413780;
    $request->perPage = 716;
    $request->repo = 'fuga';

    $response = $sdk->repos->reposListPullRequestsAssociatedWithCommit($request);

    if ($response->pullRequestSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListReleaseAssets

List release assets

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#list-release-assets>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListReleaseAssetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListReleaseAssetsRequest();
    $request->owner = 'aut';
    $request->page = 295892;
    $request->perPage = 802734;
    $request->releaseId = 303292;
    $request->repo = 'iste';

    $response = $sdk->repos->reposListReleaseAssets($request);

    if ($response->releaseAssets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListReleases

This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#list-repository-tags).

Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#list-releases>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListReleasesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListReleasesRequest();
    $request->owner = 'ullam';
    $request->page = 755738;
    $request->perPage = 810302;
    $request->repo = 'voluptas';

    $response = $sdk->repos->reposListReleases($request);

    if ($response->releases !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListTagProtection

This returns the tag protection states of a repository.

This information is only available to repository administrators.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#list-tag-protection-state-of-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListTagProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListTagProtectionRequest();
    $request->owner = 'occaecati';
    $request->repo = 'unde';

    $response = $sdk->repos->reposListTagProtection($request);

    if ($response->tagProtections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListTags

List repository tags

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#list-repository-tags>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListTagsRequest();
    $request->owner = 'illo';
    $request->page = 469170;
    $request->perPage = 78246;
    $request->repo = 'libero';

    $response = $sdk->repos->reposListTags($request);

    if ($response->tags !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListTeams

List repository teams

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#list-repository-teams>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListTeamsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListTeamsRequest();
    $request->owner = 'ipsam';
    $request->page = 97659;
    $request->perPage = 766591;
    $request->repo = 'dicta';

    $response = $sdk->repos->reposListTeams($request);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListWebhookDeliveries

Returns a list of webhook deliveries for a webhook configured in a repository.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/webhooks/repo-deliveries#list-deliveries-for-a-repository-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListWebhookDeliveriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListWebhookDeliveriesRequest();
    $request->cursor = 'harum';
    $request->hookId = 813224;
    $request->owner = 'facilis';
    $request->perPage = 105372;
    $request->redelivery = false;
    $request->repo = 'cumque';

    $response = $sdk->repos->reposListWebhookDeliveries($request);

    if ($response->hookDeliveryItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListWebhooks

Lists webhooks for a repository. `last response` may return null if there have not been any deliveries within 30 days.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/webhooks/repos#list-repository-webhooks>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListWebhooksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListWebhooksRequest();
    $request->owner = 'delectus';
    $request->page = 287152;
    $request->perPage = 712640;
    $request->repo = 'corrupti';

    $response = $sdk->repos->reposListWebhooks($request);

    if ($response->hooks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposMerge

Merge a branch

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branches#merge-a-branch>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposMergeRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposMergeRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposMergeRequest();
    $request->requestBody = new ReposMergeRequestBody();
    $request->requestBody->base = 'rem';
    $request->requestBody->commitMessage = 'atque';
    $request->requestBody->head = 'officiis';
    $request->owner = 'cum';
    $request->repo = 'pariatur';

    $response = $sdk->repos->reposMerge($request);

    if ($response->commit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposMergeUpstream

Sync a branch of a forked repository to keep it up-to-date with the upstream repository.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branches#sync-a-fork-branch-with-the-upstream-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposMergeUpstreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposMergeUpstreamRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposMergeUpstreamRequest();
    $request->requestBody = new ReposMergeUpstreamRequestBody();
    $request->requestBody->branch = 'sapiente';
    $request->owner = 'quo';
    $request->repo = 'incidunt';

    $response = $sdk->repos->reposMergeUpstream($request);

    if ($response->mergedUpstream !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposPingWebhook

This will trigger a [ping event](https://docs.github.com/enterprise-server@3.5/webhooks/#ping-event) to be sent to the hook.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/webhooks/repos#ping-a-repository-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposPingWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposPingWebhookRequest();
    $request->hookId = 797293;
    $request->owner = 'minus';
    $request->repo = 'porro';

    $response = $sdk->repos->reposPingWebhook($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposRedeliverWebhookDelivery

Redeliver a webhook delivery for a webhook configured in a repository.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/webhooks/repo-deliveries#redeliver-a-delivery-for-a-repository-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposRedeliverWebhookDeliveryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposRedeliverWebhookDeliveryRequest();
    $request->deliveryId = 659971;
    $request->hookId = 569706;
    $request->owner = 'occaecati';
    $request->repo = 'libero';

    $response = $sdk->repos->reposRedeliverWebhookDelivery($request);

    if ($response->reposRedeliverWebhookDelivery202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposRemoveAppAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of an app to push to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#remove-app-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposRemoveAppAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposRemoveAppAccessRestrictionsRequest();
    $request->requestBody = [
        'hic',
        'maxime',
    ];
    $request->branch = 'accusantium';
    $request->owner = 'soluta';
    $request->repo = 'fugit';

    $response = $sdk->repos->reposRemoveAppAccessRestrictions($request);

    if ($response->integrations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposRemoveCollaborator

Remove a repository collaborator

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/collaborators/collaborators#remove-a-repository-collaborator>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposRemoveCollaboratorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposRemoveCollaboratorRequest();
    $request->owner = 'pariatur';
    $request->repo = 'eligendi';
    $request->username = 'Timmy51';

    $response = $sdk->repos->reposRemoveCollaborator($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposRemoveStatusCheckContexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#remove-status-check-contexts>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposRemoveStatusCheckContextsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposRemoveStatusCheckContextsRequest();
    $request->requestBody = new ReposRemoveStatusCheckContextsRequestBody1();
    $request->requestBody->contexts = [
        'voluptates',
    ];
    $request->branch = 'tempora';
    $request->owner = 'magni';
    $request->repo = 'rerum';

    $response = $sdk->repos->reposRemoveStatusCheckContexts($request);

    if ($response->reposRemoveStatusCheckContexts200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposRemoveStatusCheckProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#remove-status-check-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposRemoveStatusCheckProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposRemoveStatusCheckProtectionRequest();
    $request->branch = 'doloremque';
    $request->owner = 'voluptatem';
    $request->repo = 'eum';

    $response = $sdk->repos->reposRemoveStatusCheckProtection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposRemoveTeamAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of a team to push to this branch. You can also remove push access for child teams.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#remove-team-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposRemoveTeamAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposRemoveTeamAccessRestrictionsRequest();
    $request->requestBody = [
        'reprehenderit',
        'voluptatum',
    ];
    $request->branch = 'blanditiis';
    $request->owner = 'nihil';
    $request->repo = 'atque';

    $response = $sdk->repos->reposRemoveTeamAccessRestrictions($request);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposRemoveUserAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of a user to push to this branch.

| Type    | Description                                                                                                                                   |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames of the people who should no longer have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#remove-user-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposRemoveUserAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposRemoveUserAccessRestrictionsRequest();
    $request->requestBody = [
        'atque',
        'nostrum',
        'atque',
    ];
    $request->branch = 'architecto';
    $request->owner = 'est';
    $request->repo = 'enim';

    $response = $sdk->repos->reposRemoveUserAccessRestrictions($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposRenameBranch

Renames a branch in a repository.

**Note:** Although the API responds immediately, the branch rename process might take some extra time to complete in the background. You won't be able to push to the old branch name while the rename process is in progress. For more information, see "[Renaming a branch](https://docs.github.com/enterprise-server@3.5/github/administering-a-repository/renaming-a-branch)".

The permissions required to use this endpoint depends on whether you are renaming the default branch.

To rename a non-default branch:

* Users must have push access.
* GitHub Apps must have the `contents:write` repository permission.

To rename the default branch:

* Users must have admin or owner permissions.
* GitHub Apps must have the `administration:write` repository permission.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branches#rename-a-branch>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposRenameBranchRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposRenameBranchRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposRenameBranchRequest();
    $request->requestBody = new ReposRenameBranchRequestBody();
    $request->requestBody->newName = 'rem';
    $request->branch = 'magni';
    $request->owner = 'quae';
    $request->repo = 'quas';

    $response = $sdk->repos->reposRenameBranch($request);

    if ($response->branchWithProtection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposReplaceAllTopics

Replace all repository topics

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#replace-all-repository-topics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposReplaceAllTopicsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposReplaceAllTopicsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposReplaceAllTopicsRequest();
    $request->requestBody = new ReposReplaceAllTopicsRequestBody();
    $request->requestBody->names = [
        'enim',
        'labore',
        'sapiente',
        'saepe',
    ];
    $request->owner = 'delectus';
    $request->repo = 'officia';

    $response = $sdk->repos->reposReplaceAllTopics($request);

    if ($response->topic !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposRequestPagesBuild

You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.

Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/pages#request-a-github-pages-build>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposRequestPagesBuildRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposRequestPagesBuildRequest();
    $request->owner = 'natus';
    $request->repo = 'cumque';

    $response = $sdk->repos->reposRequestPagesBuild($request);

    if ($response->pageBuildStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposSetAdminBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#set-admin-branch-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposSetAdminBranchProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposSetAdminBranchProtectionRequest();
    $request->branch = 'natus';
    $request->owner = 'quaerat';
    $request->repo = 'doloribus';

    $response = $sdk->repos->reposSetAdminBranchProtection($request);

    if ($response->protectedBranchAdminEnforced !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposSetAppAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of apps that have push access to this branch. This removes all apps that previously had push access and grants push access to the new list of apps. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#set-app-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposSetAppAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposSetAppAccessRestrictionsRequest();
    $request->requestBody = new ReposSetAppAccessRestrictionsRequestBody1();
    $request->requestBody->apps = [
        'mollitia',
        'cumque',
        'quis',
        'enim',
    ];
    $request->branch = 'eum';
    $request->owner = 'nemo';
    $request->repo = 'illum';

    $response = $sdk->repos->reposSetAppAccessRestrictions($request);

    if ($response->integrations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposSetStatusCheckContexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#set-status-check-contexts>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposSetStatusCheckContextsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposSetStatusCheckContextsRequest();
    $request->requestBody = new ReposSetStatusCheckContextsRequestBody1();
    $request->requestBody->contexts = [
        'odio',
    ];
    $request->branch = 'minus';
    $request->owner = 'asperiores';
    $request->repo = 'recusandae';

    $response = $sdk->repos->reposSetStatusCheckContexts($request);

    if ($response->reposSetStatusCheckContexts200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposSetTeamAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. Team restrictions include child teams.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#set-team-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposSetTeamAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposSetTeamAccessRestrictionsRequest();
    $request->requestBody = [
        'dicta',
        'fugit',
        'sit',
    ];
    $request->branch = 'aliquid';
    $request->owner = 'necessitatibus';
    $request->repo = 'sed';

    $response = $sdk->repos->reposSetTeamAccessRestrictions($request);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposSetUserAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.

| Type    | Description                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#set-user-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposSetUserAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposSetUserAccessRestrictionsRequest();
    $request->requestBody = [
        'nesciunt',
    ];
    $request->branch = 'delectus';
    $request->owner = 'laborum';
    $request->repo = 'aliquam';

    $response = $sdk->repos->reposSetUserAccessRestrictions($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposTestPushWebhook

This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.

**Note**: Previously `/repos/:owner/:repo/hooks/:hook_id/test`

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/webhooks/repos#test-the-push-repository-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposTestPushWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposTestPushWebhookRequest();
    $request->hookId = 644223;
    $request->owner = 'modi';
    $request->repo = 'sunt';

    $response = $sdk->repos->reposTestPushWebhook($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposTransfer

A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://docs.github.com/enterprise-server@3.5/articles/about-repository-transfers/).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#transfer-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposTransferRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposTransferRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposTransferRequest();
    $request->requestBody = new ReposTransferRequestBody();
    $request->requestBody->newOwner = 'impedit';
    $request->requestBody->teamIds = [
        528320,
        60078,
    ];
    $request->owner = 'at';
    $request->repo = 'dolorem';

    $response = $sdk->repos->reposTransfer($request);

    if ($response->minimalRepository !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdate

**Note**: To edit a repository's topics, use the [Replace all repository topics](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#replace-all-repository-topics) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/repos/repos#update-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateRequestBodyMergeCommitMessageEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateRequestBodyMergeCommitTitleEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateRequestBodySquashMergeCommitMessageEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateRequestBodySquashMergeCommitTitleEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateRequestBodyVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdateRequest();
    $request->requestBody = new ReposUpdateRequestBody();
    $request->requestBody->allowForking = false;
    $request->requestBody->allowMergeCommit = false;
    $request->requestBody->allowRebaseMerge = false;
    $request->requestBody->allowSquashMerge = false;
    $request->requestBody->allowUpdateBranch = false;
    $request->requestBody->archived = false;
    $request->requestBody->defaultBranch = 'repellat';
    $request->requestBody->deleteBranchOnMerge = false;
    $request->requestBody->description = 'aspernatur';
    $request->requestBody->hasIssues = false;
    $request->requestBody->hasProjects = false;
    $request->requestBody->hasWiki = false;
    $request->requestBody->homepage = 'inventore';
    $request->requestBody->isTemplate = false;
    $request->requestBody->mergeCommitMessage = ReposUpdateRequestBodyMergeCommitMessageEnum::PR_BODY;
    $request->requestBody->mergeCommitTitle = ReposUpdateRequestBodyMergeCommitTitleEnum::PR_TITLE;
    $request->requestBody->name = 'Moses Beatty Jr.';
    $request->requestBody->private = false;
    $request->requestBody->squashMergeCommitMessage = ReposUpdateRequestBodySquashMergeCommitMessageEnum::PR_BODY;
    $request->requestBody->squashMergeCommitTitle = ReposUpdateRequestBodySquashMergeCommitTitleEnum::COMMIT_OR_PR_TITLE;
    $request->requestBody->useSquashPrTitleAsDefault = false;
    $request->requestBody->visibility = ReposUpdateRequestBodyVisibilityEnum::PUBLIC;
    $request->owner = 'illo';
    $request->repo = 'magnam';

    $response = $sdk->repos->reposUpdate($request);

    if ($response->fullRepository !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdateBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Protecting a branch requires admin or owner permissions to the repository.

**Note**: Passing new arrays of `users` and `teams` replaces their previous values.

**Note**: The list of users, apps, and teams in total is limited to 100 items.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#update-branch-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateBranchProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateBranchProtectionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsBypassPullRequestAllowances;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateBranchProtectionRequestBodyRestrictions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdateBranchProtectionRequest();
    $request->requestBody = new ReposUpdateBranchProtectionRequestBody();
    $request->requestBody->allowDeletions = false;
    $request->requestBody->allowForcePushes = false;
    $request->requestBody->blockCreations = false;
    $request->requestBody->enforceAdmins = false;
    $request->requestBody->requiredConversationResolution = false;
    $request->requestBody->requiredLinearHistory = false;
    $request->requestBody->requiredPullRequestReviews = new ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews();
    $request->requestBody->requiredPullRequestReviews->bypassPullRequestAllowances = new ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsBypassPullRequestAllowances();
    $request->requestBody->requiredPullRequestReviews->bypassPullRequestAllowances->apps = [
        'numquam',
        'optio',
        'nobis',
        'ex',
    ];
    $request->requestBody->requiredPullRequestReviews->bypassPullRequestAllowances->teams = [
        'quae',
        'deleniti',
        'expedita',
        'hic',
    ];
    $request->requestBody->requiredPullRequestReviews->bypassPullRequestAllowances->users = [
        'aliquid',
        'sed',
        'beatae',
    ];
    $request->requestBody->requiredPullRequestReviews->dismissStaleReviews = false;
    $request->requestBody->requiredPullRequestReviews->dismissalRestrictions = new ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions();
    $request->requestBody->requiredPullRequestReviews->dismissalRestrictions->apps = [
        'ea',
        'animi',
        'dolore',
    ];
    $request->requestBody->requiredPullRequestReviews->dismissalRestrictions->teams = [
        'dignissimos',
        'esse',
        'animi',
        'laudantium',
    ];
    $request->requestBody->requiredPullRequestReviews->dismissalRestrictions->users = [
        'eveniet',
        'earum',
    ];
    $request->requestBody->requiredPullRequestReviews->requireCodeOwnerReviews = false;
    $request->requestBody->requiredPullRequestReviews->requiredApprovingReviewCount = 246402;
    $request->requestBody->requiredStatusChecks = new ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks();
    $request->requestBody->requiredStatusChecks->checks = [
        new ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks(),
        new ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks(),
        new ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks(),
        new ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks(),
    ];
    $request->requestBody->requiredStatusChecks->contexts = [
        'rerum',
        'itaque',
    ];
    $request->requestBody->requiredStatusChecks->strict = false;
    $request->requestBody->restrictions = new ReposUpdateBranchProtectionRequestBodyRestrictions();
    $request->requestBody->restrictions->apps = [
        'ipsam',
        'explicabo',
    ];
    $request->requestBody->restrictions->teams = [
        'aliquid',
        'quis',
        'facilis',
        'ipsum',
    ];
    $request->requestBody->restrictions->users = [
        'quaerat',
        'architecto',
    ];
    $request->branch = 'praesentium';
    $request->owner = 'eveniet';
    $request->repo = 'dolor';

    $response = $sdk->repos->reposUpdateBranchProtection($request);

    if ($response->protectedBranch !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdateCommitComment

Update a commit comment

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/commits/comments#update-a-commit-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateCommitCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateCommitCommentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdateCommitCommentRequest();
    $request->requestBody = new ReposUpdateCommitCommentRequestBody();
    $request->requestBody->body = 'expedita';
    $request->commentId = 730003;
    $request->owner = 'iste';
    $request->repo = 'illo';

    $response = $sdk->repos->reposUpdateCommitComment($request);

    if ($response->commitComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdateDeploymentBranchPolicy

Updates a deployment branch policy for an environment.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/deployments/branch-policies#update-deployment-branch-policy>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateDeploymentBranchPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentBranchPolicyNamePattern;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdateDeploymentBranchPolicyRequest();
    $request->branchPolicyId = 792499;
    $request->deploymentBranchPolicyNamePattern = new DeploymentBranchPolicyNamePattern();
    $request->deploymentBranchPolicyNamePattern->name = 'release/*';
    $request->environmentName = 'quos';
    $request->owner = 'temporibus';
    $request->repo = 'sint';

    $response = $sdk->repos->reposUpdateDeploymentBranchPolicy($request);

    if ($response->deploymentBranchPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdateInformationAboutPagesSite

Updates information for a GitHub Enterprise Server Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages).

To use this endpoint, you must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission. A token with the `repo` scope or Pages write permission is required. GitHub Apps must have the `administration:write` and `pages:write` permissions.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/pages#update-information-about-a-github-pages-site>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateInformationAboutPagesSiteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdateInformationAboutPagesSiteRequest();
    $request->requestBody = new ReposUpdateInformationAboutPagesSiteRequestBody3();
    $request->requestBody->buildType = ReposUpdateInformationAboutPagesSiteRequestBody3BuildTypeEnum::LEGACY;
    $request->requestBody->cname = 'accusamus';
    $request->requestBody->httpsEnforced = false;
    $request->requestBody->source = ReposUpdateInformationAboutPagesSiteRequestBody3Source1Enum::MASTER_DOCS;
    $request->owner = 'laudantium';
    $request->repo = 'tempora';

    $response = $sdk->repos->reposUpdateInformationAboutPagesSite($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdateInvitation

Update a repository invitation

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/collaborators/invitations#update-a-repository-invitation>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateInvitationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateInvitationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateInvitationRequestBodyPermissionsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdateInvitationRequest();
    $request->requestBody = new ReposUpdateInvitationRequestBody();
    $request->requestBody->permissions = ReposUpdateInvitationRequestBodyPermissionsEnum::READ;
    $request->invitationId = 607545;
    $request->owner = 'illum';
    $request->repo = 'rem';

    $response = $sdk->repos->reposUpdateInvitation($request);

    if ($response->repositoryInvitation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdatePullRequestReviewProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

**Note**: Passing new arrays of `users` and `teams` replaces their previous values.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#update-pull-request-review-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdatePullRequestReviewProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdatePullRequestReviewProtectionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdatePullRequestReviewProtectionRequestBodyBypassPullRequestAllowances;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdatePullRequestReviewProtectionRequest();
    $request->requestBody = new ReposUpdatePullRequestReviewProtectionRequestBody();
    $request->requestBody->bypassPullRequestAllowances = new ReposUpdatePullRequestReviewProtectionRequestBodyBypassPullRequestAllowances();
    $request->requestBody->bypassPullRequestAllowances->apps = [
        'deleniti',
        'modi',
        'earum',
        'architecto',
    ];
    $request->requestBody->bypassPullRequestAllowances->teams = [
        'labore',
        'maiores',
    ];
    $request->requestBody->bypassPullRequestAllowances->users = [
        'saepe',
    ];
    $request->requestBody->dismissStaleReviews = false;
    $request->requestBody->dismissalRestrictions = new ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions();
    $request->requestBody->dismissalRestrictions->apps = [
        'esse',
    ];
    $request->requestBody->dismissalRestrictions->teams = [
        'facere',
        'quisquam',
        'cumque',
        'aliquam',
    ];
    $request->requestBody->dismissalRestrictions->users = [
        'deserunt',
        'ad',
        'reiciendis',
    ];
    $request->requestBody->requireCodeOwnerReviews = false;
    $request->requestBody->requiredApprovingReviewCount = 196451;
    $request->branch = 'porro';
    $request->owner = 'laborum';
    $request->repo = 'nobis';

    $response = $sdk->repos->reposUpdatePullRequestReviewProtection($request);

    if ($response->protectedBranchPullRequestReview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdateRelease

Users with push access to the repository can edit a release.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#update-a-release>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateReleaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateReleaseRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdateReleaseRequest();
    $request->requestBody = new ReposUpdateReleaseRequestBody();
    $request->requestBody->body = 'quibusdam';
    $request->requestBody->draft = false;
    $request->requestBody->name = 'Joseph Hills';
    $request->requestBody->prerelease = false;
    $request->requestBody->tagName = 'reprehenderit';
    $request->requestBody->targetCommitish = 'quia';
    $request->owner = 'necessitatibus';
    $request->releaseId = 37764;
    $request->repo = 'ad';

    $response = $sdk->repos->reposUpdateRelease($request);

    if ($response->release !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdateReleaseAsset

Users with push access to the repository can edit a release asset.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#update-a-release-asset>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateReleaseAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateReleaseAssetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdateReleaseAssetRequest();
    $request->requestBody = new ReposUpdateReleaseAssetRequestBody();
    $request->requestBody->label = 'nisi';
    $request->requestBody->name = 'Lori Larkin';
    $request->requestBody->state = '"uploaded"';
    $request->assetId = 479830;
    $request->owner = 'expedita';
    $request->repo = 'eos';

    $response = $sdk->repos->reposUpdateReleaseAsset($request);

    if ($response->releaseAsset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdateStatusCheckProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.5/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/branches/branch-protection#update-status-check-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateStatusCheckProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateStatusCheckProtectionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateStatusCheckProtectionRequestBodyChecks;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdateStatusCheckProtectionRequest();
    $request->requestBody = new ReposUpdateStatusCheckProtectionRequestBody();
    $request->requestBody->checks = [
        new ReposUpdateStatusCheckProtectionRequestBodyChecks(),
        new ReposUpdateStatusCheckProtectionRequestBodyChecks(),
        new ReposUpdateStatusCheckProtectionRequestBodyChecks(),
        new ReposUpdateStatusCheckProtectionRequestBodyChecks(),
    ];
    $request->requestBody->contexts = [
        'ipsa',
    ];
    $request->requestBody->strict = false;
    $request->branch = 'sint';
    $request->owner = 'dolore';
    $request->repo = 'esse';

    $response = $sdk->repos->reposUpdateStatusCheckProtection($request);

    if ($response->statusCheckPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdateWebhook

Updates a webhook configured in a repository. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for a repository](/rest/reference/repos#update-a-webhook-configuration-for-a-repository)."

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/webhooks/repos#update-a-repository-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateWebhookRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateWebhookRequestBodyConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdateWebhookRequest();
    $request->requestBody = new ReposUpdateWebhookRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->addEvents = [
        'distinctio',
    ];
    $request->requestBody->config = new ReposUpdateWebhookRequestBodyConfig();
    $request->requestBody->config->address = '"bar@example.com"';
    $request->requestBody->config->contentType = '"json"';
    $request->requestBody->config->insecureSsl = 4630.5;
    $request->requestBody->config->room = '"The Serious Room"';
    $request->requestBody->config->secret = '"********"';
    $request->requestBody->config->url = 'https://example.com/webhook';
    $request->requestBody->events = [
        'aliquam',
        'delectus',
        'culpa',
    ];
    $request->requestBody->removeEvents = [
        'iusto',
        'quod',
        'voluptatibus',
    ];
    $request->hookId = 374414;
    $request->owner = 'non';
    $request->repo = 'ullam';

    $response = $sdk->repos->reposUpdateWebhook($request);

    if ($response->hook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdateWebhookConfigForRepo

Updates the webhook configuration for a repository. To update more information about the webhook, including the `active` state and `events`, use "[Update a repository webhook](/rest/reference/orgs#update-a-repository-webhook)."

Access tokens must have the `write:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:write` permission.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/webhooks/repo-config#update-a-webhook-configuration-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateWebhookConfigForRepoRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateWebhookConfigForRepoRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdateWebhookConfigForRepoRequest();
    $request->requestBody = new ReposUpdateWebhookConfigForRepoRequestBody();
    $request->requestBody->contentType = '"json"';
    $request->requestBody->insecureSsl = 3782.68;
    $request->requestBody->secret = '"********"';
    $request->requestBody->url = 'https://example.com/webhook';
    $request->hookId = 987371;
    $request->owner = 'animi';
    $request->repo = 'recusandae';

    $response = $sdk->repos->reposUpdateWebhookConfigForRepo($request);

    if ($response->webhookConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUploadReleaseAsset

This endpoint makes use of [a Hypermedia relation](https://docs.github.com/enterprise-server@3.5/rest/overview/resources-in-the-rest-api#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in
the response of the [Create a release endpoint](https://docs.github.com/enterprise-server@3.5/rest/releases/releases#create-a-release) to upload a release asset.

You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.

Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example: 

`application/zip`

GitHub Enterprise Server expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example,
you'll still need to pass your authentication to be able to upload an asset.

When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted.

**Notes:**
*   GitHub Enterprise Server renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The "[List assets for a release](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#list-assets-for-a-release)"
endpoint lists the renamed filenames. For more information and help, contact [GitHub Enterprise Server Support](https://support.github.com/contact?tags=dotcom-rest-api).
*   To find the `release_id` query the [`GET /repos/{owner}/{repo}/releases/latest` endpoint](https://docs.github.com/enterprise-server@3.5/rest/releases/releases#get-the-latest-release). 
*   If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/repos#upload-a-release-asset>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUploadReleaseAssetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUploadReleaseAssetRequest();
    $request->requestBody = 'corporis';
    $request->label = 'non';
    $request->name = 'Preston Wyman DDS';
    $request->owner = 'sequi';
    $request->releaseId = 125707;
    $request->repo = 'vitae';

    $response = $sdk->repos->reposUploadReleaseAsset($request);

    if ($response->releaseAsset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
