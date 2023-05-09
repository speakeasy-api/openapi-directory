# SecretScanning

## Overview

Retrieve secret scanning alerts from a repository.

### Available Operations

* [SecretScanningGetAlert](#secretscanninggetalert) - Get a secret scanning alert
* [SecretScanningListAlertsForEnterprise](#secretscanninglistalertsforenterprise) - List secret scanning alerts for an enterprise
* [SecretScanningListAlertsForOrg](#secretscanninglistalertsfororg) - List secret scanning alerts for an organization
* [SecretScanningListAlertsForRepo](#secretscanninglistalertsforrepo) - List secret scanning alerts for a repository
* [SecretScanningListLocationsForAlert](#secretscanninglistlocationsforalert) - List locations for a secret scanning alert
* [SecretScanningUpdateAlert](#secretscanningupdatealert) - Update a secret scanning alert

## SecretScanningGetAlert

Gets a single secret scanning alert detected in an eligible repository.
To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
For public repositories, you may instead use the `public_repo` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/secret-scanning#get-a-secret-scanning-alert>

### Example Usage

```go
package main

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
        AlertNumber: 112224,
        Owner: "quidem",
        Repo: "sequi",
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
To use this endpoint, you must be a member of the enterprise, and you must use an access token with the `repo` scope or `security_events` scope. Alerts are only returned for organizations in the enterprise for which you are an organization owner or a [security manager](https://docs.github.com/enterprise-server@3.7/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-enterprise>

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
        After: sdk.String("amet"),
        Before: sdk.String("exercitationem"),
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Enterprise: "praesentium",
        PerPage: sdk.Int64(601626),
        Resolution: sdk.String("similique"),
        SecretType: sdk.String("eligendi"),
        Sort: shared.SecretScanningAlertSortEnumUpdated.ToPointer(),
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

## SecretScanningListAlertsForOrg

Lists secret scanning alerts for eligible repositories in an organization, from newest to oldest.
To use this endpoint, you must be an administrator or security manager for the organization, and you must use an access token with the `repo` scope or `security_events` scope.
For public repositories, you may instead use the `public_repo` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-organization>

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
    res, err := s.SecretScanning.SecretScanningListAlertsForOrg(ctx, operations.SecretScanningListAlertsForOrgRequest{
        After: sdk.String("debitis"),
        Before: sdk.String("nobis"),
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Org: "temporibus",
        Page: sdk.Int64(662857),
        PerPage: sdk.Int64(542017),
        Resolution: sdk.String("quibusdam"),
        SecretType: sdk.String("sit"),
        Sort: shared.SecretScanningAlertSortEnumUpdated.ToPointer(),
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

Lists secret scanning alerts for an eligible repository, from newest to oldest.
To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
For public repositories, you may instead use the `public_repo` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository>

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
        After: sdk.String("aliquam"),
        Before: sdk.String("provident"),
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Owner: "earum",
        Page: sdk.Int64(42763),
        PerPage: sdk.Int64(217504),
        Repo: "alias",
        Resolution: sdk.String("doloremque"),
        SecretType: sdk.String("tempora"),
        Sort: shared.SecretScanningAlertSortEnumUpdated.ToPointer(),
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

Lists all locations for a given secret scanning alert for an eligible repository.
To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
For public repositories, you may instead use the `public_repo` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/secret-scanning#list-locations-for-a-secret-scanning-alert>

### Example Usage

```go
package main

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
        AlertNumber: 541009,
        Owner: "officia",
        Page: sdk.Int64(406493),
        PerPage: sdk.Int64(101770),
        Repo: "a",
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

Updates the status of a secret scanning alert in an eligible repository.
To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
For public repositories, you may instead use the `public_repo` scope.

GitHub Apps must have the `secret_scanning_alerts` write permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/secret-scanning#update-a-secret-scanning-alert>

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
            Resolution: shared.SecretScanningAlertResolutionEnumRevoked.ToPointer(),
            State: shared.SchemassecretScanningAlertStateEnumOpen,
        },
        AlertNumber: 801816,
        Owner: "a",
        Repo: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SecretScanningAlert != nil {
        // handle response
    }
}
```
