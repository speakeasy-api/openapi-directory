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
            Name: "corrupti",
        },
        QueryParams: operations.ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Force: false,
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
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