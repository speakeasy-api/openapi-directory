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

    req := operations.ResellerCustomersGetRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        CustomerID: "unde",
        Fields: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        PrettyPrint: false,
        QuotaUser: "vel",
        UploadType: "error",
        UploadProtocol: "deserunt",
    }

    ctx := context.Background()
    res, err := s.Customers.ResellerCustomersGet(ctx, req, operations.ResellerCustomersGetSecurity{
        Option1: &operations.ResellerCustomersGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Customer != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->