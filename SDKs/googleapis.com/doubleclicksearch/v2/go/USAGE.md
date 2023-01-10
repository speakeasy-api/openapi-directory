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
            AdvertiserID: "omnis",
            AgencyID: "nesciunt",
            EngineAccountID: "non",
        },
        QueryParams: operations.DoubleclicksearchConversionGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "aut",
            AdGroupID: "reprehenderit",
            AdID: "iste",
            Alt: "media",
            Callback: "dolor",
            CampaignID: "voluptas",
            CriterionID: "qui",
            CustomerID: "sequi",
            EndDate: 8364161452162830366,
            Fields: "odit",
            Key: "et",
            OauthToken: "suscipit",
            PrettyPrint: true,
            QuotaUser: "ad",
            RowCount: 5886645646246062940,
            StartDate: 887084586441570373,
            StartRow: 3255355928524481789,
            UploadType: "ut",
            UploadProtocol: "id",
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