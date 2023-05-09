# CRMActivities

## Overview

CRM Activity Management

### Available Operations

* [GetV2CrmActivitiesJSON](#getv2crmactivitiesjson) - List crm activities
* [GetV2CrmActivitiesIDJSON](#getv2crmactivitiesidjson) - Fetch a crm activity

## GetV2CrmActivitiesJSON

Fetches multiple crm activity records. The records can be filtered, paged, and sorted according to
the respective parameters.


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
    res, err := s.CRMActivities.GetV2CrmActivitiesJSON(ctx, operations.GetV2CrmActivitiesJSONRequest{
        Ids: []int64{
            959434,
            174112,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(645570),
        PerPage: sdk.Int64(475289),
        SortBy: sdk.String("accusantium"),
        SortDirection: sdk.String("porro"),
        UpdatedAt: []string{
            "quas",
            "praesentium",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV2CrmActivitiesIDJSON

Fetches a crm activity, by ID only.


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
    res, err := s.CRMActivities.GetV2CrmActivitiesIDJSON(ctx, operations.GetV2CrmActivitiesIDJSONRequest{
        ID: "282aa482-562f-4222-a981-7ee17cbe61e6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
