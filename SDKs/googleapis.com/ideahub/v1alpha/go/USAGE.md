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

    req := operations.IdeahubIdeasListRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Filter: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        OrderBy: "vel",
        PageSize: 623564,
        PageToken: "deserunt",
        Parent: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Ideas.IdeahubIdeasList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSearchIdeahubV1alphaListIdeasResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->