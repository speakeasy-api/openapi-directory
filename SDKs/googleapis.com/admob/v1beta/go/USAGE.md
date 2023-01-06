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
    
    req := operations.AdmobAccountsAdSourcesListRequest{
        PathParams: operations.AdmobAccountsAdSourcesListPathParams{
            Parent: "nesciunt",
        },
        QueryParams: operations.AdmobAccountsAdSourcesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "debitis",
            Alt: "media",
            Callback: "ut",
            Fields: "sint",
            Key: "optio",
            OauthToken: "aut",
            PageSize: 7147025795779270845,
            PageToken: "corporis",
            PrettyPrint: false,
            QuotaUser: "eaque",
            UploadType: "facilis",
            UploadProtocol: "quidem",
        },
    }
    
    res, err := s.Accounts.AdmobAccountsAdSourcesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAdSourcesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->