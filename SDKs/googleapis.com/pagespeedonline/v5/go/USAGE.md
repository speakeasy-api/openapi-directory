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
    
    req := operations.PagespeedonlinePagespeedapiRunpagespeedRequest{
        Security: operations.PagespeedonlinePagespeedapiRunpagespeedSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.PagespeedonlinePagespeedapiRunpagespeedQueryParams{
            DollarXgafv: "2",
            AccessToken: "dolore",
            Alt: "json",
            Callback: "corporis",
            CaptchaToken: "quis",
            Category: []PagespeedonlinePagespeedapiRunpagespeedCategoryEnum{
                "BEST_PRACTICES",
                "PWA",
            },
            Fields: "et",
            Key: "ut",
            Locale: "ducimus",
            OauthToken: "porro",
            PrettyPrint: true,
            QuotaUser: "fugiat",
            Strategy: "STRATEGY_UNSPECIFIED",
            UploadType: "vero",
            UploadProtocol: "accusantium",
            URL: "pariatur",
            UtmCampaign: "itaque",
            UtmSource: "ipsum",
        },
    }
    
    res, err := s.Pagespeedapi.PagespeedonlinePagespeedapiRunpagespeed(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PagespeedAPIPagespeedResponseV5 != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->