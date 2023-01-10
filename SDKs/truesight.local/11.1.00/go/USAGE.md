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
    
    req := operations.CollectNowRequest{
        PathParams: operations.CollectNowPathParams{
            DeviceID: 617923154332301311,
        },
        QueryParams: operations.CollectNowQueryParams{
            MonitorClass: "deserunt",
        },
    }
    
    res, err := s.Actions.CollectNow(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->