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
        PathParams: operations.DomainsrdapAutnumGetPathParams{
            AutnumID: "corrupti",
        },
        QueryParams: operations.DomainsrdapAutnumGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
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