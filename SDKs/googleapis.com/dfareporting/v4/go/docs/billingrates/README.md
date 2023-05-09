# BillingRates

### Available Operations

* [DfareportingBillingRatesList](#dfareportingbillingrateslist) - Retrieves a list of billing rates. This method supports paging.

## DfareportingBillingRatesList

Retrieves a list of billing rates. This method supports paging.

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
    res, err := s.BillingRates.DfareportingBillingRatesList(ctx, operations.DfareportingBillingRatesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumProto.ToPointer(),
        BillingProfileID: "dolore",
        Callback: sdk.String("optio"),
        Fields: sdk.String("quo"),
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "libero",
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.DfareportingBillingRatesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingRatesListResponse != nil {
        // handle response
    }
}
```
