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
    
    req := operations.CreateSinkRequest{
        Security: operations.CreateSinkSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateSinkCreateSinkRequest{
            Description: "sit",
            SinkConfiguration: "voluptas",
            SinkType: "webhook",
        },
    }
    
    res, err := s.CreateSink(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsV1Sink != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->