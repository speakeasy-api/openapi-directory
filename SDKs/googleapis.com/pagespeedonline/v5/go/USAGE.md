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
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            CaptchaToken: "id",
            Category: []PagespeedonlinePagespeedapiRunpagespeedCategoryEnum{
                "PERFORMANCE",
                "SEO",
                "BEST_PRACTICES",
                "PERFORMANCE",
            },
            Fields: "facilis",
            Key: "eum",
            Locale: "iusto",
            OauthToken: "ullam",
            PrettyPrint: false,
            QuotaUser: "saepe",
            Strategy: "STRATEGY_UNSPECIFIED",
            UploadType: "sapiente",
            UploadProtocol: "enim",
            URL: "eum",
            UtmCampaign: "voluptatum",
            UtmSource: "autem",
        },
    }

    ctx := context.Background()
    res, err := s.Pagespeedapi.PagespeedonlinePagespeedapiRunpagespeed(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PagespeedAPIPagespeedResponseV5 != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->