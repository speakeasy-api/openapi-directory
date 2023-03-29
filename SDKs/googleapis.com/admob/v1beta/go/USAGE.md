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
            Parent: "unde",
        },
        QueryParams: operations.AdmobAccountsAdSourcesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PageSize: 423655,
            PageToken: "fuga",
            PrettyPrint: false,
            QuotaUser: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
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