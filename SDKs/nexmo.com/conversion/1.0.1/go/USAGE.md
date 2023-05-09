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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Option1: &shared.SecurityOption1{
                APIKey: "YOUR_API_KEY_HERE",
                APISecret: "YOUR_API_KEY_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.SMSConversion.SmsConversion(ctx, operations.SmsConversionRequest{
        Delivered: shared.DeliveredEnumZero,
        MessageID: "provident",
        Timestamp: "distinctio",
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