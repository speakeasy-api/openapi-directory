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
            DollarXgafv: "2",
            AccessToken: "odit",
            Alt: "json",
            Callback: "sed",
            Fields: "consectetur",
            Key: "quis",
            OauthToken: "unde",
            PageSize: 1643278700194547157,
            PageToken: "accusantium",
            PrettyPrint: true,
            QuotaUser: "eum",
            UploadType: "modi",
            UploadProtocol: "voluptatem",
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