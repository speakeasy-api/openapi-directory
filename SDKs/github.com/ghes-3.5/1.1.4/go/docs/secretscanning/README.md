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
<https://docs.github.com/enterprise-server@3.5/rest/reference/secret-scanning#get-a-secret-scanning-alert>

### Example Usage

```go
package main

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
        AlertNumber: 531494,
        Owner: "iusto",
        Repo: "quod",
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
To use this endpoint, you must be a member of the enterprise, and you must use an access token with the `repo` scope or `security_events` scope. Alerts are only returned for organizations in the enterprise for which you are an organization owner or a [security manager](https://docs.github.com/enterprise-server@3.5/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-enterprise>

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
        After: sdk.String("voluptatibus"),
        Before: sdk.String("voluptas"),
        Enterprise: "non",
        PerPage: sdk.Int64(353819),
        Resolution: sdk.String("laborum"),
        SecretType: sdk.String("voluptas"),
        State: shared.SecretScanningAlertStateEnumResolved.ToPointer(),
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

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-organization>

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
        Org: "animi",
        Page: sdk.Int64(925994),
        PerPage: sdk.Int64(359453),
        Resolution: sdk.String("non"),
        SecretType: sdk.String("necessitatibus"),
        State: shared.SecretScanningAlertStateEnumResolved.ToPointer(),
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
<https://docs.github.com/enterprise-server@3.5/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository>

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
        Owner: "maiores",
        Page: sdk.Int64(386538),
        PerPage: sdk.Int64(30426),
        Repo: "optio",
        Resolution: sdk.String("sequi"),
        SecretType: sdk.String("sunt"),
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
<https://docs.github.com/enterprise-server@3.5/rest/reference/secret-scanning#list-locations-for-a-secret-scanning-alert>

### Example Usage

```go
package main

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
        AlertNumber: 973096,
        Owner: "doloremque",
        Page: sdk.Int64(149498),
        PerPage: sdk.Int64(227741),
        Repo: "rerum",
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
<https://docs.github.com/enterprise-server@3.5/rest/reference/secret-scanning#update-a-secret-scanning-alert>

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
            Resolution: shared.SecretScanningAlertResolutionEnumWontFix.ToPointer(),
            State: shared.SchemassecretScanningAlertStateEnumOpen,
        },
        AlertNumber: 836991,
        Owner: "ratione",
        Repo: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SecretScanningAlert != nil {
        // handle response
    }
}
```
