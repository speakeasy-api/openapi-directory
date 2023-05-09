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
<https://docs.github.com/enterprise-server@3.3/rest/collaborators/invitations#accept-a-repository-invitation>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposAcceptInvitationForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.ReposAcceptInvitationForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposAcceptInvitationForAuthenticatedUserRequest req = new ReposAcceptInvitationForAuthenticatedUserRequest(725574L);            

            ReposAcceptInvitationForAuthenticatedUserResponse res = sdk.repos.reposAcceptInvitationForAuthenticatedUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposAddAppAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified apps push access for this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#add-app-access-restrictions>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposAddAppAccessRestrictionsRequest;
import org.openapis.openapi.models.operations.ReposAddAppAccessRestrictionsRequestBody1;
import org.openapis.openapi.models.operations.ReposAddAppAccessRestrictionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposAddAppAccessRestrictionsRequest req = new ReposAddAppAccessRestrictionsRequest("velit", "doloremque", "delectus") {{
                requestBody = new String[]{{
                    add("ipsum"),
                    add("adipisci"),
                    add("saepe"),
                }};
            }};            

            ReposAddAppAccessRestrictionsResponse res = sdk.repos.reposAddAppAccessRestrictions(req);

            if (res.integrations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposAddCollaborator

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.3/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.3/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

For more information on permission levels, see "[Repository permission levels for an organization](https://docs.github.com/enterprise-server@3.3/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)". There are restrictions on which permissions can be granted to organization members when an organization base role is in place. In this case, the permission being given must be equal to or higher than the org base permission. Otherwise, the request will fail with:

```
Cannot assign {member} permission of {role name}
```

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#http-verbs)."

The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [repository invitations API endpoints](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#invitations).

**Updating an existing collaborator's permission level**

The endpoint can also be used to change the permissions of an existing collaborator without first removing and re-adding the collaborator. To change the permissions, use the same endpoint and pass a different `permission` parameter. The response will be a `204`, with no other indication that the permission level changed.

**Rate limits**

You are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/collaborators/collaborators#add-a-repository-collaborator>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposAddCollaboratorRequest;
import org.openapis.openapi.models.operations.ReposAddCollaboratorRequestBody;
import org.openapis.openapi.models.operations.ReposAddCollaboratorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposAddCollaboratorRequest req = new ReposAddCollaboratorRequest("deserunt", "doloremque", "quis") {{
                requestBody = new ReposAddCollaboratorRequestBody() {{
                    permission = "veniam";
                }};;
            }};            

            ReposAddCollaboratorResponse res = sdk.repos.reposAddCollaborator(req);

            if (res.repositoryInvitation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposAddStatusCheckContexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#add-status-check-contexts>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposAddStatusCheckContextsRequest;
import org.openapis.openapi.models.operations.ReposAddStatusCheckContextsRequestBody1;
import org.openapis.openapi.models.operations.ReposAddStatusCheckContextsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposAddStatusCheckContextsRequest req = new ReposAddStatusCheckContextsRequest("libero", "architecto", "cupiditate") {{
                requestBody = new ReposAddStatusCheckContextsRequestBody1(                new String[]{{
                                    add("possimus"),
                                    add("non"),
                                    add("magnam"),
                                    add("itaque"),
                                }});;
            }};            

            ReposAddStatusCheckContextsResponse res = sdk.repos.reposAddStatusCheckContexts(req);

            if (res.reposAddStatusCheckContexts200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposAddTeamAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified teams push access for this branch. You can also give push access to child teams.

| Type    | Description                                                                                                                                |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#add-team-access-restrictions>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposAddTeamAccessRestrictionsRequest;
import org.openapis.openapi.models.operations.ReposAddTeamAccessRestrictionsRequestBody1;
import org.openapis.openapi.models.operations.ReposAddTeamAccessRestrictionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposAddTeamAccessRestrictionsRequest req = new ReposAddTeamAccessRestrictionsRequest("sed", "asperiores", "veniam") {{
                requestBody = new ReposAddTeamAccessRestrictionsRequestBody1(                new String[]{{
                                    add("laudantium"),
                                    add("odit"),
                                    add("pariatur"),
                                    add("amet"),
                                }});;
            }};            

            ReposAddTeamAccessRestrictionsResponse res = sdk.repos.reposAddTeamAccessRestrictions(req);

            if (res.teams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposAddUserAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified people push access for this branch.

| Type    | Description                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#add-user-access-restrictions>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposAddUserAccessRestrictionsRequest;
import org.openapis.openapi.models.operations.ReposAddUserAccessRestrictionsRequestBody1;
import org.openapis.openapi.models.operations.ReposAddUserAccessRestrictionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposAddUserAccessRestrictionsRequest req = new ReposAddUserAccessRestrictionsRequest("exercitationem", "ab", "velit") {{
                requestBody = new String[]{{
                    add("nisi"),
                    add("voluptatibus"),
                    add("quaerat"),
                }};
            }};            

            ReposAddUserAccessRestrictionsResponse res = sdk.repos.reposAddUserAccessRestrictions(req);

            if (res.simpleUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposCheckCollaborator

For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.

Team members will include the members of child teams.

You must authenticate using an access token with the `read:org` and `repo` scopes with push access to use this
endpoint. GitHub Apps must have the `members` organization permission and `metadata` repository permission to use this
endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/collaborators/collaborators#check-if-a-user-is-a-repository-collaborator>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposCheckCollaboratorRequest;
import org.openapis.openapi.models.operations.ReposCheckCollaboratorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposCheckCollaboratorRequest req = new ReposCheckCollaboratorRequest("blanditiis", "distinctio", "nisi");            

            ReposCheckCollaboratorResponse res = sdk.repos.reposCheckCollaborator(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposCompareCommits

Compares two commits against one another. You can compare branches in the same repository, or you can compare branches that exist in different repositories within the same repository network, including fork branches. For more information about how to view a repository's network, see "[Understanding connections between repositories](https://docs.github.com/enterprise-server@3.3/repositories/viewing-activity-and-data-for-your-repository/understanding-connections-between-repositories)."

This endpoint is equivalent to running the `git log BASE...HEAD` command, but it returns commits in a different order. The `git log BASE...HEAD` command returns commits in reverse chronological order, whereas the API returns commits in chronological order. You can pass the appropriate [media type](https://docs.github.com/enterprise-server@3.3/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.

The API response includes details about the files that were changed between the two commits. This includes the status of the change (if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.

When calling this endpoint without any paging parameter (`per_page` or `page`), the returned list is limited to 250 commits, and the last commit in the list is the most recent of the entire comparison.

**Working with large comparisons**

To process a response with a large number of commits, use a query parameter (`per_page` or `page`) to paginate the results. When using pagination:

- The list of changed files is only shown on the first page of results, but it includes all changed files for the entire comparison.
- The results are returned in chronological order, but the last commit in the returned list may not be the most recent one in the entire set if there are more pages of results.

For more information on working with pagination, see "[Using pagination in the REST API](https://docs.github.com/enterprise-server@3.3/rest/guides/using-pagination-in-the-rest-api)."

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
<https://docs.github.com/enterprise-server@3.3/rest/commits/commits#compare-two-commits>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposCompareCommitsRequest;
import org.openapis.openapi.models.operations.ReposCompareCommitsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposCompareCommitsRequest req = new ReposCompareCommitsRequest("quis", "nisi", "libero") {{
                page = 794507L;
                perPage = 815200L;
            }};            

            ReposCompareCommitsResponse res = sdk.repos.reposCompareCommits(req);

            if (res.commitComparison != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposCreateAutolink

Users with admin access to the repository can create an autolink.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/repos/autolinks#create-an-autolink-reference-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposCreateAutolinkRequest;
import org.openapis.openapi.models.operations.ReposCreateAutolinkRequestBody;
import org.openapis.openapi.models.operations.ReposCreateAutolinkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposCreateAutolinkRequest req = new ReposCreateAutolinkRequest(                new ReposCreateAutolinkRequestBody("facilis", "ipsum") {{
                                isAlphanumeric = false;
                            }};, "ad", "voluptatibus");            

            ReposCreateAutolinkResponse res = sdk.repos.reposCreateAutolink(req);

            if (res.autolink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposCreateCommitComment

Create a comment for a commit using its `:commit_sha`.

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.3/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.3/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/commits/comments#create-a-commit-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposCreateCommitCommentRequest;
import org.openapis.openapi.models.operations.ReposCreateCommitCommentRequestBody;
import org.openapis.openapi.models.operations.ReposCreateCommitCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposCreateCommitCommentRequest req = new ReposCreateCommitCommentRequest(                new ReposCreateCommitCommentRequestBody("voluptatibus") {{
                                line = 162358L;
                                path = "debitis";
                                position = 290841L;
                            }};, "rerum", "eos", "reprehenderit");            

            ReposCreateCommitCommentResponse res = sdk.repos.reposCreateCommitComment(req);

            if (res.commitComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposCreateCommitSignatureProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#create-commit-signature-protection>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposCreateCommitSignatureProtectionRequest;
import org.openapis.openapi.models.operations.ReposCreateCommitSignatureProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposCreateCommitSignatureProtectionRequest req = new ReposCreateCommitSignatureProtectionRequest("nostrum", "neque", "iusto");            

            ReposCreateCommitSignatureProtectionResponse res = sdk.repos.reposCreateCommitSignatureProtection(req);

            if (res.protectedBranchAdminEnforced != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposCreateCommitStatus

Users with push access in a repository can create commit statuses for a given SHA.

Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/commits/statuses#create-a-commit-status>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposCreateCommitStatusRequest;
import org.openapis.openapi.models.operations.ReposCreateCommitStatusRequestBody;
import org.openapis.openapi.models.operations.ReposCreateCommitStatusRequestBodyStateEnum;
import org.openapis.openapi.models.operations.ReposCreateCommitStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposCreateCommitStatusRequest req = new ReposCreateCommitStatusRequest(                new ReposCreateCommitStatusRequestBody(ReposCreateCommitStatusRequestBodyStateEnum.PENDING) {{
                                context = "rem";
                                description = "eligendi";
                                targetUrl = "fugiat";
                            }};, "unde", "officiis", "ducimus");            

            ReposCreateCommitStatusResponse res = sdk.repos.reposCreateCommitStatus(req);

            if (res.status != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposCreateDeployKey

You can create a read-only deploy key.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/deploy-keys#create-a-deploy-key>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposCreateDeployKeyRequest;
import org.openapis.openapi.models.operations.ReposCreateDeployKeyRequestBody;
import org.openapis.openapi.models.operations.ReposCreateDeployKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposCreateDeployKeyRequest req = new ReposCreateDeployKeyRequest(                new ReposCreateDeployKeyRequestBody("dolor") {{
                                readOnly = false;
                                title = "Mr.";
                            }};, "error", "porro");            

            ReposCreateDeployKeyResponse res = sdk.repos.reposCreateDeployKey(req);

            if (res.deployKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

By default, [commit statuses](https://docs.github.com/enterprise-server@3.3/rest/commits/statuses) for every submitted context must be in a `success`
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
<https://docs.github.com/enterprise-server@3.3/rest/deployments/deployments#create-a-deployment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposCreateDeploymentRequest;
import org.openapis.openapi.models.operations.ReposCreateDeploymentRequestBody;
import org.openapis.openapi.models.operations.ReposCreateDeploymentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposCreateDeploymentRequest req = new ReposCreateDeploymentRequest(                new ReposCreateDeploymentRequestBody("vitae") {{
                                autoMerge = false;
                                description = "dignissimos";
                                environment = "esse";
                                payload = "ad";
                                productionEnvironment = false;
                                requiredContexts = new String[]{{
                                    add("enim"),
                                }};
                                task = "delectus";
                                transientEnvironment = false;
                            }};, "iusto", "dignissimos");            

            ReposCreateDeploymentResponse res = sdk.repos.reposCreateDeployment(req);

            if (res.deployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposCreateDeploymentBranchPolicy

Creates a deployment branch policy for an environment.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/deployments/branch-policies#create-deployment-branch-policy>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposCreateDeploymentBranchPolicyRequest;
import org.openapis.openapi.models.operations.ReposCreateDeploymentBranchPolicyResponse;
import org.openapis.openapi.models.shared.DeploymentBranchPolicyNamePattern;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposCreateDeploymentBranchPolicyRequest req = new ReposCreateDeploymentBranchPolicyRequest(                new DeploymentBranchPolicyNamePattern("release/*");, "libero", "illo", "ab");            

            ReposCreateDeploymentBranchPolicyResponse res = sdk.repos.reposCreateDeploymentBranchPolicy(req);

            if (res.deploymentBranchPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposCreateDeploymentStatus

Users with `push` access can create deployment statuses for a given deployment.

GitHub Apps require `read & write` access to "Deployments" and `read-only` access to "Repo contents" (for private repos). OAuth Apps require the `repo_deployment` scope.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/deployments/statuses#create-a-deployment-status>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposCreateDeploymentStatusRequest;
import org.openapis.openapi.models.operations.ReposCreateDeploymentStatusRequestBody;
import org.openapis.openapi.models.operations.ReposCreateDeploymentStatusRequestBodyEnvironmentEnum;
import org.openapis.openapi.models.operations.ReposCreateDeploymentStatusRequestBodyStateEnum;
import org.openapis.openapi.models.operations.ReposCreateDeploymentStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposCreateDeploymentStatusRequest req = new ReposCreateDeploymentStatusRequest(                new ReposCreateDeploymentStatusRequestBody(ReposCreateDeploymentStatusRequestBodyStateEnum.FAILURE) {{
                                autoInactive = false;
                                description = "accusamus";
                                environment = ReposCreateDeploymentStatusRequestBodyEnvironmentEnum.QA;
                                environmentUrl = "tempore";
                                logUrl = "veniam";
                                targetUrl = "eos";
                            }};, 970079L, "earum", "reprehenderit");            

            ReposCreateDeploymentStatusResponse res = sdk.repos.reposCreateDeploymentStatus(req);

            if (res.deploymentStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposCreateDispatchEvent

You can use this endpoint to trigger a webhook event called `repository_dispatch` when you want activity that happens outside of GitHub Enterprise Server to trigger a GitHub Actions workflow or GitHub App webhook. You must configure your GitHub Actions workflow or GitHub App to run when the `repository_dispatch` event occurs. For an example `repository_dispatch` webhook payload, see "[RepositoryDispatchEvent](https://docs.github.com/enterprise-server@3.3/webhooks/event-payloads/#repository_dispatch)."

The `client_payload` parameter is available for any extra information that your workflow might need. This parameter is a JSON payload that will be passed on when the webhook event is dispatched. For example, the `client_payload` can include a message that a user would like to send using a GitHub Actions workflow. Or the `client_payload` can be used as a test to debug your workflow.

This endpoint requires write access to the repository by providing either:

  - Personal access tokens with `repo` scope. For more information, see "[Creating a personal access token for the command line](https://docs.github.com/enterprise-server@3.3/articles/creating-a-personal-access-token-for-the-command-line)" in the GitHub Help documentation.
  - GitHub Apps with both `metadata:read` and `contents:read&write` permissions.

This input example shows how you can use the `client_payload` as a test to debug your workflow.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#create-a-repository-dispatch-event>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposCreateDispatchEventRequest;
import org.openapis.openapi.models.operations.ReposCreateDispatchEventRequestBody;
import org.openapis.openapi.models.operations.ReposCreateDispatchEventResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposCreateDispatchEventRequest req = new ReposCreateDispatchEventRequest(                new ReposCreateDispatchEventRequestBody("praesentium") {{
                                clientPayload = new java.util.HashMap<String, Object>() {{
                                    put("repellat", "quisquam");
                                    put("sequi", "nihil");
                                }};
                            }};, "deleniti", "illo");            

            ReposCreateDispatchEventResponse res = sdk.repos.reposCreateDispatchEvent(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposCreateForAuthenticatedUser

Creates a new repository for the authenticated user.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
*   `repo` scope to create a private repository.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#create-a-repository-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposCreateForAuthenticatedUserRequestBody;
import org.openapis.openapi.models.operations.ReposCreateForAuthenticatedUserRequestBodyMergeCommitMessageEnum;
import org.openapis.openapi.models.operations.ReposCreateForAuthenticatedUserRequestBodyMergeCommitTitleEnum;
import org.openapis.openapi.models.operations.ReposCreateForAuthenticatedUserRequestBodySquashMergeCommitMessageEnum;
import org.openapis.openapi.models.operations.ReposCreateForAuthenticatedUserRequestBodySquashMergeCommitTitleEnum;
import org.openapis.openapi.models.operations.ReposCreateForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposCreateForAuthenticatedUserRequestBody req = new ReposCreateForAuthenticatedUserRequestBody("Team Environment") {{
                allowAutoMerge = false;
                allowMergeCommit = true;
                allowRebaseMerge = true;
                allowSquashMerge = true;
                autoInit = false;
                deleteBranchOnMerge = false;
                description = "labore";
                gitignoreTemplate = "Haskell";
                hasDiscussions = true;
                hasDownloads = true;
                hasIssues = true;
                hasProjects = true;
                hasWiki = true;
                homepage = "assumenda";
                isTemplate = true;
                licenseTemplate = "mit";
                mergeCommitMessage = ReposCreateForAuthenticatedUserRequestBodyMergeCommitMessageEnum.PR_BODY;
                mergeCommitTitle = ReposCreateForAuthenticatedUserRequestBodyMergeCommitTitleEnum.MERGE_MESSAGE;
                private_ = false;
                squashMergeCommitMessage = ReposCreateForAuthenticatedUserRequestBodySquashMergeCommitMessageEnum.COMMIT_MESSAGES;
                squashMergeCommitTitle = ReposCreateForAuthenticatedUserRequestBodySquashMergeCommitTitleEnum.COMMIT_OR_PR_TITLE;
                teamId = 921719L;
            }};            

            ReposCreateForAuthenticatedUserResponse res = sdk.repos.reposCreateForAuthenticatedUser(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposCreateFork

Create a fork for the authenticated user.

**Note**: Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Enterprise Server Support](https://support.github.com/contact?tags=dotcom-rest-api).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#create-a-fork>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposCreateForkRequest;
import org.openapis.openapi.models.operations.ReposCreateForkRequestBody;
import org.openapis.openapi.models.operations.ReposCreateForkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposCreateForkRequest req = new ReposCreateForkRequest("consequatur", "maxime") {{
                requestBody = new ReposCreateForkRequestBody() {{
                    organization = "aspernatur";
                }};;
            }};            

            ReposCreateForkResponse res = sdk.repos.reposCreateFork(req);

            if (res.fullRepository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposCreateInOrg

Creates a new repository in the specified organization. The authenticated user must be a member of the organization.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
*   `repo` scope to create a private repository

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#create-an-organization-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposCreateInOrgRequest;
import org.openapis.openapi.models.operations.ReposCreateInOrgRequestBody;
import org.openapis.openapi.models.operations.ReposCreateInOrgRequestBodyMergeCommitMessageEnum;
import org.openapis.openapi.models.operations.ReposCreateInOrgRequestBodyMergeCommitTitleEnum;
import org.openapis.openapi.models.operations.ReposCreateInOrgRequestBodySquashMergeCommitMessageEnum;
import org.openapis.openapi.models.operations.ReposCreateInOrgRequestBodySquashMergeCommitTitleEnum;
import org.openapis.openapi.models.operations.ReposCreateInOrgRequestBodyVisibilityEnum;
import org.openapis.openapi.models.operations.ReposCreateInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposCreateInOrgRequest req = new ReposCreateInOrgRequest(                new ReposCreateInOrgRequestBody("nam") {{
                                allowAutoMerge = false;
                                allowMergeCommit = false;
                                allowRebaseMerge = false;
                                allowSquashMerge = false;
                                autoInit = false;
                                deleteBranchOnMerge = false;
                                description = "expedita";
                                gitignoreTemplate = "quas";
                                hasDownloads = true;
                                hasIssues = false;
                                hasProjects = false;
                                hasWiki = false;
                                homepage = "provident";
                                isTemplate = false;
                                licenseTemplate = "repudiandae";
                                mergeCommitMessage = ReposCreateInOrgRequestBodyMergeCommitMessageEnum.BLANK;
                                mergeCommitTitle = ReposCreateInOrgRequestBodyMergeCommitTitleEnum.PR_TITLE;
                                private_ = false;
                                squashMergeCommitMessage = ReposCreateInOrgRequestBodySquashMergeCommitMessageEnum.COMMIT_MESSAGES;
                                squashMergeCommitTitle = ReposCreateInOrgRequestBodySquashMergeCommitTitleEnum.COMMIT_OR_PR_TITLE;
                                teamId = 629377L;
                                useSquashPrTitleAsDefault = false;
                                visibility = ReposCreateInOrgRequestBodyVisibilityEnum.INTERNAL;
                            }};, "iure");            

            ReposCreateInOrgResponse res = sdk.repos.reposCreateInOrg(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposCreateOrUpdateEnvironment

Create or update an environment with protection rules, such as required reviewers. For more information about environment protection rules, see "[Environments](/actions/reference/environments#environment-protection-rules)."

**Note:** To create or update name patterns that branches must match in order to deploy to this environment, see "[Deployment branch policies](/rest/deployments/branch-policies)."

**Note:** To create or update secrets for an environment, see "[Secrets](/rest/reference/actions#secrets)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/deployments/environments#create-or-update-an-environment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposCreateOrUpdateEnvironmentRequest;
import org.openapis.openapi.models.operations.ReposCreateOrUpdateEnvironmentRequestBody;
import org.openapis.openapi.models.operations.ReposCreateOrUpdateEnvironmentRequestBodyReviewers;
import org.openapis.openapi.models.operations.ReposCreateOrUpdateEnvironmentResponse;
import org.openapis.openapi.models.shared.DeploymentBranchPolicySettings;
import org.openapis.openapi.models.shared.DeploymentReviewerTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposCreateOrUpdateEnvironmentRequest req = new ReposCreateOrUpdateEnvironmentRequest("dolorem", "commodi", "impedit") {{
                requestBody = new ReposCreateOrUpdateEnvironmentRequestBody() {{
                    deploymentBranchPolicy = new DeploymentBranchPolicySettings(false, false);;
                    reviewers = new org.openapis.openapi.models.operations.ReposCreateOrUpdateEnvironmentRequestBodyReviewers[]{{
                        add(new ReposCreateOrUpdateEnvironmentRequestBodyReviewers() {{
                            id = 4532992L;
                            type = DeploymentReviewerTypeEnum.USER;
                        }}),
                        add(new ReposCreateOrUpdateEnvironmentRequestBodyReviewers() {{
                            id = 4532992L;
                            type = DeploymentReviewerTypeEnum.USER;
                        }}),
                    }};
                    waitTimer = 30L;
                }};;
            }};            

            ReposCreateOrUpdateEnvironmentResponse res = sdk.repos.reposCreateOrUpdateEnvironment(req);

            if (res.environment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposCreateOrUpdateFileContents

Creates a new file or replaces an existing file in a repository. You must authenticate using an access token with the `workflow` scope to use this endpoint.

**Note:** If you use this endpoint and the "[Delete a file](https://docs.github.com/enterprise-server@3.3/rest/reference/repos/#delete-file)" endpoint in parallel, the concurrent requests will conflict and you will receive errors. You must use these endpoints serially instead.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#create-or-update-file-contents>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposCreateOrUpdateFileContentsRequest;
import org.openapis.openapi.models.operations.ReposCreateOrUpdateFileContentsRequestBody;
import org.openapis.openapi.models.operations.ReposCreateOrUpdateFileContentsRequestBodyAuthor;
import org.openapis.openapi.models.operations.ReposCreateOrUpdateFileContentsRequestBodyCommitter;
import org.openapis.openapi.models.operations.ReposCreateOrUpdateFileContentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposCreateOrUpdateFileContentsRequest req = new ReposCreateOrUpdateFileContentsRequest(                new ReposCreateOrUpdateFileContentsRequestBody("aut", "voluptatem") {{
                                author = new ReposCreateOrUpdateFileContentsRequestBodyAuthor("ad", "quae") {{
                                    date = ""2013-01-15T17:13:22+05:00"";
                                }};;
                                branch = "amet";
                                committer = new ReposCreateOrUpdateFileContentsRequestBodyCommitter("illum", "praesentium") {{
                                    date = ""2013-01-05T13:13:22+05:00"";
                                }};;
                                sha = "quidem";
                            }};, "cum", "amet", "quasi");            

            ReposCreateOrUpdateFileContentsResponse res = sdk.repos.reposCreateOrUpdateFileContents(req);

            if (res.fileCommit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposCreatePagesSite

Configures a GitHub Enterprise Server Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages)."

To use this endpoint, you must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission. A token with the `repo` scope or Pages write permission is required. GitHub Apps must have the `administration:write` and `pages:write` permissions.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/pages#create-a-github-pages-site>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposCreatePagesSiteRequest;
import org.openapis.openapi.models.operations.ReposCreatePagesSiteRequestBody1;
import org.openapis.openapi.models.operations.ReposCreatePagesSiteRequestBody1BuildTypeEnum;
import org.openapis.openapi.models.operations.ReposCreatePagesSiteRequestBody1Source;
import org.openapis.openapi.models.operations.ReposCreatePagesSiteRequestBody1SourcePathEnum;
import org.openapis.openapi.models.operations.ReposCreatePagesSiteRequestBody2;
import org.openapis.openapi.models.operations.ReposCreatePagesSiteRequestBody2BuildTypeEnum;
import org.openapis.openapi.models.operations.ReposCreatePagesSiteRequestBody2Source;
import org.openapis.openapi.models.operations.ReposCreatePagesSiteRequestBody2SourcePathEnum;
import org.openapis.openapi.models.operations.ReposCreatePagesSiteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposCreatePagesSiteRequest req = new ReposCreatePagesSiteRequest(                new ReposCreatePagesSiteRequestBody1(                new ReposCreatePagesSiteRequestBody1Source("amet") {{
                                                path = ReposCreatePagesSiteRequestBody1SourcePathEnum.ROOT_DOCS;
                                            }};) {{
                                buildType = ReposCreatePagesSiteRequestBody1BuildTypeEnum.WORKFLOW;
                                source = new ReposCreatePagesSiteRequestBody1Source("iusto") {{
                                    branch = "doloremque";
                                    path = ReposCreatePagesSiteRequestBody1SourcePathEnum.ROOT_DOCS;
                                }};
                            }}, "dolorum", "necessitatibus");            

            ReposCreatePagesSiteResponse res = sdk.repos.reposCreatePagesSite(req);

            if (res.page != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposCreateRelease

Users with push access to the repository can create a release.

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.3/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.3/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/releases/releases#create-a-release>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposCreateReleaseRequest;
import org.openapis.openapi.models.operations.ReposCreateReleaseRequestBody;
import org.openapis.openapi.models.operations.ReposCreateReleaseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposCreateReleaseRequest req = new ReposCreateReleaseRequest(                new ReposCreateReleaseRequestBody("provident") {{
                                body = "repudiandae";
                                draft = false;
                                generateReleaseNotes = false;
                                name = "Vivian Kreiger";
                                prerelease = false;
                                targetCommitish = "corrupti";
                            }};, "aperiam", "sint");            

            ReposCreateReleaseResponse res = sdk.repos.reposCreateRelease(req);

            if (res.release != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposCreateUsingTemplate

Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. If the repository is not public, the authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#get-a-repository) endpoint and check that the `is_template` key is `true`.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
*   `repo` scope to create a private repository

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#create-a-repository-using-a-template>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposCreateUsingTemplateRequest;
import org.openapis.openapi.models.operations.ReposCreateUsingTemplateRequestBody;
import org.openapis.openapi.models.operations.ReposCreateUsingTemplateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposCreateUsingTemplateRequest req = new ReposCreateUsingTemplateRequest(                new ReposCreateUsingTemplateRequestBody("accusamus") {{
                                description = "eos";
                                includeAllBranches = false;
                                owner = "totam";
                                private_ = false;
                            }};, "dicta", "voluptatem");            

            ReposCreateUsingTemplateResponse res = sdk.repos.reposCreateUsingTemplate(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposCreateWebhook

Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can
share the same `config` as long as those webhooks do not have any `events` that overlap.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/webhooks/repos#create-a-repository-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposCreateWebhookRequest;
import org.openapis.openapi.models.operations.ReposCreateWebhookRequestBody;
import org.openapis.openapi.models.operations.ReposCreateWebhookRequestBodyConfig;
import org.openapis.openapi.models.operations.ReposCreateWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposCreateWebhookRequest req = new ReposCreateWebhookRequest("velit", "dolor") {{
                requestBody = new ReposCreateWebhookRequestBody() {{
                    active = false;
                    config = new ReposCreateWebhookRequestBodyConfig() {{
                        contentType = ""json"";
                        digest = ""sha256"";
                        insecureSsl = ""0"";
                        secret = ""********"";
                        token = ""abc"";
                        url = "https://example.com/webhook";
                    }};;
                    events = new String[]{{
                        add("dolor"),
                        add("occaecati"),
                        add("atque"),
                        add("beatae"),
                    }};
                    name = "Leroy Schinner Jr.";
                }};;
            }};            

            ReposCreateWebhookResponse res = sdk.repos.reposCreateWebhook(req);

            if (res.hook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDeclineInvitationForAuthenticatedUser

Decline a repository invitation

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/collaborators/invitations#decline-a-repository-invitation>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDeclineInvitationForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.ReposDeclineInvitationForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDeclineInvitationForAuthenticatedUserRequest req = new ReposDeclineInvitationForAuthenticatedUserRequest(698558L);            

            ReposDeclineInvitationForAuthenticatedUserResponse res = sdk.repos.reposDeclineInvitationForAuthenticatedUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDelete

Deleting a repository requires admin access. If OAuth is used, the `delete_repo` scope is required.

If an organization owner has configured the organization to prevent members from deleting organization-owned
repositories, you will get a `403 Forbidden` response.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#delete-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDeleteRequest;
import org.openapis.openapi.models.operations.ReposDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDeleteRequest req = new ReposDeleteRequest("ea", "aperiam");            

            ReposDeleteResponse res = sdk.repos.reposDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDeleteAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Disables the ability to restrict who can push to this branch.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#delete-access-restrictions>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDeleteAccessRestrictionsRequest;
import org.openapis.openapi.models.operations.ReposDeleteAccessRestrictionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDeleteAccessRestrictionsRequest req = new ReposDeleteAccessRestrictionsRequest("dignissimos", "repellat", "velit");            

            ReposDeleteAccessRestrictionsResponse res = sdk.repos.reposDeleteAccessRestrictions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDeleteAdminBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#delete-admin-branch-protection>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDeleteAdminBranchProtectionRequest;
import org.openapis.openapi.models.operations.ReposDeleteAdminBranchProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDeleteAdminBranchProtectionRequest req = new ReposDeleteAdminBranchProtectionRequest("porro", "provident", "consectetur");            

            ReposDeleteAdminBranchProtectionResponse res = sdk.repos.reposDeleteAdminBranchProtection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDeleteAnEnvironment

You must authenticate using an access token with the repo scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/deployments/environments#delete-an-environment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDeleteAnEnvironmentRequest;
import org.openapis.openapi.models.operations.ReposDeleteAnEnvironmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDeleteAnEnvironmentRequest req = new ReposDeleteAnEnvironmentRequest("eligendi", "dignissimos", "consectetur");            

            ReposDeleteAnEnvironmentResponse res = sdk.repos.reposDeleteAnEnvironment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDeleteAutolink

This deletes a single autolink reference by ID that was configured for the given repository.

Information about autolinks are only available to repository administrators.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/repos/autolinks#delete-an-autolink-reference-from-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDeleteAutolinkRequest;
import org.openapis.openapi.models.operations.ReposDeleteAutolinkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDeleteAutolinkRequest req = new ReposDeleteAutolinkRequest(744101L, "natus", "temporibus");            

            ReposDeleteAutolinkResponse res = sdk.repos.reposDeleteAutolink(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDeleteBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#delete-branch-protection>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDeleteBranchProtectionRequest;
import org.openapis.openapi.models.operations.ReposDeleteBranchProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDeleteBranchProtectionRequest req = new ReposDeleteBranchProtectionRequest("officia", "amet", "tenetur");            

            ReposDeleteBranchProtectionResponse res = sdk.repos.reposDeleteBranchProtection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDeleteCommitComment

Delete a commit comment

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/commits/comments#delete-a-commit-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDeleteCommitCommentRequest;
import org.openapis.openapi.models.operations.ReposDeleteCommitCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDeleteCommitCommentRequest req = new ReposDeleteCommitCommentRequest(133949L, "quo", "itaque");            

            ReposDeleteCommitCommentResponse res = sdk.repos.reposDeleteCommitComment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDeleteCommitSignatureProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#delete-commit-signature-protection>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDeleteCommitSignatureProtectionRequest;
import org.openapis.openapi.models.operations.ReposDeleteCommitSignatureProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDeleteCommitSignatureProtectionRequest req = new ReposDeleteCommitSignatureProtectionRequest("illum", "laborum", "dignissimos");            

            ReposDeleteCommitSignatureProtectionResponse res = sdk.repos.reposDeleteCommitSignatureProtection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDeleteDeployKey

Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/deploy-keys#delete-a-deploy-key>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDeleteDeployKeyRequest;
import org.openapis.openapi.models.operations.ReposDeleteDeployKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDeleteDeployKeyRequest req = new ReposDeleteDeployKeyRequest(876285L, "qui", "consectetur");            

            ReposDeleteDeployKeyResponse res = sdk.repos.reposDeleteDeployKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDeleteDeployment

If the repository only has one deployment, you can delete the deployment regardless of its status. If the repository has more than one deployment, you can only delete inactive deployments. This ensures that repositories with multiple deployments will always have an active deployment. Anyone with `repo` or `repo_deployment` scopes can delete a deployment.

To set a deployment as inactive, you must:

*   Create a new deployment that is active so that the system has a record of the current state, then delete the previously active deployment.
*   Mark the active deployment as inactive by adding any non-successful deployment status.

For more information, see "[Create a deployment](https://docs.github.com/enterprise-server@3.3/rest/deployments/deployments/#create-a-deployment)" and "[Create a deployment status](https://docs.github.com/enterprise-server@3.3/rest/deployments/deployment-statuses#create-a-deployment-status)."

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/deployments/deployments#delete-a-deployment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDeleteDeploymentRequest;
import org.openapis.openapi.models.operations.ReposDeleteDeploymentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDeleteDeploymentRequest req = new ReposDeleteDeploymentRequest(995816L, "explicabo", "explicabo");            

            ReposDeleteDeploymentResponse res = sdk.repos.reposDeleteDeployment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDeleteDeploymentBranchPolicy

Deletes a deployment branch policy for an environment.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/deployments/branch-policies#delete-deployment-branch-policy>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDeleteDeploymentBranchPolicyRequest;
import org.openapis.openapi.models.operations.ReposDeleteDeploymentBranchPolicyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDeleteDeploymentBranchPolicyRequest req = new ReposDeleteDeploymentBranchPolicyRequest(350325L, "nihil", "non", "ab");            

            ReposDeleteDeploymentBranchPolicyResponse res = sdk.repos.reposDeleteDeploymentBranchPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDeleteFile

Deletes a file in a repository.

You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author.

The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.

You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.

**Note:** If you use this endpoint and the "[Create or update file contents](https://docs.github.com/enterprise-server@3.3/rest/reference/repos/#create-or-update-file-contents)" endpoint in parallel, the concurrent requests will conflict and you will receive errors. You must use these endpoints serially instead.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#delete-a-file>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDeleteFileRequest;
import org.openapis.openapi.models.operations.ReposDeleteFileRequestBody;
import org.openapis.openapi.models.operations.ReposDeleteFileRequestBodyAuthor;
import org.openapis.openapi.models.operations.ReposDeleteFileRequestBodyCommitter;
import org.openapis.openapi.models.operations.ReposDeleteFileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDeleteFileRequest req = new ReposDeleteFileRequest(                new ReposDeleteFileRequestBody("illo", "hic") {{
                                author = new ReposDeleteFileRequestBodyAuthor() {{
                                    email = "Violette.Friesen34@yahoo.com";
                                    name = "Marjorie Waelchi";
                                }};;
                                branch = "explicabo";
                                committer = new ReposDeleteFileRequestBodyCommitter() {{
                                    email = "Julian53@hotmail.com";
                                    name = "Colleen Murazik";
                                }};;
                            }};, "magnam", "sit", "modi");            

            ReposDeleteFileResponse res = sdk.repos.reposDeleteFile(req);

            if (res.fileCommit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDeleteInvitation

Delete a repository invitation

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/collaborators/invitations#delete-a-repository-invitation>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDeleteInvitationRequest;
import org.openapis.openapi.models.operations.ReposDeleteInvitationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDeleteInvitationRequest req = new ReposDeleteInvitationRequest(430116L, "nesciunt", "mollitia");            

            ReposDeleteInvitationResponse res = sdk.repos.reposDeleteInvitation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDeletePagesSite

Deletes a GitHub Enterprise Server Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages).

To use this endpoint, you must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission. A token with the `repo` scope or Pages write permission is required. GitHub Apps must have the `administration:write` and `pages:write` permissions.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/pages#delete-a-github-pages-site>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDeletePagesSiteRequest;
import org.openapis.openapi.models.operations.ReposDeletePagesSiteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDeletePagesSiteRequest req = new ReposDeletePagesSiteRequest("dignissimos", "fugiat");            

            ReposDeletePagesSiteResponse res = sdk.repos.reposDeletePagesSite(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDeletePullRequestReviewProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#delete-pull-request-review-protection>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDeletePullRequestReviewProtectionRequest;
import org.openapis.openapi.models.operations.ReposDeletePullRequestReviewProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDeletePullRequestReviewProtectionRequest req = new ReposDeletePullRequestReviewProtectionRequest("nostrum", "molestiae", "veniam");            

            ReposDeletePullRequestReviewProtectionResponse res = sdk.repos.reposDeletePullRequestReviewProtection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDeleteRelease

Users with push access to the repository can delete a release.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#delete-a-release>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDeleteReleaseRequest;
import org.openapis.openapi.models.operations.ReposDeleteReleaseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDeleteReleaseRequest req = new ReposDeleteReleaseRequest("reiciendis", 66207L, "modi");            

            ReposDeleteReleaseResponse res = sdk.repos.reposDeleteRelease(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDeleteReleaseAsset

Delete a release asset

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#delete-a-release-asset>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDeleteReleaseAssetRequest;
import org.openapis.openapi.models.operations.ReposDeleteReleaseAssetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDeleteReleaseAssetRequest req = new ReposDeleteReleaseAssetRequest(13865L, "aut", "eveniet");            

            ReposDeleteReleaseAssetResponse res = sdk.repos.reposDeleteReleaseAsset(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDeleteWebhook

Delete a repository webhook

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/webhooks/repos#delete-a-repository-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDeleteWebhookRequest;
import org.openapis.openapi.models.operations.ReposDeleteWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDeleteWebhookRequest req = new ReposDeleteWebhookRequest(483753L, "commodi", "numquam");            

            ReposDeleteWebhookResponse res = sdk.repos.reposDeleteWebhook(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDisableLfsForRepo

Disables Git LFS for a repository. Access tokens must have the `admin:enterprise` scope.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#disable-git-lfs-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDisableLfsForRepoRequest;
import org.openapis.openapi.models.operations.ReposDisableLfsForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDisableLfsForRepoRequest req = new ReposDisableLfsForRepoRequest("dolorum", "possimus");            

            ReposDisableLfsForRepoResponse res = sdk.repos.reposDisableLfsForRepo(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDownloadTarballArchive

Gets a redirect URL to download a tar archive for a repository. If you omit `:ref`, the repository’s default branch (usually
`main`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
the `Location` header to make a second `GET` request.
**Note**: For private repositories, these links are temporary and expire after five minutes.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#download-a-repository-archive>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDownloadTarballArchiveRequest;
import org.openapis.openapi.models.operations.ReposDownloadTarballArchiveResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDownloadTarballArchiveRequest req = new ReposDownloadTarballArchiveRequest("voluptate", "consectetur", "nesciunt");            

            ReposDownloadTarballArchiveResponse res = sdk.repos.reposDownloadTarballArchive(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposDownloadZipballArchive

Gets a redirect URL to download a zip archive for a repository. If you omit `:ref`, the repository’s default branch (usually
`main`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
the `Location` header to make a second `GET` request.

**Note**: For private repositories, these links are temporary and expire after five minutes. If the repository is empty, you will receive a 404 when you follow the redirect.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#download-a-repository-archive>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposDownloadZipballArchiveRequest;
import org.openapis.openapi.models.operations.ReposDownloadZipballArchiveResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposDownloadZipballArchiveRequest req = new ReposDownloadZipballArchiveRequest("quaerat", "itaque", "minus");            

            ReposDownloadZipballArchiveResponse res = sdk.repos.reposDownloadZipballArchive(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposEnableLfsForRepo

Enables Git LFS for a repository. Access tokens must have the `admin:enterprise` scope.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#enable-git-lfs-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposEnableLfsForRepoRequest;
import org.openapis.openapi.models.operations.ReposEnableLfsForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposEnableLfsForRepoRequest req = new ReposEnableLfsForRepoRequest("sunt", "distinctio");            

            ReposEnableLfsForRepoResponse res = sdk.repos.reposEnableLfsForRepo(req);

            if (res.reposEnableLfsForRepo202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGenerateReleaseNotes

Generate a name and body describing a [release](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#releases). The body content will be markdown formatted and contain information like the changes since last release and users who contributed. The generated release notes are not saved anywhere. They are intended to be generated and used when creating a new release.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#generate-release-notes>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGenerateReleaseNotesRequest;
import org.openapis.openapi.models.operations.ReposGenerateReleaseNotesRequestBody;
import org.openapis.openapi.models.operations.ReposGenerateReleaseNotesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGenerateReleaseNotesRequest req = new ReposGenerateReleaseNotesRequest(                new ReposGenerateReleaseNotesRequestBody("iusto") {{
                                configurationFilePath = "quas";
                                previousTagName = "et";
                                targetCommitish = "facilis";
                            }};, "amet", "autem");            

            ReposGenerateReleaseNotesResponse res = sdk.repos.reposGenerateReleaseNotes(req);

            if (res.releaseNotesContent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGet

The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network.

**Note:** In order to see the `security_and_analysis` block for a repository you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/enterprise-server@3.3/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#get-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetRequest;
import org.openapis.openapi.models.operations.ReposGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetRequest req = new ReposGetRequest("fuga", "alias");            

            ReposGetResponse res = sdk.repos.reposGet(req);

            if (res.fullRepository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists who has access to this protected branch.

**Note**: Users, apps, and teams `restrictions` are only available for organization-owned repositories.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#get-access-restrictions>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetAccessRestrictionsRequest;
import org.openapis.openapi.models.operations.ReposGetAccessRestrictionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetAccessRestrictionsRequest req = new ReposGetAccessRestrictionsRequest("rem", "aut", "quos");            

            ReposGetAccessRestrictionsResponse res = sdk.repos.reposGetAccessRestrictions(req);

            if (res.branchRestrictionPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetAdminBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#get-admin-branch-protection>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetAdminBranchProtectionRequest;
import org.openapis.openapi.models.operations.ReposGetAdminBranchProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetAdminBranchProtectionRequest req = new ReposGetAdminBranchProtectionRequest("laudantium", "repellendus", "veritatis");            

            ReposGetAdminBranchProtectionResponse res = sdk.repos.reposGetAdminBranchProtection(req);

            if (res.protectedBranchAdminEnforced != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetAllEnvironments

Lists the environments for a repository.

Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/deployments/environments#list-environments>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetAllEnvironmentsRequest;
import org.openapis.openapi.models.operations.ReposGetAllEnvironmentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetAllEnvironmentsRequest req = new ReposGetAllEnvironmentsRequest("quae", "eaque") {{
                page = 904827L;
                perPage = 965517L;
            }};            

            ReposGetAllEnvironmentsResponse res = sdk.repos.reposGetAllEnvironments(req);

            if (res.reposGetAllEnvironments200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetAllStatusCheckContexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#get-all-status-check-contexts>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetAllStatusCheckContextsRequest;
import org.openapis.openapi.models.operations.ReposGetAllStatusCheckContextsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetAllStatusCheckContextsRequest req = new ReposGetAllStatusCheckContextsRequest("mollitia", "nulla", "officia");            

            ReposGetAllStatusCheckContextsResponse res = sdk.repos.reposGetAllStatusCheckContexts(req);

            if (res.reposGetAllStatusCheckContexts200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetAllTopics

Get all repository topics

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#get-all-repository-topics>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetAllTopicsRequest;
import org.openapis.openapi.models.operations.ReposGetAllTopicsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetAllTopicsRequest req = new ReposGetAllTopicsRequest("sed", "voluptatem") {{
                page = 664L;
                perPage = 910073L;
            }};            

            ReposGetAllTopicsResponse res = sdk.repos.reposGetAllTopics(req);

            if (res.topic != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetAppsWithAccessToProtectedBranch

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the GitHub Apps that have push access to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#list-apps-with-access-to-the-protected-branch>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetAppsWithAccessToProtectedBranchRequest;
import org.openapis.openapi.models.operations.ReposGetAppsWithAccessToProtectedBranchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetAppsWithAccessToProtectedBranchRequest req = new ReposGetAppsWithAccessToProtectedBranchRequest("hic", "voluptatem", "incidunt");            

            ReposGetAppsWithAccessToProtectedBranchResponse res = sdk.repos.reposGetAppsWithAccessToProtectedBranch(req);

            if (res.integrations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetAutolink

This returns a single autolink reference by ID that was configured for the given repository.

Information about autolinks are only available to repository administrators.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/repos/autolinks#get-an-autolink-reference-of-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetAutolinkRequest;
import org.openapis.openapi.models.operations.ReposGetAutolinkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetAutolinkRequest req = new ReposGetAutolinkRequest(185448L, "qui", "necessitatibus");            

            ReposGetAutolinkResponse res = sdk.repos.reposGetAutolink(req);

            if (res.autolink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetBranch

Get a branch

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branches#get-a-branch>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetBranchRequest;
import org.openapis.openapi.models.operations.ReposGetBranchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetBranchRequest req = new ReposGetBranchRequest("harum", "explicabo", "beatae");            

            ReposGetBranchResponse res = sdk.repos.reposGetBranch(req);

            if (res.branchWithProtection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#get-branch-protection>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetBranchProtectionRequest;
import org.openapis.openapi.models.operations.ReposGetBranchProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetBranchProtectionRequest req = new ReposGetBranchProtectionRequest("aliquid", "modi", "optio");            

            ReposGetBranchProtectionResponse res = sdk.repos.reposGetBranchProtection(req);

            if (res.branchProtection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetCodeFrequencyStats

Returns a weekly aggregate of the number of additions and deletions pushed to a repository.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/metrics/statistics#get-the-weekly-commit-activity>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetCodeFrequencyStatsRequest;
import org.openapis.openapi.models.operations.ReposGetCodeFrequencyStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetCodeFrequencyStatsRequest req = new ReposGetCodeFrequencyStatsRequest("voluptatibus", "molestias");            

            ReposGetCodeFrequencyStatsResponse res = sdk.repos.reposGetCodeFrequencyStats(req);

            if (res.codeFrequencyStats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetCollaboratorPermissionLevel

Checks the repository permission of a collaborator. The possible repository permissions are `admin`, `write`, `read`, and `none`.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/collaborators/collaborators#get-repository-permissions-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetCollaboratorPermissionLevelRequest;
import org.openapis.openapi.models.operations.ReposGetCollaboratorPermissionLevelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetCollaboratorPermissionLevelRequest req = new ReposGetCollaboratorPermissionLevelRequest("officia", "libero", "totam");            

            ReposGetCollaboratorPermissionLevelResponse res = sdk.repos.reposGetCollaboratorPermissionLevel(req);

            if (res.repositoryCollaboratorPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetCombinedStatusForRef

Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.


Additionally, a combined `state` is returned. The `state` is one of:

*   **failure** if any of the contexts report as `error` or `failure`
*   **pending** if there are no statuses or a context is `pending`
*   **success** if the latest status for all contexts is `success`

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/commits/statuses#get-the-combined-status-for-a-specific-reference>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetCombinedStatusForRefRequest;
import org.openapis.openapi.models.operations.ReposGetCombinedStatusForRefResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetCombinedStatusForRefRequest req = new ReposGetCombinedStatusForRefRequest("sequi", "aliquid", "ea") {{
                page = 774501L;
                perPage = 498388L;
            }};            

            ReposGetCombinedStatusForRefResponse res = sdk.repos.reposGetCombinedStatusForRef(req);

            if (res.combinedCommitStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetCommit

Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.

**Note:** If there are more than 300 files in the commit diff, the response will include pagination link headers for the remaining files, up to a limit of 3000 files. Each page contains the static commit information, and the only changes are to the file listing.

You can pass the appropriate [media type](https://docs.github.com/enterprise-server@3.3/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to  fetch `diff` and `patch` formats. Diffs with binary data will have no `patch` property.

To return only the SHA-1 hash of the commit reference, you can provide the `sha` custom [media type](https://docs.github.com/enterprise-server@3.3/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) in the `Accept` header. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.

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
<https://docs.github.com/enterprise-server@3.3/rest/commits/commits#get-a-commit>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetCommitRequest;
import org.openapis.openapi.models.operations.ReposGetCommitResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetCommitRequest req = new ReposGetCommitRequest("odit", "velit", "reiciendis") {{
                page = 997918L;
                perPage = 861123L;
            }};            

            ReposGetCommitResponse res = sdk.repos.reposGetCommit(req);

            if (res.commit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetCommitActivityStats

Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/metrics/statistics#get-the-last-year-of-commit-activity>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetCommitActivityStatsRequest;
import org.openapis.openapi.models.operations.ReposGetCommitActivityStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetCommitActivityStatsRequest req = new ReposGetCommitActivityStatsRequest("laborum", "natus");            

            ReposGetCommitActivityStatsResponse res = sdk.repos.reposGetCommitActivityStats(req);

            if (res.commitActivities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetCommitComment

Get a commit comment

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/commits/comments#get-a-commit-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetCommitCommentRequest;
import org.openapis.openapi.models.operations.ReposGetCommitCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetCommitCommentRequest req = new ReposGetCommitCommentRequest(883780L, "doloremque", "nisi");            

            ReposGetCommitCommentResponse res = sdk.repos.reposGetCommitComment(req);

            if (res.commitComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetCommitSignatureProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://docs.github.com/enterprise-server@3.3/articles/signing-commits-with-gpg) in GitHub Help.

**Note**: You must enable branch protection to require signed commits.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#get-commit-signature-protection>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetCommitSignatureProtectionRequest;
import org.openapis.openapi.models.operations.ReposGetCommitSignatureProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetCommitSignatureProtectionRequest req = new ReposGetCommitSignatureProtectionRequest("rerum", "recusandae", "voluptates");            

            ReposGetCommitSignatureProtectionResponse res = sdk.repos.reposGetCommitSignatureProtection(req);

            if (res.protectedBranchAdminEnforced != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetContent

Gets the contents of a file or directory in a repository. Specify the file path or directory in `:path`. If you omit
`:path`, you will receive the contents of the repository's root directory. See the description below regarding what the API response includes for directories. 

Files and symlinks support [a custom media type](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#custom-media-types) for
retrieving the raw content or rendered HTML (when supported). All content types support [a custom media
type](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#custom-media-types) to ensure the content is returned in a consistent
object format.

**Notes**:
*   To get a repository's contents recursively, you can [recursively get the tree](https://docs.github.com/enterprise-server@3.3/rest/reference/git#trees).
*   This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees
API](https://docs.github.com/enterprise-server@3.3/rest/reference/git#get-a-tree).
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
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#get-repository-content>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetContentRequest;
import org.openapis.openapi.models.operations.ReposGetContentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetContentRequest req = new ReposGetContentRequest("non", "rem", "quia") {{
                ref = "ullam";
            }};            

            ReposGetContentResponse res = sdk.repos.reposGetContent(req);

            if (res.reposGetContent200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetContributorsStats


Returns the `total` number of commits authored by the contributor. In addition, the response includes a Weekly Hash (`weeks` array) with the following information:

*   `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
*   `a` - Number of additions
*   `d` - Number of deletions
*   `c` - Number of commits

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/metrics/statistics#get-all-contributor-commit-activity>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetContributorsStatsRequest;
import org.openapis.openapi.models.operations.ReposGetContributorsStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetContributorsStatsRequest req = new ReposGetContributorsStatsRequest("quisquam", "dicta");            

            ReposGetContributorsStatsResponse res = sdk.repos.reposGetContributorsStats(req);

            if (res.contributorActivities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetDeployKey

Get a deploy key

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/deploy-keys#get-a-deploy-key>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetDeployKeyRequest;
import org.openapis.openapi.models.operations.ReposGetDeployKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetDeployKeyRequest req = new ReposGetDeployKeyRequest(973017L, "eligendi", "quae");            

            ReposGetDeployKeyResponse res = sdk.repos.reposGetDeployKey(req);

            if (res.deployKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetDeployment

Get a deployment

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/deployments/deployments#get-a-deployment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetDeploymentRequest;
import org.openapis.openapi.models.operations.ReposGetDeploymentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetDeploymentRequest req = new ReposGetDeploymentRequest(885022L, "architecto", "architecto");            

            ReposGetDeploymentResponse res = sdk.repos.reposGetDeployment(req);

            if (res.deployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetDeploymentBranchPolicy

Gets a deployment branch policy for an environment.

Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/deployments/branch-policies#get-deployment-branch-policy>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetDeploymentBranchPolicyRequest;
import org.openapis.openapi.models.operations.ReposGetDeploymentBranchPolicyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetDeploymentBranchPolicyRequest req = new ReposGetDeploymentBranchPolicyRequest(317898L, "optio", "rem", "perferendis");            

            ReposGetDeploymentBranchPolicyResponse res = sdk.repos.reposGetDeploymentBranchPolicy(req);

            if (res.deploymentBranchPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetDeploymentStatus

Users with pull access can view a deployment status for a deployment:

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/deployments/statuses#get-a-deployment-status>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetDeploymentStatusRequest;
import org.openapis.openapi.models.operations.ReposGetDeploymentStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetDeploymentStatusRequest req = new ReposGetDeploymentStatusRequest(704271L, "reiciendis", "a", 615058L);            

            ReposGetDeploymentStatusResponse res = sdk.repos.reposGetDeploymentStatus(req);

            if (res.deploymentStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetEnvironment

**Note:** To get information about name patterns that branches must match in order to deploy to this environment, see "[Get a deployment branch policy](/rest/deployments/branch-policies#get-a-deployment-branch-policy)."

Anyone with read access to the repository can use this endpoint. If the
repository is private, you must use an access token with the `repo` scope. GitHub
Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/deployments/environments#get-an-environment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetEnvironmentRequest;
import org.openapis.openapi.models.operations.ReposGetEnvironmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetEnvironmentRequest req = new ReposGetEnvironmentRequest("dicta", "quos", "ullam");            

            ReposGetEnvironmentResponse res = sdk.repos.reposGetEnvironment(req);

            if (res.environment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetLatestPagesBuild

Get latest Pages build

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/pages#get-latest-pages-build>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetLatestPagesBuildRequest;
import org.openapis.openapi.models.operations.ReposGetLatestPagesBuildResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetLatestPagesBuildRequest req = new ReposGetLatestPagesBuildRequest("dolore", "modi");            

            ReposGetLatestPagesBuildResponse res = sdk.repos.reposGetLatestPagesBuild(req);

            if (res.pageBuild != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetLatestRelease

View the latest published full release for the repository.

The latest release is the most recent non-prerelease, non-draft release, sorted by the `created_at` attribute. The `created_at` attribute is the date of the commit used for the release, and not the date when the release was drafted or published.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#get-the-latest-release>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetLatestReleaseRequest;
import org.openapis.openapi.models.operations.ReposGetLatestReleaseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetLatestReleaseRequest req = new ReposGetLatestReleaseRequest("itaque", "maxime");            

            ReposGetLatestReleaseResponse res = sdk.repos.reposGetLatestRelease(req);

            if (res.release != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetPages

Get a GitHub Enterprise Server Pages site

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/pages#get-a-github-pages-site>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetPagesRequest;
import org.openapis.openapi.models.operations.ReposGetPagesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetPagesRequest req = new ReposGetPagesRequest("modi", "consequuntur");            

            ReposGetPagesResponse res = sdk.repos.reposGetPages(req);

            if (res.page != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetPagesBuild

Get GitHub Enterprise Server Pages build

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/pages#get-github-pages-build>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetPagesBuildRequest;
import org.openapis.openapi.models.operations.ReposGetPagesBuildResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetPagesBuildRequest req = new ReposGetPagesBuildRequest(828147L, "vero", "doloribus");            

            ReposGetPagesBuildResponse res = sdk.repos.reposGetPagesBuild(req);

            if (res.pageBuild != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetParticipationStats

Returns the total commit counts for the `owner` and total commit counts in `all`. `all` is everyone combined, including the `owner` in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract `owner` from `all`.

The array order is oldest week (index 0) to most recent week.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/metrics/statistics#get-the-weekly-commit-count>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetParticipationStatsRequest;
import org.openapis.openapi.models.operations.ReposGetParticipationStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetParticipationStatsRequest req = new ReposGetParticipationStatsRequest("impedit", "porro");            

            ReposGetParticipationStatsResponse res = sdk.repos.reposGetParticipationStats(req);

            if (res.participationStats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetPullRequestReviewProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#get-pull-request-review-protection>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetPullRequestReviewProtectionRequest;
import org.openapis.openapi.models.operations.ReposGetPullRequestReviewProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetPullRequestReviewProtectionRequest req = new ReposGetPullRequestReviewProtectionRequest("accusamus", "totam", "reiciendis");            

            ReposGetPullRequestReviewProtectionResponse res = sdk.repos.reposGetPullRequestReviewProtection(req);

            if (res.protectedBranchPullRequestReview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetPunchCardStats

Each array contains the day number, hour number, and number of commits:

*   `0-6`: Sunday - Saturday
*   `0-23`: Hour of day
*   Number of commits

For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/statistics/repos#get-the-hourly-commit-count-for-each-day>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetPunchCardStatsRequest;
import org.openapis.openapi.models.operations.ReposGetPunchCardStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetPunchCardStatsRequest req = new ReposGetPunchCardStatsRequest("ab", "sint");            

            ReposGetPunchCardStatsResponse res = sdk.repos.reposGetPunchCardStats(req);

            if (res.codeFrequencyStats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetReadme

Gets the preferred README for a repository.

READMEs support [custom media types](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#get-a-repository-readme>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetReadmeRequest;
import org.openapis.openapi.models.operations.ReposGetReadmeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetReadmeRequest req = new ReposGetReadmeRequest("nihil", "esse") {{
                ref = "iure";
            }};            

            ReposGetReadmeResponse res = sdk.repos.reposGetReadme(req);

            if (res.contentFile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetReadmeInDirectory

Gets the README from a repository directory.

READMEs support [custom media types](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#get-a-repository-directory-readme>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetReadmeInDirectoryRequest;
import org.openapis.openapi.models.operations.ReposGetReadmeInDirectoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetReadmeInDirectoryRequest req = new ReposGetReadmeInDirectoryRequest("odio", "nesciunt", "debitis") {{
                ref = "vel";
            }};            

            ReposGetReadmeInDirectoryResponse res = sdk.repos.reposGetReadmeInDirectory(req);

            if (res.contentFile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetRelease

**Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#hypermedia).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#get-a-release>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetReleaseRequest;
import org.openapis.openapi.models.operations.ReposGetReleaseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetReleaseRequest req = new ReposGetReleaseRequest("neque", 357758L, "voluptas");            

            ReposGetReleaseResponse res = sdk.repos.reposGetRelease(req);

            if (res.release != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetReleaseAsset

To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://docs.github.com/enterprise-server@3.3/rest/overview/media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#get-a-release-asset>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetReleaseAssetRequest;
import org.openapis.openapi.models.operations.ReposGetReleaseAssetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetReleaseAssetRequest req = new ReposGetReleaseAssetRequest(163684L, "officia", "reprehenderit");            

            ReposGetReleaseAssetResponse res = sdk.repos.reposGetReleaseAsset(req);

            if (res.releaseAsset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetReleaseByTag

Get a published release with the specified tag.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#get-a-release-by-tag-name>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetReleaseByTagRequest;
import org.openapis.openapi.models.operations.ReposGetReleaseByTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetReleaseByTagRequest req = new ReposGetReleaseByTagRequest("distinctio", "eius", "ipsa");            

            ReposGetReleaseByTagResponse res = sdk.repos.reposGetReleaseByTag(req);

            if (res.release != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetStatusChecksProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#get-status-checks-protection>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetStatusChecksProtectionRequest;
import org.openapis.openapi.models.operations.ReposGetStatusChecksProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetStatusChecksProtectionRequest req = new ReposGetStatusChecksProtectionRequest("rem", "maiores", "accusantium");            

            ReposGetStatusChecksProtectionResponse res = sdk.repos.reposGetStatusChecksProtection(req);

            if (res.statusCheckPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetTeamsWithAccessToProtectedBranch

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the teams who have push access to this branch. The list includes child teams.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#list-teams-with-access-to-the-protected-branch>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetTeamsWithAccessToProtectedBranchRequest;
import org.openapis.openapi.models.operations.ReposGetTeamsWithAccessToProtectedBranchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetTeamsWithAccessToProtectedBranchRequest req = new ReposGetTeamsWithAccessToProtectedBranchRequest("veniam", "saepe", "neque");            

            ReposGetTeamsWithAccessToProtectedBranchResponse res = sdk.repos.reposGetTeamsWithAccessToProtectedBranch(req);

            if (res.teams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetUsersWithAccessToProtectedBranch

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the people who have push access to this branch.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#list-users-with-access-to-the-protected-branch>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetUsersWithAccessToProtectedBranchRequest;
import org.openapis.openapi.models.operations.ReposGetUsersWithAccessToProtectedBranchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetUsersWithAccessToProtectedBranchRequest req = new ReposGetUsersWithAccessToProtectedBranchRequest("facere", "aliquam", "quos");            

            ReposGetUsersWithAccessToProtectedBranchResponse res = sdk.repos.reposGetUsersWithAccessToProtectedBranch(req);

            if (res.simpleUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetWebhook

Returns a webhook configured in a repository. To get only the webhook `config` properties, see "[Get a webhook configuration for a repository](/rest/reference/repos#get-a-webhook-configuration-for-a-repository)."

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/webhooks/repos#get-a-repository-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetWebhookRequest;
import org.openapis.openapi.models.operations.ReposGetWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetWebhookRequest req = new ReposGetWebhookRequest(984773L, "fugiat", "est");            

            ReposGetWebhookResponse res = sdk.repos.reposGetWebhook(req);

            if (res.hook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetWebhookConfigForRepo

Returns the webhook configuration for a repository. To get more information about the webhook, including the `active` state and `events`, use "[Get a repository webhook](/rest/reference/orgs#get-a-repository-webhook)."

Access tokens must have the `read:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:read` permission.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/webhooks/repo-config#get-a-webhook-configuration-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetWebhookConfigForRepoRequest;
import org.openapis.openapi.models.operations.ReposGetWebhookConfigForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetWebhookConfigForRepoRequest req = new ReposGetWebhookConfigForRepoRequest(962396L, "velit", "vitae");            

            ReposGetWebhookConfigForRepoResponse res = sdk.repos.reposGetWebhookConfigForRepo(req);

            if (res.webhookConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposGetWebhookDelivery

Returns a delivery for a webhook configured in a repository.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/webhooks/repo-deliveries#get-a-delivery-for-a-repository-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposGetWebhookDeliveryRequest;
import org.openapis.openapi.models.operations.ReposGetWebhookDeliveryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposGetWebhookDeliveryRequest req = new ReposGetWebhookDeliveryRequest(201096L, 630832L, "illo", "repellat");            

            ReposGetWebhookDeliveryResponse res = sdk.repos.reposGetWebhookDelivery(req);

            if (res.hookDelivery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListAutolinks

This returns a list of autolinks configured for the given repository.

Information about autolinks are only available to repository administrators.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/repos/autolinks#list-all-autolinks-of-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListAutolinksRequest;
import org.openapis.openapi.models.operations.ReposListAutolinksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListAutolinksRequest req = new ReposListAutolinksRequest("nemo", "doloribus") {{
                page = 823753L;
            }};            

            ReposListAutolinksResponse res = sdk.repos.reposListAutolinks(req);

            if (res.autolinks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListBranches

List branches

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branches#list-branches>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListBranchesRequest;
import org.openapis.openapi.models.operations.ReposListBranchesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListBranchesRequest req = new ReposListBranchesRequest("unde", "incidunt") {{
                page = 128021L;
                perPage = 368491L;
                protected_ = false;
            }};            

            ReposListBranchesResponse res = sdk.repos.reposListBranches(req);

            if (res.shortBranches != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListBranchesForHeadCommit

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/commits/commits#list-branches-for-head-commit>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListBranchesForHeadCommitRequest;
import org.openapis.openapi.models.operations.ReposListBranchesForHeadCommitResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListBranchesForHeadCommitRequest req = new ReposListBranchesForHeadCommitRequest("cupiditate", "optio", "alias");            

            ReposListBranchesForHeadCommitResponse res = sdk.repos.reposListBranchesForHeadCommit(req);

            if (res.branchShorts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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
<https://docs.github.com/enterprise-server@3.3/rest/collaborators/collaborators#list-repository-collaborators>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListCollaboratorsAffiliationEnum;
import org.openapis.openapi.models.operations.ReposListCollaboratorsRequest;
import org.openapis.openapi.models.operations.ReposListCollaboratorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListCollaboratorsRequest req = new ReposListCollaboratorsRequest("quidem", "nesciunt") {{
                affiliation = ReposListCollaboratorsAffiliationEnum.DIRECT;
                page = 956124L;
                perPage = 164319L;
            }};            

            ReposListCollaboratorsResponse res = sdk.repos.reposListCollaborators(req);

            if (res.collaborators != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListCommentsForCommit

Use the `:commit_sha` to specify the commit that will have its comments listed.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/commits/comments#list-commit-comments>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListCommentsForCommitRequest;
import org.openapis.openapi.models.operations.ReposListCommentsForCommitResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListCommentsForCommitRequest req = new ReposListCommentsForCommitRequest("veniam", "debitis", "officia") {{
                page = 575062L;
                perPage = 280859L;
            }};            

            ReposListCommentsForCommitResponse res = sdk.repos.reposListCommentsForCommit(req);

            if (res.commitComments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListCommitCommentsForRepo

Commit Comments use [these custom media types](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#custom-media-types). You can read more about the use of media types in the API [here](https://docs.github.com/enterprise-server@3.3/rest/overview/media-types/).

Comments are ordered by ascending ID.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/commits/comments#list-commit-comments-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListCommitCommentsForRepoRequest;
import org.openapis.openapi.models.operations.ReposListCommitCommentsForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListCommitCommentsForRepoRequest req = new ReposListCommitCommentsForRepoRequest("numquam", "tenetur") {{
                page = 236790L;
                perPage = 728559L;
            }};            

            ReposListCommitCommentsForRepoResponse res = sdk.repos.reposListCommitCommentsForRepo(req);

            if (res.commitComments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListCommitStatusesForRef

Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.

This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/commits/statuses#list-commit-statuses-for-a-reference>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListCommitStatusesForRefRequest;
import org.openapis.openapi.models.operations.ReposListCommitStatusesForRefResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListCommitStatusesForRefRequest req = new ReposListCommitStatusesForRefRequest("in", "minima", "ex") {{
                page = 791762L;
                perPage = 68880L;
            }};            

            ReposListCommitStatusesForRefResponse res = sdk.repos.reposListCommitStatusesForRef(req);

            if (res.statuses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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
<https://docs.github.com/enterprise-server@3.3/rest/commits/commits#list-commits>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListCommitsRequest;
import org.openapis.openapi.models.operations.ReposListCommitsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListCommitsRequest req = new ReposListCommitsRequest("beatae", "hic") {{
                author = "nisi";
                page = 786954L;
                path = "dolor";
                perPage = 496548L;
                sha = "fuga";
                since = OffsetDateTime.parse("2022-11-24T14:34:13.159Z");
                until = OffsetDateTime.parse("2022-08-09T02:03:12.598Z");
            }};            

            ReposListCommitsResponse res = sdk.repos.reposListCommits(req);

            if (res.commits != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListContributors

Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API caches contributor data to improve performance.

GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#list-repository-contributors>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListContributorsRequest;
import org.openapis.openapi.models.operations.ReposListContributorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListContributorsRequest req = new ReposListContributorsRequest("magni", "incidunt") {{
                anon = "adipisci";
                page = 506343L;
                perPage = 220528L;
            }};            

            ReposListContributorsResponse res = sdk.repos.reposListContributors(req);

            if (res.contributors != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListDeployKeys

List deploy keys

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/deploy-keys#list-deploy-keys>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListDeployKeysRequest;
import org.openapis.openapi.models.operations.ReposListDeployKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListDeployKeysRequest req = new ReposListDeployKeysRequest("exercitationem", "expedita") {{
                page = 706411L;
                perPage = 769634L;
            }};            

            ReposListDeployKeysResponse res = sdk.repos.reposListDeployKeys(req);

            if (res.deployKeys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListDeploymentBranchPolicies

Lists the deployment branch policies for an environment.

Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/deployments/branch-policies#list-deployment-branch-policies>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListDeploymentBranchPoliciesRequest;
import org.openapis.openapi.models.operations.ReposListDeploymentBranchPoliciesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListDeploymentBranchPoliciesRequest req = new ReposListDeploymentBranchPoliciesRequest("sit", "nemo", "culpa") {{
                page = 159393L;
                perPage = 230571L;
            }};            

            ReposListDeploymentBranchPoliciesResponse res = sdk.repos.reposListDeploymentBranchPolicies(req);

            if (res.reposListDeploymentBranchPolicies200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListDeploymentStatuses

Users with pull access can view deployment statuses for a deployment:

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/deployments/statuses#list-deployment-statuses>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListDeploymentStatusesRequest;
import org.openapis.openapi.models.operations.ReposListDeploymentStatusesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListDeploymentStatusesRequest req = new ReposListDeploymentStatusesRequest(644734L, "modi", "veniam") {{
                page = 800256L;
                perPage = 932250L;
            }};            

            ReposListDeploymentStatusesResponse res = sdk.repos.reposListDeploymentStatuses(req);

            if (res.deploymentStatuses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListDeployments

Simple filtering of deployments is available via query parameters:

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/deployments/deployments#list-deployments>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListDeploymentsRequest;
import org.openapis.openapi.models.operations.ReposListDeploymentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListDeploymentsRequest req = new ReposListDeploymentsRequest("a", "quisquam") {{
                environment = "enim";
                page = 987759L;
                perPage = 826806L;
                ref = "officiis";
                sha = "architecto";
                task = "alias";
            }};            

            ReposListDeploymentsResponse res = sdk.repos.reposListDeployments(req);

            if (res.deployments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListForAuthenticatedUser

Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#list-repositories-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListForAuthenticatedUserDirectionEnum;
import org.openapis.openapi.models.operations.ReposListForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.ReposListForAuthenticatedUserResponse;
import org.openapis.openapi.models.operations.ReposListForAuthenticatedUserSortEnum;
import org.openapis.openapi.models.operations.ReposListForAuthenticatedUserTypeEnum;
import org.openapis.openapi.models.operations.ReposListForAuthenticatedUserVisibilityEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListForAuthenticatedUserRequest req = new ReposListForAuthenticatedUserRequest() {{
                affiliation = "culpa";
                before = OffsetDateTime.parse("2022-04-01T20:57:25.298Z");
                direction = ReposListForAuthenticatedUserDirectionEnum.DESC;
                page = 155978L;
                perPage = 118932L;
                since = OffsetDateTime.parse("2022-05-28T14:41:13.872Z");
                sort = ReposListForAuthenticatedUserSortEnum.FULL_NAME;
                type = ReposListForAuthenticatedUserTypeEnum.OWNER;
                visibility = ReposListForAuthenticatedUserVisibilityEnum.ALL;
            }};            

            ReposListForAuthenticatedUserResponse res = sdk.repos.reposListForAuthenticatedUser(req);

            if (res.repositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListForOrg

Lists repositories for the specified organization.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#list-organization-repositories>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListForOrgDirectionEnum;
import org.openapis.openapi.models.operations.ReposListForOrgRequest;
import org.openapis.openapi.models.operations.ReposListForOrgResponse;
import org.openapis.openapi.models.operations.ReposListForOrgSortEnum;
import org.openapis.openapi.models.operations.ReposListForOrgTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListForOrgRequest req = new ReposListForOrgRequest("accusantium") {{
                direction = ReposListForOrgDirectionEnum.ASC;
                page = 82876L;
                perPage = 590585L;
                sort = ReposListForOrgSortEnum.FULL_NAME;
                type = ReposListForOrgTypeEnum.FORKS;
            }};            

            ReposListForOrgResponse res = sdk.repos.reposListForOrg(req);

            if (res.minimalRepositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListForUser

Lists public repositories for the specified user. Note: For GitHub AE, this endpoint will list internal repositories for the specified user.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#list-repositories-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListForUserDirectionEnum;
import org.openapis.openapi.models.operations.ReposListForUserRequest;
import org.openapis.openapi.models.operations.ReposListForUserResponse;
import org.openapis.openapi.models.operations.ReposListForUserSortEnum;
import org.openapis.openapi.models.operations.ReposListForUserTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListForUserRequest req = new ReposListForUserRequest("quibusdam") {{
                direction = ReposListForUserDirectionEnum.DESC;
                page = 363224L;
                perPage = 923456L;
                sort = ReposListForUserSortEnum.CREATED;
                type = ReposListForUserTypeEnum.ALL;
            }};            

            ReposListForUserResponse res = sdk.repos.reposListForUser(req);

            if (res.minimalRepositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListForks

List forks

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#list-forks>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListForksRequest;
import org.openapis.openapi.models.operations.ReposListForksResponse;
import org.openapis.openapi.models.operations.ReposListForksSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListForksRequest req = new ReposListForksRequest("dignissimos", "laboriosam") {{
                page = 152283L;
                perPage = 486272L;
                sort = ReposListForksSortEnum.STARGAZERS;
            }};            

            ReposListForksResponse res = sdk.repos.reposListForks(req);

            if (res.minimalRepositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListInvitations

When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/collaborators/invitations#list-repository-invitations>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListInvitationsRequest;
import org.openapis.openapi.models.operations.ReposListInvitationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListInvitationsRequest req = new ReposListInvitationsRequest("provident", "cum") {{
                page = 983854L;
                perPage = 703966L;
            }};            

            ReposListInvitationsResponse res = sdk.repos.reposListInvitations(req);

            if (res.repositoryInvitations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListInvitationsForAuthenticatedUser

When authenticating as a user, this endpoint will list all currently open repository invitations for that user.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/collaborators/invitations#list-repository-invitations-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListInvitationsForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.ReposListInvitationsForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListInvitationsForAuthenticatedUserRequest req = new ReposListInvitationsForAuthenticatedUserRequest() {{
                page = 697330L;
                perPage = 932080L;
            }};            

            ReposListInvitationsForAuthenticatedUserResponse res = sdk.repos.reposListInvitationsForAuthenticatedUser(req);

            if (res.repositoryInvitations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListLanguages

Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#list-repository-languages>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListLanguagesRequest;
import org.openapis.openapi.models.operations.ReposListLanguagesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListLanguagesRequest req = new ReposListLanguagesRequest("laboriosam", "unde");            

            ReposListLanguagesResponse res = sdk.repos.reposListLanguages(req);

            if (res.language != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListPagesBuilds

List GitHub Enterprise Server Pages builds

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/pages#list-github-pages-builds>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListPagesBuildsRequest;
import org.openapis.openapi.models.operations.ReposListPagesBuildsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListPagesBuildsRequest req = new ReposListPagesBuildsRequest("modi", "perspiciatis") {{
                page = 944626L;
                perPage = 736985L;
            }};            

            ReposListPagesBuildsResponse res = sdk.repos.reposListPagesBuilds(req);

            if (res.pageBuilds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListPublic

Lists all public repositories in the order that they were created.

Note:
- For GitHub Enterprise Server, this endpoint will only list repositories available to all users on the enterprise.
- Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of repositories.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#list-public-repositories>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListPublicRequest;
import org.openapis.openapi.models.operations.ReposListPublicResponse;
import org.openapis.openapi.models.operations.ReposListPublicVisibilityEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListPublicRequest req = new ReposListPublicRequest() {{
                since = 135548L;
                visibility = ReposListPublicVisibilityEnum.ALL;
            }};            

            ReposListPublicResponse res = sdk.repos.reposListPublic(req);

            if (res.minimalRepositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListPullRequestsAssociatedWithCommit

Lists the merged pull request that introduced the commit to the repository. If the commit is not present in the default branch, will only return open pull requests associated with the commit.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/commits/commits#list-pull-requests-associated-with-a-commit>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListPullRequestsAssociatedWithCommitRequest;
import org.openapis.openapi.models.operations.ReposListPullRequestsAssociatedWithCommitResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListPullRequestsAssociatedWithCommitRequest req = new ReposListPullRequestsAssociatedWithCommitRequest("libero", "nam", "incidunt") {{
                page = 925395L;
                perPage = 797254L;
            }};            

            ReposListPullRequestsAssociatedWithCommitResponse res = sdk.repos.reposListPullRequestsAssociatedWithCommit(req);

            if (res.pullRequestSimples != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListReleaseAssets

List release assets

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#list-release-assets>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListReleaseAssetsRequest;
import org.openapis.openapi.models.operations.ReposListReleaseAssetsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListReleaseAssetsRequest req = new ReposListReleaseAssetsRequest("id", 904440L, "autem") {{
                page = 779409L;
                perPage = 198991L;
            }};            

            ReposListReleaseAssetsResponse res = sdk.repos.reposListReleaseAssets(req);

            if (res.releaseAssets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListReleases

This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#list-repository-tags).

Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#list-releases>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListReleasesRequest;
import org.openapis.openapi.models.operations.ReposListReleasesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListReleasesRequest req = new ReposListReleasesRequest("illum", "nemo") {{
                page = 848722L;
                perPage = 706872L;
            }};            

            ReposListReleasesResponse res = sdk.repos.reposListReleases(req);

            if (res.releases != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListTags

List repository tags

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#list-repository-tags>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListTagsRequest;
import org.openapis.openapi.models.operations.ReposListTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListTagsRequest req = new ReposListTagsRequest("non", "mollitia") {{
                page = 827051L;
                perPage = 927977L;
            }};            

            ReposListTagsResponse res = sdk.repos.reposListTags(req);

            if (res.tags != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListTeams

List repository teams

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#list-repository-teams>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListTeamsRequest;
import org.openapis.openapi.models.operations.ReposListTeamsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListTeamsRequest req = new ReposListTeamsRequest("distinctio", "pariatur") {{
                page = 323365L;
                perPage = 816151L;
            }};            

            ReposListTeamsResponse res = sdk.repos.reposListTeams(req);

            if (res.teams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListWebhookDeliveries

Returns a list of webhook deliveries for a webhook configured in a repository.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/webhooks/repo-deliveries#list-deliveries-for-a-repository-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListWebhookDeliveriesRequest;
import org.openapis.openapi.models.operations.ReposListWebhookDeliveriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListWebhookDeliveriesRequest req = new ReposListWebhookDeliveriesRequest(674683L, "eveniet", "laborum") {{
                cursor = "incidunt";
                perPage = 802356L;
                redelivery = false;
            }};            

            ReposListWebhookDeliveriesResponse res = sdk.repos.reposListWebhookDeliveries(req);

            if (res.hookDeliveryItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposListWebhooks

Lists webhooks for a repository. `last response` may return null if there have not been any deliveries within 30 days.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/webhooks/repos#list-repository-webhooks>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListWebhooksRequest;
import org.openapis.openapi.models.operations.ReposListWebhooksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListWebhooksRequest req = new ReposListWebhooksRequest("ipsam", "alias") {{
                page = 379894L;
                perPage = 647210L;
            }};            

            ReposListWebhooksResponse res = sdk.repos.reposListWebhooks(req);

            if (res.hooks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposMerge

Merge a branch

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branches#merge-a-branch>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposMergeRequest;
import org.openapis.openapi.models.operations.ReposMergeRequestBody;
import org.openapis.openapi.models.operations.ReposMergeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposMergeRequest req = new ReposMergeRequest(                new ReposMergeRequestBody("molestias", "laborum") {{
                                commitMessage = "est";
                            }};, "occaecati", "labore");            

            ReposMergeResponse res = sdk.repos.reposMerge(req);

            if (res.commit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposMergeUpstream

Sync a branch of a forked repository to keep it up-to-date with the upstream repository.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branches#sync-a-fork-branch-with-the-upstream-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposMergeUpstreamRequest;
import org.openapis.openapi.models.operations.ReposMergeUpstreamRequestBody;
import org.openapis.openapi.models.operations.ReposMergeUpstreamResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposMergeUpstreamRequest req = new ReposMergeUpstreamRequest(                new ReposMergeUpstreamRequestBody("quo");, "perferendis", "fugit");            

            ReposMergeUpstreamResponse res = sdk.repos.reposMergeUpstream(req);

            if (res.mergedUpstream != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposPingWebhook

This will trigger a [ping event](https://docs.github.com/enterprise-server@3.3/webhooks/#ping-event) to be sent to the hook.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/webhooks/repos#ping-a-repository-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposPingWebhookRequest;
import org.openapis.openapi.models.operations.ReposPingWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposPingWebhookRequest req = new ReposPingWebhookRequest(399222L, "magnam", "quaerat");            

            ReposPingWebhookResponse res = sdk.repos.reposPingWebhook(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposRedeliverWebhookDelivery

Redeliver a webhook delivery for a webhook configured in a repository.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/webhooks/repo-deliveries#redeliver-a-delivery-for-a-repository-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposRedeliverWebhookDeliveryRequest;
import org.openapis.openapi.models.operations.ReposRedeliverWebhookDeliveryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposRedeliverWebhookDeliveryRequest req = new ReposRedeliverWebhookDeliveryRequest(755868L, 942185L, "nostrum", "officiis");            

            ReposRedeliverWebhookDeliveryResponse res = sdk.repos.reposRedeliverWebhookDelivery(req);

            if (res.reposRedeliverWebhookDelivery202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposRemoveAppAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of an app to push to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#remove-app-access-restrictions>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposRemoveAppAccessRestrictionsRequest;
import org.openapis.openapi.models.operations.ReposRemoveAppAccessRestrictionsRequestBody1;
import org.openapis.openapi.models.operations.ReposRemoveAppAccessRestrictionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposRemoveAppAccessRestrictionsRequest req = new ReposRemoveAppAccessRestrictionsRequest("unde", "nulla", "error") {{
                requestBody = new String[]{{
                    add("nostrum"),
                    add("esse"),
                }};
            }};            

            ReposRemoveAppAccessRestrictionsResponse res = sdk.repos.reposRemoveAppAccessRestrictions(req);

            if (res.integrations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposRemoveCollaborator

Remove a repository collaborator

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/collaborators/collaborators#remove-a-repository-collaborator>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposRemoveCollaboratorRequest;
import org.openapis.openapi.models.operations.ReposRemoveCollaboratorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposRemoveCollaboratorRequest req = new ReposRemoveCollaboratorRequest("corrupti", "fuga", "facere");            

            ReposRemoveCollaboratorResponse res = sdk.repos.reposRemoveCollaborator(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposRemoveStatusCheckContexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#remove-status-check-contexts>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposRemoveStatusCheckContextsRequest;
import org.openapis.openapi.models.operations.ReposRemoveStatusCheckContextsRequestBody1;
import org.openapis.openapi.models.operations.ReposRemoveStatusCheckContextsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposRemoveStatusCheckContextsRequest req = new ReposRemoveStatusCheckContextsRequest("impedit", "quasi", "deserunt") {{
                requestBody = new String[]{{
                    add("doloremque"),
                    add("voluptatem"),
                }};
            }};            

            ReposRemoveStatusCheckContextsResponse res = sdk.repos.reposRemoveStatusCheckContexts(req);

            if (res.reposRemoveStatusCheckContexts200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposRemoveStatusCheckProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#remove-status-check-protection>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposRemoveStatusCheckProtectionRequest;
import org.openapis.openapi.models.operations.ReposRemoveStatusCheckProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposRemoveStatusCheckProtectionRequest req = new ReposRemoveStatusCheckProtectionRequest("facere", "necessitatibus", "maxime");            

            ReposRemoveStatusCheckProtectionResponse res = sdk.repos.reposRemoveStatusCheckProtection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposRemoveTeamAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of a team to push to this branch. You can also remove push access for child teams.

| Type    | Description                                                                                                                                         |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | Teams that should no longer have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#remove-team-access-restrictions>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposRemoveTeamAccessRestrictionsRequest;
import org.openapis.openapi.models.operations.ReposRemoveTeamAccessRestrictionsRequestBody1;
import org.openapis.openapi.models.operations.ReposRemoveTeamAccessRestrictionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposRemoveTeamAccessRestrictionsRequest req = new ReposRemoveTeamAccessRestrictionsRequest("consequatur", "eaque", "architecto") {{
                requestBody = new String[]{{
                    add("blanditiis"),
                    add("quae"),
                    add("magni"),
                    add("officiis"),
                }};
            }};            

            ReposRemoveTeamAccessRestrictionsResponse res = sdk.repos.reposRemoveTeamAccessRestrictions(req);

            if (res.teams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposRemoveUserAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of a user to push to this branch.

| Type    | Description                                                                                                                                   |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames of the people who should no longer have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#remove-user-access-restrictions>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposRemoveUserAccessRestrictionsRequest;
import org.openapis.openapi.models.operations.ReposRemoveUserAccessRestrictionsRequestBody1;
import org.openapis.openapi.models.operations.ReposRemoveUserAccessRestrictionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposRemoveUserAccessRestrictionsRequest req = new ReposRemoveUserAccessRestrictionsRequest("sed", "necessitatibus", "impedit") {{
                requestBody = new ReposRemoveUserAccessRestrictionsRequestBody1(                new String[]{{
                                    add("a"),
                                    add("maiores"),
                                    add("laudantium"),
                                }});;
            }};            

            ReposRemoveUserAccessRestrictionsResponse res = sdk.repos.reposRemoveUserAccessRestrictions(req);

            if (res.simpleUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposRenameBranch

Renames a branch in a repository.

**Note:** Although the API responds immediately, the branch rename process might take some extra time to complete in the background. You won't be able to push to the old branch name while the rename process is in progress. For more information, see "[Renaming a branch](https://docs.github.com/enterprise-server@3.3/github/administering-a-repository/renaming-a-branch)".

The permissions required to use this endpoint depends on whether you are renaming the default branch.

To rename a non-default branch:

* Users must have push access.
* GitHub Apps must have the `contents:write` repository permission.

To rename the default branch:

* Users must have admin or owner permissions.
* GitHub Apps must have the `administration:write` repository permission.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branches#rename-a-branch>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposRenameBranchRequest;
import org.openapis.openapi.models.operations.ReposRenameBranchRequestBody;
import org.openapis.openapi.models.operations.ReposRenameBranchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposRenameBranchRequest req = new ReposRenameBranchRequest(                new ReposRenameBranchRequestBody("maiores");, "alias", "asperiores", "rem");            

            ReposRenameBranchResponse res = sdk.repos.reposRenameBranch(req);

            if (res.branchWithProtection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposReplaceAllTopics

Replace all repository topics

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#replace-all-repository-topics>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposReplaceAllTopicsRequest;
import org.openapis.openapi.models.operations.ReposReplaceAllTopicsRequestBody;
import org.openapis.openapi.models.operations.ReposReplaceAllTopicsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposReplaceAllTopicsRequest req = new ReposReplaceAllTopicsRequest(                new ReposReplaceAllTopicsRequestBody(                new String[]{{
                                                add("suscipit"),
                                            }});, "earum", "doloribus");            

            ReposReplaceAllTopicsResponse res = sdk.repos.reposReplaceAllTopics(req);

            if (res.topic != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposRequestPagesBuild

You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.

Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/pages#request-a-github-pages-build>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposRequestPagesBuildRequest;
import org.openapis.openapi.models.operations.ReposRequestPagesBuildResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposRequestPagesBuildRequest req = new ReposRequestPagesBuildRequest("velit", "eius");            

            ReposRequestPagesBuildResponse res = sdk.repos.reposRequestPagesBuild(req);

            if (res.pageBuildStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposSetAdminBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#set-admin-branch-protection>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposSetAdminBranchProtectionRequest;
import org.openapis.openapi.models.operations.ReposSetAdminBranchProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposSetAdminBranchProtectionRequest req = new ReposSetAdminBranchProtectionRequest("esse", "in", "eligendi");            

            ReposSetAdminBranchProtectionResponse res = sdk.repos.reposSetAdminBranchProtection(req);

            if (res.protectedBranchAdminEnforced != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposSetAppAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of apps that have push access to this branch. This removes all apps that previously had push access and grants push access to the new list of apps. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#set-app-access-restrictions>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposSetAppAccessRestrictionsRequest;
import org.openapis.openapi.models.operations.ReposSetAppAccessRestrictionsRequestBody1;
import org.openapis.openapi.models.operations.ReposSetAppAccessRestrictionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposSetAppAccessRestrictionsRequest req = new ReposSetAppAccessRestrictionsRequest("quasi", "neque", "vero") {{
                requestBody = new String[]{{
                    add("qui"),
                }};
            }};            

            ReposSetAppAccessRestrictionsResponse res = sdk.repos.reposSetAppAccessRestrictions(req);

            if (res.integrations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposSetStatusCheckContexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#set-status-check-contexts>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposSetStatusCheckContextsRequest;
import org.openapis.openapi.models.operations.ReposSetStatusCheckContextsRequestBody1;
import org.openapis.openapi.models.operations.ReposSetStatusCheckContextsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposSetStatusCheckContextsRequest req = new ReposSetStatusCheckContextsRequest("impedit", "beatae", "incidunt") {{
                requestBody = new ReposSetStatusCheckContextsRequestBody1(                new String[]{{
                                    add("corporis"),
                                }});;
            }};            

            ReposSetStatusCheckContextsResponse res = sdk.repos.reposSetStatusCheckContexts(req);

            if (res.reposSetStatusCheckContexts200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposSetTeamAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. Team restrictions include child teams.

| Type    | Description                                                                                                                                |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#set-team-access-restrictions>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposSetTeamAccessRestrictionsRequest;
import org.openapis.openapi.models.operations.ReposSetTeamAccessRestrictionsRequestBody1;
import org.openapis.openapi.models.operations.ReposSetTeamAccessRestrictionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposSetTeamAccessRestrictionsRequest req = new ReposSetTeamAccessRestrictionsRequest("rerum", "alias", "error") {{
                requestBody = new ReposSetTeamAccessRestrictionsRequestBody1(                new String[]{{
                                    add("id"),
                                }});;
            }};            

            ReposSetTeamAccessRestrictionsResponse res = sdk.repos.reposSetTeamAccessRestrictions(req);

            if (res.teams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposSetUserAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.

| Type    | Description                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#set-user-access-restrictions>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposSetUserAccessRestrictionsRequest;
import org.openapis.openapi.models.operations.ReposSetUserAccessRestrictionsRequestBody1;
import org.openapis.openapi.models.operations.ReposSetUserAccessRestrictionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposSetUserAccessRestrictionsRequest req = new ReposSetUserAccessRestrictionsRequest("laboriosam", "ex", "quas") {{
                requestBody = new ReposSetUserAccessRestrictionsRequestBody1(                new String[]{{
                                    add("quae"),
                                    add("similique"),
                                }});;
            }};            

            ReposSetUserAccessRestrictionsResponse res = sdk.repos.reposSetUserAccessRestrictions(req);

            if (res.simpleUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposTestPushWebhook

This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.

**Note**: Previously `/repos/:owner/:repo/hooks/:hook_id/test`

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/webhooks/repos#test-the-push-repository-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposTestPushWebhookRequest;
import org.openapis.openapi.models.operations.ReposTestPushWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposTestPushWebhookRequest req = new ReposTestPushWebhookRequest(278116L, "quam", "magni");            

            ReposTestPushWebhookResponse res = sdk.repos.reposTestPushWebhook(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposTransfer

A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://docs.github.com/enterprise-server@3.3/articles/about-repository-transfers/).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#transfer-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposTransferRequest;
import org.openapis.openapi.models.operations.ReposTransferRequestBody;
import org.openapis.openapi.models.operations.ReposTransferResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposTransferRequest req = new ReposTransferRequest(                new ReposTransferRequestBody("deserunt") {{
                                teamIds = new Long[]{{
                                    add(609537L),
                                    add(151230L),
                                    add(200950L),
                                    add(805463L),
                                }};
                            }};, "quis", "cupiditate");            

            ReposTransferResponse res = sdk.repos.reposTransfer(req);

            if (res.minimalRepository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposUpdate

**Note**: To edit a repository's topics, use the [Replace all repository topics](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#replace-all-repository-topics) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/repos/repos#update-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposUpdateRequest;
import org.openapis.openapi.models.operations.ReposUpdateRequestBody;
import org.openapis.openapi.models.operations.ReposUpdateRequestBodyMergeCommitMessageEnum;
import org.openapis.openapi.models.operations.ReposUpdateRequestBodyMergeCommitTitleEnum;
import org.openapis.openapi.models.operations.ReposUpdateRequestBodySquashMergeCommitMessageEnum;
import org.openapis.openapi.models.operations.ReposUpdateRequestBodySquashMergeCommitTitleEnum;
import org.openapis.openapi.models.operations.ReposUpdateRequestBodyVisibilityEnum;
import org.openapis.openapi.models.operations.ReposUpdateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposUpdateRequest req = new ReposUpdateRequest("aliquam", "excepturi") {{
                requestBody = new ReposUpdateRequestBody() {{
                    allowForking = false;
                    allowMergeCommit = false;
                    allowRebaseMerge = false;
                    allowSquashMerge = false;
                    allowUpdateBranch = false;
                    archived = false;
                    defaultBranch = "maiores";
                    deleteBranchOnMerge = false;
                    description = "laudantium";
                    hasIssues = false;
                    hasProjects = false;
                    hasWiki = false;
                    homepage = "velit";
                    isTemplate = false;
                    mergeCommitMessage = ReposUpdateRequestBodyMergeCommitMessageEnum.BLANK;
                    mergeCommitTitle = ReposUpdateRequestBodyMergeCommitTitleEnum.PR_TITLE;
                    name = "Angela Schaefer";
                    private_ = false;
                    squashMergeCommitMessage = ReposUpdateRequestBodySquashMergeCommitMessageEnum.COMMIT_MESSAGES;
                    squashMergeCommitTitle = ReposUpdateRequestBodySquashMergeCommitTitleEnum.PR_TITLE;
                    useSquashPrTitleAsDefault = false;
                    visibility = ReposUpdateRequestBodyVisibilityEnum.INTERNAL;
                }};;
            }};            

            ReposUpdateResponse res = sdk.repos.reposUpdate(req);

            if (res.fullRepository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposUpdateBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Protecting a branch requires admin or owner permissions to the repository.

**Note**: Passing new arrays of `users` and `teams` replaces their previous values.

**Note**: The list of users, apps, and teams in total is limited to 100 items.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#update-branch-protection>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposUpdateBranchProtectionRequest;
import org.openapis.openapi.models.operations.ReposUpdateBranchProtectionRequestBody;
import org.openapis.openapi.models.operations.ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews;
import org.openapis.openapi.models.operations.ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions;
import org.openapis.openapi.models.operations.ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks;
import org.openapis.openapi.models.operations.ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks;
import org.openapis.openapi.models.operations.ReposUpdateBranchProtectionRequestBodyRestrictions;
import org.openapis.openapi.models.operations.ReposUpdateBranchProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposUpdateBranchProtectionRequest req = new ReposUpdateBranchProtectionRequest(                new ReposUpdateBranchProtectionRequestBody(false,                 new ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews() {{
                                                dismissStaleReviews = false;
                                                dismissalRestrictions = new ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions() {{
                                                    apps = new String[]{{
                                                        add("nobis"),
                                                        add("perspiciatis"),
                                                        add("accusantium"),
                                                        add("dicta"),
                                                    }};
                                                    teams = new String[]{{
                                                        add("commodi"),
                                                        add("eveniet"),
                                                        add("porro"),
                                                        add("tempore"),
                                                    }};
                                                    users = new String[]{{
                                                        add("modi"),
                                                        add("voluptates"),
                                                        add("fugit"),
                                                    }};
                                                }};;
                                                requireCodeOwnerReviews = false;
                                                requiredApprovingReviewCount = 259377L;
                                            }};,                 new ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks(                new String[]{{
                                                                add("eligendi"),
                                                            }}, false) {{
                                                checks = new org.openapis.openapi.models.operations.ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks[]{{
                                                    add(new ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks("sint") {{
                                                        appId = 459875L;
                                                        context = "blanditiis";
                                                    }}),
                                                    add(new ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks("animi") {{
                                                        appId = 996541L;
                                                        context = "a";
                                                    }}),
                                                    add(new ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks("nulla") {{
                                                        appId = 979287L;
                                                        context = "itaque";
                                                    }}),
                                                    add(new ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks("velit") {{
                                                        appId = 643419L;
                                                        context = "corporis";
                                                    }}),
                                                }};
                                            }};,                 new ReposUpdateBranchProtectionRequestBodyRestrictions(                new String[]{{
                                                                add("enim"),
                                                                add("officia"),
                                                                add("saepe"),
                                                                add("eum"),
                                                            }},                 new String[]{{
                                                                add("accusantium"),
                                                                add("officia"),
                                                                add("impedit"),
                                                                add("quasi"),
                                                            }}) {{
                                                apps = new String[]{{
                                                    add("eius"),
                                                    add("quisquam"),
                                                    add("eos"),
                                                }};
                                            }};) {{
                                allowDeletions = false;
                                allowForcePushes = false;
                                blockCreations = false;
                                contexts = new String[]{{
                                    add("natus"),
                                    add("minus"),
                                    add("quia"),
                                }};
                                requiredConversationResolution = false;
                                requiredLinearHistory = false;
                            }};, "magnam", "reprehenderit", "quod");            

            ReposUpdateBranchProtectionResponse res = sdk.repos.reposUpdateBranchProtection(req);

            if (res.protectedBranch != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposUpdateCommitComment

Update a commit comment

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/commits/comments#update-a-commit-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposUpdateCommitCommentRequest;
import org.openapis.openapi.models.operations.ReposUpdateCommitCommentRequestBody;
import org.openapis.openapi.models.operations.ReposUpdateCommitCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposUpdateCommitCommentRequest req = new ReposUpdateCommitCommentRequest(                new ReposUpdateCommitCommentRequestBody("quos");, 548846L, "amet", "molestiae");            

            ReposUpdateCommitCommentResponse res = sdk.repos.reposUpdateCommitComment(req);

            if (res.commitComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposUpdateDeploymentBranchPolicy

Updates a deployment branch policy for an environment.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/deployments/branch-policies#update-deployment-branch-policy>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposUpdateDeploymentBranchPolicyRequest;
import org.openapis.openapi.models.operations.ReposUpdateDeploymentBranchPolicyResponse;
import org.openapis.openapi.models.shared.DeploymentBranchPolicyNamePattern;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposUpdateDeploymentBranchPolicyRequest req = new ReposUpdateDeploymentBranchPolicyRequest(227156L,                 new DeploymentBranchPolicyNamePattern("release/*");, "laborum", "modi", "perferendis");            

            ReposUpdateDeploymentBranchPolicyResponse res = sdk.repos.reposUpdateDeploymentBranchPolicy(req);

            if (res.deploymentBranchPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposUpdateInformationAboutPagesSite

Updates information for a GitHub Enterprise Server Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages).

To use this endpoint, you must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission. A token with the `repo` scope or Pages write permission is required. GitHub Apps must have the `administration:write` and `pages:write` permissions.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/pages#update-information-about-a-github-pages-site>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequest;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody1;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody1BuildTypeEnum;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody1Source1Enum;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody1Source2;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody1Source2PathEnum;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody2;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody2BuildTypeEnum;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody2Source1Enum;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody2Source2;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody2Source2PathEnum;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody3;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody3BuildTypeEnum;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody3Source1Enum;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody3Source2;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody3Source2PathEnum;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody4;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody4BuildTypeEnum;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody4Source1Enum;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody4Source2;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody4Source2PathEnum;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody5;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody5BuildTypeEnum;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody5Source1Enum;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody5Source2;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteRequestBody5Source2PathEnum;
import org.openapis.openapi.models.operations.ReposUpdateInformationAboutPagesSiteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposUpdateInformationAboutPagesSiteRequest req = new ReposUpdateInformationAboutPagesSiteRequest(                new ReposUpdateInformationAboutPagesSiteRequestBody5(false) {{
                                buildType = ReposUpdateInformationAboutPagesSiteRequestBody5BuildTypeEnum.LEGACY;
                                cname = "molestias";
                                httpsEnforced = false;
                                source = ReposUpdateInformationAboutPagesSiteRequestBody5Source1Enum.GH_PAGES;
                            }}, "maiores", "neque");            

            ReposUpdateInformationAboutPagesSiteResponse res = sdk.repos.reposUpdateInformationAboutPagesSite(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposUpdateInvitation

Update a repository invitation

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/collaborators/invitations#update-a-repository-invitation>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposUpdateInvitationRequest;
import org.openapis.openapi.models.operations.ReposUpdateInvitationRequestBody;
import org.openapis.openapi.models.operations.ReposUpdateInvitationRequestBodyPermissionsEnum;
import org.openapis.openapi.models.operations.ReposUpdateInvitationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposUpdateInvitationRequest req = new ReposUpdateInvitationRequest(139745L, "earum", "veniam") {{
                requestBody = new ReposUpdateInvitationRequestBody() {{
                    permissions = ReposUpdateInvitationRequestBodyPermissionsEnum.WRITE;
                }};;
            }};            

            ReposUpdateInvitationResponse res = sdk.repos.reposUpdateInvitation(req);

            if (res.repositoryInvitation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposUpdatePullRequestReviewProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

**Note**: Passing new arrays of `users` and `teams` replaces their previous values.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#update-pull-request-review-protection>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposUpdatePullRequestReviewProtectionRequest;
import org.openapis.openapi.models.operations.ReposUpdatePullRequestReviewProtectionRequestBody;
import org.openapis.openapi.models.operations.ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions;
import org.openapis.openapi.models.operations.ReposUpdatePullRequestReviewProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposUpdatePullRequestReviewProtectionRequest req = new ReposUpdatePullRequestReviewProtectionRequest("eaque", "exercitationem", "veniam") {{
                requestBody = new ReposUpdatePullRequestReviewProtectionRequestBody() {{
                    dismissStaleReviews = false;
                    dismissalRestrictions = new ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions() {{
                        apps = new String[]{{
                            add("ad"),
                            add("nisi"),
                        }};
                        teams = new String[]{{
                            add("quis"),
                            add("quibusdam"),
                            add("nemo"),
                            add("suscipit"),
                        }};
                        users = new String[]{{
                            add("sit"),
                            add("quidem"),
                            add("repellendus"),
                            add("perferendis"),
                        }};
                    }};;
                    requireCodeOwnerReviews = false;
                    requiredApprovingReviewCount = 660536L;
                }};;
            }};            

            ReposUpdatePullRequestReviewProtectionResponse res = sdk.repos.reposUpdatePullRequestReviewProtection(req);

            if (res.protectedBranchPullRequestReview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposUpdateRelease

Users with push access to the repository can edit a release.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#update-a-release>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposUpdateReleaseRequest;
import org.openapis.openapi.models.operations.ReposUpdateReleaseRequestBody;
import org.openapis.openapi.models.operations.ReposUpdateReleaseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposUpdateReleaseRequest req = new ReposUpdateReleaseRequest("sapiente", 152364L, "possimus") {{
                requestBody = new ReposUpdateReleaseRequestBody() {{
                    body = "repellat";
                    draft = false;
                    name = "Joe Fisher";
                    prerelease = false;
                    tagName = "dolore";
                    targetCommitish = "voluptatibus";
                }};;
            }};            

            ReposUpdateReleaseResponse res = sdk.repos.reposUpdateRelease(req);

            if (res.release != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposUpdateReleaseAsset

Users with push access to the repository can edit a release asset.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#update-a-release-asset>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposUpdateReleaseAssetRequest;
import org.openapis.openapi.models.operations.ReposUpdateReleaseAssetRequestBody;
import org.openapis.openapi.models.operations.ReposUpdateReleaseAssetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposUpdateReleaseAssetRequest req = new ReposUpdateReleaseAssetRequest(435353L, "explicabo", "minus") {{
                requestBody = new ReposUpdateReleaseAssetRequestBody() {{
                    label = "soluta";
                    name = "Jacob Wehner";
                    state = ""uploaded"";
                }};;
            }};            

            ReposUpdateReleaseAssetResponse res = sdk.repos.reposUpdateReleaseAsset(req);

            if (res.releaseAsset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposUpdateStatusCheckProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.3/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/branches/branch-protection#update-status-check-protection>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposUpdateStatusCheckProtectionRequest;
import org.openapis.openapi.models.operations.ReposUpdateStatusCheckProtectionRequestBody;
import org.openapis.openapi.models.operations.ReposUpdateStatusCheckProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposUpdateStatusCheckProtectionRequest req = new ReposUpdateStatusCheckProtectionRequest("non", "quasi", "mollitia") {{
                requestBody = new ReposUpdateStatusCheckProtectionRequestBody() {{
                    contexts = new String[]{{
                        add("harum"),
                        add("cumque"),
                        add("doloremque"),
                        add("expedita"),
                    }};
                    strict = false;
                }};;
            }};            

            ReposUpdateStatusCheckProtectionResponse res = sdk.repos.reposUpdateStatusCheckProtection(req);

            if (res.statusCheckPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposUpdateWebhook

Updates a webhook configured in a repository. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for a repository](/rest/reference/repos#update-a-webhook-configuration-for-a-repository)."

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/webhooks/repos#update-a-repository-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposUpdateWebhookRequest;
import org.openapis.openapi.models.operations.ReposUpdateWebhookRequestBody;
import org.openapis.openapi.models.operations.ReposUpdateWebhookRequestBodyConfig;
import org.openapis.openapi.models.operations.ReposUpdateWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposUpdateWebhookRequest req = new ReposUpdateWebhookRequest(                new ReposUpdateWebhookRequestBody() {{
                                active = false;
                                addEvents = new String[]{{
                                    add("eaque"),
                                    add("deserunt"),
                                    add("aliquid"),
                                }};
                                config = new ReposUpdateWebhookRequestBodyConfig("https://example.com/webhook") {{
                                    address = ""bar@example.com"";
                                    contentType = ""json"";
                                    insecureSsl = 1674.35;
                                    room = ""The Serious Room"";
                                    secret = ""********"";
                                }};;
                                events = new String[]{{
                                    add("possimus"),
                                    add("dolor"),
                                }};
                                removeEvents = new String[]{{
                                    add("sed"),
                                    add("accusamus"),
                                    add("optio"),
                                }};
                            }};, 966576L, "minus", "quo");            

            ReposUpdateWebhookResponse res = sdk.repos.reposUpdateWebhook(req);

            if (res.hook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposUpdateWebhookConfigForRepo

Updates the webhook configuration for a repository. To update more information about the webhook, including the `active` state and `events`, use "[Update a repository webhook](/rest/reference/orgs#update-a-repository-webhook)."

Access tokens must have the `write:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:write` permission.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/webhooks/repo-config#update-a-webhook-configuration-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposUpdateWebhookConfigForRepoRequest;
import org.openapis.openapi.models.operations.ReposUpdateWebhookConfigForRepoRequestBody;
import org.openapis.openapi.models.operations.ReposUpdateWebhookConfigForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposUpdateWebhookConfigForRepoRequest req = new ReposUpdateWebhookConfigForRepoRequest(550338L, "asperiores", "voluptatum") {{
                requestBody = new ReposUpdateWebhookConfigForRepoRequestBody() {{
                    contentType = ""json"";
                    insecureSsl = 3611.06;
                    secret = ""********"";
                    url = "https://example.com/webhook";
                }};;
            }};            

            ReposUpdateWebhookConfigForRepoResponse res = sdk.repos.reposUpdateWebhookConfigForRepo(req);

            if (res.webhookConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reposUploadReleaseAsset

This endpoint makes use of [a Hypermedia relation](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in
the response of the [Create a release endpoint](https://docs.github.com/enterprise-server@3.3/rest/releases/releases#create-a-release) to upload a release asset.

You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.

Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example: 

`application/zip`

GitHub Enterprise Server expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example,
you'll still need to pass your authentication to be able to upload an asset.

When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted.

**Notes:**
*   GitHub Enterprise Server renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The "[List assets for a release](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#list-assets-for-a-release)"
endpoint lists the renamed filenames. For more information and help, contact [GitHub Enterprise Server Support](https://support.github.com/contact?tags=dotcom-rest-api).
*   To find the `release_id` query the [`GET /repos/{owner}/{repo}/releases/latest` endpoint](https://docs.github.com/enterprise-server@3.3/rest/releases/releases#get-the-latest-release). 
*   If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/repos#upload-a-release-asset>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposUploadReleaseAssetRequest;
import org.openapis.openapi.models.operations.ReposUploadReleaseAssetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposUploadReleaseAssetRequest req = new ReposUploadReleaseAssetRequest("accusantium", "illo", 14251L, "doloribus") {{
                requestBody = "nostrum".getBytes();
                label = "at";
            }};            

            ReposUploadReleaseAssetResponse res = sdk.repos.reposUploadReleaseAsset(req);

            if (res.releaseAsset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
