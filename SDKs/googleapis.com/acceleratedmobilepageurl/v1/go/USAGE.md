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
            DollarXgafv: "2",
            AccessToken: "vero",
            Alt: "json",
            Callback: "maxime",
            Fields: "est",
            Key: "natus",
            OauthToken: "possimus",
            PrettyPrint: false,
            QuotaUser: "recusandae",
            UploadType: "saepe",
            UploadProtocol: "dolorem",
        },
        Request: &shared.BatchGetAmpUrlsRequest{
            LookupStrategy: "IN_INDEX_DOC",
            Urls: []string{
                "atque",
                "maiores",
                "beatae",
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