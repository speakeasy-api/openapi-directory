# Settlementreports

### Available Operations

* [ContentSettlementreportsGet](#contentsettlementreportsget) - Retrieves a settlement report from your Merchant Center account.
* [ContentSettlementreportsList](#contentsettlementreportslist) - Retrieves a list of settlement reports from your Merchant Center account.

## ContentSettlementreportsGet

Retrieves a settlement report from your Merchant Center account.

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
    res, err := s.Settlementreports.ContentSettlementreportsGet(ctx, operations.ContentSettlementreportsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("inventore"),
        Fields: sdk.String("vitae"),
        Key: sdk.String("qui"),
        MerchantID: "unde",
        OauthToken: sdk.String("ex"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        SettlementID: "aliquid",
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.ContentSettlementreportsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SettlementReport != nil {
        // handle response
    }
}
```

## ContentSettlementreportsList

Retrieves a list of settlement reports from your Merchant Center account.

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
    res, err := s.Settlementreports.ContentSettlementreportsList(ctx, operations.ContentSettlementreportsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("blanditiis"),
        Key: sdk.String("et"),
        MaxResults: sdk.Int64(963600),
        MerchantID: "explicabo",
        OauthToken: sdk.String("iste"),
        PageToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        TransferEndDate: sdk.String("aspernatur"),
        TransferStartDate: sdk.String("sapiente"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("laboriosam"),
    }, operations.ContentSettlementreportsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SettlementreportsListResponse != nil {
        // handle response
    }
}
```
