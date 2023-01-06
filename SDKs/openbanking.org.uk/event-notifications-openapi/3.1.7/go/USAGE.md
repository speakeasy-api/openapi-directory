<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CreateEventNotificationRequest{
        Headers: operations.CreateEventNotificationHeaders{
            XFapiFinancialID: "autem",
            XFapiInteractionID: "autem",
        },
        Request: "ex",
    }
    
    res, err := s.EventNotification.CreateEventNotification(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->