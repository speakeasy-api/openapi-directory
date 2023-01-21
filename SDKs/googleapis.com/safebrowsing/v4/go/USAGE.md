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
            EncodedRequest: "sit",
        },
        QueryParams: operations.SafebrowsingEncodedFullHashesGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            ClientID: "dolor",
            ClientVersion: "expedita",
            Fields: "voluptas",
            Key: "fugit",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
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