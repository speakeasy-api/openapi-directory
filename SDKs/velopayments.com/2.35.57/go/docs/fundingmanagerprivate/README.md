# FundingManagerPrivate

### Available Operations

* [CreateFundingAccountV2](#createfundingaccountv2) - Create Funding Account
* [DeleteSourceAccountV3](#deletesourceaccountv3) - Delete a source account by ID

## CreateFundingAccountV2

Create Funding Account

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
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.FundingManagerPrivate.CreateFundingAccountV2(ctx, shared.CreateFundingAccountRequestV2{
        AccountName: sdk.String("laborum"),
        AccountNumber: sdk.String("accusamus"),
        Currency: sdk.String("USD"),
        Name: "Toni Haley",
        PayorID: "b9ba88f3-a669-4970-b4ba-4469b6e21419",
        RoutingNumber: sdk.String("ullam"),
        Type: shared.CreateFundingAccountRequestV2TypeEnumWubsDecoupled,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSourceAccountV3

Mark a source account as deleted by ID

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
    res, err := s.FundingManagerPrivate.DeleteSourceAccountV3(ctx, operations.DeleteSourceAccountV3Request{
        SourceAccountID: "890afa56-3e25-416f-a4c8-b711e5b7fd2e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
