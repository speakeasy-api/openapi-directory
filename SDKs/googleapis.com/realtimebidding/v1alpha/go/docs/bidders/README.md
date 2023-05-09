# Bidders

### Available Operations

* [RealtimebiddingBiddersBiddingFunctionsActivate](#realtimebiddingbiddersbiddingfunctionsactivate) - Activates an existing bidding function. An activated function is available for invocation for the server-side TURTLEDOVE simulations.
* [RealtimebiddingBiddersBiddingFunctionsArchive](#realtimebiddingbiddersbiddingfunctionsarchive) - Archives an existing bidding function. An archived function will not be available for function invocation for the server-side TURTLEDOVE simulations unless it is activated.
* [RealtimebiddingBiddersBiddingFunctionsCreate](#realtimebiddingbiddersbiddingfunctionscreate) - Creates a new bidding function.
* [RealtimebiddingBiddersBiddingFunctionsList](#realtimebiddingbiddersbiddingfunctionslist) - Lists the bidding functions that a bidder currently has registered.

## RealtimebiddingBiddersBiddingFunctionsActivate

Activates an existing bidding function. An activated function is available for invocation for the server-side TURTLEDOVE simulations.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Bidders.RealtimebiddingBiddersBiddingFunctionsActivate(ctx, operations.RealtimebiddingBiddersBiddingFunctionsActivateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "excepturi": "nisi",
            "recusandae": "temporibus",
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        Name: "Estelle Will",
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.RealtimebiddingBiddersBiddingFunctionsActivateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BiddingFunction != nil {
        // handle response
    }
}
```

## RealtimebiddingBiddersBiddingFunctionsArchive

Archives an existing bidding function. An archived function will not be available for function invocation for the server-side TURTLEDOVE simulations unless it is activated.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Bidders.RealtimebiddingBiddersBiddingFunctionsArchive(ctx, operations.RealtimebiddingBiddersBiddingFunctionsArchiveRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "esse": "totam",
            "porro": "dolorum",
            "dicta": "nam",
            "officia": "occaecati",
        },
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("optio"),
        Key: sdk.String("totam"),
        Name: "Lucy Krajcik",
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.RealtimebiddingBiddersBiddingFunctionsArchiveSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BiddingFunction != nil {
        // handle response
    }
}
```

## RealtimebiddingBiddersBiddingFunctionsCreate

Creates a new bidding function.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Bidders.RealtimebiddingBiddersBiddingFunctionsCreate(ctx, operations.RealtimebiddingBiddersBiddingFunctionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BiddingFunctionInput: &shared.BiddingFunctionInput{
            BiddingFunction: sdk.String("aspernatur"),
            Name: sdk.String("Cathy Mosciski"),
            Type: shared.BiddingFunctionTypeEnumFunctionTypeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("in"),
        Parent: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.RealtimebiddingBiddersBiddingFunctionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BiddingFunction != nil {
        // handle response
    }
}
```

## RealtimebiddingBiddersBiddingFunctionsList

Lists the bidding functions that a bidder currently has registered.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Bidders.RealtimebiddingBiddersBiddingFunctionsList(ctx, operations.RealtimebiddingBiddersBiddingFunctionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("est"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("laborum"),
        PageSize: sdk.Int64(170909),
        PageToken: sdk.String("dolorem"),
        Parent: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("enim"),
    }, operations.RealtimebiddingBiddersBiddingFunctionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBiddingFunctionsResponse != nil {
        // handle response
    }
}
```
