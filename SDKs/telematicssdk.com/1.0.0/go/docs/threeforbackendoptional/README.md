# ThreeForBackEndOptional

## Overview

# Introduction
The methods are required to have an admin authentication.

# How to get admin credentials
Please create admin credentials in [Datahub](https://userdatahub.com) and use method v1/Auth/Login (1. User management)

# Scheme
![Admin statistics integration](https://website-cliparts-datamotion.s3.us-east-2.amazonaws.com/Dev.portal/admin+statistics+integration.png)

### Available Operations

* [RootV1ScoringsConsolidated](#rootv1scoringsconsolidated) - /v1/Scorings/consolidated
* [RootV1ScoringsConsolidatedDaily](#rootv1scoringsconsolidateddaily) - /v1/Scorings/consolidated/daily
* [RootV1StatisticsConsolidated](#rootv1statisticsconsolidated) - /v1/Statistics/consolidated
* [RootV1StatisticsConsolidatedDaily](#rootv1statisticsconsolidateddaily) - /v1/Statistics/consolidated/daily

## RootV1ScoringsConsolidated

/v1/Scorings/consolidated

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
    res, err := s.ThreeForBackEndOptional.RootV1ScoringsConsolidated(ctx, operations.RootV1ScoringsConsolidatedRequest{
        AppID: sdk.String("nulla"),
        CompanyID: sdk.String("corrupti"),
        DeviceToken: sdk.String("illum"),
        EndDate: sdk.String("2021-01-18T01:04:22.840Z"),
        InstanceID: sdk.String("vel"),
        StartDate: sdk.String("2021-01-17T01:04:22.840Z"),
        Tag: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RootV1ScoringsConsolidatedDaily

/v1/Scorings/consolidated/daily

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
    res, err := s.ThreeForBackEndOptional.RootV1ScoringsConsolidatedDaily(ctx, operations.RootV1ScoringsConsolidatedDailyRequest{
        AppID: sdk.String("deserunt"),
        CompanyID: sdk.String("suscipit"),
        DeviceToken: sdk.String("iure"),
        EndDate: sdk.String("2021-01-18T01:04:22.840Z"),
        InstanceID: sdk.String("magnam"),
        StartDate: sdk.String("2021-01-17T01:04:22.840Z"),
        Tag: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RootV1ScoringsConsolidatedDaily200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RootV1StatisticsConsolidated

/v1/Statistics/consolidated

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
    res, err := s.ThreeForBackEndOptional.RootV1StatisticsConsolidated(ctx, operations.RootV1StatisticsConsolidatedRequest{
        AppID: sdk.String("ipsa"),
        CompanyID: sdk.String("delectus"),
        DeviceToken: sdk.String("tempora"),
        EndDate: sdk.String("2021-03-18"),
        InstanceID: sdk.String("suscipit"),
        StartDate: sdk.String("2021-01-18"),
        Tag: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RootV1StatisticsConsolidatedDaily

/v1/Statistics/consolidated/daily

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
    res, err := s.ThreeForBackEndOptional.RootV1StatisticsConsolidatedDaily(ctx, operations.RootV1StatisticsConsolidatedDailyRequest{
        AppID: sdk.String("minus"),
        CompanyID: sdk.String("placeat"),
        DeviceToken: sdk.String("voluptatum"),
        EndDate: sdk.String("2021-01-18"),
        InstanceID: sdk.String("iusto"),
        StartDate: sdk.String("2021-01-17"),
        Tag: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
