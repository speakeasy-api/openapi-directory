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
    
    req := operations.SafebrowsingEncodedFullHashesGetRequest{
        PathParams: operations.SafebrowsingEncodedFullHashesGetPathParams{
            EncodedRequest: "libero",
        },
        QueryParams: operations.SafebrowsingEncodedFullHashesGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "quo",
            Alt: "proto",
            Callback: "deserunt",
            ClientID: "amet",
            ClientVersion: "numquam",
            Fields: "tenetur",
            Key: "sit",
            OauthToken: "reiciendis",
            PrettyPrint: false,
            QuotaUser: "et",
            UploadType: "unde",
            UploadProtocol: "aut",
        },
    }
    
    res, err := s.EncodedFullHashes.SafebrowsingEncodedFullHashesGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSecuritySafebrowsingV4FindFullHashesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->