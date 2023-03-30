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

    req := operations.AcceleratedmobilepageurlAmpUrlsBatchGetRequest{
        QueryParams: operations.AcceleratedmobilepageurlAmpUrlsBatchGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "illum",
            UploadType: "vel",
            UploadProtocol: "error",
        },
        Request: &shared.BatchGetAmpUrlsRequest{
            LookupStrategy: "IN_INDEX_DOC",
            Urls: []string{
                "iure",
                "magnam",
            },
        },
    }

    ctx := context.Background()
    res, err := s.AmpUrls.AcceleratedmobilepageurlAmpUrlsBatchGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetAmpUrlsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->