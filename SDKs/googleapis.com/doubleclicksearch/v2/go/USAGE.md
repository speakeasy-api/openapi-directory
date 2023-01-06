<!-- Start SDK Example Usage -->
```go
package main

import (
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
            AdvertiserID: "quia",
            AgencyID: "et",
            EngineAccountID: "architecto",
        },
        QueryParams: operations.DoubleclicksearchConversionGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "assumenda",
            AdGroupID: "perferendis",
            AdID: "saepe",
            Alt: "proto",
            Callback: "consequuntur",
            CampaignID: "quia",
            CriterionID: "et",
            CustomerID: "sequi",
            EndDate: 8068737254242446709,
            Fields: "quibusdam",
            Key: "ipsum",
            OauthToken: "assumenda",
            PrettyPrint: false,
            QuotaUser: "quidem",
            RowCount: 4349003661882617157,
            StartDate: 4256512249820213041,
            StartRow: 7309891088640560876,
            UploadType: "sint",
            UploadProtocol: "qui",
        },
    }
    
    res, err := s.Conversion.DoubleclicksearchConversionGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversionList != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->