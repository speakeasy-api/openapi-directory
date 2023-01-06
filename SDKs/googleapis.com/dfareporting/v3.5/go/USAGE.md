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
            ProfileID: "repellat",
            SummaryAccountID: "dolor",
        },
        QueryParams: operations.DfareportingAccountActiveAdSummariesGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "et",
            Alt: "media",
            Callback: "et",
            Fields: "nam",
            Key: "repudiandae",
            OauthToken: "ea",
            PrettyPrint: true,
            QuotaUser: "nisi",
            UploadType: "corrupti",
            UploadProtocol: "id",
        },
    }
    
    res, err := s.AccountActiveAdSummaries.DfareportingAccountActiveAdSummariesGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountActiveAdSummary != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->