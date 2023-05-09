# Services

## Overview

The Brain consists of several software components with their own responsibilities, referred to as "services".
Some of these services have status information and/or configuration that can be managed using the `services` resource.


### Available Operations

* [GetServiceByID](#getservicebyid) - Get service
* [GetServices](#getservices) - Get all services
* [UpdateService](#updateservice) - Update existing service

## GetServiceByID

Get service

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
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Services.GetServiceByID(ctx, operations.GetServiceByIDRequest{
        ID: "4c26071f-93f5-4f06-82da-c7af515cc413",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Service != nil {
        // handle response
    }
}
```

## GetServices

Get all services

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
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Services.GetServices(ctx, operations.GetServicesRequest{
        After: types.MustTimeFromString("2021-09-04T08:55:11.388Z"),
        AfterID: sdk.String("suscipit"),
        Before: sdk.String("velit"),
        BeforeID: sdk.String("culpa"),
        From: sdk.String("est"),
        FromID: sdk.String("recusandae"),
        ID: sdk.String("5b7d6cbd7503c445552a1664"),
        IDOnly: sdk.Bool(false),
        Limit: sdk.Int64(517309),
        Name: sdk.String("Foo Bar"),
        Populate: sdk.String("fugiat"),
        ResultsOnly: sdk.Bool(false),
        Select: sdk.String("vel"),
        Sort: sdk.String("ducimus"),
        TimeCreated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeUpdated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeoutS: sdk.Float64(5546.88),
        Until: sdk.String("vel"),
        UntilID: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServices200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateService

Update existing service

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
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Services.UpdateService(ctx, operations.UpdateServiceRequest{
        ServiceInput: shared.ServiceInput{
            ConfigRequest: map[string]interface{}{
                "facilis": "cum",
                "commodi": "in",
                "corporis": "reiciendis",
                "assumenda": "nemo",
            },
            RestartRequest: sdk.Bool(true),
        },
        ID: "e60b375e-d4f6-4fbe-a41f-33317fe35b60",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```
