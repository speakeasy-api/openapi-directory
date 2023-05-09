# Orgs

## Overview

Interact with GitHub Orgs.

### Available Operations

* [OrgsAddSecurityManagerTeam](#orgsaddsecuritymanagerteam) - Add a security manager team
* [OrgsCheckMembershipForUser](#orgscheckmembershipforuser) - Check organization membership for a user
* [OrgsCheckPublicMembershipForUser](#orgscheckpublicmembershipforuser) - Check public organization membership for a user
* [OrgsConvertMemberToOutsideCollaborator](#orgsconvertmembertooutsidecollaborator) - Convert an organization member to outside collaborator
* [OrgsCreateWebhook](#orgscreatewebhook) - Create an organization webhook
* [OrgsDeleteWebhook](#orgsdeletewebhook) - Delete an organization webhook
* [OrgsEnableOrDisableSecurityProductOnAllOrgRepos](#orgsenableordisablesecurityproductonallorgrepos) - Enable or disable a security feature for an organization
* [OrgsGet](#orgsget) - Get an organization
* [OrgsGetAuditLog](#orgsgetauditlog) - Get the audit log for an organization
* [OrgsGetMembershipForAuthenticatedUser](#orgsgetmembershipforauthenticateduser) - Get an organization membership for the authenticated user
* [OrgsGetMembershipForUser](#orgsgetmembershipforuser) - Get organization membership for a user
* [OrgsGetWebhook](#orgsgetwebhook) - Get an organization webhook
* [OrgsGetWebhookConfigForOrg](#orgsgetwebhookconfigfororg) - Get a webhook configuration for an organization
* [OrgsGetWebhookDelivery](#orgsgetwebhookdelivery) - Get a webhook delivery for an organization webhook
* [OrgsList](#orgslist) - List organizations
* [OrgsListAppInstallations](#orgslistappinstallations) - List app installations for an organization
* [OrgsListCustomRoles](#orgslistcustomroles) - List custom repository roles in an organization
* [OrgsListForAuthenticatedUser](#orgslistforauthenticateduser) - List organizations for the authenticated user
* [OrgsListForUser](#orgslistforuser) - List organizations for a user
* [OrgsListMembers](#orgslistmembers) - List organization members
* [OrgsListMembershipsForAuthenticatedUser](#orgslistmembershipsforauthenticateduser) - List organization memberships for the authenticated user
* [OrgsListOutsideCollaborators](#orgslistoutsidecollaborators) - List outside collaborators for an organization
* [OrgsListPublicMembers](#orgslistpublicmembers) - List public organization members
* [OrgsListSecurityManagerTeams](#orgslistsecuritymanagerteams) - List security manager teams
* [OrgsListWebhookDeliveries](#orgslistwebhookdeliveries) - List deliveries for an organization webhook
* [OrgsListWebhooks](#orgslistwebhooks) - List organization webhooks
* [OrgsPingWebhook](#orgspingwebhook) - Ping an organization webhook
* [OrgsRedeliverWebhookDelivery](#orgsredeliverwebhookdelivery) - Redeliver a delivery for an organization webhook
* [OrgsRemoveMember](#orgsremovemember) - Remove an organization member
* [OrgsRemoveMembershipForUser](#orgsremovemembershipforuser) - Remove organization membership for a user
* [OrgsRemoveOutsideCollaborator](#orgsremoveoutsidecollaborator) - Remove outside collaborator from an organization
* [OrgsRemovePublicMembershipForAuthenticatedUser](#orgsremovepublicmembershipforauthenticateduser) - Remove public organization membership for the authenticated user
* [OrgsRemoveSecurityManagerTeam](#orgsremovesecuritymanagerteam) - Remove a security manager team
* [OrgsSetMembershipForUser](#orgssetmembershipforuser) - Set organization membership for a user
* [OrgsSetPublicMembershipForAuthenticatedUser](#orgssetpublicmembershipforauthenticateduser) - Set public organization membership for the authenticated user
* [OrgsUpdate](#orgsupdate) - Update an organization
* [OrgsUpdateMembershipForAuthenticatedUser](#orgsupdatemembershipforauthenticateduser) - Update an organization membership for the authenticated user
* [OrgsUpdateWebhook](#orgsupdatewebhook) - Update an organization webhook
* [OrgsUpdateWebhookConfigForOrg](#orgsupdatewebhookconfigfororg) - Update a webhook configuration for an organization

## OrgsAddSecurityManagerTeam

Adds a team as a security manager for an organization. For more information, see "[Managing security for an organization](https://docs.github.com/enterprise-server@3.7/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization) for an organization."

To use this endpoint, you must be an administrator for the organization, and you must use an access token with the `write:org` scope.

GitHub Apps must have the `administration` organization read-write permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#add-a-security-manager-team>

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
    res, err := s.Orgs.OrgsAddSecurityManagerTeam(ctx, operations.OrgsAddSecurityManagerTeamRequest{
        Org: "deserunt",
        TeamSlug: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsCheckMembershipForUser

Check if a user is, publicly or privately, a member of the organization.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#check-organization-membership-for-a-user>

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
    res, err := s.Orgs.OrgsCheckMembershipForUser(ctx, operations.OrgsCheckMembershipForUserRequest{
        Org: "quis",
        Username: "Estefania58",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsCheckPublicMembershipForUser

Check public organization membership for a user

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#check-public-organization-membership-for-a-user>

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
    res, err := s.Orgs.OrgsCheckPublicMembershipForUser(ctx, operations.OrgsCheckPublicMembershipForUserRequest{
        Org: "molestiae",
        Username: "Nikita29",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsConvertMemberToOutsideCollaborator

When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://docs.github.com/enterprise-server@3.7/articles/converting-an-organization-member-to-an-outside-collaborator/)". Converting an organization member to an outside collaborator may be restricted by enterprise administrators. For more information, see "[Enforcing repository management policies in your enterprise](https://docs.github.com/enterprise-server@3.7/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)."

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator>

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
    res, err := s.Orgs.OrgsConvertMemberToOutsideCollaborator(ctx, operations.OrgsConvertMemberToOutsideCollaboratorRequest{
        RequestBody: &operations.OrgsConvertMemberToOutsideCollaboratorRequestBody{
            Async: sdk.Bool(false),
        },
        Org: "itaque",
        Username: "Camille16",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgsConvertMemberToOutsideCollaborator202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrgsCreateWebhook

Here's how you can create a hook that posts payloads in JSON format:

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#create-an-organization-webhook>

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
    res, err := s.Orgs.OrgsCreateWebhook(ctx, operations.OrgsCreateWebhookRequest{
        RequestBody: operations.OrgsCreateWebhookRequestBody{
            Active: sdk.Bool(false),
            Config: operations.OrgsCreateWebhookRequestBodyConfig{
                ContentType: sdk.String(""json""),
                InsecureSsl: &shared.WebhookConfigInsecureSsl{},
                Password: sdk.String(""password""),
                Secret: sdk.String(""********""),
                URL: "https://example.com/webhook",
                Username: sdk.String(""kdaigle""),
            },
            Events: []string{
                "laudantium",
                "odit",
                "pariatur",
                "amet",
            },
            Name: "Virginia Flatley",
        },
        Org: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgHook != nil {
        // handle response
    }
}
```

## OrgsDeleteWebhook

Delete an organization webhook

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#delete-an-organization-webhook>

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
    res, err := s.Orgs.OrgsDeleteWebhook(ctx, operations.OrgsDeleteWebhookRequest{
        HookID: 977518,
        Org: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsEnableOrDisableSecurityProductOnAllOrgRepos

Enables or disables the specified security feature for all repositories in an organization.

To use this endpoint, you must be an organization owner or be member of a team with the security manager role.
A token with the 'write:org' scope is also required.

GitHub Apps must have the `organization_administration:write` permission to use this endpoint.

For more information, see "[Managing security managers in your organization](https://docs.github.com/enterprise-server@3.7/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#enable-or-disable-security-product-on-all-org-repos>

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
    res, err := s.Orgs.OrgsEnableOrDisableSecurityProductOnAllOrgRepos(ctx, operations.OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest{
        Enablement: shared.OrgSecurityProductEnablementEnumDisableAll,
        Org: "distinctio",
        SecurityProduct: shared.SecurityProductEnumDependabotSecurityUpdates,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsGet

To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://docs.github.com/enterprise-server@3.7/articles/securing-your-account-with-two-factor-authentication-2fa/).

GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub Enterprise Server plan. See "[Authenticating with GitHub Apps](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/authenticating-with-github-apps/)" for details. For an example response, see 'Response with GitHub Enterprise Server plan information' below."

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#get-an-organization>

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
    res, err := s.Orgs.OrgsGet(ctx, operations.OrgsGetRequest{
        Org: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationFull != nil {
        // handle response
    }
}
```

## OrgsGetAuditLog

Gets the audit log for an organization. For more information, see "[Reviewing the audit log for your organization](https://docs.github.com/enterprise-server@3.7/github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization)."

To use this endpoint, you must be an organization owner, and you must use an access token with the `admin:org` scope. GitHub Apps must have the `organization_administration` read permission to use this endpoint.

By default, the response includes up to 30 events from the past three months. Use the `phrase` parameter to filter results and retrieve older events. For example, use the `phrase` parameter with the `created` qualifier to filter events based on when the events occurred. For more information, see "[Reviewing the audit log for your organization](https://docs.github.com/enterprise-server@3.7/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#searching-the-audit-log)."

Use pagination to retrieve fewer or more than 30 events. For more information, see "[Resources in the REST API](https://docs.github.com/enterprise-server@3.7/rest/overview/resources-in-the-rest-api#pagination)."

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#get-audit-log>

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
    res, err := s.Orgs.OrgsGetAuditLog(ctx, operations.OrgsGetAuditLogRequest{
        After: sdk.String("nisi"),
        Before: sdk.String("libero"),
        Include: shared.AuditLogIncludeEnumAll.ToPointer(),
        Order: shared.AuditLogOrderEnumAsc.ToPointer(),
        Org: "facilis",
        Page: sdk.Int64(217663),
        PerPage: sdk.Int64(318917),
        Phrase: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuditLogEvents != nil {
        // handle response
    }
}
```

## OrgsGetMembershipForAuthenticatedUser

Get an organization membership for the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user>

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
    res, err := s.Orgs.OrgsGetMembershipForAuthenticatedUser(ctx, operations.OrgsGetMembershipForAuthenticatedUserRequest{
        Org: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgMembership != nil {
        // handle response
    }
}
```

## OrgsGetMembershipForUser

In order to get a user's membership with an organization, the authenticated user must be an organization member. The `state` parameter in the response can be used to identify the user's membership status.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#get-organization-membership-for-a-user>

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
    res, err := s.Orgs.OrgsGetMembershipForUser(ctx, operations.OrgsGetMembershipForUserRequest{
        Org: "consequuntur",
        Username: "Sim.Greenfelder44",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgMembership != nil {
        // handle response
    }
}
```

## OrgsGetWebhook

Returns a webhook configured in an organization. To get only the webhook `config` properties, see "[Get a webhook configuration for an organization](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization)."

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#get-an-organization-webhook>

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
    res, err := s.Orgs.OrgsGetWebhook(ctx, operations.OrgsGetWebhookRequest{
        HookID: 345506,
        Org: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgHook != nil {
        // handle response
    }
}
```

## OrgsGetWebhookConfigForOrg

Returns the webhook configuration for an organization. To get more information about the webhook, including the `active` state and `events`, use "[Get an organization webhook ](/rest/reference/orgs#get-an-organization-webhook)."

Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:read` permission.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#get-a-webhook-configuration-for-an-organization>

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
    res, err := s.Orgs.OrgsGetWebhookConfigForOrg(ctx, operations.OrgsGetWebhookConfigForOrgRequest{
        HookID: 480061,
        Org: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookConfig != nil {
        // handle response
    }
}
```

## OrgsGetWebhookDelivery

Returns a delivery for a webhook configured in an organization.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#get-a-webhook-delivery-for-an-organization-webhook>

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
    res, err := s.Orgs.OrgsGetWebhookDelivery(ctx, operations.OrgsGetWebhookDeliveryRequest{
        DeliveryID: 522176,
        HookID: 753890,
        Org: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HookDelivery != nil {
        // handle response
    }
}
```

## OrgsList

Lists all organizations, in the order that they were created on GitHub Enterprise Server.

**Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@3.7/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of organizations.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#list-organizations>

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
    res, err := s.Orgs.OrgsList(ctx, operations.OrgsListRequest{
        PerPage: sdk.Int64(604078),
        Since: sdk.Int64(889448),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationSimples != nil {
        // handle response
    }
}
```

## OrgsListAppInstallations

Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. You must be an organization owner with `admin:read` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#list-app-installations-for-an-organization>

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
    res, err := s.Orgs.OrgsListAppInstallations(ctx, operations.OrgsListAppInstallationsRequest{
        Org: "ducimus",
        Page: sdk.Int64(220104),
        PerPage: sdk.Int64(118041),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgsListAppInstallations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrgsListCustomRoles

List the custom repository roles available in this organization. In order to see custom
repository roles in an organization, the authenticated user must be an organization owner.

To use this endpoint the authenticated user must be an administrator for the organization or of an repository of the organization and must use an access token with `admin:org repo` scope.
GitHub Apps must have the `organization_custom_roles:read` organization permission to use this endpoint.

For more information on custom repository roles, see "[About custom repository roles](https://docs.github.com/enterprise-server@3.7/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)."

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#list-custom-repository-roles-in-an-organization>

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
    res, err := s.Orgs.OrgsListCustomRoles(ctx, operations.OrgsListCustomRolesRequest{
        OrganizationID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgsListCustomRoles200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrgsListForAuthenticatedUser

List organizations for the authenticated user.

**OAuth scope requirements**

This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#list-organizations-for-the-authenticated-user>

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
    res, err := s.Orgs.OrgsListForAuthenticatedUser(ctx, operations.OrgsListForAuthenticatedUserRequest{
        Page: sdk.Int64(784731),
        PerPage: sdk.Int64(111496),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationSimples != nil {
        // handle response
    }
}
```

## OrgsListForUser

List [public organization memberships](https://docs.github.com/enterprise-server@3.7/articles/publicizing-or-concealing-organization-membership) for the specified user.

This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#list-organizations-for-the-authenticated-user) API instead.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#list-organizations-for-a-user>

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
    res, err := s.Orgs.OrgsListForUser(ctx, operations.OrgsListForUserRequest{
        Page: sdk.Int64(491591),
        PerPage: sdk.Int64(458970),
        Username: "Ruby31",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationSimples != nil {
        // handle response
    }
}
```

## OrgsListMembers

List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#list-organization-members>

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
    res, err := s.Orgs.OrgsListMembers(ctx, operations.OrgsListMembersRequest{
        Filter: operations.OrgsListMembersFilterEnumAll.ToPointer(),
        Org: "iusto",
        Page: sdk.Int64(491201),
        PerPage: sdk.Int64(729828),
        Role: operations.OrgsListMembersRoleEnumAll.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## OrgsListMembershipsForAuthenticatedUser

List organization memberships for the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#list-organization-memberships-for-the-authenticated-user>

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
    res, err := s.Orgs.OrgsListMembershipsForAuthenticatedUser(ctx, operations.OrgsListMembershipsForAuthenticatedUserRequest{
        Page: sdk.Int64(69182),
        PerPage: sdk.Int64(280114),
        State: operations.OrgsListMembershipsForAuthenticatedUserStateEnumPending.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgMemberships != nil {
        // handle response
    }
}
```

## OrgsListOutsideCollaborators

List all users who are outside collaborators of an organization.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#list-outside-collaborators-for-an-organization>

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
    res, err := s.Orgs.OrgsListOutsideCollaborators(ctx, operations.OrgsListOutsideCollaboratorsRequest{
        Filter: operations.OrgsListOutsideCollaboratorsFilterEnumAll.ToPointer(),
        Org: "tempore",
        Page: sdk.Int64(334018),
        PerPage: sdk.Int64(176499),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## OrgsListPublicMembers

Members of an organization can choose to have their membership publicized or not.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#list-public-organization-members>

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
    res, err := s.Orgs.OrgsListPublicMembers(ctx, operations.OrgsListPublicMembersRequest{
        Org: "reiciendis",
        Page: sdk.Int64(939161),
        PerPage: sdk.Int64(444121),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## OrgsListSecurityManagerTeams

Lists teams that are security managers for an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/enterprise-server@3.7/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

To use this endpoint, you must be an administrator or security manager for the organization, and you must use an access token with the `read:org` scope.

GitHub Apps must have the `administration` organization read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#list-security-manager-teams>

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
    res, err := s.Orgs.OrgsListSecurityManagerTeams(ctx, operations.OrgsListSecurityManagerTeamsRequest{
        Org: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamSimples != nil {
        // handle response
    }
}
```

## OrgsListWebhookDeliveries

Returns a list of webhook deliveries for a webhook configured in an organization.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#list-deliveries-for-an-organization-webhook>

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
    res, err := s.Orgs.OrgsListWebhookDeliveries(ctx, operations.OrgsListWebhookDeliveriesRequest{
        Cursor: sdk.String("nemo"),
        HookID: 999809,
        Org: "quisquam",
        PerPage: sdk.Int64(197259),
        Redelivery: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HookDeliveryItems != nil {
        // handle response
    }
}
```

## OrgsListWebhooks

List organization webhooks

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#list-organization-webhooks>

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
    res, err := s.Orgs.OrgsListWebhooks(ctx, operations.OrgsListWebhooksRequest{
        Org: "nihil",
        Page: sdk.Int64(534908),
        PerPage: sdk.Int64(75566),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgHooks != nil {
        // handle response
    }
}
```

## OrgsPingWebhook

This will trigger a [ping event](https://docs.github.com/enterprise-server@3.7/webhooks/#ping-event) to be sent to the hook.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#ping-an-organization-webhook>

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
    res, err := s.Orgs.OrgsPingWebhook(ctx, operations.OrgsPingWebhookRequest{
        HookID: 290248,
        Org: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsRedeliverWebhookDelivery

Redeliver a delivery for a webhook configured in an organization.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#redeliver-a-delivery-for-an-organization-webhook>

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
    res, err := s.Orgs.OrgsRedeliverWebhookDelivery(ctx, operations.OrgsRedeliverWebhookDeliveryRequest{
        DeliveryID: 304173,
        HookID: 790463,
        Org: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgsRedeliverWebhookDelivery202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrgsRemoveMember

Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#remove-an-organization-member>

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
    res, err := s.Orgs.OrgsRemoveMember(ctx, operations.OrgsRemoveMemberRequest{
        Org: "laudantium",
        Username: "Theo.Altenwerth72",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsRemoveMembershipForUser

In order to remove a user's membership with an organization, the authenticated user must be an organization owner.

If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#remove-organization-membership-for-a-user>

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
    res, err := s.Orgs.OrgsRemoveMembershipForUser(ctx, operations.OrgsRemoveMembershipForUserRequest{
        Org: "expedita",
        Username: "Keely_McLaughlin49",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsRemoveOutsideCollaborator

Removing a user from this list will remove them from all the organization's repositories.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#remove-outside-collaborator-from-an-organization>

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
    res, err := s.Orgs.OrgsRemoveOutsideCollaborator(ctx, operations.OrgsRemoveOutsideCollaboratorRequest{
        Org: "corporis",
        Username: "Scot.Murphy21",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsRemovePublicMembershipForAuthenticatedUser

Remove public organization membership for the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user>

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
    res, err := s.Orgs.OrgsRemovePublicMembershipForAuthenticatedUser(ctx, operations.OrgsRemovePublicMembershipForAuthenticatedUserRequest{
        Org: "commodi",
        Username: "Olen3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsRemoveSecurityManagerTeam

Removes the security manager role from a team for an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/enterprise-server@3.7/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization) team from an organization."

To use this endpoint, you must be an administrator for the organization, and you must use an access token with the `admin:org` scope.

GitHub Apps must have the `administration` organization read-write permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#remove-a-security-manager-team>

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
    res, err := s.Orgs.OrgsRemoveSecurityManagerTeam(ctx, operations.OrgsRemoveSecurityManagerTeamRequest{
        Org: "ad",
        TeamSlug: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsSetMembershipForUser

Only authenticated organization owners can add a member to the organization or update the member's role.

*   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
    
*   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.

**Rate limits**

To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#set-organization-membership-for-a-user>

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
    res, err := s.Orgs.OrgsSetMembershipForUser(ctx, operations.OrgsSetMembershipForUserRequest{
        RequestBody: &operations.OrgsSetMembershipForUserRequestBody{
            Role: operations.OrgsSetMembershipForUserRequestBodyRoleEnumAdmin.ToPointer(),
        },
        Org: "illum",
        Username: "Joel.Powlowski9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgMembership != nil {
        // handle response
    }
}
```

## OrgsSetPublicMembershipForAuthenticatedUser

The user can publicize their own membership. (A user cannot publicize the membership for another user.)

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.7/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user>

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
    res, err := s.Orgs.OrgsSetPublicMembershipForAuthenticatedUser(ctx, operations.OrgsSetPublicMembershipForAuthenticatedUserRequest{
        Org: "dicta",
        Username: "Jordon.Bauch22",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsUpdate

**Parameter Deprecation Notice:** GitHub Enterprise Server will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).

Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#update-an-organization>

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
    res, err := s.Orgs.OrgsUpdate(ctx, operations.OrgsUpdateRequest{
        RequestBody: &operations.OrgsUpdateRequestBody{
            AdvancedSecurityEnabledForNewRepositories: sdk.Bool(false),
            BillingEmail: sdk.String("provident"),
            Blog: sdk.String(""http://github.blog""),
            Company: sdk.String("Treutel, Medhurst and Waelchi"),
            DefaultRepositoryPermission: operations.OrgsUpdateRequestBodyDefaultRepositoryPermissionEnumRead.ToPointer(),
            DependabotAlertsEnabledForNewRepositories: sdk.Bool(false),
            DependabotSecurityUpdatesEnabledForNewRepositories: sdk.Bool(false),
            DependencyGraphEnabledForNewRepositories: sdk.Bool(false),
            Description: sdk.String("nemo"),
            Email: sdk.String("Tomasa.Quitzon@yahoo.com"),
            HasOrganizationProjects: sdk.Bool(false),
            HasRepositoryProjects: sdk.Bool(false),
            Location: sdk.String("sint"),
            MembersAllowedRepositoryCreationType: operations.OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnumNone.ToPointer(),
            MembersCanCreateInternalRepositories: sdk.Bool(false),
            MembersCanCreatePages: sdk.Bool(false),
            MembersCanCreatePrivateRepositories: sdk.Bool(false),
            MembersCanCreatePublicRepositories: sdk.Bool(false),
            MembersCanCreateRepositories: sdk.Bool(false),
            MembersCanForkPrivateRepositories: sdk.Bool(false),
            Name: sdk.String("Mrs. Deanna Buckridge"),
            SecretScanningEnabledForNewRepositories: sdk.Bool(false),
            SecretScanningPushProtectionEnabledForNewRepositories: sdk.Bool(false),
            TwitterUsername: sdk.String("sunt"),
            WebCommitSignoffRequired: sdk.Bool(false),
        },
        Org: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationFull != nil {
        // handle response
    }
}
```

## OrgsUpdateMembershipForAuthenticatedUser

Update an organization membership for the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user>

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
    res, err := s.Orgs.OrgsUpdateMembershipForAuthenticatedUser(ctx, operations.OrgsUpdateMembershipForAuthenticatedUserRequest{
        RequestBody: operations.OrgsUpdateMembershipForAuthenticatedUserRequestBody{
            State: operations.OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnumActive,
        },
        Org: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgMembership != nil {
        // handle response
    }
}
```

## OrgsUpdateWebhook

Updates a webhook configured in an organization. When you update a webhook, the `secret` will be overwritten. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for an organization](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization)."

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#update-an-organization-webhook>

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
    res, err := s.Orgs.OrgsUpdateWebhook(ctx, operations.OrgsUpdateWebhookRequest{
        RequestBody: &operations.OrgsUpdateWebhookRequestBody{
            Active: sdk.Bool(false),
            Config: &operations.OrgsUpdateWebhookRequestBodyConfig{
                ContentType: sdk.String(""json""),
                InsecureSsl: &shared.WebhookConfigInsecureSsl{},
                Secret: sdk.String(""********""),
                URL: "https://example.com/webhook",
            },
            Events: []string{
                "atque",
                "beatae",
                "at",
            },
            Name: sdk.String(""web""),
        },
        HookID: 287544,
        Org: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgHook != nil {
        // handle response
    }
}
```

## OrgsUpdateWebhookConfigForOrg

Updates the webhook configuration for an organization. To update more information about the webhook, including the `active` state and `events`, use "[Update an organization webhook ](/rest/reference/orgs#update-an-organization-webhook)."

Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:write` permission.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/orgs#update-a-webhook-configuration-for-an-organization>

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
    res, err := s.Orgs.OrgsUpdateWebhookConfigForOrg(ctx, operations.OrgsUpdateWebhookConfigForOrgRequest{
        RequestBody: &operations.OrgsUpdateWebhookConfigForOrgRequestBody{
            ContentType: sdk.String(""json""),
            InsecureSsl: &shared.WebhookConfigInsecureSsl{},
            Secret: sdk.String(""********""),
            URL: sdk.String("https://example.com/webhook"),
        },
        HookID: 456704,
        Org: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookConfig != nil {
        // handle response
    }
}
```
