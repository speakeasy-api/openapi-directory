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
    res, err := s.Baggage.BaggageTripAndContact(ctx, operations.BaggageTripAndContactRequest{
        Accept: "corrupti",
        SearchID: "provident",
    }, operations.BaggageTripAndContactSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BaggageTripAndContact200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->