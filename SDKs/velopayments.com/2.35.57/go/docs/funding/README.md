# Funding

## Overview

<p>APIs for initiating funding of source accounts from external sources and viewing balance updates</p>


### Available Operations

* [~~CreateFundingRequestV2~~](#createfundingrequestv2) - Create Funding Request :warning: **Deprecated**
* [CreateFundingRequestV3](#createfundingrequestv3) - Create Funding Request
* [GetFundingAccountV2](#getfundingaccountv2) - Get Funding Account
* [GetFundingAccountsV2](#getfundingaccountsv2) - Get Funding Accounts
* [GetFundingByIDV1](#getfundingbyidv1) - Get Funding
* [ListFundingAuditDeltas](#listfundingauditdeltas) - Get Funding Audit Delta

## ~~CreateFundingRequestV2~~

Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo  (202 - accepted, 400 - invalid request body, 404 - source account not found).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Funding.CreateFundingRequestV2(ctx, operations.CreateFundingRequestV2Request{
        FundingRequestV2: shared.FundingRequestV2{
            Amount: 548814,
        },
        SourceAccountID: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateFundingRequestV3

<p>Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo</p>


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
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Funding.CreateFundingRequestV3(ctx, operations.CreateFundingRequestV3Request{
        FundingRequestV3: shared.FundingRequestV3{
            Amount: 20218,
            FundingAccountID: "5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb",
        },
        SourceAccountID: "73920592-9396-4fea-b596-eb10faaa2352",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFundingAccountV2

Get Funding Account by ID

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
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Funding.GetFundingAccountV2(ctx, operations.GetFundingAccountV2Request{
        FundingAccountID: "c5955907-aff1-4a3a-afa9-467739251aa5",
        Sensitive: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FundingAccountResponseV2 != nil {
        // handle response
    }
}
```

## GetFundingAccountsV2

Get the funding accounts.

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
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Funding.GetFundingAccountsV2(ctx, operations.GetFundingAccountsV2Request{
        Country: sdk.String("US"),
        Currency: sdk.String("USD"),
        Name: sdk.String("Angelica Dietrich"),
        Page: sdk.Int(662527),
        PageSize: sdk.Int(820994),
        PayorID: sdk.String("019da1ff-e78f-4097-b007-4f15471b5e6e"),
        Sensitive: sdk.Bool(false),
        Sort: sdk.String("quae"),
        Type: sdk.String("FBO"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFundingAccountsResponseV2 != nil {
        // handle response
    }
}
```

## GetFundingByIDV1

Get Funding by Id

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
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Funding.GetFundingByIDV1(ctx, operations.GetFundingByIDV1Request{
        FundingID: "3b99d488-e1e9-41e4-90ad-2abd44269802",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FundingResponse != nil {
        // handle response
    }
}
```

## ListFundingAuditDeltas

Get funding audit deltas for a payor

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
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Funding.ListFundingAuditDeltas(ctx, operations.ListFundingAuditDeltasRequest{
        Page: sdk.Int(828940),
        PageSize: sdk.Int(369808),
        PayorID: "02a94bb4-f63c-4969-a9a3-efa77dfb14cd",
        UpdatedSince: types.MustTimeFromString("2022-08-09T06:36:34.417Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse != nil {
        // handle response
    }
}
```
