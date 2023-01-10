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
            AutnumID: "asperiores",
        },
        QueryParams: operations.DomainsrdapAutnumGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "debitis",
            Alt: "json",
            Callback: "esse",
            Fields: "ad",
            Key: "ea",
            OauthToken: "sint",
            PrettyPrint: false,
            QuotaUser: "consequatur",
            UploadType: "et",
            UploadProtocol: "ipsa",
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