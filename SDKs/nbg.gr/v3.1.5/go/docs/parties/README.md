# Parties

### Available Operations

* [GetAccountsAccountIDParties](#getaccountsaccountidparties) - Get Parties
* [GetAccountsAccountIDParty](#getaccountsaccountidparty) - Get Party
* [GetParty](#getparty) - Get Party

## GetAccountsAccountIDParties

Get Parties by Account ID

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
    res, err := s.Parties.GetAccountsAccountIDParties(ctx, operations.GetAccountsAccountIDPartiesRequest{
        AccountID: "impedit",
        SandboxID: "cum",
        XCustomerUserAgent: sdk.String("esse"),
        XFapiAuthDate: sdk.String("ipsum"),
        XFapiCustomerIPAddress: sdk.String("excepturi"),
        XFapiInteractionID: sdk.String("aspernatur"),
    }, operations.GetAccountsAccountIDPartiesSecurity{
        AuthorizationCodeToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OBReadParty3 != nil {
        // handle response
    }
}
```

## GetAccountsAccountIDParty

Get Party by Account ID

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
    res, err := s.Parties.GetAccountsAccountIDParty(ctx, operations.GetAccountsAccountIDPartyRequest{
        AccountID: "perferendis",
        SandboxID: "ad",
        XCustomerUserAgent: sdk.String("natus"),
        XFapiAuthDate: sdk.String("sed"),
        XFapiCustomerIPAddress: sdk.String("iste"),
        XFapiInteractionID: sdk.String("dolor"),
    }, operations.GetAccountsAccountIDPartySecurity{
        AuthorizationCodeToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OBReadParty2 != nil {
        // handle response
    }
}
```

## GetParty

Get Party

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
    res, err := s.Parties.GetParty(ctx, operations.GetPartyRequest{
        SandboxID: "natus",
        XCustomerUserAgent: sdk.String("laboriosam"),
        XFapiAuthDate: sdk.String("hic"),
        XFapiCustomerIPAddress: sdk.String("saepe"),
        XFapiInteractionID: sdk.String("fuga"),
    }, operations.GetPartySecurity{
        AuthorizationCodeToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OBReadParty2 != nil {
        // handle response
    }
}
```
