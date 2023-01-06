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
            AccessToken: "eaque",
            Alt: "media",
            Callback: "labore",
            CaptchaToken: "rerum",
            Category: []PagespeedonlinePagespeedapiRunpagespeedCategoryEnum{
                "SEO",
                "SEO",
                "BEST_PRACTICES",
            },
            Fields: "omnis",
            Key: "laudantium",
            Locale: "rem",
            OauthToken: "doloremque",
            PrettyPrint: false,
            QuotaUser: "fuga",
            Strategy: "DESKTOP",
            UploadType: "sequi",
            UploadProtocol: "magnam",
            URL: "fugit",
            UtmCampaign: "commodi",
            UtmSource: "numquam",
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