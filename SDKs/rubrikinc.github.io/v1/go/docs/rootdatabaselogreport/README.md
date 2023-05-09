# RootDatabaseLogReport

## Overview

Database log backup report.

### Available Operations

* [QueryLogReport](#querylogreport) - Get the database log backup delay information
* [QueryReportProperties](#queryreportproperties) - Get the database log backup report properties
* [UpdateReportProperties](#updatereportproperties) - Update the database log backup report properties

## QueryLogReport

Get the database log backup delay information.

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
    res, err := s.RootDatabaseLogReport.QueryLogReport(ctx, operations.QueryLogReportRequest{
        DatabaseType: sdk.String("autem"),
        EffectiveSLADomainID: sdk.String("fuga"),
        Limit: sdk.Int(5310),
        Location: sdk.String("rem"),
        LogBackupDelay: sdk.Int(11355),
        Name: sdk.String("Mr. Dwayne Sipes PhD"),
        Offset: sdk.Int(965517),
        SortBy: operations.QueryLogReportSortByEnumLastSnapshotTime.ToPointer(),
        SortOrder: operations.QueryLogReportSortOrderEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DbLogReportSummaryListResponse != nil {
        // handle response
    }
}
```

## QueryReportProperties

Get the properties for the database (SQL and Oracle) log backup delay email notification creation. The properties are logDelayThresholdInMin and logDelayNotificationFrequencyInMin.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
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
    res, err := s.RootDatabaseLogReport.QueryReportProperties(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.DbLogReportProperties != nil {
        // handle response
    }
}
```

## UpdateReportProperties

Update the properties for the database (SQL and Oracle) log backup delay email notification creation. The properties are logDelayThresholdInMin and logDelayNotificationFrequencyInMin.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
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
    res, err := s.RootDatabaseLogReport.UpdateReportProperties(ctx, shared.DbLogReportPropertiesUpdate{
        EnableDelayNotification: sdk.Bool(false),
        LogDelayNotificationFrequencyInMin: sdk.Int64(640907),
        LogDelayThresholdInMin: sdk.Int64(152027),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DbLogReportProperties != nil {
        // handle response
    }
}
```
