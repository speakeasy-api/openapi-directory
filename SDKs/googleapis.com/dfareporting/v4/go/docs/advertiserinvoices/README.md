# AdvertiserInvoices

### Available Operations

* [DfareportingAdvertiserInvoicesList](#dfareportingadvertiserinvoiceslist) - Retrieves a list of invoices for a particular issue month. The api only works if the billing profile invoice level is set to either advertiser or campaign non-consolidated invoice level.

## DfareportingAdvertiserInvoicesList

Retrieves a list of invoices for a particular issue month. The api only works if the billing profile invoice level is set to either advertiser or campaign non-consolidated invoice level.

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
    res, err := s.AdvertiserInvoices.DfareportingAdvertiserInvoicesList(ctx, operations.DfareportingAdvertiserInvoicesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ut"),
        AdvertiserID: "asperiores",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("itaque"),
        IssueMonth: sdk.String("et"),
        Key: sdk.String("eos"),
        MaxResults: sdk.Int64(773355),
        OauthToken: sdk.String("ex"),
        PageToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "natus",
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("laudantium"),
    }, operations.DfareportingAdvertiserInvoicesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvertiserInvoicesListResponse != nil {
        // handle response
    }
}
```
