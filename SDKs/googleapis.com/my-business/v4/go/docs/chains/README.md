# Chains

### Available Operations

* [MybusinessChainsGet](#mybusinesschainsget) - Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.
* [MybusinessChainsSearch](#mybusinesschainssearch) - Searches the chain based on chain name.

## MybusinessChainsGet

Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.

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
    res, err := s.Chains.MybusinessChainsGet(ctx, operations.MybusinessChainsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consectetur"),
        Fields: sdk.String("vitae"),
        Key: sdk.String("inventore"),
        Name: "Lauren Deckow",
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("soluta"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("rem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Chain != nil {
        // handle response
    }
}
```

## MybusinessChainsSearch

Searches the chain based on chain name.

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
    res, err := s.Chains.MybusinessChainsSearch(ctx, operations.MybusinessChainsSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("alias"),
        ChainDisplayName: sdk.String("magni"),
        Fields: sdk.String("vel"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("quae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        ResultCount: sdk.Int64(208253),
        UploadType: sdk.String("exercitationem"),
        UploadProtocol: sdk.String("itaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchChainsResponse != nil {
        // handle response
    }
}
```
