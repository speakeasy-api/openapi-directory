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

    req := operations.CreateBundleRequest{
        Security: operations.CreateBundleSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateBundleCreateBundleRequest{
            Email: "Larry_Rau85@yahoo.com",
            EndUserType: "business",
            FriendlyName: "nulla",
            IsoCountry: "nihil",
            NumberType: "fuga",
            RegulationSid: "facilis",
            StatusCallback: "http://humberto.biz",
        },
    }

    ctx := context.Background()
    res, err := s.CreateBundle(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceBundle != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->