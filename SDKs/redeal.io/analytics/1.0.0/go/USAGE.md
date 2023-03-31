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

    req := operations.GetEventsRequest{
        Company: "Medhurst - Rau",
        Deal: "quibusdam",
        Nexttoken: "unde",
        Queryexecutionid: "nulla",
        Site: "corrupti",
        Type: "contacts",
    }

    ctx := context.Background()
    res, err := s.Developers.GetEvents(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.EventRecords != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->