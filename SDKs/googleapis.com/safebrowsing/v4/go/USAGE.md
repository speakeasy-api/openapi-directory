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
            EncodedRequest: "unde",
        },
        QueryParams: operations.SafebrowsingEncodedFullHashesGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            ClientID: "vero",
            ClientVersion: "perspiciatis",
            Fields: "nulla",
            Key: "nihil",
            OauthToken: "fuga",
            PrettyPrint: false,
            QuotaUser: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
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