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

    req := operations.LatestPackageRequest{
        PackageName: "corrupti",
    }

    ctx := context.Background()
    res, err := s.LatestPackage(ctx, req, operations.LatestPackageSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersPackageDetailResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->