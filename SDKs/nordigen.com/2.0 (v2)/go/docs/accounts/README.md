# Accounts

### Available Operations

* [RetrieveAccountBalancesV2](#retrieveaccountbalancesv2) - Access account balances.

Balances will be returned in Berlin Group PSD2 format.
* [RetrieveAccountDetailsV2](#retrieveaccountdetailsv2) - Access account details.

Account details will be returned in Berlin Group PSD2 format.
* [RetrieveAccountMetadata](#retrieveaccountmetadata) - Access account metadata.

Information about the account record, such as the processing status and IBAN.

Account status is recalculated based on the error count in the latest req.
* [RetrieveAccountTransactionsV22](#retrieveaccounttransactionsv22) - Access account transactions.

Transactions will be returned in Berlin Group PSD2 format.

## RetrieveAccountBalancesV2

Access account balances.

Balances will be returned in Berlin Group PSD2 format.

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
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Accounts.RetrieveAccountBalancesV2(ctx, operations.RetrieveAccountBalancesV2Request{
        ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveAccountBalancesV2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RetrieveAccountDetailsV2

Access account details.

Account details will be returned in Berlin Group PSD2 format.

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
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Accounts.RetrieveAccountDetailsV2(ctx, operations.RetrieveAccountDetailsV2Request{
        ID: "cb739205-9293-496f-aa75-96eb10faaa23",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveAccountDetailsV2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RetrieveAccountMetadata

Access account metadata.

Information about the account record, such as the processing status and IBAN.

Account status is recalculated based on the error count in the latest req.

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
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Accounts.RetrieveAccountMetadata(ctx, operations.RetrieveAccountMetadataRequest{
        ID: "52c59559-07af-4f1a-ba2f-a9467739251a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## RetrieveAccountTransactionsV22

Access account transactions.

Transactions will be returned in Berlin Group PSD2 format.

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
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Accounts.RetrieveAccountTransactionsV22(ctx, operations.RetrieveAccountTransactionsV22Request{
        DateFrom: types.MustDateFromString("2022-05-14"),
        DateTo: types.MustDateFromString("2022-03-22"),
        ID: "3f5ad019-da1f-4fe7-8f09-7b0074f15471",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveAccountTransactionsV22200ApplicationJSONObject != nil {
        // handle response
    }
}
```
