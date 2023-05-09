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
    res, err := s.EventNotification.CreateEventNotification(ctx, operations.CreateEventNotificationRequest{
        RequestBody: "corrupti",
        XFapiFinancialID: "provident",
        XFapiInteractionID: sdk.String("distinctio"),
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