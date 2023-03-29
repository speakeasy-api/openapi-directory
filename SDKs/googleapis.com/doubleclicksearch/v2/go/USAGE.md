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
            AdvertiserID: "unde",
            AgencyID: "deserunt",
            EngineAccountID: "porro",
        },
        QueryParams: operations.DoubleclicksearchConversionGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "id",
            AdGroupID: "vero",
            AdID: "perspiciatis",
            Alt: "proto",
            Callback: "nihil",
            CampaignID: "fuga",
            CriterionID: "facilis",
            CustomerID: "eum",
            EndDate: 437587,
            Fields: "ullam",
            Key: "saepe",
            OauthToken: "inventore",
            PrettyPrint: false,
            QuotaUser: "sapiente",
            RowCount: 272656,
            StartDate: 383441,
            StartRow: 477665,
            UploadType: "autem",
            UploadProtocol: "vel",
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