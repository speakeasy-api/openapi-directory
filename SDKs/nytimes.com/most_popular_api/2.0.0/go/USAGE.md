<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.GETMostemailedSectionTimePeriodJSON(ctx, operations.GETMostemailedSectionTimePeriodJSONRequest{
        Section: shared.SectionEnumPublicEditor,
        TimePeriod: shared.TimePeriodEnumSeven,
    }, operations.GETMostemailedSectionTimePeriodJSONSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETMostemailedSectionTimePeriodJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->