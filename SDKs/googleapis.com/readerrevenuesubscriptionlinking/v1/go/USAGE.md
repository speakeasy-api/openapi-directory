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

    req := operations.ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteRequest{
        PathParams: operations.ReaderrevenuesubscriptionlinkingPublicationsReadersDeletePathParams{
            Name: "unde",
        },
        QueryParams: operations.ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Force: false,
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
    }

    ctx := context.Background()
    res, err := s.Publications.ReaderrevenuesubscriptionlinkingPublicationsReadersDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReaderResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->