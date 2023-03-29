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

    req := operations.CivicinfoDivisionsSearchRequest{
        QueryParams: operations.CivicinfoDivisionsSearchQueryParams{
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            Query: "nulla",
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
    }

    ctx := context.Background()
    res, err := s.Divisions.CivicinfoDivisionsSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DivisionSearchResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->