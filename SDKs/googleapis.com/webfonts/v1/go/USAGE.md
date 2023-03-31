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

    req := operations.WebfontsWebfontsListRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        OauthToken: "corrupti",
        PrettyPrint: false,
        QuotaUser: "illum",
        Sort: "DATE",
        UploadType: "error",
        UploadProtocol: "deserunt",
    }

    ctx := context.Background()
    res, err := s.Webfonts.WebfontsWebfontsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.WebfontList != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->