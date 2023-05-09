# Apps

## Overview

Information for integrations and installations.

### Available Operations

* [AppsAddRepoToInstallationForAuthenticatedUser](#appsaddrepotoinstallationforauthenticateduser) - Add a repository to an app installation
* [AppsCheckToken](#appschecktoken) - Check a token
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
* [AppsGetWebhookDelivery](#appsgetwebhookdelivery) - Get a delivery for an app webhook
* [AppsListInstallationReposForAuthenticatedUser](#appslistinstallationreposforauthenticateduser) - List repositories accessible to the user access token
* [AppsListInstallations](#appslistinstallations) - List installations for the authenticated app
* [AppsListInstallationsForAuthenticatedUser](#appslistinstallationsforauthenticateduser) - List app installations accessible to the user access token
* [AppsListReposAccessibleToInstallation](#appslistreposaccessibletoinstallation) - List repositories accessible to the app installation
* [AppsListWebhookDeliveries](#appslistwebhookdeliveries) - List deliveries for an app webhook
* [AppsRedeliverWebhookDelivery](#appsredeliverwebhookdelivery) - Redeliver a delivery for an app webhook
* [AppsRemoveRepoFromInstallationForAuthenticatedUser](#appsremoverepofrominstallationforauthenticateduser) - Remove a repository from an app installation
* [AppsResetToken](#appsresettoken) - Reset a token
* [AppsRevokeInstallationAccessToken](#appsrevokeinstallationaccesstoken) - Revoke an installation access token
* [AppsScopeToken](#appsscopetoken) - Create a scoped access token
* [AppsSuspendInstallation](#appssuspendinstallation) - Suspend an app installation
* [AppsUnsuspendInstallation](#appsunsuspendinstallation) - Unsuspend an app installation
* [AppsUpdateWebhookConfigForApp](#appsupdatewebhookconfigforapp) - Update a webhook configuration for an app

## AppsAddRepoToInstallationForAuthenticatedUser

Add a single repository to an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@3.7/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@3.7/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#add-a-repository-to-an-app-installation>

### Example Usage

```go
package main

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
        InstallationID: 281730,
        RepositoryID: 703495,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsCheckToken

OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.7/rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#check-a-token>

### Example Usage

```go
package main

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
            AccessToken: "cupiditate",
        },
        ClientID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorization != nil {
        // handle response
    }
}
```

## AppsCreateFromManifest

Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#create-a-github-app-from-a-manifest>

### Example Usage

```go
package main

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
        Code: "quae",
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

You must use a [JWT](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps/#create-an-installation-access-token-for-an-app>

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
                Checks: shared.AppPermissionsChecksEnumWrite.ToPointer(),
                Contents: shared.AppPermissionsContentsEnumWrite.ToPointer(),
                Deployments: shared.AppPermissionsDeploymentsEnumWrite.ToPointer(),
                Environments: shared.AppPermissionsEnvironmentsEnumWrite.ToPointer(),
                Issues: shared.AppPermissionsIssuesEnumWrite.ToPointer(),
                Members: shared.AppPermissionsMembersEnumRead.ToPointer(),
                Metadata: shared.AppPermissionsMetadataEnumRead.ToPointer(),
                OrganizationAdministration: shared.AppPermissionsOrganizationAdministrationEnumWrite.ToPointer(),
                OrganizationHooks: shared.AppPermissionsOrganizationHooksEnumRead.ToPointer(),
                OrganizationPackages: shared.AppPermissionsOrganizationPackagesEnumRead.ToPointer(),
                OrganizationPlan: shared.AppPermissionsOrganizationPlanEnumRead.ToPointer(),
                OrganizationProjects: shared.AppPermissionsOrganizationProjectsEnumAdmin.ToPointer(),
                OrganizationSecrets: shared.AppPermissionsOrganizationSecretsEnumWrite.ToPointer(),
                OrganizationSelfHostedRunners: shared.AppPermissionsOrganizationSelfHostedRunnersEnumRead.ToPointer(),
                OrganizationUserBlocking: shared.AppPermissionsOrganizationUserBlockingEnumWrite.ToPointer(),
                Packages: shared.AppPermissionsPackagesEnumWrite.ToPointer(),
                Pages: shared.AppPermissionsPagesEnumWrite.ToPointer(),
                PullRequests: shared.AppPermissionsPullRequestsEnumRead.ToPointer(),
                RepositoryHooks: shared.AppPermissionsRepositoryHooksEnumWrite.ToPointer(),
                RepositoryProjects: shared.AppPermissionsRepositoryProjectsEnumAdmin.ToPointer(),
                SecretScanningAlerts: shared.AppPermissionsSecretScanningAlertsEnumWrite.ToPointer(),
                Secrets: shared.AppPermissionsSecretsEnumRead.ToPointer(),
                SecurityEvents: shared.AppPermissionsSecurityEventsEnumRead.ToPointer(),
                SingleFile: shared.AppPermissionsSingleFileEnumWrite.ToPointer(),
                Statuses: shared.AppPermissionsStatusesEnumWrite.ToPointer(),
                TeamDiscussions: shared.AppPermissionsTeamDiscussionsEnumRead.ToPointer(),
                VulnerabilityAlerts: shared.AppPermissionsVulnerabilityAlertsEnumWrite.ToPointer(),
                Workflows: shared.AppPermissionsWorkflowsEnumWrite.ToPointer(),
            },
            Repositories: []string{
                "rails",
                "rails",
                "rails",
                "rails",
            },
            RepositoryIds: []int64{
                974259,
            },
        },
        InstallationID: 347233,
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

OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.7/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#delete-an-app-authorization>

### Example Usage

```go
package main

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
            AccessToken: "nulla",
        },
        ClientID: "fugit",
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

Uninstalls a GitHub App on a user, organization, or business account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the "[Suspend an app installation](https://docs.github.com/enterprise-server@3.7/rest/reference/apps/#suspend-an-app-installation)" endpoint.

You must use a [JWT](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#delete-an-installation-for-the-authenticated-app>

### Example Usage

```go
package main

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
        InstallationID: 780427,
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

OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.7/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#delete-an-app-token>

### Example Usage

```go
package main

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
            AccessToken: "maiores",
        },
        ClientID: "doloribus",
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

Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/enterprise-server@3.7/rest/reference/apps#list-installations-for-the-authenticated-app)" endpoint.

You must use a [JWT](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#get-the-authenticated-app>

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

If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://docs.github.com/enterprise-server@3.7/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps/#get-an-app>

### Example Usage

```go
package main

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
        AppSlug: "iusto",
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

You must use a [JWT](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#get-an-installation-for-the-authenticated-app>

### Example Usage

```go
package main

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
        InstallationID: 753570,
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

You must use a [JWT](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app>

### Example Usage

```go
package main

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
        Org: "ducimus",
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

You must use a [JWT](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#get-a-repository-installation-for-the-authenticated-app>

### Example Usage

```go
package main

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
        Owner: "alias",
        Repo: "officia",
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

You must use a [JWT](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#get-a-user-installation-for-the-authenticated-app>

### Example Usage

```go
package main

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
        Username: "Domingo.Hills",
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

You must use a [JWT](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#get-a-webhook-configuration-for-an-app>

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

## AppsGetWebhookDelivery

Returns a delivery for the webhook configured for a GitHub App.

You must use a [JWT](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#get-a-delivery-for-an-app-webhook>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Apps.AppsGetWebhookDelivery(ctx, operations.AppsGetWebhookDeliveryRequest{
        DeliveryID: 428224,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HookDelivery != nil {
        // handle response
    }
}
```

## AppsListInstallationReposForAuthenticatedUser

List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The access the user has to each repository is included in the hash under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#list-repositories-accessible-to-the-user-access-token>

### Example Usage

```go
package main

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
        InstallationID: 822118,
        Page: sdk.Int64(297842),
        PerPage: sdk.Int64(189848),
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

You must use a [JWT](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

The permissions the installation has are included under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#list-installations-for-the-authenticated-app>

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
        Outdated: sdk.String("ex"),
        Page: sdk.Int64(511319),
        PerPage: sdk.Int64(120657),
        Since: types.MustTimeFromString("2022-01-08T01:04:15.076Z"),
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

You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You can find the permissions for the installation under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token>

### Example Usage

```go
package main

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
        Page: sdk.Int64(97844),
        PerPage: sdk.Int64(406120),
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

You must use an [installation access token](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#list-repositories-accessible-to-the-app-installation>

### Example Usage

```go
package main

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
        Page: sdk.Int64(862192),
        PerPage: sdk.Int64(569211),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsListReposAccessibleToInstallation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppsListWebhookDeliveries

Returns a list of webhook deliveries for the webhook configured for a GitHub App.

You must use a [JWT](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#list-deliveries-for-an-app-webhook>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Apps.AppsListWebhookDeliveries(ctx, operations.AppsListWebhookDeliveriesRequest{
        Cursor: sdk.String("voluptatibus"),
        PerPage: sdk.Int64(343605),
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

## AppsRedeliverWebhookDelivery

Redeliver a delivery for the webhook configured for a GitHub App.

You must use a [JWT](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#redeliver-a-delivery-for-an-app-webhook>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Apps.AppsRedeliverWebhookDelivery(ctx, operations.AppsRedeliverWebhookDeliveryRequest{
        DeliveryID: 960835,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsRedeliverWebhookDelivery202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppsRemoveRepoFromInstallationForAuthenticatedUser

Remove a single repository from an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@3.7/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@3.7/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#remove-a-repository-from-an-app-installation>

### Example Usage

```go
package main

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
        InstallationID: 788873,
        RepositoryID: 906556,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsResetToken

OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.7/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#reset-a-token>

### Example Usage

```go
package main

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
            AccessToken: "ea",
        },
        ClientID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorization != nil {
        // handle response
    }
}
```

## AppsRevokeInstallationAccessToken

Revokes the installation token you're using to authenticate as an installation and access this endpoint.

Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/enterprise-server@3.7/rest/reference/apps#create-an-installation-access-token-for-an-app)" endpoint.

You must use an [installation access token](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#revoke-an-installation-access-token>

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

Use a non-scoped user-to-server access token to create a repository scoped and/or permission scoped user-to-server access token. You can specify which repositories the token can access and which permissions are granted to the token. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.7/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the `client_id` and `client_secret` of the GitHub App as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/apps/apps#create-a-scoped-access-token>

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
                Contents: shared.AppPermissionsContentsEnumRead.ToPointer(),
                Deployments: shared.AppPermissionsDeploymentsEnumRead.ToPointer(),
                Environments: shared.AppPermissionsEnvironmentsEnumRead.ToPointer(),
                Issues: shared.AppPermissionsIssuesEnumWrite.ToPointer(),
                Members: shared.AppPermissionsMembersEnumRead.ToPointer(),
                Metadata: shared.AppPermissionsMetadataEnumWrite.ToPointer(),
                OrganizationAdministration: shared.AppPermissionsOrganizationAdministrationEnumRead.ToPointer(),
                OrganizationHooks: shared.AppPermissionsOrganizationHooksEnumRead.ToPointer(),
                OrganizationPackages: shared.AppPermissionsOrganizationPackagesEnumRead.ToPointer(),
                OrganizationPlan: shared.AppPermissionsOrganizationPlanEnumRead.ToPointer(),
                OrganizationProjects: shared.AppPermissionsOrganizationProjectsEnumAdmin.ToPointer(),
                OrganizationSecrets: shared.AppPermissionsOrganizationSecretsEnumWrite.ToPointer(),
                OrganizationSelfHostedRunners: shared.AppPermissionsOrganizationSelfHostedRunnersEnumRead.ToPointer(),
                OrganizationUserBlocking: shared.AppPermissionsOrganizationUserBlockingEnumRead.ToPointer(),
                Packages: shared.AppPermissionsPackagesEnumWrite.ToPointer(),
                Pages: shared.AppPermissionsPagesEnumWrite.ToPointer(),
                PullRequests: shared.AppPermissionsPullRequestsEnumRead.ToPointer(),
                RepositoryHooks: shared.AppPermissionsRepositoryHooksEnumRead.ToPointer(),
                RepositoryProjects: shared.AppPermissionsRepositoryProjectsEnumAdmin.ToPointer(),
                SecretScanningAlerts: shared.AppPermissionsSecretScanningAlertsEnumRead.ToPointer(),
                Secrets: shared.AppPermissionsSecretsEnumRead.ToPointer(),
                SecurityEvents: shared.AppPermissionsSecurityEventsEnumRead.ToPointer(),
                SingleFile: shared.AppPermissionsSingleFileEnumWrite.ToPointer(),
                Statuses: shared.AppPermissionsStatusesEnumWrite.ToPointer(),
                TeamDiscussions: shared.AppPermissionsTeamDiscussionsEnumWrite.ToPointer(),
                VulnerabilityAlerts: shared.AppPermissionsVulnerabilityAlertsEnumRead.ToPointer(),
                Workflows: shared.AppPermissionsWorkflowsEnumWrite.ToPointer(),
            },
            Repositories: []string{
                "rails",
                "rails",
            },
            RepositoryIds: []int64{
                752135,
                557369,
            },
            Target: sdk.String("octocat"),
            TargetID: sdk.Int64(1),
        },
        ClientID: "assumenda",
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

You must use a [JWT](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#suspend-an-app-installation>

### Example Usage

```go
package main

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
        InstallationID: 860552,
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

You must use a [JWT](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#unsuspend-an-app-installation>

### Example Usage

```go
package main

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
        InstallationID: 379034,
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

You must use a [JWT](https://docs.github.com/enterprise-server@3.7/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/apps#update-a-webhook-configuration-for-an-app>

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
