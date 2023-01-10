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
            Email: "sed",
            EndUserType: "individual",
            FriendlyName: "maiores",
            IsoCountry: "asperiores",
            NumberType: "doloremque",
            RegulationSid: "unde",
            StatusCallback: "ducimus",
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