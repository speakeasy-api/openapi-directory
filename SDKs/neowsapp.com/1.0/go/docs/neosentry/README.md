# Neosentry

## Overview

Operations with Sentry NearEarthObjects

### Available Operations

* [RetrieveSentryRiskData](#retrievesentryriskdata) - Retrieve Sentry (Impact Risk ) Near Earth Objects
* [RetrieveSentryRiskDataByID](#retrievesentryriskdatabyid) - Retrieve Sentry (Impact Risk ) Near Earth Objectby ID 

## RetrieveSentryRiskData

Retrieves Near Earth Objects listed in the NASA sentry data set

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
    res, err := s.Neosentry.RetrieveSentryRiskData(ctx, operations.RetrieveSentryRiskDataRequest{
        IsActive: sdk.Bool(false),
        Page: sdk.Int(857946),
        Size: sdk.Int(544883),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SentryObjectPagingDto != nil {
        // handle response
    }
}
```

## RetrieveSentryRiskDataByID

Retrieves Sentry Near Earth Object by ID

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
    res, err := s.Neosentry.RetrieveSentryRiskDataByID(ctx, operations.RetrieveSentryRiskDataByIDRequest{
        AsteroidID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SentryImpactRiskObject != nil {
        // handle response
    }
}
```
