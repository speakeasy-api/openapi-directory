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
            AccessToken: "et",
            Alt: "json",
            Callback: "vel",
            Fields: "quia",
            Key: "voluptatibus",
            OauthToken: "beatae",
            PageSize: 3724472702297372290,
            PageToken: "sequi",
            PrettyPrint: false,
            QuotaUser: "occaecati",
            UploadType: "et",
            UploadProtocol: "in",
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