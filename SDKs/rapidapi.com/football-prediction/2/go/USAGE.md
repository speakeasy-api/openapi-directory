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
    res, err := s.GetAPIV2ListFederations(ctx, operations.GetAPIV2ListFederationsRequest{
        XRapidAPIKey: sdk.String("89bd9d8d-69a6-474e-8f46-7cc8796ed151"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIV2ListFederations200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->