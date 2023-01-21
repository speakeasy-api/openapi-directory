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
    
    req := operations.LatestPackageRequest{
        Security: operations.LatestPackageSecurity{
            RhIdentity: shared.SchemeRhIdentity{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.LatestPackagePathParams{
            PackageName: "sit",
        },
    }
    
    res, err := s.LatestPackage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersPackageDetailResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->