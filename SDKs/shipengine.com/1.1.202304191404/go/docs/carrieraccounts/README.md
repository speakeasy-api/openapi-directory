# CarrierAccounts

## Overview

carrier accounts


### Available Operations

* [ConnectCarrier](#connectcarrier) - Connect a carrier account
* [DisconnectCarrier](#disconnectcarrier) - Disconnect a carrier
* [GetCarrierSettings](#getcarriersettings) - Get carrier settings
* [UpdateCarrierSettings](#updatecarriersettings) - Update carrier settings

## ConnectCarrier

Connect a carrier account

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CarrierAccounts.ConnectCarrier(ctx, operations.ConnectCarrierRequest{
        CarrierName: shared.CarrierNameEnumFedex,
        ConnectCarrierRequestBody: shared.ConnectCarrierRequestBody{},
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectCarrierResponseBody != nil {
        // handle response
    }
}
```

## DisconnectCarrier

Disconnect a carrier

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
    res, err := s.CarrierAccounts.DisconnectCarrier(ctx, operations.DisconnectCarrierRequest{
        CarrierID: "se-28529731",
        CarrierName: shared.CarrierNameEnumDpd,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```

## GetCarrierSettings

Get carrier settings

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
    res, err := s.CarrierAccounts.GetCarrierSettings(ctx, operations.GetCarrierSettingsRequest{
        CarrierID: "se-28529731",
        CarrierName: shared.CarrierNameWithSettingsEnumNewgistics,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCarrierSettingsResponseBody != nil {
        // handle response
    }
}
```

## UpdateCarrierSettings

Update carrier settings

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CarrierAccounts.UpdateCarrierSettings(ctx, operations.UpdateCarrierSettingsRequest{
        CarrierID: "se-28529731",
        CarrierName: shared.CarrierNameWithSettingsEnumFedex,
        UpdateCarrierSettingsRequestBody: shared.UpdateCarrierSettingsRequestBody{},
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```
