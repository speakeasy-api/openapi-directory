# SecretScanning

## Overview

Retrieve secret scanning alerts from a repository.

### Available Operations

* [SecretScanningGetAlert](#secretscanninggetalert) - Get a secret scanning alert
* [SecretScanningListAlertsForRepo](#secretscanninglistalertsforrepo) - List secret scanning alerts for a repository
* [SecretScanningUpdateAlert](#secretscanningupdatealert) - Update a secret scanning alert

## SecretScanningGetAlert

Gets a single secret scanning alert detected in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/secret-scanning#get-a-secret-scanning-alert>

### Example Usage

```go
package main

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
        AlertNumber: 982445,
        Owner: "inventore",
        Repo: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SecretScanningAlert != nil {
        // handle response
    }
}
```

## SecretScanningListAlertsForRepo

Lists secret scanning alerts for a private repository, from newest to oldest. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository>

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
        Owner: "laudantium",
        Page: sdk.Int64(665872),
        PerPage: sdk.Int64(221329),
        Repo: "aliquid",
        Resolution: sdk.String("consectetur"),
        SecretType: sdk.String("cumque"),
        State: shared.SecretScanningAlertStateEnumResolved.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SecretScanningAlerts != nil {
        // handle response
    }
}
```

## SecretScanningUpdateAlert

Updates the status of a secret scanning alert in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` write permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/secret-scanning#update-a-secret-scanning-alert>

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
        AlertNumber: 237523,
        Owner: "recusandae",
        Repo: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SecretScanningAlert != nil {
        // handle response
    }
}
```
