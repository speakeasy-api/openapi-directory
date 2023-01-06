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
    
    req := operations.CreateBundleRequest{
        Security: operations.CreateBundleSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateBundleCreateBundleRequest{
            Email: "illo",
            EndUserType: "business",
            FriendlyName: "architecto",
            IsoCountry: "veniam",
            NumberType: "est",
            RegulationSid: "est",
            StatusCallback: "ea",
        },
    }
    
    res, err := s.CreateBundle(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceBundle != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->