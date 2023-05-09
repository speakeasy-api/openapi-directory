# Quotas

### Available Operations

* [ContentQuotasList](#contentquotaslist) - Lists the daily call quota and usage per method for your Merchant Center account.

## ContentQuotasList

Lists the daily call quota and usage per method for your Merchant Center account.

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
    res, err := s.Quotas.ContentQuotasList(ctx, operations.ContentQuotasListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("dolore"),
        Key: sdk.String("enim"),
        MerchantID: "alias",
        OauthToken: sdk.String("blanditiis"),
        PageSize: sdk.Int64(264204),
        PageToken: sdk.String("illo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.ContentQuotasListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMethodQuotasResponse != nil {
        // handle response
    }
}
```
