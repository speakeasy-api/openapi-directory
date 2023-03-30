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
        Security: operations.DoubleclicksearchConversionGetSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DoubleclicksearchConversionGetPathParams{
            AdvertiserID: "corrupti",
            AgencyID: "provident",
            EngineAccountID: "distinctio",
        },
        QueryParams: operations.DoubleclicksearchConversionGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "unde",
            AdGroupID: "nulla",
            AdID: "corrupti",
            Alt: "proto",
            Callback: "vel",
            CampaignID: "error",
            CriterionID: "deserunt",
            CustomerID: "suscipit",
            EndDate: 437587,
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
        },
    }

    ctx := context.Background()
    res, err := s.Conversion.DoubleclicksearchConversionGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversionList != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->