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
            AdvertiserID: "sit",
            AgencyID: "voluptas",
            EngineAccountID: "culpa",
        },
        QueryParams: operations.DoubleclicksearchConversionGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "consequuntur",
            AdGroupID: "dolor",
            AdID: "expedita",
            Alt: "proto",
            Callback: "fugit",
            CampaignID: "et",
            CriterionID: "nihil",
            CustomerID: "rerum",
            EndDate: 7837839688282259259,
            Fields: "debitis",
            Key: "voluptatum",
            OauthToken: "et",
            PrettyPrint: false,
            QuotaUser: "dolorem",
            RowCount: 7259475919510918339,
            StartDate: 7373105480197164748,
            StartRow: 3287288577352441706,
            UploadType: "vitae",
            UploadProtocol: "totam",
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