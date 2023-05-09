# AccountSummaries

### Available Operations

* [AnalyticsadminAccountSummariesList](#analyticsadminaccountsummarieslist) - Returns summaries of all accounts accessible by the caller.

## AnalyticsadminAccountSummariesList

Returns summaries of all accounts accessible by the caller.

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
    res, err := s.AccountSummaries.AnalyticsadminAccountSummariesList(ctx, operations.AnalyticsadminAccountSummariesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("suscipit"),
        PageSize: sdk.Int64(477665),
        PageToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.AnalyticsadminAccountSummariesListSecurity{
        Option1: &operations.AnalyticsadminAccountSummariesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListAccountSummariesResponse != nil {
        // handle response
    }
}
```
