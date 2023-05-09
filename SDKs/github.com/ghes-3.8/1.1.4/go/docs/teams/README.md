# Teams

## Overview

Interact with GitHub Teams.

### Available Operations

* [~~TeamsAddMemberLegacy~~](#teamsaddmemberlegacy) - Add team member (Legacy) :warning: **Deprecated**
* [TeamsAddOrUpdateMembershipForUserInOrg](#teamsaddorupdatemembershipforuserinorg) - Add or update team membership for a user
* [~~TeamsAddOrUpdateMembershipForUserLegacy~~](#teamsaddorupdatemembershipforuserlegacy) - Add or update team membership for a user (Legacy) :warning: **Deprecated**
* [TeamsAddOrUpdateProjectPermissionsInOrg](#teamsaddorupdateprojectpermissionsinorg) - Add or update team project permissions
* [~~TeamsAddOrUpdateProjectPermissionsLegacy~~](#teamsaddorupdateprojectpermissionslegacy) - Add or update team project permissions (Legacy) :warning: **Deprecated**
* [TeamsAddOrUpdateRepoPermissionsInOrg](#teamsaddorupdaterepopermissionsinorg) - Add or update team repository permissions
* [~~TeamsAddOrUpdateRepoPermissionsLegacy~~](#teamsaddorupdaterepopermissionslegacy) - Add or update team repository permissions (Legacy) :warning: **Deprecated**
* [TeamsCheckPermissionsForProjectInOrg](#teamscheckpermissionsforprojectinorg) - Check team permissions for a project
* [~~TeamsCheckPermissionsForProjectLegacy~~](#teamscheckpermissionsforprojectlegacy) - Check team permissions for a project (Legacy) :warning: **Deprecated**
* [TeamsCheckPermissionsForRepoInOrg](#teamscheckpermissionsforrepoinorg) - Check team permissions for a repository
* [~~TeamsCheckPermissionsForRepoLegacy~~](#teamscheckpermissionsforrepolegacy) - Check team permissions for a repository (Legacy) :warning: **Deprecated**
* [TeamsCreate](#teamscreate) - Create a team
* [TeamsCreateDiscussionCommentInOrg](#teamscreatediscussioncommentinorg) - Create a discussion comment
* [~~TeamsCreateDiscussionCommentLegacy~~](#teamscreatediscussioncommentlegacy) - Create a discussion comment (Legacy) :warning: **Deprecated**
* [TeamsCreateDiscussionInOrg](#teamscreatediscussioninorg) - Create a discussion
* [~~TeamsCreateDiscussionLegacy~~](#teamscreatediscussionlegacy) - Create a discussion (Legacy) :warning: **Deprecated**
* [TeamsDeleteDiscussionCommentInOrg](#teamsdeletediscussioncommentinorg) - Delete a discussion comment
* [~~TeamsDeleteDiscussionCommentLegacy~~](#teamsdeletediscussioncommentlegacy) - Delete a discussion comment (Legacy) :warning: **Deprecated**
* [TeamsDeleteDiscussionInOrg](#teamsdeletediscussioninorg) - Delete a discussion
* [~~TeamsDeleteDiscussionLegacy~~](#teamsdeletediscussionlegacy) - Delete a discussion (Legacy) :warning: **Deprecated**
* [TeamsDeleteInOrg](#teamsdeleteinorg) - Delete a team
* [~~TeamsDeleteLegacy~~](#teamsdeletelegacy) - Delete a team (Legacy) :warning: **Deprecated**
* [TeamsExternalIdpGroupInfoForOrg](#teamsexternalidpgroupinfofororg) - Get an external group
* [TeamsGetByName](#teamsgetbyname) - Get a team by name
* [TeamsGetDiscussionCommentInOrg](#teamsgetdiscussioncommentinorg) - Get a discussion comment
* [~~TeamsGetDiscussionCommentLegacy~~](#teamsgetdiscussioncommentlegacy) - Get a discussion comment (Legacy) :warning: **Deprecated**
* [TeamsGetDiscussionInOrg](#teamsgetdiscussioninorg) - Get a discussion
* [~~TeamsGetDiscussionLegacy~~](#teamsgetdiscussionlegacy) - Get a discussion (Legacy) :warning: **Deprecated**
* [~~TeamsGetLegacy~~](#teamsgetlegacy) - Get a team (Legacy) :warning: **Deprecated**
* [~~TeamsGetMemberLegacy~~](#teamsgetmemberlegacy) - Get team member (Legacy) :warning: **Deprecated**
* [TeamsGetMembershipForUserInOrg](#teamsgetmembershipforuserinorg) - Get team membership for a user
* [~~TeamsGetMembershipForUserLegacy~~](#teamsgetmembershipforuserlegacy) - Get team membership for a user (Legacy) :warning: **Deprecated**
* [TeamsLinkExternalIdpGroupToTeamForOrg](#teamslinkexternalidpgrouptoteamfororg) - Update the connection between an external group and a team
* [TeamsList](#teamslist) - List teams
* [TeamsListChildInOrg](#teamslistchildinorg) - List child teams
* [~~TeamsListChildLegacy~~](#teamslistchildlegacy) - List child teams (Legacy) :warning: **Deprecated**
* [TeamsListDiscussionCommentsInOrg](#teamslistdiscussioncommentsinorg) - List discussion comments
* [~~TeamsListDiscussionCommentsLegacy~~](#teamslistdiscussioncommentslegacy) - List discussion comments (Legacy) :warning: **Deprecated**
* [TeamsListDiscussionsInOrg](#teamslistdiscussionsinorg) - List discussions
* [~~TeamsListDiscussionsLegacy~~](#teamslistdiscussionslegacy) - List discussions (Legacy) :warning: **Deprecated**
* [TeamsListExternalIdpGroupsForOrg](#teamslistexternalidpgroupsfororg) - List external groups in an organization
* [TeamsListForAuthenticatedUser](#teamslistforauthenticateduser) - List teams for the authenticated user
* [TeamsListLinkedExternalIdpGroupsToTeamForOrg](#teamslistlinkedexternalidpgroupstoteamfororg) - List a connection between an external group and a team
* [TeamsListMembersInOrg](#teamslistmembersinorg) - List team members
* [~~TeamsListMembersLegacy~~](#teamslistmemberslegacy) - List team members (Legacy) :warning: **Deprecated**
* [TeamsListProjectsInOrg](#teamslistprojectsinorg) - List team projects
* [~~TeamsListProjectsLegacy~~](#teamslistprojectslegacy) - List team projects (Legacy) :warning: **Deprecated**
* [TeamsListReposInOrg](#teamslistreposinorg) - List team repositories
* [~~TeamsListReposLegacy~~](#teamslistreposlegacy) - List team repositories (Legacy) :warning: **Deprecated**
* [~~TeamsRemoveMemberLegacy~~](#teamsremovememberlegacy) - Remove team member (Legacy) :warning: **Deprecated**
* [TeamsRemoveMembershipForUserInOrg](#teamsremovemembershipforuserinorg) - Remove team membership for a user
* [~~TeamsRemoveMembershipForUserLegacy~~](#teamsremovemembershipforuserlegacy) - Remove team membership for a user (Legacy) :warning: **Deprecated**
* [TeamsRemoveProjectInOrg](#teamsremoveprojectinorg) - Remove a project from a team
* [~~TeamsRemoveProjectLegacy~~](#teamsremoveprojectlegacy) - Remove a project from a team (Legacy) :warning: **Deprecated**
* [TeamsRemoveRepoInOrg](#teamsremoverepoinorg) - Remove a repository from a team
* [~~TeamsRemoveRepoLegacy~~](#teamsremoverepolegacy) - Remove a repository from a team (Legacy) :warning: **Deprecated**
* [TeamsUnlinkExternalIdpGroupFromTeamForOrg](#teamsunlinkexternalidpgroupfromteamfororg) - Remove the connection between an external group and a team
* [TeamsUpdateDiscussionCommentInOrg](#teamsupdatediscussioncommentinorg) - Update a discussion comment
* [~~TeamsUpdateDiscussionCommentLegacy~~](#teamsupdatediscussioncommentlegacy) - Update a discussion comment (Legacy) :warning: **Deprecated**
* [TeamsUpdateDiscussionInOrg](#teamsupdatediscussioninorg) - Update a discussion
* [~~TeamsUpdateDiscussionLegacy~~](#teamsupdatediscussionlegacy) - Update a discussion (Legacy) :warning: **Deprecated**
* [TeamsUpdateInOrg](#teamsupdateinorg) - Update a team
* [~~TeamsUpdateLegacy~~](#teamsupdatelegacy) - Update a team (Legacy) :warning: **Deprecated**

## ~~TeamsAddMemberLegacy~~

The "Add team member" endpoint (described below) is deprecated.

We recommend using the [Add or update team membership for a user](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.8/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/enterprise-server@3.8/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.8/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#add-team-member-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsAddMemberLegacy(ctx, operations.TeamsAddMemberLegacyRequest{
        TeamID: 312690,
        Username: "Foster_Torp",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsAddOrUpdateMembershipForUserInOrg

Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.8/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/enterprise-server@3.8/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the "pending" state until the person accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team.

If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/memberships/{username}`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#add-or-update-team-membership-for-a-user>

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
    res, err := s.Teams.TeamsAddOrUpdateMembershipForUserInOrg(ctx, operations.TeamsAddOrUpdateMembershipForUserInOrgRequest{
        RequestBody: &operations.TeamsAddOrUpdateMembershipForUserInOrgRequestBody{
            Role: operations.TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnumMember.ToPointer(),
        },
        Org: "neque",
        TeamSlug: "quidem",
        Username: "Pasquale37",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamMembership != nil {
        // handle response
    }
}
```

## ~~TeamsAddOrUpdateMembershipForUserLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team membership for a user](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.8/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/enterprise-server@3.8/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.

If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#add-or-update-team-membership-for-a-user-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsAddOrUpdateMembershipForUserLegacy(ctx, operations.TeamsAddOrUpdateMembershipForUserLegacyRequest{
        RequestBody: &operations.TeamsAddOrUpdateMembershipForUserLegacyRequestBody{
            Role: operations.TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnumMaintainer.ToPointer(),
        },
        TeamID: 196497,
        Username: "Cassandra.Bartell",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamMembership != nil {
        // handle response
    }
}
```

## TeamsAddOrUpdateProjectPermissionsInOrg

Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/projects/{project_id}`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#add-or-update-team-project-permissions>

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
    res, err := s.Teams.TeamsAddOrUpdateProjectPermissionsInOrg(ctx, operations.TeamsAddOrUpdateProjectPermissionsInOrgRequest{
        RequestBody: &operations.TeamsAddOrUpdateProjectPermissionsInOrgRequestBody{
            Permission: operations.TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnumRead.ToPointer(),
        },
        Org: "error",
        ProjectID: 973894,
        TeamSlug: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~TeamsAddOrUpdateProjectPermissionsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team project permissions](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#add-or-update-team-project-permissions) endpoint.

Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams/#add-or-update-team-project-permissions-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsAddOrUpdateProjectPermissionsLegacy(ctx, operations.TeamsAddOrUpdateProjectPermissionsLegacyRequest{
        RequestBody: &operations.TeamsAddOrUpdateProjectPermissionsLegacyRequestBody{
            Permission: operations.TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnumAdmin.ToPointer(),
        },
        ProjectID: 678695,
        TeamID: 841816,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsAddOrUpdateRepoPermissionsInOrg

To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.8/rest/overview/resources-in-the-rest-api#http-verbs)."

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.

For more information about the permission levels, see "[Repository permission levels for an organization](https://docs.github.com/enterprise-server@3.8/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)".

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams/#add-or-update-team-repository-permissions>

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
    res, err := s.Teams.TeamsAddOrUpdateRepoPermissionsInOrg(ctx, operations.TeamsAddOrUpdateRepoPermissionsInOrgRequest{
        RequestBody: &operations.TeamsAddOrUpdateRepoPermissionsInOrgRequestBody{
            Permission: sdk.String("earum"),
        },
        Org: "excepturi",
        Owner: "numquam",
        Repo: "molestiae",
        TeamSlug: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~TeamsAddOrUpdateRepoPermissionsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Add or update team repository permissions](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#add-or-update-team-repository-permissions)" endpoint.

To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.8/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#add-or-update-team-repository-permissions-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsAddOrUpdateRepoPermissionsLegacy(ctx, operations.TeamsAddOrUpdateRepoPermissionsLegacyRequest{
        RequestBody: &operations.TeamsAddOrUpdateRepoPermissionsLegacyRequestBody{
            Permission: operations.TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnumPush.ToPointer(),
        },
        Owner: "animi",
        Repo: "voluptatum",
        TeamID: 399585,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsCheckPermissionsForProjectInOrg

Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects/{project_id}`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#check-team-permissions-for-a-project>

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
    res, err := s.Teams.TeamsCheckPermissionsForProjectInOrg(ctx, operations.TeamsCheckPermissionsForProjectInOrgRequest{
        Org: "nihil",
        ProjectID: 706328,
        TeamSlug: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamProject != nil {
        // handle response
    }
}
```

## ~~TeamsCheckPermissionsForProjectLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a project](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#check-team-permissions-for-a-project) endpoint.

Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams/#check-team-permissions-for-a-project-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsCheckPermissionsForProjectLegacy(ctx, operations.TeamsCheckPermissionsForProjectLegacyRequest{
        ProjectID: 279673,
        TeamID: 178201,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamProject != nil {
        // handle response
    }
}
```

## TeamsCheckPermissionsForRepoInOrg

Checks whether a team has `admin`, `push`, `maintain`, `triage`, or `pull` permission for a repository. Repositories inherited through a parent team will also be checked.

You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@3.8/rest/overview/media-types/) via the `application/vnd.github.v3.repository+json` accept header.

If a team doesn't have permission for the repository, you will receive a `404 Not Found` response status.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams/#check-team-permissions-for-a-repository>

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
    res, err := s.Teams.TeamsCheckPermissionsForRepoInOrg(ctx, operations.TeamsCheckPermissionsForRepoInOrgRequest{
        Org: "magnam",
        Owner: "dolores",
        Repo: "aliquid",
        TeamSlug: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamRepository != nil {
        // handle response
    }
}
```

## ~~TeamsCheckPermissionsForRepoLegacy~~

**Note**: Repositories inherited through a parent team will also be checked.

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a repository](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#check-team-permissions-for-a-repository) endpoint.

You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@3.8/rest/overview/media-types/) via the `Accept` header:

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams/#check-team-permissions-for-a-repository-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsCheckPermissionsForRepoLegacy(ctx, operations.TeamsCheckPermissionsForRepoLegacyRequest{
        Owner: "vel",
        Repo: "ad",
        TeamID: 552287,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamRepository != nil {
        // handle response
    }
}
```

## TeamsCreate

To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://docs.github.com/enterprise-server@3.8/articles/setting-team-creation-permissions-in-your-organization)."

When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://docs.github.com/enterprise-server@3.8/github/setting-up-and-managing-organizations-and-teams/about-teams)".

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#create-a-team>

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
    res, err := s.Teams.TeamsCreate(ctx, operations.TeamsCreateRequest{
        RequestBody: operations.TeamsCreateRequestBody{
            Description: sdk.String("illo"),
            LdapDn: sdk.String("suscipit"),
            Maintainers: []string{
                "fugiat",
                "impedit",
                "culpa",
                "atque",
            },
            Name: "Dr. Emilio Hilll",
            ParentTeamID: sdk.Int64(711310),
            Permission: operations.TeamsCreateRequestBodyPermissionEnumPull.ToPointer(),
            Privacy: operations.TeamsCreateRequestBodyPrivacyEnumClosed.ToPointer(),
            RepoNames: []string{
                "occaecati",
                "ipsum",
            },
        },
        Org: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamFull != nil {
        // handle response
    }
}
```

## TeamsCreateDiscussionCommentInOrg

Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.8/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.8/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.8/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#create-a-discussion-comment>

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
    res, err := s.Teams.TeamsCreateDiscussionCommentInOrg(ctx, operations.TeamsCreateDiscussionCommentInOrgRequest{
        RequestBody: operations.TeamsCreateDiscussionCommentInOrgRequestBody{
            Body: "quisquam",
        },
        DiscussionNumber: 97922,
        Org: "fugit",
        TeamSlug: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussionComment != nil {
        // handle response
    }
}
```

## ~~TeamsCreateDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Create a discussion comment](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#create-a-discussion-comment) endpoint.

Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.8/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.8/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.8/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#create-a-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsCreateDiscussionCommentLegacy(ctx, operations.TeamsCreateDiscussionCommentLegacyRequest{
        RequestBody: operations.TeamsCreateDiscussionCommentLegacyRequestBody{
            Body: "temporibus",
        },
        DiscussionNumber: 652092,
        TeamID: 661578,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussionComment != nil {
        // handle response
    }
}
```

## TeamsCreateDiscussionInOrg

Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.8/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.8/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.8/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#create-a-discussion>

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
    res, err := s.Teams.TeamsCreateDiscussionInOrg(ctx, operations.TeamsCreateDiscussionInOrgRequest{
        RequestBody: operations.TeamsCreateDiscussionInOrgRequestBody{
            Body: "quibusdam",
            Private: sdk.Bool(false),
            Title: "Mr.",
        },
        Org: "accusamus",
        TeamSlug: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussion != nil {
        // handle response
    }
}
```

## ~~TeamsCreateDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create a discussion`](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#create-a-discussion) endpoint.

Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.8/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.8/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.8/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#create-a-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsCreateDiscussionLegacy(ctx, operations.TeamsCreateDiscussionLegacyRequest{
        RequestBody: operations.TeamsCreateDiscussionLegacyRequestBody{
            Body: "quam",
            Private: sdk.Bool(false),
            Title: "Miss",
        },
        TeamID: 962408,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussion != nil {
        // handle response
    }
}
```

## TeamsDeleteDiscussionCommentInOrg

Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#delete-a-discussion-comment>

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
    res, err := s.Teams.TeamsDeleteDiscussionCommentInOrg(ctx, operations.TeamsDeleteDiscussionCommentInOrgRequest{
        CommentNumber: 904983,
        DiscussionNumber: 813975,
        Org: "nobis",
        TeamSlug: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~TeamsDeleteDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a discussion comment](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#delete-a-discussion-comment) endpoint.

Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#delete-a-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsDeleteDiscussionCommentLegacy(ctx, operations.TeamsDeleteDiscussionCommentLegacyRequest{
        CommentNumber: 561121,
        DiscussionNumber: 12877,
        TeamID: 836548,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsDeleteDiscussionInOrg

Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#delete-a-discussion>

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
    res, err := s.Teams.TeamsDeleteDiscussionInOrg(ctx, operations.TeamsDeleteDiscussionInOrgRequest{
        DiscussionNumber: 947515,
        Org: "incidunt",
        TeamSlug: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~TeamsDeleteDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Delete a discussion`](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#delete-a-discussion) endpoint.

Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#delete-a-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsDeleteDiscussionLegacy(ctx, operations.TeamsDeleteDiscussionLegacyRequest{
        DiscussionNumber: 546950,
        TeamID: 630237,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsDeleteInOrg

To delete a team, the authenticated user must be an organization owner or team maintainer.

If you are an organization owner, deleting a parent team will delete all of its child teams as well.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#delete-a-team>

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
    res, err := s.Teams.TeamsDeleteInOrg(ctx, operations.TeamsDeleteInOrgRequest{
        Org: "dolore",
        TeamSlug: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~TeamsDeleteLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a team](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#delete-a-team) endpoint.

To delete a team, the authenticated user must be an organization owner or team maintainer.

If you are an organization owner, deleting a parent team will delete all of its child teams as well.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams/#delete-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsDeleteLegacy(ctx, operations.TeamsDeleteLegacyRequest{
        TeamID: 968205,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsExternalIdpGroupInfoForOrg

Displays information about the specific group's usage.  Provides a list of the group's external members as well as a list of teams that this group is connected to.

You can manage team membership with your identity provider using Enterprise Managed Users for GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/enterprise-server@3.8/github/getting-started-with-github/githubs-products)" in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#external-idp-group-info-for-an-organization>

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
    res, err := s.Teams.TeamsExternalIdpGroupInfoForOrg(ctx, operations.TeamsExternalIdpGroupInfoForOrgRequest{
        GroupID: 611792,
        Org: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExternalGroup != nil {
        // handle response
    }
}
```

## TeamsGetByName

Gets a team using the team's `slug`. To create the `slug`, GitHub Enterprise Server replaces special characters in the `name` string, changes all words to lowercase, and replaces spaces with a `-` separator. For example, `"My TEam Näme"` would become `my-team-name`.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#get-a-team-by-name>

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
    res, err := s.Teams.TeamsGetByName(ctx, operations.TeamsGetByNameRequest{
        Org: "occaecati",
        TeamSlug: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamFull != nil {
        // handle response
    }
}
```

## TeamsGetDiscussionCommentInOrg

Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#get-a-discussion-comment>

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
    res, err := s.Teams.TeamsGetDiscussionCommentInOrg(ctx, operations.TeamsGetDiscussionCommentInOrgRequest{
        CommentNumber: 771289,
        DiscussionNumber: 325855,
        Org: "quos",
        TeamSlug: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussionComment != nil {
        // handle response
    }
}
```

## ~~TeamsGetDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion comment](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#get-a-discussion-comment) endpoint.

Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#get-a-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsGetDiscussionCommentLegacy(ctx, operations.TeamsGetDiscussionCommentLegacyRequest{
        CommentNumber: 559937,
        DiscussionNumber: 28362,
        TeamID: 591774,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussionComment != nil {
        // handle response
    }
}
```

## TeamsGetDiscussionInOrg

Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#get-a-discussion>

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
    res, err := s.Teams.TeamsGetDiscussionInOrg(ctx, operations.TeamsGetDiscussionInOrgRequest{
        DiscussionNumber: 559248,
        Org: "ipsum",
        TeamSlug: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussion != nil {
        // handle response
    }
}
```

## ~~TeamsGetDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#get-a-discussion) endpoint.

Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#get-a-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsGetDiscussionLegacy(ctx, operations.TeamsGetDiscussionLegacyRequest{
        DiscussionNumber: 683490,
        TeamID: 704732,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussion != nil {
        // handle response
    }
}
```

## ~~TeamsGetLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the [Get a team by name](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#get-a-team-by-name) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams/#get-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsGetLegacy(ctx, operations.TeamsGetLegacyRequest{
        TeamID: 983060,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamFull != nil {
        // handle response
    }
}
```

## ~~TeamsGetMemberLegacy~~

The "Get team member" endpoint (described below) is deprecated.

We recommend using the [Get team membership for a user](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.

To list members in a team, the team must be visible to the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#get-team-member-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsGetMemberLegacy(ctx, operations.TeamsGetMemberLegacyRequest{
        TeamID: 622968,
        Username: "Tiara95",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsGetMembershipForUserInOrg

Team members will include the members of child teams.

To get a user's membership with a team, the team must be visible to the authenticated user.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/memberships/{username}`.

**Note:**
The response contains the `state` of the membership and the member's `role`.

The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see see [Create a team](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#create-a-team).

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#get-team-membership-for-a-user>

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
    res, err := s.Teams.TeamsGetMembershipForUserInOrg(ctx, operations.TeamsGetMembershipForUserInOrgRequest{
        Org: "voluptatibus",
        TeamSlug: "assumenda",
        Username: "Richmond.Mohr97",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamMembership != nil {
        // handle response
    }
}
```

## ~~TeamsGetMembershipForUserLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get team membership for a user](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#get-team-membership-for-a-user) endpoint.

Team members will include the members of child teams.

To get a user's membership with a team, the team must be visible to the authenticated user.

**Note:**
The response contains the `state` of the membership and the member's `role`.

The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#create-a-team).

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#get-team-membership-for-a-user-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsGetMembershipForUserLegacy(ctx, operations.TeamsGetMembershipForUserLegacyRequest{
        TeamID: 13316,
        Username: "Jamey_Moen",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamMembership != nil {
        // handle response
    }
}
```

## TeamsLinkExternalIdpGroupToTeamForOrg

Creates a connection between a team and an external group.  Only one external group can be linked to a team.

You can manage team membership with your identity provider using Enterprise Managed Users for GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/enterprise-server@3.8/github/getting-started-with-github/githubs-products)" in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#link-external-idp-group-team-connection>

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
    res, err := s.Teams.TeamsLinkExternalIdpGroupToTeamForOrg(ctx, operations.TeamsLinkExternalIdpGroupToTeamForOrgRequest{
        RequestBody: operations.TeamsLinkExternalIdpGroupToTeamForOrgRequestBody{
            GroupID: 1,
        },
        Org: "modi",
        TeamSlug: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExternalGroup != nil {
        // handle response
    }
}
```

## TeamsList

Lists all teams in an organization that are visible to the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#list-teams>

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
    res, err := s.Teams.TeamsList(ctx, operations.TeamsListRequest{
        Org: "neque",
        Page: sdk.Int64(340604),
        PerPage: sdk.Int64(448407),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## TeamsListChildInOrg

Lists the child teams of the team specified by `{team_slug}`.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/teams`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#list-child-teams>

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
    res, err := s.Teams.TeamsListChildInOrg(ctx, operations.TeamsListChildInOrgRequest{
        Org: "sed",
        Page: sdk.Int64(250621),
        PerPage: sdk.Int64(784059),
        TeamSlug: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## ~~TeamsListChildLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List child teams`](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#list-child-teams) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams/#list-child-teams-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsListChildLegacy(ctx, operations.TeamsListChildLegacyRequest{
        Page: sdk.Int64(743938),
        PerPage: sdk.Int64(58463),
        TeamID: 967047,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## TeamsListDiscussionCommentsInOrg

List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#list-discussion-comments>

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
    res, err := s.Teams.TeamsListDiscussionCommentsInOrg(ctx, operations.TeamsListDiscussionCommentsInOrgRequest{
        Direction: shared.DirectionEnumAsc.ToPointer(),
        DiscussionNumber: 874843,
        Org: "eos",
        Page: sdk.Int64(555663),
        PerPage: sdk.Int64(98578),
        TeamSlug: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussionComments != nil {
        // handle response
    }
}
```

## ~~TeamsListDiscussionCommentsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List discussion comments](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#list-discussion-comments) endpoint.

List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#list-discussion-comments-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsListDiscussionCommentsLegacy(ctx, operations.TeamsListDiscussionCommentsLegacyRequest{
        Direction: shared.DirectionEnumDesc.ToPointer(),
        DiscussionNumber: 483501,
        Page: sdk.Int64(854800),
        PerPage: sdk.Int64(313695),
        TeamID: 435713,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussionComments != nil {
        // handle response
    }
}
```

## TeamsListDiscussionsInOrg

List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#list-discussions>

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
    res, err := s.Teams.TeamsListDiscussionsInOrg(ctx, operations.TeamsListDiscussionsInOrgRequest{
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Org: "modi",
        Page: sdk.Int64(301701),
        PerPage: sdk.Int64(882157),
        Pinned: sdk.String("nulla"),
        TeamSlug: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussions != nil {
        // handle response
    }
}
```

## ~~TeamsListDiscussionsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List discussions`](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#list-discussions) endpoint.

List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#list-discussions-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsListDiscussionsLegacy(ctx, operations.TeamsListDiscussionsLegacyRequest{
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(505799),
        PerPage: sdk.Int64(315465),
        TeamID: 658125,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussions != nil {
        // handle response
    }
}
```

## TeamsListExternalIdpGroupsForOrg

Lists external groups available in an organization. You can query the groups using the `display_name` parameter, only groups with a `group_name` containing the text provided in the `display_name` parameter will be returned.  You can also limit your page results using the `per_page` parameter. GitHub Enterprise Server generates a url-encoded `page` token using a cursor value for where the next page begins. For more information on cursor pagination, see "[Offset and Cursor Pagination explained](https://dev.to/jackmarchant/offset-and-cursor-pagination-explained-b89)."

You can manage team membership with your identity provider using Enterprise Managed Users for GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/enterprise-server@3.8/github/getting-started-with-github/githubs-products)" in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#list-external-idp-groups-for-an-organization>

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
    res, err := s.Teams.TeamsListExternalIdpGroupsForOrg(ctx, operations.TeamsListExternalIdpGroupsForOrgRequest{
        DisplayName: sdk.String("unde"),
        Org: "quae",
        Page: sdk.Int64(430181),
        PerPage: sdk.Int64(341405),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExternalGroups != nil {
        // handle response
    }
}
```

## TeamsListForAuthenticatedUser

List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#list-teams-for-the-authenticated-user>

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
    res, err := s.Teams.TeamsListForAuthenticatedUser(ctx, operations.TeamsListForAuthenticatedUserRequest{
        Page: sdk.Int64(909093),
        PerPage: sdk.Int64(389630),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamFulls != nil {
        // handle response
    }
}
```

## TeamsListLinkedExternalIdpGroupsToTeamForOrg

Lists a connection between a team and an external group.

You can manage team membership with your identity provider using Enterprise Managed Users for GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/enterprise-server@3.8/github/getting-started-with-github/githubs-products)" in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#list-external-idp-group-team-connection>

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
    res, err := s.Teams.TeamsListLinkedExternalIdpGroupsToTeamForOrg(ctx, operations.TeamsListLinkedExternalIdpGroupsToTeamForOrgRequest{
        Org: "ratione",
        TeamSlug: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExternalGroups != nil {
        // handle response
    }
}
```

## TeamsListMembersInOrg

Team members will include the members of child teams.

To list members in a team, the team must be visible to the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#list-team-members>

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
    res, err := s.Teams.TeamsListMembersInOrg(ctx, operations.TeamsListMembersInOrgRequest{
        Org: "quidem",
        Page: sdk.Int64(848649),
        PerPage: sdk.Int64(970376),
        Role: operations.TeamsListMembersInOrgRoleEnumAll.ToPointer(),
        TeamSlug: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## ~~TeamsListMembersLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team members`](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#list-team-members) endpoint.

Team members will include the members of child teams.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#list-team-members-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsListMembersLegacy(ctx, operations.TeamsListMembersLegacyRequest{
        Page: sdk.Int64(9777),
        PerPage: sdk.Int64(201966),
        Role: operations.TeamsListMembersLegacyRoleEnumMember.ToPointer(),
        TeamID: 693724,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## TeamsListProjectsInOrg

Lists the organization projects for a team.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#list-team-projects>

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
    res, err := s.Teams.TeamsListProjectsInOrg(ctx, operations.TeamsListProjectsInOrgRequest{
        Org: "voluptas",
        Page: sdk.Int64(779154),
        PerPage: sdk.Int64(512017),
        TeamSlug: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamProjects != nil {
        // handle response
    }
}
```

## ~~TeamsListProjectsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team projects`](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#list-team-projects) endpoint.

Lists the organization projects for a team.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams/#list-team-projects-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsListProjectsLegacy(ctx, operations.TeamsListProjectsLegacyRequest{
        Page: sdk.Int64(606989),
        PerPage: sdk.Int64(609687),
        TeamID: 144397,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamProjects != nil {
        // handle response
    }
}
```

## TeamsListReposInOrg

Lists a team's repositories visible to the authenticated user.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#list-team-repositories>

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
    res, err := s.Teams.TeamsListReposInOrg(ctx, operations.TeamsListReposInOrgRequest{
        Org: "dolorem",
        Page: sdk.Int64(696291),
        PerPage: sdk.Int64(476614),
        TeamSlug: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MinimalRepositories != nil {
        // handle response
    }
}
```

## ~~TeamsListReposLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List team repositories](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#list-team-repositories) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams/#list-team-repositories-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsListReposLegacy(ctx, operations.TeamsListReposLegacyRequest{
        Page: sdk.Int64(112071),
        PerPage: sdk.Int64(223717),
        TeamID: 321422,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MinimalRepositories != nil {
        // handle response
    }
}
```

## ~~TeamsRemoveMemberLegacy~~

The "Remove team member" endpoint (described below) is deprecated.

We recommend using the [Remove team membership for a user](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.8/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/enterprise-server@3.8/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#remove-team-member-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsRemoveMemberLegacy(ctx, operations.TeamsRemoveMemberLegacyRequest{
        TeamID: 539886,
        Username: "Edd_Zboncak",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsRemoveMembershipForUserInOrg

To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.8/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/enterprise-server@3.8/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/memberships/{username}`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#remove-team-membership-for-a-user>

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
    res, err := s.Teams.TeamsRemoveMembershipForUserInOrg(ctx, operations.TeamsRemoveMembershipForUserInOrgRequest{
        Org: "itaque",
        TeamSlug: "et",
        Username: "Chet_Rutherford",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~TeamsRemoveMembershipForUserLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove team membership for a user](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#remove-team-membership-for-a-user) endpoint.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.8/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/enterprise-server@3.8/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#remove-team-membership-for-a-user-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsRemoveMembershipForUserLegacy(ctx, operations.TeamsRemoveMembershipForUserLegacyRequest{
        TeamID: 615597,
        Username: "Berta.West",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsRemoveProjectInOrg

Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. This endpoint removes the project from the team, but does not delete the project.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/projects/{project_id}`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#remove-a-project-from-a-team>

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
    res, err := s.Teams.TeamsRemoveProjectInOrg(ctx, operations.TeamsRemoveProjectInOrgRequest{
        Org: "eligendi",
        ProjectID: 917877,
        TeamSlug: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~TeamsRemoveProjectLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a project from a team](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#remove-a-project-from-a-team) endpoint.

Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams/#remove-a-project-from-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsRemoveProjectLegacy(ctx, operations.TeamsRemoveProjectLegacyRequest{
        ProjectID: 81053,
        TeamID: 356256,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsRemoveRepoInOrg

If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. This does not delete the repository, it just removes it from the team.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams/#remove-a-repository-from-a-team>

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
    res, err := s.Teams.TeamsRemoveRepoInOrg(ctx, operations.TeamsRemoveRepoInOrgRequest{
        Org: "iusto",
        Owner: "inventore",
        Repo: "voluptate",
        TeamSlug: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~TeamsRemoveRepoLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a repository from a team](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#remove-a-repository-from-a-team) endpoint.

If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams/#remove-a-repository-from-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsRemoveRepoLegacy(ctx, operations.TeamsRemoveRepoLegacyRequest{
        Owner: "dolorem",
        Repo: "eaque",
        TeamID: 347460,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsUnlinkExternalIdpGroupFromTeamForOrg

Deletes a connection between a team and an external group.

You can manage team membership with your IdP using Enterprise Managed Users for GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.8/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#unlink-external-idp-group-team-connection>

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
    res, err := s.Teams.TeamsUnlinkExternalIdpGroupFromTeamForOrg(ctx, operations.TeamsUnlinkExternalIdpGroupFromTeamForOrgRequest{
        Org: "amet",
        TeamSlug: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsUpdateDiscussionCommentInOrg

Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#update-a-discussion-comment>

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
    res, err := s.Teams.TeamsUpdateDiscussionCommentInOrg(ctx, operations.TeamsUpdateDiscussionCommentInOrgRequest{
        RequestBody: operations.TeamsUpdateDiscussionCommentInOrgRequestBody{
            Body: "voluptate",
        },
        CommentNumber: 865212,
        DiscussionNumber: 791421,
        Org: "a",
        TeamSlug: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussionComment != nil {
        // handle response
    }
}
```

## ~~TeamsUpdateDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion comment](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#update-a-discussion-comment) endpoint.

Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#update-a-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsUpdateDiscussionCommentLegacy(ctx, operations.TeamsUpdateDiscussionCommentLegacyRequest{
        RequestBody: operations.TeamsUpdateDiscussionCommentLegacyRequestBody{
            Body: "totam",
        },
        CommentNumber: 587539,
        DiscussionNumber: 870100,
        TeamID: 986594,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussionComment != nil {
        // handle response
    }
}
```

## TeamsUpdateDiscussionInOrg

Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#update-a-discussion>

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
    res, err := s.Teams.TeamsUpdateDiscussionInOrg(ctx, operations.TeamsUpdateDiscussionInOrgRequest{
        RequestBody: &operations.TeamsUpdateDiscussionInOrgRequestBody{
            Body: sdk.String("omnis"),
            Title: sdk.String("Ms."),
        },
        DiscussionNumber: 349087,
        Org: "voluptates",
        TeamSlug: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussion != nil {
        // handle response
    }
}
```

## ~~TeamsUpdateDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#update-a-discussion) endpoint.

Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#update-a-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsUpdateDiscussionLegacy(ctx, operations.TeamsUpdateDiscussionLegacyRequest{
        RequestBody: &operations.TeamsUpdateDiscussionLegacyRequestBody{
            Body: sdk.String("quis"),
            Title: sdk.String("Ms."),
        },
        DiscussionNumber: 426481,
        TeamID: 522824,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussion != nil {
        // handle response
    }
}
```

## TeamsUpdateInOrg

To edit a team, the authenticated user must either be an organization owner or a team maintainer.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams#update-a-team>

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
    res, err := s.Teams.TeamsUpdateInOrg(ctx, operations.TeamsUpdateInOrgRequest{
        RequestBody: &operations.TeamsUpdateInOrgRequestBody{
            Description: sdk.String("aliquid"),
            Name: sdk.String("Katrina Considine"),
            ParentTeamID: sdk.Int64(767778),
            Permission: operations.TeamsUpdateInOrgRequestBodyPermissionEnumPull.ToPointer(),
            Privacy: operations.TeamsUpdateInOrgRequestBodyPrivacyEnumClosed.ToPointer(),
        },
        Org: "temporibus",
        TeamSlug: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamFull != nil {
        // handle response
    }
}
```

## ~~TeamsUpdateLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a team](https://docs.github.com/enterprise-server@3.8/rest/reference/teams#update-a-team) endpoint.

To edit a team, the authenticated user must either be an organization owner or a team maintainer.

**Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/teams/#update-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Teams.TeamsUpdateLegacy(ctx, operations.TeamsUpdateLegacyRequest{
        RequestBody: operations.TeamsUpdateLegacyRequestBody{
            Description: sdk.String("minima"),
            Name: "Dr. Jack Buckridge",
            ParentTeamID: sdk.Int64(672273),
            Permission: operations.TeamsUpdateLegacyRequestBodyPermissionEnumPull.ToPointer(),
            Privacy: operations.TeamsUpdateLegacyRequestBodyPrivacyEnumSecret.ToPointer(),
        },
        TeamID: 140909,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamFull != nil {
        // handle response
    }
}
```
