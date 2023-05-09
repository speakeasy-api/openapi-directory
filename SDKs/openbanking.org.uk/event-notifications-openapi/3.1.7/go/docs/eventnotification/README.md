# EventNotification

### Available Operations

* [CreateEventNotification](#createeventnotification) - Send an event notification

## CreateEventNotification

Send an event notification

### Example Usage

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
        RequestBody: "quibusdam",
        XFapiFinancialID: "unde",
        XFapiInteractionID: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
