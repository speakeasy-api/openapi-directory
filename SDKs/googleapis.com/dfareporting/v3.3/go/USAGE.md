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

    req := operations.DfareportingAccountActiveAdSummariesGetRequest{
        Security: operations.DfareportingAccountActiveAdSummariesGetSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DfareportingAccountActiveAdSummariesGetPathParams{
            ProfileID: "unde",
            SummaryAccountID: "deserunt",
        },
        QueryParams: operations.DfareportingAccountActiveAdSummariesGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "nulla",
            Alt: "media",
            Callback: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
    }

    ctx := context.Background()
    res, err := s.AccountActiveAdSummaries.DfareportingAccountActiveAdSummariesGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountActiveAdSummary != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->