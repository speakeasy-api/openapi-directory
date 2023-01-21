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
    
    req := operations.AnalyticsadminAccountSummariesListRequest{
        Security: operations.AnalyticsadminAccountSummariesListSecurity{
            Option1: &operations.AnalyticsadminAccountSummariesListSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.AnalyticsadminAccountSummariesListQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PageSize: 6044372234677422456,
            PageToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
    }
    
    res, err := s.AccountSummaries.AnalyticsadminAccountSummariesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaListAccountSummariesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->