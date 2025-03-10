# Apps

## Overview

Information for integrations and installations.

### Available Operations

* [AppsAddRepoToInstallationForAuthenticatedUser](#appsaddrepotoinstallationforauthenticateduser) - Add a repository to an app installation
* [~~AppsCheckAuthorization~~](#appscheckauthorization) - Check an authorization :warning: **Deprecated**
* [AppsCheckToken](#appschecktoken) - Check a token
* [AppsCreateContentAttachment](#appscreatecontentattachment) - Create a content attachment
* [AppsCreateFromManifest](#appscreatefrommanifest) - Create a GitHub App from a manifest
* [AppsCreateInstallationAccessToken](#appscreateinstallationaccesstoken) - Create an installation access token for an app
* [AppsDeleteAuthorization](#appsdeleteauthorization) - Delete an app authorization
* [AppsDeleteInstallation](#appsdeleteinstallation) - Delete an installation for the authenticated app
* [AppsDeleteToken](#appsdeletetoken) - Delete an app token
* [AppsGetAuthenticated](#appsgetauthenticated) - Get the authenticated app
* [AppsGetBySlug](#appsgetbyslug) - Get an app
* [AppsGetInstallation](#appsgetinstallation) - Get an installation for the authenticated app
* [AppsGetOrgInstallation](#appsgetorginstallation) - Get an organization installation for the authenticated app
* [AppsGetRepoInstallation](#appsgetrepoinstallation) - Get a repository installation for the authenticated app
* [AppsGetUserInstallation](#appsgetuserinstallation) - Get a user installation for the authenticated app
* [AppsGetWebhookConfigForApp](#appsgetwebhookconfigforapp) - Get a webhook configuration for an app
* [AppsListInstallationReposForAuthenticatedUser](#appslistinstallationreposforauthenticateduser) - List repositories accessible to the user access token
* [AppsListInstallations](#appslistinstallations) - List installations for the authenticated app
* [AppsListInstallationsForAuthenticatedUser](#appslistinstallationsforauthenticateduser) - List app installations accessible to the user access token
* [AppsListReposAccessibleToInstallation](#appslistreposaccessibletoinstallation) - List repositories accessible to the app installation
* [AppsRemoveRepoFromInstallationForAuthenticatedUser](#appsremoverepofrominstallationforauthenticateduser) - Remove a repository from an app installation
* [~~AppsResetAuthorization~~](#appsresetauthorization) - Reset an authorization :warning: **Deprecated**
* [AppsResetToken](#appsresettoken) - Reset a token
* [~~AppsRevokeAuthorizationForApplication~~](#appsrevokeauthorizationforapplication) - Revoke an authorization for an application :warning: **Deprecated**
* [~~AppsRevokeGrantForApplication~~](#appsrevokegrantforapplication) - Revoke a grant for an application :warning: **Deprecated**
* [AppsRevokeInstallationAccessToken](#appsrevokeinstallationaccesstoken) - Revoke an installation access token
* [AppsScopeToken](#appsscopetoken) - Create a scoped access token
* [AppsSuspendInstallation](#appssuspendinstallation) - Suspend an app installation
* [AppsUnsuspendInstallation](#appsunsuspendinstallation) - Unsuspend an app installation
* [AppsUpdateWebhookConfigForApp](#appsupdatewebhookconfigforapp) - Update a webhook configuration for an app

## AppsAddRepoToInstallationForAuthenticatedUser

Add a single repository to an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@3.1/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@3.1/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#add-a-repository-to-an-app-installation>

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
    res, err := s.Apps.AppsAddRepoToInstallationForAuthenticatedUser(ctx, operations.AppsAddRepoToInstallationForAuthenticatedUserRequest{
        InstallationID: 311945,
        RepositoryID: 554242,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~AppsCheckAuthorization~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.1/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#check-an-authorization>

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
    res, err := s.Apps.AppsCheckAuthorization(ctx, operations.AppsCheckAuthorizationRequest{
        AccessToken: "aliquid",
        ClientID: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NullableAuthorization != nil {
        // handle response
    }
}
```

## AppsCheckToken

OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.1/rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#check-a-token>

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
    res, err := s.Apps.AppsCheckToken(ctx, operations.AppsCheckTokenRequest{
        RequestBody: operations.AppsCheckTokenRequestBody{
            AccessToken: "dolorem",
        },
        ClientID: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorization != nil {
        // handle response
    }
}
```

## AppsCreateContentAttachment

Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` and `repository` `full_name` of the content reference from the [`content_reference` event](https://docs.github.com/enterprise-server@3.1/webhooks/event-payloads/#content_reference) to create an attachment.

The app must create a content attachment within six hours of the content reference URL being posted. See "[Using content attachments](https://docs.github.com/enterprise-server@3.1/apps/using-content-attachments/)" for details about content attachments.

You must use an [installation access token](https://docs.github.com/enterprise-server@3.1/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#create-a-content-attachment>

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
    res, err := s.Apps.AppsCreateContentAttachment(ctx, operations.AppsCreateContentAttachmentRequest{
        RequestBody: operations.AppsCreateContentAttachmentRequestBody{
            Body: "Body of the attachment",
            Title: "Title of the attachment",
        },
        ContentReferenceID: 186193,
        Owner: "ipsum",
        Repo: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContentReferenceAttachment != nil {
        // handle response
    }
}
```

## AppsCreateFromManifest

Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/enterprise-server@3.1/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#create-a-github-app-from-a-manifest>

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
    res, err := s.Apps.AppsCreateFromManifest(ctx, operations.AppsCreateFromManifestRequest{
        Code: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GitHubApp != nil {
        // handle response
    }
}
```

## AppsCreateInstallationAccessToken

Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.

You must use a [JWT](https://docs.github.com/enterprise-server@3.1/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps/#create-an-installation-access-token-for-an-app>

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
    res, err := s.Apps.AppsCreateInstallationAccessToken(ctx, operations.AppsCreateInstallationAccessTokenRequest{
        RequestBody: &operations.AppsCreateInstallationAccessTokenRequestBody{
            Permissions: &shared.AppPermissions{
                Actions: shared.AppPermissionsActionsEnumWrite.ToPointer(),
                Administration: shared.AppPermissionsAdministrationEnumRead.ToPointer(),
                Checks: shared.AppPermissionsChecksEnumRead.ToPointer(),
                ContentReferences: shared.AppPermissionsContentReferencesEnumWrite.ToPointer(),
                Contents: shared.AppPermissionsContentsEnumRead.ToPointer(),
                Deployments: shared.AppPermissionsDeploymentsEnumWrite.ToPointer(),
                Environments: shared.AppPermissionsEnvironmentsEnumRead.ToPointer(),
                Issues: shared.AppPermissionsIssuesEnumRead.ToPointer(),
                Members: shared.AppPermissionsMembersEnumRead.ToPointer(),
                Metadata: shared.AppPermissionsMetadataEnumRead.ToPointer(),
                OrganizationAdministration: shared.AppPermissionsOrganizationAdministrationEnumRead.ToPointer(),
                OrganizationHooks: shared.AppPermissionsOrganizationHooksEnumRead.ToPointer(),
                OrganizationPackages: shared.AppPermissionsOrganizationPackagesEnumRead.ToPointer(),
                OrganizationPlan: shared.AppPermissionsOrganizationPlanEnumRead.ToPointer(),
                OrganizationProjects: shared.AppPermissionsOrganizationProjectsEnumAdmin.ToPointer(),
                OrganizationSecrets: shared.AppPermissionsOrganizationSecretsEnumWrite.ToPointer(),
                OrganizationSelfHostedRunners: shared.AppPermissionsOrganizationSelfHostedRunnersEnumWrite.ToPointer(),
                OrganizationUserBlocking: shared.AppPermissionsOrganizationUserBlockingEnumRead.ToPointer(),
                Packages: shared.AppPermissionsPackagesEnumWrite.ToPointer(),
                Pages: shared.AppPermissionsPagesEnumRead.ToPointer(),
                PullRequests: shared.AppPermissionsPullRequestsEnumWrite.ToPointer(),
                RepositoryHooks: shared.AppPermissionsRepositoryHooksEnumRead.ToPointer(),
                RepositoryProjects: shared.AppPermissionsRepositoryProjectsEnumAdmin.ToPointer(),
                SecretScanningAlerts: shared.AppPermissionsSecretScanningAlertsEnumRead.ToPointer(),
                Secrets: shared.AppPermissionsSecretsEnumWrite.ToPointer(),
                SecurityEvents: shared.AppPermissionsSecurityEventsEnumWrite.ToPointer(),
                SingleFile: shared.AppPermissionsSingleFileEnumRead.ToPointer(),
                Statuses: shared.AppPermissionsStatusesEnumRead.ToPointer(),
                TeamDiscussions: shared.AppPermissionsTeamDiscussionsEnumWrite.ToPointer(),
                VulnerabilityAlerts: shared.AppPermissionsVulnerabilityAlertsEnumWrite.ToPointer(),
                Workflows: shared.AppPermissionsWorkflowsEnumWrite.ToPointer(),
            },
            Repositories: []string{
                "rails",
                "rails",
                "rails",
            },
            RepositoryIds: []int64{
                714697,
                990339,
                469497,
                216897,
            },
        },
        InstallationID: 456015,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstallationToken != nil {
        // handle response
    }
}
```

## AppsDeleteAuthorization

OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.1/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#delete-an-app-authorization>

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
    res, err := s.Apps.AppsDeleteAuthorization(ctx, operations.AppsDeleteAuthorizationRequest{
        RequestBody: operations.AppsDeleteAuthorizationRequestBody{
            AccessToken: "id",
        },
        ClientID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsDeleteInstallation

Uninstalls a GitHub App on a user, organization, or business account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the "[Suspend an app installation](https://docs.github.com/enterprise-server@3.1/rest/reference/apps/#suspend-an-app-installation)" endpoint.

You must use a [JWT](https://docs.github.com/enterprise-server@3.1/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#delete-an-installation-for-the-authenticated-app>

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
    res, err := s.Apps.AppsDeleteInstallation(ctx, operations.AppsDeleteInstallationRequest{
        InstallationID: 263322,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsDeleteToken

OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.1/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#delete-an-app-token>

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
    res, err := s.Apps.AppsDeleteToken(ctx, operations.AppsDeleteTokenRequest{
        RequestBody: operations.AppsDeleteTokenRequestBody{
            AccessToken: "aspernatur",
        },
        ClientID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsGetAuthenticated

Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/enterprise-server@3.1/rest/reference/apps#list-installations-for-the-authenticated-app)" endpoint.

You must use a [JWT](https://docs.github.com/enterprise-server@3.1/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#get-the-authenticated-app>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Apps.AppsGetAuthenticated(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Integration != nil {
        // handle response
    }
}
```

## AppsGetBySlug

**Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).

If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://docs.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/enterprise-server@3.1/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps/#get-an-app>

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
    res, err := s.Apps.AppsGetBySlug(ctx, operations.AppsGetBySlugRequest{
        AppSlug: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Integration != nil {
        // handle response
    }
}
```

## AppsGetInstallation

Enables an authenticated GitHub App to find an installation's information using the installation id.

You must use a [JWT](https://docs.github.com/enterprise-server@3.1/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#get-an-installation-for-the-authenticated-app>

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
    res, err := s.Apps.AppsGetInstallation(ctx, operations.AppsGetInstallationRequest{
        InstallationID: 758379,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Installation != nil {
        // handle response
    }
}
```

## AppsGetOrgInstallation

Enables an authenticated GitHub App to find the organization's installation information.

You must use a [JWT](https://docs.github.com/enterprise-server@3.1/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app>

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
    res, err := s.Apps.AppsGetOrgInstallation(ctx, operations.AppsGetOrgInstallationRequest{
        Org: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Installation != nil {
        // handle response
    }
}
```

## AppsGetRepoInstallation

Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.

You must use a [JWT](https://docs.github.com/enterprise-server@3.1/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#get-a-repository-installation-for-the-authenticated-app>

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
    res, err := s.Apps.AppsGetRepoInstallation(ctx, operations.AppsGetRepoInstallationRequest{
        Owner: "ad",
        Repo: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Installation != nil {
        // handle response
    }
}
```

## AppsGetUserInstallation

Enables an authenticated GitHub App to find the user’s installation information.

You must use a [JWT](https://docs.github.com/enterprise-server@3.1/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#get-a-user-installation-for-the-authenticated-app>

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
    res, err := s.Apps.AppsGetUserInstallation(ctx, operations.AppsGetUserInstallationRequest{
        Username: "Geraldine.Oberbrunner",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Installation != nil {
        // handle response
    }
}
```

## AppsGetWebhookConfigForApp

Returns the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."

You must use a [JWT](https://docs.github.com/enterprise-server@3.1/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#get-a-webhook-configuration-for-an-app>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Apps.AppsGetWebhookConfigForApp(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookConfig != nil {
        // handle response
    }
}
```

## AppsListInstallationReposForAuthenticatedUser

List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@3.1/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The access the user has to each repository is included in the hash under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#list-repositories-accessible-to-the-user-access-token>

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
    res, err := s.Apps.AppsListInstallationReposForAuthenticatedUser(ctx, operations.AppsListInstallationReposForAuthenticatedUserRequest{
        InstallationID: 831049,
        Page: sdk.Int64(519711),
        PerPage: sdk.Int64(628982),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsListInstallationReposForAuthenticatedUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppsListInstallations

You must use a [JWT](https://docs.github.com/enterprise-server@3.1/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

The permissions the installation has are included under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#list-installations-for-the-authenticated-app>

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
    res, err := s.Apps.AppsListInstallations(ctx, operations.AppsListInstallationsRequest{
        Outdated: sdk.String("alias"),
        Page: sdk.Int64(872651),
        PerPage: sdk.Int64(311860),
        Since: types.MustTimeFromString("2022-07-29T17:02:39.743Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Installations != nil {
        // handle response
    }
}
```

## AppsListInstallationsForAuthenticatedUser

Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@3.1/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You can find the permissions for the installation under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token>

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
    res, err := s.Apps.AppsListInstallationsForAuthenticatedUser(ctx, operations.AppsListInstallationsForAuthenticatedUserRequest{
        Page: sdk.Int64(798047),
        PerPage: sdk.Int64(885338),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsListInstallationsForAuthenticatedUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppsListReposAccessibleToInstallation

List repositories that an app installation can access.

You must use an [installation access token](https://docs.github.com/enterprise-server@3.1/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#list-repositories-accessible-to-the-app-installation>

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
    res, err := s.Apps.AppsListReposAccessibleToInstallation(ctx, operations.AppsListReposAccessibleToInstallationRequest{
        Page: sdk.Int64(185636),
        PerPage: sdk.Int64(679880),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsListReposAccessibleToInstallation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppsRemoveRepoFromInstallationForAuthenticatedUser

Remove a single repository from an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@3.1/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@3.1/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#remove-a-repository-from-an-app-installation>

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
    res, err := s.Apps.AppsRemoveRepoFromInstallationForAuthenticatedUser(ctx, operations.AppsRemoveRepoFromInstallationForAuthenticatedUserRequest{
        InstallationID: 952792,
        RepositoryID: 456130,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~AppsResetAuthorization~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.1/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#reset-an-authorization>

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
    res, err := s.Apps.AppsResetAuthorization(ctx, operations.AppsResetAuthorizationRequest{
        AccessToken: "harum",
        ClientID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorization != nil {
        // handle response
    }
}
```

## AppsResetToken

OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.1/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#reset-a-token>

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
    res, err := s.Apps.AppsResetToken(ctx, operations.AppsResetTokenRequest{
        RequestBody: operations.AppsResetTokenRequestBody{
            AccessToken: "ipsum",
        },
        ClientID: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorization != nil {
        // handle response
    }
}
```

## ~~AppsRevokeAuthorizationForApplication~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.1/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#revoke-an-authorization-for-an-application>

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
    res, err := s.Apps.AppsRevokeAuthorizationForApplication(ctx, operations.AppsRevokeAuthorizationForApplicationRequest{
        AccessToken: "tenetur",
        ClientID: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~AppsRevokeGrantForApplication~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.1/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid token as `:access_token` and the grant for the token's owner will be deleted.

Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the Applications settings page under "Authorized OAuth Apps" on GitHub Enterprise Server](https://github.com/settings/applications#authorized).

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#revoke-a-grant-for-an-application>

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
    res, err := s.Apps.AppsRevokeGrantForApplication(ctx, operations.AppsRevokeGrantForApplicationRequest{
        AccessToken: "tempore",
        ClientID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsRevokeInstallationAccessToken

Revokes the installation token you're using to authenticate as an installation and access this endpoint.

Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/enterprise-server@3.1/rest/reference/apps#create-an-installation-access-token-for-an-app)" endpoint.

You must use an [installation access token](https://docs.github.com/enterprise-server@3.1/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#revoke-an-installation-access-token>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Apps.AppsRevokeInstallationAccessToken(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsScopeToken

Use a non-scoped user-to-server OAuth access token to create a repository scoped and/or permission scoped user-to-server OAuth access token. You can specify which repositories the token can access and which permissions are granted to the token. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.1/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#create-a-scoped-access-token>

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
    res, err := s.Apps.AppsScopeToken(ctx, operations.AppsScopeTokenRequest{
        RequestBody: operations.AppsScopeTokenRequestBody{
            AccessToken: "e72e16c7e42f292c6912e7710c838347ae178b4a",
            Permissions: &shared.AppPermissions{
                Actions: shared.AppPermissionsActionsEnumRead.ToPointer(),
                Administration: shared.AppPermissionsAdministrationEnumRead.ToPointer(),
                Checks: shared.AppPermissionsChecksEnumRead.ToPointer(),
                ContentReferences: shared.AppPermissionsContentReferencesEnumWrite.ToPointer(),
                Contents: shared.AppPermissionsContentsEnumWrite.ToPointer(),
                Deployments: shared.AppPermissionsDeploymentsEnumRead.ToPointer(),
                Environments: shared.AppPermissionsEnvironmentsEnumRead.ToPointer(),
                Issues: shared.AppPermissionsIssuesEnumWrite.ToPointer(),
                Members: shared.AppPermissionsMembersEnumRead.ToPointer(),
                Metadata: shared.AppPermissionsMetadataEnumRead.ToPointer(),
                OrganizationAdministration: shared.AppPermissionsOrganizationAdministrationEnumRead.ToPointer(),
                OrganizationHooks: shared.AppPermissionsOrganizationHooksEnumWrite.ToPointer(),
                OrganizationPackages: shared.AppPermissionsOrganizationPackagesEnumRead.ToPointer(),
                OrganizationPlan: shared.AppPermissionsOrganizationPlanEnumRead.ToPointer(),
                OrganizationProjects: shared.AppPermissionsOrganizationProjectsEnumWrite.ToPointer(),
                OrganizationSecrets: shared.AppPermissionsOrganizationSecretsEnumRead.ToPointer(),
                OrganizationSelfHostedRunners: shared.AppPermissionsOrganizationSelfHostedRunnersEnumRead.ToPointer(),
                OrganizationUserBlocking: shared.AppPermissionsOrganizationUserBlockingEnumRead.ToPointer(),
                Packages: shared.AppPermissionsPackagesEnumRead.ToPointer(),
                Pages: shared.AppPermissionsPagesEnumWrite.ToPointer(),
                PullRequests: shared.AppPermissionsPullRequestsEnumWrite.ToPointer(),
                RepositoryHooks: shared.AppPermissionsRepositoryHooksEnumWrite.ToPointer(),
                RepositoryProjects: shared.AppPermissionsRepositoryProjectsEnumAdmin.ToPointer(),
                SecretScanningAlerts: shared.AppPermissionsSecretScanningAlertsEnumRead.ToPointer(),
                Secrets: shared.AppPermissionsSecretsEnumWrite.ToPointer(),
                SecurityEvents: shared.AppPermissionsSecurityEventsEnumWrite.ToPointer(),
                SingleFile: shared.AppPermissionsSingleFileEnumRead.ToPointer(),
                Statuses: shared.AppPermissionsStatusesEnumRead.ToPointer(),
                TeamDiscussions: shared.AppPermissionsTeamDiscussionsEnumRead.ToPointer(),
                VulnerabilityAlerts: shared.AppPermissionsVulnerabilityAlertsEnumWrite.ToPointer(),
                Workflows: shared.AppPermissionsWorkflowsEnumWrite.ToPointer(),
            },
            Repositories: []string{
                "rails",
                "rails",
                "rails",
            },
            RepositoryIds: []int64{
                463150,
                565421,
            },
            Target: sdk.String("octocat"),
            TargetID: sdk.Int64(1),
        },
        ClientID: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorization != nil {
        // handle response
    }
}
```

## AppsSuspendInstallation

Suspends a GitHub App on a user, organization, or business account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub Enterprise Server API or webhook events is blocked for that account.

You must use a [JWT](https://docs.github.com/enterprise-server@3.1/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#suspend-an-app-installation>

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
    res, err := s.Apps.AppsSuspendInstallation(ctx, operations.AppsSuspendInstallationRequest{
        InstallationID: 183280,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsUnsuspendInstallation

Removes a GitHub App installation suspension.

You must use a [JWT](https://docs.github.com/enterprise-server@3.1/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#unsuspend-an-app-installation>

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
    res, err := s.Apps.AppsUnsuspendInstallation(ctx, operations.AppsUnsuspendInstallationRequest{
        InstallationID: 204865,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsUpdateWebhookConfigForApp

Updates the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."

You must use a [JWT](https://docs.github.com/enterprise-server@3.1/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/apps#update-a-webhook-configuration-for-an-app>

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
    res, err := s.Apps.AppsUpdateWebhookConfigForApp(ctx, operations.AppsUpdateWebhookConfigForAppRequestBody{
        ContentType: sdk.String(""json""),
        InsecureSsl: &shared.WebhookConfigInsecureSsl{},
        Secret: sdk.String(""********""),
        URL: sdk.String("https://example.com/webhook"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookConfig != nil {
        // handle response
    }
}
```
