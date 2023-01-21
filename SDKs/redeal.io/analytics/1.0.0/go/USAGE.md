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
    
    req := operations.GetEventsRequest{
        QueryParams: operations.GetEventsQueryParams{
            Company: "sit",
            Deal: "voluptas",
            Nexttoken: "culpa",
            Queryexecutionid: "expedita",
            Site: "consequuntur",
            Type: "clicks",
        },
    }
    
    res, err := s.Developers.GetEvents(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.EventRecords != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->