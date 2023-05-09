# Carriers

## Overview

carriers


### Available Operations

* [AddFundsToCarrier](#addfundstocarrier) - Add Funds To Carrier
* [GetCarrierByID](#getcarrierbyid) - Get Carrier By ID
* [GetCarrierOptions](#getcarrieroptions) - Get Carrier Options
* [ListCarrierPackageTypes](#listcarrierpackagetypes) - List Carrier Package Types
* [ListCarrierServices](#listcarrierservices) - List Carrier Services
* [ListCarriers](#listcarriers) - List Carriers

## AddFundsToCarrier

Add Funds To A Carrier

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Carriers.AddFundsToCarrier(ctx, operations.AddFundsToCarrierRequest{
        AddFundsToCarrierRequestBody: shared.AddFundsToCarrierRequestBody{
            Amount: 9255.97,
            Currency: "temporibus",
        },
        CarrierID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddFundsToCarrierResponseBody != nil {
        // handle response
    }
}
```

## GetCarrierByID

Retrive carrier info by ID

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Carriers.GetCarrierByID(ctx, operations.GetCarrierByIDRequest{
        CarrierID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCarrierByIDResponseBody != nil {
        // handle response
    }
}
```

## GetCarrierOptions

Get a list of the options available for the carrier

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Carriers.GetCarrierOptions(ctx, operations.GetCarrierOptionsRequest{
        CarrierID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCarrierOptionsResponseBody != nil {
        // handle response
    }
}
```

## ListCarrierPackageTypes

List the package types associated with the carrier

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Carriers.ListCarrierPackageTypes(ctx, operations.ListCarrierPackageTypesRequest{
        CarrierID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCarrierPackageTypesResponseBody != nil {
        // handle response
    }
}
```

## ListCarrierServices

List the services associated with the carrier ID

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Carriers.ListCarrierServices(ctx, operations.ListCarrierServicesRequest{
        CarrierID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCarrierServicesResponseBody != nil {
        // handle response
    }
}
```

## ListCarriers

List all carriers that have been added to this account

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Carriers.ListCarriers(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCarriersResponseBody != nil {
        // handle response
    }
}
```
