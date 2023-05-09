# RootConfigHistory

## Overview

Configuration update history.

### Available Operations

* [QueryConfigurationHistoryUpdates](#queryconfigurationhistoryupdates) - View a list of filtered configuration updates
* [RetrieveConfigurationValues](#retrieveconfigurationvalues) - View a list of configurations and their values on a given date

## QueryConfigurationHistoryUpdates

View a list of cluster configuration options that have updated within a specified time window.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootConfigHistory.QueryConfigurationHistoryUpdates(ctx, operations.QueryConfigurationHistoryUpdatesRequest{
        AfterTime: types.MustTimeFromString("2022-12-27T13:22:49.195Z"),
        APIUser: sdk.String("voluptatem"),
        BeforeTime: types.MustTimeFromString("2022-12-09T17:41:00.537Z"),
        Limit: sdk.Int(229567),
        Name: sdk.String("Hugh Powlowski"),
        Namespace: sdk.String("quasi"),
        NodeID: sdk.String("dicta"),
        Offset: sdk.Int(514922),
        Source: operations.QueryConfigurationHistoryUpdatesSourceEnumUnknown.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigurationUpdateSummaryListResponse != nil {
        // handle response
    }
}
```

## RetrieveConfigurationValues

View a list of configurations and their values on a given date.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootConfigHistory.RetrieveConfigurationValues(ctx, operations.RetrieveConfigurationValuesRequest{
        Limit: sdk.Int(938412),
        Name: sdk.String("Wendy McKenzie"),
        Namespace: "provident",
        NodeID: sdk.String("repudiandae"),
        Offset: sdk.Int(10063),
        OnDate: types.MustTimeFromString("2022-07-11T07:45:44.709Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigurationSummaryListResponse != nil {
        // handle response
    }
}
```
