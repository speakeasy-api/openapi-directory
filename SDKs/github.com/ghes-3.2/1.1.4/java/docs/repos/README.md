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
* [reposDownloadTarballArchive](#reposdownloadtarballarchive) - Download a repository archive (tar)
* [reposDownloadZipballArchive](#reposdownloadzipballarchive) - Download a repository archive (zip)
* [reposGet](#reposget) - Get a repository
* [reposGetAccessRestrictions](#reposgetaccessrestrictions) - Get access restrictions
* [reposGetAdminBranchProtection](#reposgetadminbranchprotection) - Get admin branch protection
* [reposGetAllEnvironments](#reposgetallenvironments) - List environments
* [reposGetAllStatusCheckContexts](#reposgetallstatuscheckcontexts) - Get all status check contexts
* [reposGetAllTopics](#reposgetalltopics) - Get all repository topics
* [reposGetAppsWithAccessToProtectedBranch](#reposgetappswithaccesstoprotectedbranch) - Get apps with access to the protected branch
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
<https://docs.github.com/enterprise-server@3.2/rest/collaborators/invitations#accept-a-repository-invitation>

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

            ReposAcceptInvitationForAuthenticatedUserRequest req = new ReposAcceptInvitationForAuthenticatedUserRequest(342342L);            

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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified apps push access for this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

| Type    | Description                                                                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#add-app-access-restrictions>

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

            ReposAddAppAccessRestrictionsRequest req = new ReposAddAppAccessRestrictionsRequest("doloribus", "eligendi", "sint") {{
                requestBody = new ReposAddAppAccessRestrictionsRequestBody1(                new String[]{{
                                    add("animi"),
                                    add("quas"),
                                    add("totam"),
                                    add("molestias"),
                                }});;
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

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.2/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.2/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.2/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

For more information on permission levels, see "[Repository permission levels for an organization](https://docs.github.com/enterprise-server@3.2/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)". There are restrictions on which permissions can be granted to organization members when an organization base role is in place. In this case, the permission being given must be equal to or higher than the org base permission. Otherwise, the request will fail with:

```
Cannot assign {member} permission of {role name}
```

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.2/rest/overview/resources-in-the-rest-api#http-verbs)."

The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [repository invitations API endpoints](https://docs.github.com/enterprise-server@3.2/rest/reference/repos#invitations).

**Updating an existing collaborator's permission level**

The endpoint can also be used to change the permissions of an existing collaborator without first removing and re-adding the collaborator. To change the permissions, use the same endpoint and pass a different `permission` parameter. The response will be a `204`, with no other indication that the permission level changed.

**Rate limits**

You are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/collaborators/collaborators#add-a-repository-collaborator>

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

            ReposAddCollaboratorRequest req = new ReposAddCollaboratorRequest("odio", "eaque", "saepe") {{
                requestBody = new ReposAddCollaboratorRequestBody() {{
                    permission = "architecto";
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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#add-status-check-contexts>

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

            ReposAddStatusCheckContextsRequest req = new ReposAddStatusCheckContextsRequest("quos", "iste", "assumenda") {{
                requestBody = new String[]{{
                    add("velit"),
                    add("doloremque"),
                    add("delectus"),
                }};
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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified teams push access for this branch. You can also give push access to child teams.

| Type    | Description                                                                                                                                |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#add-team-access-restrictions>

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

            ReposAddTeamAccessRestrictionsRequest req = new ReposAddTeamAccessRestrictionsRequest("impedit", "cum", "ipsum") {{
                requestBody = new ReposAddTeamAccessRestrictionsRequestBody1(                new String[]{{
                                    add("deserunt"),
                                    add("doloremque"),
                                    add("quis"),
                                    add("veniam"),
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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified people push access for this branch.

| Type    | Description                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#add-user-access-restrictions>

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

            ReposAddUserAccessRestrictionsRequest req = new ReposAddUserAccessRestrictionsRequest("libero", "architecto", "cupiditate") {{
                requestBody = new ReposAddUserAccessRestrictionsRequestBody1(                new String[]{{
                                    add("possimus"),
                                    add("non"),
                                    add("magnam"),
                                    add("itaque"),
                                }});;
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
<https://docs.github.com/enterprise-server@3.2/rest/collaborators/collaborators#check-if-a-user-is-a-repository-collaborator>

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

            ReposCheckCollaboratorRequest req = new ReposCheckCollaboratorRequest("sed", "asperiores", "veniam");            

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

The `basehead` param is comprised of two parts separated by triple dots: `{base}...{head}`. Both must be branch names in `repo`. To compare branches across other repositories in the same network as `repo`, use the format `<USERNAME>:branch`.

The response from the API is equivalent to running the `git log base..head` command; however, commits are returned in chronological order. Pass the appropriate [media type](https://docs.github.com/enterprise-server@3.2/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.

The response also includes details on the files that were changed between the two commits. This includes the status of the change (for example, if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.

**Working with large comparisons**

To process a response with a large number of commits, you can use (`per_page` or `page`) to paginate the results. When using paging, the list of changed files is only returned with page 1, but includes all changed files for the entire comparison. For more information on working with pagination, see "[Traversing with pagination](/rest/guides/traversing-with-pagination)."

When calling this API without any paging parameters (`per_page` or `page`), the returned list is limited to 250 commits and the last commit in the list is the most recent of the entire comparison. When a paging parameter is specified, the first commit in the returned list of each page is the earliest.

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
<https://docs.github.com/enterprise-server@3.2/rest/commits/commits#compare-two-commits>

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

            ReposCompareCommitsRequest req = new ReposCompareCommitsRequest("consequuntur", "facere", "laudantium") {{
                page = 140384L;
                perPage = 863477L;
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

## reposCreateCommitComment

Create a comment for a commit using its `:commit_sha`.

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.2/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.2/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/commits/comments#create-a-commit-comment>

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

            ReposCreateCommitCommentRequest req = new ReposCreateCommitCommentRequest(                new ReposCreateCommitCommentRequestBody("amet") {{
                                line = 347698L;
                                path = "ab";
                                position = 242637L;
                            }};, "facilis", "tempore", "nisi");            

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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#create-commit-signature-protection>

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

            ReposCreateCommitSignatureProtectionRequest req = new ReposCreateCommitSignatureProtectionRequest("voluptatibus", "quaerat", "blanditiis");            

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
<https://docs.github.com/enterprise-server@3.2/rest/commits/statuses#create-a-commit-status>

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
                                context = "nisi";
                                description = "quis";
                                targetUrl = "nisi";
                            }};, "libero", "minus", "facere");            

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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#create-a-deploy-key>

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

            ReposCreateDeployKeyRequest req = new ReposCreateDeployKeyRequest(                new ReposCreateDeployKeyRequestBody("facilis") {{
                                readOnly = false;
                                title = "Mrs.";
                            }};, "ad", "voluptatibus");            

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

By default, [commit statuses](https://docs.github.com/enterprise-server@3.2/rest/commits/statuses) for every submitted context must be in a `success`
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#create-a-deployment>

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

            ReposCreateDeploymentRequest req = new ReposCreateDeploymentRequest(                new ReposCreateDeploymentRequestBody("voluptatibus") {{
                                autoMerge = false;
                                description = "consequuntur";
                                environment = "debitis";
                                payload = new java.util.HashMap<String, Object>() {{
                                    put("eos", "reprehenderit");
                                    put("nostrum", "neque");
                                    put("iusto", "est");
                                }};
                                productionEnvironment = false;
                                requiredContexts = new String[]{{
                                    add("eligendi"),
                                    add("fugiat"),
                                    add("unde"),
                                }};
                                task = "officiis";
                                transientEnvironment = false;
                            }};, "ducimus", "dolor");            

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
<https://docs.github.com/enterprise-server@3.2/rest/deployments/branch-policies#create-deployment-branch-policy>

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

            ReposCreateDeploymentBranchPolicyRequest req = new ReposCreateDeploymentBranchPolicyRequest(                new DeploymentBranchPolicyNamePattern("release/*");, "dicta", "error", "porro");            

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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#create-a-deployment-status>

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

            ReposCreateDeploymentStatusRequest req = new ReposCreateDeploymentStatusRequest(                new ReposCreateDeploymentStatusRequestBody(ReposCreateDeploymentStatusRequestBodyStateEnum.ERROR) {{
                                autoInactive = false;
                                description = "dignissimos";
                                environment = ReposCreateDeploymentStatusRequestBodyEnvironmentEnum.STAGING;
                                environmentUrl = "fugiat";
                                logUrl = "ad";
                                targetUrl = "aspernatur";
                            }};, 316501L, "delectus", "iusto");            

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

You can use this endpoint to trigger a webhook event called `repository_dispatch` when you want activity that happens outside of GitHub Enterprise Server to trigger a GitHub Actions workflow or GitHub App webhook. You must configure your GitHub Actions workflow or GitHub App to run when the `repository_dispatch` event occurs. For an example `repository_dispatch` webhook payload, see "[RepositoryDispatchEvent](https://docs.github.com/enterprise-server@3.2/webhooks/event-payloads/#repository_dispatch)."

The `client_payload` parameter is available for any extra information that your workflow might need. This parameter is a JSON payload that will be passed on when the webhook event is dispatched. For example, the `client_payload` can include a message that a user would like to send using a GitHub Actions workflow. Or the `client_payload` can be used as a test to debug your workflow.

This endpoint requires write access to the repository by providing either:

  - Personal access tokens with `repo` scope. For more information, see "[Creating a personal access token for the command line](https://docs.github.com/articles/creating-a-personal-access-token-for-the-command-line)" in the GitHub Help documentation.
  - GitHub Apps with both `metadata:read` and `contents:read&write` permissions.

This input example shows how you can use the `client_payload` as a test to debug your workflow.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#create-a-repository-dispatch-event>

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

            ReposCreateDispatchEventRequest req = new ReposCreateDispatchEventRequest(                new ReposCreateDispatchEventRequestBody("dignissimos") {{
                                clientPayload = new java.util.HashMap<String, Object>() {{
                                    put("illo", "ab");
                                    put("incidunt", "accusamus");
                                    put("saepe", "tempore");
                                }};
                            }};, "veniam", "eos");            

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

When using [OAuth](https://docs.github.com/enterprise-server@3.2/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
*   `repo` scope to create a private repository.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#create-a-repository-for-the-authenticated-user>

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
                allowMergeCommit = true;
                allowRebaseMerge = true;
                allowSquashMerge = true;
                autoInit = false;
                deleteBranchOnMerge = false;
                description = "reiciendis";
                gitignoreTemplate = "Haskell";
                hasDownloads = true;
                hasIssues = true;
                hasProjects = true;
                hasWiki = true;
                homepage = "earum";
                isTemplate = true;
                licenseTemplate = "mit";
                mergeCommitMessage = ReposCreateForAuthenticatedUserRequestBodyMergeCommitMessageEnum.PR_TITLE;
                mergeCommitTitle = ReposCreateForAuthenticatedUserRequestBodyMergeCommitTitleEnum.MERGE_MESSAGE;
                private_ = false;
                squashMergeCommitMessage = ReposCreateForAuthenticatedUserRequestBodySquashMergeCommitMessageEnum.COMMIT_MESSAGES;
                squashMergeCommitTitle = ReposCreateForAuthenticatedUserRequestBodySquashMergeCommitTitleEnum.COMMIT_OR_PR_TITLE;
                teamId = 789770L;
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#create-a-fork>

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

            ReposCreateForkRequest req = new ReposCreateForkRequest("sequi", "nihil") {{
                requestBody = new ReposCreateForkRequestBody() {{
                    organization = "deleniti";
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

When using [OAuth](https://docs.github.com/enterprise-server@3.2/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
*   `repo` scope to create a private repository

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#create-an-organization-repository>

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

            ReposCreateInOrgRequest req = new ReposCreateInOrgRequest(                new ReposCreateInOrgRequestBody("illo") {{
                                allowMergeCommit = false;
                                allowRebaseMerge = false;
                                allowSquashMerge = false;
                                autoInit = false;
                                deleteBranchOnMerge = false;
                                description = "labore";
                                gitignoreTemplate = "assumenda";
                                hasDownloads = true;
                                hasIssues = false;
                                hasProjects = false;
                                hasWiki = false;
                                homepage = "aliquam";
                                isTemplate = false;
                                licenseTemplate = "quisquam";
                                mergeCommitMessage = ReposCreateInOrgRequestBodyMergeCommitMessageEnum.PR_TITLE;
                                mergeCommitTitle = ReposCreateInOrgRequestBodyMergeCommitTitleEnum.MERGE_MESSAGE;
                                private_ = false;
                                squashMergeCommitMessage = ReposCreateInOrgRequestBodySquashMergeCommitMessageEnum.BLANK;
                                squashMergeCommitTitle = ReposCreateInOrgRequestBodySquashMergeCommitTitleEnum.PR_TITLE;
                                teamId = 805264L;
                                useSquashPrTitleAsDefault = false;
                                visibility = ReposCreateInOrgRequestBodyVisibilityEnum.PUBLIC_;
                            }};, "nam");            

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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#create-or-update-an-environment>

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

            ReposCreateOrUpdateEnvironmentRequest req = new ReposCreateOrUpdateEnvironmentRequest("expedita", "quas", "provident") {{
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

**Note:** If you use this endpoint and the "[Delete a file](https://docs.github.com/enterprise-server@3.2/rest/reference/repos/#delete-file)" endpoint in parallel, the concurrent requests will conflict and you will receive errors. You must use these endpoints serially instead.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#create-or-update-file-contents>

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

            ReposCreateOrUpdateFileContentsRequest req = new ReposCreateOrUpdateFileContentsRequest(                new ReposCreateOrUpdateFileContentsRequestBody("rerum", "dignissimos") {{
                                author = new ReposCreateOrUpdateFileContentsRequestBodyAuthor("corporis", "vero") {{
                                    date = ""2013-01-15T17:13:22+05:00"";
                                }};;
                                branch = "similique";
                                committer = new ReposCreateOrUpdateFileContentsRequestBodyCommitter("repellendus", "iure") {{
                                    date = ""2013-01-05T13:13:22+05:00"";
                                }};;
                                sha = "dolorem";
                            }};, "commodi", "impedit", "commodi");            

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

Configures a GitHub Enterprise Server Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages)." You must be an admin of the repository in order to use this operation.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/pages#create-a-github-pages-site>

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

            ReposCreatePagesSiteRequest req = new ReposCreatePagesSiteRequest(                new ReposCreatePagesSiteRequestBody1(                new ReposCreatePagesSiteRequestBody1Source("illum") {{
                                                path = ReposCreatePagesSiteRequestBody1SourcePathEnum.ROOT_DOCS;
                                            }};) {{
                                buildType = ReposCreatePagesSiteRequestBody1BuildTypeEnum.LEGACY;
                                source = new ReposCreatePagesSiteRequestBody1Source("amet") {{
                                    branch = "ad";
                                    path = ReposCreatePagesSiteRequestBody1SourcePathEnum.ROOT;
                                }};
                            }}, "quidem", "cum");            

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

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.2/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.2/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#create-a-release>

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

            ReposCreateReleaseRequest req = new ReposCreateReleaseRequest(                new ReposCreateReleaseRequestBody("amet") {{
                                body = "quasi";
                                draft = false;
                                name = "Myrtle Bauch";
                                prerelease = false;
                                targetCommitish = "amet";
                            }};, "provident", "dolorum");            

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

Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. If the repository is not public, the authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-a-repository) endpoint and check that the `is_template` key is `true`.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/enterprise-server@3.2/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
*   `repo` scope to create a private repository

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#create-a-repository-using-a-template>

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

            ReposCreateUsingTemplateRequest req = new ReposCreateUsingTemplateRequest(                new ReposCreateUsingTemplateRequestBody("necessitatibus") {{
                                description = "provident";
                                includeAllBranches = false;
                                owner = "repudiandae";
                                private_ = false;
                            }};, "consequatur", "nemo");            

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
<https://docs.github.com/enterprise-server@3.2/rest/webhooks/repos#create-a-repository-webhook>

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

            ReposCreateWebhookRequest req = new ReposCreateWebhookRequest("molestiae", "itaque") {{
                requestBody = new ReposCreateWebhookRequestBody() {{
                    active = false;
                    config = new ReposCreateWebhookRequestBodyConfig() {{
                        contentType = ""json"";
                        digest = ""sha256"";
                        insecureSsl = 5457.79;
                        secret = ""********"";
                        token = ""abc"";
                        url = "https://example.com/webhook";
                    }};;
                    events = new String[]{{
                        add("sint"),
                    }};
                    name = "Mr. Craig Leannon";
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
<https://docs.github.com/enterprise-server@3.2/rest/collaborators/invitations#decline-a-repository-invitation>

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

            ReposDeclineInvitationForAuthenticatedUserRequest req = new ReposDeclineInvitationForAuthenticatedUserRequest(224413L);            

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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#delete-a-repository>

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

            ReposDeleteRequest req = new ReposDeleteRequest("sunt", "a");            

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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Disables the ability to restrict who can push to this branch.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#delete-access-restrictions>

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

            ReposDeleteAccessRestrictionsRequest req = new ReposDeleteAccessRestrictionsRequest("dolor", "occaecati", "atque");            

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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#delete-admin-branch-protection>

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

            ReposDeleteAdminBranchProtectionRequest req = new ReposDeleteAdminBranchProtectionRequest("beatae", "at", "labore");            

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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#delete-an-environment>

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

            ReposDeleteAnEnvironmentRequest req = new ReposDeleteAnEnvironmentRequest("minus", "esse", "voluptatem");            

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

## reposDeleteBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#delete-branch-protection>

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

            ReposDeleteBranchProtectionRequest req = new ReposDeleteBranchProtectionRequest("perferendis", "rerum", "ea");            

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
<https://docs.github.com/enterprise-server@3.2/rest/commits/comments#delete-a-commit-comment>

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

            ReposDeleteCommitCommentRequest req = new ReposDeleteCommitCommentRequest(46791L, "dignissimos", "repellat");            

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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#delete-commit-signature-protection>

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

            ReposDeleteCommitSignatureProtectionRequest req = new ReposDeleteCommitSignatureProtectionRequest("velit", "porro", "provident");            

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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#delete-a-deploy-key>

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

            ReposDeleteDeployKeyRequest req = new ReposDeleteDeployKeyRequest(231382L, "eligendi", "dignissimos");            

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

For more information, see "[Create a deployment](https://docs.github.com/enterprise-server@3.2/rest/reference/repos/#create-a-deployment)" and "[Create a deployment status](https://docs.github.com/enterprise-server@3.2/rest/reference/repos#create-a-deployment-status)."

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#delete-a-deployment>

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

            ReposDeleteDeploymentRequest req = new ReposDeleteDeploymentRequest(235834L, "soluta", "natus");            

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
<https://docs.github.com/enterprise-server@3.2/rest/deployments/branch-policies#delete-deployment-branch-policy>

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

            ReposDeleteDeploymentBranchPolicyRequest req = new ReposDeleteDeploymentBranchPolicyRequest(839807L, "officia", "amet", "tenetur");            

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

**Note:** If you use this endpoint and the "[Create or update file contents](https://docs.github.com/enterprise-server@3.2/rest/reference/repos/#create-or-update-file-contents)" endpoint in parallel, the concurrent requests will conflict and you will receive errors. You must use these endpoints serially instead.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#delete-a-file>

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

            ReposDeleteFileRequest req = new ReposDeleteFileRequest(                new ReposDeleteFileRequestBody("aspernatur", "quo") {{
                                author = new ReposDeleteFileRequestBodyAuthor() {{
                                    email = "Rosetta_Osinski@hotmail.com";
                                    name = "Mr. Edith Zieme";
                                }};;
                                branch = "nihil";
                                committer = new ReposDeleteFileRequestBodyCommitter() {{
                                    email = "Anne_Bins96@gmail.com";
                                    name = "Beulah Kirlin";
                                }};;
                            }};, "numquam", "repudiandae", "modi");            

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
<https://docs.github.com/enterprise-server@3.2/rest/collaborators/invitations#delete-a-repository-invitation>

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

            ReposDeleteInvitationRequest req = new ReposDeleteInvitationRequest(450209L, "explicabo", "accusamus");            

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

Deletes a GitHub Pages site. You must be an admin of the repository in order to use this operation.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/pages#delete-a-github-pages-site>

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

            ReposDeletePagesSiteRequest req = new ReposDeletePagesSiteRequest("rem", "aperiam");            

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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#delete-pull-request-review-protection>

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

            ReposDeletePullRequestReviewProtectionRequest req = new ReposDeletePullRequestReviewProtectionRequest("odit", "deleniti", "enim");            

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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#delete-a-release>

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

            ReposDeleteReleaseRequest req = new ReposDeleteReleaseRequest("voluptate", 626707L, "minima");            

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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#delete-a-release-asset>

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

            ReposDeleteReleaseAssetRequest req = new ReposDeleteReleaseAssetRequest(727544L, "magnam", "sit");            

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
<https://docs.github.com/enterprise-server@3.2/rest/webhooks/repos#delete-a-repository-webhook>

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

            ReposDeleteWebhookRequest req = new ReposDeleteWebhookRequest(266788L, "eum", "nesciunt");            

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

## reposDownloadTarballArchive

Gets a redirect URL to download a tar archive for a repository. If you omit `:ref`, the repository’s default branch (usually
`master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
the `Location` header to make a second `GET` request.
**Note**: For private repositories, these links are temporary and expire after five minutes.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#download-a-repository-archive>

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

            ReposDownloadTarballArchiveRequest req = new ReposDownloadTarballArchiveRequest("mollitia", "dignissimos", "fugiat");            

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
`master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
the `Location` header to make a second `GET` request.

**Note**: For private repositories, these links are temporary and expire after five minutes. If the repository is empty, you will receive a 404 when you follow the redirect.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#download-a-repository-archive>

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

            ReposDownloadZipballArchiveRequest req = new ReposDownloadZipballArchiveRequest("nostrum", "molestiae", "veniam");            

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

## reposGet

When you pass the `scarlet-witch-preview` media type, requests to get a repository will also return the repository's code of conduct if it can be detected from the repository's code of conduct file.

The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-a-repository>

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

            ReposGetRequest req = new ReposGetRequest("reiciendis", "ab");            

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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists who has access to this protected branch.

**Note**: Users, apps, and teams `restrictions` are only available for organization-owned repositories.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-access-restrictions>

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

            ReposGetAccessRestrictionsRequest req = new ReposGetAccessRestrictionsRequest("modi", "aut", "aut");            

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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-admin-branch-protection>

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

            ReposGetAdminBranchProtectionRequest req = new ReposGetAdminBranchProtectionRequest("eveniet", "odio", "commodi");            

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
<https://docs.github.com/enterprise-server@3.2/rest/deployments/environments#list-environments>

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

            ReposGetAllEnvironmentsRequest req = new ReposGetAllEnvironmentsRequest("numquam", "dolorum") {{
                page = 823718L;
                perPage = 452399L;
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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-all-status-check-contexts>

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

            ReposGetAllStatusCheckContextsRequest req = new ReposGetAllStatusCheckContextsRequest("consectetur", "nesciunt", "quaerat");            

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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-all-repository-topics>

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

            ReposGetAllTopicsRequest req = new ReposGetAllTopicsRequest("itaque", "minus") {{
                page = 122662L;
                perPage = 715143L;
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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the GitHub Apps that have push access to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#list-apps-with-access-to-the-protected-branch>

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

            ReposGetAppsWithAccessToProtectedBranchRequest req = new ReposGetAppsWithAccessToProtectedBranchRequest("iusto", "quas", "et");            

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

## reposGetBranch

Get a branch

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-a-branch>

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

            ReposGetBranchRequest req = new ReposGetBranchRequest("facilis", "amet", "autem");            

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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-branch-protection>

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

            ReposGetBranchProtectionRequest req = new ReposGetBranchProtectionRequest("fuga", "alias", "rem");            

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
<https://docs.github.com/enterprise-server@3.2/rest/metrics/statistics#get-the-weekly-commit-activity>

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

            ReposGetCodeFrequencyStatsRequest req = new ReposGetCodeFrequencyStatsRequest("aut", "quos");            

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
<https://docs.github.com/enterprise-server@3.2/rest/collaborators/collaborators#get-repository-permissions-for-a-user>

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

            ReposGetCollaboratorPermissionLevelRequest req = new ReposGetCollaboratorPermissionLevelRequest("laudantium", "repellendus", "veritatis");            

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
<https://docs.github.com/enterprise-server@3.2/rest/commits/statuses#get-the-combined-status-for-a-specific-reference>

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

            ReposGetCombinedStatusForRefRequest req = new ReposGetCombinedStatusForRefRequest("quae", "eaque", "saepe") {{
                page = 965517L;
                perPage = 651228L;
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

You can pass the appropriate [media type](https://docs.github.com/enterprise-server@3.2/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to  fetch `diff` and `patch` formats. Diffs with binary data will have no `patch` property.

To return only the SHA-1 hash of the commit reference, you can provide the `sha` custom [media type](https://docs.github.com/enterprise-server@3.2/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) in the `Accept` header. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.

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
<https://docs.github.com/enterprise-server@3.2/rest/commits/commits#get-a-commit>

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

            ReposGetCommitRequest req = new ReposGetCommitRequest("nulla", "officia", "sed") {{
                page = 30208L;
                perPage = 664L;
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
<https://docs.github.com/enterprise-server@3.2/rest/metrics/statistics#get-the-last-year-of-commit-activity>

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

            ReposGetCommitActivityStatsRequest req = new ReposGetCommitActivityStatsRequest("eveniet", "hic");            

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
<https://docs.github.com/enterprise-server@3.2/rest/commits/comments#get-a-commit-comment>

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

            ReposGetCommitCommentRequest req = new ReposGetCommitCommentRequest(27982L, "incidunt", "qui");            

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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://docs.github.com/articles/signing-commits-with-gpg) in GitHub Help.

**Note**: You must enable branch protection to require signed commits.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-commit-signature-protection>

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

            ReposGetCommitSignatureProtectionRequest req = new ReposGetCommitSignatureProtectionRequest("qui", "necessitatibus", "harum");            

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

Files and symlinks support [a custom media type](https://docs.github.com/enterprise-server@3.2/rest/reference/repos#custom-media-types) for
retrieving the raw content or rendered HTML (when supported). All content types support [a custom media
type](https://docs.github.com/enterprise-server@3.2/rest/reference/repos#custom-media-types) to ensure the content is returned in a consistent
object format.

**Notes**:
*   To get a repository's contents recursively, you can [recursively get the tree](https://docs.github.com/enterprise-server@3.2/rest/reference/git#trees).
*   This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees
API](https://docs.github.com/enterprise-server@3.2/rest/reference/git#get-a-tree).
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-repository-content>

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

            ReposGetContentRequest req = new ReposGetContentRequest("explicabo", "beatae", "aliquid") {{
                ref = "modi";
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
<https://docs.github.com/enterprise-server@3.2/rest/metrics/statistics#get-all-contributor-commit-activity>

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

            ReposGetContributorsStatsRequest req = new ReposGetContributorsStatsRequest("optio", "voluptatibus");            

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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-a-deploy-key>

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

            ReposGetDeployKeyRequest req = new ReposGetDeployKeyRequest(562948L, "officia", "libero");            

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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-a-deployment>

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

            ReposGetDeploymentRequest req = new ReposGetDeploymentRequest(520678L, "sequi", "aliquid");            

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
<https://docs.github.com/enterprise-server@3.2/rest/deployments/branch-policies#get-deployment-branch-policy>

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

            ReposGetDeploymentBranchPolicyRequest req = new ReposGetDeploymentBranchPolicyRequest(412052L, "impedit", "ducimus", "odit");            

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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-a-deployment-status>

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

            ReposGetDeploymentStatusRequest req = new ReposGetDeploymentStatusRequest(243623L, "reiciendis", "repellat", 861123L);            

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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-an-environment>

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

            ReposGetEnvironmentRequest req = new ReposGetEnvironmentRequest("laborum", "natus", "accusamus");            

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
<https://docs.github.com/enterprise-server@3.2/rest/pages#get-latest-pages-build>

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

            ReposGetLatestPagesBuildRequest req = new ReposGetLatestPagesBuildRequest("doloremque", "nisi");            

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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-the-latest-release>

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

            ReposGetLatestReleaseRequest req = new ReposGetLatestReleaseRequest("rerum", "recusandae");            

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
<https://docs.github.com/enterprise-server@3.2/rest/pages#get-a-github-pages-site>

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

            ReposGetPagesRequest req = new ReposGetPagesRequest("voluptates", "non");            

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
<https://docs.github.com/enterprise-server@3.2/rest/pages#get-github-pages-build>

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

            ReposGetPagesBuildRequest req = new ReposGetPagesBuildRequest(524577L, "quia", "ullam");            

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
<https://docs.github.com/enterprise-server@3.2/rest/metrics/statistics#get-the-weekly-commit-count>

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

            ReposGetParticipationStatsRequest req = new ReposGetParticipationStatsRequest("quisquam", "dicta");            

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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-pull-request-review-protection>

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

            ReposGetPullRequestReviewProtectionRequest req = new ReposGetPullRequestReviewProtectionRequest("voluptatibus", "eligendi", "quae");            

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
<https://docs.github.com/enterprise-server@3.2/rest/statistics/repos#get-the-hourly-commit-count-for-each-day>

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

            ReposGetPunchCardStatsRequest req = new ReposGetPunchCardStatsRequest("officiis", "architecto");            

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

READMEs support [custom media types](https://docs.github.com/enterprise-server@3.2/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-a-repository-readme>

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

            ReposGetReadmeRequest req = new ReposGetReadmeRequest("architecto", "enim") {{
                ref = "optio";
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

READMEs support [custom media types](https://docs.github.com/enterprise-server@3.2/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-a-repository-directory-readme>

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

            ReposGetReadmeInDirectoryRequest req = new ReposGetReadmeInDirectoryRequest("rem", "perferendis", "facilis") {{
                ref = "reiciendis";
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

**Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://docs.github.com/enterprise-server@3.2/rest/overview/resources-in-the-rest-api#hypermedia).

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-a-release>

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

            ReposGetReleaseRequest req = new ReposGetReleaseRequest("a", 615058L, "dicta");            

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

To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://docs.github.com/enterprise-server@3.2/rest/overview/media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-a-release-asset>

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

            ReposGetReleaseAssetRequest req = new ReposGetReleaseAssetRequest(552439L, "ullam", "dolore");            

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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-a-release-by-tag-name>

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

            ReposGetReleaseByTagRequest req = new ReposGetReleaseByTagRequest("modi", "itaque", "maxime");            

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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#get-status-checks-protection>

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

            ReposGetStatusChecksProtectionRequest req = new ReposGetStatusChecksProtectionRequest("modi", "consequuntur", "assumenda");            

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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the teams who have push access to this branch. The list includes child teams.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#list-teams-with-access-to-the-protected-branch>

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

            ReposGetTeamsWithAccessToProtectedBranchRequest req = new ReposGetTeamsWithAccessToProtectedBranchRequest("vero", "doloribus", "impedit");            

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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the people who have push access to this branch.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#list-users-with-access-to-the-protected-branch>

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

            ReposGetUsersWithAccessToProtectedBranchRequest req = new ReposGetUsersWithAccessToProtectedBranchRequest("porro", "accusamus", "totam");            

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
<https://docs.github.com/enterprise-server@3.2/rest/webhooks/repos#get-a-repository-webhook>

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

            ReposGetWebhookRequest req = new ReposGetWebhookRequest(969168L, "ab", "sint");            

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
<https://docs.github.com/enterprise-server@3.2/rest/webhooks/repo-config#get-a-webhook-configuration-for-a-repository>

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

            ReposGetWebhookConfigForRepoRequest req = new ReposGetWebhookConfigForRepoRequest(472414L, "esse", "iure");            

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
<https://docs.github.com/enterprise-server@3.2/rest/webhooks/repo-deliveries#get-a-delivery-for-a-repository-webhook>

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

            ReposGetWebhookDeliveryRequest req = new ReposGetWebhookDeliveryRequest(485031L, 202796L, "debitis", "vel");            

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

## reposListBranches

List branches

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#list-branches>

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

            ReposListBranchesRequest req = new ReposListBranchesRequest("neque", "corporis") {{
                page = 375350L;
                perPage = 163684L;
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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/commits/commits#list-branches-for-head-commit>

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

            ReposListBranchesForHeadCommitRequest req = new ReposListBranchesForHeadCommitRequest("officia", "reprehenderit", "distinctio");            

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
<https://docs.github.com/enterprise-server@3.2/rest/collaborators/collaborators#list-repository-collaborators>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposListCollaboratorsAffiliationEnum;
import org.openapis.openapi.models.operations.ReposListCollaboratorsPermissionEnum;
import org.openapis.openapi.models.operations.ReposListCollaboratorsRequest;
import org.openapis.openapi.models.operations.ReposListCollaboratorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposListCollaboratorsRequest req = new ReposListCollaboratorsRequest("eius", "ipsa") {{
                affiliation = ReposListCollaboratorsAffiliationEnum.DIRECT;
                page = 978154L;
                perPage = 35160L;
                permission = ReposListCollaboratorsPermissionEnum.TRIAGE;
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
<https://docs.github.com/enterprise-server@3.2/rest/commits/comments#list-commit-comments>

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

            ReposListCommentsForCommitRequest req = new ReposListCommentsForCommitRequest("saepe", "neque", "facere") {{
                page = 307173L;
                perPage = 552581L;
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

Commit Comments use [these custom media types](https://docs.github.com/enterprise-server@3.2/rest/reference/repos#custom-media-types). You can read more about the use of media types in the API [here](https://docs.github.com/enterprise-server@3.2/rest/overview/media-types/).

Comments are ordered by ascending ID.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/commits/comments#list-commit-comments-for-a-repository>

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

            ReposListCommitCommentsForRepoRequest req = new ReposListCommitCommentsForRepoRequest("doloribus", "fugiat") {{
                page = 668577L;
                perPage = 962396L;
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
<https://docs.github.com/enterprise-server@3.2/rest/commits/statuses#list-commit-statuses-for-a-reference>

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

            ReposListCommitStatusesForRefRequest req = new ReposListCommitStatusesForRefRequest("velit", "vitae", "nesciunt") {{
                page = 630832L;
                perPage = 74895L;
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
<https://docs.github.com/enterprise-server@3.2/rest/commits/commits#list-commits>

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

            ReposListCommitsRequest req = new ReposListCommitsRequest("repellat", "nemo") {{
                author = "doloribus";
                page = 823753L;
                path = "unde";
                perPage = 275425L;
                sha = "explicabo";
                since = OffsetDateTime.parse("2022-06-02T03:13:50.504Z");
                until = OffsetDateTime.parse("2022-12-29T17:44:28.341Z");
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#list-repository-contributors>

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

            ReposListContributorsRequest req = new ReposListContributorsRequest("quidem", "nesciunt") {{
                anon = "commodi";
                page = 956124L;
                perPage = 164319L;
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#list-deploy-keys>

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

            ReposListDeployKeysRequest req = new ReposListDeployKeysRequest("veniam", "debitis") {{
                page = 638390L;
                perPage = 575062L;
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
<https://docs.github.com/enterprise-server@3.2/rest/deployments/branch-policies#list-deployment-branch-policies>

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

            ReposListDeploymentBranchPoliciesRequest req = new ReposListDeploymentBranchPoliciesRequest("ut", "numquam", "tenetur") {{
                page = 236790L;
                perPage = 728559L;
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#list-deployment-statuses>

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

            ReposListDeploymentStatusesRequest req = new ReposListDeploymentStatusesRequest(448386L, "minima", "ex") {{
                page = 791762L;
                perPage = 68880L;
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#list-deployments>

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

            ReposListDeploymentsRequest req = new ReposListDeploymentsRequest("beatae", "hic") {{
                environment = "nisi";
                page = 786954L;
                perPage = 221218L;
                ref = "ducimus";
                sha = "fuga";
                task = "minima";
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#list-repositories-for-the-authenticated-user>

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
                affiliation = "architecto";
                before = OffsetDateTime.parse("2022-08-09T02:03:12.598Z");
                direction = ReposListForAuthenticatedUserDirectionEnum.ASC;
                page = 276650L;
                perPage = 240490L;
                since = OffsetDateTime.parse("2022-07-24T00:20:38.347Z");
                sort = ReposListForAuthenticatedUserSortEnum.UPDATED;
                type = ReposListForAuthenticatedUserTypeEnum.PRIVATE_;
                visibility = ReposListForAuthenticatedUserVisibilityEnum.PRIVATE_;
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#list-organization-repositories>

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

            ReposListForOrgRequest req = new ReposListForOrgRequest("impedit") {{
                direction = ReposListForOrgDirectionEnum.ASC;
                page = 363482L;
                perPage = 633987L;
                sort = ReposListForOrgSortEnum.CREATED;
                type = ReposListForOrgTypeEnum.PUBLIC_;
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#list-repositories-for-a-user>

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

            ReposListForUserRequest req = new ReposListForUserRequest("deserunt") {{
                direction = ReposListForUserDirectionEnum.ASC;
                page = 332831L;
                perPage = 800256L;
                sort = ReposListForUserSortEnum.FULL_NAME;
                type = ReposListForUserTypeEnum.MEMBER;
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#list-forks>

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

            ReposListForksRequest req = new ReposListForksRequest("quisquam", "enim") {{
                page = 987759L;
                perPage = 826806L;
                sort = ReposListForksSortEnum.WATCHERS;
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
<https://docs.github.com/enterprise-server@3.2/rest/collaborators/invitations#list-repository-invitations>

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

            ReposListInvitationsRequest req = new ReposListInvitationsRequest("architecto", "alias") {{
                page = 633982L;
                perPage = 60335L;
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
<https://docs.github.com/enterprise-server@3.2/rest/collaborators/invitations#list-repository-invitations-for-the-authenticated-user>

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
                page = 751033L;
                perPage = 898193L;
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#list-repository-languages>

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

            ReposListLanguagesRequest req = new ReposListLanguagesRequest("quia", "dicta");            

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
<https://docs.github.com/enterprise-server@3.2/rest/pages#list-github-pages-builds>

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

            ReposListPagesBuildsRequest req = new ReposListPagesBuildsRequest("vel", "perspiciatis") {{
                page = 892708L;
                perPage = 354821L;
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
- Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@3.2/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of repositories.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#list-public-repositories>

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
                since = 103578L;
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

Lists the merged pull request that introduced the commit to the repository. If the commit is not present in the default branch, additionally returns open pull requests associated with the commit. The results may include open and closed pull requests. Additional preview headers may be required to see certain details for associated pull requests, such as whether a pull request is in a draft state. For more information about previews that might affect this endpoint, see the [List pull requests](https://docs.github.com/enterprise-server@3.2/rest/reference/pulls#list-pull-requests) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/commits/commits#list-pull-requests-associated-with-a-commit>

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

            ReposListPullRequestsAssociatedWithCommitRequest req = new ReposListPullRequestsAssociatedWithCommitRequest("accusantium", "perferendis", "veritatis") {{
                page = 590585L;
                perPage = 765833L;
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#list-release-assets>

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

            ReposListReleaseAssetsRequest req = new ReposListReleaseAssetsRequest("iure", 842402L, "quod") {{
                page = 363224L;
                perPage = 923456L;
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

This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://docs.github.com/enterprise-server@3.2/rest/reference/repos#list-repository-tags).

Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#list-releases>

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

            ReposListReleasesRequest req = new ReposListReleasesRequest("velit", "magnam") {{
                page = 493591L;
                perPage = 388404L;
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#list-repository-tags>

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

            ReposListTagsRequest req = new ReposListTagsRequest("sed", "odio") {{
                page = 616941L;
                perPage = 588152L;
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#list-repository-teams>

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

            ReposListTeamsRequest req = new ReposListTeamsRequest("cum", "doloribus") {{
                page = 703966L;
                perPage = 697330L;
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
<https://docs.github.com/enterprise-server@3.2/rest/webhooks/repo-deliveries#list-deliveries-for-a-repository-webhook>

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

            ReposListWebhookDeliveriesRequest req = new ReposListWebhookDeliveriesRequest(932080L, "laboriosam", "unde") {{
                cursor = "modi";
                perPage = 595198L;
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
<https://docs.github.com/enterprise-server@3.2/rest/webhooks/repos#list-repository-webhooks>

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

            ReposListWebhooksRequest req = new ReposListWebhooksRequest("hic", "cum") {{
                page = 135548L;
                perPage = 725784L;
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#merge-a-branch>

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

            ReposMergeRequest req = new ReposMergeRequest(                new ReposMergeRequestBody("nam", "incidunt") {{
                                commitMessage = "recusandae";
                            }};, "quod", "id");            

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

## reposPingWebhook

This will trigger a [ping event](https://docs.github.com/enterprise-server@3.2/webhooks/#ping-event) to be sent to the hook.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/webhooks/repos#ping-a-repository-webhook>

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

            ReposPingWebhookRequest req = new ReposPingWebhookRequest(904440L, "autem", "quo");            

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
<https://docs.github.com/enterprise-server@3.2/rest/webhooks/repo-deliveries#redeliver-a-delivery-for-a-repository-webhook>

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

            ReposRedeliverWebhookDeliveryRequest req = new ReposRedeliverWebhookDeliveryRequest(198991L, 849383L, "nemo", "illum");            

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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of an app to push to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

| Type    | Description                                                                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#remove-app-access-restrictions>

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

            ReposRemoveAppAccessRestrictionsRequest req = new ReposRemoveAppAccessRestrictionsRequest("facilis", "non", "mollitia") {{
                requestBody = new String[]{{
                    add("distinctio"),
                    add("pariatur"),
                    add("ad"),
                    add("facere"),
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
<https://docs.github.com/enterprise-server@3.2/rest/collaborators/collaborators#remove-a-repository-collaborator>

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

            ReposRemoveCollaboratorRequest req = new ReposRemoveCollaboratorRequest("laborum", "eveniet", "laborum");            

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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#remove-status-check-contexts>

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

            ReposRemoveStatusCheckContextsRequest req = new ReposRemoveStatusCheckContextsRequest("incidunt", "maxime", "ipsam") {{
                requestBody = new ReposRemoveStatusCheckContextsRequestBody1(                new String[]{{
                                    add("deserunt"),
                                    add("molestias"),
                                }});;
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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#remove-status-check-protection>

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

            ReposRemoveStatusCheckProtectionRequest req = new ReposRemoveStatusCheckProtectionRequest("laborum", "est", "occaecati");            

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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of a team to push to this branch. You can also remove push access for child teams.

| Type    | Description                                                                                                                                         |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | Teams that should no longer have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#remove-team-access-restrictions>

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

            ReposRemoveTeamAccessRestrictionsRequest req = new ReposRemoveTeamAccessRestrictionsRequest("labore", "quo", "perferendis") {{
                requestBody = new ReposRemoveTeamAccessRestrictionsRequestBody1(                new String[]{{
                                    add("magnam"),
                                    add("quaerat"),
                                }});;
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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of a user to push to this branch.

| Type    | Description                                                                                                                                   |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames of the people who should no longer have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#remove-user-access-restrictions>

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

            ReposRemoveUserAccessRestrictionsRequest req = new ReposRemoveUserAccessRestrictionsRequest("eligendi", "hic", "nostrum") {{
                requestBody = new String[]{{
                    add("nulla"),
                    add("error"),
                    add("mollitia"),
                }};
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

**Note:** Although the API responds immediately, the branch rename process might take some extra time to complete in the background. You won't be able to push to the old branch name while the rename process is in progress. For more information, see "[Renaming a branch](https://docs.github.com/enterprise-server@3.2/github/administering-a-repository/renaming-a-branch)".

The permissions required to use this endpoint depends on whether you are renaming the default branch.

To rename a non-default branch:

* Users must have push access.
* GitHub Apps must have the `contents:write` repository permission.

To rename the default branch:

* Users must have admin or owner permissions.
* GitHub Apps must have the `administration:write` repository permission.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#rename-a-branch>

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

            ReposRenameBranchRequest req = new ReposRenameBranchRequest(                new ReposRenameBranchRequestBody("magnam");, "nostrum", "esse", "corrupti");            

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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#replace-all-repository-topics>

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
                                                add("facere"),
                                                add("impedit"),
                                                add("quasi"),
                                            }});, "deserunt", "quod");            

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
<https://docs.github.com/enterprise-server@3.2/rest/pages#request-a-github-pages-build>

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

            ReposRequestPagesBuildRequest req = new ReposRequestPagesBuildRequest("laboriosam", "doloremque");            

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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#set-admin-branch-protection>

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

            ReposSetAdminBranchProtectionRequest req = new ReposSetAdminBranchProtectionRequest("voluptatem", "facere", "necessitatibus");            

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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of apps that have push access to this branch. This removes all apps that previously had push access and grants push access to the new list of apps. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

| Type    | Description                                                                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#set-app-access-restrictions>

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

            ReposSetAppAccessRestrictionsRequest req = new ReposSetAppAccessRestrictionsRequest("maxime", "consequatur", "eaque") {{
                requestBody = new ReposSetAppAccessRestrictionsRequestBody1(                new String[]{{
                                    add("porro"),
                                    add("blanditiis"),
                                    add("quae"),
                                }});;
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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#set-status-check-contexts>

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

            ReposSetStatusCheckContextsRequest req = new ReposSetStatusCheckContextsRequest("magni", "officiis", "sed") {{
                requestBody = new String[]{{
                    add("ipsa"),
                    add("excepturi"),
                    add("a"),
                    add("maiores"),
                }};
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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. Team restrictions include child teams.

| Type    | Description                                                                                                                                |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#set-team-access-restrictions>

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

            ReposSetTeamAccessRestrictionsRequest req = new ReposSetTeamAccessRestrictionsRequest("laudantium", "maiores", "alias") {{
                requestBody = new String[]{{
                    add("dicta"),
                    add("suscipit"),
                    add("earum"),
                }};
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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.

| Type    | Description                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#set-user-access-restrictions>

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

            ReposSetUserAccessRestrictionsRequest req = new ReposSetUserAccessRestrictionsRequest("doloribus", "velit", "eius") {{
                requestBody = new ReposSetUserAccessRestrictionsRequestBody1(                new String[]{{
                                    add("eligendi"),
                                    add("quasi"),
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
<https://docs.github.com/enterprise-server@3.2/rest/webhooks/repos#test-the-push-repository-webhook>

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

            ReposTestPushWebhookRequest req = new ReposTestPushWebhookRequest(203621L, "vero", "excepturi");            

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

A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://docs.github.com/articles/about-repository-transfers/).

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#transfer-a-repository>

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

            ReposTransferRequest req = new ReposTransferRequest(                new ReposTransferRequestBody("accusantium") {{
                                teamIds = new Long[]{{
                                    add(771241L),
                                }};
                            }};, "beatae", "incidunt");            

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

**Note**: To edit a repository's topics, use the [Replace all repository topics](https://docs.github.com/enterprise-server@3.2/rest/reference/repos#replace-all-repository-topics) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos/#update-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReposUpdateRequest;
import org.openapis.openapi.models.operations.ReposUpdateRequestBody;
import org.openapis.openapi.models.operations.ReposUpdateRequestBodyMergeCommitMessageEnum;
import org.openapis.openapi.models.operations.ReposUpdateRequestBodyMergeCommitTitleEnum;
import org.openapis.openapi.models.operations.ReposUpdateRequestBodySecurityAndAnalysis;
import org.openapis.openapi.models.operations.ReposUpdateRequestBodySecurityAndAnalysisAdvancedSecurity;
import org.openapis.openapi.models.operations.ReposUpdateRequestBodySecurityAndAnalysisSecretScanning;
import org.openapis.openapi.models.operations.ReposUpdateRequestBodySecurityAndAnalysisSecretScanningPushProtection;
import org.openapis.openapi.models.operations.ReposUpdateRequestBodySquashMergeCommitMessageEnum;
import org.openapis.openapi.models.operations.ReposUpdateRequestBodySquashMergeCommitTitleEnum;
import org.openapis.openapi.models.operations.ReposUpdateRequestBodyVisibilityEnum;
import org.openapis.openapi.models.operations.ReposUpdateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReposUpdateRequest req = new ReposUpdateRequest("dicta", "odit") {{
                requestBody = new ReposUpdateRequestBody() {{
                    allowForking = false;
                    allowMergeCommit = false;
                    allowRebaseMerge = false;
                    allowSquashMerge = false;
                    allowUpdateBranch = false;
                    archived = false;
                    defaultBranch = "corporis";
                    deleteBranchOnMerge = false;
                    description = "rerum";
                    hasIssues = false;
                    hasProjects = false;
                    hasWiki = false;
                    homepage = "alias";
                    isTemplate = false;
                    mergeCommitMessage = ReposUpdateRequestBodyMergeCommitMessageEnum.PR_TITLE;
                    mergeCommitTitle = ReposUpdateRequestBodyMergeCommitTitleEnum.PR_TITLE;
                    name = "Genevieve Howell";
                    private_ = false;
                    securityAndAnalysis = new ReposUpdateRequestBodySecurityAndAnalysis() {{
                        advancedSecurity = new ReposUpdateRequestBodySecurityAndAnalysisAdvancedSecurity() {{
                            status = "veritatis";
                        }};;
                        secretScanning = new ReposUpdateRequestBodySecurityAndAnalysisSecretScanning() {{
                            status = "ullam";
                        }};;
                        secretScanningPushProtection = new ReposUpdateRequestBodySecurityAndAnalysisSecretScanningPushProtection() {{
                            status = "quae";
                        }};;
                    }};;
                    squashMergeCommitMessage = ReposUpdateRequestBodySquashMergeCommitMessageEnum.COMMIT_MESSAGES;
                    squashMergeCommitTitle = ReposUpdateRequestBodySquashMergeCommitTitleEnum.PR_TITLE;
                    useSquashPrTitleAsDefault = false;
                    visibility = ReposUpdateRequestBodyVisibilityEnum.PRIVATE_;
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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Protecting a branch requires admin or owner permissions to the repository.

**Note**: Passing new arrays of `users` and `teams` replaces their previous values.

**Note**: The list of users, apps, and teams in total is limited to 100 items.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#update-branch-protection>

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
                                                        add("deserunt"),
                                                    }};
                                                    teams = new String[]{{
                                                        add("omnis"),
                                                        add("sed"),
                                                        add("nesciunt"),
                                                        add("maxime"),
                                                    }};
                                                    users = new String[]{{
                                                        add("cupiditate"),
                                                        add("aliquam"),
                                                    }};
                                                }};;
                                                requireCodeOwnerReviews = false;
                                                requiredApprovingReviewCount = 569287L;
                                            }};,                 new ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks(                new String[]{{
                                                                add("laudantium"),
                                                                add("velit"),
                                                                add("reiciendis"),
                                                                add("amet"),
                                                            }}, false) {{
                                                checks = new org.openapis.openapi.models.operations.ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks[]{{
                                                    add(new ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks("tenetur") {{
                                                        appId = 57470L;
                                                        context = "quisquam";
                                                    }}),
                                                    add(new ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks("aliquid") {{
                                                        appId = 555294L;
                                                        context = "molestiae";
                                                    }}),
                                                }};
                                            }};,                 new ReposUpdateBranchProtectionRequestBodyRestrictions(                new String[]{{
                                                                add("a"),
                                                                add("nobis"),
                                                                add("perspiciatis"),
                                                                add("accusantium"),
                                                            }},                 new String[]{{
                                                                add("minus"),
                                                            }}) {{
                                                apps = new String[]{{
                                                    add("eveniet"),
                                                    add("porro"),
                                                }};
                                            }};) {{
                                allowDeletions = false;
                                allowForcePushes = false;
                                blockCreations = false;
                                contexts = new String[]{{
                                    add("quidem"),
                                    add("modi"),
                                    add("voluptates"),
                                }};
                                requiredConversationResolution = false;
                                requiredLinearHistory = false;
                            }};, "fugit", "eius", "sequi");            

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
<https://docs.github.com/enterprise-server@3.2/rest/commits/comments#update-a-commit-comment>

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

            ReposUpdateCommitCommentRequest req = new ReposUpdateCommitCommentRequest(                new ReposUpdateCommitCommentRequestBody("eligendi");, 992887L, "esse", "blanditiis");            

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
<https://docs.github.com/enterprise-server@3.2/rest/deployments/branch-policies#update-deployment-branch-policy>

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

            ReposUpdateDeploymentBranchPolicyRequest req = new ReposUpdateDeploymentBranchPolicyRequest(573610L,                 new DeploymentBranchPolicyNamePattern("release/*");, "repellat", "a", "animi");            

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

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/pages#update-information-about-a-github-pages-site>

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
                                buildType = ReposUpdateInformationAboutPagesSiteRequestBody5BuildTypeEnum.WORKFLOW;
                                cname = "nulla";
                                httpsEnforced = false;
                                public_ = false;
                                source = new ReposUpdateInformationAboutPagesSiteRequestBody5Source2("officiis", ReposUpdateInformationAboutPagesSiteRequestBody5Source2PathEnum.ROOT) {{
                                    branch = "corporis";
                                    path = ReposUpdateInformationAboutPagesSiteRequestBody5Source2PathEnum.ROOT;
                                }};
                            }}, "officia", "saepe");            

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
<https://docs.github.com/enterprise-server@3.2/rest/collaborators/invitations#update-a-repository-invitation>

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

            ReposUpdateInvitationRequest req = new ReposUpdateInvitationRequest(429997L, "repudiandae", "accusantium") {{
                requestBody = new ReposUpdateInvitationRequestBody() {{
                    permissions = ReposUpdateInvitationRequestBodyPermissionsEnum.TRIAGE;
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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

**Note**: Passing new arrays of `users` and `teams` replaces their previous values.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#update-pull-request-review-protection>

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

            ReposUpdatePullRequestReviewProtectionRequest req = new ReposUpdatePullRequestReviewProtectionRequest("impedit", "quasi", "blanditiis") {{
                requestBody = new ReposUpdatePullRequestReviewProtectionRequestBody() {{
                    dismissStaleReviews = false;
                    dismissalRestrictions = new ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions() {{
                        apps = new String[]{{
                            add("quisquam"),
                            add("eos"),
                        }};
                        teams = new String[]{{
                            add("natus"),
                            add("minus"),
                            add("quia"),
                        }};
                        users = new String[]{{
                            add("reprehenderit"),
                            add("quod"),
                        }};
                    }};;
                    requireCodeOwnerReviews = false;
                    requiredApprovingReviewCount = 552440L;
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#update-a-release>

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

            ReposUpdateReleaseRequest req = new ReposUpdateReleaseRequest("corrupti", 227870L, "molestiae") {{
                requestBody = new ReposUpdateReleaseRequestBody() {{
                    body = "amet";
                    draft = false;
                    name = "Edwin Bahringer V";
                    prerelease = false;
                    tagName = "dolore";
                    targetCommitish = "sunt";
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#update-a-release-asset>

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

            ReposUpdateReleaseAssetRequest req = new ReposUpdateReleaseAssetRequest(982991L, "neque", "odit") {{
                requestBody = new ReposUpdateReleaseAssetRequestBody() {{
                    label = "earum";
                    name = "Brittany Bechtelar";
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

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#update-status-check-protection>

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

            ReposUpdateStatusCheckProtectionRequest req = new ReposUpdateStatusCheckProtectionRequest("nihil", "ad", "nisi") {{
                requestBody = new ReposUpdateStatusCheckProtectionRequestBody() {{
                    contexts = new String[]{{
                        add("quis"),
                        add("quibusdam"),
                        add("nemo"),
                        add("suscipit"),
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
<https://docs.github.com/enterprise-server@3.2/rest/webhooks/repos#update-a-repository-webhook>

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
                                    add("sit"),
                                    add("quidem"),
                                    add("repellendus"),
                                    add("perferendis"),
                                }};
                                config = new ReposUpdateWebhookRequestBodyConfig("https://example.com/webhook") {{
                                    address = ""bar@example.com"";
                                    contentType = ""json"";
                                    insecureSsl = 9581.46;
                                    room = ""The Serious Room"";
                                    secret = ""********"";
                                }};;
                                events = new String[]{{
                                    add("possimus"),
                                }};
                                removeEvents = new String[]{{
                                    add("repudiandae"),
                                    add("architecto"),
                                    add("adipisci"),
                                    add("pariatur"),
                                }};
                            }};, 688463L, "dolore", "voluptatibus");            

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
<https://docs.github.com/enterprise-server@3.2/rest/webhooks/repo-config#update-a-webhook-configuration-for-a-repository>

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

            ReposUpdateWebhookConfigForRepoRequest req = new ReposUpdateWebhookConfigForRepoRequest(435353L, "explicabo", "minus") {{
                requestBody = new ReposUpdateWebhookConfigForRepoRequestBody() {{
                    contentType = ""json"";
                    insecureSsl = 6775.09;
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

This endpoint makes use of [a Hypermedia relation](https://docs.github.com/enterprise-server@3.2/rest/overview/resources-in-the-rest-api#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in
the response of the [Create a release endpoint](https://docs.github.com/enterprise-server@3.2/rest/reference/repos#create-a-release) to upload a release asset.

You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.

Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example: 

`application/zip`

GitHub Enterprise Server expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example,
you'll still need to pass your authentication to be able to upload an asset.

When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted.

**Notes:**
*   GitHub Enterprise Server renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The "[List assets for a release](https://docs.github.com/enterprise-server@3.2/rest/reference/repos#list-assets-for-a-release)"
endpoint lists the renamed filenames. For more information and help, contact [GitHub Enterprise Server Support](https://support.github.com/contact?tags=dotcom-rest-api).
*   If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/repos#upload-a-release-asset>

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

            ReposUploadReleaseAssetRequest req = new ReposUploadReleaseAssetRequest("velit", "earum", 510020L, "error") {{
                requestBody = "non";
                label = "quasi";
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
