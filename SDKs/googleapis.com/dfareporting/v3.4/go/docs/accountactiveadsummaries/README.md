# AccountActiveAdSummaries

### Available Operations

* [DfareportingAccountActiveAdSummariesGet](#dfareportingaccountactiveadsummariesget) - Gets the account's active ad summary by account ID.

## DfareportingAccountActiveAdSummariesGet

Gets the account's active ad summary by account ID.

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
    res, err := s.AccountActiveAdSummaries.DfareportingAccountActiveAdSummariesGet(ctx, operations.DfareportingAccountActiveAdSummariesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "molestiae",
        QuotaUser: sdk.String("minus"),
        SummaryAccountID: "placeat",
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.DfareportingAccountActiveAdSummariesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountActiveAdSummary != nil {
        // handle response
    }
}
```
