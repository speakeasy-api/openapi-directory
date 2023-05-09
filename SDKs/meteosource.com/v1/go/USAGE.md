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
    res, err := s.LocationEndpoints.FindPlacesFindPlacesGet(ctx, operations.FindPlacesFindPlacesGetRequest{
        Key: sdk.String("corrupti"),
        Language: operations.FindPlacesFindPlacesGetLanguageLanguageEnumFr.ToPointer(),
        Text: "distinctio",
    }, operations.FindPlacesFindPlacesGetSecurity{
        APIKeyHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FindPlacesModels != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->