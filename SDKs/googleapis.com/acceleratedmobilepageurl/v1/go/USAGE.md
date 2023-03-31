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
        DollarXgafv: "2",
        BatchGetAmpUrlsRequest: &shared.BatchGetAmpUrlsRequest{
            LookupStrategy: "IN_INDEX_DOC",
            Urls: []string{
                "quibusdam",
                "unde",
                "nulla",
            },
        },
        AccessToken: "corrupti",
        Alt: "proto",
        Callback: "vel",
        Fields: "error",
        Key: "deserunt",
        OauthToken: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
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