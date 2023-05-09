# Insurance

## Overview

insurance


### Available Operations

* [AddFundsToInsurance](#addfundstoinsurance) - Add Funds To Insurance
* [ConnectInsurer](#connectinsurer) - Connect a Shipsurance Account
* [DisconnectInsurer](#disconnectinsurer) - Disconnect a Shipsurance Account
* [GetInsuranceBalance](#getinsurancebalance) - Get Insurance Funds Balance

## AddFundsToInsurance

You may need to auto fund your account from time to time. For example, if you don't normally ship items over $100,
and may want to add funds to insurance rather than keeping the account funded.


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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Insurance.AddFundsToInsurance(ctx, shared.AddFundsToInsuranceRequestBody{
        Amount: 3682.41,
        Currency: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddFundsToInsuranceResponseBody != nil {
        // handle response
    }
}
```

## ConnectInsurer

Connect a Shipsurance Account

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Insurance.ConnectInsurer(ctx, shared.ConnectInsurerRequestBody{
        Email: "john.doe@example.com",
        PolicyID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectInsurerResponseBody != nil {
        // handle response
    }
}
```

## DisconnectInsurer

Disconnect a Shipsurance Account

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
    res, err := s.Insurance.DisconnectInsurer(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.DisconnectInsurerResponseBody != nil {
        // handle response
    }
}
```

## GetInsuranceBalance

Retrieve the balance of your Shipsurance account.

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
    res, err := s.Insurance.GetInsuranceBalance(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInsuranceBalanceResponseBody != nil {
        // handle response
    }
}
```
