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
    res, err := s.Scans.GetAPIV1Scans(ctx, operations.GetAPIV1ScansRequest{
        Name: sdk.String("Terrence Rau"),
        PerPage: sdk.String("nulla"),
    }, operations.GetAPIV1ScansSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->