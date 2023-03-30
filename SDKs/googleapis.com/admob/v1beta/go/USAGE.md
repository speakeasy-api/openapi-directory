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

    req := operations.AdmobAccountsAdSourcesListRequest{
        PathParams: operations.AdmobAccountsAdSourcesListPathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.AdmobAccountsAdSourcesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PageSize: 423655,
            PageToken: "error",
            PrettyPrint: false,
            QuotaUser: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.AdmobAccountsAdSourcesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAdSourcesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->