# BillingSubPartnerAPI

## Overview

NOWPayments allows you to create sub-partner accounts for your users, enabling full-fledged crypto billing solution.

### Available Operations

* [GetAllTransfers](#getalltransfers) - Get all transfers
* [GetSubPartnerBalance](#getsubpartnerbalance) - Get sub-partner balance
* [GetSubPartners](#getsubpartners) - Get sub-partners
* [GetTransfer](#gettransfer) - Get transfer

## GetAllTransfers

Returns the entire list of transfers created by your sub-partners.

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
    res, err := s.BillingSubPartnerAPI.GetAllTransfers(ctx, operations.GetAllTransfersRequest{
        ID: sdk.String("111"),
        Limit: sdk.String("10"),
        Offset: sdk.String("0"),
        Order: sdk.String("ASC"),
        Status: sdk.String("CREATED"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllTransfers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSubPartnerBalance

This request can be made only from a whitelisted IP.  
If IP whitelisting is disabled, this request can be made by any user that has an API key.

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
    res, err := s.BillingSubPartnerAPI.GetSubPartnerBalance(ctx, operations.GetSubPartnerBalanceRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
        XAPIKey: sdk.String("{{your_api_key}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSubPartnerBalance200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSubPartners

This method returns the entire list of your sub-partners.

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
    res, err := s.BillingSubPartnerAPI.GetSubPartners(ctx, operations.GetSubPartnersRequest{
        ID: sdk.String("111"),
        Limit: sdk.String("10"),
        Offset: sdk.String("0"),
        Order: sdk.String("DESC"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTransfer

Get the actual information about the transfer. You need to provide the transfer ID in the request.

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
    res, err := s.BillingSubPartnerAPI.GetTransfer(ctx, operations.GetTransferRequest{
        ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTransfer200ApplicationJSONObject != nil {
        // handle response
    }
}
```
