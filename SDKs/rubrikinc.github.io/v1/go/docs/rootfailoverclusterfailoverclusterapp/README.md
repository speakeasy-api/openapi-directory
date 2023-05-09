# RootFailoverClusterFailoverClusterApp

## Overview

Failover cluster apps.

### Available Operations

* [BulkDeleteFailoverClusterApp](#bulkdeletefailoverclusterapp) - Delete failover cluster applications
* [CreateFailoverClusterApp](#createfailoverclusterapp) - Create a failover cluster app
* [DeleteFailoverClusterApp](#deletefailoverclusterapp) - Delete a failover cluster app
* [GetFailoverClusterApp](#getfailoverclusterapp) - Get details of a failover cluster app
* [QueryFailoverClusterApp](#queryfailoverclusterapp) - Get a summary of all failover cluster apps
* [UpdateFailoverClusterApp](#updatefailoverclusterapp) - Update a failover cluster app

## BulkDeleteFailoverClusterApp

Delete failover cluster applications from Rubrik cluster.

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
    res, err := s.RootFailoverClusterFailoverClusterApp.BulkDeleteFailoverClusterApp(ctx, operations.BulkDeleteFailoverClusterAppRequest{
        Ids: []string{
            "velit",
            "eius",
            "esse",
            "in",
        },
        PreserveSnapshots: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateFailoverClusterApp

Create a failover cluster app.

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
    res, err := s.RootFailoverClusterFailoverClusterApp.CreateFailoverClusterApp(ctx, shared.FailoverClusterAppConfig{
        ConfiguredSLADomainID: sdk.String("eligendi"),
        FailoverClusterAppSource: shared.FailoverClusterAppSource{
            NodeOrders: []shared.FailoverClusterNodeOrder{
                shared.FailoverClusterNodeOrder{
                    NodeID: "neque",
                    NodeName: "vero",
                    Order: 566312,
                },
            },
            VirtualIps: []string{
                "qui",
            },
        },
        FailoverClusterID: "impedit",
        FailoverClusterType: shared.FailoverClusterTypeEnumWindows,
        Name: "Cheryl Conn",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FailoverClusterAppSummary != nil {
        // handle response
    }
}
```

## DeleteFailoverClusterApp

Delete a failover cluster app.

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
    res, err := s.RootFailoverClusterFailoverClusterApp.DeleteFailoverClusterApp(ctx, operations.DeleteFailoverClusterAppRequest{
        ID: "0960a668-151a-4472-af92-3c5949f83f35",
        PreserveSnapshots: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFailoverClusterApp

Get details of a failover cluster app.

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
    res, err := s.RootFailoverClusterFailoverClusterApp.GetFailoverClusterApp(ctx, operations.GetFailoverClusterAppRequest{
        ID: "0cf876ff-b901-4c6e-8bb4-e243cf789ffa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FailoverClusterAppDetail != nil {
        // handle response
    }
}
```

## QueryFailoverClusterApp

Get a summary of all failover cluster apps.

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
    res, err := s.RootFailoverClusterFailoverClusterApp.QueryFailoverClusterApp(ctx, operations.QueryFailoverClusterAppRequest{
        Limit: sdk.Int(979287),
        Name: sdk.String("Drew Nolan"),
        Offset: sdk.Int(887701),
        OperatingSystemType: operations.QueryFailoverClusterAppOperatingSystemTypeEnumHpux.ToPointer(),
        PrimaryClusterID: sdk.String("officia"),
        SLAAssignment: operations.QueryFailoverClusterAppSLAAssignmentEnumUnassigned.ToPointer(),
        SortBy: operations.QueryFailoverClusterAppSortByEnumName.ToPointer(),
        SortOrder: operations.QueryFailoverClusterAppSortOrderEnumAsc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FailoverClusterAppSummaryListResponse != nil {
        // handle response
    }
}
```

## UpdateFailoverClusterApp

Update the failover cluster app with specified properties.

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
    res, err := s.RootFailoverClusterFailoverClusterApp.UpdateFailoverClusterApp(ctx, operations.UpdateFailoverClusterAppRequest{
        FailoverClusterAppConfig: shared.FailoverClusterAppConfig{
            ConfiguredSLADomainID: sdk.String("repudiandae"),
            FailoverClusterAppSource: shared.FailoverClusterAppSource{
                NodeOrders: []shared.FailoverClusterNodeOrder{
                    shared.FailoverClusterNodeOrder{
                        NodeID: "officia",
                        NodeName: "impedit",
                        Order: 97896,
                    },
                },
                VirtualIps: []string{
                    "eius",
                    "quisquam",
                    "eos",
                },
            },
            FailoverClusterID: "nobis",
            FailoverClusterType: shared.FailoverClusterTypeEnumUnixLike,
            Name: "Randy Gutkowski",
        },
        ID: "88373a40-e194-42f3-ae55-055756f5d56d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FailoverClusterAppSummary != nil {
        // handle response
    }
}
```
