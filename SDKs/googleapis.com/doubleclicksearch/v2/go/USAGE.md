<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DoubleclicksearchConversionGetRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        AdGroupID: "distinctio",
        AdID: "quibusdam",
        AdvertiserID: "unde",
        AgencyID: "nulla",
        Alt: "media",
        Callback: "illum",
        CampaignID: "vel",
        CriterionID: "error",
        CustomerID: "deserunt",
        EndDate: 384382,
        EngineAccountID: "iure",
        Fields: "magnam",
        Key: "debitis",
        OauthToken: "ipsa",
        PrettyPrint: false,
        QuotaUser: "delectus",
        RowCount: 272656,
        StartDate: 383441,
        StartRow: 477665,
        UploadType: "minus",
        UploadProtocol: "placeat",
    }

    ctx := context.Background()
    res, err := s.Conversion.DoubleclicksearchConversionGet(ctx, req, operations.DoubleclicksearchConversionGetSecurity{
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