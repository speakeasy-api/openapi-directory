# SecretScanning

## Overview

Retrieve secret scanning alerts from a repository.

### Available Operations

* [SecretScanningGetAlert](#secretscanninggetalert) - Get a secret scanning alert
* [SecretScanningListAlertsForEnterprise](#secretscanninglistalertsforenterprise) - List secret scanning alerts for an enterprise
* [SecretScanningListAlertsForRepo](#secretscanninglistalertsforrepo) - List secret scanning alerts for a repository
* [SecretScanningListLocationsForAlert](#secretscanninglistlocationsforalert) - List locations for a secret scanning alert
* [SecretScanningUpdateAlert](#secretscanningupdatealert) - Update a secret scanning alert

## SecretScanningGetAlert

Gets a single secret scanning alert detected in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/secret-scanning#get-a-secret-scanning-alert>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SecretScanning.SecretScanningGetAlert(ctx, operations.SecretScanningGetAlertRequest{
        AlertNumber: 185816,
        Owner: "impedit",
        Repo: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SecretScanningAlert != nil {
        // handle response
    }
}
```

## SecretScanningListAlertsForEnterprise

Lists secret scanning alerts for eligible repositories in an enterprise, from newest to oldest.
To use this endpoint, you must be a member of the enterprise, and you must use an access token with the `repo` scope or `security_events` scope. Alerts are only returned for organizations in the enterprise for which you are an organization owner or a [security manager](https://docs.github.com/github-ae@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-enterprise>

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
    res, err := s.SecretScanning.SecretScanningListAlertsForEnterprise(ctx, operations.SecretScanningListAlertsForEnterpriseRequest{
        After: sdk.String("incidunt"),
        Before: sdk.String("dicta"),
        Direction: shared.DirectionEnumAsc.ToPointer(),
        Enterprise: "corporis",
        PerPage: sdk.Int64(701441),
        Resolution: sdk.String("alias"),
        SecretType: sdk.String("error"),
        Sort: shared.SecretScanningAlertSortEnumCreated.ToPointer(),
        State: shared.SecretScanningAlertStateEnumOpen.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationSecretScanningAlerts != nil {
        // handle response
    }
}
```

## SecretScanningListAlertsForRepo

Lists secret scanning alerts for a private repository, from newest to oldest. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository>

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
    res, err := s.SecretScanning.SecretScanningListAlertsForRepo(ctx, operations.SecretScanningListAlertsForRepoRequest{
        Owner: "id",
        Page: sdk.Int64(388169),
        PerPage: sdk.Int64(401688),
        Repo: "quas",
        Resolution: sdk.String("veritatis"),
        SecretType: sdk.String("ullam"),
        State: shared.SecretScanningAlertStateEnumOpen.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SecretScanningAlerts != nil {
        // handle response
    }
}
```

## SecretScanningListLocationsForAlert

Lists all locations for a given secret scanning alert for a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/secret-scanning#list-locations-for-a-secret-scanning-alert>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SecretScanning.SecretScanningListLocationsForAlert(ctx, operations.SecretScanningListLocationsForAlertRequest{
        AlertNumber: 631719,
        Owner: "incidunt",
        Page: sdk.Int64(462583),
        PerPage: sdk.Int64(169312),
        Repo: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SecretScanningLocations != nil {
        // handle response
    }
}
```

## SecretScanningUpdateAlert

Updates the status of a secret scanning alert in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` write permission to use this endpoint.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/secret-scanning#update-a-secret-scanning-alert>

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
    res, err := s.SecretScanning.SecretScanningUpdateAlert(ctx, operations.SecretScanningUpdateAlertRequest{
        RequestBody: operations.SecretScanningUpdateAlertRequestBody{
            Resolution: shared.SecretScanningAlertResolutionEnumUsedInTests.ToPointer(),
            ResolutionComment: sdk.String("omnis"),
            State: shared.SchemassecretScanningAlertStateEnumOpen,
        },
        AlertNumber: 200950,
        Owner: "maxime",
        Repo: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SecretScanningAlert != nil {
        // handle response
    }
}
```
