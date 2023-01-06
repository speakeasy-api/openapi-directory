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
    
    req := operations.DomainsrdapAutnumGetRequest{
        PathParams: operations.DomainsrdapAutnumGetPathParams{
            AutnumID: "rerum",
        },
        QueryParams: operations.DomainsrdapAutnumGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "natus",
            Alt: "proto",
            Callback: "eos",
            Fields: "quae",
            Key: "ipsa",
            OauthToken: "dignissimos",
            PrettyPrint: false,
            QuotaUser: "eveniet",
            UploadType: "perspiciatis",
            UploadProtocol: "iste",
        },
    }
    
    res, err := s.Autnum.DomainsrdapAutnumGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.RdapResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->