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

    req := operations.DomainsrdapAutnumGetRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        AutnumID: "quibusdam",
        Callback: "unde",
        Fields: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        PrettyPrint: false,
        QuotaUser: "vel",
        UploadType: "error",
        UploadProtocol: "deserunt",
    }

    ctx := context.Background()
    res, err := s.Autnum.DomainsrdapAutnumGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.RdapResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->