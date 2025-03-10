# Repos

## Overview

Interact with GitHub Repos.

### Available Operations

* [ReposAcceptInvitationForAuthenticatedUser](#reposacceptinvitationforauthenticateduser) - Accept a repository invitation
* [ReposAddAppAccessRestrictions](#reposaddappaccessrestrictions) - Add app access restrictions
* [ReposAddCollaborator](#reposaddcollaborator) - Add a repository collaborator
* [ReposAddStatusCheckContexts](#reposaddstatuscheckcontexts) - Add status check contexts
* [ReposAddTeamAccessRestrictions](#reposaddteamaccessrestrictions) - Add team access restrictions
* [ReposAddUserAccessRestrictions](#reposadduseraccessrestrictions) - Add user access restrictions
* [ReposCheckCollaborator](#reposcheckcollaborator) - Check if a user is a repository collaborator
* [ReposCodeownersErrors](#reposcodeownerserrors) - List CODEOWNERS errors
* [ReposCompareCommits](#reposcomparecommits) - Compare two commits
* [ReposCreateAutolink](#reposcreateautolink) - Create an autolink reference for a repository
* [ReposCreateCommitComment](#reposcreatecommitcomment) - Create a commit comment
* [ReposCreateCommitSignatureProtection](#reposcreatecommitsignatureprotection) - Create commit signature protection
* [ReposCreateCommitStatus](#reposcreatecommitstatus) - Create a commit status
* [ReposCreateDeployKey](#reposcreatedeploykey) - Create a deploy key
* [ReposCreateDeployment](#reposcreatedeployment) - Create a deployment
* [ReposCreateDeploymentBranchPolicy](#reposcreatedeploymentbranchpolicy) - Create a deployment branch policy
* [ReposCreateDeploymentStatus](#reposcreatedeploymentstatus) - Create a deployment status
* [ReposCreateDispatchEvent](#reposcreatedispatchevent) - Create a repository dispatch event
* [ReposCreateForAuthenticatedUser](#reposcreateforauthenticateduser) - Create a repository for the authenticated user
* [ReposCreateFork](#reposcreatefork) - Create a fork
* [ReposCreateInOrg](#reposcreateinorg) - Create an organization repository
* [ReposCreateOrUpdateEnvironment](#reposcreateorupdateenvironment) - Create or update an environment
* [ReposCreateOrUpdateFileContents](#reposcreateorupdatefilecontents) - Create or update file contents
* [ReposCreatePagesSite](#reposcreatepagessite) - Create a GitHub AE Pages site
* [ReposCreateRelease](#reposcreaterelease) - Create a release
* [ReposCreateUsingTemplate](#reposcreateusingtemplate) - Create a repository using a template
* [ReposCreateWebhook](#reposcreatewebhook) - Create a repository webhook
* [ReposDeclineInvitationForAuthenticatedUser](#reposdeclineinvitationforauthenticateduser) - Decline a repository invitation
* [ReposDelete](#reposdelete) - Delete a repository
* [ReposDeleteAccessRestrictions](#reposdeleteaccessrestrictions) - Delete access restrictions
* [ReposDeleteAdminBranchProtection](#reposdeleteadminbranchprotection) - Delete admin branch protection
* [ReposDeleteAnEnvironment](#reposdeleteanenvironment) - Delete an environment
* [ReposDeleteAutolink](#reposdeleteautolink) - Delete an autolink reference from a repository
* [ReposDeleteBranchProtection](#reposdeletebranchprotection) - Delete branch protection
* [ReposDeleteCommitComment](#reposdeletecommitcomment) - Delete a commit comment
* [ReposDeleteCommitSignatureProtection](#reposdeletecommitsignatureprotection) - Delete commit signature protection
* [ReposDeleteDeployKey](#reposdeletedeploykey) - Delete a deploy key
* [ReposDeleteDeployment](#reposdeletedeployment) - Delete a deployment
* [ReposDeleteDeploymentBranchPolicy](#reposdeletedeploymentbranchpolicy) - Delete a deployment branch policy
* [ReposDeleteFile](#reposdeletefile) - Delete a file
* [ReposDeleteInvitation](#reposdeleteinvitation) - Delete a repository invitation
* [ReposDeletePagesSite](#reposdeletepagessite) - Delete a GitHub AE Pages site
* [ReposDeletePullRequestReviewProtection](#reposdeletepullrequestreviewprotection) - Delete pull request review protection
* [ReposDeleteRelease](#reposdeleterelease) - Delete a release
* [ReposDeleteReleaseAsset](#reposdeletereleaseasset) - Delete a release asset
* [ReposDeleteWebhook](#reposdeletewebhook) - Delete a repository webhook
* [ReposDisableLfsForRepo](#reposdisablelfsforrepo) - Disable Git LFS for a repository
* [ReposDownloadTarballArchive](#reposdownloadtarballarchive) - Download a repository archive (tar)
* [ReposDownloadZipballArchive](#reposdownloadzipballarchive) - Download a repository archive (zip)
* [ReposEnableLfsForRepo](#reposenablelfsforrepo) - Enable Git LFS for a repository
* [ReposGet](#reposget) - Get a repository
* [ReposGetAccessRestrictions](#reposgetaccessrestrictions) - Get access restrictions
* [ReposGetAdminBranchProtection](#reposgetadminbranchprotection) - Get admin branch protection
* [ReposGetAllEnvironments](#reposgetallenvironments) - List environments
* [ReposGetAllStatusCheckContexts](#reposgetallstatuscheckcontexts) - Get all status check contexts
* [ReposGetAllTopics](#reposgetalltopics) - Get all repository topics
* [ReposGetAppsWithAccessToProtectedBranch](#reposgetappswithaccesstoprotectedbranch) - Get apps with access to the protected branch
* [ReposGetAutolink](#reposgetautolink) - Get an autolink reference of a repository
* [ReposGetBranch](#reposgetbranch) - Get a branch
* [ReposGetBranchProtection](#reposgetbranchprotection) - Get branch protection
* [ReposGetCodeFrequencyStats](#reposgetcodefrequencystats) - Get the weekly commit activity
* [ReposGetCollaboratorPermissionLevel](#reposgetcollaboratorpermissionlevel) - Get repository permissions for a user
* [ReposGetCombinedStatusForRef](#reposgetcombinedstatusforref) - Get the combined status for a specific reference
* [ReposGetCommit](#reposgetcommit) - Get a commit
* [ReposGetCommitActivityStats](#reposgetcommitactivitystats) - Get the last year of commit activity
* [ReposGetCommitComment](#reposgetcommitcomment) - Get a commit comment
* [ReposGetCommitSignatureProtection](#reposgetcommitsignatureprotection) - Get commit signature protection
* [ReposGetContent](#reposgetcontent) - Get repository content
* [ReposGetContributorsStats](#reposgetcontributorsstats) - Get all contributor commit activity
* [ReposGetDeployKey](#reposgetdeploykey) - Get a deploy key
* [ReposGetDeployment](#reposgetdeployment) - Get a deployment
* [ReposGetDeploymentBranchPolicy](#reposgetdeploymentbranchpolicy) - Get a deployment branch policy
* [ReposGetDeploymentStatus](#reposgetdeploymentstatus) - Get a deployment status
* [ReposGetEnvironment](#reposgetenvironment) - Get an environment
* [ReposGetLatestPagesBuild](#reposgetlatestpagesbuild) - Get latest Pages build
* [ReposGetLatestRelease](#reposgetlatestrelease) - Get the latest release
* [ReposGetPages](#reposgetpages) - Get a GitHub AE Pages site
* [ReposGetPagesBuild](#reposgetpagesbuild) - Get GitHub AE Pages build
* [ReposGetParticipationStats](#reposgetparticipationstats) - Get the weekly commit count
* [ReposGetPullRequestReviewProtection](#reposgetpullrequestreviewprotection) - Get pull request review protection
* [ReposGetPunchCardStats](#reposgetpunchcardstats) - Get the hourly commit count for each day
* [ReposGetReadme](#reposgetreadme) - Get a repository README
* [ReposGetReadmeInDirectory](#reposgetreadmeindirectory) - Get a repository README for a directory
* [ReposGetRelease](#reposgetrelease) - Get a release
* [ReposGetReleaseAsset](#reposgetreleaseasset) - Get a release asset
* [ReposGetReleaseByTag](#reposgetreleasebytag) - Get a release by tag name
* [ReposGetStatusChecksProtection](#reposgetstatuschecksprotection) - Get status checks protection
* [ReposGetTeamsWithAccessToProtectedBranch](#reposgetteamswithaccesstoprotectedbranch) - Get teams with access to the protected branch
* [ReposGetUsersWithAccessToProtectedBranch](#reposgetuserswithaccesstoprotectedbranch) - Get users with access to the protected branch
* [ReposGetWebhook](#reposgetwebhook) - Get a repository webhook
* [ReposGetWebhookConfigForRepo](#reposgetwebhookconfigforrepo) - Get a webhook configuration for a repository
* [ReposGetWebhookDelivery](#reposgetwebhookdelivery) - Get a delivery for a repository webhook
* [ReposListAutolinks](#reposlistautolinks) - List all autolinks of a repository
* [ReposListBranches](#reposlistbranches) - List branches
* [ReposListBranchesForHeadCommit](#reposlistbranchesforheadcommit) - List branches for HEAD commit
* [ReposListCollaborators](#reposlistcollaborators) - List repository collaborators
* [ReposListCommentsForCommit](#reposlistcommentsforcommit) - List commit comments
* [ReposListCommitCommentsForRepo](#reposlistcommitcommentsforrepo) - List commit comments for a repository
* [ReposListCommitStatusesForRef](#reposlistcommitstatusesforref) - List commit statuses for a reference
* [ReposListCommits](#reposlistcommits) - List commits
* [ReposListContributors](#reposlistcontributors) - List repository contributors
* [ReposListDeployKeys](#reposlistdeploykeys) - List deploy keys
* [ReposListDeploymentBranchPolicies](#reposlistdeploymentbranchpolicies) - List deployment branch policies
* [ReposListDeploymentStatuses](#reposlistdeploymentstatuses) - List deployment statuses
* [ReposListDeployments](#reposlistdeployments) - List deployments
* [ReposListForAuthenticatedUser](#reposlistforauthenticateduser) - List repositories for the authenticated user
* [ReposListForOrg](#reposlistfororg) - List organization repositories
* [ReposListForUser](#reposlistforuser) - List repositories for a user
* [ReposListForks](#reposlistforks) - List forks
* [ReposListInvitations](#reposlistinvitations) - List repository invitations
* [ReposListInvitationsForAuthenticatedUser](#reposlistinvitationsforauthenticateduser) - List repository invitations for the authenticated user
* [ReposListLanguages](#reposlistlanguages) - List repository languages
* [ReposListPagesBuilds](#reposlistpagesbuilds) - List GitHub AE Pages builds
* [ReposListPullRequestsAssociatedWithCommit](#reposlistpullrequestsassociatedwithcommit) - List pull requests associated with a commit
* [ReposListReleaseAssets](#reposlistreleaseassets) - List release assets
* [ReposListReleases](#reposlistreleases) - List releases
* [ReposListTags](#reposlisttags) - List repository tags
* [ReposListTeams](#reposlistteams) - List repository teams
* [ReposListWebhookDeliveries](#reposlistwebhookdeliveries) - List deliveries for a repository webhook
* [ReposListWebhooks](#reposlistwebhooks) - List repository webhooks
* [ReposMerge](#reposmerge) - Merge a branch
* [ReposMergeUpstream](#reposmergeupstream) - Sync a fork branch with the upstream repository
* [ReposPingWebhook](#repospingwebhook) - Ping a repository webhook
* [ReposRedeliverWebhookDelivery](#reposredeliverwebhookdelivery) - Redeliver a delivery for a repository webhook
* [ReposRemoveAppAccessRestrictions](#reposremoveappaccessrestrictions) - Remove app access restrictions
* [ReposRemoveCollaborator](#reposremovecollaborator) - Remove a repository collaborator
* [ReposRemoveStatusCheckContexts](#reposremovestatuscheckcontexts) - Remove status check contexts
* [ReposRemoveStatusCheckProtection](#reposremovestatuscheckprotection) - Remove status check protection
* [ReposRemoveTeamAccessRestrictions](#reposremoveteamaccessrestrictions) - Remove team access restrictions
* [ReposRemoveUserAccessRestrictions](#reposremoveuseraccessrestrictions) - Remove user access restrictions
* [ReposReplaceAllTopics](#reposreplacealltopics) - Replace all repository topics
* [ReposRequestPagesBuild](#reposrequestpagesbuild) - Request a GitHub AE Pages build
* [ReposSetAdminBranchProtection](#repossetadminbranchprotection) - Set admin branch protection
* [ReposSetAppAccessRestrictions](#repossetappaccessrestrictions) - Set app access restrictions
* [ReposSetStatusCheckContexts](#repossetstatuscheckcontexts) - Set status check contexts
* [ReposSetTeamAccessRestrictions](#repossetteamaccessrestrictions) - Set team access restrictions
* [ReposSetUserAccessRestrictions](#repossetuseraccessrestrictions) - Set user access restrictions
* [ReposTestPushWebhook](#repostestpushwebhook) - Test the push repository webhook
* [ReposTransfer](#repostransfer) - Transfer a repository
* [ReposUpdate](#reposupdate) - Update a repository
* [ReposUpdateBranchProtection](#reposupdatebranchprotection) - Update branch protection
* [ReposUpdateCommitComment](#reposupdatecommitcomment) - Update a commit comment
* [ReposUpdateDeploymentBranchPolicy](#reposupdatedeploymentbranchpolicy) - Update a deployment branch policy
* [ReposUpdateInformationAboutPagesSite](#reposupdateinformationaboutpagessite) - Update information about a GitHub AE Pages site
* [ReposUpdateInvitation](#reposupdateinvitation) - Update a repository invitation
* [ReposUpdatePullRequestReviewProtection](#reposupdatepullrequestreviewprotection) - Update pull request review protection
* [ReposUpdateRelease](#reposupdaterelease) - Update a release
* [ReposUpdateReleaseAsset](#reposupdatereleaseasset) - Update a release asset
* [ReposUpdateStatusCheckProtection](#reposupdatestatuscheckprotection) - Update status check protection
* [ReposUpdateWebhook](#reposupdatewebhook) - Update a repository webhook
* [ReposUpdateWebhookConfigForRepo](#reposupdatewebhookconfigforrepo) - Update a webhook configuration for a repository
* [ReposUploadReleaseAsset](#reposuploadreleaseasset) - Upload a release asset

## ReposAcceptInvitationForAuthenticatedUser

Accept a repository invitation

API method documentation
<https://docs.github.com/github-ae@latest/rest/collaborators/invitations#accept-a-repository-invitation>

### Example Usage

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
    res, err := s.Repos.ReposAcceptInvitationForAuthenticatedUser(ctx, operations.ReposAcceptInvitationForAuthenticatedUserRequest{
        InvitationID: 208253,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposAddAppAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified apps push access for this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#add-app-access-restrictions>

### Example Usage

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
    res, err := s.Repos.ReposAddAppAccessRestrictions(ctx, operations.ReposAddAppAccessRestrictionsRequest{
        RequestBody: &operations.ReposAddAppAccessRestrictionsRequestBody{},
        Branch: "exercitationem",
        Owner: "itaque",
        Repo: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Integrations != nil {
        // handle response
    }
}
```

## ReposAddCollaborator

This endpoint triggers [notifications](https://docs.github.com/github-ae@latest/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/github-ae@latest/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/github-ae@latest/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

Adding an outside collaborator may be restricted by enterprise administrators. For more information, see "[Enforcing repository management policies in your enterprise](https://docs.github.com/github-ae@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)."

For more information on permission levels, see "[Repository permission levels for an organization](https://docs.github.com/github-ae@latest/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)". There are restrictions on which permissions can be granted to organization members when an organization base role is in place. In this case, the permission being given must be equal to or higher than the org base permission. Otherwise, the request will fail with:

```
Cannot assign {member} permission of {role name}
```

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/github-ae@latest/rest/overview/resources-in-the-rest-api#http-verbs)."

The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [repository invitations API endpoints](https://docs.github.com/github-ae@latest/rest/reference/repos#invitations).

**Updating an existing collaborator's permission level**

The endpoint can also be used to change the permissions of an existing collaborator without first removing and re-adding the collaborator. To change the permissions, use the same endpoint and pass a different `permission` parameter. The response will be a `204`, with no other indication that the permission level changed.

**Rate limits**

You are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.

API method documentation
<https://docs.github.com/github-ae@latest/rest/collaborators/collaborators#add-a-repository-collaborator>

### Example Usage

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
    res, err := s.Repos.ReposAddCollaborator(ctx, operations.ReposAddCollaboratorRequest{
        RequestBody: &operations.ReposAddCollaboratorRequestBody{
            Permission: sdk.String("ipsum"),
        },
        Owner: "unde",
        Repo: "nulla",
        Username: "Michael15",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryInvitation != nil {
        // handle response
    }
}
```

## ReposAddStatusCheckContexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#add-status-check-contexts>

### Example Usage

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
    res, err := s.Repos.ReposAddStatusCheckContexts(ctx, operations.ReposAddStatusCheckContextsRequest{
        RequestBody: &operations.ReposAddStatusCheckContextsRequestBody{},
        Branch: "nostrum",
        Owner: "omnis",
        Repo: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReposAddStatusCheckContexts200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ReposAddTeamAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified teams push access for this branch. You can also give push access to child teams.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#add-team-access-restrictions>

### Example Usage

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
    res, err := s.Repos.ReposAddTeamAccessRestrictions(ctx, operations.ReposAddTeamAccessRestrictionsRequest{
        RequestBody: &operations.ReposAddTeamAccessRestrictionsRequestBody{},
        Branch: "dicta",
        Owner: "id",
        Repo: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## ReposAddUserAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified people push access for this branch.

| Type    | Description                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#add-user-access-restrictions>

### Example Usage

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
    res, err := s.Repos.ReposAddUserAccessRestrictions(ctx, operations.ReposAddUserAccessRestrictionsRequest{
        RequestBody: &operations.ReposAddUserAccessRestrictionsRequestBody{},
        Branch: "fugiat",
        Owner: "officia",
        Repo: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## ReposCheckCollaborator

For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.

Team members will include the members of child teams.

You must authenticate using an access token with the `read:org` and `repo` scopes with push access to use this
endpoint. GitHub Apps must have the `members` organization permission and `metadata` repository permission to use this
endpoint.

API method documentation
<https://docs.github.com/github-ae@latest/rest/collaborators/collaborators#check-if-a-user-is-a-repository-collaborator>

### Example Usage

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
    res, err := s.Repos.ReposCheckCollaborator(ctx, operations.ReposCheckCollaboratorRequest{
        Owner: "placeat",
        Repo: "sit",
        Username: "Jay.Beer4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposCodeownersErrors

List any syntax errors that are detected in the CODEOWNERS
file.

For more information about the correct CODEOWNERS syntax,
see "[About code owners](https://docs.github.com/github-ae@latest/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)."

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#list-codeowners-errors>

### Example Usage

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
    res, err := s.Repos.ReposCodeownersErrors(ctx, operations.ReposCodeownersErrorsRequest{
        Owner: "totam",
        Ref: sdk.String("dolore"),
        Repo: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeownersErrors != nil {
        // handle response
    }
}
```

## ReposCompareCommits

Compares two commits against one another. You can compare branches in the same repository, or you can compare branches that exist in different repositories within the same repository network, including fork branches. For more information about how to view a repository's network, see "[Understanding connections between repositories](https://docs.github.com/github-ae@latest/repositories/viewing-activity-and-data-for-your-repository/understanding-connections-between-repositories)."

This endpoint is equivalent to running the `git log BASE...HEAD` command, but it returns commits in a different order. The `git log BASE...HEAD` command returns commits in reverse chronological order, whereas the API returns commits in chronological order. You can pass the appropriate [media type](https://docs.github.com/github-ae@latest/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.

The API response includes details about the files that were changed between the two commits. This includes the status of the change (if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.

When calling this endpoint without any paging parameter (`per_page` or `page`), the returned list is limited to 250 commits, and the last commit in the list is the most recent of the entire comparison.

**Working with large comparisons**

To process a response with a large number of commits, use a query parameter (`per_page` or `page`) to paginate the results. When using pagination:

- The list of changed files is only shown on the first page of results, but it includes all changed files for the entire comparison.
- The results are returned in chronological order, but the last commit in the returned list may not be the most recent one in the entire set if there are more pages of results.

For more information on working with pagination, see "[Using pagination in the REST API](https://docs.github.com/github-ae@latest/rest/guides/using-pagination-in-the-rest-api)."

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
<https://docs.github.com/github-ae@latest/rest/commits/commits#compare-two-commits>

### Example Usage

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
    res, err := s.Repos.ReposCompareCommits(ctx, operations.ReposCompareCommitsRequest{
        Basehead: "distinctio",
        Owner: "voluptatem",
        Page: sdk.Int64(418109),
        PerPage: sdk.Int64(456688),
        Repo: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommitComparison != nil {
        // handle response
    }
}
```

## ReposCreateAutolink

Users with admin access to the repository can create an autolink.

API method documentation
<https://docs.github.com/github-ae@latest/rest/repos/autolinks#create-an-autolink-reference-for-a-repository>

### Example Usage

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
    res, err := s.Repos.ReposCreateAutolink(ctx, operations.ReposCreateAutolinkRequest{
        RequestBody: operations.ReposCreateAutolinkRequestBody{
            IsAlphanumeric: sdk.Bool(false),
            KeyPrefix: "assumenda",
            URLTemplate: "beatae",
        },
        Owner: "est",
        Repo: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Autolink != nil {
        // handle response
    }
}
```

## ReposCreateCommitComment

Create a comment for a commit using its `:commit_sha`.

This endpoint triggers [notifications](https://docs.github.com/github-ae@latest/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/github-ae@latest/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/github-ae@latest/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/github-ae@latest/rest/commits/comments#create-a-commit-comment>

### Example Usage

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
    res, err := s.Repos.ReposCreateCommitComment(ctx, operations.ReposCreateCommitCommentRequest{
        RequestBody: operations.ReposCreateCommitCommentRequestBody{
            Body: "corrupti",
            Line: sdk.Int64(473143),
            Path: sdk.String("provident"),
            Position: sdk.Int64(882284),
        },
        CommitSha: "necessitatibus",
        Owner: "tempore",
        Repo: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommitComment != nil {
        // handle response
    }
}
```

## ReposCreateCommitSignatureProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#create-commit-signature-protection>

### Example Usage

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
    res, err := s.Repos.ReposCreateCommitSignatureProtection(ctx, operations.ReposCreateCommitSignatureProtectionRequest{
        Branch: "ea",
        Owner: "autem",
        Repo: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtectedBranchAdminEnforced != nil {
        // handle response
    }
}
```

## ReposCreateCommitStatus

Users with push access in a repository can create commit statuses for a given SHA.

Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.

API method documentation
<https://docs.github.com/github-ae@latest/rest/commits/statuses#create-a-commit-status>

### Example Usage

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
    res, err := s.Repos.ReposCreateCommitStatus(ctx, operations.ReposCreateCommitStatusRequest{
        RequestBody: operations.ReposCreateCommitStatusRequestBody{
            Context: sdk.String("rerum"),
            Description: sdk.String("laudantium"),
            State: operations.ReposCreateCommitStatusRequestBodyStateEnumFailure,
            TargetURL: sdk.String("officiis"),
        },
        Owner: "voluptatibus",
        Repo: "cum",
        Sha: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Status != nil {
        // handle response
    }
}
```

## ReposCreateDeployKey

You can create a read-only deploy key.

API method documentation
<https://docs.github.com/github-ae@latest/rest/deploy-keys#create-a-deploy-key>

### Example Usage

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
    res, err := s.Repos.ReposCreateDeployKey(ctx, operations.ReposCreateDeployKeyRequest{
        RequestBody: operations.ReposCreateDeployKeyRequestBody{
            Key: "alias",
            ReadOnly: sdk.Bool(false),
            Title: sdk.String("Mr."),
        },
        Owner: "quidem",
        Repo: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeployKey != nil {
        // handle response
    }
}
```

## ReposCreateDeployment

Deployments offer a few configurable parameters with certain defaults.

The `ref` parameter can be any named branch, tag, or SHA. At GitHub AE we often deploy branches and verify them
before we merge a pull request.

The `environment` parameter allows deployments to be issued to different runtime environments. Teams often have
multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter
makes it easier to track which environments have requested deployments. The default environment is `production`.

The `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If
the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds,
the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will
return a failure response.

By default, [commit statuses](https://docs.github.com/github-ae@latest/rest/commits/statuses) for every submitted context must be in a `success`
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
<https://docs.github.com/github-ae@latest/rest/deployments/deployments#create-a-deployment>

### Example Usage

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
    res, err := s.Repos.ReposCreateDeployment(ctx, operations.ReposCreateDeploymentRequest{
        RequestBody: operations.ReposCreateDeploymentRequestBody{
            AutoMerge: sdk.Bool(false),
            Description: sdk.String("repudiandae"),
            Environment: sdk.String("accusantium"),
            Payload: &operations.ReposCreateDeploymentRequestBodyPayload{},
            ProductionEnvironment: sdk.Bool(false),
            Ref: "expedita",
            RequiredContexts: []string{
                "eos",
                "quibusdam",
                "odio",
                "praesentium",
            },
            Task: sdk.String("odit"),
            TransientEnvironment: sdk.Bool(false),
        },
        Owner: "explicabo",
        Repo: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deployment != nil {
        // handle response
    }
}
```

## ReposCreateDeploymentBranchPolicy

Creates a deployment branch policy for an environment.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.

API method documentation
<https://docs.github.com/github-ae@latest/rest/deployments/branch-policies#create-deployment-branch-policy>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Repos.ReposCreateDeploymentBranchPolicy(ctx, operations.ReposCreateDeploymentBranchPolicyRequest{
        DeploymentBranchPolicyNamePattern: shared.DeploymentBranchPolicyNamePattern{
            Name: "release/*",
        },
        EnvironmentName: "error",
        Owner: "earum",
        Repo: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeploymentBranchPolicy != nil {
        // handle response
    }
}
```

## ReposCreateDeploymentStatus

Users with `push` access can create deployment statuses for a given deployment.

GitHub Apps require `read & write` access to "Deployments" and `read-only` access to "Repo contents" (for private repos). OAuth Apps require the `repo_deployment` scope.

API method documentation
<https://docs.github.com/github-ae@latest/rest/deployments/statuses#create-a-deployment-status>

### Example Usage

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
    res, err := s.Repos.ReposCreateDeploymentStatus(ctx, operations.ReposCreateDeploymentStatusRequest{
        RequestBody: operations.ReposCreateDeploymentStatusRequestBody{
            AutoInactive: sdk.Bool(false),
            Description: sdk.String("recusandae"),
            Environment: operations.ReposCreateDeploymentStatusRequestBodyEnvironmentEnumStaging.ToPointer(),
            EnvironmentURL: sdk.String("ut"),
            LogURL: sdk.String("quidem"),
            State: operations.ReposCreateDeploymentStatusRequestBodyStateEnumInactive,
            TargetURL: sdk.String("beatae"),
        },
        DeploymentID: 600213,
        Owner: "molestiae",
        Repo: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeploymentStatus != nil {
        // handle response
    }
}
```

## ReposCreateDispatchEvent

You can use this endpoint to trigger a webhook event called `repository_dispatch` when you want activity that happens outside of GitHub AE to trigger a GitHub Actions workflow or GitHub App webhook. You must configure your GitHub Actions workflow or GitHub App to run when the `repository_dispatch` event occurs. For an example `repository_dispatch` webhook payload, see "[RepositoryDispatchEvent](https://docs.github.com/github-ae@latest/webhooks/event-payloads/#repository_dispatch)."

The `client_payload` parameter is available for any extra information that your workflow might need. This parameter is a JSON payload that will be passed on when the webhook event is dispatched. For example, the `client_payload` can include a message that a user would like to send using a GitHub Actions workflow. Or the `client_payload` can be used as a test to debug your workflow.

This endpoint requires write access to the repository by providing either:

  - Personal access tokens with `repo` scope. For more information, see "[Creating a personal access token for the command line](https://docs.github.com/github-ae@latest/articles/creating-a-personal-access-token-for-the-command-line)" in the GitHub Help documentation.
  - GitHub Apps with both `metadata:read` and `contents:read&write` permissions.

This input example shows how you can use the `client_payload` as a test to debug your workflow.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#create-a-repository-dispatch-event>

### Example Usage

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
    res, err := s.Repos.ReposCreateDispatchEvent(ctx, operations.ReposCreateDispatchEventRequest{
        RequestBody: operations.ReposCreateDispatchEventRequestBody{
            ClientPayload: map[string]interface{}{
                "fugit": "numquam",
                "numquam": "nesciunt",
                "at": "officia",
            },
            EventType: "dignissimos",
        },
        Owner: "optio",
        Repo: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposCreateForAuthenticatedUser

Creates a new repository for the authenticated user.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/github-ae@latest/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
*   `repo` scope to create a private repository.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#create-a-repository-for-the-authenticated-user>

### Example Usage

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
    res, err := s.Repos.ReposCreateForAuthenticatedUser(ctx, operations.ReposCreateForAuthenticatedUserRequestBody{
        AllowAutoMerge: sdk.Bool(false),
        AllowMergeCommit: sdk.Bool(true),
        AllowRebaseMerge: sdk.Bool(true),
        AllowSquashMerge: sdk.Bool(true),
        AutoInit: sdk.Bool(false),
        DeleteBranchOnMerge: sdk.Bool(false),
        Description: sdk.String("corporis"),
        GitignoreTemplate: sdk.String("Haskell"),
        HasDiscussions: sdk.Bool(true),
        HasDownloads: sdk.Bool(true),
        HasIssues: sdk.Bool(true),
        HasProjects: sdk.Bool(true),
        HasWiki: sdk.Bool(true),
        Homepage: sdk.String("qui"),
        IsTemplate: sdk.Bool(true),
        LicenseTemplate: sdk.String("mit"),
        MergeCommitMessage: operations.ReposCreateForAuthenticatedUserRequestBodyMergeCommitMessageEnumBlank.ToPointer(),
        MergeCommitTitle: operations.ReposCreateForAuthenticatedUserRequestBodyMergeCommitTitleEnumMergeMessage.ToPointer(),
        Name: "Team Environment",
        Private: sdk.Bool(false),
        SquashMergeCommitMessage: operations.ReposCreateForAuthenticatedUserRequestBodySquashMergeCommitMessageEnumCommitMessages.ToPointer(),
        SquashMergeCommitTitle: operations.ReposCreateForAuthenticatedUserRequestBodySquashMergeCommitTitleEnumPrTitle.ToPointer(),
        TeamID: sdk.Int64(809594),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Repository != nil {
        // handle response
    }
}
```

## ReposCreateFork

Create a fork for the authenticated user.

**Note**: Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub AE Support](https://support.github.com/contact?tags=dotcom-rest-api).

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#create-a-fork>

### Example Usage

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
    res, err := s.Repos.ReposCreateFork(ctx, operations.ReposCreateForkRequest{
        RequestBody: &operations.ReposCreateForkRequestBody{
            Organization: sdk.String("enim"),
        },
        Owner: "neque",
        Repo: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FullRepository != nil {
        // handle response
    }
}
```

## ReposCreateInOrg

Creates a new repository in the specified organization. The authenticated user must be a member of the organization.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/github-ae@latest/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
*   `repo` scope to create a private repository

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#create-an-organization-repository>

### Example Usage

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
    res, err := s.Repos.ReposCreateInOrg(ctx, operations.ReposCreateInOrgRequest{
        RequestBody: operations.ReposCreateInOrgRequestBody{
            AllowAutoMerge: sdk.Bool(false),
            AllowMergeCommit: sdk.Bool(false),
            AllowRebaseMerge: sdk.Bool(false),
            AllowSquashMerge: sdk.Bool(false),
            AutoInit: sdk.Bool(false),
            DeleteBranchOnMerge: sdk.Bool(false),
            Description: sdk.String("minus"),
            GitignoreTemplate: sdk.String("eum"),
            HasDownloads: sdk.Bool(true),
            HasIssues: sdk.Bool(false),
            HasProjects: sdk.Bool(false),
            HasWiki: sdk.Bool(false),
            Homepage: sdk.String("modi"),
            IsTemplate: sdk.Bool(false),
            LicenseTemplate: sdk.String("corporis"),
            MergeCommitMessage: operations.ReposCreateInOrgRequestBodyMergeCommitMessageEnumPrBody.ToPointer(),
            MergeCommitTitle: operations.ReposCreateInOrgRequestBodyMergeCommitTitleEnumMergeMessage.ToPointer(),
            Name: "Randolph Bayer",
            Private: sdk.Bool(false),
            SquashMergeCommitMessage: operations.ReposCreateInOrgRequestBodySquashMergeCommitMessageEnumPrBody.ToPointer(),
            SquashMergeCommitTitle: operations.ReposCreateInOrgRequestBodySquashMergeCommitTitleEnumCommitOrPrTitle.ToPointer(),
            TeamID: sdk.Int64(577709),
            UseSquashPrTitleAsDefault: sdk.Bool(false),
            Visibility: operations.ReposCreateInOrgRequestBodyVisibilityEnumPrivate.ToPointer(),
        },
        Org: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Repository != nil {
        // handle response
    }
}
```

## ReposCreateOrUpdateEnvironment

Create or update an environment with protection rules, such as required reviewers. For more information about environment protection rules, see "[Environments](/actions/reference/environments#environment-protection-rules)."

**Note:** To create or update name patterns that branches must match in order to deploy to this environment, see "[Deployment branch policies](/rest/deployments/branch-policies)."

**Note:** To create or update secrets for an environment, see "[Secrets](/rest/reference/actions#secrets)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.

API method documentation
<https://docs.github.com/github-ae@latest/rest/deployments/environments#create-or-update-an-environment>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Repos.ReposCreateOrUpdateEnvironment(ctx, operations.ReposCreateOrUpdateEnvironmentRequest{
        RequestBody: &operations.ReposCreateOrUpdateEnvironmentRequestBody{
            DeploymentBranchPolicy: &shared.DeploymentBranchPolicySettings{
                CustomBranchPolicies: false,
                ProtectedBranches: false,
            },
            Reviewers: []ReposCreateOrUpdateEnvironmentRequestBodyReviewers{
                operations.ReposCreateOrUpdateEnvironmentRequestBodyReviewers{
                    ID: sdk.Int64(4532992),
                    Type: shared.DeploymentReviewerTypeEnumUser.ToPointer(),
                },
            },
            WaitTimer: sdk.Int64(30),
        },
        EnvironmentName: "minus",
        Owner: "fuga",
        Repo: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Environment != nil {
        // handle response
    }
}
```

## ReposCreateOrUpdateFileContents

Creates a new file or replaces an existing file in a repository. You must authenticate using an access token with the `workflow` scope to use this endpoint.

**Note:** If you use this endpoint and the "[Delete a file](https://docs.github.com/github-ae@latest/rest/reference/repos/#delete-file)" endpoint in parallel, the concurrent requests will conflict and you will receive errors. You must use these endpoints serially instead.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#create-or-update-file-contents>

### Example Usage

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
    res, err := s.Repos.ReposCreateOrUpdateFileContents(ctx, operations.ReposCreateOrUpdateFileContentsRequest{
        RequestBody: operations.ReposCreateOrUpdateFileContentsRequestBody{
            Author: &operations.ReposCreateOrUpdateFileContentsRequestBodyAuthor{
                Date: sdk.String(""2013-01-15T17:13:22+05:00""),
                Email: "Ole_Windler14@hotmail.com",
                Name: "Ervin Hettinger IV",
            },
            Branch: sdk.String("minima"),
            Committer: &operations.ReposCreateOrUpdateFileContentsRequestBodyCommitter{
                Date: sdk.String(""2013-01-05T13:13:22+05:00""),
                Email: "Jerry62@yahoo.com",
                Name: "Jo Kling",
            },
            Content: "similique",
            Message: "optio",
            Sha: sdk.String("ex"),
        },
        Owner: "quaerat",
        Path: "commodi",
        Repo: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileCommit != nil {
        // handle response
    }
}
```

## ReposCreatePagesSite

Configures a GitHub AE Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages)."

To use this endpoint, you must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission. A token with the `repo` scope or Pages write permission is required. GitHub Apps must have the `administration:write` and `pages:write` permissions.

API method documentation
<https://docs.github.com/github-ae@latest/rest/pages#create-a-github-pages-site>

### Example Usage

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
    res, err := s.Repos.ReposCreatePagesSite(ctx, operations.ReposCreatePagesSiteRequest{
        RequestBody: operations.ReposCreatePagesSiteRequestBody2{
            BuildType: operations.ReposCreatePagesSiteRequestBody2BuildTypeEnumWorkflow,
            Source: &operations.ReposCreatePagesSiteRequestBody2Source{
                Branch: "exercitationem",
                Path: operations.ReposCreatePagesSiteRequestBody2SourcePathEnumRoot.ToPointer(),
            },
        },
        Owner: "dolorem",
        Repo: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Page != nil {
        // handle response
    }
}
```

## ReposCreateRelease

Users with push access to the repository can create a release.

This endpoint triggers [notifications](https://docs.github.com/github-ae@latest/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/github-ae@latest/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/github-ae@latest/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/github-ae@latest/rest/releases/releases#create-a-release>

### Example Usage

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
    res, err := s.Repos.ReposCreateRelease(ctx, operations.ReposCreateReleaseRequest{
        RequestBody: operations.ReposCreateReleaseRequestBody{
            Body: sdk.String("ipsa"),
            Draft: sdk.Bool(false),
            Name: sdk.String("Ignacio Dietrich"),
            Prerelease: sdk.Bool(false),
            TagName: "dicta",
            TargetCommitish: sdk.String("earum"),
        },
        Owner: "veniam",
        Repo: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Release != nil {
        // handle response
    }
}
```

## ReposCreateUsingTemplate

Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. If the repository is not public, the authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://docs.github.com/github-ae@latest/rest/reference/repos#get-a-repository) endpoint and check that the `is_template` key is `true`.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/github-ae@latest/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
*   `repo` scope to create a private repository

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#create-a-repository-using-a-template>

### Example Usage

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
    res, err := s.Repos.ReposCreateUsingTemplate(ctx, operations.ReposCreateUsingTemplateRequest{
        RequestBody: operations.ReposCreateUsingTemplateRequestBody{
            Description: sdk.String("dolores"),
            IncludeAllBranches: sdk.Bool(false),
            Name: "Gerald Cruickshank",
            Owner: sdk.String("ipsa"),
            Private: sdk.Bool(false),
        },
        TemplateOwner: "ducimus",
        TemplateRepo: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Repository != nil {
        // handle response
    }
}
```

## ReposCreateWebhook

Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can
share the same `config` as long as those webhooks do not have any `events` that overlap.

API method documentation
<https://docs.github.com/github-ae@latest/rest/webhooks/repos#create-a-repository-webhook>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Repos.ReposCreateWebhook(ctx, operations.ReposCreateWebhookRequest{
        RequestBody: &operations.ReposCreateWebhookRequestBody{
            Active: sdk.Bool(false),
            Config: &operations.ReposCreateWebhookRequestBodyConfig{
                ContentType: sdk.String(""json""),
                Digest: sdk.String(""sha256""),
                InsecureSsl: &shared.WebhookConfigInsecureSsl{},
                Secret: sdk.String(""********""),
                Token: sdk.String(""abc""),
                URL: sdk.String("https://example.com/webhook"),
            },
            Events: []string{
                "quasi",
            },
            Name: sdk.String("Freda Renner"),
        },
        Owner: "nemo",
        Repo: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Hook != nil {
        // handle response
    }
}
```

## ReposDeclineInvitationForAuthenticatedUser

Decline a repository invitation

API method documentation
<https://docs.github.com/github-ae@latest/rest/collaborators/invitations#decline-a-repository-invitation>

### Example Usage

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
    res, err := s.Repos.ReposDeclineInvitationForAuthenticatedUser(ctx, operations.ReposDeclineInvitationForAuthenticatedUserRequest{
        InvitationID: 342342,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDelete

Deleting a repository requires admin access. If OAuth is used, the `delete_repo` scope is required.

If an organization owner has configured the organization to prevent members from deleting organization-owned
repositories, you will get a `403 Forbidden` response.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#delete-a-repository>

### Example Usage

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
    res, err := s.Repos.ReposDelete(ctx, operations.ReposDeleteRequest{
        Owner: "doloribus",
        Repo: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Disables the ability to restrict who can push to this branch.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#delete-access-restrictions>

### Example Usage

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
    res, err := s.Repos.ReposDeleteAccessRestrictions(ctx, operations.ReposDeleteAccessRestrictionsRequest{
        Branch: "sint",
        Owner: "enim",
        Repo: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteAdminBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#delete-admin-branch-protection>

### Example Usage

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
    res, err := s.Repos.ReposDeleteAdminBranchProtection(ctx, operations.ReposDeleteAdminBranchProtectionRequest{
        Branch: "animi",
        Owner: "quas",
        Repo: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteAnEnvironment

You must authenticate using an access token with the repo scope to use this endpoint.

API method documentation
<https://docs.github.com/github-ae@latest/rest/deployments/environments#delete-an-environment>

### Example Usage

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
    res, err := s.Repos.ReposDeleteAnEnvironment(ctx, operations.ReposDeleteAnEnvironmentRequest{
        EnvironmentName: "molestias",
        Owner: "odio",
        Repo: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteAutolink

This deletes a single autolink reference by ID that was configured for the given repository.

Information about autolinks are only available to repository administrators.

API method documentation
<https://docs.github.com/github-ae@latest/rest/repos/autolinks#delete-an-autolink-reference-from-a-repository>

### Example Usage

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
    res, err := s.Repos.ReposDeleteAutolink(ctx, operations.ReposDeleteAutolinkRequest{
        AutolinkID: 901163,
        Owner: "architecto",
        Repo: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#delete-branch-protection>

### Example Usage

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
    res, err := s.Repos.ReposDeleteBranchProtection(ctx, operations.ReposDeleteBranchProtectionRequest{
        Branch: "iste",
        Owner: "assumenda",
        Repo: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteCommitComment

Delete a commit comment

API method documentation
<https://docs.github.com/github-ae@latest/rest/commits/comments#delete-a-commit-comment>

### Example Usage

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
    res, err := s.Repos.ReposDeleteCommitComment(ctx, operations.ReposDeleteCommitCommentRequest{
        CommentID: 725574,
        Owner: "velit",
        Repo: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteCommitSignatureProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#delete-commit-signature-protection>

### Example Usage

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
    res, err := s.Repos.ReposDeleteCommitSignatureProtection(ctx, operations.ReposDeleteCommitSignatureProtectionRequest{
        Branch: "delectus",
        Owner: "impedit",
        Repo: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteDeployKey

Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.

API method documentation
<https://docs.github.com/github-ae@latest/rest/deploy-keys#delete-a-deploy-key>

### Example Usage

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
    res, err := s.Repos.ReposDeleteDeployKey(ctx, operations.ReposDeleteDeployKeyRequest{
        KeyID: 216870,
        Owner: "adipisci",
        Repo: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteDeployment

If the repository only has one deployment, you can delete the deployment regardless of its status. If the repository has more than one deployment, you can only delete inactive deployments. This ensures that repositories with multiple deployments will always have an active deployment. Anyone with `repo` or `repo_deployment` scopes can delete a deployment.

To set a deployment as inactive, you must:

*   Create a new deployment that is active so that the system has a record of the current state, then delete the previously active deployment.
*   Mark the active deployment as inactive by adding any non-successful deployment status.

For more information, see "[Create a deployment](https://docs.github.com/github-ae@latest/rest/deployments/deployments/#create-a-deployment)" and "[Create a deployment status](https://docs.github.com/github-ae@latest/rest/deployments/deployment-statuses#create-a-deployment-status)."

API method documentation
<https://docs.github.com/github-ae@latest/rest/deployments/deployments#delete-a-deployment>

### Example Usage

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
    res, err := s.Repos.ReposDeleteDeployment(ctx, operations.ReposDeleteDeploymentRequest{
        DeploymentID: 644420,
        Owner: "doloremque",
        Repo: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteDeploymentBranchPolicy

Deletes a deployment branch policy for an environment.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.

API method documentation
<https://docs.github.com/github-ae@latest/rest/deployments/branch-policies#delete-deployment-branch-policy>

### Example Usage

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
    res, err := s.Repos.ReposDeleteDeploymentBranchPolicy(ctx, operations.ReposDeleteDeploymentBranchPolicyRequest{
        BranchPolicyID: 333072,
        EnvironmentName: "libero",
        Owner: "architecto",
        Repo: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteFile

Deletes a file in a repository.

You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author.

The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.

You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.

**Note:** If you use this endpoint and the "[Create or update file contents](https://docs.github.com/github-ae@latest/rest/reference/repos/#create-or-update-file-contents)" endpoint in parallel, the concurrent requests will conflict and you will receive errors. You must use these endpoints serially instead.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#delete-a-file>

### Example Usage

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
    res, err := s.Repos.ReposDeleteFile(ctx, operations.ReposDeleteFileRequest{
        RequestBody: operations.ReposDeleteFileRequestBody{
            Author: &operations.ReposDeleteFileRequestBodyAuthor{
                Email: sdk.String("Nikita29@yahoo.com"),
                Name: sdk.String("Jeremy Zemlak"),
            },
            Branch: sdk.String("facere"),
            Committer: &operations.ReposDeleteFileRequestBodyCommitter{
                Email: sdk.String("Brooke34@yahoo.com"),
                Name: sdk.String("Thelma Purdy"),
            },
            Message: "voluptatibus",
            Sha: "quaerat",
        },
        Owner: "blanditiis",
        Path: "distinctio",
        Repo: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileCommit != nil {
        // handle response
    }
}
```

## ReposDeleteInvitation

Delete a repository invitation

API method documentation
<https://docs.github.com/github-ae@latest/rest/collaborators/invitations#delete-a-repository-invitation>

### Example Usage

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
    res, err := s.Repos.ReposDeleteInvitation(ctx, operations.ReposDeleteInvitationRequest{
        InvitationID: 335977,
        Owner: "nisi",
        Repo: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeletePagesSite

Deletes a GitHub AE Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages).

To use this endpoint, you must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission. A token with the `repo` scope or Pages write permission is required. GitHub Apps must have the `administration:write` and `pages:write` permissions.

API method documentation
<https://docs.github.com/github-ae@latest/rest/pages#delete-a-github-pages-site>

### Example Usage

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
    res, err := s.Repos.ReposDeletePagesSite(ctx, operations.ReposDeletePagesSiteRequest{
        Owner: "minus",
        Repo: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeletePullRequestReviewProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#delete-pull-request-review-protection>

### Example Usage

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
    res, err := s.Repos.ReposDeletePullRequestReviewProtection(ctx, operations.ReposDeletePullRequestReviewProtectionRequest{
        Branch: "facilis",
        Owner: "ipsum",
        Repo: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteRelease

Users with push access to the repository can delete a release.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#delete-a-release>

### Example Usage

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
    res, err := s.Repos.ReposDeleteRelease(ctx, operations.ReposDeleteReleaseRequest{
        Owner: "voluptatibus",
        ReleaseID: 974589,
        Repo: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteReleaseAsset

Delete a release asset

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#delete-a-release-asset>

### Example Usage

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
    res, err := s.Repos.ReposDeleteReleaseAsset(ctx, operations.ReposDeleteReleaseAssetRequest{
        AssetID: 891581,
        Owner: "labore",
        Repo: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteWebhook

Delete a repository webhook

API method documentation
<https://docs.github.com/github-ae@latest/rest/webhooks/repos#delete-a-repository-webhook>

### Example Usage

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
    res, err := s.Repos.ReposDeleteWebhook(ctx, operations.ReposDeleteWebhookRequest{
        HookID: 179795,
        Owner: "reprehenderit",
        Repo: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDisableLfsForRepo

Disables Git LFS for a repository. Access tokens must have the `admin:enterprise` scope.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#disable-git-lfs-for-a-repository>

### Example Usage

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
    res, err := s.Repos.ReposDisableLfsForRepo(ctx, operations.ReposDisableLfsForRepoRequest{
        Owner: "neque",
        Repo: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDownloadTarballArchive

Gets a redirect URL to download a tar archive for a repository. If you omit `:ref`, the repository’s default branch (usually
`main`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
the `Location` header to make a second `GET` request.
**Note**: For private repositories, these links are temporary and expire after five minutes.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#download-a-repository-archive>

### Example Usage

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
    res, err := s.Repos.ReposDownloadTarballArchive(ctx, operations.ReposDownloadTarballArchiveRequest{
        Owner: "est",
        Ref: "rem",
        Repo: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDownloadZipballArchive

Gets a redirect URL to download a zip archive for a repository. If you omit `:ref`, the repository’s default branch (usually
`main`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
the `Location` header to make a second `GET` request.

**Note**: For private repositories, these links are temporary and expire after five minutes. If the repository is empty, you will receive a 404 when you follow the redirect.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#download-a-repository-archive>

### Example Usage

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
    res, err := s.Repos.ReposDownloadZipballArchive(ctx, operations.ReposDownloadZipballArchiveRequest{
        Owner: "fugiat",
        Ref: "unde",
        Repo: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposEnableLfsForRepo

Enables Git LFS for a repository. Access tokens must have the `admin:enterprise` scope.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#enable-git-lfs-for-a-repository>

### Example Usage

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
    res, err := s.Repos.ReposEnableLfsForRepo(ctx, operations.ReposEnableLfsForRepoRequest{
        Owner: "ducimus",
        Repo: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReposEnableLfsForRepo202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReposGet

The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network.

**Note:** In order to see the `security_and_analysis` block for a repository you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/github-ae@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#get-a-repository>

### Example Usage

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
    res, err := s.Repos.ReposGet(ctx, operations.ReposGetRequest{
        Owner: "dicta",
        Repo: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FullRepository != nil {
        // handle response
    }
}
```

## ReposGetAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists who has access to this protected branch.

**Note**: Users, apps, and teams `restrictions` are only available for organization-owned repositories.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#get-access-restrictions>

### Example Usage

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
    res, err := s.Repos.ReposGetAccessRestrictions(ctx, operations.ReposGetAccessRestrictionsRequest{
        Branch: "porro",
        Owner: "vitae",
        Repo: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchRestrictionPolicy != nil {
        // handle response
    }
}
```

## ReposGetAdminBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#get-admin-branch-protection>

### Example Usage

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
    res, err := s.Repos.ReposGetAdminBranchProtection(ctx, operations.ReposGetAdminBranchProtectionRequest{
        Branch: "esse",
        Owner: "fugiat",
        Repo: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtectedBranchAdminEnforced != nil {
        // handle response
    }
}
```

## ReposGetAllEnvironments

Lists the environments for a repository.

Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/github-ae@latest/rest/deployments/environments#list-environments>

### Example Usage

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
    res, err := s.Repos.ReposGetAllEnvironments(ctx, operations.ReposGetAllEnvironmentsRequest{
        Owner: "aspernatur",
        Page: sdk.Int64(316501),
        PerPage: sdk.Int64(965090),
        Repo: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReposGetAllEnvironments200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReposGetAllStatusCheckContexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#get-all-status-check-contexts>

### Example Usage

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
    res, err := s.Repos.ReposGetAllStatusCheckContexts(ctx, operations.ReposGetAllStatusCheckContextsRequest{
        Branch: "dignissimos",
        Owner: "libero",
        Repo: "illo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReposGetAllStatusCheckContexts200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ReposGetAllTopics

Get all repository topics

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#get-all-repository-topics>

### Example Usage

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
    res, err := s.Repos.ReposGetAllTopics(ctx, operations.ReposGetAllTopicsRequest{
        Owner: "ab",
        Page: sdk.Int64(280114),
        PerPage: sdk.Int64(879174),
        Repo: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Topic != nil {
        // handle response
    }
}
```

## ReposGetAppsWithAccessToProtectedBranch

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the GitHub Apps that have push access to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#list-apps-with-access-to-the-protected-branch>

### Example Usage

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
    res, err := s.Repos.ReposGetAppsWithAccessToProtectedBranch(ctx, operations.ReposGetAppsWithAccessToProtectedBranchRequest{
        Branch: "tempore",
        Owner: "veniam",
        Repo: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Integrations != nil {
        // handle response
    }
}
```

## ReposGetAutolink

This returns a single autolink reference by ID that was configured for the given repository.

Information about autolinks are only available to repository administrators.

API method documentation
<https://docs.github.com/github-ae@latest/rest/repos/autolinks#get-an-autolink-reference-of-a-repository>

### Example Usage

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
    res, err := s.Repos.ReposGetAutolink(ctx, operations.ReposGetAutolinkRequest{
        AutolinkID: 970079,
        Owner: "earum",
        Repo: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Autolink != nil {
        // handle response
    }
}
```

## ReposGetBranch

Get a branch

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branches#get-a-branch>

### Example Usage

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
    res, err := s.Repos.ReposGetBranch(ctx, operations.ReposGetBranchRequest{
        Branch: "praesentium",
        Owner: "nemo",
        Repo: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchWithProtection != nil {
        // handle response
    }
}
```

## ReposGetBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#get-branch-protection>

### Example Usage

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
    res, err := s.Repos.ReposGetBranchProtection(ctx, operations.ReposGetBranchProtectionRequest{
        Branch: "quisquam",
        Owner: "sequi",
        Repo: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchProtection != nil {
        // handle response
    }
}
```

## ReposGetCodeFrequencyStats

Returns a weekly aggregate of the number of additions and deletions pushed to a repository.

API method documentation
<https://docs.github.com/github-ae@latest/rest/metrics/statistics#get-the-weekly-commit-activity>

### Example Usage

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
    res, err := s.Repos.ReposGetCodeFrequencyStats(ctx, operations.ReposGetCodeFrequencyStatsRequest{
        Owner: "deleniti",
        Repo: "illo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeFrequencyStats != nil {
        // handle response
    }
}
```

## ReposGetCollaboratorPermissionLevel

Checks the repository permission of a collaborator. The possible repository permissions are `admin`, `write`, `read`, and `none`.

API method documentation
<https://docs.github.com/github-ae@latest/rest/collaborators/collaborators#get-repository-permissions-for-a-user>

### Example Usage

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
    res, err := s.Repos.ReposGetCollaboratorPermissionLevel(ctx, operations.ReposGetCollaboratorPermissionLevelRequest{
        Owner: "labore",
        Repo: "assumenda",
        Username: "Elliott_Schamberger",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryCollaboratorPermission != nil {
        // handle response
    }
}
```

## ReposGetCombinedStatusForRef

Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.


Additionally, a combined `state` is returned. The `state` is one of:

*   **failure** if any of the contexts report as `error` or `failure`
*   **pending** if there are no statuses or a context is `pending`
*   **success** if the latest status for all contexts is `success`

API method documentation
<https://docs.github.com/github-ae@latest/rest/commits/statuses#get-the-combined-status-for-a-specific-reference>

### Example Usage

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
    res, err := s.Repos.ReposGetCombinedStatusForRef(ctx, operations.ReposGetCombinedStatusForRefRequest{
        Owner: "repudiandae",
        Page: sdk.Int64(9683),
        PerPage: sdk.Int64(805264),
        Ref: "aspernatur",
        Repo: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CombinedCommitStatus != nil {
        // handle response
    }
}
```

## ReposGetCommit

Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.

**Note:** If there are more than 300 files in the commit diff, the response will include pagination link headers for the remaining files, up to a limit of 3000 files. Each page contains the static commit information, and the only changes are to the file listing.

You can pass the appropriate [media type](https://docs.github.com/github-ae@latest/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to  fetch `diff` and `patch` formats. Diffs with binary data will have no `patch` property.

To return only the SHA-1 hash of the commit reference, you can provide the `sha` custom [media type](https://docs.github.com/github-ae@latest/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) in the `Accept` header. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.

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
<https://docs.github.com/github-ae@latest/rest/commits/commits#get-a-commit>

### Example Usage

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
    res, err := s.Repos.ReposGetCommit(ctx, operations.ReposGetCommitRequest{
        Owner: "expedita",
        Page: sdk.Int64(559174),
        PerPage: sdk.Int64(590858),
        Ref: "repudiandae",
        Repo: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Commit != nil {
        // handle response
    }
}
```

## ReposGetCommitActivityStats

Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.

API method documentation
<https://docs.github.com/github-ae@latest/rest/metrics/statistics#get-the-last-year-of-commit-activity>

### Example Usage

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
    res, err := s.Repos.ReposGetCommitActivityStats(ctx, operations.ReposGetCommitActivityStatsRequest{
        Owner: "dignissimos",
        Repo: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommitActivities != nil {
        // handle response
    }
}
```

## ReposGetCommitComment

Get a commit comment

API method documentation
<https://docs.github.com/github-ae@latest/rest/commits/comments#get-a-commit-comment>

### Example Usage

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
    res, err := s.Repos.ReposGetCommitComment(ctx, operations.ReposGetCommitCommentRequest{
        CommentID: 873833,
        Owner: "similique",
        Repo: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommitComment != nil {
        // handle response
    }
}
```

## ReposGetCommitSignatureProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://docs.github.com/github-ae@latest/articles/signing-commits-with-gpg) in GitHub Help.

**Note**: You must enable branch protection to require signed commits.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#get-commit-signature-protection>

### Example Usage

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
    res, err := s.Repos.ReposGetCommitSignatureProtection(ctx, operations.ReposGetCommitSignatureProtectionRequest{
        Branch: "iure",
        Owner: "dolorem",
        Repo: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtectedBranchAdminEnforced != nil {
        // handle response
    }
}
```

## ReposGetContent

Gets the contents of a file or directory in a repository. Specify the file path or directory in `:path`. If you omit
`:path`, you will receive the contents of the repository's root directory. See the description below regarding what the API response includes for directories. 

Files and symlinks support [a custom media type](https://docs.github.com/github-ae@latest/rest/reference/repos#custom-media-types) for
retrieving the raw content or rendered HTML (when supported). All content types support [a custom media
type](https://docs.github.com/github-ae@latest/rest/reference/repos#custom-media-types) to ensure the content is returned in a consistent
object format.

**Notes**:
*   To get a repository's contents recursively, you can [recursively get the tree](https://docs.github.com/github-ae@latest/rest/reference/git#trees).
*   This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees
API](https://docs.github.com/github-ae@latest/rest/reference/git#get-a-tree).
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
<https://docs.github.com/github-ae@latest/rest/reference/repos#get-repository-content>

### Example Usage

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
    res, err := s.Repos.ReposGetContent(ctx, operations.ReposGetContentRequest{
        Owner: "impedit",
        Path: "commodi",
        Ref: sdk.String("aut"),
        Repo: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReposGetContent200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## ReposGetContributorsStats


Returns the `total` number of commits authored by the contributor. In addition, the response includes a Weekly Hash (`weeks` array) with the following information:

*   `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
*   `a` - Number of additions
*   `d` - Number of deletions
*   `c` - Number of commits

API method documentation
<https://docs.github.com/github-ae@latest/rest/metrics/statistics#get-all-contributor-commit-activity>

### Example Usage

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
    res, err := s.Repos.ReposGetContributorsStats(ctx, operations.ReposGetContributorsStatsRequest{
        Owner: "ad",
        Repo: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContributorActivities != nil {
        // handle response
    }
}
```

## ReposGetDeployKey

Get a deploy key

API method documentation
<https://docs.github.com/github-ae@latest/rest/deploy-keys#get-a-deploy-key>

### Example Usage

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
    res, err := s.Repos.ReposGetDeployKey(ctx, operations.ReposGetDeployKeyRequest{
        KeyID: 229567,
        Owner: "illum",
        Repo: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeployKey != nil {
        // handle response
    }
}
```

## ReposGetDeployment

Get a deployment

API method documentation
<https://docs.github.com/github-ae@latest/rest/deployments/deployments#get-a-deployment>

### Example Usage

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
    res, err := s.Repos.ReposGetDeployment(ctx, operations.ReposGetDeploymentRequest{
        DeploymentID: 695526,
        Owner: "cum",
        Repo: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deployment != nil {
        // handle response
    }
}
```

## ReposGetDeploymentBranchPolicy

Gets a deployment branch policy for an environment.

Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/github-ae@latest/rest/deployments/branch-policies#get-deployment-branch-policy>

### Example Usage

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
    res, err := s.Repos.ReposGetDeploymentBranchPolicy(ctx, operations.ReposGetDeploymentBranchPolicyRequest{
        BranchPolicyID: 97676,
        EnvironmentName: "dicta",
        Owner: "laudantium",
        Repo: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeploymentBranchPolicy != nil {
        // handle response
    }
}
```

## ReposGetDeploymentStatus

Users with pull access can view a deployment status for a deployment:

API method documentation
<https://docs.github.com/github-ae@latest/rest/deployments/statuses#get-a-deployment-status>

### Example Usage

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
    res, err := s.Repos.ReposGetDeploymentStatus(ctx, operations.ReposGetDeploymentStatusRequest{
        DeploymentID: 938412,
        Owner: "iusto",
        Repo: "amet",
        StatusID: 587967,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeploymentStatus != nil {
        // handle response
    }
}
```

## ReposGetEnvironment

**Note:** To get information about name patterns that branches must match in order to deploy to this environment, see "[Get a deployment branch policy](/rest/deployments/branch-policies#get-a-deployment-branch-policy)."

Anyone with read access to the repository can use this endpoint. If the
repository is private, you must use an access token with the `repo` scope. GitHub
Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/github-ae@latest/rest/deployments/environments#get-an-environment>

### Example Usage

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
    res, err := s.Repos.ReposGetEnvironment(ctx, operations.ReposGetEnvironmentRequest{
        EnvironmentName: "dolorum",
        Owner: "necessitatibus",
        Repo: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Environment != nil {
        // handle response
    }
}
```

## ReposGetLatestPagesBuild

Get latest Pages build

API method documentation
<https://docs.github.com/github-ae@latest/rest/pages#get-latest-pages-build>

### Example Usage

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
    res, err := s.Repos.ReposGetLatestPagesBuild(ctx, operations.ReposGetLatestPagesBuildRequest{
        Owner: "repudiandae",
        Repo: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PageBuild != nil {
        // handle response
    }
}
```

## ReposGetLatestRelease

View the latest published full release for the repository.

The latest release is the most recent non-prerelease, non-draft release, sorted by the `created_at` attribute. The `created_at` attribute is the date of the commit used for the release, and not the date when the release was drafted or published.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#get-the-latest-release>

### Example Usage

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
    res, err := s.Repos.ReposGetLatestRelease(ctx, operations.ReposGetLatestReleaseRequest{
        Owner: "nemo",
        Repo: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Release != nil {
        // handle response
    }
}
```

## ReposGetPages

Get a GitHub AE Pages site

API method documentation
<https://docs.github.com/github-ae@latest/rest/pages#get-a-github-pages-site>

### Example Usage

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
    res, err := s.Repos.ReposGetPages(ctx, operations.ReposGetPagesRequest{
        Owner: "itaque",
        Repo: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Page != nil {
        // handle response
    }
}
```

## ReposGetPagesBuild

Get GitHub AE Pages build

API method documentation
<https://docs.github.com/github-ae@latest/rest/pages#get-github-pages-build>

### Example Usage

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
    res, err := s.Repos.ReposGetPagesBuild(ctx, operations.ReposGetPagesBuildRequest{
        BuildID: 545779,
        Owner: "aperiam",
        Repo: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PageBuild != nil {
        // handle response
    }
}
```

## ReposGetParticipationStats

Returns the total commit counts for the `owner` and total commit counts in `all`. `all` is everyone combined, including the `owner` in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract `owner` from `all`.

The array order is oldest week (index 0) to most recent week.

API method documentation
<https://docs.github.com/github-ae@latest/rest/metrics/statistics#get-the-weekly-commit-count>

### Example Usage

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
    res, err := s.Repos.ReposGetParticipationStats(ctx, operations.ReposGetParticipationStatsRequest{
        Owner: "accusamus",
        Repo: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ParticipationStats != nil {
        // handle response
    }
}
```

## ReposGetPullRequestReviewProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#get-pull-request-review-protection>

### Example Usage

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
    res, err := s.Repos.ReposGetPullRequestReviewProtection(ctx, operations.ReposGetPullRequestReviewProtectionRequest{
        Branch: "totam",
        Owner: "dicta",
        Repo: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtectedBranchPullRequestReview != nil {
        // handle response
    }
}
```

## ReposGetPunchCardStats

Each array contains the day number, hour number, and number of commits:

*   `0-6`: Sunday - Saturday
*   `0-23`: Hour of day
*   Number of commits

For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.

API method documentation
<https://docs.github.com/github-ae@latest/rest/metrics/statistics#get-the-hourly-commit-count-for-each-day>

### Example Usage

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
    res, err := s.Repos.ReposGetPunchCardStats(ctx, operations.ReposGetPunchCardStatsRequest{
        Owner: "velit",
        Repo: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeFrequencyStats != nil {
        // handle response
    }
}
```

## ReposGetReadme

Gets the preferred README for a repository.

READMEs support [custom media types](https://docs.github.com/github-ae@latest/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#get-a-repository-readme>

### Example Usage

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
    res, err := s.Repos.ReposGetReadme(ctx, operations.ReposGetReadmeRequest{
        Owner: "sunt",
        Ref: sdk.String("a"),
        Repo: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContentFile != nil {
        // handle response
    }
}
```

## ReposGetReadmeInDirectory

Gets the README from a repository directory.

READMEs support [custom media types](https://docs.github.com/github-ae@latest/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#get-a-repository-directory-readme>

### Example Usage

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
    res, err := s.Repos.ReposGetReadmeInDirectory(ctx, operations.ReposGetReadmeInDirectoryRequest{
        Dir: "occaecati",
        Owner: "atque",
        Ref: sdk.String("beatae"),
        Repo: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContentFile != nil {
        // handle response
    }
}
```

## ReposGetRelease

**Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://docs.github.com/github-ae@latest/rest/overview/resources-in-the-rest-api#hypermedia).

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#get-a-release>

### Example Usage

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
    res, err := s.Repos.ReposGetRelease(ctx, operations.ReposGetReleaseRequest{
        Owner: "labore",
        ReleaseID: 794988,
        Repo: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Release != nil {
        // handle response
    }
}
```

## ReposGetReleaseAsset

To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://docs.github.com/github-ae@latest/rest/overview/media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#get-a-release-asset>

### Example Usage

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
    res, err := s.Repos.ReposGetReleaseAsset(ctx, operations.ReposGetReleaseAssetRequest{
        AssetID: 32356,
        Owner: "perferendis",
        Repo: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleaseAsset != nil {
        // handle response
    }
}
```

## ReposGetReleaseByTag

Get a published release with the specified tag.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#get-a-release-by-tag-name>

### Example Usage

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
    res, err := s.Repos.ReposGetReleaseByTag(ctx, operations.ReposGetReleaseByTagRequest{
        Owner: "ea",
        Repo: "aperiam",
        Tag: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Release != nil {
        // handle response
    }
}
```

## ReposGetStatusChecksProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#get-status-checks-protection>

### Example Usage

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
    res, err := s.Repos.ReposGetStatusChecksProtection(ctx, operations.ReposGetStatusChecksProtectionRequest{
        Branch: "repellat",
        Owner: "velit",
        Repo: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCheckPolicy != nil {
        // handle response
    }
}
```

## ReposGetTeamsWithAccessToProtectedBranch

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the teams who have push access to this branch. The list includes child teams.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#list-teams-with-access-to-the-protected-branch>

### Example Usage

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
    res, err := s.Repos.ReposGetTeamsWithAccessToProtectedBranch(ctx, operations.ReposGetTeamsWithAccessToProtectedBranchRequest{
        Branch: "provident",
        Owner: "consectetur",
        Repo: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## ReposGetUsersWithAccessToProtectedBranch

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the people who have push access to this branch.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#list-users-with-access-to-the-protected-branch>

### Example Usage

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
    res, err := s.Repos.ReposGetUsersWithAccessToProtectedBranch(ctx, operations.ReposGetUsersWithAccessToProtectedBranchRequest{
        Branch: "dignissimos",
        Owner: "consectetur",
        Repo: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## ReposGetWebhook

Returns a webhook configured in a repository. To get only the webhook `config` properties, see "[Get a webhook configuration for a repository](/rest/reference/repos#get-a-webhook-configuration-for-a-repository)."

API method documentation
<https://docs.github.com/github-ae@latest/rest/webhooks/repos#get-a-repository-webhook>

### Example Usage

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
    res, err := s.Repos.ReposGetWebhook(ctx, operations.ReposGetWebhookRequest{
        HookID: 620500,
        Owner: "temporibus",
        Repo: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Hook != nil {
        // handle response
    }
}
```

## ReposGetWebhookConfigForRepo

Returns the webhook configuration for a repository. To get more information about the webhook, including the `active` state and `events`, use "[Get a repository webhook](/rest/reference/orgs#get-a-repository-webhook)."

Access tokens must have the `read:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:read` permission.

API method documentation
<https://docs.github.com/github-ae@latest/rest/webhooks/repo-config#get-a-webhook-configuration-for-a-repository>

### Example Usage

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
    res, err := s.Repos.ReposGetWebhookConfigForRepo(ctx, operations.ReposGetWebhookConfigForRepoRequest{
        HookID: 228857,
        Owner: "tenetur",
        Repo: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookConfig != nil {
        // handle response
    }
}
```

## ReposGetWebhookDelivery

Returns a delivery for a webhook configured in a repository.

API method documentation
<https://docs.github.com/github-ae@latest/rest/webhooks/repo-deliveries#get-a-delivery-for-a-repository-webhook>

### Example Usage

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
    res, err := s.Repos.ReposGetWebhookDelivery(ctx, operations.ReposGetWebhookDeliveryRequest{
        DeliveryID: 778276,
        HookID: 931077,
        Owner: "illum",
        Repo: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HookDelivery != nil {
        // handle response
    }
}
```

## ReposListAutolinks

This returns a list of autolinks configured for the given repository.

Information about autolinks are only available to repository administrators.

API method documentation
<https://docs.github.com/github-ae@latest/rest/repos/autolinks#list-all-autolinks-of-a-repository>

### Example Usage

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
    res, err := s.Repos.ReposListAutolinks(ctx, operations.ReposListAutolinksRequest{
        Owner: "dignissimos",
        Page: sdk.Int64(876285),
        Repo: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Autolinks != nil {
        // handle response
    }
}
```

## ReposListBranches

List branches

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branches#list-branches>

### Example Usage

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
    res, err := s.Repos.ReposListBranches(ctx, operations.ReposListBranchesRequest{
        Owner: "consectetur",
        Page: sdk.Int64(995816),
        PerPage: sdk.Int64(128696),
        Protected: sdk.Bool(false),
        Repo: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShortBranches != nil {
        // handle response
    }
}
```

## ReposListBranchesForHeadCommit

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.

API method documentation
<https://docs.github.com/github-ae@latest/rest/commits/commits#list-branches-for-head-commit>

### Example Usage

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
    res, err := s.Repos.ReposListBranchesForHeadCommit(ctx, operations.ReposListBranchesForHeadCommitRequest{
        CommitSha: "exercitationem",
        Owner: "nihil",
        Repo: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchShorts != nil {
        // handle response
    }
}
```

## ReposListCollaborators

For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
Organization members with write, maintain, or admin privileges on the organization-owned repository can use this endpoint.

Team members will include the members of child teams.

You must authenticate using an access token with the `read:org` and `repo` scopes with push access to use this
endpoint. GitHub Apps must have the `members` organization permission and `metadata` repository permission to use this
endpoint.

API method documentation
<https://docs.github.com/github-ae@latest/rest/collaborators/collaborators#list-repository-collaborators>

### Example Usage

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
    res, err := s.Repos.ReposListCollaborators(ctx, operations.ReposListCollaboratorsRequest{
        Affiliation: operations.ReposListCollaboratorsAffiliationEnumOutside.ToPointer(),
        Owner: "illo",
        Page: sdk.Int64(943851),
        PerPage: sdk.Int64(644479),
        Permission: operations.ReposListCollaboratorsPermissionEnumAdmin.ToPointer(),
        Repo: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Collaborators != nil {
        // handle response
    }
}
```

## ReposListCommentsForCommit

Use the `:commit_sha` to specify the commit that will have its comments listed.

API method documentation
<https://docs.github.com/github-ae@latest/rest/commits/comments#list-commit-comments>

### Example Usage

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
    res, err := s.Repos.ReposListCommentsForCommit(ctx, operations.ReposListCommentsForCommitRequest{
        CommitSha: "distinctio",
        Owner: "in",
        Page: sdk.Int64(349993),
        PerPage: sdk.Int64(288300),
        Repo: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommitComments != nil {
        // handle response
    }
}
```

## ReposListCommitCommentsForRepo

Commit Comments use [these custom media types](https://docs.github.com/github-ae@latest/rest/reference/repos#custom-media-types). You can read more about the use of media types in the API [here](https://docs.github.com/github-ae@latest/rest/overview/media-types/).

Comments are ordered by ascending ID.

API method documentation
<https://docs.github.com/github-ae@latest/rest/commits/comments#list-commit-comments-for-a-repository>

### Example Usage

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
    res, err := s.Repos.ReposListCommitCommentsForRepo(ctx, operations.ReposListCommitCommentsForRepoRequest{
        Owner: "repudiandae",
        Page: sdk.Int64(265303),
        PerPage: sdk.Int64(450209),
        Repo: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommitComments != nil {
        // handle response
    }
}
```

## ReposListCommitStatusesForRef

Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.

This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.

API method documentation
<https://docs.github.com/github-ae@latest/rest/commits/statuses#list-commit-statuses-for-a-reference>

### Example Usage

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
    res, err := s.Repos.ReposListCommitStatusesForRef(ctx, operations.ReposListCommitStatusesForRefRequest{
        Owner: "accusamus",
        Page: sdk.Int64(525809),
        PerPage: sdk.Int64(44016),
        Ref: "odit",
        Repo: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Statuses != nil {
        // handle response
    }
}
```

## ReposListCommits

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
<https://docs.github.com/github-ae@latest/rest/commits/commits#list-commits>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Repos.ReposListCommits(ctx, operations.ReposListCommitsRequest{
        Author: sdk.String("enim"),
        Owner: "voluptate",
        Page: sdk.Int64(626707),
        Path: sdk.String("minima"),
        PerPage: sdk.Int64(727544),
        Repo: "magnam",
        Sha: sdk.String("sit"),
        Since: types.MustTimeFromString("2022-07-28T00:11:01.662Z"),
        Until: types.MustTimeFromString("2022-05-07T23:23:18.376Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Commits != nil {
        // handle response
    }
}
```

## ReposListContributors

Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API caches contributor data to improve performance.

GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#list-repository-contributors>

### Example Usage

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
    res, err := s.Repos.ReposListContributors(ctx, operations.ReposListContributorsRequest{
        Anon: sdk.String("dignissimos"),
        Owner: "fugiat",
        Page: sdk.Int64(345138),
        PerPage: sdk.Int64(475325),
        Repo: "veniam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Contributors != nil {
        // handle response
    }
}
```

## ReposListDeployKeys

List deploy keys

API method documentation
<https://docs.github.com/github-ae@latest/rest/deploy-keys#list-deploy-keys>

### Example Usage

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
    res, err := s.Repos.ReposListDeployKeys(ctx, operations.ReposListDeployKeysRequest{
        Owner: "reiciendis",
        Page: sdk.Int64(66207),
        PerPage: sdk.Int64(265632),
        Repo: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeployKeys != nil {
        // handle response
    }
}
```

## ReposListDeploymentBranchPolicies

Lists the deployment branch policies for an environment.

Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/github-ae@latest/rest/deployments/branch-policies#list-deployment-branch-policies>

### Example Usage

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
    res, err := s.Repos.ReposListDeploymentBranchPolicies(ctx, operations.ReposListDeploymentBranchPoliciesRequest{
        EnvironmentName: "aut",
        Owner: "eveniet",
        Page: sdk.Int64(483753),
        PerPage: sdk.Int64(413758),
        Repo: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReposListDeploymentBranchPolicies200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReposListDeploymentStatuses

Users with pull access can view deployment statuses for a deployment:

API method documentation
<https://docs.github.com/github-ae@latest/rest/deployments/statuses#list-deployment-statuses>

### Example Usage

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
    res, err := s.Repos.ReposListDeploymentStatuses(ctx, operations.ReposListDeploymentStatusesRequest{
        DeploymentID: 677045,
        Owner: "possimus",
        Page: sdk.Int64(452399),
        PerPage: sdk.Int64(232772),
        Repo: "nesciunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeploymentStatuses != nil {
        // handle response
    }
}
```

## ReposListDeployments

Simple filtering of deployments is available via query parameters:

API method documentation
<https://docs.github.com/github-ae@latest/rest/deployments/deployments#list-deployments>

### Example Usage

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
    res, err := s.Repos.ReposListDeployments(ctx, operations.ReposListDeploymentsRequest{
        Environment: sdk.String("quaerat"),
        Owner: "itaque",
        Page: sdk.Int64(791228),
        PerPage: sdk.Int64(122662),
        Ref: sdk.String("distinctio"),
        Repo: "iusto",
        Sha: sdk.String("quas"),
        Task: sdk.String("et"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deployments != nil {
        // handle response
    }
}
```

## ReposListForAuthenticatedUser

Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#list-repositories-for-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Repos.ReposListForAuthenticatedUser(ctx, operations.ReposListForAuthenticatedUserRequest{
        Affiliation: sdk.String("facilis"),
        Before: types.MustTimeFromString("2022-08-01T04:44:27.362Z"),
        Direction: operations.ReposListForAuthenticatedUserDirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(5310),
        PerPage: sdk.Int64(526413),
        Since: types.MustTimeFromString("2022-06-14T05:31:20.614Z"),
        Sort: operations.ReposListForAuthenticatedUserSortEnumPushed.ToPointer(),
        Type: operations.ReposListForAuthenticatedUserTypeEnumMember.ToPointer(),
        Visibility: operations.ReposListForAuthenticatedUserVisibilityEnumAll.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Repositories != nil {
        // handle response
    }
}
```

## ReposListForOrg

Lists repositories for the specified organization.

**Note:** In order to see the `security_and_analysis` block for a repository you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/github-ae@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#list-organization-repositories>

### Example Usage

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
    res, err := s.Repos.ReposListForOrg(ctx, operations.ReposListForOrgRequest{
        Direction: operations.ReposListForOrgDirectionEnumAsc.ToPointer(),
        Org: "eaque",
        Page: sdk.Int64(904827),
        PerPage: sdk.Int64(965517),
        Sort: operations.ReposListForOrgSortEnumPushed.ToPointer(),
        Type: operations.ReposListForOrgTypeEnumInternal.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MinimalRepositories != nil {
        // handle response
    }
}
```

## ReposListForUser

Lists public repositories for the specified user. Note: For GitHub AE, this endpoint will list internal repositories for the specified user.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#list-repositories-for-a-user>

### Example Usage

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
    res, err := s.Repos.ReposListForUser(ctx, operations.ReposListForUserRequest{
        Direction: operations.ReposListForUserDirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(152027),
        PerPage: sdk.Int64(30208),
        Sort: operations.ReposListForUserSortEnumCreated.ToPointer(),
        Type: operations.ReposListForUserTypeEnumMember.ToPointer(),
        Username: "Trudie18",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MinimalRepositories != nil {
        // handle response
    }
}
```

## ReposListForks

List forks

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#list-forks>

### Example Usage

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
    res, err := s.Repos.ReposListForks(ctx, operations.ReposListForksRequest{
        Owner: "qui",
        Page: sdk.Int64(895912),
        PerPage: sdk.Int64(691508),
        Repo: "explicabo",
        Sort: operations.ReposListForksSortEnumNewest.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MinimalRepositories != nil {
        // handle response
    }
}
```

## ReposListInvitations

When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.

API method documentation
<https://docs.github.com/github-ae@latest/rest/collaborators/invitations#list-repository-invitations>

### Example Usage

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
    res, err := s.Repos.ReposListInvitations(ctx, operations.ReposListInvitationsRequest{
        Owner: "aliquid",
        Page: sdk.Int64(264649),
        PerPage: sdk.Int64(760049),
        Repo: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryInvitations != nil {
        // handle response
    }
}
```

## ReposListInvitationsForAuthenticatedUser

When authenticating as a user, this endpoint will list all currently open repository invitations for that user.

API method documentation
<https://docs.github.com/github-ae@latest/rest/collaborators/invitations#list-repository-invitations-for-the-authenticated-user>

### Example Usage

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
    res, err := s.Repos.ReposListInvitationsForAuthenticatedUser(ctx, operations.ReposListInvitationsForAuthenticatedUserRequest{
        Page: sdk.Int64(562948),
        PerPage: sdk.Int64(639463),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryInvitations != nil {
        // handle response
    }
}
```

## ReposListLanguages

Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#list-repository-languages>

### Example Usage

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
    res, err := s.Repos.ReposListLanguages(ctx, operations.ReposListLanguagesRequest{
        Owner: "libero",
        Repo: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Language != nil {
        // handle response
    }
}
```

## ReposListPagesBuilds

List GitHub AE Pages builds

API method documentation
<https://docs.github.com/github-ae@latest/rest/pages#list-github-pages-builds>

### Example Usage

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
    res, err := s.Repos.ReposListPagesBuilds(ctx, operations.ReposListPagesBuildsRequest{
        Owner: "sequi",
        Page: sdk.Int64(397919),
        PerPage: sdk.Int64(412052),
        Repo: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PageBuilds != nil {
        // handle response
    }
}
```

## ReposListPullRequestsAssociatedWithCommit

Lists the merged pull request that introduced the commit to the repository. If the commit is not present in the default branch, will only return open pull requests associated with the commit.

API method documentation
<https://docs.github.com/github-ae@latest/rest/commits/commits#list-pull-requests-associated-with-a-commit>

### Example Usage

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
    res, err := s.Repos.ReposListPullRequestsAssociatedWithCommit(ctx, operations.ReposListPullRequestsAssociatedWithCommitRequest{
        CommitSha: "ducimus",
        Owner: "odit",
        Page: sdk.Int64(243623),
        PerPage: sdk.Int64(967338),
        Repo: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestSimples != nil {
        // handle response
    }
}
```

## ReposListReleaseAssets

List release assets

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#list-release-assets>

### Example Usage

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
    res, err := s.Repos.ReposListReleaseAssets(ctx, operations.ReposListReleaseAssetsRequest{
        Owner: "nulla",
        Page: sdk.Int64(671116),
        PerPage: sdk.Int64(617657),
        ReleaseID: 883780,
        Repo: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleaseAssets != nil {
        // handle response
    }
}
```

## ReposListReleases

This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://docs.github.com/github-ae@latest/rest/reference/repos#list-repository-tags).

Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#list-releases>

### Example Usage

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
    res, err := s.Repos.ReposListReleases(ctx, operations.ReposListReleasesRequest{
        Owner: "nisi",
        Page: sdk.Int64(700856),
        PerPage: sdk.Int64(924840),
        Repo: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Releases != nil {
        // handle response
    }
}
```

## ReposListTags

List repository tags

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#list-repository-tags>

### Example Usage

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
    res, err := s.Repos.ReposListTags(ctx, operations.ReposListTagsRequest{
        Owner: "non",
        Page: sdk.Int64(524577),
        PerPage: sdk.Int64(157884),
        Repo: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tags != nil {
        // handle response
    }
}
```

## ReposListTeams

List repository teams

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#list-repository-teams>

### Example Usage

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
    res, err := s.Repos.ReposListTeams(ctx, operations.ReposListTeamsRequest{
        Owner: "quisquam",
        Page: sdk.Int64(120277),
        PerPage: sdk.Int64(973017),
        Repo: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## ReposListWebhookDeliveries

Returns a list of webhook deliveries for a webhook configured in a repository.

API method documentation
<https://docs.github.com/github-ae@latest/rest/webhooks/repo-deliveries#list-deliveries-for-a-repository-webhook>

### Example Usage

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
    res, err := s.Repos.ReposListWebhookDeliveries(ctx, operations.ReposListWebhookDeliveriesRequest{
        Cursor: sdk.String("quae"),
        HookID: 885022,
        Owner: "architecto",
        PerPage: sdk.Int64(100251),
        Redelivery: sdk.Bool(false),
        Repo: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HookDeliveryItems != nil {
        // handle response
    }
}
```

## ReposListWebhooks

Lists webhooks for a repository. `last response` may return null if there have not been any deliveries within 30 days.

API method documentation
<https://docs.github.com/github-ae@latest/rest/webhooks/repos#list-repository-webhooks>

### Example Usage

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
    res, err := s.Repos.ReposListWebhooks(ctx, operations.ReposListWebhooksRequest{
        Owner: "optio",
        Page: sdk.Int64(525951),
        PerPage: sdk.Int64(17060),
        Repo: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Hooks != nil {
        // handle response
    }
}
```

## ReposMerge

Merge a branch

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branches#merge-a-branch>

### Example Usage

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
    res, err := s.Repos.ReposMerge(ctx, operations.ReposMergeRequest{
        RequestBody: operations.ReposMergeRequestBody{
            Base: "reiciendis",
            CommitMessage: sdk.String("a"),
            Head: "iste",
        },
        Owner: "dicta",
        Repo: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Commit != nil {
        // handle response
    }
}
```

## ReposMergeUpstream

Sync a branch of a forked repository to keep it up-to-date with the upstream repository.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branches#sync-a-fork-branch-with-the-upstream-repository>

### Example Usage

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
    res, err := s.Repos.ReposMergeUpstream(ctx, operations.ReposMergeUpstreamRequest{
        RequestBody: operations.ReposMergeUpstreamRequestBody{
            Branch: "ullam",
        },
        Owner: "dolore",
        Repo: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MergedUpstream != nil {
        // handle response
    }
}
```

## ReposPingWebhook

This will trigger a [ping event](https://docs.github.com/github-ae@latest/webhooks/#ping-event) to be sent to the hook.

API method documentation
<https://docs.github.com/github-ae@latest/rest/webhooks/repos#ping-a-repository-webhook>

### Example Usage

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
    res, err := s.Repos.ReposPingWebhook(ctx, operations.ReposPingWebhookRequest{
        HookID: 929292,
        Owner: "maxime",
        Repo: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposRedeliverWebhookDelivery

Redeliver a webhook delivery for a webhook configured in a repository.

API method documentation
<https://docs.github.com/github-ae@latest/rest/webhooks/repo-deliveries#redeliver-a-delivery-for-a-repository-webhook>

### Example Usage

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
    res, err := s.Repos.ReposRedeliverWebhookDelivery(ctx, operations.ReposRedeliverWebhookDeliveryRequest{
        DeliveryID: 163558,
        HookID: 828147,
        Owner: "vero",
        Repo: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReposRedeliverWebhookDelivery202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReposRemoveAppAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of an app to push to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#remove-app-access-restrictions>

### Example Usage

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
    res, err := s.Repos.ReposRemoveAppAccessRestrictions(ctx, operations.ReposRemoveAppAccessRestrictionsRequest{
        RequestBody: &operations.ReposRemoveAppAccessRestrictionsRequestBody{},
        Branch: "impedit",
        Owner: "porro",
        Repo: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Integrations != nil {
        // handle response
    }
}
```

## ReposRemoveCollaborator

Remove a repository collaborator

API method documentation
<https://docs.github.com/github-ae@latest/rest/collaborators/collaborators#remove-a-repository-collaborator>

### Example Usage

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
    res, err := s.Repos.ReposRemoveCollaborator(ctx, operations.ReposRemoveCollaboratorRequest{
        Owner: "totam",
        Repo: "reiciendis",
        Username: "Annabel.Marvin",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposRemoveStatusCheckContexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#remove-status-check-contexts>

### Example Usage

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
    res, err := s.Repos.ReposRemoveStatusCheckContexts(ctx, operations.ReposRemoveStatusCheckContextsRequest{
        RequestBody: &operations.ReposRemoveStatusCheckContextsRequestBody{},
        Branch: "iure",
        Owner: "odio",
        Repo: "nesciunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReposRemoveStatusCheckContexts200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ReposRemoveStatusCheckProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#remove-status-check-protection>

### Example Usage

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
    res, err := s.Repos.ReposRemoveStatusCheckProtection(ctx, operations.ReposRemoveStatusCheckProtectionRequest{
        Branch: "debitis",
        Owner: "vel",
        Repo: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposRemoveTeamAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of a team to push to this branch. You can also remove push access for child teams.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#remove-team-access-restrictions>

### Example Usage

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
    res, err := s.Repos.ReposRemoveTeamAccessRestrictions(ctx, operations.ReposRemoveTeamAccessRestrictionsRequest{
        RequestBody: &operations.ReposRemoveTeamAccessRestrictionsRequestBody{},
        Branch: "corporis",
        Owner: "voluptas",
        Repo: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## ReposRemoveUserAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of a user to push to this branch.

| Type    | Description                                                                                                                                   |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames of the people who should no longer have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#remove-user-access-restrictions>

### Example Usage

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
    res, err := s.Repos.ReposRemoveUserAccessRestrictions(ctx, operations.ReposRemoveUserAccessRestrictionsRequest{
        RequestBody: &operations.ReposRemoveUserAccessRestrictionsRequestBody{},
        Branch: "officia",
        Owner: "reprehenderit",
        Repo: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## ReposReplaceAllTopics

Replace all repository topics

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#replace-all-repository-topics>

### Example Usage

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
    res, err := s.Repos.ReposReplaceAllTopics(ctx, operations.ReposReplaceAllTopicsRequest{
        RequestBody: operations.ReposReplaceAllTopicsRequestBody{
            Names: []string{
                "ipsa",
                "rem",
            },
        },
        Owner: "maiores",
        Repo: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Topic != nil {
        // handle response
    }
}
```

## ReposRequestPagesBuild

You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.

Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.

API method documentation
<https://docs.github.com/github-ae@latest/rest/pages#request-a-github-pages-build>

### Example Usage

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
    res, err := s.Repos.ReposRequestPagesBuild(ctx, operations.ReposRequestPagesBuildRequest{
        Owner: "veniam",
        Repo: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PageBuildStatus != nil {
        // handle response
    }
}
```

## ReposSetAdminBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#set-admin-branch-protection>

### Example Usage

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
    res, err := s.Repos.ReposSetAdminBranchProtection(ctx, operations.ReposSetAdminBranchProtectionRequest{
        Branch: "neque",
        Owner: "facere",
        Repo: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtectedBranchAdminEnforced != nil {
        // handle response
    }
}
```

## ReposSetAppAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of apps that have push access to this branch. This removes all apps that previously had push access and grants push access to the new list of apps. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#set-app-access-restrictions>

### Example Usage

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
    res, err := s.Repos.ReposSetAppAccessRestrictions(ctx, operations.ReposSetAppAccessRestrictionsRequest{
        RequestBody: &operations.ReposSetAppAccessRestrictionsRequestBody{},
        Branch: "quos",
        Owner: "doloribus",
        Repo: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Integrations != nil {
        // handle response
    }
}
```

## ReposSetStatusCheckContexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#set-status-check-contexts>

### Example Usage

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
    res, err := s.Repos.ReposSetStatusCheckContexts(ctx, operations.ReposSetStatusCheckContextsRequest{
        RequestBody: &operations.ReposSetStatusCheckContextsRequestBody{},
        Branch: "est",
        Owner: "delectus",
        Repo: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReposSetStatusCheckContexts200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ReposSetTeamAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. Team restrictions include child teams.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#set-team-access-restrictions>

### Example Usage

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
    res, err := s.Repos.ReposSetTeamAccessRestrictions(ctx, operations.ReposSetTeamAccessRestrictionsRequest{
        RequestBody: &operations.ReposSetTeamAccessRestrictionsRequestBody{},
        Branch: "vitae",
        Owner: "nesciunt",
        Repo: "similique",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## ReposSetUserAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.

| Type    | Description                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#set-user-access-restrictions>

### Example Usage

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
    res, err := s.Repos.ReposSetUserAccessRestrictions(ctx, operations.ReposSetUserAccessRestrictionsRequest{
        RequestBody: &operations.ReposSetUserAccessRestrictionsRequestBody{},
        Branch: "illo",
        Owner: "repellat",
        Repo: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## ReposTestPushWebhook

This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.

**Note**: Previously `/repos/:owner/:repo/hooks/:hook_id/test`

API method documentation
<https://docs.github.com/github-ae@latest/rest/webhooks/repos#test-the-push-repository-webhook>

### Example Usage

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
    res, err := s.Repos.ReposTestPushWebhook(ctx, operations.ReposTestPushWebhookRequest{
        HookID: 987890,
        Owner: "possimus",
        Repo: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposTransfer

A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://docs.github.com/github-ae@latest/articles/about-repository-transfers/).

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#transfer-a-repository>

### Example Usage

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
    res, err := s.Repos.ReposTransfer(ctx, operations.ReposTransferRequest{
        RequestBody: operations.ReposTransferRequestBody{
            NewOwner: "incidunt",
            TeamIds: []int64{
                368491,
            },
        },
        Owner: "cupiditate",
        Repo: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MinimalRepository != nil {
        // handle response
    }
}
```

## ReposUpdate

**Note**: To edit a repository's topics, use the [Replace all repository topics](https://docs.github.com/github-ae@latest/rest/reference/repos#replace-all-repository-topics) endpoint.

API method documentation
<https://docs.github.com/github-ae@latest/rest/repos/repos#update-a-repository>

### Example Usage

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
    res, err := s.Repos.ReposUpdate(ctx, operations.ReposUpdateRequest{
        RequestBody: &operations.ReposUpdateRequestBody{
            AllowAutoMerge: sdk.Bool(false),
            AllowForking: sdk.Bool(false),
            AllowMergeCommit: sdk.Bool(false),
            AllowRebaseMerge: sdk.Bool(false),
            AllowSquashMerge: sdk.Bool(false),
            AllowUpdateBranch: sdk.Bool(false),
            Archived: sdk.Bool(false),
            DefaultBranch: sdk.String("alias"),
            DeleteBranchOnMerge: sdk.Bool(false),
            Description: sdk.String("quidem"),
            HasIssues: sdk.Bool(false),
            HasProjects: sdk.Bool(false),
            HasWiki: sdk.Bool(false),
            Homepage: sdk.String("nesciunt"),
            IsTemplate: sdk.Bool(false),
            MergeCommitMessage: operations.ReposUpdateRequestBodyMergeCommitMessageEnumPrTitle.ToPointer(),
            MergeCommitTitle: operations.ReposUpdateRequestBodyMergeCommitTitleEnumMergeMessage.ToPointer(),
            Name: sdk.String("Lynn Trantow"),
            Private: sdk.Bool(false),
            SquashMergeCommitMessage: operations.ReposUpdateRequestBodySquashMergeCommitMessageEnumPrBody.ToPointer(),
            SquashMergeCommitTitle: operations.ReposUpdateRequestBodySquashMergeCommitTitleEnumPrTitle.ToPointer(),
            UseSquashPrTitleAsDefault: sdk.Bool(false),
            Visibility: operations.ReposUpdateRequestBodyVisibilityEnumInternal.ToPointer(),
            WebCommitSignoffRequired: sdk.Bool(false),
        },
        Owner: "adipisci",
        Repo: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FullRepository != nil {
        // handle response
    }
}
```

## ReposUpdateBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Protecting a branch requires admin or owner permissions to the repository.

**Note**: Passing new arrays of `users` and `teams` replaces their previous values.

**Note**: The list of users, apps, and teams in total is limited to 100 items.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#update-branch-protection>

### Example Usage

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
    res, err := s.Repos.ReposUpdateBranchProtection(ctx, operations.ReposUpdateBranchProtectionRequest{
        RequestBody: operations.ReposUpdateBranchProtectionRequestBody{
            AllowDeletions: sdk.Bool(false),
            AllowForcePushes: sdk.Bool(false),
            BlockCreations: sdk.Bool(false),
            EnforceAdmins: false,
            RequiredConversationResolution: sdk.Bool(false),
            RequiredLinearHistory: sdk.Bool(false),
            RequiredPullRequestReviews: operations.ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews{
                BypassPullRequestAllowances: &operations.ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsBypassPullRequestAllowances{
                    Apps: []string{
                        "minima",
                        "ex",
                    },
                    Teams: []string{
                        "ab",
                        "beatae",
                        "hic",
                        "nisi",
                    },
                    Users: []string{
                        "dolor",
                        "ducimus",
                        "fuga",
                        "minima",
                    },
                },
                DismissStaleReviews: sdk.Bool(false),
                DismissalRestrictions: &operations.ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions{
                    Apps: []string{
                        "qui",
                    },
                    Teams: []string{
                        "magni",
                        "incidunt",
                    },
                    Users: []string{
                        "praesentium",
                    },
                },
                RequireCodeOwnerReviews: sdk.Bool(false),
                RequiredApprovingReviewCount: sdk.Int64(220528),
            },
            RequiredStatusChecks: operations.ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks{
                Checks: []ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks{
                    operations.ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks{
                        AppID: sdk.Int64(709701),
                        Context: "facilis",
                    },
                    operations.ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks{
                        AppID: sdk.Int64(769634),
                        Context: "sit",
                    },
                },
                Contexts: []string{
                    "culpa",
                    "consequuntur",
                },
                Strict: false,
            },
            Restrictions: operations.ReposUpdateBranchProtectionRequestBodyRestrictions{
                Apps: []string{
                    "deserunt",
                },
                Teams: []string{
                    "veniam",
                    "quod",
                },
                Users: []string{
                    "a",
                    "quisquam",
                    "enim",
                    "doloribus",
                },
            },
        },
        Branch: "assumenda",
        Owner: "officiis",
        Repo: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtectedBranch != nil {
        // handle response
    }
}
```

## ReposUpdateCommitComment

Update a commit comment

API method documentation
<https://docs.github.com/github-ae@latest/rest/commits/comments#update-a-commit-comment>

### Example Usage

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
    res, err := s.Repos.ReposUpdateCommitComment(ctx, operations.ReposUpdateCommitCommentRequest{
        RequestBody: operations.ReposUpdateCommitCommentRequestBody{
            Body: "alias",
        },
        CommentID: 633982,
        Owner: "ipsa",
        Repo: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommitComment != nil {
        // handle response
    }
}
```

## ReposUpdateDeploymentBranchPolicy

Updates a deployment branch policy for an environment.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.

API method documentation
<https://docs.github.com/github-ae@latest/rest/deployments/branch-policies#update-deployment-branch-policy>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Repos.ReposUpdateDeploymentBranchPolicy(ctx, operations.ReposUpdateDeploymentBranchPolicyRequest{
        BranchPolicyID: 898193,
        DeploymentBranchPolicyNamePattern: shared.DeploymentBranchPolicyNamePattern{
            Name: "release/*",
        },
        EnvironmentName: "quia",
        Owner: "dicta",
        Repo: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeploymentBranchPolicy != nil {
        // handle response
    }
}
```

## ReposUpdateInformationAboutPagesSite

Updates information for a GitHub AE Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages).

To use this endpoint, you must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission. A token with the `repo` scope or Pages write permission is required. GitHub Apps must have the `administration:write` and `pages:write` permissions.

API method documentation
<https://docs.github.com/github-ae@latest/rest/pages#update-information-about-a-github-pages-site>

### Example Usage

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
    res, err := s.Repos.ReposUpdateInformationAboutPagesSite(ctx, operations.ReposUpdateInformationAboutPagesSiteRequest{
        RequestBody: operations.ReposUpdateInformationAboutPagesSiteRequestBody3{
            BuildType: operations.ReposUpdateInformationAboutPagesSiteRequestBody3BuildTypeEnumWorkflow.ToPointer(),
            Cname: "ullam",
            HTTPSEnforced: sdk.Bool(false),
            Source: operations.ReposUpdateInformationAboutPagesSiteRequestBody3Source1EnumGhPages.ToPointer(),
        },
        Owner: "perferendis",
        Repo: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposUpdateInvitation

Update a repository invitation

API method documentation
<https://docs.github.com/github-ae@latest/rest/collaborators/invitations#update-a-repository-invitation>

### Example Usage

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
    res, err := s.Repos.ReposUpdateInvitation(ctx, operations.ReposUpdateInvitationRequest{
        RequestBody: &operations.ReposUpdateInvitationRequestBody{
            Permissions: operations.ReposUpdateInvitationRequestBodyPermissionsEnumMaintain.ToPointer(),
        },
        InvitationID: 765833,
        Owner: "iure",
        Repo: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryInvitation != nil {
        // handle response
    }
}
```

## ReposUpdatePullRequestReviewProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

**Note**: Passing new arrays of `users` and `teams` replaces their previous values.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#update-pull-request-review-protection>

### Example Usage

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
    res, err := s.Repos.ReposUpdatePullRequestReviewProtection(ctx, operations.ReposUpdatePullRequestReviewProtectionRequest{
        RequestBody: &operations.ReposUpdatePullRequestReviewProtectionRequestBody{
            BypassPullRequestAllowances: &operations.ReposUpdatePullRequestReviewProtectionRequestBodyBypassPullRequestAllowances{
                Apps: []string{
                    "nemo",
                    "recusandae",
                    "velit",
                    "magnam",
                },
                Teams: []string{
                    "laboriosam",
                    "sed",
                },
                Users: []string{
                    "natus",
                    "provident",
                },
            },
            DismissStaleReviews: sdk.Bool(false),
            DismissalRestrictions: &operations.ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions{
                Apps: []string{
                    "doloribus",
                    "facilis",
                    "quidem",
                },
                Teams: []string{
                    "laboriosam",
                    "unde",
                    "modi",
                    "perspiciatis",
                },
                Users: []string{
                    "cum",
                    "aspernatur",
                    "libero",
                    "nam",
                },
            },
            RequireCodeOwnerReviews: sdk.Bool(false),
            RequiredApprovingReviewCount: sdk.Int64(279172),
        },
        Branch: "recusandae",
        Owner: "quod",
        Repo: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtectedBranchPullRequestReview != nil {
        // handle response
    }
}
```

## ReposUpdateRelease

Users with push access to the repository can edit a release.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#update-a-release>

### Example Usage

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
    res, err := s.Repos.ReposUpdateRelease(ctx, operations.ReposUpdateReleaseRequest{
        RequestBody: &operations.ReposUpdateReleaseRequestBody{
            Body: sdk.String("saepe"),
            Draft: sdk.Bool(false),
            Name: sdk.String("Angelica Dooley"),
            Prerelease: sdk.Bool(false),
            TagName: sdk.String("illum"),
            TargetCommitish: sdk.String("facilis"),
        },
        Owner: "non",
        ReleaseID: 649534,
        Repo: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Release != nil {
        // handle response
    }
}
```

## ReposUpdateReleaseAsset

Users with push access to the repository can edit a release asset.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#update-a-release-asset>

### Example Usage

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
    res, err := s.Repos.ReposUpdateReleaseAsset(ctx, operations.ReposUpdateReleaseAssetRequest{
        RequestBody: &operations.ReposUpdateReleaseAssetRequestBody{
            Label: sdk.String("recusandae"),
            Name: sdk.String("Dewey Hand"),
            State: sdk.String(""uploaded""),
        },
        AssetID: 911451,
        Owner: "laborum",
        Repo: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleaseAsset != nil {
        // handle response
    }
}
```

## ReposUpdateStatusCheckProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github-ae@latest/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.

API method documentation
<https://docs.github.com/github-ae@latest/rest/branches/branch-protection#update-status-check-protection>

### Example Usage

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
    res, err := s.Repos.ReposUpdateStatusCheckProtection(ctx, operations.ReposUpdateStatusCheckProtectionRequest{
        RequestBody: &operations.ReposUpdateStatusCheckProtectionRequestBody{
            Checks: []ReposUpdateStatusCheckProtectionRequestBodyChecks{
                operations.ReposUpdateStatusCheckProtectionRequestBodyChecks{
                    AppID: sdk.Int64(369523),
                    Context: "alias",
                },
                operations.ReposUpdateStatusCheckProtectionRequestBodyChecks{
                    AppID: sdk.Int64(379894),
                    Context: "deserunt",
                },
                operations.ReposUpdateStatusCheckProtectionRequestBodyChecks{
                    AppID: sdk.Int64(560451),
                    Context: "laborum",
                },
                operations.ReposUpdateStatusCheckProtectionRequestBodyChecks{
                    AppID: sdk.Int64(668218),
                    Context: "occaecati",
                },
            },
            Contexts: []string{
                "quo",
                "perferendis",
            },
            Strict: sdk.Bool(false),
        },
        Branch: "fugit",
        Owner: "aliquid",
        Repo: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCheckPolicy != nil {
        // handle response
    }
}
```

## ReposUpdateWebhook

Updates a webhook configured in a repository. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for a repository](/rest/reference/repos#update-a-webhook-configuration-for-a-repository)."

API method documentation
<https://docs.github.com/github-ae@latest/rest/webhooks/repos#update-a-repository-webhook>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Repos.ReposUpdateWebhook(ctx, operations.ReposUpdateWebhookRequest{
        RequestBody: operations.ReposUpdateWebhookRequestBody{
            Active: sdk.Bool(false),
            AddEvents: []string{
                "eligendi",
                "hic",
            },
            Config: &operations.ReposUpdateWebhookRequestBodyConfig{
                Address: sdk.String(""bar@example.com""),
                ContentType: sdk.String(""json""),
                InsecureSsl: &shared.WebhookConfigInsecureSsl{},
                Room: sdk.String(""The Serious Room""),
                Secret: sdk.String(""********""),
                URL: "https://example.com/webhook",
            },
            Events: []string{
                "officiis",
                "unde",
            },
            RemoveEvents: []string{
                "error",
                "mollitia",
                "magnam",
                "nostrum",
            },
        },
        HookID: 460909,
        Owner: "corrupti",
        Repo: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Hook != nil {
        // handle response
    }
}
```

## ReposUpdateWebhookConfigForRepo

Updates the webhook configuration for a repository. To update more information about the webhook, including the `active` state and `events`, use "[Update a repository webhook](/rest/reference/orgs#update-a-repository-webhook)."

Access tokens must have the `write:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:write` permission.

API method documentation
<https://docs.github.com/github-ae@latest/rest/webhooks/repo-config#update-a-webhook-configuration-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Repos.ReposUpdateWebhookConfigForRepo(ctx, operations.ReposUpdateWebhookConfigForRepoRequest{
        RequestBody: &operations.ReposUpdateWebhookConfigForRepoRequestBody{
            ContentType: sdk.String(""json""),
            InsecureSsl: &shared.WebhookConfigInsecureSsl{},
            Secret: sdk.String(""********""),
            URL: sdk.String("https://example.com/webhook"),
        },
        HookID: 815225,
        Owner: "impedit",
        Repo: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookConfig != nil {
        // handle response
    }
}
```

## ReposUploadReleaseAsset

This endpoint makes use of [a Hypermedia relation](https://docs.github.com/github-ae@latest/rest/overview/resources-in-the-rest-api#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in
the response of the [Create a release endpoint](https://docs.github.com/github-ae@latest/rest/releases/releases#create-a-release) to upload a release asset.

You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.

Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example: 

`application/zip`

GitHub AE expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example,
you'll still need to pass your authentication to be able to upload an asset.

When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted.

**Notes:**
*   GitHub AE renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The "[List assets for a release](https://docs.github.com/github-ae@latest/rest/reference/repos#list-assets-for-a-release)"
endpoint lists the renamed filenames. For more information and help, contact [GitHub AE Support](https://support.github.com/contact?tags=dotcom-rest-api).
*   To find the `release_id` query the [`GET /repos/{owner}/{repo}/releases/latest` endpoint](https://docs.github.com/github-ae@latest/rest/releases/releases#get-the-latest-release). 
*   If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/repos#upload-a-release-asset>

### Example Usage

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
    res, err := s.Repos.ReposUploadReleaseAsset(ctx, operations.ReposUploadReleaseAssetRequest{
        RequestBody: []byte("deserunt"),
        Label: sdk.String("quod"),
        Name: "Michelle Bartell",
        Owner: "maxime",
        ReleaseID: 9375,
        Repo: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleaseAsset != nil {
        // handle response
    }
}
```
