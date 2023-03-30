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

    req := operations.SafebrowsingEncodedFullHashesGetRequest{
        PathParams: operations.SafebrowsingEncodedFullHashesGetPathParams{
            EncodedRequest: "corrupti",
        },
        QueryParams: operations.SafebrowsingEncodedFullHashesGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            ClientID: "nulla",
            ClientVersion: "corrupti",
            Fields: "illum",
            Key: "vel",
            OauthToken: "error",
            PrettyPrint: false,
            QuotaUser: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
        },
    }

    ctx := context.Background()
    res, err := s.EncodedFullHashes.SafebrowsingEncodedFullHashesGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSecuritySafebrowsingV4FindFullHashesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->