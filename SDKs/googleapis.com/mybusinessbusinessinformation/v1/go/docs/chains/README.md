# Chains

### Available Operations

* [MybusinessbusinessinformationChainsSearch](#mybusinessbusinessinformationchainssearch) - Searches the chain based on chain name.

## MybusinessbusinessinformationChainsSearch

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
    res, err := s.Chains.MybusinessbusinessinformationChainsSearch(ctx, operations.MybusinessbusinessinformationChainsSearchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ratione"),
        ChainName: sdk.String("ex"),
        Fields: sdk.String("laudantium"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("dolor"),
        PageSize: sdk.Int64(980700),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchChainsResponse != nil {
        // handle response
    }
}
```
