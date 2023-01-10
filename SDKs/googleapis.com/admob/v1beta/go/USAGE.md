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
            Parent: "temporibus",
        },
        QueryParams: operations.AdmobAccountsAdSourcesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "tenetur",
            Alt: "proto",
            Callback: "officiis",
            Fields: "optio",
            Key: "tenetur",
            OauthToken: "molestiae",
            PageSize: 4341844419008172106,
            PageToken: "sint",
            PrettyPrint: false,
            QuotaUser: "exercitationem",
            UploadType: "quia",
            UploadProtocol: "est",
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