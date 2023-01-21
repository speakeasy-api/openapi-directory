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
            AutnumID: "sit",
        },
        QueryParams: operations.DomainsrdapAutnumGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
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