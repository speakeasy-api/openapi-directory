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
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            Query: "illum",
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
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