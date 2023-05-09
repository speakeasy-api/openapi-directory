# teams

## Overview

Interact with GitHub Teams.

### Available Operations

* [~~teamsAddMemberLegacy~~](#teamsaddmemberlegacy) - Add team member (Legacy) :warning: **Deprecated**
* [teamsAddOrUpdateMembershipForUserInOrg](#teamsaddorupdatemembershipforuserinorg) - Add or update team membership for a user
* [~~teamsAddOrUpdateMembershipForUserLegacy~~](#teamsaddorupdatemembershipforuserlegacy) - Add or update team membership for a user (Legacy) :warning: **Deprecated**
* [teamsAddOrUpdateProjectPermissionsInOrg](#teamsaddorupdateprojectpermissionsinorg) - Add or update team project permissions
* [~~teamsAddOrUpdateProjectPermissionsLegacy~~](#teamsaddorupdateprojectpermissionslegacy) - Add or update team project permissions (Legacy) :warning: **Deprecated**
* [teamsAddOrUpdateRepoPermissionsInOrg](#teamsaddorupdaterepopermissionsinorg) - Add or update team repository permissions
* [~~teamsAddOrUpdateRepoPermissionsLegacy~~](#teamsaddorupdaterepopermissionslegacy) - Add or update team repository permissions (Legacy) :warning: **Deprecated**
* [teamsCheckPermissionsForProjectInOrg](#teamscheckpermissionsforprojectinorg) - Check team permissions for a project
* [~~teamsCheckPermissionsForProjectLegacy~~](#teamscheckpermissionsforprojectlegacy) - Check team permissions for a project (Legacy) :warning: **Deprecated**
* [teamsCheckPermissionsForRepoInOrg](#teamscheckpermissionsforrepoinorg) - Check team permissions for a repository
* [~~teamsCheckPermissionsForRepoLegacy~~](#teamscheckpermissionsforrepolegacy) - Check team permissions for a repository (Legacy) :warning: **Deprecated**
* [teamsCreate](#teamscreate) - Create a team
* [teamsCreateDiscussionCommentInOrg](#teamscreatediscussioncommentinorg) - Create a discussion comment
* [~~teamsCreateDiscussionCommentLegacy~~](#teamscreatediscussioncommentlegacy) - Create a discussion comment (Legacy) :warning: **Deprecated**
* [teamsCreateDiscussionInOrg](#teamscreatediscussioninorg) - Create a discussion
* [~~teamsCreateDiscussionLegacy~~](#teamscreatediscussionlegacy) - Create a discussion (Legacy) :warning: **Deprecated**
* [teamsDeleteDiscussionCommentInOrg](#teamsdeletediscussioncommentinorg) - Delete a discussion comment
* [~~teamsDeleteDiscussionCommentLegacy~~](#teamsdeletediscussioncommentlegacy) - Delete a discussion comment (Legacy) :warning: **Deprecated**
* [teamsDeleteDiscussionInOrg](#teamsdeletediscussioninorg) - Delete a discussion
* [~~teamsDeleteDiscussionLegacy~~](#teamsdeletediscussionlegacy) - Delete a discussion (Legacy) :warning: **Deprecated**
* [teamsDeleteInOrg](#teamsdeleteinorg) - Delete a team
* [~~teamsDeleteLegacy~~](#teamsdeletelegacy) - Delete a team (Legacy) :warning: **Deprecated**
* [teamsGetByName](#teamsgetbyname) - Get a team by name
* [teamsGetDiscussionCommentInOrg](#teamsgetdiscussioncommentinorg) - Get a discussion comment
* [~~teamsGetDiscussionCommentLegacy~~](#teamsgetdiscussioncommentlegacy) - Get a discussion comment (Legacy) :warning: **Deprecated**
* [teamsGetDiscussionInOrg](#teamsgetdiscussioninorg) - Get a discussion
* [~~teamsGetDiscussionLegacy~~](#teamsgetdiscussionlegacy) - Get a discussion (Legacy) :warning: **Deprecated**
* [~~teamsGetLegacy~~](#teamsgetlegacy) - Get a team (Legacy) :warning: **Deprecated**
* [~~teamsGetMemberLegacy~~](#teamsgetmemberlegacy) - Get team member (Legacy) :warning: **Deprecated**
* [teamsGetMembershipForUserInOrg](#teamsgetmembershipforuserinorg) - Get team membership for a user
* [~~teamsGetMembershipForUserLegacy~~](#teamsgetmembershipforuserlegacy) - Get team membership for a user (Legacy) :warning: **Deprecated**
* [teamsList](#teamslist) - List teams
* [teamsListChildInOrg](#teamslistchildinorg) - List child teams
* [~~teamsListChildLegacy~~](#teamslistchildlegacy) - List child teams (Legacy) :warning: **Deprecated**
* [teamsListDiscussionCommentsInOrg](#teamslistdiscussioncommentsinorg) - List discussion comments
* [~~teamsListDiscussionCommentsLegacy~~](#teamslistdiscussioncommentslegacy) - List discussion comments (Legacy) :warning: **Deprecated**
* [teamsListDiscussionsInOrg](#teamslistdiscussionsinorg) - List discussions
* [~~teamsListDiscussionsLegacy~~](#teamslistdiscussionslegacy) - List discussions (Legacy) :warning: **Deprecated**
* [teamsListForAuthenticatedUser](#teamslistforauthenticateduser) - List teams for the authenticated user
* [teamsListMembersInOrg](#teamslistmembersinorg) - List team members
* [~~teamsListMembersLegacy~~](#teamslistmemberslegacy) - List team members (Legacy) :warning: **Deprecated**
* [teamsListProjectsInOrg](#teamslistprojectsinorg) - List team projects
* [~~teamsListProjectsLegacy~~](#teamslistprojectslegacy) - List team projects (Legacy) :warning: **Deprecated**
* [teamsListReposInOrg](#teamslistreposinorg) - List team repositories
* [~~teamsListReposLegacy~~](#teamslistreposlegacy) - List team repositories (Legacy) :warning: **Deprecated**
* [~~teamsRemoveMemberLegacy~~](#teamsremovememberlegacy) - Remove team member (Legacy) :warning: **Deprecated**
* [teamsRemoveMembershipForUserInOrg](#teamsremovemembershipforuserinorg) - Remove team membership for a user
* [~~teamsRemoveMembershipForUserLegacy~~](#teamsremovemembershipforuserlegacy) - Remove team membership for a user (Legacy) :warning: **Deprecated**
* [teamsRemoveProjectInOrg](#teamsremoveprojectinorg) - Remove a project from a team
* [~~teamsRemoveProjectLegacy~~](#teamsremoveprojectlegacy) - Remove a project from a team (Legacy) :warning: **Deprecated**
* [teamsRemoveRepoInOrg](#teamsremoverepoinorg) - Remove a repository from a team
* [~~teamsRemoveRepoLegacy~~](#teamsremoverepolegacy) - Remove a repository from a team (Legacy) :warning: **Deprecated**
* [teamsUpdateDiscussionCommentInOrg](#teamsupdatediscussioncommentinorg) - Update a discussion comment
* [~~teamsUpdateDiscussionCommentLegacy~~](#teamsupdatediscussioncommentlegacy) - Update a discussion comment (Legacy) :warning: **Deprecated**
* [teamsUpdateDiscussionInOrg](#teamsupdatediscussioninorg) - Update a discussion
* [~~teamsUpdateDiscussionLegacy~~](#teamsupdatediscussionlegacy) - Update a discussion (Legacy) :warning: **Deprecated**
* [teamsUpdateInOrg](#teamsupdateinorg) - Update a team
* [~~teamsUpdateLegacy~~](#teamsupdatelegacy) - Update a team (Legacy) :warning: **Deprecated**

## ~~teamsAddMemberLegacy~~

The "Add team member" endpoint (described below) is deprecated.

We recommend using the [Add or update team membership for a user](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.4/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/enterprise-server@3.4/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.4/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#add-team-member-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsAddMemberLegacyRequest;
import org.openapis.openapi.models.operations.TeamsAddMemberLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsAddMemberLegacyRequest req = new TeamsAddMemberLegacyRequest(711615L, "hic");            

            TeamsAddMemberLegacyResponse res = sdk.teams.teamsAddMemberLegacy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsAddOrUpdateMembershipForUserInOrg

Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.4/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/enterprise-server@3.4/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the "pending" state until the person accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team.

If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/memberships/{username}`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#add-or-update-team-membership-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateMembershipForUserInOrgRequest;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateMembershipForUserInOrgRequestBody;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateMembershipForUserInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsAddOrUpdateMembershipForUserInOrgRequest req = new TeamsAddOrUpdateMembershipForUserInOrgRequest("excepturi", "aliquid", "sed") {{
                requestBody = new TeamsAddOrUpdateMembershipForUserInOrgRequestBody() {{
                    role = TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum.MEMBER;
                }};;
            }};            

            TeamsAddOrUpdateMembershipForUserInOrgResponse res = sdk.teams.teamsAddOrUpdateMembershipForUserInOrg(req);

            if (res.teamMembership != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsAddOrUpdateMembershipForUserLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team membership for a user](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.4/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/enterprise-server@3.4/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.

If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#add-or-update-team-membership-for-a-user-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateMembershipForUserLegacyRequest;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateMembershipForUserLegacyRequestBody;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateMembershipForUserLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsAddOrUpdateMembershipForUserLegacyRequest req = new TeamsAddOrUpdateMembershipForUserLegacyRequest(627341L, "ea") {{
                requestBody = new TeamsAddOrUpdateMembershipForUserLegacyRequestBody() {{
                    role = TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum.MAINTAINER;
                }};;
            }};            

            TeamsAddOrUpdateMembershipForUserLegacyResponse res = sdk.teams.teamsAddOrUpdateMembershipForUserLegacy(req);

            if (res.teamMembership != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsAddOrUpdateProjectPermissionsInOrg

Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/projects/{project_id}`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#add-or-update-team-project-permissions>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateProjectPermissionsInOrgRequest;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateProjectPermissionsInOrgRequestBody;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateProjectPermissionsInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsAddOrUpdateProjectPermissionsInOrgRequest req = new TeamsAddOrUpdateProjectPermissionsInOrgRequest("dolore", 945419L, "dignissimos") {{
                requestBody = new TeamsAddOrUpdateProjectPermissionsInOrgRequestBody() {{
                    permission = TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum.WRITE;
                }};;
            }};            

            TeamsAddOrUpdateProjectPermissionsInOrgResponse res = sdk.teams.teamsAddOrUpdateProjectPermissionsInOrg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsAddOrUpdateProjectPermissionsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team project permissions](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#add-or-update-team-project-permissions) endpoint.

Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams/#add-or-update-team-project-permissions-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateProjectPermissionsLegacyRequest;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateProjectPermissionsLegacyRequestBody;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateProjectPermissionsLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsAddOrUpdateProjectPermissionsLegacyRequest req = new TeamsAddOrUpdateProjectPermissionsLegacyRequest(657044L, 512488L) {{
                requestBody = new TeamsAddOrUpdateProjectPermissionsLegacyRequestBody() {{
                    permission = TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum.WRITE;
                }};;
            }};            

            TeamsAddOrUpdateProjectPermissionsLegacyResponse res = sdk.teams.teamsAddOrUpdateProjectPermissionsLegacy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsAddOrUpdateRepoPermissionsInOrg

To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.4/rest/overview/resources-in-the-rest-api#http-verbs)."

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.

For more information about the permission levels, see "[Repository permission levels for an organization](https://docs.github.com/enterprise-server@3.4/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)".

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams/#add-or-update-team-repository-permissions>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateRepoPermissionsInOrgRequest;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateRepoPermissionsInOrgRequestBody;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateRepoPermissionsInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsAddOrUpdateRepoPermissionsInOrgRequest req = new TeamsAddOrUpdateRepoPermissionsInOrgRequest("eveniet", "earum", "velit", "officiis") {{
                requestBody = new TeamsAddOrUpdateRepoPermissionsInOrgRequestBody() {{
                    permission = "eius";
                }};;
            }};            

            TeamsAddOrUpdateRepoPermissionsInOrgResponse res = sdk.teams.teamsAddOrUpdateRepoPermissionsInOrg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsAddOrUpdateRepoPermissionsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Add or update team repository permissions](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#add-or-update-team-repository-permissions)" endpoint.

To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.4/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#add-or-update-team-repository-permissions-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateRepoPermissionsLegacyRequest;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateRepoPermissionsLegacyRequestBody;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateRepoPermissionsLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsAddOrUpdateRepoPermissionsLegacyRequest req = new TeamsAddOrUpdateRepoPermissionsLegacyRequest("rerum", "itaque", 489685L) {{
                requestBody = new TeamsAddOrUpdateRepoPermissionsLegacyRequestBody() {{
                    permission = TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum.PUSH;
                }};;
            }};            

            TeamsAddOrUpdateRepoPermissionsLegacyResponse res = sdk.teams.teamsAddOrUpdateRepoPermissionsLegacy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsCheckPermissionsForProjectInOrg

Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects/{project_id}`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#check-team-permissions-for-a-project>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsCheckPermissionsForProjectInOrgRequest;
import org.openapis.openapi.models.operations.TeamsCheckPermissionsForProjectInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsCheckPermissionsForProjectInOrgRequest req = new TeamsCheckPermissionsForProjectInOrgRequest("explicabo", 771632L, "aliquid");            

            TeamsCheckPermissionsForProjectInOrgResponse res = sdk.teams.teamsCheckPermissionsForProjectInOrg(req);

            if (res.teamProject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsCheckPermissionsForProjectLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a project](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#check-team-permissions-for-a-project) endpoint.

Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams/#check-team-permissions-for-a-project-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsCheckPermissionsForProjectLegacyRequest;
import org.openapis.openapi.models.operations.TeamsCheckPermissionsForProjectLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsCheckPermissionsForProjectLegacyRequest req = new TeamsCheckPermissionsForProjectLegacyRequest(339843L, 704402L);            

            TeamsCheckPermissionsForProjectLegacyResponse res = sdk.teams.teamsCheckPermissionsForProjectLegacy(req);

            if (res.teamProject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsCheckPermissionsForRepoInOrg

Checks whether a team has `admin`, `push`, `maintain`, `triage`, or `pull` permission for a repository. Repositories inherited through a parent team will also be checked.

You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@3.4/rest/overview/media-types/) via the `application/vnd.github.v3.repository+json` accept header.

If a team doesn't have permission for the repository, you will receive a `404 Not Found` response status.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams/#check-team-permissions-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsCheckPermissionsForRepoInOrgRequest;
import org.openapis.openapi.models.operations.TeamsCheckPermissionsForRepoInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsCheckPermissionsForRepoInOrgRequest req = new TeamsCheckPermissionsForRepoInOrgRequest("ipsum", "ut", "quaerat", "architecto");            

            TeamsCheckPermissionsForRepoInOrgResponse res = sdk.teams.teamsCheckPermissionsForRepoInOrg(req);

            if (res.teamRepository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsCheckPermissionsForRepoLegacy~~

**Note**: Repositories inherited through a parent team will also be checked.

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a repository](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#check-team-permissions-for-a-repository) endpoint.

You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@3.4/rest/overview/media-types/) via the `Accept` header:

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams/#check-team-permissions-for-a-repository-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsCheckPermissionsForRepoLegacyRequest;
import org.openapis.openapi.models.operations.TeamsCheckPermissionsForRepoLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsCheckPermissionsForRepoLegacyRequest req = new TeamsCheckPermissionsForRepoLegacyRequest("praesentium", "eveniet", 221781L);            

            TeamsCheckPermissionsForRepoLegacyResponse res = sdk.teams.teamsCheckPermissionsForRepoLegacy(req);

            if (res.teamRepository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsCreate

To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://docs.github.com/enterprise-server@3.4/articles/setting-team-creation-permissions-in-your-organization)."

When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://docs.github.com/enterprise-server@3.4/github/setting-up-and-managing-organizations-and-teams/about-teams)".

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#create-a-team>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsCreateRequest;
import org.openapis.openapi.models.operations.TeamsCreateRequestBody;
import org.openapis.openapi.models.operations.TeamsCreateRequestBodyPermissionEnum;
import org.openapis.openapi.models.operations.TeamsCreateRequestBodyPrivacyEnum;
import org.openapis.openapi.models.operations.TeamsCreateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsCreateRequest req = new TeamsCreateRequest(                new TeamsCreateRequestBody("expedita") {{
                                description = "libero";
                                ldapDn = "iste";
                                maintainers = new String[]{{
                                    add("minus"),
                                }};
                                parentTeamId = 553315L;
                                permission = TeamsCreateRequestBodyPermissionEnum.PUSH;
                                privacy = TeamsCreateRequestBodyPrivacyEnum.CLOSED;
                                repoNames = new String[]{{
                                    add("enim"),
                                    add("accusamus"),
                                }};
                            }};, "aperiam");            

            TeamsCreateResponse res = sdk.teams.teamsCreate(req);

            if (res.teamFull != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsCreateDiscussionCommentInOrg

Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.4/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.4/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.4/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#create-a-discussion-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsCreateDiscussionCommentInOrgRequest;
import org.openapis.openapi.models.operations.TeamsCreateDiscussionCommentInOrgRequestBody;
import org.openapis.openapi.models.operations.TeamsCreateDiscussionCommentInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsCreateDiscussionCommentInOrgRequest req = new TeamsCreateDiscussionCommentInOrgRequest(                new TeamsCreateDiscussionCommentInOrgRequestBody("voluptates");, 512310L, "tempora", "quae");            

            TeamsCreateDiscussionCommentInOrgResponse res = sdk.teams.teamsCreateDiscussionCommentInOrg(req);

            if (res.teamDiscussionComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsCreateDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Create a discussion comment](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#create-a-discussion-comment) endpoint.

Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.4/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.4/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.4/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#create-a-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsCreateDiscussionCommentLegacyRequest;
import org.openapis.openapi.models.operations.TeamsCreateDiscussionCommentLegacyRequestBody;
import org.openapis.openapi.models.operations.TeamsCreateDiscussionCommentLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsCreateDiscussionCommentLegacyRequest req = new TeamsCreateDiscussionCommentLegacyRequest(                new TeamsCreateDiscussionCommentLegacyRequestBody("omnis");, 848063L, 526584L);            

            TeamsCreateDiscussionCommentLegacyResponse res = sdk.teams.teamsCreateDiscussionCommentLegacy(req);

            if (res.teamDiscussionComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsCreateDiscussionInOrg

Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.4/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.4/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.4/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#create-a-discussion>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsCreateDiscussionInOrgRequest;
import org.openapis.openapi.models.operations.TeamsCreateDiscussionInOrgRequestBody;
import org.openapis.openapi.models.operations.TeamsCreateDiscussionInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsCreateDiscussionInOrgRequest req = new TeamsCreateDiscussionInOrgRequest(                new TeamsCreateDiscussionInOrgRequestBody("tenetur", "deleniti") {{
                                private_ = false;
                            }};, "modi", "earum");            

            TeamsCreateDiscussionInOrgResponse res = sdk.teams.teamsCreateDiscussionInOrg(req);

            if (res.teamDiscussion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsCreateDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create a discussion`](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#create-a-discussion) endpoint.

Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.4/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.4/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.4/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#create-a-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsCreateDiscussionLegacyRequest;
import org.openapis.openapi.models.operations.TeamsCreateDiscussionLegacyRequestBody;
import org.openapis.openapi.models.operations.TeamsCreateDiscussionLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsCreateDiscussionLegacyRequest req = new TeamsCreateDiscussionLegacyRequest(                new TeamsCreateDiscussionLegacyRequestBody("architecto", "aliquam") {{
                                private_ = false;
                            }};, 286726L);            

            TeamsCreateDiscussionLegacyResponse res = sdk.teams.teamsCreateDiscussionLegacy(req);

            if (res.teamDiscussion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsDeleteDiscussionCommentInOrg

Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#delete-a-discussion-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsDeleteDiscussionCommentInOrgRequest;
import org.openapis.openapi.models.operations.TeamsDeleteDiscussionCommentInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsDeleteDiscussionCommentInOrgRequest req = new TeamsDeleteDiscussionCommentInOrgRequest(983434L, 196646L, "saepe", "consequatur");            

            TeamsDeleteDiscussionCommentInOrgResponse res = sdk.teams.teamsDeleteDiscussionCommentInOrg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsDeleteDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a discussion comment](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#delete-a-discussion-comment) endpoint.

Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#delete-a-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsDeleteDiscussionCommentLegacyRequest;
import org.openapis.openapi.models.operations.TeamsDeleteDiscussionCommentLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsDeleteDiscussionCommentLegacyRequest req = new TeamsDeleteDiscussionCommentLegacyRequest(458723L, 891302L, 817454L);            

            TeamsDeleteDiscussionCommentLegacyResponse res = sdk.teams.teamsDeleteDiscussionCommentLegacy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsDeleteDiscussionInOrg

Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#delete-a-discussion>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsDeleteDiscussionInOrgRequest;
import org.openapis.openapi.models.operations.TeamsDeleteDiscussionInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsDeleteDiscussionInOrgRequest req = new TeamsDeleteDiscussionInOrgRequest(789016L, "cumque", "aliquam");            

            TeamsDeleteDiscussionInOrgResponse res = sdk.teams.teamsDeleteDiscussionInOrg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsDeleteDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Delete a discussion`](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#delete-a-discussion) endpoint.

Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#delete-a-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsDeleteDiscussionLegacyRequest;
import org.openapis.openapi.models.operations.TeamsDeleteDiscussionLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsDeleteDiscussionLegacyRequest req = new TeamsDeleteDiscussionLegacyRequest(677895L, 644827L);            

            TeamsDeleteDiscussionLegacyResponse res = sdk.teams.teamsDeleteDiscussionLegacy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsDeleteInOrg

To delete a team, the authenticated user must be an organization owner or team maintainer.

If you are an organization owner, deleting a parent team will delete all of its child teams as well.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#delete-a-team>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsDeleteInOrgRequest;
import org.openapis.openapi.models.operations.TeamsDeleteInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsDeleteInOrgRequest req = new TeamsDeleteInOrgRequest("ad", "reiciendis");            

            TeamsDeleteInOrgResponse res = sdk.teams.teamsDeleteInOrg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsDeleteLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a team](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#delete-a-team) endpoint.

To delete a team, the authenticated user must be an organization owner or team maintainer.

If you are an organization owner, deleting a parent team will delete all of its child teams as well.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams/#delete-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsDeleteLegacyRequest;
import org.openapis.openapi.models.operations.TeamsDeleteLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsDeleteLegacyRequest req = new TeamsDeleteLegacyRequest(196451L);            

            TeamsDeleteLegacyResponse res = sdk.teams.teamsDeleteLegacy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsGetByName

Gets a team using the team's `slug`. To create the `slug`, GitHub Enterprise Server replaces special characters in the `name` string, changes all words to lowercase, and replaces spaces with a `-` separator. For example, `"My TEam Näme"` would become `my-team-name`.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#get-a-team-by-name>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsGetByNameRequest;
import org.openapis.openapi.models.operations.TeamsGetByNameResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsGetByNameRequest req = new TeamsGetByNameRequest("porro", "laborum");            

            TeamsGetByNameResponse res = sdk.teams.teamsGetByName(req);

            if (res.teamFull != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsGetDiscussionCommentInOrg

Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#get-a-discussion-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsGetDiscussionCommentInOrgRequest;
import org.openapis.openapi.models.operations.TeamsGetDiscussionCommentInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsGetDiscussionCommentInOrgRequest req = new TeamsGetDiscussionCommentInOrgRequest(748973L, 842974L, "omnis", "aut");            

            TeamsGetDiscussionCommentInOrgResponse res = sdk.teams.teamsGetDiscussionCommentInOrg(req);

            if (res.teamDiscussionComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsGetDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion comment](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#get-a-discussion-comment) endpoint.

Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#get-a-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsGetDiscussionCommentLegacyRequest;
import org.openapis.openapi.models.operations.TeamsGetDiscussionCommentLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsGetDiscussionCommentLegacyRequest req = new TeamsGetDiscussionCommentLegacyRequest(369941L, 642804L, 584640L);            

            TeamsGetDiscussionCommentLegacyResponse res = sdk.teams.teamsGetDiscussionCommentLegacy(req);

            if (res.teamDiscussionComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsGetDiscussionInOrg

Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#get-a-discussion>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsGetDiscussionInOrgRequest;
import org.openapis.openapi.models.operations.TeamsGetDiscussionInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsGetDiscussionInOrgRequest req = new TeamsGetDiscussionInOrgRequest(442873L, "quia", "necessitatibus");            

            TeamsGetDiscussionInOrgResponse res = sdk.teams.teamsGetDiscussionInOrg(req);

            if (res.teamDiscussion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsGetDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#get-a-discussion) endpoint.

Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#get-a-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsGetDiscussionLegacyRequest;
import org.openapis.openapi.models.operations.TeamsGetDiscussionLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsGetDiscussionLegacyRequest req = new TeamsGetDiscussionLegacyRequest(37764L, 321473L);            

            TeamsGetDiscussionLegacyResponse res = sdk.teams.teamsGetDiscussionLegacy(req);

            if (res.teamDiscussion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsGetLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the [Get a team by name](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#get-a-team-by-name) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams/#get-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsGetLegacyRequest;
import org.openapis.openapi.models.operations.TeamsGetLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsGetLegacyRequest req = new TeamsGetLegacyRequest(392752L);            

            TeamsGetLegacyResponse res = sdk.teams.teamsGetLegacy(req);

            if (res.teamFull != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsGetMemberLegacy~~

The "Get team member" endpoint (described below) is deprecated.

We recommend using the [Get team membership for a user](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.

To list members in a team, the team must be visible to the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#get-team-member-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsGetMemberLegacyRequest;
import org.openapis.openapi.models.operations.TeamsGetMemberLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsGetMemberLegacyRequest req = new TeamsGetMemberLegacyRequest(474185L, "quia");            

            TeamsGetMemberLegacyResponse res = sdk.teams.teamsGetMemberLegacy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsGetMembershipForUserInOrg

Team members will include the members of child teams.

To get a user's membership with a team, the team must be visible to the authenticated user.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/memberships/{username}`.

**Note:**
The response contains the `state` of the membership and the member's `role`.

The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see see [Create a team](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#create-a-team).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#get-team-membership-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsGetMembershipForUserInOrgRequest;
import org.openapis.openapi.models.operations.TeamsGetMembershipForUserInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsGetMembershipForUserInOrgRequest req = new TeamsGetMembershipForUserInOrgRequest("laudantium", "sed", "odit");            

            TeamsGetMembershipForUserInOrgResponse res = sdk.teams.teamsGetMembershipForUserInOrg(req);

            if (res.teamMembership != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsGetMembershipForUserLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get team membership for a user](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#get-team-membership-for-a-user) endpoint.

Team members will include the members of child teams.

To get a user's membership with a team, the team must be visible to the authenticated user.

**Note:**
The response contains the `state` of the membership and the member's `role`.

The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#create-a-team).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#get-team-membership-for-a-user-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsGetMembershipForUserLegacyRequest;
import org.openapis.openapi.models.operations.TeamsGetMembershipForUserLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsGetMembershipForUserLegacyRequest req = new TeamsGetMembershipForUserLegacyRequest(479830L, "expedita");            

            TeamsGetMembershipForUserLegacyResponse res = sdk.teams.teamsGetMembershipForUserLegacy(req);

            if (res.teamMembership != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsList

Lists all teams in an organization that are visible to the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#list-teams>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListRequest;
import org.openapis.openapi.models.operations.TeamsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListRequest req = new TeamsListRequest("eos") {{
                page = 830477L;
                perPage = 199879L;
            }};            

            TeamsListResponse res = sdk.teams.teamsList(req);

            if (res.teams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsListChildInOrg

Lists the child teams of the team specified by `{team_slug}`.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/teams`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#list-child-teams>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListChildInOrgRequest;
import org.openapis.openapi.models.operations.TeamsListChildInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListChildInOrgRequest req = new TeamsListChildInOrgRequest("ipsa", "sint") {{
                page = 291389L;
                perPage = 457063L;
            }};            

            TeamsListChildInOrgResponse res = sdk.teams.teamsListChildInOrg(req);

            if (res.teams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsListChildLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List child teams`](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#list-child-teams) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams/#list-child-teams-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListChildLegacyRequest;
import org.openapis.openapi.models.operations.TeamsListChildLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListChildLegacyRequest req = new TeamsListChildLegacyRequest(38044L) {{
                page = 718119L;
                perPage = 956545L;
            }};            

            TeamsListChildLegacyResponse res = sdk.teams.teamsListChildLegacy(req);

            if (res.teams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsListDiscussionCommentsInOrg

List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#list-discussion-comments>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListDiscussionCommentsInOrgRequest;
import org.openapis.openapi.models.operations.TeamsListDiscussionCommentsInOrgResponse;
import org.openapis.openapi.models.shared.DirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListDiscussionCommentsInOrgRequest req = new TeamsListDiscussionCommentsInOrgRequest(463050L, "est", "aliquam") {{
                direction = DirectionEnum.DESC;
                page = 635868L;
                perPage = 531494L;
            }};            

            TeamsListDiscussionCommentsInOrgResponse res = sdk.teams.teamsListDiscussionCommentsInOrg(req);

            if (res.teamDiscussionComments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsListDiscussionCommentsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List discussion comments](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#list-discussion-comments) endpoint.

List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#list-discussion-comments-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListDiscussionCommentsLegacyRequest;
import org.openapis.openapi.models.operations.TeamsListDiscussionCommentsLegacyResponse;
import org.openapis.openapi.models.shared.DirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListDiscussionCommentsLegacyRequest req = new TeamsListDiscussionCommentsLegacyRequest(482628L, 802069L) {{
                direction = DirectionEnum.DESC;
                page = 374414L;
                perPage = 247767L;
            }};            

            TeamsListDiscussionCommentsLegacyResponse res = sdk.teams.teamsListDiscussionCommentsLegacy(req);

            if (res.teamDiscussionComments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsListDiscussionsInOrg

List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#list-discussions>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListDiscussionsInOrgRequest;
import org.openapis.openapi.models.operations.TeamsListDiscussionsInOrgResponse;
import org.openapis.openapi.models.shared.DirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListDiscussionsInOrgRequest req = new TeamsListDiscussionsInOrgRequest("ullam", "laborum") {{
                direction = DirectionEnum.ASC;
                page = 987371L;
                perPage = 657862L;
                pinned = "recusandae";
            }};            

            TeamsListDiscussionsInOrgResponse res = sdk.teams.teamsListDiscussionsInOrg(req);

            if (res.teamDiscussions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsListDiscussionsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List discussions`](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#list-discussions) endpoint.

List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#list-discussions-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListDiscussionsLegacyRequest;
import org.openapis.openapi.models.operations.TeamsListDiscussionsLegacyResponse;
import org.openapis.openapi.models.shared.DirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListDiscussionsLegacyRequest req = new TeamsListDiscussionsLegacyRequest(359453L) {{
                direction = DirectionEnum.ASC;
                page = 900368L;
                perPage = 719469L;
            }};            

            TeamsListDiscussionsLegacyResponse res = sdk.teams.teamsListDiscussionsLegacy(req);

            if (res.teamDiscussions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsListForAuthenticatedUser

List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#list-teams-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.TeamsListForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListForAuthenticatedUserRequest req = new TeamsListForAuthenticatedUserRequest() {{
                page = 983275L;
                perPage = 386538L;
            }};            

            TeamsListForAuthenticatedUserResponse res = sdk.teams.teamsListForAuthenticatedUser(req);

            if (res.teamFulls != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsListMembersInOrg

Team members will include the members of child teams.

To list members in a team, the team must be visible to the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#list-team-members>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListMembersInOrgRequest;
import org.openapis.openapi.models.operations.TeamsListMembersInOrgResponse;
import org.openapis.openapi.models.operations.TeamsListMembersInOrgRoleEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListMembersInOrgRequest req = new TeamsListMembersInOrgRequest("voluptatem", "optio") {{
                page = 193623L;
                perPage = 125707L;
                role = TeamsListMembersInOrgRoleEnum.MEMBER;
            }};            

            TeamsListMembersInOrgResponse res = sdk.teams.teamsListMembersInOrg(req);

            if (res.simpleUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsListMembersLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team members`](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#list-team-members) endpoint.

Team members will include the members of child teams.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#list-team-members-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListMembersLegacyRequest;
import org.openapis.openapi.models.operations.TeamsListMembersLegacyResponse;
import org.openapis.openapi.models.operations.TeamsListMembersLegacyRoleEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListMembersLegacyRequest req = new TeamsListMembersLegacyRequest(973096L) {{
                page = 42364L;
                perPage = 149498L;
                role = TeamsListMembersLegacyRoleEnum.MEMBER;
            }};            

            TeamsListMembersLegacyResponse res = sdk.teams.teamsListMembersLegacy(req);

            if (res.simpleUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsListProjectsInOrg

Lists the organization projects for a team.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#list-team-projects>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListProjectsInOrgRequest;
import org.openapis.openapi.models.operations.TeamsListProjectsInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListProjectsInOrgRequest req = new TeamsListProjectsInOrgRequest("rerum", "in") {{
                page = 345514L;
                perPage = 836991L;
            }};            

            TeamsListProjectsInOrgResponse res = sdk.teams.teamsListProjectsInOrg(req);

            if (res.teamProjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsListProjectsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team projects`](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#list-team-projects) endpoint.

Lists the organization projects for a team.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams/#list-team-projects-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListProjectsLegacyRequest;
import org.openapis.openapi.models.operations.TeamsListProjectsLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListProjectsLegacyRequest req = new TeamsListProjectsLegacyRequest(186937L) {{
                page = 221824L;
                perPage = 390854L;
            }};            

            TeamsListProjectsLegacyResponse res = sdk.teams.teamsListProjectsLegacy(req);

            if (res.teamProjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsListReposInOrg

Lists a team's repositories visible to the authenticated user.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#list-team-repositories>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListReposInOrgRequest;
import org.openapis.openapi.models.operations.TeamsListReposInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListReposInOrgRequest req = new TeamsListReposInOrgRequest("dignissimos", "reiciendis") {{
                page = 929619L;
                perPage = 114767L;
            }};            

            TeamsListReposInOrgResponse res = sdk.teams.teamsListReposInOrg(req);

            if (res.minimalRepositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsListReposLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List team repositories](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#list-team-repositories) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams/#list-team-repositories-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListReposLegacyRequest;
import org.openapis.openapi.models.operations.TeamsListReposLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListReposLegacyRequest req = new TeamsListReposLegacyRequest(667215L) {{
                page = 33093L;
                perPage = 798079L;
            }};            

            TeamsListReposLegacyResponse res = sdk.teams.teamsListReposLegacy(req);

            if (res.minimalRepositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsRemoveMemberLegacy~~

The "Remove team member" endpoint (described below) is deprecated.

We recommend using the [Remove team membership for a user](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.4/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/enterprise-server@3.4/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#remove-team-member-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsRemoveMemberLegacyRequest;
import org.openapis.openapi.models.operations.TeamsRemoveMemberLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsRemoveMemberLegacyRequest req = new TeamsRemoveMemberLegacyRequest(796117L, "quos");            

            TeamsRemoveMemberLegacyResponse res = sdk.teams.teamsRemoveMemberLegacy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsRemoveMembershipForUserInOrg

To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.4/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/enterprise-server@3.4/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/memberships/{username}`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#remove-team-membership-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsRemoveMembershipForUserInOrgRequest;
import org.openapis.openapi.models.operations.TeamsRemoveMembershipForUserInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsRemoveMembershipForUserInOrgRequest req = new TeamsRemoveMembershipForUserInOrgRequest("possimus", "maiores", "odio");            

            TeamsRemoveMembershipForUserInOrgResponse res = sdk.teams.teamsRemoveMembershipForUserInOrg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsRemoveMembershipForUserLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove team membership for a user](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#remove-team-membership-for-a-user) endpoint.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.4/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/enterprise-server@3.4/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#remove-team-membership-for-a-user-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsRemoveMembershipForUserLegacyRequest;
import org.openapis.openapi.models.operations.TeamsRemoveMembershipForUserLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsRemoveMembershipForUserLegacyRequest req = new TeamsRemoveMembershipForUserLegacyRequest(588662L, "sapiente");            

            TeamsRemoveMembershipForUserLegacyResponse res = sdk.teams.teamsRemoveMembershipForUserLegacy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsRemoveProjectInOrg

Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. This endpoint removes the project from the team, but does not delete the project.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/projects/{project_id}`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#remove-a-project-from-a-team>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsRemoveProjectInOrgRequest;
import org.openapis.openapi.models.operations.TeamsRemoveProjectInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsRemoveProjectInOrgRequest req = new TeamsRemoveProjectInOrgRequest("aperiam", 627717L, "nesciunt");            

            TeamsRemoveProjectInOrgResponse res = sdk.teams.teamsRemoveProjectInOrg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsRemoveProjectLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a project from a team](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#remove-a-project-from-a-team) endpoint.

Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams/#remove-a-project-from-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsRemoveProjectLegacyRequest;
import org.openapis.openapi.models.operations.TeamsRemoveProjectLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsRemoveProjectLegacyRequest req = new TeamsRemoveProjectLegacyRequest(590998L, 404774L);            

            TeamsRemoveProjectLegacyResponse res = sdk.teams.teamsRemoveProjectLegacy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsRemoveRepoInOrg

If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. This does not delete the repository, it just removes it from the team.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams/#remove-a-repository-from-a-team>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsRemoveRepoInOrgRequest;
import org.openapis.openapi.models.operations.TeamsRemoveRepoInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsRemoveRepoInOrgRequest req = new TeamsRemoveRepoInOrgRequest("repellendus", "unde", "alias", "impedit");            

            TeamsRemoveRepoInOrgResponse res = sdk.teams.teamsRemoveRepoInOrg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsRemoveRepoLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a repository from a team](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#remove-a-repository-from-a-team) endpoint.

If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams/#remove-a-repository-from-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsRemoveRepoLegacyRequest;
import org.openapis.openapi.models.operations.TeamsRemoveRepoLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsRemoveRepoLegacyRequest req = new TeamsRemoveRepoLegacyRequest("sequi", "commodi", 287141L);            

            TeamsRemoveRepoLegacyResponse res = sdk.teams.teamsRemoveRepoLegacy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsUpdateDiscussionCommentInOrg

Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#update-a-discussion-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsUpdateDiscussionCommentInOrgRequest;
import org.openapis.openapi.models.operations.TeamsUpdateDiscussionCommentInOrgRequestBody;
import org.openapis.openapi.models.operations.TeamsUpdateDiscussionCommentInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsUpdateDiscussionCommentInOrgRequest req = new TeamsUpdateDiscussionCommentInOrgRequest(                new TeamsUpdateDiscussionCommentInOrgRequestBody("expedita");, 446737L, 789870L, "sunt", "enim");            

            TeamsUpdateDiscussionCommentInOrgResponse res = sdk.teams.teamsUpdateDiscussionCommentInOrg(req);

            if (res.teamDiscussionComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsUpdateDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion comment](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#update-a-discussion-comment) endpoint.

Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#update-a-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsUpdateDiscussionCommentLegacyRequest;
import org.openapis.openapi.models.operations.TeamsUpdateDiscussionCommentLegacyRequestBody;
import org.openapis.openapi.models.operations.TeamsUpdateDiscussionCommentLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsUpdateDiscussionCommentLegacyRequest req = new TeamsUpdateDiscussionCommentLegacyRequest(                new TeamsUpdateDiscussionCommentLegacyRequestBody("nulla");, 979271L, 715622L, 649657L);            

            TeamsUpdateDiscussionCommentLegacyResponse res = sdk.teams.teamsUpdateDiscussionCommentLegacy(req);

            if (res.teamDiscussionComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsUpdateDiscussionInOrg

Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#update-a-discussion>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsUpdateDiscussionInOrgRequest;
import org.openapis.openapi.models.operations.TeamsUpdateDiscussionInOrgRequestBody;
import org.openapis.openapi.models.operations.TeamsUpdateDiscussionInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsUpdateDiscussionInOrgRequest req = new TeamsUpdateDiscussionInOrgRequest(770997L, "accusamus", "et") {{
                requestBody = new TeamsUpdateDiscussionInOrgRequestBody() {{
                    body = "quas";
                    title = "Ms.";
                }};;
            }};            

            TeamsUpdateDiscussionInOrgResponse res = sdk.teams.teamsUpdateDiscussionInOrg(req);

            if (res.teamDiscussion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsUpdateDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#update-a-discussion) endpoint.

Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#update-a-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsUpdateDiscussionLegacyRequest;
import org.openapis.openapi.models.operations.TeamsUpdateDiscussionLegacyRequestBody;
import org.openapis.openapi.models.operations.TeamsUpdateDiscussionLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsUpdateDiscussionLegacyRequest req = new TeamsUpdateDiscussionLegacyRequest(741603L, 119725L) {{
                requestBody = new TeamsUpdateDiscussionLegacyRequestBody() {{
                    body = "impedit";
                    title = "Mrs.";
                }};;
            }};            

            TeamsUpdateDiscussionLegacyResponse res = sdk.teams.teamsUpdateDiscussionLegacy(req);

            if (res.teamDiscussion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsUpdateInOrg

To edit a team, the authenticated user must either be an organization owner or a team maintainer.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams#update-a-team>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsUpdateInOrgRequest;
import org.openapis.openapi.models.operations.TeamsUpdateInOrgRequestBody;
import org.openapis.openapi.models.operations.TeamsUpdateInOrgRequestBodyPermissionEnum;
import org.openapis.openapi.models.operations.TeamsUpdateInOrgRequestBodyPrivacyEnum;
import org.openapis.openapi.models.operations.TeamsUpdateInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsUpdateInOrgRequest req = new TeamsUpdateInOrgRequest("eveniet", "repudiandae") {{
                requestBody = new TeamsUpdateInOrgRequestBody() {{
                    description = "sed";
                    name = "Willard Rutherford";
                    parentTeamId = 923159L;
                    permission = TeamsUpdateInOrgRequestBodyPermissionEnum.PUSH;
                    privacy = TeamsUpdateInOrgRequestBodyPrivacyEnum.SECRET;
                }};;
            }};            

            TeamsUpdateInOrgResponse res = sdk.teams.teamsUpdateInOrg(req);

            if (res.teamFull != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsUpdateLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a team](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#update-a-team) endpoint.

To edit a team, the authenticated user must either be an organization owner or a team maintainer.

**Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/teams/#update-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsUpdateLegacyRequest;
import org.openapis.openapi.models.operations.TeamsUpdateLegacyRequestBody;
import org.openapis.openapi.models.operations.TeamsUpdateLegacyRequestBodyPermissionEnum;
import org.openapis.openapi.models.operations.TeamsUpdateLegacyRequestBodyPrivacyEnum;
import org.openapis.openapi.models.operations.TeamsUpdateLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsUpdateLegacyRequest req = new TeamsUpdateLegacyRequest(                new TeamsUpdateLegacyRequestBody("veritatis") {{
                                description = "maiores";
                                parentTeamId = 930877L;
                                permission = TeamsUpdateLegacyRequestBodyPermissionEnum.ADMIN;
                                privacy = TeamsUpdateLegacyRequestBodyPrivacyEnum.CLOSED;
                            }};, 73826L);            

            TeamsUpdateLegacyResponse res = sdk.teams.teamsUpdateLegacy(req);

            if (res.teamFull != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
