# RootArchive

## Overview

Archival.

### Available Operations

* [DisableArchivalLocation](#disablearchivallocation) - Disable location for archival and modification operations
* [EnableArchivalLocation](#enablearchivallocation) - Enable archival location for archival and modification operations
* [GetAwsAccountID](#getawsaccountid) - Get the AWS account ID of an AWS S3 archival location
* [RefreshArchivalLocationDataSources](#refresharchivallocationdatasources) - Refresh archive information for a list of data sources

## DisableArchivalLocation

Disables archiving and any changes to the data for the specified archival location. This operation disables snapshot upload, snapshot expiration, consolidation, and garbage collection operations on the archival location.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootArchive.DisableArchivalLocation(ctx, operations.DisableArchivalLocationRequest{
        ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnableArchivalLocation

Enable archiving and other operations that were previously disabled on the specified archival location.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootArchive.EnableArchivalLocation(ctx, operations.EnableArchivalLocationRequest{
        ID: "cb739205-9293-496f-aa75-96eb10faaa23",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAwsAccountID

Get the AWS account ID of an AWS S3 archival location.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootArchive.GetAwsAccountID(ctx, operations.GetAwsAccountIDRequest{
        ID: "52c59559-07af-4f1a-ba2f-a9467739251a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StringResponse != nil {
        // handle response
    }
}
```

## RefreshArchivalLocationDataSources

Update the current Rubrik CDM cluster with information about the changes made to a list of data sources in an archival location by the Rubrik CDM cluster that owns the archival location.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootArchive.RefreshArchivalLocationDataSources(ctx, operations.RefreshArchivalLocationDataSourcesRequest{
        ReaderRefreshDataSourcesRequest: shared.ReaderRefreshDataSourcesRequest{
            ArchivalDataSourceIds: []string{
                "enim",
                "odit",
                "quo",
            },
            LocalDataSourceIds: []string{
                "tenetur",
            },
        },
        LocationID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```
