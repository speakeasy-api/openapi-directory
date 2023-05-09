<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LatestPackage(ctx, operations.LatestPackageRequest{
        PackageName: "corrupti",
    }, operations.LatestPackageSecurity{
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