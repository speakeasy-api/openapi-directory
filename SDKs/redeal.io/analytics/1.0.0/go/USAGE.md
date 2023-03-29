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
        QueryParams: operations.GetEventsQueryParams{
            Company: "Medhurst - Rau",
            Deal: "nulla",
            Nexttoken: "id",
            Queryexecutionid: "vero",
            Site: "perspiciatis",
            Type: "contacts",
        },
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