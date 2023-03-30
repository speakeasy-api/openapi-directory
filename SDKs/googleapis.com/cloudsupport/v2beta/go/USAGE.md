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

    req := operations.CloudsupportCaseClassificationsSearchRequest{
        Security: operations.CloudsupportCaseClassificationsSearchSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.CloudsupportCaseClassificationsSearchQueryParams{
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PageSize: 847252,
            PageToken: "vel",
            PrettyPrint: false,
            Query: "error",
            QuotaUser: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
        },
    }

    ctx := context.Background()
    res, err := s.CaseClassifications.CloudsupportCaseClassificationsSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchCaseClassificationsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->