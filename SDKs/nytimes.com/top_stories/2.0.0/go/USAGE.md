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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Stories.GetSectionFormat(ctx, operations.GetSectionFormatRequest{
        Callback: sdk.String("corrupti"),
        Format: operations.GetSectionFormatFormatEnumJsonp,
        Section: operations.GetSectionFormatSectionEnumTmagazine,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSectionFormat200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->