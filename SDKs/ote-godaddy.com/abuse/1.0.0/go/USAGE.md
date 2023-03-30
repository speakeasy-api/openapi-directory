<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateTicketRequest{
        Request: shared.AbuseTicketCreate{
            Info: "corrupti",
            InfoURL: "provident",
            Intentional: false,
            Proxy: "distinctio",
            Source: "quibusdam",
            Target: "unde",
            Type: "PHISHING",
        },
    }

    ctx := context.Background()
    res, err := s.V1.CreateTicket(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->