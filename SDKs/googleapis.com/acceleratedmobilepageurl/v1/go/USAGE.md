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
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.BatchGetAmpUrlsRequest{
            LookupStrategy: "IN_INDEX_DOC",
            Urls: []string{
                "iusto",
                "ullam",
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