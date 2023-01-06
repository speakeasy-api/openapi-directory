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
            EncodedRequest: "tenetur",
        },
        QueryParams: operations.SafebrowsingEncodedFullHashesGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "perferendis",
            Alt: "json",
            Callback: "et",
            ClientID: "perferendis",
            ClientVersion: "voluptates",
            Fields: "ut",
            Key: "aperiam",
            OauthToken: "minima",
            PrettyPrint: false,
            QuotaUser: "quam",
            UploadType: "consequatur",
            UploadProtocol: "pariatur",
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