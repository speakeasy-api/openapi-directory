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
    
    req := operations.AcceleratedmobilepageurlAmpUrlsBatchGetRequest{
        QueryParams: operations.AcceleratedmobilepageurlAmpUrlsBatchGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptatem",
            Alt: "proto",
            Callback: "dolores",
            Fields: "quis",
            Key: "facere",
            OauthToken: "doloremque",
            PrettyPrint: true,
            QuotaUser: "aut",
            UploadType: "reiciendis",
            UploadProtocol: "cum",
        },
        Request: &shared.BatchGetAmpUrlsRequest{
            LookupStrategy: "IN_INDEX_DOC",
            Urls: []string{
                "sapiente",
            },
        },
    }
    
    res, err := s.AmpUrls.AcceleratedmobilepageurlAmpUrlsBatchGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetAmpUrlsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->