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
    res, err := s.DeleteAPIV1AnnouncementsIDReactionsName(ctx, operations.DeleteAPIV1AnnouncementsIDReactionsNameRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
        Name: "Christopher Hills",
    }, operations.DeleteAPIV1AnnouncementsIDReactionsNameSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAPIV1AnnouncementsIDReactionsName200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->