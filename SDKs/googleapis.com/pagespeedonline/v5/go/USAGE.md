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
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            CaptchaToken: "consequuntur",
            Category: []PagespeedonlinePagespeedapiRunpagespeedCategoryEnum{
                "ACCESSIBILITY",
                "SEO",
            },
            Fields: "fugit",
            Key: "et",
            Locale: "nihil",
            OauthToken: "rerum",
            PrettyPrint: false,
            QuotaUser: "debitis",
            Strategy: "STRATEGY_UNSPECIFIED",
            UploadType: "et",
            UploadProtocol: "ut",
            URL: "dolorem",
            UtmCampaign: "et",
            UtmSource: "voluptate",
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