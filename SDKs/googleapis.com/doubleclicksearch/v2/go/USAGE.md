<!-- Start SDK Example Usage -->
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
    res, err := s.Conversion.DoubleclicksearchConversionGet(ctx, operations.DoubleclicksearchConversionGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        AdGroupID: sdk.String("distinctio"),
        AdID: sdk.String("quibusdam"),
        AdvertiserID: "unde",
        AgencyID: "nulla",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illum"),
        CampaignID: sdk.String("vel"),
        CriterionID: sdk.String("error"),
        CustomerID: sdk.String("deserunt"),
        EndDate: 384382,
        EngineAccountID: "iure",
        Fields: sdk.String("magnam"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        RowCount: 272656,
        StartDate: 383441,
        StartRow: 477665,
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.DoubleclicksearchConversionGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversionList != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->